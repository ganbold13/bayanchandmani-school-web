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
      <Header />
      <main>{props.children}</main>
      <Footer />
    </div>
  )
}

export default Layout
