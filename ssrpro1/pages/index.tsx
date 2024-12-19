import { useRouter } from "next/navigation";




export default function Home() {

  const router = useRouter();
  const handleClick = () => {
    router.push('/auth/login')
  };

  

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      {" "}
      <h1 className="mb-4 text-2xl font-bold text-blue-500">
      Welcome to Next Page
      </h1>{" "}
      <button
        onClick={handleClick}
        className="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700"
      >
      login
      </button>
    </div>
  );
}
