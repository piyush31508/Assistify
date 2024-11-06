import { Link, Outlet, useNavigate } from "react-router-dom";
import logo from "../../../images/logo.webp";
import { ClerkProvider, SignedIn, SignedOut, UserButton } from '@clerk/clerk-react'


const PUBLISHABLE_KEY = process.env.REACT_APP_CLERK_PUBLISHABLE_KEY;

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key")
}
const RootLayout = () => {
  
  const navigate = useNavigate();

  const redirectHandler = () => {
    navigate("/sign-in");
  };
  

  return (
    <>
      <ClerkProvider publishableKey={PUBLISHABLE_KEY} afterSignOutUrl="/">
        <div className="container px-[16px] ml-[25px] py-[64px] flex flex-col w-[95%]">
          <header className="flex items-center justify-between">
            <Link to="/" className="logo flex items-center gap-2">
              <img src={logo} alt="Logo" className="h-[32px] w-[32px]" />
              <span>Assistify</span>
            </Link>
            <div className="user" >
              <SignedOut>
                <button
                  onClick={redirectHandler}
                  className='px-4 py-2 text-white rounded-xl bg-[#498bb6] hover:bg-white hover:text-[#498bb6]'
                >Sign In
                </button>
              </SignedOut>
              <SignedIn>
                <UserButton />
              </SignedIn>
            </div>
          </header>
          <main className="overflow-hidden flex-1">
            <Outlet></Outlet>
          </main>
        </div>
      </ClerkProvider>
    </>
  );
}

export default RootLayout;