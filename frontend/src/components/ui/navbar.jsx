"use client";
import { SproutIcon as Seedling, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "./button";
import { supabase } from "../lib/supabaseClient";

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [user, setUser] = useState(null);

  // Check if the user is logged in using modern Supabase API
  useEffect(() => {
    // Get initial auth state
    const getUser = async () => {
      const {
        data: { session },
      } = await supabase.auth.getSession();
      console.log(session?.user);
      setUser(session?.user || null);
    };

    getUser();

    // Set up auth listener
    const { data: authListener } = supabase.auth.onAuthStateChange(
      (event, session) => {
        setUser(session?.user || null);
      }
    );

    // Clean up listener on component unmount
    return () => {
      authListener?.subscription.unsubscribe();
    };
  }, []);

  const handleLogout = async () => {
    await supabase.auth.signOut();
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Seedling className="h-6 w-6 text-green-600" />
          <span className="text-xl font-bold text-green-800">KrishiSetu</span>
        </div>

        <nav className="hidden md:flex items-center gap-6">
          <Link
            to="/"
            className="text-sm font-medium text-green-900 hover:text-green-700"
          >
            Home
          </Link>
          <Link
            to="/dashboard"
            className="text-sm font-medium text-green-900 hover:text-green-700"
          >
            Dashboard
          </Link>
          <Link
            to="/online-mandi"
            className="text-sm font-medium text-green-900 hover:text-green-700"
          >
            Online Mandi
          </Link>
          <Link
            to="/crop-recommedations"
            className="text-sm font-medium text-green-900 hover:text-green-700"
          >
            Crop Recommendation
          </Link>
          <Link
            to="/about-us"
            className="text-sm font-medium text-green-900 hover:text-green-700"
          >
            About Us
          </Link>
        </nav>

        <div className="flex items-center gap-4">
          {!user ? (
            <>
              <Button
                variant="outline"
                className="hidden md:flex border-green-600 text-green-700 hover:bg-green-50"
              >
                <Link to="/login">Login</Link>
              </Button>
              <Button className="hidden md:flex bg-green-700 hover:bg-green-800">
                <Link to="/register">Sign Up</Link>
              </Button>
            </>
          ) : (
            <>
              <Button
                variant="outline"
                className="hidden md:flex border-green-600 text-green-700 hover:bg-green-50"
              >
                <Link to="/profile">
                  {" "}
                  {user.user_metadata.full_name.split(" ")[0]}
                </Link>
              </Button>
              <Button
                className="hidden md:flex bg-green-700 hover:bg-green-800"
                onClick={handleLogout}
              >
                Logout
              </Button>
            </>
          )}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </Button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden border-t p-4 bg-white">
          <nav className="flex flex-col space-y-4 px-4">
            <Link
              to="/"
              className="text-sm font-medium text-green-900 hover:text-green-700"
            >
              Home
            </Link>
            <Link
              to="/dashboard"
              className="text-sm font-medium text-green-900 hover:text-green-700"
            >
              Dashboard
            </Link>
            <Link
              to="/online-mandi"
              className="text-sm font-medium text-green-900 hover:text-green-700"
            >
              Online Mandi
            </Link>
            <Link
              to="/crop-recommedations"
              className="text-sm font-medium text-green-900 hover:text-green-700"
            >
              Crop Recommendation
            </Link>
            <Link
              to="/about-us"
              className="text-sm font-medium text-green-900 hover:text-green-700"
            >
              About Us
            </Link>
            {!user ? (
              <>
                <Link to="/login" className="block py-2 hover:text-green-600">
                  Login
                </Link>
                <Link
                  to="/register"
                  className="block py-2 hover:text-green-600"
                >
                  Register
                </Link>
              </>
            ) : (
              <div className="flex flex-col space-y-2">
                <Link to="/profile" className="block py-2 hover:text-green-600">
                  {user.user_metadata.full_name}
                </Link>
                <button
                  onClick={handleLogout}
                  className="block py-2 text-red-600 hover:text-red-700 text-left"
                >
                  Logout
                </button>
              </div>
            )}
          </nav>
        </div>
      )}
    </header>
  );
}
