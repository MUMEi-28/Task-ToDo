export default function Task(props)
{
    return (
        <div className="border-2 bg-[#f9e0bf] text-black p-3 rounded-lg">
            <h2 className="text-2xl my-2">{props.title}</h2>
            <p className="text-lg my-2">{props.description}</p>
            <div className="text-lg text-white flex gap-3 justify-end">
                <button className={` py-2 px-3 rounded-lg whitespace-nowrap ${props.priority === "High" ? "bg-[#e87070]" : props.priority === "Medium" ? "bg-[#6c8fdf]" : "bg-[#70ce76]"}`}>{props.priority}</button>
                <button className="bg-[#787eb1] py-2 px-3 rounded-lg">Edit</button>
                <button className="bg-[#F23834] hover:bg-[#f23734da] active:bg-[#f23734af] py-2 px-3 rounded-lg">Delete</button>
            </div>
        </div>
    )
}


Task.defaultProps = {
    title: "Untitled Task",
    description: "No description provided",
    priority: "Low"
}