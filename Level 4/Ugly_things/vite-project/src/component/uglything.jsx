import React, { useState } from 'react';
import { useUglyThings } from './uglythingscontext';

const UglyThing = ({ thing }) => {
  const { deleteUglyThing, editUglyThing } = useUglyThings();
  const [isEditing, setIsEditing] = useState(false);
  const [imgUrl, setImgUrl] = useState(thing.imgUrl);
  const [title, setTitle] = useState(thing.title);
  const [description, setDescription] = useState(thing.description);

  const handleEdit = () => {
    editUglyThing(thing._id, { imgUrl, title, description });
    setIsEditing(false);
  };

  return (
    <div>
      {isEditing ? (
        <>
          <input type="text" value={imgUrl} onChange={(e) => setImgUrl(e.target.value)} />
          <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
          <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} />
          <button onClick={handleEdit}>Save</button>
        </>
      ) : (
        <>
          <img src={thing.imgUrl} alt={thing.title} />
          <h3>{thing.title}</h3>
          <p>{thing.description}</p>
          <button onClick={() => setIsEditing(true)}>Edit</button>
          <button onClick={() => deleteUglyThing(thing._id)}>Delete</button>
        </>
      )}
    </div>
  );
};

export default UglyThing;
