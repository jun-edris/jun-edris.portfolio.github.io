import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <header className=" flex justify-between items-center">
      <Link href="/">
        <Image
          src="/logo.svg"
          alt="Junaire Edris Buico"
          width={55}
          height={55}
        />
      </Link>
      <a
        href="Junaire Edris Buico_CV.pdf"
        download="Junaire Edris Buico_CV.pdf"
        className="rounded-full px-6 py-3 text-white border bg-black transition-all duration-200 hover:bg-zinc-950 inline-block"
      >
        Download My Resume
      </a>
    </header>
  );
};

export default Header;
