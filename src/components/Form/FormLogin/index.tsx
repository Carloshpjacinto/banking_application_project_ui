const FormLogin = () => {
  return (
    <section className="border rounded-[2.5rem] bg-transparent mr-[30rem] mt-[10rem]">
      <form className="w-[50rem] h-[50rem] mt-30 ml-40">
        <div className="leading-20">
          <div className="mb-20">
            <label htmlFor="NameUser" className="text-[2.2rem] block">
              Senha de Acesso: <span className="text-[#D80835]">*</span>
            </label>
            <input
              type="text"
              id="NameUser"
              name="NameUser"
              required
              minLength={1}
              maxLength={40}
              placeholder="Digite sua senha de acesso"
              className="mt-8 block w-[40rem] border-b border-white bg-transparent text-[1.8rem] text-neutral-950 outline-none placeholder-black"
            />
          </div>

          <div className="mb-20">
            <label htmlFor="AgeUser" className="text-[2.2rem] block">
              Número da conta: <span className="text-[#D80835]">*</span>
            </label>
            <input
              type="text"
              id="EmailUser"
              name="EmailUser"
              placeholder="Digite o número da conta"
              className="mt-8 block w-[40rem] border-b border-white bg-transparent text-[1.8rem] text-neutral-950 outline-none appearance-none placeholder-black"
            />
          </div>

          <div className="flex justify-center mr-[10rem] mt-[7rem]">
            <button
              type="submit"
              className="text-[2rem] bg-[white] text-green-kpp py-[1rem] px-[5rem] uppercase rounded-[2rem] border-2 border-transparent hover:bg-white hover:text-[black] hover:border-[black] transition-all duration-00"
            >
              Acessar minha conta
            </button>
          </div>
        </div>
      </form>
    </section>
  );
};

export default FormLogin;
