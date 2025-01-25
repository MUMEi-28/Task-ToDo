export default function Day()
{
    const today = new Date()

    const dayName = today.toLocaleDateString("en-US", { weekday: "long" })

    const formattedDate = today.toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
    });
    return (
        <div className="">
            <h1 className="text-7xl">{dayName}</h1>

            <h3 className="text-2xl font-bold my-2">{formattedDate}</h3>
        </div>
    )
}