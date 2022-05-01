import Link from 'next/link'

function Header() {
  return (
    <header className="flex h-20 flex-row items-center justify-between py-1 sm:h-24 md:px-4 xl:px-20">
      <div>
        <Link href="/">
          <img
            className="absolute top-0 z-10 w-28 sm:w-36 cursor-pointer"
            src="/logo.png"
          />
        </Link>
        <div className="flex flex-col items-center transition ease-in-out">
          <p className="ml-24 text-lg text-blue-999 sm:ml-40 sm:text-3xl">
            БАЯНЧАНДМАНЬ
          </p>
          <p className='ml-24 text-yellow-400 text-base sm:hidden'>ЕБС</p>
          <p className="h-0 overflow-hidden sm:h-6 sm:text-base text-blue-999  sm:ml-40 ">
            Ерөнхий боловсролын сургууль
          </p>
        </div>
      </div>
      <button className="px-8 py-6 lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="2"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>
      <div className="hidden items-center space-x-7 lg:inline-flex ">
        <Link href="/teachers">
          <p className="linkHolder">Ажилчид</p>
        </Link>
        <Link href="/about">
          <p className="linkHolder">Тухай</p>
        </Link>
      </div>
    </header>
  )
}

export default Header
