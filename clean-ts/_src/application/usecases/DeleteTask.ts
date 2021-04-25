import { ITaskRepository } from '../repositories/ITaskRepository';

export class DeleteTask {
  private _taskRepository: ITaskRepository;

  constructor(taskRepository: ITaskRepository) {
    this._taskRepository = taskRepository;
  }

  async execute(id: number) {
    const task = await this._taskRepository.findOne(id);

    return this._taskRepository.delete(task);
  }
}