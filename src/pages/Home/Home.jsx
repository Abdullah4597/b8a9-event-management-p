import React, { useContext } from "react";
import Header from "../../components/Header/Header";
import Services from "../../components/Services/Services";
import { AuthContext } from "../../Providers/AuthProviders";
import { useLoaderData } from "react-router-dom";
import Team from "../../components/Team/Team";
import Partner from "../../components/Partner/Partner";


const Home = () => {
  const { events, team } = useLoaderData();

  return (
    <div>
      <Header></Header>
      <div className="mt-20">
        <h2 className="border-b-4 border-purple-600 w-4/12 mx-auto text-center py-5 text-4xl font-extrabold">
          Services
        </h2>
        <div className="grid max-w-6xl mx-auto mt-10 gap-4 md:grid-cols-3 grid-cols-1">
          {events?.map((event) => (
            <Services key={event.id} event={event}></Services>
          ))}
        </div>
        <div className="my-10 bg-slate-300 py-10 ">
          <h2 className="border-b-4 border-purple-600 w-4/12 mx-auto text-center mb-10 py-5 text-4xl font-extrabold">
            Our Team
          </h2>
          <div
            className="grid md:grid-cols-4 grid-cols-2 max-w-6xl justify-between
         mx-auto  gap-5"
          >
            {team.map((person) => (
              <Team person={person}></Team>
            ))}
          </div>
        </div>

        <div className="max-w-6xl mt-10  mx-auto">
          <h2 className="border-b-4 border-purple-600 w-4/12 mx-auto text-center mb-10 py-5 text-4xl font-extrabold">
            Our Partner
          </h2>
          <Partner></Partner>
        </div>
      </div>
    </div>
  );
};

export default Home;
