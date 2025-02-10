import { SignIn } from "@clerk/clerk-react";

export function Login() {
  return (
    <div className='min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8'>
      <SignIn
        routing='path'
        path='/login'
        signUpUrl='/signup'
        redirectUrl='/dashboard'
        appearance={{
          elements: {
            rootBox: "mx-auto",
            card: "bg-white shadow-xl rounded-lg",
            headerTitle: "text-2xl font-bold text-gray-900",
            headerSubtitle: "text-gray-500",
            socialButtonsBlockButton:
              "bg-green-600 hover:bg-green-700 text-white",
            formButtonPrimary: "bg-green-600 hover:bg-green-700",
          },
        }}
      />
    </div>
  );
}
