import Head from 'next/head'
import Footer from './Footer'
import Header from './Header'

function Layout(props: any) {
  return (
    <div className="hideScroll">
      <Head>
        <title>Баянчандмань ЕБС</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="h-screen overflow-hidden object-contain">
        <Header />
        <main className="bg-gray-50">{props.children}</main>
      </div>
      <Footer />
    </div>
  )
}

export default Layout
