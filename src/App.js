import './input.css';
import Form from './components/Form';
import Note from './components/Note';
import { useState, useEffect } from 'react';


function App() {
  const [initialNotes,setInitialNotes] = useState([{id:1,title:'Babel',body:'Babel merupakan tools open-source yang digunakan untuk mengubah sintaks ECMAScript 2015+ menjadi sintaks yang didukung oleh JavaScript engine versi lama. Babel sering dipakai ketika kita menggunakan sintaks terbaru termasuk sintaks JSX.',createdAt:'Kamis, 14 April 2022',archived:false},{id:2,title:'Functional Component',body:'Functional component merupakan React component yang dibuat menggunakan fungsi JavaScript. Agar fungsi JavaScript dapat disebut component ia harus mengembalikan React element dan dipanggil layaknya React component.',createdAt:'Kamis, 14 April 2022',archived:false},{id:3,title:'Modularization',body:'Dalam konteks pemrograman JavaScript, modularization merupakan teknik dalam memecah atau menggunakan kode dalam berkas JavaScript secara terpisah berdasarkan tanggung jawabnya masing-masing.',createdAt:'Kamis, 14 April 2022',archived:false},{id:4,title:'Lifecycle',body:'Dalam konteks React component, lifecycle merupakan kumpulan method yang menjadi siklus hidup mulai dari component dibuat (constructor), dicetak (render), pasca-cetak (componentDidMount), dan sebagainya.',createdAt:'Kamis, 14 April 2022',archived:false},{id:5,title:'ESM',body:'ESM (ECMAScript Module) merupakan format modularisasi standar JavaScript.',createdAt:'Kamis, 14 April 2022',archived:false},{id:6,title:'Module Bundler',body:'Dalam konteks pemrograman JavaScript, module bundler merupakan tools yang digunakan untuk menggabungkan seluruh modul JavaScript yang digunakan oleh aplikasi menjadi satu berkas.',createdAt:'Kamis, 14 April 2022',archived:false}]);
  const [notes, setNotes] = useState(initialNotes);
  const [filteredNotes, setFilteredNotes] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [id,setId] = useState(6);

  useEffect(() => {
    const filteredNotes = initialNotes.filter((note) =>
      note.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      note.body.toLowerCase().includes(searchTerm.toLowerCase())
    );

    setFilteredNotes(filteredNotes);
  }, [searchTerm, initialNotes]);

  useEffect(() => {
    setNotes(initialNotes);
  }, [initialNotes]);

  const addNote = (newNote) => {
    const now = new Date().toLocaleDateString('id-ID', {weekday:'long', day:'numeric', month:'long', year:'numeric'});
    const updatedNote = {
      ...newNote,
      id: id + 1,
      archived: false,
      createdAt: now,
    };

    setInitialNotes((prevNotes) => [...prevNotes, updatedNote]);
    setId(id + 1)

  };

  const deleteNote = (index) => {
    const updatedNotes = [...initialNotes];
    updatedNotes.splice(index, 1);
    setInitialNotes(updatedNotes);
  };


  const handleSearch = () => {
    const filteredNotes = notes.filter((note) =>
      note.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      note.body.toLowerCase().includes(searchTerm.toLowerCase())
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
      <Form onAddNote={addNote} />
      <Note notes={filteredNotes} onDeleteNote={deleteNote}/>
      </div>
)}

export default App;