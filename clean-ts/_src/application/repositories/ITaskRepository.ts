import { Task } from '../../domain/models/Task';

export abstract class ITaskRepository {
  abstract findAll(): Promise<Array<Task>>
  abstract findOne(id: number): Promise<Task>
  abstract update(task: Task): Promise<Task>
  abstract delete(task: Task): Promise<Task>
  abstract persist(task: Task): Promise<Task>
}