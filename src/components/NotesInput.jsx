import React, { useState } from "react";

export default function NotesInput({ onAddNotes }) {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  let maxCharTitle = 50;
  const [limitChar, setLimitChar] = useState(maxCharTitle);

  function handleSubmit(e) {
    e.preventDefault();
    onAddNotes({ title, body });
    setTitle("");
    setBody("");
    setLimitChar(maxCharTitle);
  }

  function handleChange(e) {
    const newTitle = e.target.value;
    if (newTitle.length <= maxCharTitle) {
      setTitle(newTitle);
      setLimitChar(maxCharTitle - newTitle.length);
    }
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <p className="note-input__title__char-limit">
          Sisa Karakter: {limitChar}
        </p>
        <input
          type="text"
          className="note-input__title"
          placeholder="ini adalah judul ..."
          required
          onChange={handleChange}
          value={title}
        />
        <textarea
          className="note-input__body"
          name=""
          id=""
          placeholder="Tuliskan catatanmu disini ..."
          required
          value={body}
          onChange={(e) => setBody(e.target.value)}
        ></textarea>
        <button type="submit">Buat</button>
      </form>
    </>
  );
}
