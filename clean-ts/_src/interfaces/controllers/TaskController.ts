import { TaskSerializer } from '../serializers/Taskserializer';
import { TaskRepository } from '../database/TaskRepository';
import { ListTasks } from '../../application/usecases/ListTasks';
import { GetTask } from '../../application/usecases/GetTask';
import { CreateTask } from '../../application/usecases/CreateTask';
import { UpdateTask } from '../../application/usecases/UpdateTask';
import { DeleteTask } from '../../application/usecases/DeleteTask';
import { IDBConnection } from '../database/IDBConnection';

export class TaskController {
  private _taskSerializer: TaskSerializer
  private _taskRepository: TaskRepository
  constructor(dbConnection: IDBConnection) {
    this._taskSerializer = new TaskSerializer();
    this._taskRepository = new TaskRepository(dbConnection);
  }

  async findOne(req: any) {
    const { id } = req.params;
    const useCase = new GetTask(this._taskRepository);
    const result = await useCase.execute(id);

    return this._taskSerializer.serialize(result);
  }

  async findAll() {
    const useCase = new ListTasks(this._taskRepository)
    const results = await useCase.execute();

    return this._taskSerializer.serialize(results);
  }

  async create(req: any) {
    const { title, description } = req.body;
    const useCase = new CreateTask(this._taskRepository);
    const result = await useCase.execute(title, description);

    return this._taskSerializer.serialize(result);
  }

  async update(req: any) {
    const { id } = req.params;
    const { title, description } = req.body;
    const useCase = new UpdateTask(this._taskRepository);
    const result = await useCase.execute(id, title, description);

    return this._taskSerializer.serialize(result);
  }

  async delete(req: any) {
    const { id } = req.params;
    const useCase = new DeleteTask(this._taskRepository)
    const result = await useCase.execute(id);

    return this._taskSerializer.serialize(result);
  }
}