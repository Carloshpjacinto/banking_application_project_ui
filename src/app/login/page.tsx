/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @next/next/no-html-link-for-pages */
'use client'
import { signIn } from 'next-auth/react';
import { FormEvent } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import Footer from '@/components/Footer';

export default function LoginPage() {
  const router = useRouter();

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    const num_account = form.num_account.value;
    const access = form.access.value;

    const response = await signIn('credentials', {
      redirect: false,
      num_account,
      access,
    });

    if (response?.ok) {
      router.push('/perfil');
    } else {
      alert('erro na autenticação');
    }
  };

  return (
    <div className="min-h-screen w-full bg-green-kpp font-sans text-white">
      <div className="flex justify-between items-center px-[5rem] pt-[2rem]">
        <Image
          src="/Kpp.png"
          alt="Logo_do_banco"
          width={300}
          height={300}
          quality={90}
          priority
          className="w-50 h-20 object-cover"
        />
        <div className="flex items-center text-[2rem] font-medium space-x-20 mr-[5rem]">
          <a
            href="/"
            className="hover:text-black transition-colors duration-500"
          >
            Home
          </a>
          <a href="/register">
            <button className="border border-white rounded-full text-white px-4 py-2 cursor-pointer hover:bg-white hover:text-green-kpp transition-colors duration-500">
              Abra sua conta
            </button>
          </a>
        </div>
      </div>

      <div className="flex flex-row justify-between">
        <main className="flex flex-col items-center text-center mt-50 ml-40 px-8">
          <section
            id="infoContact"
            className="flex flex-col items-center max-w-[800px]"
          >
            <div className="mb-[15rem]">
              <h1 className="text-[5.5rem] font-semibold mb-8">
                Acesse sua conta e fique por dentro das novidades!
              </h1>
              <p className="text-[2.2rem]">
                Com a Kontopp, você transforma seu jeito.
                <br />
                mais simples, mais digital, mais seu.
              </p>
            </div>

            <h3 className="text-[3rem] font-semibold">Contato</h3>
            <div className="space-y-2">
              <p className="text-[2rem]">kontopp@gmail.com</p>
              <p className="text-[2rem]">+55 11 4004-5125</p>
            </div>
          </section>
        </main>

        <section className="border rounded-[2.5rem] bg-transparent mr-[30rem] mt-[10rem]">
          <form
            className="w-[50rem] h-[50rem] mt-30 ml-40"
            onSubmit={handleSubmit}
          >
            <div className="leading-20">
              <div className="mb-20">
                <label htmlFor="access" className="text-[2.2rem] block">
                  Senha de Acesso: <span className="text-[#D80835]">*</span>
                </label>
                <input
                  type="password"
                  id="access"
                  name="access"
                  required
                  minLength={1}
                  maxLength={40}
                  placeholder="Digite sua senha de acesso"
                  className="mt-8 block w-[40rem] border-b border-white bg-transparent text-[1.8rem] text-neutral-950 outline-none placeholder-black"
                />
              </div>

              <div className="mb-20">
                <label htmlFor="num_account" className="text-[2.2rem] block">
                  Número da conta: <span className="text-[#D80835]">*</span>
                </label>
                <input
                  type="text"
                  id="num_account"
                  name="num_account"
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
      </div>
      <Footer />
    </div>
  );
}
