import React, { useState } from 'react';

const SimpleForm = () => {
  const [name, setName] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Submitting Name: ${name}`);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Your Name:
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      </label>
      <input type="submit" value="Submit" />
    </form>
  );
}

export default SimpleForm;
