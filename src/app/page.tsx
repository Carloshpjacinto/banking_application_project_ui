import Footer from '@/components/Footer';
import Navbar from '@/components/Nav';
import Image from 'next/image';

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex flex-col-reverse lg:flex-row items-center px-6 py-12 text-default">
        <div className="w-full lg:w-1/2 mb-8 lg:mb-0 flex justify-center">
          <Image
            src="/imagemDaHome.png"
            alt="Foto_de_modelo"
            width={600}
            height={600}
            quality={90}
            priority
            className="hidden xl:block max-w-full h-auto"
          />
        </div>
        <div className="w-full lg:w-1/2">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-green-kpp mb-8 text-center lg:text-[7rem] lg:mt-[-10rem] lg:ml-[-25rem]">
            Onde ideias viram impacto.
            <br /> Vem ser Kontopp.
          </h1>
          <div className="text-lg md:text-xl leading-relaxed space-y-6 text-justify xl:text-[2rem] xl:ml-[-8rem] xl:mr-[10rem] xl:mt-[5rem]">
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
