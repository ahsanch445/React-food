import React from 'react'
import ReactDom from 'react-dom'

const MODAL_STYLES = {
  position: 'fixed',
  top: '50%',
  left: '50%',
  backgroundColor: '#13131A',
  transform: 'translate(-50%, -50%)',
  zIndex: 1000,
  minHeight: '50%',
 width:"69%"
}

const OVERLAY_STYLES = {
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: 'rgba(0, 0, 0, .7)',
  zIndex: 1000
}

export default function Modal({ children, onClose }) {

  return ReactDom.createPortal(
    <>
      <div style={OVERLAY_STYLES} />
      <div style={MODAL_STYLES}>
        <button className='bg-[#f0da15] btn  fw-bold text-[3vw] ' style={{  backgroundColor:"#f0da15",marginLeft: "90%", marginTop: "-35px", opacity:"0.8"}} onClick={onClose}> X </button>
        {children}
      </div>
    </>,
    document.getElementById('cart-root')
  )
}