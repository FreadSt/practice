import {Todos} from '../../components/todos/Todos.tsx';

export const Homepage = () => {
  return (
    <div className="min-h-[calc(100vh-26px)] p-6">
      <h2 className="text-left font-bold text-4xl">Greetings!</h2>
      <div className="max-w-1/2 self-end mt-6">
        <Todos/>
      </div>
    </div>
  )
}