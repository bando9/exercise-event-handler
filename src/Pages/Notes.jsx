import { useState } from "react";

export default function Notes() {
  const [notes, setNotes] = useState([]);
  const [inputNote, setInputNote] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (inputNote.trim() !== "") {
      const newNote = {
        id: Date.now(),
        text: inputNote,
      };

      setNotes([...notes, newNote]);
    }

    setInputNote("");
  };

  function handleInputNote(e) {
    setInputNote(e.target.value);
  }

  function handleDelete(id) {
    setNotes((prevNotes) => prevNotes.filter((note) => note.id !== id));
  }

  return (
    <div className="p-10">
      <h1 className=" text-2xl font-bold text-center mb-5">Notes</h1>
      <form
        onSubmit={handleSubmit}
        className="flex items-center justify-center mb-5"
      >
        <label className="mr-4 py-1">
          <input
            type="text"
            placeholder="Add a note"
            className="border-1 rounded-sm py-1 px-2"
            value={inputNote}
            onChange={handleInputNote}
          />
        </label>

        <button className="bg-emerald-400 px-4 text-white py-1 rounded-md cursor-pointer shadow">
          Add
        </button>
      </form>

      <div className="w-4/5 mx-auto">
        <ul>
          {notes.map((note) => {
            return (
              <li
                key={note.id}
                className="bg-slate-100 px-2 py-1 flex justify-between mb-2"
              >
                <span>{note.text}</span>
                <button
                  onClick={() => handleDelete(note.id)}
                  className="bg-red-400 text-white px-2 py-0.5 rounded-md cursor-pointer"
                >
                  Delete
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
