import { useContext, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import "./login.css";
import { useCart } from '../components/ContextReducer';

const Login = () => {
  const { setEmail } = useCart();
  let navigate = useNavigate();

  const [formData, setFormData] = useState({
    username: '', // Change 'email' to 'username'
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('https://food-api-fegl.vercel.app/login', formData);

      if (response.status === 200) {
        console.log('Login successful');
        console.log('User data:', response.data);
        localStorage.setItem('user', JSON.stringify(response.data));
        navigate("/");

        const username = formData.username; // Change 'email' to 'username'
        setEmail(username);
      } else {
        console.error('Login failed');
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
            <h1>Login</h1>
            <div className="input">
              <input type="text" name='username' value={formData.username} onChange={handleChange} placeholder="Username" /> {/* Change 'email' to 'username' */}
            </div>
            <div className="input">
              <input type="password" name='password' value={formData.password} onChange={handleChange} placeholder="Password"/>
            </div>
            <button type="submit" className="btn1">Login</button>
            <p className='p2'> Create an Account?
              <Link to="/signup">SignUp</Link>
            </p>
          </form>
        </div>
      </div>
    </>
  );
}

export default Login;

