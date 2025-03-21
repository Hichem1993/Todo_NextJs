"use client"

import { Todo } from "@/types/custom";
import { TodoItems } from "./todo-item";
import { TodoForm } from "./todo-form";

export function TodoList({ todos } : { todos: Array<Todo> } ) {
  return (
    <>
      <TodoForm />
      <div className="text-center p-2">
          <div className="w-full flex flex-col gap-4">
              {todos?.map((todo) => {
                return <TodoItems todo={todo} key={todo.id} />
              })}
          </div>
      </div>
    </>
  );
}