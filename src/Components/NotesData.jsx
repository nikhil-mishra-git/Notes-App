import React, { useCallback, useEffect, useRef, useState } from 'react';
import NotesCard from './NotesCard';

const NotesData = () => {
    const [notes, setNotes] = useState([]);

    const fetchNotes = useCallback(() => {
        const storedNotes = JSON.parse(localStorage.getItem("Notes")) || [];
        setNotes(storedNotes);
    }, []);

    useEffect(() => {
        fetchNotes();
        window.addEventListener("storage", fetchNotes);
        return () => window.removeEventListener("storage", fetchNotes);
    }, [fetchNotes]);

    return (
        <div className="z-[2] fixed h-screen w-full p-10 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-6">
            {notes.map((task) => (
                <NotesCard key={task.id} task={task}/>
            ))}
        </div>
    );
};

export default NotesData;
