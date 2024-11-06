import { SignIn } from "@clerk/clerk-react";

const SignInPage = () => {
    return(
        <>
        <div className="flex items-center justify-center h-full">
        <SignIn path="/sign-in" signUpUrl="/sign-up" forceRedirectUrl="/" />
        </div>
        </>
    );
}

export default SignInPage;