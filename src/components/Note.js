function Note({notes, onEditNote, onDeleteNote}) {
    const handleEdit = (index) => {
        onEditNote(index);
        // Set judul dan isi form dengan data catatan yang akan diedit
        // Anda dapat mengakses data catatan dengan notes[index]
      };
    
      const handleDelete = (index) => {
        onDeleteNote(index);
      };
  return (
    <div className="note">
      {notes.map((note, index) => (
        <div key={index}>
          <h1>{note.title}</h1>
          <p>{note.paragraph}</p>
          <button onClick={() => handleEdit(index)}>Edit</button>
            <button onClick={() => handleDelete(index)}>Delete</button>
        </div>
      ))}
    </div>
  )
}

export default Note;