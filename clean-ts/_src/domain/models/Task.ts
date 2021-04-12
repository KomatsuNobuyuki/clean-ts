import dayjs from 'dayjs';

export class Task {
  private _id: number
  private _title: string
  private _description: string
  private _createdAt: dayjs.Dayjs
  private _updatedAt: dayjs.Dayjs

  constructor(title: string, description: string) {
    this._title = title;
    this._description = description;
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

  set createdAt(createdAt: dayjs.Dayjs) {
    this._createdAt = createdAt;
  }

  get updatedAt() {
    return this._updatedAt;
  }

  set updatedAt(updatedAt: dayjs.Dayjs) {
    this._updatedAt = updatedAt;
  }
}