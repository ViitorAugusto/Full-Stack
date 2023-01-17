interface HabitProps {
    completed: number
}
export const Habit = (props : HabitProps) => {
  return (
    <div className="bg-slate-500 w-16 h-10 p-1 text-white rounded m-1 flex items-center justify-center">{props.completed}</div>
  )
}
