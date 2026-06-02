import {memo} from 'react';
import {Trash} from 'lucide-react';
import type {Todo} from './types.ts';

export const TodoItem = memo(({ title, id, status, removeTodo, onDragStart}: Todo) => {
  return (
    <article
      className={`flex justify-between items-center gap-3 p-3 bg-white border-2 border-gray-200 rounded-lg cursor-grab active:cursor-grabbing hover:border-gray-400 transition-all ${
        status === 'done' ? 'opacity-60' : ''
      }`}      draggable
      onDragStart={() => onDragStart(id)}
    >
      <p className='bg-purple-100 p-3 rounded-lg'>{status}</p>
      <span className={``}>{title}</span>
      <Trash onClick={() => removeTodo(id)} className="cursor-pointer"/>
    </article>
  )
})