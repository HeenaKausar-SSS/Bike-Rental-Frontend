// import React, { useState } from 'react';
// import { useNavigate } from 'react-router';
// import axios from 'axios';

// const Register = () => {
//   const [formData, setFormData] = useState({
//     firstName: '',
//     lastName: '',
//     contactNumber: '',
//     address: '',
//     email: '',
//     password: '',
//     confirmPassword: '',
//     termsAccepted: false,
//   });

//   const [errors, setErrors] = useState({});
//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     const { name, value, checked, type } = e.target;
//     setFormData({
//       ...formData,
//       [name]: type === 'checkbox' ? checked : value,
//     });
//   };

//   const validate = () => {
//     const errors = {};
//     const namePattern = /^[A-Za-z]{1,20}$/;
//     const contactPattern = /^\d{10}$/;
//     const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
//     const passwordPattern = /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@#$%^&*]).{8,}$/;
//     const easyPasswords = ['123456', formData.firstName.toLowerCase(), formData.lastName.toLowerCase()];

//     if (!namePattern.test(formData.firstName)) {
//       errors.firstName = 'First name must be alphabetic and not more than 20 characters';
//     }

//     if (!namePattern.test(formData.lastName)) {
//       errors.lastName = 'Last name must be alphabetic and not more than 20 characters';
//     }

//     if (!contactPattern.test(formData.contactNumber)) {
//       errors.contactNumber = 'Contact number must be a 10-digit number';
//     }

//     if (!emailPattern.test(formData.email)) {
//       errors.email = 'Invalid email address';
//     }

//     if (!passwordPattern.test(formData.password) || easyPasswords.includes(formData.password.toLowerCase())) {
//       errors.password = 'Password must be at least 8 characters and include 1 uppercase, 1 lowercase, 1 number, and 1 special character, and should not be too easy';
//     }
//     if (formData.password !== formData.confirmPassword) {
//             errors.password = 'Passwords do not match';
//          }

//     if (!formData.termsAccepted) {
//       errors.termsAccepted = 'You must accept the terms and conditions';
//     }

//     setErrors(errors);
//     return Object.keys(errors).length === 0;
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       if(validate()){
// const response = await axios.post('http://localhost:8080/api/v1/auth/register', formData);
// const newUser = response.data;
// console.log(newUser)
// if(!newUser){
//   setErrors('Unable to register user try again');
// }
// navigate('/login');
//       }
//     } catch (error) {
//      setErrors(error.response.data) 
//     }
//   };

//   return (
//     <div className="register-container">
//       <form className="register-form" onSubmit={handleSubmit}>
//         <h1>Register Here</h1>
//         <div className="form-group">
//           <label>First Name</label>
//           <input
//             type="text"
//             name="firstName"
//             value={formData.firstName}
//             onChange={handleChange}
//           />
//           {errors.firstName && <span className="error">{errors.firstName}</span>}
//         </div>
//         <div className="form-group">
//           <label>Last Name</label>
//           <input
//             type="text"
//             name="lastName"
//             value={formData.lastName}
//             onChange={handleChange}
//           />
//           {errors.lastName && <span className="error">{errors.lastName}</span>}
//         </div>
//         <div className="form-group">
//           <label>Contact Number</label>
//           <input
//             type="text"
//             name="contactNumber"
//             value={formData.contactNumber}
//             onChange={handleChange}
//           />
//           {errors.contactNumber && <span className="error">{errors.contactNumber}</span>}
//         </div>
//         <div className="form-group">
//           <label>Address</label>
//           <input
//             type="text"
//             name="address"
//             value={formData.address}
//             onChange={handleChange}
//           />
//         </div>
//         <div className="form-group">
//           <label>Email Address</label>
//           <input
//             type="text"
//             name="email"
//             value={formData.email}
//             onChange={handleChange}
//           />
//           {errors.email && <span className="error">{errors.email}</span>}
//         </div>
//         <div className="form-group">
//           <label>Password</label>
//           <input
//             type="password"
//             name="password"
//             value={formData.password}
//             onChange={handleChange}
//           />
//           {errors.password && <span className="error">{errors.password}</span>}
//         </div>
//         <div className="form-group">
//           <label>Confirm Password</label>
//           <input
//             type="password"
//             name="confirmPassword"
//             value={formData.confirmPassword}
//             onChange={handleChange}
//           />
//           {errors.password && <span className="error">{errors.password}</span>}
//         </div>
//         <div className="form-group">
//           <label>
//             <input
//               type="checkbox"
//               name="termsAccepted"
//               checked={formData.termsAccepted}
//               onChange={handleChange}
//             />
//             I accept the terms and conditions
//           </label>
//           {errors.termsAccepted && <span className="error">{errors.termsAccepted}</span>}
//         </div>
//         <button type="submit" className="submit-button">Submit</button>
//       </form>
//     </div>
//   );
// };

// export default Register;

import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import axios from 'axios';

const Register = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    contactNumber: '',
    address: '',
    email: '',
    password: '',
    confirmPassword: '',
    termsAccepted: false,
  });

  const [errors, setErrors] = useState({});
  const [backendError, setBackendError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, checked, type } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const validate = () => {
    const errors = {};
    const namePattern = /^[A-Za-z]{1,20}$/;
    const contactPattern = /^\d{10}$/;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
    const passwordPattern = /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@#$%^&*]).{8,}$/;
    const easyPasswords = ['123456', formData.firstName.toLowerCase(), formData.lastName.toLowerCase()];

    if (!namePattern.test(formData.firstName)) {
      errors.firstName = 'First name must be alphabetic and not more than 20 characters';
    }

    if (!namePattern.test(formData.lastName)) {
      errors.lastName = 'Last name must be alphabetic and not more than 20 characters';
    }

    if (!contactPattern.test(formData.contactNumber)) {
      errors.contactNumber = 'Contact number must be a 10-digit number';
    }

    if (!emailPattern.test(formData.email)) {
      errors.email = 'Invalid email address';
    }

    if (!passwordPattern.test(formData.password) || easyPasswords.includes(formData.password.toLowerCase())) {
      errors.password = 'Password must be at least 8 characters and include 1 uppercase, 1 lowercase, 1 number, and 1 special character, and should not be too easy';
    }

    if (formData.password !== formData.confirmPassword) {
      errors.password = 'Passwords do not match';
    }

    if (!formData.termsAccepted) {
      errors.termsAccepted = 'You must accept the terms and conditions';
    }

    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (validate()) {
        const response = await axios.post('http://localhost:8080/api/v1/auth/register', formData);
        const newUser = response.data;
        console.log(newUser);
        if (!newUser) {
          setBackendError('Unable to register user, try again');
        } else {
          setBackendError('');
          navigate('/login');
        }
      }
    } catch (error) {
      if (error.response && error.response.data && error.response.data.message) {
        setBackendError(error.response.data.message);
      } else {
        setBackendError('An error occurred. Please try again.');
      }
    }
  };

  return (
    <div className="register-container">
      <form className="register-form" onSubmit={handleSubmit}>
        <h1>Register Here</h1>
        <div className="form-group">
          <label>First Name</label>
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
          />
          {errors.firstName && <span className="error">{errors.firstName}</span>}
        </div>
        <div className="form-group">
          <label>Last Name</label>
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
          />
          {errors.lastName && <span className="error">{errors.lastName}</span>}
        </div>
        <div className="form-group">
          <label>Contact Number</label>
          <input
            type="text"
            name="contactNumber"
            value={formData.contactNumber}
            onChange={handleChange}
          />
          {errors.contactNumber && <span className="error">{errors.contactNumber}</span>}
        </div>
        <div className="form-group">
          <label>Address</label>
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Email Address</label>
          <input
            type="text"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <span className="error">{errors.email}</span>}
        </div>
        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
          {errors.password && <span className="error">{errors.password}</span>}
        </div>
        <div className="form-group">
          <label>Confirm Password</label>
          <input
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
          />
          {errors.password && <span className="error">{errors.password}</span>}
        </div>
        <div className="form-group">
          <label>
            <input
              type="checkbox"
              name="termsAccepted"
              checked={formData.termsAccepted}
              onChange={handleChange}
            />
            I accept the terms and conditions
          </label>
          {errors.termsAccepted && <span className="error">{errors.termsAccepted}</span>}
        </div>
        <button type="submit" className="submit-button">Submit</button>
        {backendError && <p className="backend-error">{backendError}</p>}
      </form>
    </div>
  );
};

export default Register;

