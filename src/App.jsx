
import Header from "./components/Head.jsx"
import Notes from "./components/Notes.jsx"
import Task from "./components/Task.jsx"
import Day from "./components/Day.jsx"
import Footer from "./components/Footer.jsx"

import NotePanel from "./Panels/NotePanel.jsx"
import TaskPanel from "./Panels/TaskPanel.jsx"

import noteData from "./data/NoteData.js"
import taskData from "./data/TaskData.js"

import { useState } from "react"

export default function App()
{
  // NOTES
  const [notes, setNotes] = useState(noteData)
  const [newNote, setNewNote] = useState("")
  const [showNotePanel, setShowNotePanel] = useState(false)

  function deleteNote(indexToDelete)
  {
    //    setNotes((prevNotes) => prevNotes.filter((_, index) => index !== indexToDelete));
    setNotes(function (prevNotes)
    {
      return (prevNotes.filter(function (_, index)
      {
        return index !== indexToDelete
      }))
    })
  }

  function addNote()
  {
    setNotes([...notes, newNote])
    setNewNote("")
    setShowNotePanel(false)
  }

  function handleNoteInputChange(event)
  {
    setNewNote(event.target.value)
  }


  // TASK
  const [showTaskPanel, setShowTaskPanel] = useState(false)


  // TASK || PRIORITY
  const [priority, setPriority] = useState("Low")
  const [counter, setCounter] = useState(1);
  console.log(counter)
  console.log(priority)

  function changePriority()
  {
    let newCounter = counter + 1;
    console.log(newCounter)


    if (newCounter > 3)
    {
      console.log("RESETTED")
      newCounter = 1;
    }

    setCounter(newCounter)

    switch (newCounter)
    {
      case 1:
        setPriority("Low")
        break;
      case 2:
        setPriority("Medium")
        break;
      case 3:
        setPriority("High")
        break;
    }
    console.log(priority)

  }

  return (
    < >
      <Header />

      <main className="flex flex-col lg:flex-row my-12 justify-start mx-12 gap-6 ">
        <div className="flex-[1]  flex flex-col  justify-between  ">

          <aside className="shadow-lg flex flex-col gap-2 p-3" >
            <Day />
            <div className=" mt-12">
              <div className=" flex flex-row justify-between items-center">

                <h1 className="text-2xl">Notes</h1>
                <button className=" bg-[#5C9967] hover:bg-[#5c9967d8] active:bg-[#5c9967a6] py-2 px-3 rounded-md text-lg text-white "
                  onClick={function ()
                  {
                    return setShowNotePanel(true)
                  }}
                >Add</button>
              </div>

              <hr />
            </div>
            <section className="border-2  min-h-[45vh] max-h-[45vh] rounded-lg p-3 overflow-y-scroll">

              {notes.map((note, index) => (
                <Notes key={index}
                  data={note}
                  onDelete={() => deleteNote(index)}

                />
              ))}

              {showNotePanel && <NotePanel
                onHidePanel={function () { return setShowNotePanel(false) }}
                handleNoteInputChange={handleNoteInputChange}
                newNote={newNote}
                addNote={addNote}
              />}
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
            <button className="bg-[#5C9967] hover:bg-[#5c9967d8] active:bg-[#5c9967a6] py-2 px-3 rounded-md text-lg text-white "
              onClick={function () { return setShowTaskPanel(true) }}
            >Add</button>

            {showTaskPanel && <TaskPanel onHidePanel={function () { return setShowTaskPanel(false) }} />}
          </header>

          <main className="p-3 grid grid-cols-1 lg:grid-cols-2 gap-2 min-h-[73vh] max-h-[73vh] overflow-y-scroll ">


            {taskData.map(function (task, index)
            {
              return (<Task
                key={index}
                title={task.TaskTitle}
                description={task.TaskDescription}
                priority={task.TaskPriority}
                changePriority={changePriority} />)
            })}

          </main>
        </section>
      </main>

      <Footer />

    </>
  )
}