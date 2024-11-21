import {
  Card,
  CardHeader,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@radix-ui/react-label";
import { Link } from "react-router-dom";

function ForgotPasswordView() {
  return (
    <>
      <Card className="w-full mt-2 bg-slate-700">
        <div className="flex flex-col items-center justify-center">
          <CardHeader className="text-[40px] font-bold whitespace-nowrap text-white">
            Recuperar Contraseña
          </CardHeader>
          <CardDescription className="text-base font-medium text-white ml-4">
            Recupera el acceso a tu cuenta {""}
            <span className="text-base font-medium text-rose-300">
              de TaskMaster
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

            <Input
              type="submit"
              value={"Enviar Instrucciones"}
              className="bg-rose-500 hover:bg-rose-600 text-white font-medium py-2 px-4 rounded-lg cursor-pointer "
            />
          </form>
        </CardContent>
        <CardFooter className="flex flex-col space-y-4 text-sm text-white font-medium text-center">
          <Link to="/auth/login" className="hover:text-rose-400">
            ¿Ya tienes una cuenta? Inicia Sesión
          </Link>
          <Link to="/auth/register" className="hover:text-rose-400">
            ¿No tienes una cuenta? Crea Una
          </Link>
        </CardFooter>
      </Card>
    </>
  );
}

export default ForgotPasswordView;
