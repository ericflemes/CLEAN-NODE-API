export class MissingParamError extends Error {
  constructor (paramName: string) {
    super('Missing pram:' + paramName)
    this.name = 'MissingParamError'
  }
}
