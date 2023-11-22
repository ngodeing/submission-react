function Archive({archive}) {
  return (
    <div className="note">
      {archive.map((note, index) => (
        <div key={index}>
          <h1>{note.title}</h1>
          <p>{note.paragraph}</p>
          <button onClick={() => handleRestore(index)}>Restore</button>
            <button onClick={() => handleDeletePermanent(index)}>Delete Permanent</button>
        </div>
      ))}
    </div>
  )
}

export default Archive;