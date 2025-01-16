import React, { useState } from "react";
import NotesHeader from "./NotesHeader";
import NotesBody from "./NotesBody";
import { getInitialData, showFormattedDate } from "../utils/index";

export default function App() {
  const [notes, setNotes] = useState(getInitialData());
  const [searchTerm, setSearchTerm] = useState("");

  function onAddNotes(value) {
    const newNote = {
      id: +new Date(),
      title: value.title,
      body: value.body,
      createdAt: new Date(),
      archived: false,
    };
    setNotes((prevNotes) => [...prevNotes, newNote]);
  }

  function handleDeleteNote(id) {
    setNotes((prevNotes) => prevNotes.filter((note) => note.id !== id));
  }
  function handleArchiveNote(id) {
    const updatedNotes = notes.map((note) => {
      if (note.id === id) {
        return { ...note, archived: !note.archived }; // Toggle archived status
      }
      return note;
    });
    setNotes(updatedNotes);
  }

  const filteredData = notes.filter((note) =>
    note.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const activeNotes = filteredData.filter((note) => !note.archived);
  const archivedNotes = filteredData.filter((note) => note.archived);

  return (
    <>
      <NotesHeader searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <NotesBody
        activeNotes={activeNotes}
        archivedNotes={archivedNotes}
        formatDate={showFormattedDate}
        onAddNotes={onAddNotes}
        handleDeleteNote={handleDeleteNote}
        handleArchiveNote={handleArchiveNote}
      />
    </>
  );
}
