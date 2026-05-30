import {create} from 'zustand'

interface Todo {
  id: number
  title: string
  done: boolean
}

interface TodoState {
  todos: Todo[]
  addTodo: (newTodo: Todo) => void
  removeTodo: (id: number) => void
  toggleComplete: (id: number) => void
}

export const todoStore = create<TodoState>((set) => ({
  todos: [],
  addTodo: (newTodo: Todo) => set((state) => ({
    todos: [...state.todos, newTodo]
  })),
  removeTodo: (id: number) => set((state) => ({
    todos: state.todos.filter((todo: Todo) => todo.id !== id)
  })),
  toggleComplete: (id: number) => set((state) => ({
    todos: state.todos.map(todo => todo.id === id ? {...todo, done: !todo.done} : todo)
  }))
}))