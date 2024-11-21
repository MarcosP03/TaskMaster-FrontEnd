import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import CardProjectsView from "@/components/projects/CardProjectsView";

function DashboardView() {
  return (
    <>
      <h1 className="text-5xl font-black">
        Dashboard de <span className="text-rose-600">Task</span>Master
      </h1>
      <p className="text-xl font-light mt-2 text-gray-500">
        Bienvenido a TaskMaster, una aplicación web para gestionar tareas y
        proyectos.
      </p>

      <nav className="my-5 ">
        <Link to="/projects/new-project">
          <Button className="bg-rose-600 hover:bg-rose-800 py-6 px-10 text-2xl hover:cursor-pointerz">
            Crear Proyecto
          </Button>
        </Link>
      </nav>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-10">
        <CardProjectsView />
      </div>
    </>
  );
}

export default DashboardView;
