import React from "react";
import NotesInput from "./NotesInput";

import NotesList from "./NotesList";

export default function NotesBody({
  activeNotes,
  archivedNotes,
  formatDate,
  onAddNotes,
  handleDeleteNote,
  handleArchiveNote,
}) {
  let activeNoteList = (
    <NotesList
      data={activeNotes}
      formatDate={formatDate}
      handleDeleteNote={handleDeleteNote}
      handleArchiveNote={handleArchiveNote}
    />
  );
  if (activeNotes.length === 0) {
    activeNoteList = <h3 className="red">Tidak ada catatan</h3>;
  }

  let archiveNoteList = (
    <NotesList
      data={archivedNotes}
      formatDate={formatDate}
      handleDeleteNote={handleDeleteNote}
      handleArchiveNote={handleArchiveNote}
    />
  );
  if (archivedNotes.length === 0) {
    archiveNoteList = <h3 className="red">Tidak ada catatan</h3>;
  }
  return (
    <div className="note-app__body">
      <div className="note-input">
        <h2>Buat Catatan</h2>
        <NotesInput onAddNotes={onAddNotes} />
      </div>
      <h2>Catatan Aktif</h2>
      {activeNoteList}
      <h2>Arsip</h2>
      {archiveNoteList}
    </div>
  );
}
