export default function Task(props)
{
    return (
        <div className="border-2 bg-[#f9e0bf] text-black p-3 rounded-lg max-h-[20vh] min-h-[20vh] flex flex-col justify-between">

            <h2 className="text-2xl my-2 ">{props.title}</h2>
            <p className="text-lg my-2 ">{props.description}</p>
            <div className="text-lg text-white flex gap-3 justify-end">
                <button className={` py-2 px-3 rounded-lg whitespace-nowrap ${props.priority === "High" ? "bg-[#e87070] hover:bg-[#e87070cf] active:bg-[#e870709b]" : props.priority === "Medium" ? "bg-[#6c8fdf] hover:bg-[#6c8fdfd3] active:bg-[#6c8fdfac]" : "bg-[#70ce76] hover:bg-[#70ce76d8] active:bg-[#70ce76a6]"}`}
                    onClick={props.changePriority}
                >{props.priority}</button>

                <button className="bg-[#787eb1] hover:bg-[#787eb1d7] active:bg-[#787eb1b5] py-2 px-3 rounded-lg"
                    onClick={props.onEdit}
                >Edit</button>
                <button className="bg-[#F23834] hover:bg-[#f23734da] active:bg-[#f23734af] py-2 px-3 rounded-lg"
                    onClick={props.deleteTask}
                >Delete</button>
            </div>
        </div>
    )
}


Task.defaultProps = {
    title: "Untitled Task",
    description: "No description provided",
    priority: "Low"
}