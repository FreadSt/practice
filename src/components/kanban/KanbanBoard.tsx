import {todoStore} from '../../app/store/todo.ts';
import {TodoItem} from '../todos/TodoItem.tsx';
import React, {useRef} from 'react';

export type TodoStatus = 'todo' | 'in-progress' | 'done'

export const KanbanBoard = () => {
  const todos = todoStore((state) => state.todos);
  const updateTodoStatus = todoStore((state) => state.updateTodoStatus);
  const draggedTodoId = useRef<number | null>(null)
  const removeTodo = todoStore((state) => state.removeTodo);

  const onDragStart = (id: number) => {
    draggedTodoId.current = id;
  }

  const onDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  }

  const onDrop = (targetStatus: TodoStatus) => {
    if(draggedTodoId.current === null) return
    updateTodoStatus(draggedTodoId.current, targetStatus)
    draggedTodoId.current = null;
  }

  const columns: { label: string; status: TodoStatus; color: string }[] = [
    { label: 'Todo', status: 'todo', color: 'border-red-200 bg-red-50/50' },
    { label: 'In Progress', status: 'in-progress', color: 'border-yellow-200 bg-yellow-50/50' },
    { label: 'Done', status: 'done', color: 'border-green-200 bg-green-50/50' },
  ];

  return(
    <div className="grid grid-cols-3 gap-6 overflow-x-auto">
      {columns.map((column) => (
        <div
          key={column.status}
          onDragOver={onDragOver}
          onDrop={() => onDrop(column.status)}
          className={`flex flex-col gap-4 p-4 border-2 rounded-xl transition-colors duration-200 ${column.color}`}
        >
          <h3 className="font-bold text-lg capitalize border-b pb-2">
            {column.label} ({todos.filter((t) => t.status === column.status).length})
          </h3>

          <div className="flex flex-col gap-3 overflow-y-auto max-h-[500px] pr-1">
            {todos
              .filter((todo) => todo.status === column.status)
              .map((todo) => (
                <TodoItem
                  key={todo.id}
                  id={todo.id}
                  title={todo.title}
                  status={todo.status}
                  removeTodo={() => removeTodo(todo.id)}
                  onDragStart={() => onDragStart(todo.id)}
                />
              ))}
          </div>
        </div>
      ))}
    </div>
  )
}