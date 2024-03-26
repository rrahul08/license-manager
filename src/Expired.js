import React from 'react';
import { useNavigate } from "react-router-dom";

const Expired = ({ licenses}) => {
  const navigate = useNavigate();
  const handleActiveClick = () => {
    navigate('/active');
  };

   const handleAllClick = () => {
    navigate('/');
  };
 
  const expiredLicenses = licenses.filter(license => {
    const expirationDate = new Date(license.expirationDate);
    const currentDate = new Date();
    return expirationDate < currentDate;
  });

  return (
    <div className="expired-licenses">
      <div style={{marginLeft:'290px',display:'flex',justifyContent:'space-between',alignItems:'center',marginTop:'50px',marginRight:'290px'}} >
      <h2>Expired Licenses</h2>
      <div > 
             <button className='buttonss' onClick={handleActiveClick} style={{ backgroundColor:'#0ab39c', padding:'9px' }}>Active</button>
             <button className='buttonss' onClick={handleAllClick} style={{ backgroundColor:'#0ab39c', padding:'9px' }}>All Licenses</button>
      </div>
      </div>
      <hr style={{marginLeft:'290px',marginRight:'290px'}}></hr>
      <ul className="license-list">
       
        <li className="license-item headings">
          <h3>License Key</h3>
          <h3>Product</h3>
          <h3>Expiration date</h3>
        </li>
        {expiredLicenses.map((license) => (
          <li key={license.id} className="license-item">
            <div style={{width:'25%'}} className="license-key">{license.licenseKey}</div>
            <div style={{width:'23%'}} className="license-product">{license.product}</div>
            <div style={{width:'13%'}} className="license-expiration">{license.expirationDate}</div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Expired;

