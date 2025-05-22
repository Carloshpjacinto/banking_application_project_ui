import Image from "next/image";

const Navbar = () => {
  return (
    <nav className="w-full flex items-center text-[2rem] font-medium bg-green-kpp text-white pt-[2.5rem] pr-[10rem] pb-[2rem] max-[102.4rem]:pr-[5rem] justify-between">
      <Image
        src="/Kpp.png"
        alt="Logo_do_banco"
        width={300}
        height={300}
        quality={90}
        priority
        className="rounded-lg w-50 h-20 object-cover ml-[5rem]"
      />
      <div>
        <a href="/register">
          <button className="border border-white rounded-full text-white px-4 py-2 cursor-pointer hover:bg-white hover:text-green-kpp transition-colors duration-500">
            Abra sua conta
          </button>
        </a>
        <a className="ml-20" href="/login">
          Acessar
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
