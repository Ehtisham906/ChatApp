import { LogOut, LucidePodcast, Plane, User } from "lucide-react";
import { Link } from "react-router-dom";
import { useAuthStore } from "../store/useAuthStore"

const Navbar = () => {
  const { logout, authUser } = useAuthStore();

  return (
    <header className=" bg-base-100 border-b border-base-300 sticky w-full top-0 z-40 backdrop-blur-lg bg-base-100/80">
      <div className="container mx-auto px-4 h-16">
        <div className="grid grid-cols-2 items-center justify-around h-full">
          <div className="flex  items-center gap-8">
            <Link to="/" className="flex items-center gap-2.5 hover:opacity-80 transition-all">
              <div className="size-9 rounded-lg bg-pink/10 flex items-center justify-center">
                <LucidePodcast className="w-5 h-5  " />
              </div>
              <h1 className="text-lg font-bold">Talkify</h1>
            </Link>
          </div>
          <div className="flex justify-end gap-2">

            <Link
              to={"/login"}
              className={`flex items-center bg-[#250066] text-white px-3 py-2 rounded-lg gap-2 transition-colors ${authUser ? "hidden" : ""}`}
            >

              <Plane className="size-4" />
              <span className="hidden sm:inline">Get Started</span>
            </Link>

            {authUser && (
              <>
                <Link to={"/profile"} className="btn btn-sm gap-2">
                  <User className="size-5" />
                  <span className="hidden sm:inline">Profile</span>
                </Link>

                <button className="flex gap-2 items-center" onClick={logout}>
                  <LogOut className="size-5" />
                  <span className="hidden sm:inline">Logout</span>
                </button>
              </>
            )}
          </div>
        </div>
      </div>

    </header>
  )
}

export default Navbar



