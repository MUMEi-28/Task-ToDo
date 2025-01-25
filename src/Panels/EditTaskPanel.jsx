export default function EditTaskPanel(props)
{
    const currentTask = props.currentSelectedTask
    const setTask = props.setCurrentSelectedTask

    function onChangeTitle(event)
    {
        setTask(function (prevTask)
        {
            return { ...prevTask, TaskTitle: event.target.value }
        })
    }
    function onDescriptionChange(event)
    {
        setTask(function (prevTask)
        {
            return { ...prevTask, TaskDescription: event.target.value }
        })
    }

    return (
        <section className="fixed inset-0 z-50  min-h-screen min-w-full">
            <div className=" bg-[#37373750] absolute inset-0 bg-cover bg-center backdrop-blur-md "></div>

            <div className="absolute bg-[#f9e0bf] top-1/2 left-1/2 trasnform -translate-x-1/2 -translate-y-1/2 flex flex-col justify-between gap-2 w-[40%] h-[30vh] p-3 rounded-md shadow-2xl">
                <h1 className="text-3xl">Edit Task</h1>

                <div className="flex flex-col justify-center gap-2">
                    <p className="text-xl">Task Title</p>
                    <input
                        type="text"
                        name="title"
                        id="title"
                        className="py-2 px-1 border rounded-md"
                        placeholder="Enter Title"
                        value={currentTask.TaskTitle}
                        onChange={onChangeTitle}
                    />

                    <p className="text-xl">Task Description</p>
                    <input
                        type="text"
                        name="description"
                        id="description"
                        className="py-2 px-1 border rounded-md"
                        placeholder="Enter Description"
                        value={currentTask.TaskDescription}
                        onChange={onDescriptionChange}
                    />
                </div>

                <div className="flex flex-row justify-end gap-3 py-2">
                    <button className="bg-[#5C9967] py-2 px-3 text-white rounded-md"
                        onClick={props.saveTask}
                    >Save</button>
                    <button className="bg-[#F23834] py-2 px-3 text-white rounded-md"
                        onClick={props.onHidePanel}
                    >Cancel</button>
                </div>
            </div>
        </section>
    )
}