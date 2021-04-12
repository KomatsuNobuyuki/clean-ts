import { Task } from '../../domain/models/Task';

export abstract class ITaskRepository {
  abstract findAll(): Promise<Array<Task>>
  abstract findOne(): Promise<Task>
  abstract update(): Promise<Task>
  abstract delete(): Promise<Task>
  abstract persist(): Promise<Task>
}