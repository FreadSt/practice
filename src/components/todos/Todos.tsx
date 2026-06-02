import React, {type ChangeEvent, useState} from 'react';
import {todoStore} from '../../app/store/todo.ts';
import {KanbanBoard} from '../kanban/KanbanBoard.tsx';

export const Todos: React.FC = () => {
  const [todoName, setTodoName] = useState<string>('')
  const addTodo = todoStore((state) => state.addTodo);

  const handleChangeTodoName= (e: ChangeEvent<HTMLInputElement>) => {
    setTodoName(e.target.value)
  }

  const handleFormAction = async (formData: FormData) => {
    const title = formData.get('title');

    if (typeof(title) !== 'string' || !title.trim()) return

    addTodo(todoName)

    setTodoName('')
  }

  return(
    <section className="flex flex-col gap-6 max-w-full self-end mt-6">
      <div className="h-46 flex flex-col gap-6 overflow-y-auto max-w-1/2">
        <form action={handleFormAction}>
          <p className="font-bold text-2xl">Plan your future!</p>
          <article className="mt-6 flex gap-3 items-center">
            <aside className="flex flex-col font-bold text-sm text-left">
              <label htmlFor="title">Enter what you need to do</label>
              <input value={todoName} onChange={handleChangeTodoName} name="title" type="text" className="border border-gray-300 rounded-lg px-3 py-1"/>
            </aside>
            <button type="submit" className="rounded-xl border p-3 cursor-pointer hover:text-white hover:bg-black hover:transition-all duration-150 ease-in-out">Add Todo</button>
          </article>
        </form>
      </div>
      <KanbanBoard />
    </section>
  )
}