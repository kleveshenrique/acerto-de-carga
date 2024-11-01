import Link from 'next/link'

export default function Header() {
  return (
    <div className="bg-zinc-700 h-20 text-white flex items-center justify-between px-10">
      <div>Logo</div>
      <nav className="">
        <Link href="/" className="px-5">
          Home
        </Link>
        <Link href="/events" className="px-5">
          Eventos
        </Link>
        <Link href="contact" className="px-5">
          contato
        </Link>
        <Link href="/sobre" className="px-5">
          sobre
        </Link>
      </nav>
    </div>
  )
}
