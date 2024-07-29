import {Sidebar} from './components/Sidebar.tsx';
import {Content} from './components/Content.tsx';

export function App(){
  return (
    <div className=" bg-slate-900 flex min-h-screen text-sky-50 ">
      <Sidebar />
      <Content />
    </div>
  );
};
