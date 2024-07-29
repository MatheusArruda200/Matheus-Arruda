import '../index.css';

export function Content() {
  return (
    <div className="p-4 text-balance lg:ml-1/3 w-full">
      <section id="about" className="mb-8 mt-20">
        <h2 className="text-xl font-semibold mb-5">Sobre Mim</h2>
        <p className="text-blue-200">
          Desenvolvedor Front-end com experiência em React.js, JavaScript, TypeScript, Styled Components e consumo de APIs REST.
          <br />
          Apaixonado pelo desenvolvimento de componentes reutilizáveis.
          <br /> <br />
          Em 2022 meu amigo me apresentou esse mundo da tecnologia e isso me despertou o interesse em estudar desenvolvimento web voltado para o
          <a className='text-white hover:text-blue-500' href="https://www.totvs.com/blog/developers/front-end/" target='_blank'> Front-End.</a> <br /> <br />
          No ano de 2024 iniciei minha graduação de Análise e Desenvolvimento de Sistemas na <a href="https://www.uninter.com/?gad_source=1&gclid=Cj0KCQjw-5y1BhC-ARIsAAM_oKlqny7MFT2jOKrusb-XQgcsYqg77_kYcDmTVUvLPHp8L3mYrjKK-EgaAmaEEALw_wcB" target="blank" className="text-white hover:text-blue-500">UNINTER</a>.
        </p>
      </section>

      <div className='w-full h-px bg-zinc-800 mb-4' />

      <section id="skills" className="mb-8 transition-transform duration-300">
        <h2 className="text-xl font-semibold mb-5">Tecnologias que utilizo</h2>

        <div className='grid grid-cols-3 items-center gap-1.5'>

          <div className='group/item hover:bg-transparent text-center max-w-20 hover:scale-110'>
            <a className="size-20" href="https://pt-br.legacy.reactjs.org/" target='blank'>
              <img className='size-20' src="/assets/react-svgrepo-com.svg" alt="React" title="Clique e saiba mais." />
            </a>
            <p className='group/edit invisible group-hover/item:visible'>React</p>
          </div>

          <div className='group/item hover:bg-transparent text-center max-w-20 hover:scale-110'>
            <a href="https://tailwindcss.com/" target='blank'>
              <img className='size-20' src="assets/tailwind-svgrepo-com.svg" alt="TailwindCSS" title="Clique e saiba mais." />
            </a>
            <p className='group/edit invisible group-hover/item:visible'>TailwindCSS</p>
          </div>

          <div className='group/item hover:bg-transparent text-center max-w-20 hover:scale-110'>
            <a href="https://developer.mozilla.org/pt-BR/docs/Web/JavaScript" target='blank'>
              <img className='size-20' src="/assets/javascript-svgrepo-com.svg" alt="JavaScript" title="Clique e saiba mais." />
            </a>
            <p className='group/edit invisible group-hover/item:visible'>JavaScript</p>
          </div>

          <div className='group/item hover:bg-transparent text-center max-w-20 hover:scale-110'>
            <a href="https://developer.mozilla.org/pt-BR/docs/Web/HTML" target='blank'>
              <img className='size-20' src="/assets/html-5-svgrepo-com.svg" alt="HTML" title="Clique e saiba mais." />
            </a>
            <p className='group/edit invisible group-hover/item:visible'>HTML</p>
          </div>

          <div className='group/item hover:bg-transparent text-center max-w-20 hover:scale-110'>
            <a href="https://developer.mozilla.org/pt-BR/docs/Web/CSS" target='blank'>
              <img className='size-20' src="/assets/css3-01-svgrepo-com.svg" alt="CSS3" title="Clique e saiba mais." />
            </a>
            <p className='group/edit invisible group-hover/item:visible'>CSS3</p>
          </div>
        </div>
      </section>

      <section id="projects" className="mb-8">
        <h2 className="text-xl font-semibold mb-5 flex flex-col">Projetos</h2>
        <div className="text-blue-200 gap-3 grid-cols-2 sm:grid-cols-4 grid space-y-1.5">

          <img className="rounded-xl hover:scale-110 cursor-pointer" src="https://placehold.co/120?text=Em+Breve" alt="" />
          <img className="rounded-xl hover:scale-110 cursor-pointer" src="https://placehold.co/120?text=Em+Breve" alt="" />
          <img className="rounded-xl hover:scale-110 cursor-pointer" src="https://placehold.co/120?text=Em+Breve" alt="" />
          <img className="rounded-xl hover:scale-110 cursor-pointer" src="https://placehold.co/120?text=Em+Breve" alt="" />
          <img className="rounded-xl hover:scale-110 cursor-pointer" src="https://placehold.co/120?text=Em+Breve" alt="" />
          <img className="rounded-xl hover:scale-110 cursor-pointer" src="https://placehold.co/120?text=Em+Breve" alt="" />
          <img className="rounded-xl hover:scale-110 cursor-pointer" src="https://placehold.co/120?text=Em+Breve" alt="" />
          <img className="rounded-xl hover:scale-110 cursor-pointer" src="https://placehold.co/120?text=Em+Breve" alt="" />
        </div>
      </section>
    </div>
  );
}