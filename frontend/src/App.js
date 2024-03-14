import React, { useState } from "react";
import ProfileList from "./Pages/ProfileList";
import Archive from "./Pages/Archive";

function App() {
  const [tabs, setTabs] = useState(0);

  function displayProfileList() {
    return (
      <div className="content">
        <div className="student-card">
          <ProfileList />
        </div>
      </div>
    );
  }

  return (
    <div className="p-6 text-center ">
      <h1 className="text-white">Hogwarts Student Profile</h1>
      <div className="py-9">
        <div className="pb-6 flex flex-row justify-around">
          <button
            className="text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 shadow-lg shadow-teal-500/50 dark:shadow-lg dark:shadow-teal-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
            onClick={() => {
              setTabs(0);
            }}
          >
            List
          </button>

          <button
            className="text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 shadow-lg shadow-teal-500/50 dark:shadow-lg dark:shadow-teal-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
            onClick={() => {
              setTabs(1);
            }}
          >
            Archive
          </button>
        </div>
        {tabs === 0 ? displayProfileList() : null}
        {tabs === 1 ? <Archive /> : null}
      </div>
    </div>
  );
}

export default App;
