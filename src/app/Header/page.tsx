import Link from 'next/link'

export default function Header() {
  return (
    <div className="w-full bg-zinc-700 h-20 text-white flex items-center justify-between">
      <div className="px-5">Logo</div>
      <nav>
        <Link href="/" className="px-5 max-sm:px-1">
          Home
        </Link>
        <Link href="/events" className="px-5 max-sm:px-1">
          Eventos
        </Link>
        <Link href="contact" className="px-5 max-sm:px-1">
          contato
        </Link>
        <Link href="/sobre" className="px-5 max-sm:px-1">
          sobre
        </Link>
      </nav>
    </div>
  )
}
