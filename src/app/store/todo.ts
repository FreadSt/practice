import {create} from 'zustand'

export type TodoStatus = 'todo' | 'in-progress' | 'done'

interface Todo {
  id: number
  title: string
  status: TodoStatus
}

interface TodoState {
  todos: Todo[]
  addTodo: (title: string) => void
  removeTodo: (id: number) => void
  updateTodoStatus: (id: number, status: TodoStatus) => void
}

export const todoStore = create<TodoState>((set) => ({
  todos: [],
  addTodo: (title) => set((state) => ({
    todos: [...state.todos, { id: Date.now(), title, status: 'todo', }],
  })),
  removeTodo: (id: number) => set((state) => ({
    todos: state.todos.filter((todo: Todo) => todo.id !== id)
  })),
  updateTodoStatus: (id: number, status: TodoStatus) => set((state) => ({
    todos: state.todos.map(todo => todo.id === id ? {...todo, status: status} : todo )
  }))
}))