import React from 'react'
import './App.css';

const LicenseList = ({ licenses, deleteLicense }) => {
  return (
    <div >
      
     <ul className='license-list list'>
      
        {licenses.map((license, index) => (
          <li className="license-item" key={index}>
            <div style={{width:'25%'}}>{license.licenseKey}</div>
            <div style={{marginLeft:'10px',width:'25%'}}>{license.product}</div>
            <div style={{width:'25%'}}>{license.expirationDate}</div>
            <button style={{ padding: '9px' }} onClick={() => deleteLicense(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default LicenseList