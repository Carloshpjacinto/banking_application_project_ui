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
    <div className="min-h-screen w-full bg-green-kpp font-sans text-white">
      <nav className="flex flex-col sm:flex-row items-center justify-between px-6 sm:px-12 pt-6 sm:pt-10">
        <Image
          src="/Kpp.png"
          alt="Logo_do_banco"
          width={300}
          height={300}
          quality={90}
          priority
          className="rounded-lg w-50 h-20 object-cover ml-[5rem] lg:ml-[2.5rem]"
        />
        <div className="flex space-x-6 text-lg sm:text-2xl mt-4 sm:mt-0 lg:text-[2.5rem] lg:mr-[5rem] lg:space-x-20">
          <a href="/" className="hover:text-black transition-colors duration-700">
            Home
          </a>
          <a href="/login" className="hover:text-black transition-colors duration-700">
            Acessar
          </a>
        </div>
      </nav>

      <div className="flex flex-col-reverse lg:flex-row items-center justify-center px-6 sm:px-12 py-12 gap-16 lg:justify-between">
        <main className="text-center xl:mt-[15rem] xl:ml-[10rem]">
          <h1 className="text-3xl sm:text-5xl font-semibold mb-6 lg:text-[5rem] lg:mt-[-5rem] xl:text-[5.5rem]">
            Crie sua conta e conheça o novo!
          </h1>
          <p className="text-lg sm:text-2xl mb-10 lg:text-[2rem]">
            Você receberá no seu e-mail seus dados da nova conta.
          </p>
          <h3 className="text-xl sm:text-3xl font-semibold lg:mt-[20rem]">Contato</h3>
          <div className="text-base sm:text-xl space-y-1 mt-2 lg:text-[2rem]">
            <p>kontopp@gmail.com</p>
            <p>+55 11 4004-5125</p>
          </div>
        </main>

        <section className="w-full bg-white/10 rounded-3xl p-6 sm:p-10 border lg:mr-[10rem] lg:w-[60rem] lg:h-[50rem] xl:mr-[20rem] xl:mt-[4.5rem]">
          <form action={formAction} className="space-y-8 lg:p-[4rem]">
            <div className=''>
              <label htmlFor="NameUser" className="block text-base sm:text-xl lg:text-[2.5rem] lg:mb-[1.5rem]">
                Nome Completo: <span className="text-[#D80835]">*</span>
              </label>
              <input
                type="text"
                id="NameUser"
                name="NameUser"
                required
                maxLength={40}
                placeholder="Digite seu nome"
                className="mt-2 w-full border-b border-white bg-transparent text-black placeholder-gray outline-none text-sm sm:text-base lg:text-[1.5rem] lg:mb-[2rem]"
              />
            </div>

            <div>
              <label htmlFor="EmailUser" className="block text-base sm:text-xl lg:text-[2.5rem] lg:mb-[1.5rem]">
                E-mail: <span className="text-[#D80835]">*</span>
              </label>
              <input
                type="text"
                id="EmailUser"
                name="EmailUser"
                required
                placeholder="Digite seu e-mail"
                className="mt-2 w-full border-b border-white bg-transparent text-black placeholder-gray outline-none text-sm sm:text-base lg:text-[1.5rem] lg:mb-[2rem]"
              />
            </div>

            <div>
              <label htmlFor="CpfUser" className="block text-base sm:text-xl lg:text-[2.5rem] lg:mb-[1.5rem]">
                CPF: <span className="text-[#D80835]">*</span>
              </label>
              <input
                type="text"
                id="CpfUser"
                name="CpfUser"
                required
                placeholder="Digite seu CPF"
                className="mt-2 w-full border-b border-white bg-transparent text-black placeholder-gray outline-none text-sm sm:text-base lg:text-[1.5rem] lg:mb-[2rem]"
              />
            </div>

            <div className="flex justify-center pt-4">
              <button
                type="submit"
                className="text-sm sm:text-base bg-white text-green-kpp px-6 py-2 rounded-full uppercase border-2 border-transparent hover:text-black hover:border-black transition duration-700 lg:text-[1.8rem]"
              >
                Cadastrar
              </button>
            </div>
          </form>
        </section>
      </div>

      <Footer />
    </div>
  );
}
