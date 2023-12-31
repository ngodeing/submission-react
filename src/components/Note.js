function Note({notes, onDeleteNote}) {
      const handleDelete = (index) => {
        onDeleteNote(index);
      };

      if(notes.length === 0){
        return (
          <div>
            <h1 className="text-center font-bold text-2xl md:text-3xl text-white mt-5">Tidak ada Catatan</h1>
          </div>
        )
      }
  return (
    <div className="note flex flex-col text-white justify-center md:gap-10 gap-5 text-sm md:text-base">
      <h1 className="text-center font-bold text-2xl md:text-3xl text-white mt-5">Catatan</h1>
      <div className="flex w-[80%] justify-center items-start md:gap-10 gap-5 flex-wrap mx-auto mb-10">
      {notes.map((note, index) => (
        <div key={index} className='bg-slate-600 rounded-lg w-[250px] shadow-lg'>
          <h1 className="text-center text-xl font-semibold bg-orange-500 rounded-t-lg p-2 overflow-hidden">{note.title}</h1>
          <p className="p-3 overflow-hidden">{note.body}</p>
          <p className="p-3 overflow-hidden">{note.createdAt}</p>
          <div className="flex justify-center gap-2 p-5">
            <button onClick={() => handleDelete(index)} className='bg-red-500 text-white px-4 py-1 rounded-full shadow-lg'>Delete</button>
          </div>
        </div>
      ))}
      </div>
    </div>
  )
}

export default Note;