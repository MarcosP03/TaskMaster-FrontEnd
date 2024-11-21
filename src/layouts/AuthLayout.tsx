import { Outlet } from "react-router-dom";
import Logo from "@/components/Logo";

function AuthLayout() {
  return (
    <>
      <div className="bg-gray-800 min-h-screen">
        <div className="py-10 lg:py-10 mx-auto w-[450px]">
          <Logo />
          <div className="mt-2 flex flex-col items-center justify-center">
            <Outlet />
          </div>
        </div>

        <footer className="pb-5">
          <p className="text-center text-white font-medium">
            Todos los derechos reservados {new Date().getFullYear()}
          </p>
        </footer>
      </div>
    </>
  );
}

export default AuthLayout;
