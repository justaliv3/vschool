import React, { useState } from 'react';

function EditMovie({ movie, handleUpdate }) {
  const [title, setTitle] = useState(movie.title);
  const [year, setYear] = useState(movie.year);
  const [plot, setPlot] = useState(movie.plot);

  const handleSubmit = (e) => {
    e.preventDefault();
    handleUpdate({
      id: movie.id,
      title,
      year,
      plot,
      rating: movie.rating,
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Title"
      />
      <input
        type="text"
        value={year}
        onChange={(e) => setYear(e.target.value)}
        placeholder="Year"
      />
      <textarea
        value={plot}
        onChange={(e) => setPlot(e.target.value)}
        placeholder="Plot"
      />
      <button type="submit">Save</button>
    </form>
  );
}

export default EditMovie;

