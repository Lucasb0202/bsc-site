'use client'

import React, { Component } from 'react'
import Link from 'next/link'

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div id='section_footer'>
      <div className='text-center py-4'>
        <p>Copyright &#169; BSC {currentYear}.</p>
      </div>
    </div>
  )
}

export default Footer;