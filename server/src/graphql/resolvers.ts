import {
  ICreateProjectInput,
  ICreateTaskInput,
  IGetProjectInput,
  IGetTaskInput,
  IProject,
  IUpdateProjectInput,
  IUpdateTaskInput,
  ITask,
} from '../interfaces';
import { Project, Task } from '../models';

export const resolvers = {
  Query: {
    hello: () => 'Hello, World!',
    projects: async () => await Project.find(),
    project: async (_: any, { _id }: IGetProjectInput) =>
      await Project.findById(_id),
    tasks: async () => await Task.find(),
    task: async (_: any, { _id }: IGetTaskInput) => await Task.findById(_id),
  },
  Mutation: {
    createProject: async (
      _: unknown,
      { name, description }: ICreateProjectInput
    ) => {
      const project = new Project({ name, description });

      const newProject = await project.save();

      return newProject;
    },
    updateProject: async (_: unknown, args: IUpdateProjectInput) => {
      const updatedProject = await Project.findByIdAndUpdate(
        args.projectId,
        args,
        {
          new: true,
        }
      );

      if (!updatedProject)
        throw new Error(`Project with id '${args.projectId}' not found`);

      return updatedProject;
    },
    createTask: async (_: unknown, { title, projectId }: ICreateTaskInput) => {
      const existProject = await Project.findById(projectId);

      if (!existProject)
        throw new Error(`Project with the id '${projectId}' is not found`);

      const task = new Task({ title, projectId });

      const newTask = await task.save();

      return newTask;
    },
    deleteProject: async (_: unknown, { projectId }: { projectId: string }) => {
      const deletedProject = await Project.findByIdAndDelete(projectId);

      if (!deletedProject)
        throw new Error(`Project with the id '${projectId}' is not found`);

      return deletedProject;
    },
    deleteTask: async (_: unknown, { taskId }: { taskId: string }) => {
      const deletedTask = await Task.findByIdAndDelete(taskId);

      if (!deletedTask)
        throw new Error(`Task with the id '${taskId}' is not found`);

      return deletedTask;
    },
    updateTask: async (_: unknown, args: IUpdateTaskInput) => {
      const updatedTask = await Task.findByIdAndUpdate(args.taskId, args, {
        new: true,
      });

      if (!updatedTask)
        throw new Error(`Task with id '${args.taskId}' not found`);

      return updatedTask;
    },
  },
  Project: {
    tasks: async ({ _id }: IProject) => await Task.find({ projectId: _id }),
  },
  Task: {
    project: async ({ projectId }: ITask) => await Project.findById(projectId),
  },
};
