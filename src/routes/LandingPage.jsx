import React, { useContext } from "react";
import { Link } from "react-router-dom";
import homePageImg from "../images/home.png"
import LandingLoading from "../Components/LandingLoadings";
import { userContext } from "../Context/UserProvider";

const LandingPage = () => {
  const { users, isloading } = useContext(userContext);

  return (
    <div
      className="py-28"
      style={{
        backgroundImage: `url(${homePageImg})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",
        backgroundSize: "cover",
      }}
    >
      <div
        className="border-2 w-[38%] m-auto  rounded-[3rem] "
        style={{
          boxShadow:
            "rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px",
        }}
      >
        <div className=" bg-gray-100 rounded-t-[2.8rem]">
          <h1 className="text-xl text-zinc-600 font-semibold p-8 text-center">
            Select User Account
          </h1>
        </div>
        {
          isloading ? (<LandingLoading />) :

            (<div className="bg-white rounded-b-[2.8rem]">
              <div className="p-8 overflow-y-auto h-[28rem] scrollbar-thin">
                {users?.length > 0 &&
                  users.map((user) => (
                    <li key={user.id} className="mb-4 list-none ">
                      <Link
                        to={`/profile/${user.id}`}
                        className="block  rounded hover:bg-gray-100 "
                      >
                        <div className="flex items-center pb-4 bg-white">
                          <img
                            src={user.profilepicture}
                            alt={user.username}
                            className="w-11 h-11 rounded-full mr-2"
                          />
                          <div className="font-medium">{user.name}</div>
                        </div>
                        <hr />
                      </Link>
                    </li>
                  ))}
              </div>
            </div>)
        }
      </div>
    </div>
  );
};

export default LandingPage;
