/* eslint-disable @next/next/no-html-link-for-pages */
'use client';
import Image from 'next/image';
import Footer from '@/components/Footer';
import { signupUser } from '../api/auth/RegisterUser/action';
import { useActionState } from 'react';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

const initialState = { error: false, message: '' };

export default function Register() {
  const router = useRouter();
  const [state, formAction] = useActionState(signupUser, initialState);

  useEffect(() => {
    if (state.success) {
      router.push('/register/access');
    }
  }, [state.success, router]);

  return (
    <>
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
            <a
              href="/login"
              className="hover:text-black transition-colors duration-500"
            >
              Acessar
            </a>
          </div>
        </div>

        <div className="xl:flex xl:flex-row xl:justify-between md:flex md:justify-center md:ml-[15rem] md:mt-[5rem] lg:mt-[10rem] lg:ml-[20rem] xl:mt-[0rem]">
          <main className="flex flex-col items-center text-center mt-55 ml-40 px-8">
            <section
              id="infoContact"
              className="flex flex-col items-center max-w-[800px] md:hidden lg:block"
            >
              <div className="xl:mb-[20rem] lg:mb-[10rem]">
                <h1 className="xl:text-[5.5rem] font-semibold mb-8 lg:text-[4rem]">
                  Crie sua conta e conheça o novo!
                </h1>
                <p className="text-[2.2rem]">
                  Você receberá no seu e-mail seus dados da nova conta.
                </p>
              </div>

              <h3 className="text-[3rem] font-semibold">Contato</h3>
              <div className="space-y-2">
                <p className="text-[2rem]">kontopp@gmail.com</p>
                <p className="text-[2rem]">+55 11 4004-5125</p>
              </div>
            </section>
          </main>
          <section className="border rounded-[2.5rem] bg-transparent mr-[30rem] mt-[5.5rem]">
            <form
              className="w-[50rem] h-[65rem] mt-30 ml-40"
              action={formAction}
            >
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
                  <label htmlFor="EmailUser" className="text-[2.2rem] block">
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
                  <label htmlFor="CpfUser" className="text-[2.2rem] block">
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
        </div>
        <Footer />
      </div>
    </>
  );
}
