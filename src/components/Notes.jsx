
export default function Notes(props)
{


    return (
        <>
            <div className="flex flex-col">
                <div className="flex flex-row gap-4 items-center justify-between">

                    <p className="text-lg my-3">{props.data}</p>
                    <button className="bg-[#F23834] hover:bg-[#f23734da] active:bg-[#f23734af] py-2 px-3 text-white rounded-md text-lg h-[20%] "
                        onClick={props.onDelete}>
                        Delete</button>
                </div>
                <hr />
            </div>
            <hr />
        </>
    )
}