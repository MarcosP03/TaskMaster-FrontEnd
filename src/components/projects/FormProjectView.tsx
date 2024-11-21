import { Label } from "@radix-ui/react-label";
import {
  Card,
  CardHeader,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";

function FormProjectView() {
  return (
    <>
      <Card className="p-4 w-full">
        <CardHeader className="pb-4">
          <h1 className="text-3xl font-bold text-center">
            Crear Nuevo Proyecto
          </h1>
        </CardHeader>
        <CardDescription className="text-base font-light text-gray-500 text-center pb-4">
          Completa el formulario para crear un nuevo proyecto
        </CardDescription>
        <CardContent>
          <form action="" className="flex flex-col gap-4">
            <div className="flex items-center">
              <Label
                htmlFor="projectName"
                className="text-xl font-light" // Ajuste aquí
              >
                Nombre del proyecto:
              </Label>
              <input
                id="projectName"
                type="text"
                className="flex-1 ml-12 p-3 border border-slate-300 rounded-md bg-slate-50"
                placeholder="Nombre del proyecto"
              />
            </div>
            <div className="flex items-center">
              <Label
                htmlFor="projectDescription"
                className="text-xl font-light" // Ajuste aquí
              >
                Descripción:
              </Label>
              <textarea
                id="projectDescription"
                className="flex-1 ml-[134px] p-3 border border-slate-300 rounded-md bg-slate-50"
                placeholder="Descripción del proyecto"
                rows={4}
              />
            </div>

            <div className="flex flex-row justify-between space-x-8">
              <Input
                type="submit"
                className="p-2 bg-slate-800 hover:bg-slate-700 rounded-md font-bold text-white hover:cursor-pointer w-32"
                value={"Cancelar"}
              />
              <Input
                type="submit"
                className="p-2 bg-rose-600 hover:bg-rose-700 rounded-md font-bold text-white hover:cursor-pointer w-32"
                value={"Crear Proyecto"}
              />
            </div>
          </form>
        </CardContent>
      </Card>
    </>
  );
}

export default FormProjectView;
