import Link from 'next/link'

function Header() {
  return (
    <header className="flex justify-between px-12 py-1">
      <div>
        <Link href="/">
          <div className="flex cursor-pointer flex-row items-center transition ease-in-out hover:scale-105">
            <img className="w-10 object-contain " src="/logo.png" />
            <span className="text-lg text-blue-999">Баянчандмань ЕБС</span>
          </div>
        </Link>
      </div>
      <div className="inline-flex items-center space-x-7 ">
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
