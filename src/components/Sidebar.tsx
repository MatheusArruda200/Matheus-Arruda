import '../index.css';

export function Sidebar() {

  return (
    <div className="p-4 shadow-md bg-slate-900 px-5 w-full lg:w-1/3">
      <div className="sticky top-0 mt-20">
        <h1 className="text-2xl font-bold mb-4 text-white">Matheus Arruda</h1>
        <h2 className="mb-5 font-semibold text-blue-200">Desenvolvedor Front-End</h2>
        <p className="mb-5">Eu crio experiências digitais perfeitas, envolventes e acessíveis.</p>



        <ul className={`mt-20 lg:block`}>
          <li className="mb-3.5">
            <a href="#about" className="text-blue-200 hover:text-white animate-link hover:translate-x-4">Sobre Mim</a>
          </li>
          <li className="mb-3.5">
            <a href="#skills" className="text-blue-200 hover:text-white animate-link hover:translate-x-4">Habilidades</a>
          </li>
          <li className="mb-3.5">
            <a href="#projects" className="text-blue-200 hover:text-white animate-link hover:translate-x-4">Projetos</a>
          </li>

        </ul>

        <div className="mt-20 grid grid-cols-3 gap-2">
          <a href="https://github.com/MatheusArruda200" target="_blank">
            <img className="w-12 h-12" src="/assets/github-142-svgrepo-com.svg" alt="GitHub" />
          </a>
          <a href="https://www.linkedin.com/in/matheus-arruda-881b43162/" target="_blank">
            <img className="w-12 h-12" src="/assets/linkedin.svg" alt="Linkedin" />
          </a>
          <a href="https://wa.me/5581995012029" target="_blank">
            <img className="w-12 h-12" src="/assets/wpp.svg" alt="Whatsapp" />
          </a>
        </div>
      </div>
    </div>
  );
}