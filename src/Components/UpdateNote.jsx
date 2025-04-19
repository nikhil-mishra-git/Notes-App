import React, { useState } from 'react'

const UpdateNote = ({ task, setIsUpdating }) => {
    const [updatedText, setUpdatedText] = useState(task.text);

    const handleFormSubmit = (e) => {
        e.preventDefault();
        updateNote();
    };

    const updateNote = () => {
        let notes = JSON.parse(localStorage.getItem("Notes")) || [];

        let updatedNotes = notes.map(note =>
            note.id === task.id ? { ...note, text: updatedText } : note
        );

        localStorage.setItem("Notes", JSON.stringify(updatedNotes));
        setIsUpdating(false);
        window.dispatchEvent(new Event("storage"));
    };

    return (
        <div
        className="fixed cursor-auto z-4 inset-0 flex items-center justify-center bg-zinc-900/50 bg-opacity-50">
            <form
            onSubmit={handleFormSubmit} className=" bg-zinc-900 p-6 rounded-lg shadow-lg w-96">
                <h2 className="text-xl font-semibold mb-5">Update Note</h2>
                <textarea className="w-full border border-zinc-700 p-4 h-40 resize-none"
                value={updatedText}
                onChange={(e) => setUpdatedText(e.target.value)}></textarea>
                <div className="flex justify-center gap-2 mt-4">
                    <button
                    type="button" onClick={() => setIsUpdating(false)}
                    className="bg-zinc-700 w-full text-white px-4 py-2 rounded-md hover:bg-zinc-800 transition">Cancel</button>
                    <button 
                    type='submit'
                    className="bg-blue-600 w-full text-white px-4 py-2 rounded-md hover:bg-blue-700 transition">Update</button>
                </div>
            </form>
        </div>

    )
}

export default UpdateNote