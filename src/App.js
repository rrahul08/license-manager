
import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Input from './Input';
import License from './License';
import LicenseList from './LicenseList';
import Expired from './Expired';
import Active from './Active';

function App() {
  const [licenses, setLicenses] = useState([]);
  const addLicense = (newLicense) => {
    if (newLicense.licenseKey && newLicense.product && newLicense.expirationDate) {
      setLicenses([...licenses, newLicense]);
    } else {
      alert('Please enter all details to add a license.');
    }
  };

  const deleteLicense = (index) => {
    const updatedLicenses = [...licenses];
    updatedLicenses.splice(index, 1);
    setLicenses(updatedLicenses);
  };

  return (
    <Router>
      <div>
        <Input addLicense={addLicense} />

        <Routes>
          <Route
            path="/"
            element={
              <>
                <License licenses={licenses} deleteLicense={deleteLicense} />
                <LicenseList licenses={licenses} deleteLicense={deleteLicense} />
              </>
            }
          />
          <Route
            path="/expired"
            element={<Expired licenses={licenses} deleteLicense={deleteLicense} />}
          />
          <Route
            path="/active"
            element={<Active licenses={licenses} deleteLicense={deleteLicense} />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;











































// import React, { useState } from 'react';
// import './App.css';
// import License from './License';
// import Input from './Input';
// import Expired from './Expired';
// import LicenseList from './LicenseList';
// import Active from './Active';



// function App() {
//   const [licenses, setLicenses] = useState([]);

//   const addLicense = (newLicense) => {
//     if (newLicense.licenseKey && newLicense.product && newLicense.expirationDate) {
//       setLicenses([...licenses, newLicense]);
//     } else {
//       alert('Please enter all details to add a license.');
//     }
//   };

//   const deleteLicense = (index) => {
//     const updatedLicenses = [...licenses];
//     updatedLicenses.splice(index, 1);
//     setLicenses(updatedLicenses);
//   };

//   return (
//     <div >
      
//       <Input addLicense={addLicense} />
//       <License licenses={licenses} deleteLicense={deleteLicense} />
//       <div className="license-list">
//       <LicenseList  licenses={licenses} deleteLicense={deleteLicense}/>
//       </div>
//       <div className="license-list">
//       <Expired licenses={licenses} deleteLicense={deleteLicense}/></div>
//       <div className="license-list">
//       <Active licenses={licenses} deleteLicense={deleteLicense}/></div>
//     </div>
//   );
// }

// export default App;


// import React, { useState } from 'react';
// import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
// import './App.css';
// import Expired from './Expired';
// import Active from './Active';

// function App() {
//   const [licenses, setLicenses] = useState([]);
//   const [newLicense, setNewLicense] = useState({
//     licenseKey: '',
//     product: '',
//     expirationDate: ''
//   });

//   const addLicense = () => {
//     if (newLicense.licenseKey && newLicense.product && newLicense.expirationDate) {
//       setLicenses([...licenses, newLicense]);
//       setNewLicense({ licenseKey: '', product: '', expirationDate: '' });
//     } else {
//       alert('Please enter all details to add a license.');
//     }
//   };

//   const deleteLicense = (index) => {
//     const updatedLicenses = [...licenses];
//     updatedLicenses.splice(index, 1);
//     setLicenses(updatedLicenses);
//   };

//   return (
//     <Router>
//       <div className="App">
//         <h1>License Manager</h1>
//         <div className="license-form">
//           <input
//             type="text"
//             placeholder="License Key"
//             value={newLicense.licenseKey}
//             onChange={(e) => setNewLicense({ ...newLicense, licenseKey: e.target.value })}
//           />
//           <input
//             type="text"
//             placeholder="Product"
//             value={newLicense.product}
//             onChange={(e) => setNewLicense({ ...newLicense, product: e.target.value })}
//           />
//           <input
//             type="text"
//             placeholder="Expiration Date"
//             value={newLicense.expirationDate}
//             onChange={(e) => setNewLicense({ ...newLicense, expirationDate: e.target.value })}
//           />
//           <button onClick={addLicense}>Add License</button>
//         </div>
//         <div className="license-list">
          // <div className='status'>
          //   <h2>License List</h2>
          //   <div className='buttons'> 
          //     <Link to="/expired"><button style={{ marginRight:'40px', backgroundColor:'#0ab39c', padding:'9px' }}>Expired</button></Link>
          //     <Link to="/active"><button style={{ backgroundColor:'#0ab39c', padding:'9px' }}>Active</button></Link>
          //   </div>
          // </div>  
          // <hr></hr>
//           <ul>
//     <li className="license-item headings">
//       <h3>License Key</h3>
//       <h3>Product</h3>
//       <h3>Expiration date</h3>
//       <h3>Action</h3> {/* Added for Delete button */}
//     </li>
//     {licenses.map((license, index) => (
//       <li className="license-item" key={index}>
//         <div>{license.licenseKey}</div>
//         <div>{license.product}</div>
//         <div>{license.expirationDate}</div>
//         <button style={{padding:'9px'}} onClick={() => deleteLicense(index)}>Delete</button>
//       </li>
//     ))}
//   </ul>
//           <Routes>
//             <Route path="/expired" element={<Expired licenses={licenses} deleteLicense={deleteLicense} />} />
//             <Route path="/active" element={<Active licenses={licenses} deleteLicense={deleteLicense} />} />
//           </Routes>
//         </div>
//       </div>
//     </Router>
//   );
// }

// export default App;
