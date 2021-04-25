import { ITaskRepository } from '../repositories/ITaskRepository';

export class GetTask {
  private _taskRepository: ITaskRepository

  constructor(taskrepository: ITaskRepository) {
    this._taskRepository = taskrepository;
  }

  execute(id: number) {
    return this._taskRepository.findOne(id);
  }
}