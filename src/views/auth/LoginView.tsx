import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@radix-ui/react-label";
import { Link } from "react-router-dom";

function LoginView() {
  return (
    <>
      <Card className="w-full mt-2 bg-slate-700">
        <div className="flex flex-col items-center justify-center">
          <CardHeader className="text-5xl font-bold text-white">
            Iniciar Sesión
          </CardHeader>
          <CardDescription className="text-base font-medium text-white ml-4">
            Comienza a planificar tus tareas {""}
            <span className="text-base font-medium text-rose-300">
              iniciando sesión con tu cuenta
            </span>
          </CardDescription>
          <hr className="my-4 w-11/12 border-t border-slate-500" />
        </div>
        <CardContent>
          <form className="space-y-4 text-white font-medium">
            <div className="flex flex-col gap-2 ">
              <Label htmlFor="email">Correo:</Label>
              <Input
                type="email"
                placeholder="Correo"
                id="email"
                className="placeholder:text-slate-400"
              />
            </div>
            <div className="flex flex-col gap-2">
              <Label htmlFor="password">Contraseña:</Label>
              <Input
                type="password"
                placeholder="Tu contraseña"
                id="password"
                className="placeholder:text-slate-400"
              />
            </div>

            <Input
              type="submit"
              value={"Iniciar Sesión"}
              className="bg-rose-500 hover:bg-rose-600 text-white font-medium py-2 px-4 rounded-lg cursor-pointer "
            />
          </form>
        </CardContent>
        <CardFooter className="flex flex-col space-y-4 text-sm text-white font-medium text-center">
          <Link to="/auth/register" className="hover:text-rose-400">
            ¿No tienes una cuenta? Crea Una
          </Link>
          <Link to="/auth/forgot-password" className="hover:text-rose-400">
            ¿Olvidaste tu Contraseña?
          </Link>
        </CardFooter>
      </Card>
    </>
  );
}

export default LoginView;
