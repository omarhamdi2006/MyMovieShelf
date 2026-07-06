import React from 'react'

export default function Footer() {
  return (
    <>
    
    <footer className='text-sm text-center items-center flex flex-col font-text'>
        <p>This website was created by Omar Hamdy</p>
        <div className="flex flex-row gap-2">
            <p className='underline'><a target='_blank' href="https://github.com/omarhamdi2006">Github</a></p>
            <p className='underline'><a target='_blank' href="https://www.linkedin.com/in/omar-hamdy-6b929334b/">LinkedIn</a></p>
        </div>
    </footer>
    </>
  )
}
