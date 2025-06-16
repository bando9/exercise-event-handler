import { useState } from "react";

export default function Notes() {
  const [notes, setNotes] = useState([]);

  const addNoteHandler = (e) => {
    e.preventDefault();
    const value = e.target[0].value;

    setNotes((prev) => [...prev, value]);
    e.target[0].value = "";
  };

  function deleteHandler() {
    console.log("dihapus");
  }

  return (
    <div className="p-10">
      <h1 className=" text-2xl font-bold text-center mb-5">Notes</h1>
      <form
        onSubmit={addNoteHandler}
        className="flex items-center justify-center mb-5"
      >
        <label className="mr-4 py-1">
          <input
            type="text"
            placeholder="Add a note"
            className="border-1 rounded-sm py-1 px-2"
          />
        </label>

        <button className="bg-emerald-400 px-4 text-white py-1 rounded-md cursor-pointer shadow">
          Add
        </button>
      </form>

      <div>
        <ul>
          {notes.map((value, index) => {
            return (
              <li
                key={index}
                className="bg-slate-100 px-2 py-1 flex justify-between mb-2"
              >
                <span>{value}</span>
                <button
                  onClick={deleteHandler}
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
