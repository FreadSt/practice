import {Todos} from '../../components/todos/Todos.tsx';

export const Homepage = () => {
  return (
    <div className="min-h-[calc(100vh-26px)] p-6">
      <h2 className="text-left font-bold text-4xl">Greetings! Here's your homepage</h2>
      <Todos/>
    </div>
  )
}