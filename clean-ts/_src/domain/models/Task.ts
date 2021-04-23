import dayjs from 'dayjs';
import timezone from "dayjs/plugin/timezone";
import utc from "dayjs/plugin/utc";

dayjs.extend(timezone);
dayjs.extend(utc);
dayjs.tz.setDefault("Asia/Tokyo");

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

  getJSTCreatedAt(): string | null {
    if (this._createdAt) {
      return  this._createdAt.tz().format('YYYY-MM-DD HH:mm:ss');
    }

    return null;
  }

  getJSTUpdetedAt(): string | null {
    if(this._updatedAt) {
      return  this._updatedAt.tz().format('YYYY-MM-DD HH:mm:ss');
    }

    return null
  }
}