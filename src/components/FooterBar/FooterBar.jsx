import React from 'react'

const FooterBar = () => {
  return (
    <footer className="footer">
      <div className="row">
        {/* <a href="#"><i className="fa fa-facebook">  Facebook</i></a>
        <a href="#"><i className="fa fa-instagram">  Instagram</i></a> */}
      </div>

      <div className="row">
        <ul>
          <li><a href="#">Contact us</a></li>
          <li><a href="#">Our Services</a></li>
          <li><a href="#">Privacy Policy</a></li>
          <li><a href="#">Terms & Conditions</a></li>
          <li><a href="#">Career</a></li>
        </ul>
      </div>

      <div className="row">
        CACAO-COCOA © {new Date().getFullYear()}  - All rights
        reserved 
      </div>
    </footer>
  )
}

export default FooterBar
