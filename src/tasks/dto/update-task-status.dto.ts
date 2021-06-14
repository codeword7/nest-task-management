import { IsEnum } from 'class-validator';
import { TasksStatus } from '../task.model';

export class UpdateTaskStatusDto {
  @IsEnum(TasksStatus)
  status: TasksStatus;
}
