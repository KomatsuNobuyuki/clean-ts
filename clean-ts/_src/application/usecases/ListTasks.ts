import { ITaskRepository } from '../repositories/ITaskRepository';

export class ListTasks {
  private _taskRepository: ITaskRepository

  constructor(taskRepository: ITaskRepository) {
    this._taskRepository = taskRepository
  }

  async execute() {
    return this._taskRepository.findAll();
  }
}