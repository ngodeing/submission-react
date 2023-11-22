import { useState, useEffect } from 'react';

function Form({onAddNote, editedNote, onEditSubmit}){
    const [title, setTitle] = useState('');
  const [paragraph, setParagraph] = useState('');
  const [editingMode, setEditingMode] = useState(false);

  useEffect(() => {
    if (editedNote) {
      // Jika sedang dalam mode editing, isi formulir dengan data catatan yang akan diedit
      setTitle(editedNote.title);
      setParagraph(editedNote.paragraph);
      setEditingMode(true);
    } else {
      // Jika bukan mode editing, reset formulir
      setTitle('');
      setParagraph('');
      setEditingMode(false);
    }
  }, [editedNote]);

    const handleSubmit = (e) => {
        e.preventDefault();
    
        // Pastikan title dan paragraph tidak kosong
        if (title.trim() === '' || paragraph.trim() === '') {
          alert('Judul dan isi tidak boleh kosong');
          return;
        }
        if (title.length > 30 || paragraph.length > 200) {
          alert('Maximum character limit reached (Title: 30 characters, Paragraph: 200 characters).');
          return;
        }
        if (editingMode) {
            // Jika sedang dalam mode editing, kirim catatan yang baru dan indeks yang sedang diedit
            onEditSubmit({ title, paragraph });
          } else {
            // Jika bukan mode editing, kirim catatan baru
            onAddNote({ title, paragraph });
          }
    
        // Meneruskan data ke komponen induk
    
        // Mengosongkan input setelah submit
        setTitle('');
        setParagraph('');
        setEditingMode(false);
      };
    return (
        <div className='flex justify-center'>
            <form onSubmit={handleSubmit}className='flex flex-col bg-slate-600 justify-center md:w-[280px] w-[250px] text-sm md:text-base rounded-xl p-5 text-white gap-2 shadow-lg' >
                <label>Masukkan Judul</label>
                <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} className='rounded-full bg-slate-700 border-slate-200 border-2 px-4 py-1'/>
        <label>Masukkan Isi</label>
        <input type="text" value={paragraph} onChange={(e) => setParagraph(e.target.value)} className='rounded-2xl bg-slate-700 border-slate-200 border-2 px-4 py-1'/>
        <button type="submit" className='bg-orange-500 text-white px-8 py-2 rounded-full md:mt-10 mt-5'>{editingMode ? 'Simpan' : 'Tambah'}</button>
            </form>
        </div>
    )
}

export default Form;