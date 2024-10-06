export type AuthorizationResponse = {
  access_token: string
  expires: number
}

export interface IRefresh {
  refresh(): Promise<boolean>
  isAuthorized(): boolean
}