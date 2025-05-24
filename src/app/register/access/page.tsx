/* eslint-disable @typescript-eslint/no-unused-vars */
'use client';
import { signIn } from 'next-auth/react';
import { FormEvent, useActionState, useEffect } from 'react';
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
      </div>

      <div className="flex flex-row justify-between">
        <main className="flex flex-col items-center text-center mt-45 ml-40 px-8 md:ml-30">
          <section
            id="infoContact"
            className="flex flex-col items-center max-w-[800px] md:hidden lg:block"
          >
            <div className="mb-[20rem]">
              <h1 className="xl:text-[5.5rem] font-semibold xl:mb-8 lg:text-[4rem]">
                Cadastre uma senha de 6 dígitos para criar sua conta digital!
              </h1>
              <p className="text-[2.2rem]">
                Escolha o melhor tipo de conta para você.
              </p>
            </div>

            <h3 className="text-[3rem] font-semibold">Contato</h3>
            <div className="space-y-2">
              <p className="text-[2rem]">kontopp@gmail.com</p>
              <p className="text-[2rem]">+55 11 4004-5125</p>
            </div>
          </section>
        </main>
        <section className="border rounded-[2.5rem] bg-transparent mr-[30rem] mt-[10rem] lg:mr-[10rem]">
          <form className="w-[50rem] h-[50rem] mt-30 ml-40" action={formAction}>
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
                  placeholder="Digite uma senha de 6 digitos"
                  className="mt-8 block w-[40rem] border-b border-white bg-transparent text-[1.8rem] text-neutral-950 outline-none placeholder-black"
                />
              </div>

              <div className="mb-20">
                <label className="text-[2.2rem] block mb-8">
                  Tipo de conta: <span className="text-[#D80835]">*</span>
                </label>
                <div className="flex items-center space-x-20 text-[1.8rem]">
                  <div className="flex items-center">
                    <input
                      type="radio"
                      id="contaCorrente"
                      name="type_bank_account"
                      value="CURRENT_ACCOUNT"
                      className="mr-4 w-6 h-6"
                    />
                    <label htmlFor="contaCorrente">Conta Corrente</label>
                  </div>

                  <div className="flex items-center">
                    <input
                      type="radio"
                      id="contaPoupanca"
                      name="type_bank_account"
                      value="SAVINGS_ACCOUNT"
                      className="mr-4 w-6 h-6"
                    />
                    <label htmlFor="contaPoupanca">Conta Poupança</label>
                  </div>
                </div>
              </div>

              <div className="flex justify-center mr-[10rem] mt-[7rem]">
                <button
                  type="submit"
                  className="text-[2rem] bg-[white] text-green-kpp py-[1rem] px-[5rem] uppercase rounded-[2rem] border-2 border-transparent hover:bg-white hover:text-[black] hover:border-[black] transition-all duration-00"
                >
                  Criar conta
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
