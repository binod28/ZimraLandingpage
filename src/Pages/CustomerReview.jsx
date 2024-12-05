import {
  IoIosArrowBack,
  IoIosArrowForward,
  IoMdArrowForward,
} from "react-icons/io";
import ReviewCarousel from "../components/ReviewCarousel";
import { FaStar } from "react-icons/fa6";
import { useRef } from "react";

const CustomerReview = () => {
  const sliderRef = useRef(null);
  return (
    <div className="customer-review-container">
      <div className="testomonial-wrapper">
        <div className="testomonial-container">
          <div>
            <div className="testomonial-btn">
              <p>Testomonial</p>
            </div>
            <div className="testomonial-headingwrapper">
              <h3 className="testomonial-heading">Here's what Our</h3>
              <p className="testomonial-heading">
                <strong className="customer-text">Customer</strong> have Said.
              </p>
            </div>
          </div>
          <div>
            <p className="testomonial-subheading">
              Simplified IT is designed to help make sure you and your data is
              protected and your computer runs it’s best. The network Access
              provides is valuable
            </p>
          </div>
          <div className="below-btn">
            <p>View More</p>
            <IoMdArrowForward size={20} color="white" />
          </div>
        </div>
      </div>
      <div
        className="relative h-auto w-[800px] flex flex-col items-start justify-center lg:px-14 
             "
      >
        {/* <div className="carousel-swipe">
                       
                    </div> */}
        <ReviewCarousel sliderReference={sliderRef} />
        <div className="absolute z-50 w-full gap-5 h-10 bottom-14 flex items-center justify-end right-20">
          <div
            className="w-12 h-12 bg-white rounded-full grid place-content-center shadow-react-slick-btn"
            onClick={() => sliderRef.current.slickPrev()}
          >
            <IoIosArrowBack size={18} color="black" />
          </div>
          <div
            className="w-12 h-12 bg-white rounded-full grid place-content-center shadow-react-slick-btn"
            onClick={() => sliderRef.current.slickNext()}
          >
            <IoIosArrowForward size={18} color="black" />
          </div>
        </div>
      </div>
    </div>
  );
};

const CarouselCard = () => {
  return (
    <div className="carousel-content">
      <div className="carousel-rating">
        {[1, 2, 3, 4, 5].map((ind) => (
          <FaStar key={ind} size={24} color="#FFCC00" />
        ))}
      </div>
      <div className="carousel-desc">
        <p>
          “ITo helped the client achieve their goal of calling the attention of
          mobile network operators. The expert team was also able to develop an
          app with commendable UI/UX. The client appreciates their flexibility
          in terms.”
        </p>
      </div>
      <div className="carousel-useravatar">
        <div className="avatar-container">
          <div className="avatar">
            <img
              id="avatar-img"
              src="https://tinyurl.com/2b7pb83k"
              alt="avatar-img"
            />
          </div>
          <div className="avatar-detail">
            <p className="dev-name">Binod Khatri</p>
            <p className="dev-position">Senior Developer</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerReview;
