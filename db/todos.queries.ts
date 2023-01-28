/** Types generated for queries found in "schema/todos.sql" */
import { PreparedQuery } from '@pgtyped/runtime';

/** 'CreateTodosTable' parameters type */
export type ICreateTodosTableParams = void;

/** 'CreateTodosTable' return type */
export type ICreateTodosTableResult = void;

/** 'CreateTodosTable' query type */
export interface ICreateTodosTableQuery {
  params: ICreateTodosTableParams;
  result: ICreateTodosTableResult;
}

const createTodosTableIR: any = {"usedParamSet":{},"params":[],"statement":"create table if not exists todos (\n  id text not null primary key,\n  text text not null,\n  completed boolean not null,\n  createdAt timestamptz not null,\n  updatedAt timestamptz not null\n)"};

/**
 * Query generated from SQL:
 * ```
 * create table if not exists todos (
 *   id text not null primary key,
 *   text text not null,
 *   completed boolean not null,
 *   createdAt timestamptz not null,
 *   updatedAt timestamptz not null
 * )
 * ```
 */
export const createTodosTable = new PreparedQuery<ICreateTodosTableParams,ICreateTodosTableResult>(createTodosTableIR);


/** 'GetTodoById' parameters type */
export interface IGetTodoByIdParams {
  todoId: string | null | void;
}

/** 'GetTodoById' return type */
export interface IGetTodoByIdResult {
  completed: boolean;
  createdAt: Date;
  id: string;
  text: string;
  updatedAt: Date;
}

/** 'GetTodoById' query type */
export interface IGetTodoByIdQuery {
  params: IGetTodoByIdParams;
  result: IGetTodoByIdResult;
}

const getTodoByIdIR: any = {"usedParamSet":{"todoId":true},"params":[{"name":"todoId","required":false,"transform":{"type":"scalar"},"locs":[{"a":31,"b":37}]}],"statement":"select *\nfrom todos\nwhere id = :todoId"};

/**
 * Query generated from SQL:
 * ```
 * select *
 * from todos
 * where id = :todoId
 * ```
 */
export const getTodoById = new PreparedQuery<IGetTodoByIdParams,IGetTodoByIdResult>(getTodoByIdIR);


/** 'GetAllTodos' parameters type */
export type IGetAllTodosParams = void;

/** 'GetAllTodos' return type */
export interface IGetAllTodosResult {
  completed: boolean;
  createdAt: Date;
  id: string;
  text: string;
  updatedAt: Date;
}

/** 'GetAllTodos' query type */
export interface IGetAllTodosQuery {
  params: IGetAllTodosParams;
  result: IGetAllTodosResult;
}

const getAllTodosIR: any = {"usedParamSet":{},"params":[],"statement":"select *\nfrom todos"};

/**
 * Query generated from SQL:
 * ```
 * select *
 * from todos
 * ```
 */
export const getAllTodos = new PreparedQuery<IGetAllTodosParams,IGetAllTodosResult>(getAllTodosIR);


/** 'CreateTodo' parameters type */
export interface ICreateTodoParams {
  completed: boolean | null | void;
  createdAt: Date | null | void;
  id: string | null | void;
  text: string | null | void;
  updatedAt: Date | null | void;
}

/** 'CreateTodo' return type */
export type ICreateTodoResult = void;

/** 'CreateTodo' query type */
export interface ICreateTodoQuery {
  params: ICreateTodoParams;
  result: ICreateTodoResult;
}

const createTodoIR: any = {"usedParamSet":{"id":true,"text":true,"completed":true,"createdAt":true,"updatedAt":true},"params":[{"name":"id","required":false,"transform":{"type":"scalar"},"locs":[{"a":26,"b":28}]},{"name":"text","required":false,"transform":{"type":"scalar"},"locs":[{"a":31,"b":35}]},{"name":"completed","required":false,"transform":{"type":"scalar"},"locs":[{"a":38,"b":47}]},{"name":"createdAt","required":false,"transform":{"type":"scalar"},"locs":[{"a":50,"b":59}]},{"name":"updatedAt","required":false,"transform":{"type":"scalar"},"locs":[{"a":62,"b":71}]}],"statement":"insert into todos\nvalues (:id, :text, :completed, :createdAt, :updatedAt)"};

/**
 * Query generated from SQL:
 * ```
 * insert into todos
 * values (:id, :text, :completed, :createdAt, :updatedAt)
 * ```
 */
export const createTodo = new PreparedQuery<ICreateTodoParams,ICreateTodoResult>(createTodoIR);


