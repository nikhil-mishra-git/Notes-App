import React, { useState } from 'react'

const AddTask = () => {

    const [noteInput, setNoteInput] = useState(false)
    const [noteText, setnoteText] = useState("")

    function submitForm(e) {
        e.preventDefault()
        if (!noteText.trim()) return;
        saveData()
        setnoteText("")
    }

    const saveData = () => {
        const note = { id: Date.now(), text: noteText, isComplete: false };
        let notes = JSON.parse(localStorage.getItem("Notes")) || [];
        notes.push(note);
        localStorage.setItem("Notes", JSON.stringify(notes));

        window.dispatchEvent(new Event("storage"));
    }


    return (
        <div className='z-[5] fixed bottom-15 right-10 flex flex-col items-center justify-center'>
            
            <form
                onSubmit={submitForm}
                className={`bg-zinc-900 p-4 mb-5 rounded-lg shadow-lg flex flex-col items-center transition-all duration-300 ${noteInput ? "opacity-100 display-block scale-100 translate-y-0" : "opacity-0 display-none scale-95 translate-y-5 pointer-events-none"
                    }`}>
                <textarea
                    value={noteText}
                    onChange={(e) => { setnoteText(e.target.value) }}
                    placeholder="Write your task..."
                    rows="10"
                    className="w-60 h-60 p-2 rounded-md outline-none resize-none"
                />
                <button className="mt-2 w-full px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition cursor-pointer">
                    Create
                </button>
            </form>

            <div className=' bg-zinc-900 p-6 rounded-full transition cursor-pointer w-fit'
                onClick={() => setNoteInput(!noteInput)} >
                <img src="/src/assets/AddIcon.svg" alt="Create Icon"
                    className="h-8 hover:scale-115 transition-transform" />
            </div>

        </div>
    )
}

export default AddTask