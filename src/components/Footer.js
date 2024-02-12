import 'bootstrap/dist/css/bootstrap.min.css';
import "./style/footer.css"
import { useNavigate } from 'react-router-dom';
import React, { useRef } from 'react';
import Navbar from './Navbar';
export default function Footer() {
  let router = useNavigate()
  const emailInputRef = useRef(null);
  function emailSend(e){
    e.preventDefault(); 
    router("/")
    emailInputRef.current.value = '';
  }
  


  return (
<>
<Navbar/>

<footer className='bg-[black] '>
      <div id='data' className="footer-coloum d-flex flex-column align-items-center">
      <hr  style={{ height: "14px" }} />
        <div className=" footer-two container-fluid d-flex flex-wrap">
          <div id="footer-left" className=" footer-left d-flex flex-wrap ">
            <div className=" company">
              <h2 className="mb-5">Company</h2>
              <p>About Us</p>
              <p>Team</p>
              <p>Careers</p>
              <p>Blog</p>
            </div>
            <div className="Contact">
              <h2 className="mb-5">Contact</h2>
              <p className='ptag'>Help & Support</p>
              <p>Partner with us</p>
              <p>Ride with us</p>
            </div>
            <div className="legal">
              <h2 className="mb-5">Legal</h2>
              <p>Terms & Conditions</p>
              <p>Refund & Cancellation</p>
              <p>Privacy Policy</p>
              <p>Cookie Policy</p>
            </div>
          </div>
          <div className="footer-right">
            <h2 className="mb-5">Follow us</h2>
            <div className="social-icons mb-5">
              <img src="./img/instagram-icon.svg" alt="instagram-icon" />
              <img src="./img/faceBook-icon.png" alt="faceBook-icon" />
              <img src="./img/twitter-icon.png" alt="twitter-icon" />
            </div>
            <h3 className="mb-5">Receive exclusive offers in your mailbox</h3>
            <form   className="d-flex flex-wrap flex-row gap-3">
             
              <input 
              ref={emailInputRef}
                className="input-email Input-Footer"
                placeholder="        Enter Your email"
                type="email"
                name="email"
                id="email"
              />
              <button onClick={emailSend}  type="submit "  className="w-full footer-btn mb-5" >Send Me</button>
            </form>
          </div>
        </div>
       <div id="data" className='w-full '>
        <div  className="rights justify-content-between con mb-2">
          <p className="p1 flex gap-2">
            All rights Reserved
            <img src="./img/copy-right-symble.svg" alt="copy-right-symble" />
          </p>

          <p className=" flex">
            <img src="./img/Made with  by.png" alt="yellow-heart" />
            <span>Ahsan</span>
          </p>
        </div>

       </div>
      </div>
    </footer>

</>





  )
}
