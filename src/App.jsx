
import Header from "./components/Head.jsx"
import Notes from "./components/Notes.jsx"
import Task from "./components/Task.jsx"
import Day from "./components/Day.jsx"
import Footer from "./components/Footer.jsx"


export default function App()
{
  return (
    < >
      <Header />

      <main className="flex flex-col lg:flex-row my-12 justify-start mx-12 gap-6 ">
        <div className="flex-[1]  flex flex-col  justify-between  ">

          <aside className="shadow-lg flex flex-col gap-2 p-3" >
            <Day />
            <div className=" mt-12 ">
              <h1 className="text-2xl">Notes</h1>
              <hr />
            </div>
            <section className="border-2  min-h-[45vh] max-h-[45vh] rounded-lg p-3 overflow-y-scroll">
              <Notes />
              <Notes />
              <Notes />
              <Notes />
              <Notes />
              <Notes />
              <Notes />
              <Notes />
              <Notes />
              <Notes />
              <Notes />

            </section>
          </aside>

          <section className="border-2 bg-[#d1b2ad] text-black p-3 rounded-lg ">
            <h1 className="text-3xl text-center">Pending Tasks</h1>
            <p className="text-center m-3  text-4xl font-bold font-sans">15</p>
          </section>

        </div>


        <section className="border-2 rounded-lg shadow-lg flex-[3] ">

          <header className="p-3 border-b-2 flex flex-row items-center justify-between">
            <h1 className="text-3xl font-bold">Task</h1>
            <button className="bg-[#5C9967] py-2 px-3 rounded-md text-lg text-white ">Add</button>
          </header>

          <main className="p-3 grid grid-cols-1 lg:grid-cols-2 gap-2 min-h-[73vh] max-h-[73vh] overflow-y-scroll ">


            <Task />
            <Task />
            <Task />
            <Task />
            <Task />
            <Task />
            <Task />
            <Task />
            <Task />
            <Task />
            <Task />
            <Task />

          </main>
        </section>
      </main>

      <Footer />


    </>
  )
}