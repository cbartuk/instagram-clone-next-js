import { getProviders, signIn as SignIntoProvider } from "next-auth/react";
import Header from "/components/Header";

//Browser...
function signIn({ providers }) {
  return (
    <>
      <Header />

      <div className="flex flex-col items-center justify-center min-h-screen py-2 -mt-56 px-14 text-center">
        <img
          src="https://links.papareact.com/ocw"
          alt="instagram"
          className="w-80"
        />
        <p className="font-xs italic">
          This is not a real Instagram, it is a clone built for educational
          purposes.
        </p>
        <div className="mt-40">
          {Object.values(providers).map((provider) => (
            <div key={provider.name}>
              <button
                className="p-3 bg-blue-500 rounded-lg text-white"
                onClick={() =>
                  SignIntoProvider(provider.id, { callbackUrl: "/" })
                }
              >
                Sign in with {provider.name}
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

//Server side rendering...
export async function getServerSideProps() {
  const providers = await getProviders();

  return {
    props: { providers },
  };
}

export default signIn;
