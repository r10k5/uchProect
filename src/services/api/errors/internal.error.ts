export class Internal extends Error {
  constructor(
    message: string,
    private readonly context?: unknown
  ) {
    super(message)
    this.name = 'Internal'
  }

  getContext<T>(): T | undefined {
    return this.context as T
  }
}
