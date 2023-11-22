import './App.css';
import Form from './components/Form';
import Note from './components/Note';
import { useState, useEffect } from 'react';
import Archive from './components/Archive';

// ...

function App() {
  const [initialNotes,setInitialNotes] = useState([]);
  const [notes, setNotes] = useState(initialNotes);
  const [filteredNotes, setFilteredNotes] = useState([]);
  const [editedNote, setEditedNote] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    // Filter initialNotes based on the search term
    const filteredNotes = initialNotes.filter((note) =>
      note.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      note.paragraph.toLowerCase().includes(searchTerm.toLowerCase())
    );

    // Update filteredNotes with the filtered result
    setFilteredNotes(filteredNotes);
  }, [searchTerm, initialNotes]);

  // Update notes when initialNotes changes
  useEffect(() => {
    setNotes(initialNotes);
  }, [initialNotes]);

  const addNote = (newNote) => {
    // Update initialNotes with the new note
    setInitialNotes((prevNotes) => [...prevNotes, newNote]);
  
    // Filter initialNotes based on the search term
    const filteredNotes = initialNotes.filter((note) =>
      note.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      note.paragraph.toLowerCase().includes(searchTerm.toLowerCase())
    );
  
    // Update filteredNotes with the filtered result
    setFilteredNotes(filteredNotes);
  };

  const deleteNote = (index) => {
    const updatedNotes = [...notes];
    updatedNotes.splice(index, 1);
    setNotes(updatedNotes);
  };

  const editNote = (index) => {
    // Set catatan yang sedang diedit
    setEditedNote(notes[index]);
    // Hapus catatan yang sedang diedit dari daftar
    deleteNote(index);
  };

  const editSubmit = (editedNote) => {
    // Tambahkan catatan yang baru setelah diedit
    addNote(editedNote);
    // Reset catatan yang sedang diedit
    setEditedNote(null);
  };

  const handleSearch = () => {
    // Implementasi pencarian di sini
    const filteredNotes = notes.filter((note) =>
      note.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      note.paragraph.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredNotes(filteredNotes);
  };

 return (
    <div className="App">
      <h1>Aplikasi Pencatatan</h1>
      <input
        type="text"
        placeholder="Cari catatan..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button onClick={handleSearch}>Cari</button>
      <Form onAddNote={addNote} editedNote={editedNote} onEditSubmit={editSubmit} />
      <Note notes={filteredNotes} onDeleteNote={deleteNote} onEditNote={editNote} />
      <Archive archive={archive} />
    </div>
  );
}

export default App;

