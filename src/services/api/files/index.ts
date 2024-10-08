import { AxiosError, type AxiosInstance } from 'axios'
import type { IRefresh } from '../auth/auth.types'
import { mapError } from '../errors/mapper'
import type { CreateFileResponse } from './types'

export class FilesApi {
  constructor(
    private readonly axios: AxiosInstance,
    private readonly refreshPort: IRefresh
  ) {}

  async upload(file: File) {
    const refreshResult = await this.refreshPort.refresh()

    if (!refreshResult) {
      throw new Error('Access denied')
    }

    const formData = new FormData()
    formData.append('file', file)

    let result
    try {
      result = await this.axios.post<CreateFileResponse>('/files', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      })
    } catch (error) {
      if (error instanceof AxiosError) {
        throw mapError(error.response?.data)
      }

      throw error
    }

    return result.data.file
  }
}
