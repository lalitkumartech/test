import { faMobileAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

export default function FeatureCard() {
  return (
    <>
        <div className='py-5 xxl:px-6 xl:px-6 lg:px-6 md:px-4 sm:px-2'>
            <div className='w-full max-w-screen-xxl mx-auto'>
                <div className='grid grid-cols-1 md:grid-cols-3'>
                   
                        <div className='border-1 border-gray-300 rounded-2xl px-5 py-4 m-2 text-start'>
                             <div>
                               <div className='w-16 h-16 bg-yellow-400 rounded-full d-flex justify-content-center align-items-center'>
                                 <FontAwesomeIcon className='text-3xl text-white' icon={faMobileAlt} />
                               </div>
                            </div>
                            
                            <h3 className='text-xl font-bold pt-7 pb-6  text-green-900 mb-0'>Food and Wine Tours</h3>
                            <p className='text-slate-400'>
                              Dolor sit amet, consectetur adipiscing elit.
                              Sed sit amet rcus nun Lorem ipsum dolor sit amet,
                              consectetur adipiscing elit. Sed sit amet rcus nunc.
                              Duis egestas ac.
                            </p>
                        </div>
                  
                        <div className='border-1 border-gray-300 rounded-2xl px-5 py-4 m-2 text-start'>
                             <div>
                               <div className='w-16 h-16 bg-yellow-400 rounded-full d-flex justify-content-center align-items-center'>
                                 <FontAwesomeIcon className='text-3xl text-white' icon={faMobileAlt} />
                               </div>
                            </div>
                            
                            <h3 className='text-xl font-bold pt-7 pb-6  text-green-900 mb-0'>Food and Wine Tours</h3>
                            <p className='text-slate-400'>
                              Dolor sit amet, consectetur adipiscing elit.
                              Sed sit amet rcus nun Lorem ipsum dolor sit amet,
                              consectetur adipiscing elit. Sed sit amet rcus nunc.
                              Duis egestas ac.
                            </p>
                        </div>
                   
                        <div className='border-1 border-gray-300 rounded-2xl px-5 py-4 m-2 text-start'>
                             <div>
                               <div className='w-16 h-16 bg-yellow-400 rounded-full d-flex justify-content-center align-items-center'>
                                 <FontAwesomeIcon className='text-3xl text-white' icon={faMobileAlt} />
                               </div>
                            </div>
                            
                            <h3 className='text-xl font-bold pt-7 pb-6  text-green-900 mb-0'>Food and Wine Tours</h3>
                            <p className='text-slate-400'>
                              Dolor sit amet, consectetur adipiscing elit.
                              Sed sit amet rcus nun Lorem ipsum dolor sit amet,
                              consectetur adipiscing elit. Sed sit amet rcus nunc.
                              Duis egestas ac.
                            </p>
                        </div>
                   
                </div>
            </div>
        </div>
    </>
  )
};
