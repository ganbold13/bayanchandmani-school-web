import type { NextPage } from 'next'
import Head from 'next/head'
import Header from '../components/Header'
import AboutText from '../components/mainPage/AboutText'
import VideoBG from '../components/mainPage/VideoBG'

const Home: NextPage = () => {
  return (

    <div>
      <VideoBG></VideoBG>
      <AboutText></AboutText>
      <hr className='w-10/12 mx-auto border-2 border-blue-999'></hr>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit impedit modi dolore harum quam nulla et, tempora deserunt itaque cupiditate voluptatem corporis eius tempore porro, veritatis omnis laboriosam iste eos.</p>
      {/* <h1 className="text-3xl w-96 text-center mx-auto">Төв аймгийн Баянчандмань сумын ерөнхий боловсролын 12 жилийн сургууль</h1>
      <img
        className=""
        src="https://assets-global.website-files.com/5bcb5ee81fb2091a2ec550c7/5dedd7b85049677d981db611_5c65f4ae2f71d67d0ee9f032_hero-image.png"
      /> */}
    </div>
  )
}

export default Home
