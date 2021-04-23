import { Task } from '../../domain/models/Task';
import { ITaskRepository } from '../../application/repositories/ITaskRepository';
import { IDBConnection } from './IDBConnection';
import dayjs from 'dayjs';

export class TaskRepository extends ITaskRepository {
  private _connection: any
  constructor(connection: IDBConnection) {
    super();
    this._connection = connection;
  }

  async persist(task: Task): Promise<Task> {
    let result = await this._connection.execute(
      'insert into tasks (title, description, created_at, updated_at) values (?, ?, ?, ?)',
      [
        task.title,
        task.description,
        task.getJSTCreatedAt(),
        task.getJSTUpdetedAt()
      ]
    )
    task.id = result.insertId
    return task
  }
}