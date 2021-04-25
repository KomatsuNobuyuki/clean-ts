import { ITaskRepository } from '../repositories/ITaskRepository';

export class GetTask {
  private _taskRepository: ITaskRepository

  constructor(taskrepository: ITaskRepository) {
    this._taskRepository = taskrepository;
  }

  async execute(id: number) {
    return this._taskRepository.findOne(id);
  }
}