import { useState } from "react"

export default function TaskPanel(props)
{
    const [taskDescription, setTaskDescription] = useState("")
    const [taskTitle, setTaskTitle] = useState("")
    const [taskPriority, setTaskPriority] = useState("High")


    function handleDescriptionChange(event)
    {
        setTaskDescription(event.target.value)
    }
    function handleTitleChange(event)
    {
        setTaskTitle(event.target.value)

    }

    function handlePriorityChange(event)
    {
        setTaskPriority(event.target.value)

    }


    function handleAddTask()
    {
        props.addTask({
            id: props.currentTaskCount + 1,
            TaskTitle: taskTitle,
            TaskDescription: taskDescription,
            TaskPriority: taskPriority
        })

        props.onHidePanel()
    }
    return (
        <section className="fixed inset-0 z-50 min-h-screen min-w-full">
            <div className=" bg-[#37373750] absolute inset-0 bg-cover bg-center backdrop-blur-md "></div>

            <div className="absolute bg-[#f9e0bf] top-1/2 left-1/2 trasnform -translate-x-1/2 -translate-y-1/2 flex flex-col justify-between gap-2 w-[40%] p-3 rounded-md shadow-2xl">
                <h1 className="text-3xl">Add Task</h1>

                <div className="flex flex-col justify-center gap-2">
                    <p className="text-xl">Task Title</p>

                    <input
                        type="text"
                        name="note"
                        id="note"
                        className="py-2 px-1 border rounded-md"
                        placeholder="Enter new note"
                        onChange={handleTitleChange}

                    />

                    <p className="text-xl">Task Description</p>
                    <input
                        type="text"
                        name="note"
                        id="note"
                        className="py-2 px-1 border rounded-md"
                        placeholder="Enter new note"
                        onChange={handleDescriptionChange}
                    />

                    <p>Task Prioriy</p>
                    <select
                        name="priority"
                        id="priority"
                        className="py-2 px-1 bg-white"
                        onChange={handlePriorityChange}
                    >
                        <option value="High">High</option>
                        <option value="Medium">Medium</option>
                        <option value="Low">Low</option>
                    </select>
                </div>

                <div className="flex flex-row justify-end gap-3 py-2">
                    <button className="bg-[#5C9967] py-2 px-3 text-white rounded-md"
                        onClick={handleAddTask}

                    >Add</button>
                    <button className="bg-[#F23834] py-2 px-3 text-white rounded-md"
                        onClick={props.onHidePanel}
                    >Cancel</button>
                </div>
            </div>
        </section>
    )
}