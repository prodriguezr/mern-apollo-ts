export interface IProject {
  _id: string;
  name: string;
  description?: string;
  createdAt: string;
  updatedAt: string;
}

export interface ICreateProjectInput {
  name: string;
  description?: string;
}

export interface IUpdateProjectInput {
  projectId: string;
  name?: string;
  description?: string;
}

export interface IGetProjectInput {
  _id: string;
}
