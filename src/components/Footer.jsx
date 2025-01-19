import githubImg from "../assets/github.png"

export default function Footer()
{
    return (
        <footer className="flex flex-col items-center justify-center p-4 text-black">
            <p className="">
                &copy; {new Date().getFullYear()} by MJ.
            </p>
            <a className="flex flex-row items-center gap-2" href=""><img className="h-[1rem]" src={githubImg} alt="github" /> Github Repository</a>

        </footer>
    )
}