import type { NextPage } from 'next'
import Head from 'next/head'
import Header from '../components/Header'

const Home: NextPage = () => {
  return (
    <div className="h-screen overflow-hidden grid grid-cols-2 items-center">
      <h1 className="text-3xl w-96 text-center mx-auto">Төв аймгийн Баянчандмань сумын ерөнхий боловсролын 12 жилийн сургууль</h1>
      <img
        className=""
        src="https://assets-global.website-files.com/5bcb5ee81fb2091a2ec550c7/5dedd7b85049677d981db611_5c65f4ae2f71d67d0ee9f032_hero-image.png"
      />
    </div>
  )
}

export default Home
