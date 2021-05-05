import { Task } from '../../domain/models/Task';
import dayjs from 'dayjs';
import timezone from "dayjs/plugin/timezone";
import utc from "dayjs/plugin/utc";

dayjs.extend(timezone);
dayjs.extend(utc);
dayjs.tz.setDefault("Asia/Tokyo");

const _serializeSingleTask = (task: Task) => {
  return {
    id: task.id,
    title: task.title,
    description: task.description,
    createdAt: dayjs(task.createdAt)
      .tz()
      .format(),
    updatedAt: dayjs(task.updatedAt)
      .tz()
      .format(),
  }
}

export class TaskSerializer {
  serialize(data: any) {
    if(!data) {
      throw new Error('expect data to be not undefined or null');
    }
    if (Array.isArray(data)) {
      return data.map(_serializeSingleTask)
    }
    return _serializeSingleTask(data)
  }
}