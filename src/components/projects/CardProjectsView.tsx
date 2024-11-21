import { ClipboardPen, ClipboardCheck, ClipboardX, Users } from "lucide-react";
import { Card, CardHeader, CardDescription, CardContent } from "../ui/card";
import { Link } from "react-router-dom";

export default function CardProjectsView() {
  return (
    <>
      <Link to="/projects/:projectId">
        <Card className="w-full border border-slate-400 bg-slate-200 hover:shadow-2xl hover:cursor-pointer hover:transition-all">
          <CardHeader className="pb-2">
            <h1 className="font-bold text-3xl text-center hover:cursor-pointer hover:underline">
              HealthLife Backend
            </h1>
          </CardHeader>
          <CardDescription className="text-base font-light text-gray-500 text-center pb-4">
            Desarrollar el backend de HealthLife
          </CardDescription>
          <CardContent className="grid grid-cols-2 gap-4">
            <div className="flex items-center justify-center space-x-2">
              <ClipboardPen />
              <p>
                Tareas: <span className="text-rose-600 font-medium">10</span>
              </p>
            </div>
            <div className="flex items-center justify-center space-x-2">
              <ClipboardCheck />
              <p>
                Completadas:{" "}
                <span className="text-rose-600 font-medium">4</span>
              </p>
            </div>
            <div className="flex items-center justify-center space-x-2">
              <ClipboardX />
              <p>
                Pendientes: <span className="text-rose-600 font-medium">6</span>
              </p>
            </div>
            <div className="flex items-center justify-center space-x-2">
              <Users />
              <p className="font-light">
                Miembros: <span className="text-rose-600 font-medium">3</span>
              </p>
            </div>
          </CardContent>
        </Card>
      </Link>
    </>
  );
}
