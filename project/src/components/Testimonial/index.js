import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./style.css" 

const settings = {
  centerPadding: '30px',
centerMode: true,
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};

const Testimonial = () => {
  return (
    <div>
      <h2>Testimonial</h2>
      <Slider {...settings} >
        <div class="card">
          <img class="card-img-top" src="holder.js/100x180/" alt="" />
          <div class="card-body">
            <h4 class="card-title">"Loremipsum dolor sit amet, consectetur adipiscing elit, sed <br></br>
            do eiusmod lorem ipsum dolor sit amet, consectetur <br></br> 
            adipsipicing elit, sed do elusmod lorem ipsum dolor sit amat, <br></br>
            dolor sit amet, consectetur adipiscing eli"</h4>
            <p class="card-text">John Dee, 32, Bromo</p>
          </div>
        </div>

        <div class="card">
          <img class="card-img-top" src="holder.js/100x180/" alt="" />
          <div class="card-body">
            <h4 class="card-title">"Loremipsum dolor sit amet, consectetur adipiscing elit, sed <br></br>
            do eiusmod lorem ipsum dolor sit amet, consectetur <br></br> 
            adipsipicing elit, sed do elusmod lorem ipsum dolor sit amat, <br></br>
            dolor sit amet, consectetur adipiscing eli"</h4>
            <p class="card-text">John Dee, 32, Bromo</p>
          </div>
        </div>

        <div class="card">
          <img class="card-img-top" src="holder.js/100x180/" alt="" />
          <div class="card-body">
            <h4 class="card-title">"Loremipsum dolor sit amet, consectetur adipiscing elit, sed <br></br>
            do eiusmod lorem ipsum dolor sit amet, consectetur <br></br> 
            adipsipicing elit, sed do elusmod lorem ipsum dolor sit amat, <br></br>
            dolor sit amet, consectetur adipiscing eli"</h4>
            <p class="card-text">John Dee, 32, Bromo</p>
          </div>
        </div>
      </Slider>
    </div>
    
  );
};

export default Testimonial;
