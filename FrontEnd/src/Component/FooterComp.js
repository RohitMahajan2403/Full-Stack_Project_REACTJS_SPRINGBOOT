import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import { Link } from 'react-router-dom';

function FooterComp() {
  return (
    <MDBFooter bgColor='dark' className='text-center text-lg-start text-muted'>

          <hr
            style={{
            background: "red",
            height: "5px",
            border: "none",
            }}
          />
          
          <hr
            style={{
            background: "orange",
            height: "2px",
            border: "none",
            }}
          />
        
      

      <section className='footercomp'>
        <MDBContainer className='text-center text-md-start mt-5'>
          <MDBRow className='mt-3'>
            <MDBCol md="3" lg="4" xl="3" className='d-flex flex-column justify-content-center align-items-center mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>
                <MDBIcon icon="gem" className="me-3" />
                <strong>FluentFusion</strong>
              </h6>
              <p>
              FluentFusion is a Language Learning and Language Teaching Platform.
              </p>
            </MDBCol>

            <MDBCol md="2" lg="2" xl="2" className='d-flex flex-column justify-content-center align-items-center mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Services</h6>
              <p>
                <a href='#!' className='text-reset'>
                  Learn Languages
                </a>
              </p>
              <Link to='/Becometutor' className='text-reset'> {/* Use Link instead of anchor tag */}
                Become a Tutor
                </Link>
            </MDBCol>

            <MDBCol md="3" lg="2" xl="3" className='d-flex flex-column justify-content-center align-items-center mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Useful links</h6>
              <p>
                <a href='#!' className='text-reset'>
                  Pricing
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Settings
                </a>
              </p>
              <Link to='/terms&condition' className='text-reset'> {/* Use Link instead of anchor tag */}
                Terms and Conditions
                </Link>
                <p>
                <Link to='/help' className='text-reset' style={{ margin: '10px' }}> {/* Use Link instead of anchor tag */}
                Help
                </Link>
                </p>
            </MDBCol>

            <MDBCol md="4" lg="4" xl="4" className='d-flex flex-column justify-content-center align-items-center mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
              <p>
                <MDBIcon icon="home" className="me-2" />
                Kothrud,Pune
              </p>
              <p>
                <MDBIcon icon="envelope" className="me-3" />
                info@example.com
              </p>
              <p>
                <MDBIcon icon="phone" className="me-3" /> + 01 234 567 88
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

          <hr
            style={{
            background: "orange",
            height: "2px",
            border: "none",
            }}
          />

      <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
        <div className='me-5 d-none d-lg-block'>
          <span><strong>Connect With us on </strong></span>
        </div>

        <div>
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="facebook-f" />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="twitter" />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="google" />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="instagram" />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="linkedin" />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="github" />
          </a>
        </div>
      </section>

      <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
        © 2024 Copyright:<a href='#'><p>FluentFusion Team</p></a>
        
      </div>
    </MDBFooter>
  );
}

export default FooterComp;