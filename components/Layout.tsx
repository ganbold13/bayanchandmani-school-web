import Head from 'next/head'
import Footer from './Footer'
import Header from './Header'

function Layout(props: any) {
  return (
    <div>
      <Head>
        <title>Баянчандмань ЕБС</title>
        <link rel="icon" href="/logo.ico" />
      </Head>
      <div className=" object-contain">
        <Header />
        <main className="">{props.children}</main>
      </div>
      {/* <Footer /> */}
    </div>
  )
}

export default Layout
