import React, { useState } from 'react';
import UpdateNote from './UpdateNote';

const NotesCard = ({ task }) => {
    const [isUpdating, setIsUpdating] = useState(false);

    const updateLocalStorage = (updatedNotes) => {
        localStorage.setItem("Notes", JSON.stringify(updatedNotes));
        window.dispatchEvent(new Event("storage"));
    };

    const deleteNote = () => {
        const notes = JSON.parse(localStorage.getItem("Notes")) || [];
        updateLocalStorage(notes.filter((note) => note.id !== task.id));
    };

    const completeNote = () => {
        const notes = JSON.parse(localStorage.getItem("Notes")) || [];
        updateLocalStorage(
            notes.map((note) =>
                note.id === task.id ? { ...note, isComplete: !note.isComplete } : note
            )
        );
    };
 
    return (

        <div
            className={`${task.isComplete ? 'opacity-[0.7]' : ''} relative h-[220px] w-[180px] bg-zinc-900 rounded-4xl overflow-hidden flex-shrink-0`}>

            <img className='pt-5 px-5 opacity-50' src="/src/assets/docIcon.svg" alt="" />

            <div className='pt-2 px-5 text-[1rem]'>{task.text}</div>

            <div className={`absolute bottom-0 h-12 w-full ${task.isComplete ? 'bg-green-600' : ''} bg-blue-600 flex items-center justify-center gap-6 text-[0.8rem]`}>
                <img
                    src="/src/assets/completeIcon.svg"
                    alt="Complete Icon"
                    title="Complete Task"
                    className="h-5 cursor-pointer"
                    onClick={() => completeNote(task.id)}
                />
                <img
                    src="/src/assets/updateIcon.svg"
                    alt="Update Icon"
                    title="Update Task"
                    className="h-5 cursor-pointer"
                    onClick={() => setIsUpdating(true)}
                />
                <img
                    src="/src/assets/deleteIcon.svg"
                    alt="Delete Icon"
                    title="Delete Task"
                    className="h-5 cursor-pointer"
                    onClick={() => deleteNote(task.id)}
                />
            </div>

            {isUpdating && <UpdateNote task={task} setIsUpdating={setIsUpdating} />}

        </div>
    )
}

export default NotesCard