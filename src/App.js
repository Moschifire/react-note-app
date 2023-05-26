import { useState } from 'react';
import { nanoid } from 'nanoid';
import NotesList from './components/NotesList';

const App = () => {
  const [notes, setNotes] = useState([
    {
      id: nanoid(),
      text: "This is my first note!",
      date: "26/05/2023"
    },
    {
      id: nanoid(),
      text: "This is my second note!",
      date: "27/05/2023"
    },
    {
      id: nanoid(),
      text: "This is my third note!",
      date: "28/05/2023"
    },
    {
      id: nanoid(),
      text: "This is my new note!",
      date: "28/05/2023"
    }
  ]);

  return (
    <div className="container">
      <NotesList notes={notes} />
    </div>
  );
}

export default App;