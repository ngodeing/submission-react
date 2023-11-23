import { useState } from 'react';

function Form({onAddNote}){
    const [title, setTitle] = useState('');
  const [body, setbody] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        if (title.trim() === '' || body.trim() === '') {
          alert('Judul dan isi tidak boleh kosong');
          return;
        }
        if (title.length > 30 || body.length > 300) {
          alert('Maximum character limit reached (Title: 30 characters, body: 200 characters).');
          return;
        }
        
        onAddNote({ title, body });
        
        setTitle('');
        setbody('');
      };
    return (
        <div className='flex justify-center'>
            <form onSubmit={handleSubmit}className='flex flex-col bg-slate-600 justify-center md:w-[280px] w-[250px] text-sm md:text-base rounded-xl p-5 text-white gap-2 shadow-lg' >
                <div className='flex'>
                <label>Masukkan Judul</label>
                <label className='ml-16'>Sisa: {30 - title.length}</label>
                </div>
                <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} maxLength={30} className='rounded-full bg-slate-700 border-slate-200 border-2 px-4 py-1'/>
                <div className='flex'>
                <label>Masukkan Isi</label>
                <label className='md:ml-20 ml-16'>Sisa: {300 - body.length}</label>
                </div>
        <input type="text" value={body} onChange={(e) => setbody(e.target.value)} maxLength={300} className='rounded-2xl bg-slate-700 border-slate-200 border-2 px-4 py-1'/>
        <button type="submit" className='bg-orange-500 text-white px-8 py-2 rounded-full md:mt-10 mt-5'>Tambah</button>
            </form>
        </div>
    )
}

export default Form;