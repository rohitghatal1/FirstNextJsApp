import Link from "next/link";

const Footer: React.FC = () => {
  return (
    <div className="flex justify-between items-start mx-4 absolute bottom-0 w-full">
      <div className="flex flex-col gap-3">
        <p className="text-lg font-semibold py-3">First Next App</p>
      </div>
      <div className="flex flex-col items-center gap-3">
        <h2 className="font-semibold text-lg py-3">Links</h2>
        <div>
          <Link href="/">
            <span>Home</span>
          </Link>
          <Link href="/">
            <span>About</span>
          </Link>
          <Link href="/">
            <span>Contact</span>
          </Link>
        </div>
      </div>
      <div>
        <h3 className="font-semibold text-lg py-3">Contacts</h3>
      </div>
    </div>
  );
};

export default Footer;
