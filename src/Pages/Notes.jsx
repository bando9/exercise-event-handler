import { useState } from "react";

export default function Notes() {
  const [notes, setNotes] = useState([]);

  const addNoteHandler = (e) => {
    e.preventDefault();
    const value = e.target[0].value;

    setNotes((prev) => [...prev, value]);
    e.target[0].value = "";
  };

  return (
    <div className="">
      <h1>Notes</h1>
      <form onSubmit={addNoteHandler}>
        <label>
          <input
            type="text"
            placeholder="Add a note"
            // onChange={(e) => console.log(e.target.value)}
          />
        </label>

        <button>Add</button>
      </form>

      <div>
        <ul>
          {notes.map((value, index) => {
            return <li key={index}>{value}</li>;
          })}
        </ul>
      </div>
    </div>
  );
}
