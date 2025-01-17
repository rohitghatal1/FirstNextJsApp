import Link from "next/link";

const Header: React.FC = () => {
  return (
    <nav>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 bg-black">
          <div className="flex-shrink-0">
            <Link href="/">
              <span className="text-2xl">Next App</span>
            </Link>
          </div>
          <div className="flex items-center justify-around gap-4">
            <Link href="/">
              <span className="text-white hover:bg-blue-700 rounded">Home</span>
            </Link>
            <Link href="/about">
              <span className="text-white hover:bg-blue-700 rounded">
                About
              </span>
            </Link>
            <Link href="/contact">
              <span className="text-white hover:bg-blue-700 rounded">
                Contact
              </span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
