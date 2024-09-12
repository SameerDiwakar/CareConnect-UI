import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaQuestion } from "react-icons/fa";
import { IoIosChatbubbles } from "react-icons/io";
import { RiFeedbackFill } from "react-icons/ri";
import { AiFillInteraction } from "react-icons/ai";
import { MdOnlinePrediction } from "react-icons/md";
import { FaLanguage } from "react-icons/fa";
import { MdModelTraining } from "react-icons/md";

const data = [
  {
    icon: IoIosChatbubbles,
    title: 'Chatbot',
    para: 'A conversational AI Virtual Assistant that can handle customer queries in real time.',
    label: 'Try Demo'
  },
  {
    icon: RiFeedbackFill,
    title: 'Feedback Analyzer',
    para: 'A model that can analyze customer feedback to identify key pain points and generate improvement strategies.',
    label: 'Try Demo'
  },
  {
    icon: AiFillInteraction,
    title: 'Summarizer',
    para: 'Improve the efficiency of customer service agents by using AI to summarize conversations.',
    label: 'Try Demo'
  },
  {
    icon: FaQuestion,
    title: 'FAQ Bot',
    para: 'Use generative AI to create dynamic, accurate, and contextual responses to frequently asked questions (FAQs).',
    label: 'Try Demo'
  },
  {
    icon: MdOnlinePrediction,
    title: 'Predictor',
    para: 'Predict customer needs before they even reach out for support.',
    label: 'Try Demo'
  },
  {
    icon: FaLanguage,
    title: 'Language Support',
    para: 'Use generative AI to provide real-time translations for customer service in multiple languages.',
    label: 'Try Demo'
  },
  {
    icon: MdModelTraining ,
    title: 'Agent Trainer',
    para: 'Use generative AI to create real-time simulations for training new customer service agents.',
    label: 'Try Demo'
  }
]

const Slider1 = () => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <div className='w-full bg-black h-fit flex flex-col justify-start items-center px-4 py-8 lg:px-20 lg:py-20 gap-6'>
      <div className="flex justify-start flex-col gap-4">
      <h1 className='text-4xl text-white font-bold font-[Saira]'>Our Best Services</h1>
      <p className='text-lg text-left text-gray-400 mb-2 font-[Saira]'>Services that can revolutionize customer support with the help of Generative AI improving the accuracy, functionality and customer satisfaction. Advance in modern market with latest customer support technologies at affordable price.</p>
      </div>

      <div className="w-full h-fit p-8">
        <Slider {...settings}>
          {
            data.map((item, index) => (
              <div id='slider-boxes' key={index} className="bg-[#212C29] p-10 rounded-xl flex flex-col justify-center items-center border-b-[8px] border-gray-400">
                <div id='icon-box' className="bg-[#06D889] cursor-pointer rounded-full p-6">
                  {item.icon && <item.icon className='w-[45px] h-[45px]' />}
                </div>
                <div className="flex flex-col justify-center items-center gap-6 mt-6">
                  <h1 className='text-2xl text-white font-bold font-[Saira]'>{item.title}</h1>
                  <p className='text-[17px] text-center text-white'>{item.para}</p>
                  <button className='bg-[#06D889] px-8 py-3 rounded-xl font-semibold font-[Saira] hover'>{item.label}</button>
                </div>
              </div>



            ))
          }
          </Slider>
      </div>
    </div>
  )
}

export default Slider1
