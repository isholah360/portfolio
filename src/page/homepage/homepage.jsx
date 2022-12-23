import React, {useEffect, useRef}  from 'react'
import './homepage.css';
import gsap from 'gsap';
import { Power3 } from 'gsap/src/index';
import { TypeAnimation } from 'react-type-animation';
import Navbar from '../../components/navbar/navbar';

function Homepage() {

  const node1 = useRef(null)
  const node2 = useRef(null)
  const node3 = useRef(null)
  const node11 = useRef(null)
  const node22 = useRef(null)
  const node33 = useRef(null)
  const writer = useRef(null)

  useEffect(()=>{
    gsap.fromTo([writer.current], {opacity:1, color:"white",}, { color:"black", opacity:0,
      duration:3, ease:Power3.outIn})
    gsap.fromTo([node11.current, node22.current, node33.current], { width:"30rem", x:"0", opacity:1}, { opacity:0, width:"0rem", x:"30rem",
      duration:1.5, ease:Power3.outIn, transformOrigin:'left', delay:6,
      stagger:{amount:1.5}})

    gsap.fromTo([node1.current, node2.current, node3.current], { opacity:1, height:"20rem", y:0}, { opacity:0, height:"0rem", y:"20rem",
      duration:2.5, ease:Power3.outIn, transformOrigin:'left', delay:2,
      stagger:{amount:1.5}})
  },[])
  
  return (
    <>
      <div>
        <div className="bg-bg">
       
       <div className="top-place">
          <div className="bigger">
              <div ref={writer} className="writer">Welcome</div>
                <div className="nodes">
                      <div ref={node1} className="node1"></div>
                      <div ref={node2} className="node2"></div>
                      <div ref={node3} className="node3"></div>
                </div>
                <div className="nodez">
                      <div className="nods">
                        <div ref={node11} className="node11"></div>
                        <div ref={node22} className="node22"></div>
                        <div ref={node33} className="node33"></div>
                      </div>
                </div>
            </div>
       </div>
       <Navbar/> 
        <div className="lang">
          <p>ENG</p>
          <p>JAP</p>
        </div>

            <div className="bg-img">
                  <div className="headercontent">
                    <div className="name">
                      Eshola Duro
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
