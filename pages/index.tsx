import type { NextPage } from 'next'
import Head from 'next/head'
import Header from '../components/Header'

const Home: NextPage = () => {
  return (
    <div className='w-full h-screen object-contain'>
       <h1 className='text-7xl text-white absolute'>Hello World!</h1>
      <img
        className=""
        src="https://cdn.mongolia-guide.com/generated/aimag/lnj1nD84PAkagj0NeXxnTZHA6blVJZJuHA6qENcv_1920_1000.jpeg"
      />
         </div>
  )
}

export default Home
