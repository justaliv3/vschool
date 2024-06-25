import React, { useState } from 'react';
import { useUglyThings } from './uglythingscontext';

const Form = () => {
  const [imgUrl, setImgUrl] = useState('');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const { addUglyThing } = useUglyThings();

  const handleSubmit = (e) => {
    e.preventDefault();
    addUglyThing({ imgUrl, title, description });
    setImgUrl('');
    setTitle('');
    setDescription('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Image URL" value={imgUrl} onChange={(e) => setImgUrl(e.target.value)} required />
      <input type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} required />
      <input type="text" placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} required />
      <button type="submit">Submit</button>
    </form>
  );
};

export default Form;