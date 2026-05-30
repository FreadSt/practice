import React, {type ChangeEvent, memo, useState} from 'react';
import {todoStore} from '../../app/store/todo.ts';
import {Trash} from 'lucide-react';

interface Todo {
  id: number;
  title: string;
  done: boolean;
  toggleComplete: (id:number) => void;
  removeTodo: (id: number) => void;
}

const TodoItem = memo(({title, done, id, removeTodo, toggleComplete}: Todo) => {
  return (
    <article className="flex gap-3 p-3 border-2 border-gray-200 rounded-lg">
      <input type="checkbox" checked={done} onClick={() => toggleComplete(id)}/>
      <span className={`${done && 'line-through'}`}>{title}</span>
      <Trash onClick={() => removeTodo(id)} className="cursor-pointer"/>
    </article>
  )
})

export const Todos: React.FC = () => {
  const [todoName, setTodoName] = useState<string>('')
  const todos = todoStore((state) => state.todos);
  const addTodo = todoStore((state) => state.addTodo);
  const removeTodo = todoStore((state) => state.removeTodo)
  const toggleComplete = todoStore((state) => state.toggleComplete)


  const handleChangeTodoName= (e: ChangeEvent<HTMLInputElement>) => {
    setTodoName(e.target.value)
  }

  const handleFormAction = async (formData: FormData) => {
    const title = formData.get('title');

    if (typeof(title) !== 'string' || !title.trim()) return

    addTodo({
      id: Date.now(),
      title: todoName,
      done: false
    })

    setTodoName('')
  }

  return(
    <section className="flex flex-col gap-6 max-w-full self-end">
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
      <aside className="flex flex-col gap-3">
        {todos?.map((todo) => (
          <div key={todo.id} className="">
            <TodoItem
              toggleComplete={() => toggleComplete(todo.id)}
              id={todo.id}
              title={todo.title}
              done={todo.done}
              removeTodo={() => removeTodo(todo.id)}
            />
          </div>
        ))}
      </aside>
    </section>
  )
}