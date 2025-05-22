const FormRegister = () => {
  return (
    <section className="border rounded-[2.5rem] bg-transparent mr-[30rem] mt-[5.5rem]">
      <form className="w-[50rem] h-[65rem] mt-30 ml-40">
        <div className="leading-20">
          <div className="mb-20">
            <label htmlFor="NameUser" className="text-[2.2rem] block">
              Nome Completo: <span className="text-[#D80835]">*</span>
            </label>
            <input
              type="text"
              id="NameUser"
              name="NameUser"
              required
              minLength={1}
              maxLength={40}
              placeholder="Digite seu nome"
              className="mt-8 block w-[40rem] border-b border-white bg-transparent text-[1.8rem] text-neutral-950 outline-none placeholder-black"
            />
          </div>

          {/* Idade */}
          <div className="mb-20">
            <label htmlFor="AgeUser" className="text-[2.2rem] block">
              E-mail: <span className="text-[#D80835]">*</span>
            </label>
            <input
              type="text"
              id="EmailUser"
              name="EmailUser"
              placeholder="Digite seu email"
              className="mt-8 block w-[40rem] border-b border-white bg-transparent text-[1.8rem] text-neutral-950 outline-none appearance-none placeholder-black"
            />
          </div>

          <div className="mb-20">
            <label htmlFor="AgeUser" className="text-[2.2rem] block">
              CPF: <span className="text-[#D80835]">*</span>
            </label>
            <input
              type="text"
              id="CpfUser"
              name="CpfUser"
              placeholder="Digite seu CPF"
              className="mt-8 block w-[40rem] border-b border-white bg-transparent text-[1.8rem] text-neutral-950 outline-none appearance-none placeholder-black"
            />
          </div>

          <div className="flex justify-center mr-[10rem] mt-[7rem]">
            <button
              type="submit"
              className="text-[2rem] bg-[white] text-green-kpp py-[1rem] px-[5rem] uppercase rounded-[2rem] border-2 border-transparent hover:bg-white hover:text-[black] hover:border-[black] transition-all duration-00"
            >
              Cadastrar
            </button>
          </div>
        </div>
      </form>
    </section>
  );
};

export default FormRegister;
