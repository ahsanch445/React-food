

import { useState } from 'react';

import axios from 'axios';
import "./sign.css"
import { useNavigate, Link } from 'react-router-dom'


const Register = () => {
  let navigate = useNavigate()


  const [formData, setFormData] = useState({
    fullname: '',
    username: '',
    email: '',
    password: ''
  });

  // Access Next.js router
  

  // Function to handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
    
      const response = await axios.post('https://food-api-theta.vercel.app/register', formData);

    
      if (response.status === 200 && response.data && response.data.message === 'Registration successful') {
        console.log('Registration successful');
      
       
        console.log(localStorage.getItem("user"))
        navigate("/login")





      } else {
        console.error('Registration failed');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    
    <>

    <div className="main">
        <div className="wrapper">
        <form onSubmit={handleSubmit}>
            <h1>Sign Up</h1>
           
            <div className="input">
                <input type="text" name='fullname' value={formData.fullname} onChange={handleChange} placeholder="Fullname" />
            </div>
            <div className="input">
                <input type="text" name='username' value={formData.username} onChange={handleChange} placeholder="Username" />
            </div>
            <div className="input">
                <input type="text" name='email' value={formData.email} onChange={handleChange} placeholder="Email" />
            </div>
           
            <div className="input">
                <input type="password" name='password' value={formData.password} onChange={handleChange} placeholder="Password"/>
            </div>
        <button type="submit" className="btn1">Sign Up</button>
        <p id="p1"> Already have a account?
        <Link to="/login">Login</Link>
        </p>
        </form>
    </div>
    </div>
 
    </>
  );
};

export default Register;
