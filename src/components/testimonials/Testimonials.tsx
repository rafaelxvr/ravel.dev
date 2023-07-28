import './Testimonials.css'
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

import AVTR1 from '../../assets/avatar1.jpg'
import AVTR2 from '../../assets/avatar2.jpg'
import AVTR3 from '../../assets/avatar3.jpg'
import AVTR4 from '../../assets/avatar4.jpg'

const data = [
  {
    avatar: AVTR1,
    name: 'Tina Snow',
    review: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi quo laudantium repellat, fuga eveniet dolorem consequuntur sapiente consectetur blanditiis tempore.'
  },
  {
    avatar: AVTR2,
    name: 'Shatta Wale',
    review: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi quo laudantium repellat, fuga eveniet dolorem consequuntur sapiente consectetur blanditiis tempore.'
  },
  {
    avatar: AVTR3,
    name: 'Kwame Despite',
    review: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi quo laudantium repellat, fuga eveniet dolorem consequuntur sapiente consectetur blanditiis tempore.'
  },
  {
    avatar: AVTR4,
    name: 'Nana Ama McBrown',
    review: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi quo laudantium repellat, fuga eveniet dolorem consequuntur sapiente consectetur blanditiis tempore.'
  }
]

export function Testimonials() {
  return (
    <section id='testimonials'>
      <h5>Review from Clients</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonials_container"
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        >
        {
          data.map(({avatar, name, review}, index) =>
          {
            return (
              <SwiperSlide key={index} className="testimonial">
              <div className="client_avatar">
                <img src={avatar} alt='Avatar One' />
              </div>
              <h5 className='client_name'>
                {name}
              </h5>
              <small className='client_review'>
                {review}
              </small>
            </SwiperSlide>
            )
          })
        }
      </Swiper>
    </section>
  )
}