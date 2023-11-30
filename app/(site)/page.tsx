// Importing the Image component from Next.js
import Image from "next/image";
import AuthForm from "./components/AuthForm";

// Defining a functional component named Auth
const Auth = () => {
  // The component returns JSX, which represents the structure of the UI
  return (
    <div 
      className="
        flex 
        min-h-full 
        flex-col 
        justify-center 
        py-12 
        sm:px-6 
        lg:px-8 
        bg-gray-100
      "
    >
      {/* Container for the logo and heading */}
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        {/* Next.js Image component for displaying the logo */}
        <Image
          height="48"
          width="48"
          className="mx-auto w-auto"
          src="/images/logo.png"
          alt="Logo"
        />
        {/* Heading */}
        <h2 
          className="
            mt-6 
            text-center 
            text-3xl 
            font-bold 
            tracking-tight 
            text-gray-900
          "
        >
          Sign in to your account
        </h2>
      </div>  
      <AuthForm/> 
    </div>
  );
}

// Exporting the Auth component to be used in other parts of the application
export default Auth;
