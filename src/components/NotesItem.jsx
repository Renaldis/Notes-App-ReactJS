import React from "react";

export default function NotesItem({
  id,
  title,
  body,
  createdAt,
  formatDate,
  archived,
  handleDeleteNote,
  handleArchiveNote,
}) {
  return (
    <>
      <div className="note-item">
        <div className="note-item__content">
          <h3 className="note-item__title">{title}</h3>
          <p className="note-item__date">{formatDate(createdAt)}</p>
          <p className="note-item__body">{body}</p>
        </div>
        <div className="note-item__action">
          <button
            className="note-item__delete-button"
            onClick={() => handleDeleteNote(id)}
          >
            Delete
          </button>
          {!archived ? (
            <button
              className="note-item__archive-button"
              onClick={() => handleArchiveNote(id)}
            >
              Arsipkan
            </button>
          ) : (
            <button
              className="note-item__archive-button"
              onClick={() => handleArchiveNote(id)}
            >
              Pindahkan
            </button>
          )}
        </div>
      </div>
    </>
  );
}
