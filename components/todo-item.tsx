"use client"

import { deleteTodo } from "@/app/todos/actions";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { Todo } from "@/types/custom";
import { Trash2 } from "lucide-react";



export function TodoItems( { todo }: { todo: Todo } ) {
  return (
    <form>
      <TodoCard todo={todo} />
    </form>
  );
}


export function TodoCard( { todo }: { todo: Todo } ){
  return (
    <Card className={cn("w-full")}>
      <CardContent className="flex items-start gap-3 p-3">
        <span className="size-10 flex items-center justify-center">
        </span>
        <p className={cn("flex-1 pt-2 min-w-0 break-words")}>{todo.task}</p>
        <Button
          formAction={async (data) => {
            await deleteTodo(todo.id);
          }}
          variant="ghost"
          size="icon"
        >
          <Trash2 className="h-5 w-5" />
          <span className="sr-only">Delete Todo</span>
        </Button>
      </CardContent>
    </Card>
  );
}