import redis, { cacheKey } from "@/lib/redis";
import { GetServerSideProps } from "next";
import { parse } from 'cookie';
import Navbar from "../components/navbar";

export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
  const cookies:any = parse(req.headers.cookie || '');
  console.log('cookies',cookies)
    const userData: any = await redis.get(cookies.user); // Cache for 1 hour

  return {
    props: {
      userData: JSON.parse(userData),
    },
  };
};

const userData = ({ userData }: { userData: any }) => {
  console.log("userData", userData);

  return (
    <div className="max-w-xl p-6 mx-auto mt-10 bg-white rounded-lg shadow-md">
      <Navbar />
    <h1 className="mb-4 text-2xl font-bold text-blue-600">User Information</h1>
    <p className="text-gray-700"><strong>Name:</strong> {userData.username}</p>
    <p className="text-gray-700"><strong>Email:</strong> {userData.email}</p>
    <p className="text-gray-700"><strong>Role:</strong> {userData.role || 'admin'}</p>
    <p className="text-gray-700"><strong>Phone:</strong> {userData.phone}</p>
    <p className="text-gray-700"><strong>Address:</strong> `${userData.address.city},${userData.address.street},${userData.address.zipcode}` </p>
  </div>
  )
};

export default userData;
