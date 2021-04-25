import  { ITaskRepository } from '../repositories/ITaskRepository';
import dayjs from 'dayjs';

export class UpdateTask {
  private _taskRepository: ITaskRepository

  constructor(taskRepository: ITaskRepository) {
    this._taskRepository = taskRepository
  }

  async execute(id: number, title: string, description: string) {
    let task = await this._taskRepository.findOne(id);

    task.title = title;
    task.description = description;
    task.updatedAt = dayjs();

    return this._taskRepository.update(task);
  }
}