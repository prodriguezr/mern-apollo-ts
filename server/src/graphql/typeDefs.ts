import { gql } from 'graphql-tag';

export const typeDefs = gql`
  type Project {
    _id: ID
    name: String!
    description: String
    createdAt: String
    updatedAt: String
    tasks: [Task]
  }

  type Task {
    _id: ID
    title: String!
    project: Project!
    createdAt: String
    updatedAt: String
  }

  type Query {
    hello: String
    projects: [Project]
    project(_id: ID!): Project
    tasks: [Task]
    task(_id: ID!): Task
  }

  type Mutation {
    createProject(name: String!, description: String): Project
    updateProject(projectId: ID!, name: String!, description: String): Project
    deleteProject(projectId: ID!): Project
    createTask(title: String!, projectId: ID!): Task
    updateTask(taskId: ID!, title: String!, projectId: ID!): Task
    deleteTask(taskId: ID!): Task
  }
`;
