import { useRouter } from "next/navigation";


const Navbar = () => {
    const router = useRouter()
    
    const navigateUser = (e:any,path:string) => {
        e.preventDefault()
        router.push(path)
    }
  return (
    <nav className="bg-blue-600 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-lg font-bold">
          MyApp
        </div>
        <div className="space-x-4">
          <a className="text-white hover:text-gray-200" onClick={(e) => navigateUser(e,'/user') }>User</a>
          <a  className="text-white hover:text-gray-200" onClick={(e) => navigateUser(e,'/admin')  }>Admin</a>
          <a  className="text-white hover:text-gray-200" onClick={(e) => navigateUser(e,'/doctor') }>Doctor</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
