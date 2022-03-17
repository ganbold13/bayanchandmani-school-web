import Link from 'next/link'

function Header() {
  return (
    <header className="mx-auto flex max-w-7xl justify-between p-2">
      <div>
        <Link href="/">
          <img
            className="w-24 cursor-pointer object-contain transition ease-in-out hover:scale-110"
            src="/vercel.svg"
          />
        </Link>
      </div>
      <div className="inline-flex items-center space-x-5 ">
        <Link href="/teachers">
          <p className="linkHolder">Teachers</p>
        </Link>
        <Link href="/about">
          <p className="linkHolder">About</p>
        </Link>
        <Link href="/coming">
          <p className="linkHolder">Test</p>
        </Link>
      </div>
    </header>
  )
}

export default Header
