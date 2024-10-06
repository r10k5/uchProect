export class Unknown extends Error {
  constructor(
    message: string,
    private readonly context?: unknown
  ) {
    super(message)
    this.name = 'Unknown'
  }

  getContext<T>(): T | undefined {
    return this.context as T
  }
}
