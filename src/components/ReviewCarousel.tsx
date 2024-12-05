import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import { FaStar } from 'react-icons/fa6';


const ReviewCarousel = () => {
    var settings = {
        infinite: true,
        speed: 700,
        slidesToShow: 1,
        slidesToScroll: 1,

    };
    return (
        <div className='carousel-wrapper '>
            <Slider {...settings}>
                <CarouselCard customerImageUrl='https://tinyurl.com/2b7pb83k' />
                <CarouselCard customerImageUrl='https://media.istockphoto.com/id/2155508446/photo/girl-in-a-cat-mask-on-the-background-of-a-green-park-people-are-animals-sports-quadrobics.webp?a=1&b=1&s=612x612&w=0&k=20&c=up7G1x0VpS8mMaqMljNp9LF4VmZIoLcLMDGi3kwaV1M=' />

                <CarouselCard customerImageUrl='https://tinyurl.com/4vp48ztk' />

                <CarouselCard customerImageUrl='https://tinyurl.com/muc6n48e' />

            </Slider>
        </div>
    )
}

const CarouselCard = (props: { customerImageUrl: string }) => {
    return (
        <div className='carousel-content bg-white'>
            <div className='carousel-rating'>
                <FaStar size={24} color='#FFCC00' />
                <FaStar size={24} color='#FFCC00' />
                <FaStar size={24} color='#FFCC00' />
                <FaStar size={24} color='#FFCC00' />
                <FaStar size={24} color='#FFCC00' />
            </div>
            <div className='carousel-desc'><p>“ITo helped the client achieve their goal of calling the attention of mobile network operators. The expert team was also able to develop an app with commendable UI/UX. The client appreciates their flexibility in terms.”</p></div>
            <div className='carousel-useravatar'>
                <div className='avatar-container'>
                    <div className='avatar'>
                        <img id='avatar-img' src={props.customerImageUrl} alt='avatar-img' />
                    </div>
                    <div className='avatar-detail'>
                        <p className='dev-name'>Binod Khatri</p>
                        <p className='dev-position'>Senior Developer</p>
                    </div>
                </div>
            </div>
        </div>


    )
}
export default ReviewCarousel
