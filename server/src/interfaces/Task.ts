export interface ITask {
  _id: string;
  title: string;
  projectId: string;
}

export interface ICreateTaskInput {
  title: string;
  projectId: string;
}
export interface ICreateTaskInput {
  title: string;
  projectId: string;
}

export interface IUpdateTaskInput {
  taskId: string;
  title?: string;
  projectId: string;
}

export interface IGetTaskInput {
  _id: string;
}
