import React from 'react'
import './Footer.css'
import { FaChevronRight } from "react-icons/fa";
import { Container } from 'react-bootstrap';
import { FaTelegramPlane } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { RiInstagramFill } from "react-icons/ri";
import { FaPinterest } from "react-icons/fa6";



export default function Footer() {
  return (
    <footer>
      <Container>
        <div className="middle-footer mt-3">
          <div className="footer-box p-2">
            <p>Quick Access</p>
            <p className='footer-text'>
              Lorem ipsum dolor sit amet consectetur,
              adipisicing elit. Dolorum voluptates
              veniam expedita dolor rerum autem optio
              repellendus explicabo obcaecati at vero
              accusantium voluptatum, sequi sit, quasi
              officia ad iste blanditiis.
            </p>
          </div>
          <div className='list-box'>
            <div className="footer-box p-2">
              <p>Quick Access</p>
              <ul className='p-0'>
                <li className="footer-link mb-2">
                  <FaChevronRight className='footer-icon'></FaChevronRight>
                  About us</li>
                <li className="footer-link mb-2">
                  <FaChevronRight className='footer-icon'></FaChevronRight>
                  About us</li>
                <li className="footer-link mb-2">
                  <FaChevronRight className='footer-icon'></FaChevronRight>
                  About us</li>
                <li className="footer-link mb-2">
                  <FaChevronRight className='footer-icon'></FaChevronRight>
                  About us</li>
                <li className="footer-link mb-2">
                  <FaChevronRight className='footer-icon'></FaChevronRight>
                  About us</li>
              </ul>
            </div>
            <div className="footer-box p-2">
              <p>Quick Access</p>
              <ul className='p-0'>
                <li className="footer-link mb-2">
                  <FaChevronRight className='footer-icon'></FaChevronRight>
                  About us</li>
                <li className="footer-link mb-2">
                  <FaChevronRight className='footer-icon'></FaChevronRight>
                  About us</li>
                <li className="footer-link mb-2">
                  <FaChevronRight className='footer-icon'></FaChevronRight>
                  About us</li>
                <li className="footer-link mb-2">
                  <FaChevronRight className='footer-icon'></FaChevronRight>
                  About us</li>
                <li className="footer-link mb-2">
                  <FaChevronRight className='footer-icon'></FaChevronRight>
                  About us</li>
              </ul>
            </div>
            <div className="footer-box p-2">
              <p>Quick Access</p>
              <ul className='p-0'>
                <li className="footer-link mb-2">
                  <FaChevronRight className='footer-icon'></FaChevronRight>
                  About us</li>
                <li className="footer-link mb-2">
                  <FaChevronRight className='footer-icon'></FaChevronRight>
                  About us</li>
                <li className="footer-link mb-2">
                  <FaChevronRight className='footer-icon'></FaChevronRight>
                  About us</li>
                <li className="footer-link mb-2">
                  <FaChevronRight className='footer-icon'></FaChevronRight>
                  About us</li>
                <li className="footer-link mb-2">
                  <FaChevronRight className='footer-icon'></FaChevronRight>
                  About us</li>
              </ul>
            </div>
            <div className="footer-box p-2">
              <p>Quick Access</p>
              <ul className='p-0'>
                <li className="footer-link mb-2">
                  <FaChevronRight className='footer-icon'></FaChevronRight>
                  About us</li>
                <li className="footer-link mb-2">
                  <FaChevronRight className='footer-icon'></FaChevronRight>
                  About us</li>
                <li className="footer-link mb-2">
                  <FaChevronRight className='footer-icon'></FaChevronRight>
                  About us</li>
                <li className="footer-link mb-2">
                  <FaChevronRight className='footer-icon'></FaChevronRight>
                  About us</li>
                <li className="footer-link mb-2">
                  <FaChevronRight className='footer-icon'></FaChevronRight>
                  About us</li>
              </ul>
            </div>
          </div>
        </div>
      </Container>

      <div className="bottom-footer">
        <div className="icons-box">
          <div> <FaTelegramPlane className='bottom-footer-icon'></FaTelegramPlane></div>
          <div>  <FaPinterest className='bottom-footer-icon'></FaPinterest></div>
          <div> <RiInstagramFill className='bottom-footer-icon'></RiInstagramFill></div>
          <div> <IoLogoWhatsapp className='bottom-footer-icon'></IoLogoWhatsapp></div>
        </div>
      </div>
    </footer>
  )
}
