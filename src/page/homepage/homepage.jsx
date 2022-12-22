import React from 'react'
import './homepage.css';
import Typewriter from 'typewriter-effect';
import { TypeAnimation } from 'react-type-animation';

function Homepage() {
  
  return (
    <>
      <div>
        <div className="bg-bg">
            <div className="bg-img">
                  <div className="headercontent">
                    <div className="name">
                      Ishola Duro
                    </div>
                    <div className="thedev">
                      <div>I'm a</div>
                        <div>
                            <TypeAnimation
                                sequence={[
                                  'Developer', 
                                  2500, 
                                  'Freelancer', 
                                  2500, 
                                  'Designer', 
                                  2500,
                                  () => {
                                    console.log('Done typing!'); 
                                  }
                                ]}
                                wrapper="div"
                                speed= {5}
                                deletionSpeed={7}
                                cursor={true}
                                repeat={Infinity}
                                style={{ fontSize: '1em' }}
                              />
                        </div>
                      </div>
                  </div>
            </div>
                 <div className="social-media">
                    <img className='media' src="/assets/instagram.png" alt="" />
                    <img className='media' src="/assets/facebook.png" alt="" />
                    <img className='media' src="/assets/twitter.png" alt="" />
                    <img className='media' src="/assets/github.png" alt="" />
                    <img className='media' src="/assets/linkedin-logo.png" alt="" />
                  </div>
        </div>
      </div>
    </>
  );
}

export default Homepage;
