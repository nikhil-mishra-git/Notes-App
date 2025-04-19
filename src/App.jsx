import React from 'react';
import BgComponent from './Components/BgComponent';
import NotesData from './Components/NotesData';
import AddTask from './Components/AddTask';

const App = () => {
  return (
    <div className="bg-zinc-800 text-white min-h-screen">
      <div className="relative w-full ">
        <BgComponent />
        <NotesData />
        <AddTask />
      </div>
    </div>
  );
};

export default App;
