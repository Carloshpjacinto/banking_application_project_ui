const Navbar = () => {
  return (
    <nav className="w-full flex items-center justify-end text-[2rem] font-medium bg-green-kpp text-white pt-[2.5rem] pr-[10rem] pb-[2rem] max-[102.4rem]:pr-[5rem]">
      <a href="/register">
        <button className="border border-white rounded-full text-white px-4 py-2 cursor-pointer hover:bg-white hover:text-green-kpp transition-colors duration-500">
          Abra sua conta
        </button>
      </a>
      <a className="ml-20" href="/login">
        Acessar
      </a>
    </nav>
  );
};

export default Navbar;
