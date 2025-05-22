/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @next/next/no-html-link-for-pages */
'use client';
import { signIn } from 'next-auth/react';
import { FormEvent } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import Footer from '@/components/Footer';
import FormRegister from '@/components/Forms/FormRegister';

export default function LoginPage() {
  const router = useRouter();

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    const email = form.email.value;
    const password = form.password.value;

    const response = await signIn('credentials', {
      redirect: false,
      email,
      password,
    });

    if (response?.ok) {
      router.push('/');
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
          <a
            href="/login"
            className="hover:text-black transition-colors duration-500"
          >
            Acessar
          </a>
        </div>
      </div>

      <div className="flex flex-row justify-between">
        <main className="flex flex-col items-center text-center mt-55 ml-40 px-8">
          <section
            id="infoContact"
            className="flex flex-col items-center max-w-[800px]"
          >
            <div className="mb-[20rem]">
              <h1 className="text-[5.5rem] font-semibold mb-8">
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

        <FormRegister />
      </div>

      <Footer />
    </div>
  );
}
