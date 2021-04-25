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

  async findOne(id: number): Promise<Task> {
    const task = await this._connection.execute(
      'select * from tasks where id = ? limit 1',
      id
    );

    return task;
  }

  async findAll(): Promise<Array<Task>> {
    const tasks = await this._connection.execute('select * from tasks');

    return tasks;
  }

  async update(task: Task): Promise<Task> {
    const updateTask = await this._connection.execute(
      'update tasks set title = ?, description = ?, updated_at = ?, where id = ?',
      [task.title, task.description, task.getJSTUpdetedAt(), task.id]
    );

    return updateTask;
  }

  async delete(task: Task): Promise<Task> {
    const deleteTask = await this._connection.execute(
      'delete tasks where id = ?',
      task.id
    );

    return deleteTask;
  }
}