import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <div className=''>
      <div className='bg-container pb-0'>
        <div className='d-flex flex-row justify-content-evenly align-items-center'>
          <img src="https://in.bmscdn.com/webin/common/icons/hut.svg" className='' alt="logo" />
          <h1 className='fs-5 text-light p-2 my-2'>List Your Show   Got a show,event,activityor a great experience? Partner with us & get listed on BookMyShow</h1>
          <div>
          </div>
          <button className='btn btn-danger fs-6 '>Contact Today!</button>
        </div>
      </div>
      <div className='bg-container-2'>
        <div>
          <div className='d-flex flex-row justify-content-between align-items-center mx-5 my-5'>
            <hr className='text-secondary fs-6 w-50 fw-bold' />
            <img height={50} src="https://gumlet.assettype.com/barandbench/import/2013/07/BMS_logo.png" className='' alt="logo" />
            <hr className='text-secondary fs-6 w-50 fw-bold' />
          </div>
          <div className='d-flex flex-row justify-content-center align-items-center'>
            <div className='mx-2 icon d-flex flex-row justify-content-center align-items-center'>
              <i className="bi bi-facebook fs-4 px-2"></i>
            </div>
            <div className='mx-2 icon d-flex flex-row justify-content-center align-items-center'>
              <i className="bi bi-instagram fs-4 px-2"></i>
            </div>
            <div className='mx-2 icon d-flex flex-row justify-content-center align-items-center'>
              <i className="bi bi-youtube fs-4 px-2"></i>
            </div>
            <div className='mx-2 icon d-flex flex-row justify-content-center align-items-center'>
              <i class="bi bi-linkedin fs-4 px-2"></i>
            </div>
          </div>
        </div>
        <div>
          <p></p>
        </div>
      </div>

    </div>
  )
}

export default Footer
