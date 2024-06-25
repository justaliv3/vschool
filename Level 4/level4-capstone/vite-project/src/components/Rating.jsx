import React from 'react';

function Rating({ rating, onChange }) {
  const handleRatingChange = (newRating) => {
    onChange(newRating);
  };

  return (
    <div>
      {[1, 2, 3, 4, 5].map((star) => (
        <span
          key={star}
          onClick={() => handleRatingChange(star)}
          style={{
            cursor: 'pointer',
            color: star <= rating ? 'gold' : 'gray'
          }}
        >
          ★
        </span>
      ))}
    </div>
  );
}

export default Rating;
