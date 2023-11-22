import './input.css';
import Form from './components/Form';
import Note from './components/Note';
import { useState, useEffect } from 'react';

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
    const updatedNotes = [...initialNotes];
    updatedNotes.splice(index, 1);
    setInitialNotes(updatedNotes);
  };

  const editNote = (index) => {
    // Set catatan yang sedang diedit
    setEditedNote(initialNotes[index]);
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
    <div className="App flex flex-col gap-5">
      <h1 className='text-center font-bold text-2xl text-white mt-5 md:text-3xl'>Aplikasi Pencatatan</h1>
      <div className='flex justify-center gap-3'>
      <input
        type="text"
        placeholder="Cari catatan..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className='bg-slate-700 text-white rounded-full px-4 py-2 text-xs md:text-base border-2 border-slate-300 placeholder-white shadow-lg'
      />
      <button onClick={handleSearch} className='bg-orange-500 text-sm md:text-base text-white px-8 py-2 rounded-full shadow-lg'>Cari</button>
      </div>
      <Form onAddNote={addNote} editedNote={editedNote} onEditSubmit={editSubmit} />
      <Note notes={filteredNotes} onDeleteNote={deleteNote} onEditNote={editNote} />
      </div>
)}

export default App;