import Footer from '@/components/Footer';
import Navbar from '@/components/Nav';
import Image from 'next/image';

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="mr-[0rem] mt-[2.5rem] text-default flex flex-row">
        <Image
          src="/imagemDaHome.png"
          alt="Foto_de_modelo"
          width={600}
          height={600}
          sizes="(max-width: 1024px) 100vw, 600px"
          quality={90}
          priority
          className="ml-[12.5rem] w-full max-w-[600px] md:hidden lg:block lg:ml-[2rem]"
        />
        <div>
          <h1 className="ml-[-5rem] mt-[5rem] font-black text-[7rem] text-green-kpp md:text-[5rem] md:ml-[5rem] lg:ml-[4rem]">
            Onde ideias viram impacto. <br /> Vem ser Kontopp.
          </h1>
          <div className="mt-[4rem] ml-[-2rem] font-medium text-[2rem] leading-[5rem] mr-[40rem] md:ml-[5rem] md:mr-[5rem]">
            <p>
              O <strong>Kontopp</strong> é um banco digital que nasce com um
              propósito claro: unir{' '}
              <strong>tecnologia, inovação e excelência</strong> para
              transformar a experiência financeira.
            </p>
            <p>
              Mais do que produtos financeiros, entregamos soluções
              inteligentes, funcionais e de alta performance, com foco em{' '}
              <strong>qualidade, segurança e eficiência</strong>.
            </p>
            <p>
              Cada serviço do Kontopp é desenvolvido com visão de futuro, usando
              tecnologia de ponta, dados em tempo real e arquitetura escalável.
            </p>
            <p>
              Nossa equipe é formada por especialistas que unem agilidade e
              estratégia para criar experiências simples, rápidas e confiáveis.
            </p>
            <p>
              <strong>Kontopp é mais que um banco</strong>: é a evolução de como
              você se relaciona com o seu dinheiro — de forma prática, digital e
              inteligente.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
