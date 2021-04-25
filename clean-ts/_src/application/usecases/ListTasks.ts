import { ITaskRepository } from '../repositories/ITaskRepository';

export class ListTasks {
  private _taskRepository: ITaskRepository

  constructor(taskRepository: ITaskRepository) {
    this._taskRepository = taskRepository
  }

  execute() {
    return this._taskRepository.findAll();
  }
}