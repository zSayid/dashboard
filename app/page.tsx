import React from 'react';
import Image from 'next/image'; // Import the next/image component
import styles from '@/app/ui/home.module.css';
import { lunasimaFont } from '@/app/ui/fonts';

export default function Page() {
  return (
    <div>
      {/* Your main content */}
      <main className="flex min-h-screen flex-col p-5">
        <div className=" h-full flex items-center bg-blue-500 p-5 m-10 md:h-52">
          {/* Using the next/image component */}
          <div className="flex items-center justify-center p-6 md:w-3/5  md:px-28 md:py-1"> {/* Adjust size as needed */}
            <Image
              src={'/images/AcmeLogo.png'}
              width={1000}
              height={760}         
              className="hidden md:block"
              alt="Screenshots of the dashboard project showing desktop version"
            />
          </div>
        </div>
        <div className=' w-80 bg-gray-100 rounded-lg shadow-lg p-6 md:p-12 m-3 h-100'>
          <p className={`${lunasimaFont.className}text-gray-800 md:leading-normal mb-20 pt-4`}>
            <strong>Welcome to Acme.</strong> This is the example for the{' '}
            <a href="https://nextjs.org/learn/" className="text-blue-500"> Next.js Learn Course</a>
            , brought to you by Vercel.
          </p>
          <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg'>Log in -{'>'}</button>
        </div>
      </main>
    </div>
  );
}
