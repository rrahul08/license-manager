
import React from 'react';
import { useNavigate } from "react-router-dom";


const License = ({ licenses, deleteLicense }) => {
  const navigate = useNavigate();
    const handleExpiredClick = () => {
      navigate('/expired');
    };
  
    const handleActiveClick = () => {
      navigate('/active');
    };
  return (
    <div className="license-list">
        <div className='status'>
            <h2>License List</h2>
            <div > 
             <button className='buttonss' onClick={handleExpiredClick} style={{marginRight:'10px', backgroundColor:'#0ab39c', padding:'9px' }}>Expired</button>
             <button className='buttonss' onClick={handleActiveClick} style={{ backgroundColor:'#0ab39c', padding:'9px',paddingLeft:'12px',paddingRight:'12px' }}>Active</button>
            </div>
          </div>  
          <hr></hr>
      <ul>
        <li className="license-items">
          <h3>License Key</h3>
          <h3>Product</h3>
          <h3>Expiration date</h3>
          <h3>Action</h3>
        </li>
        </ul>
        
    </div>
  );
};

export default License;
