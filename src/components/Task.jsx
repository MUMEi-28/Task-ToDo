export default function Task()
{
    return (
        <div className="border-2 bg-[#f9e0bf] text-black p-3 rounded-lg">
            <h2 className="text-2xl my-2">Task Title</h2>
            <p className="text-lg my-2">Task Description </p>
            <div className="text-lg text-white flex gap-3">
                <button className="bg-[#F87777] py-2 px-3 rounded-lg">Task Priority</button>
                <button className="bg-[#787eb1] py-2 px-3 rounded-lg">Edit</button>
                <button className="bg-[#F23834] py-2 px-3 rounded-lg">Delete</button>
            </div>
        </div>
    )
}