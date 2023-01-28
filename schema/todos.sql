-- @name CreateTodosTable
create table if not exists todos (
  id text not null primary key,
  text text not null,
  completed boolean not null,
  createdAt timestamptz not null,
  updatedAt timestamptz not null
);


-- @name GetTodoById
select *
from todos
where id = :todoId;


-- @name GetAllTodos
select *
from todos;

-- @name CreateTodo
insert into todos
values (:id, :text, :completed, :createdAt, :updatedAt);