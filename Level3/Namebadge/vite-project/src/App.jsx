import { useState } from 'react'
import './App.css'

function App() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    placeOfBirth: '',
    phone: '',
    favoriteFood: '',
    comment: ''
  });

  const [badges, setBadges] = useState([]);
  const [isSubmitDisabled, setIsSubmitDisabled] = useState(true);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    const { firstName, lastName, email, placeOfBirth, phone, favoriteFood, comment } = formData;
    const isValidPhone = /^\d{10}$/.test(phone);
    const allFieldsFilled = [firstName, lastName, email, placeOfBirth, phone, favoriteFood, comment].every(field => field.length >= 3);

    setIsSubmitDisabled(!(allFieldsFilled && isValidPhone));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setBadges([...badges, formData]);
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      placeOfBirth: '',
      phone: '',
      favoriteFood: '',
      comment: ''
    });
    setIsSubmitDisabled(true);
  };

  const handleInputChangeAndValidation = (event) => {
    handleInputChange(event);
    validateForm();
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="firstName"
          value={formData.firstName}
          onChange={handleInputChangeAndValidation}
          placeholder="First Name"
          minLength="3"
        />
        <input
          type="text"
          name="lastName"
          value={formData.lastName}
          onChange={handleInputChangeAndValidation}
          placeholder="Last Name"
          minLength="3"
        />
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleInputChangeAndValidation}
          placeholder="Email"
          minLength="3"
        />
        <input
          type="text"
          name="placeOfBirth"
          value={formData.placeOfBirth}
          onChange={handleInputChangeAndValidation}
          placeholder="Place of Birth"
          minLength="3"
        />
        <input
          type="text"
          name="phone"
          value={formData.phone}
          onChange={handleInputChangeAndValidation}
          placeholder="Phone"
          pattern="\d{10}"
          title="Phone number should be 10 digits"
        />
        <input
          type="text"
          name="favoriteFood"
          value={formData.favoriteFood}
          onChange={handleInputChangeAndValidation}
          placeholder="Favorite Food"
          minLength="3"
        />
        <textarea
          name="comment"
          value={formData.comment}
          onChange={handleInputChangeAndValidation}
          placeholder="Tell us about yourself"
          minLength="3"
        />
        <button type="submit" disabled={isSubmitDisabled}>Submit</button>
      </form>
      <div>
        {badges.map((badge, index) => (
          <div key={index} className="badge">
            <p>First Name: {badge.firstName}</p>
            <p>Last Name: {badge.lastName}</p>
            <p>Email: {badge.email}</p>
            <p>Place of Birth: {badge.placeOfBirth}</p>
            <p>Phone: {badge.phone}</p>
            <p>Favorite Food: {badge.favoriteFood}</p>
            <p>About: {badge.comment}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;