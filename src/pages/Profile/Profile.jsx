import React, { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProviders";
import { FaUserAlt } from "react-icons/fa";

const Profile = () => {
  const { user } = useContext(AuthContext);
  //   const { displayName, email, photoURL, uid } = user;
  console.log(user?.displayName, user?.email, user?.photoURL, user?.uid);
  return (
    <div>
      <div className="max-w-lg min-h-screen m-auto  mt-20 text-center">
        {user.photoURL ? (
          <img
            className="text-center
        mx-auto rounded-full border-4 border-black p-1"
            src={user?.photoURL}
            alt=""
          />
        ) : (
          <FaUserAlt className="text-5xl text-center mx-auto mx-3"></FaUserAlt>
        )}
        <div className="space-y-3 mt-10 ">
          <h1>ID: {user?.uid}</h1>
          <h1 className="text-2xl font-extrabold">Name: {user?.displayName}</h1>
          <h1>
            Email: <a href={`mailto:${user?.email}`}>{user?.email}</a>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Profile;
