import Link from 'next/link';

function Header() {
  return (
    <div>
      <p>Next.js</p>
      <nav>
        <ul>
          <Link href="/">Home</Link>
          <Link href="/contato">Contato</Link>
          <Link href="/sobre">Sobre</Link>
        </ul >
      </nav >
    </div >
  );
}

export default Header;