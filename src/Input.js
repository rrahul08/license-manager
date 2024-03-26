
import React, { useState } from 'react';
import './App.css';

const Input = ({ addLicense }) => {
  const [newLicense, setNewLicense] = useState({
    licenseKey: '',
    product: '',
    expirationDate: ''
  });

  const handleAddLicense = () => {

    if (!isValidDate(newLicense.expirationDate)) {
      alert('Please enter a valid expiration date (YYYY-MM-DD).');
      return;
    }

    addLicense(newLicense);
    setNewLicense({ licenseKey: '', product: '', expirationDate: '' });
  };

  const isValidDate = (dateString) => {

    const regex = /^\d{4}-\d{2}-\d{2}$/;
    if (!regex.test(dateString)) return false;


    const date = new Date(dateString);
    const isValid = !isNaN(date.getTime());
    return isValid;
  };

  return (
    <div className='App'>
      <div className="license-form">
        <h1>License Manager</h1>
        <input
          type="text"
          placeholder="License Key"
          value={newLicense.licenseKey}
          onChange={(e) => setNewLicense({ ...newLicense, licenseKey: e.target.value })}
        />
        <input
          type="text"
          placeholder="Product"
          value={newLicense.product}
          onChange={(e) => setNewLicense({ ...newLicense, product: e.target.value })}
        />
        <input
          type="date"
          placeholder="Expiration Date (YYYY-MM-DD)"
          value={newLicense.expirationDate}
          onChange={(e) => setNewLicense({ ...newLicense, expirationDate: e.target.value })}
        />
        <button onClick={handleAddLicense}>Add License</button>
      </div>
    </div>
  );
};

export default Input;
