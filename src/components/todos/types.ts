export type TodoStatus = 'todo' | 'in-progress' | 'done'

export interface Todo {
  id: number;
  title: string;
  removeTodo: (id: number) => void;
  onDragStart: (id: number) => void;
  status: TodoStatus
}