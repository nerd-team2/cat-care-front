import Link from "next/link";


const commonLinkStyle ="  text-lg font-bold hover:text-purple-600"; 

const Navbar = () => {
  return (
    <nav className="bg-purple-100 text-black p-4 shadow-lg">
      <div className="container mx-auto flex justify-around items-center">
        <div className="text-lg font-semibold">
          <Link href="/" className={commonLinkStyle}>
            로고
          </Link>
        </div>
        <div className="space-x-8 sm:space-x-16 md:space-x-24">
        <Link href="/a1" className={commonLinkStyle}>
            메뉴1
          </Link>
          <Link href="/a2" className={commonLinkStyle}>
            메뉴2
          </Link>
          <Link href="/a2" className={commonLinkStyle}>
            메뉴3
          </Link>
        </div>
        <div className="space-x-8 sm:space-x-16 md:space-x-24">
          <Link href="/sign-in" className={commonLinkStyle}>
            로그인
          </Link>
          <Link href="/sign-up" className={commonLinkStyle}>
            회원가입
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
