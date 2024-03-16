import React from "react";

const ProfileList = () => {
  return (
    <div className="flex flex-row justify-around">
      <div>
        <h2 className="text-white">Student Profile</h2>
        <div></div>
      </div>
      <div>
        <h2 className="text-white mb-6">Add New Student</h2>
        <div className="flex w-56 h-72 flex-col justify-center items-center bg-indigo-900 gap-5 rounded-md">
          <form className="flex flex-col gap-4">
            <div>
              <label className="text-white">Name</label> <br />
              <input type="text" /> <br />
            </div>
            <div>
              <label className="text-white">House</label> <br />
              <input type="text" /> <br />
            </div>
            <div>
              <label className="text-white">Bloodline</label> <br />
              <input type="text" /> <br />
            </div>
            
          </form>
          <button className="relative inline-flex items-center justify-center p-0.5 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800">
              <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
               Submit Student Profile
              </span>
            </button>
        </div>
      </div>
    </div>
  );
};

export default ProfileList;
