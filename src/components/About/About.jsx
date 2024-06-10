import React from 'react';
import { FaUser } from "react-icons/fa";
import BgPolygon from "../../assets/polygon.png";
import Vector from "../../assets/vector-wave.png"

const bgStyle ={
    backgroundImage: `url(${BgPolygon})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundSize : 'cover',
    width: '100%',
    height: '100%',
    position: "relative",
};

function About( { HandlePopup}) {
  return (
    <>
    <div style={bgStyle} className='py-14'>
     <div className="container min-h-[500px] relative z-10">
        <h1 className='pt-20 tracking-wider text-4xl font-semibold text-white text-center'> About Us</h1>

        {/* -----------------------card section----------------------- */}

        <div 
        data-aos="fade-up"
        data-aos-delay="300"
        className='bg-white/80 p-10 my-10'
         >
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laboriosam aspernatur ex id excepturi ipsam quo dolor temporibus, animi accusantium, fugiat nam corporis facere omnis reprehenderit dolorem. Totam rerum atque omnis at, fugit sint ipsa ea, consequuntur perspiciatis quam voluptatibus maiores nisi deserunt vitae, quasi eos dicta nam asperiores aperiam ipsam?Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit laborum velit optio odio. Harum iste nisi inventore. Quam voluptates officia laboriosam recusandae optio reprehenderit vel tempora reiciendis consequatur non quis odio aliquam, fugit sed possimus similique beatae perferendis placeat id natus expedita saepe adipisci magni praesentium? Laudantium officia culpa consectetur?
            <div className='pt-10 flex justify-center'>
                <button onClick={HandlePopup} 
                className='flex justify-center items-center gap-2 bg-primaryDark text-xl h-[40px] text-white px-5 py-2 hover:scale-105 duration-300'>
                    <FaUser />
                   My Account
                </button>

            </div>
        </div>
     </div>

     <div className='absolute top-0 right-0 w-full'>
        <img src="{Vector}" alt=""  className='mx-auto'/>
     </div>




    </div>
    </>
  )
}

export default About;