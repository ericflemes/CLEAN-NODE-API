export class InvalidParamError extends Error {
  constructor (paramName: string) {
    super('Invalid pram:' + paramName)
    this.name = 'InvalidParamError'
  }
}
