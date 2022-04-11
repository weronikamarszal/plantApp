export class BaseModel<T> {

  constructor(source: Partial<T> = {}) {
    Object.assign(this, source)
  }
}
