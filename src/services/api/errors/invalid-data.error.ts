export class InvalidData extends Error {
  constructor(
    message: string,
    private readonly context?: unknown
  ) {
    super(message)
    this.name = 'InvalidData'
  }

  getContext<T>(): T | undefined {
    return this.context as T
  }
}
