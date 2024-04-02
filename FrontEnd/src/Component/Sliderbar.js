import React from 'react';
import { MDBCarousel, MDBCarouselItem, MDBCarouselCaption } from 'mdb-react-ui-kit';
import data from '../Shared/Images/passsion-quote.jpg';
import data1 from '../Shared/Images/SliderImg1.jpg';
import data2 from '../Shared/Images/SliderImg2.jpg';
import data3 from '../Shared/Images/SliderImg3.jpg';
import data4 from '../Shared/Images/english.jpg';



function Sliderbar() {
  return (
    <MDBCarousel showIndicators showControls fade>
      <MDBCarouselItem itemId={1}>
        <img src={data} className='d-block w-100' alt='...' height={500} width={200} />
        <MDBCarouselCaption>
          {/* <h5>First slide label</h5> */}
          <h2 style={{color: 'crimson', textShadow: '2px 2px 4px white', fontWeight: 'bold'}}>"Knowledge of Languages is the Doorway to Wisdom."</h2>
        </MDBCarouselCaption>
      </MDBCarouselItem>

      <MDBCarouselItem itemId={2}>
        <img src={data1} className='d-block w-100' alt='...'height={500} width={200} />
        <MDBCarouselCaption>
          {/* <h5>Second slide label</h5> */}
          <h2 style={{color: 'crimson', textShadow: '2px 2px 4px white', fontWeight: 'bold'}}>"Discover the World Through Language!"</h2>
        </MDBCarouselCaption>
      </MDBCarouselItem>

      <MDBCarouselItem itemId={3}>
        <img src={data2} className='d-block w-100' alt='...' height={500} width={200} />
        <MDBCarouselCaption>
          {/* <h5>Third slide label</h5> */}
          <h2 style={{color: 'crimson', textShadow: '2px 2px 4px white', fontWeight: 'bold'}}>"With Languages.you are at home anywhere!"</h2>
        </MDBCarouselCaption>
      </MDBCarouselItem>

      <MDBCarouselItem itemId={4}>
        <img src={data3} className='d-block w-100' alt='...' height={500} width={200} />
        <MDBCarouselCaption>
          {/* <h5>Third slide label</h5> */}
          <h2 style={{color: 'crimson', textShadow: '2px 2px 4px white', fontWeight: 'bold'}}>"The limits of my language mean the limits of my world!"</h2>
        </MDBCarouselCaption>
      </MDBCarouselItem>

      <MDBCarouselItem itemId={5}>
        <img src={data4} className='d-block w-100' alt='...' height={500} width={200} />
        <MDBCarouselCaption>
          {/* <h5>Third slide label</h5> */}
          <h2 style={{color: 'crimson', textShadow: '2px 2px 4px white', fontWeight: 'bold'}}>"A different Language is a different vision of life!"</h2>
        </MDBCarouselCaption>
      </MDBCarouselItem>



    </MDBCarousel>
  );
}

export default Sliderbar;