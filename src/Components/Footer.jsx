import { Link } from 'react-router-dom'
import { Button } from './Button';
import React from 'react';
import './Footer.css';

function Footer() { 
  return (
    <div className='footer-container'>
        <section className='footer-subscription'>
            <p className='footer-subscription-heading'>
                Join the adventure newsletter to receive our best vacatiion deals.
            </p>
            <p className='footer-subscription-text'>
                You can unsubscribe at any time.
            </p>
            <div className='input-areas'>
                <form>
                    <input 
                    type="email" 
                    name="email"  
                    placeholder='Your Email' className='footer-input'/>
                    <Button buttonStyle='btn--outline'>Subscribe</Button>
                </form>
            </div>
        </section>
        <div className="footer-links">
            <div className="footer-links-wrapper">
                <div className="footer-links-items">
                    <h2>About Us</h2>
                    <Link to='/sign-up'>How it Works</Link>
                    <Link to='./'>Testimonials</Link>
                    <Link to='/'>Carrers</Link>
                    <Link to='/'>Investors</Link>
                    <Link to='/'>Terms Of services</Link>
                </div>
                <div className="footer-links-items">
                    <h2>Contact Us</h2>
                    <Link to='/sign-up'>Contact</Link>
                    <Link to='/'>Support</Link>
                    <Link to='/'>Destination</Link>
                    <Link to='/'>Sponsorships</Link>
                </div>
            </div>
            <div className="footer-links-wrapper">
                <div className="footer-links-items">
                    <h2>Videos</h2>
                    <Link to='/sign-up'>Submit Videos</Link>
                    <Link to='/'>Ambassadors</Link>
                    <Link to='/'>Agency</Link>
                    <Link to='/'>Influencer</Link>
                </div>
                <div className="footer-links-items">
                    <h2>Social Media</h2>
                    <Link to='/sign-up'>Instagram</Link>
                    <Link to='/'>Facebook</Link>
                    <Link to='/'>Youtube</Link>
                    <Link to='/'>Twitter</Link>
                </div> 
            </div>
        </div>
        <section className="social-media">
            <div className="social-media-wrap">
                <div className="footer-logo">
                    <Link to='/' className='social-logo'>
                        Voyage <i className='fab fa-viadeo'/>
                    </Link>
                </div>
                <small className='website-rights'>&copy; Voyage.com 2022</small>
                <div className="social-icons">
                    <Link 
                    className='social-icon-link facebook'
                    to='/'
                    target='_blank'
                    aria-label='Facebook'>
                    <i className='fab fa-facebook'/>
                    </Link>

                    <Link 
                    className='social-icon-link instagram'
                    to='/'
                    target='_blank'
                    aria-label='Instagram'>
                    <i className='fab fa-instagram'/>
                    </Link>

                    <Link 
                    className='social-icon-link youtube'
                    to='/'
                    target='_blank'
                    aria-label='Youtube'>
                    <i className='fab fa-youtube'/>
                    </Link>

                    <Link 
                    className='social-icon-link twitter'
                    to='/'
                    target='_blank'
                    aria-label='Twitter'>
                    <i className='fab fa-twitter'/>
                    </Link>
                    <Link 
                    className='social-icon-link linkedin'
                    to='/'
                    target='_blank'
                    aria-label='LinkedIn'>
                    <i className='fab fa-linkedin'/>
                    </Link>
                </div>
            </div>
        </section>
    </div>
  )
}

export default Footer