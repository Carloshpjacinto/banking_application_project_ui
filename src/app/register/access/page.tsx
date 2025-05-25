'use client';
import { useActionState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import Footer from '@/components/Footer';
import { signupBankAccount } from '@/app/api/auth/RegisterAccess/action';

const initialState = { error: false, message: '' };

export default function RegisterAccess() {
  const router = useRouter();
  const [state, formAction] = useActionState(signupBankAccount, initialState);

  useEffect(() => {
    if (state.success) {
      router.push('/perfil');
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
      </nav>

      <div className="flex flex-col-reverse lg:flex-row items-center justify-center px-6 sm:px-12 py-12 gap-16">
        <main className="text-center xl:mt-[15rem] xl:ml-[5rem]">
          <h1 className="text-3xl sm:text-5xl font-semibold mb-6 lg:text-[5rem] lg:mt-[-5rem] xl:text-[4rem]">
            Cadastre uma senha de 6 dígitos <br /> para criar sua conta digital!
          </h1>
          <p className="text-lg sm:text-2xl mb-10 lg:text-[2rem]">
            Escolha o melhor tipo de conta para você.
          </p>
          <h3 className="text-xl sm:text-3xl font-semibold lg:mt-[20rem]">
            Contato
          </h3>
          <div className="text-base sm:text-xl space-y-1 mt-2 lg:text-[2rem]">
            <p>kontopp@gmail.com</p>
            <p>+55 11 4004-5125</p>
          </div>
        </main>

        <section className="w-full bg-white/10 rounded-3xl p-6 sm:p-10 border lg:mr-[10rem] lg:w-[60rem] lg:h-[50rem] xl:mr-[20rem] xl:mt-[4.5rem]">
          <form action={formAction} className="space-y-8 lg:p-[4rem]">
            <div>
              <label htmlFor="access" className="block text-base sm:text-xl lg:text-[2.5rem] lg:mb-[1.5rem]">
                Senha de Acesso: <span className="text-[#D80835]">*</span>
              </label>
              <input
                type="password"
                id="access"
                name="access"
                required
                placeholder="Digite uma senha de 6 dígitos"
                className="mt-2 w-full border-b border-white bg-transparent text-black placeholder-gray outline-none text-sm sm:text-base lg:text-[1.5rem] lg:mb-[2rem]"
              />
            </div>

            <div>
              <label className="block text-base sm:text-xl mb-7 lg:text-[2.2rem]">
                Tipo de conta: <span className="text-[#D80835]">*</span>
              </label>
              <div className="flex flex-col sm:flex-row sm:space-x-10 space-y-4 sm:space-y-0 text-base sm:text-lg lg:text-[1.5rem]">
                <label className="flex items-center">
                  <input
                    type="radio"
                    id="contaCorrente"
                    name="type_bank_account"
                    value="CURRENT_ACCOUNT"
                    className="mr-2 w-5 h-5"
                  />
                  Conta Corrente
                </label>
                <label className="flex items-center">
                  <input
                    type="radio"
                    id="contaPoupanca"
                    name="type_bank_account"
                    value="SAVINGS_ACCOUNT"
                    className="mr-2 w-5 h-5"
                  />
                  Conta Poupança
                </label>
              </div>
            </div>

            <div className="flex justify-center pt-4">
              <button
                type="submit"
                className="text-sm sm:text-base bg-white text-green-kpp px-6 py-2 rounded-full uppercase border-2 border-transparent hover:text-black hover:border-black transition duration-700 lg:text-[1.8rem] lg:mt-[5rem]"
              >
                Criar conta
              </button>
            </div>
          </form>
        </section>
      </div>

      <Footer />
    </div>
  );
}
