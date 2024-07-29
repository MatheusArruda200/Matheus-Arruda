
export function Content() {

  return (

    <div className="mx-10 w-auto overflow-y-auto p-4 text-balance">
      <section id="about" className="mb-8 mt-20">
        <h2 className="text-x1 font-semibold mb-5">Sobre Mim</h2>
        <p className="text-blue-200 ">Em 2022 meu amigo me apresentou esse mundo da tecnologia e isso me despertou o interesse em estudar desenvolvimento web voltado para o
          <a className='text-white hover:text-blue-500' href="https://www.totvs.com/blog/developers/front-end/" target='_blank'> Front-End.</a> <br /> <br />
          No ano de 2024 iniciei minha graduação de Análise e Desenvolvimento de Sistemas. <br />
          Desenvolvi habilidades com alguns projetos pessoais e free-lances.
        </p>
      </section>

      <div className='w-full h-px bg-zinc-800 mb-4' />

      <section
        id="skills"
        className="mb-8 transition-transform duration-300">
        <h2 className="text-xl font-semibold mb-5">Tecnologias que utilizo</h2>

        <div className='grid grid-cols-3 items-center gap-1.5'>

          <div className='group/item hover:bg-transparent text-center max-w-20 '>
            <a className="size-20"
             href="https://pt-br.legacy.reactjs.org/" target='blank'>
              <img
                className='size-20'
                src="/assets/react-svgrepo-com.svg" alt="React" title="Clique e saiba mais." />
            </a>
            <p className='group/edit invisible  group-hover/item:visible'>React</p>
          </div>

          <div className='group/item hover:bg-transparent text-center max-w-20'>
            <a href="https://tailwindcss.com/" target='blank'>
              <img
                className='size-20'
                src="assets/tailwind-svgrepo-com.svg" alt="TailwindCSS" title="Clique e saiba mais."/>
            </a>
            <p className='group/edit invisible  group-hover/item:visible'>TailwindCSS</p>
          </div>

          <div className='group/item hover:bg-transparent text-center max-w-20'>
            <a
              href="https://developer.mozilla.org/pt-BR/docs/Web/JavaScript" target='blank'>
              <img
                className='size-20'
                src="/assets/javascript-svgrepo-com.svg" alt="JavaScript" title="Clique e saiba mais."/>
            </a>
            <p className='group/edit invisible  group-hover/item:visible'>JavaScript</p>
          </div>

          <div className='group/item hover:bg-transparent text-center max-w-20'>
            <a href="https://developer.mozilla.org/pt-BR/docs/Web/HTML" target='blank'>
              <img
                className='size-20'
                src="/assets/html-5-svgrepo-com.svg" alt="HTML" title="Clique e saiba mais."/>
            </a>
            <p className='group/edit invisible  group-hover/item:visible'>HTML</p>
          </div>


          <div className='group/item hover:bg-transparent text-center max-w-20'>
            <a href="https://developer.mozilla.org/pt-BR/docs/Web/CSS" target='blank'>
              <img
                className='size-20'
                src="/assets/css3-01-svgrepo-com.svg" alt="CSS3" title="Clique e saiba mais."/>
            </a>
            <p className='group/edit invisible  group-hover/item:visible'>CSS3</p>
          </div>

        </div>

      </section>

      <section id="projects" className="mb-8">
        <h2 className="text-xl font-semibold mb-5 flex flex-col">Projetos</h2>
        <div className="text-blue-200 flex gap-3">

          <img src="https://placehold.co/120?text=Em+Breve" alt="" />
          <img src="https://placehold.co/120?text=Em+Breve" alt="" />
          <img src="https://placehold.co/120?text=Em+Breve" alt="" />
          <img src="https://placehold.co/120?text=Em+Breve" alt="" />
          <img src="https://placehold.co/120?text=Em+Breve" alt="" />
  
        </div>
      </section>
      
    </div>
  );
};


