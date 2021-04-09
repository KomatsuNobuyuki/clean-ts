export class Task {
  private _id: number
  private _title: string
  private _description: string
  private _createdAt: string
  private _updatedAt: string

  constructor(id: number, title: string, description: string, createdAt: string, updatedAt: string) {
    this._id = id;
    this._title = title;
    this._description = description;
    this._createdAt = createdAt;
    this._updatedAt = updatedAt;
  }

  get id(): number {
    return this._id;
  }

  set id(id: number) {
    this._id = id;
  }

  get title(): string {
    return this._title;
  }

  set title(title: string) {
    this._title = title;
  }

  get description() {
    return this._description;
  }

  set description(description: string) {
    this._description = description;
  }

  get createdAt() {
    return this._createdAt;
  }

  set createdAt(createdAt: string) {
    this._createdAt = createdAt;
  }

  get updatedAt() {
    return this._updatedAt;
  }

  set updatedAt(updatedAt: string) {
    this._updatedAt = updatedAt;
  }
}