import React from "react";

const ContactProfile = () => {
  return (
    
      <div className="flex h-4/5 mt-16 ml-36 bg-slate-200 w-4/5 rounded-lg">
        <div className="w-2/5 mt-14">
          <div className="bg-gray-300 rounded-full h-52 w-52 mx-auto mb-4"></div>
        </div>

        <div className="w-3/5 h-inherit ml-4 relative">
          <button className="absolute top-0 right-0 p-2 rounded-full m-4">
            ...
          </button>

          <div className="h-full flex flex-col items-start space-y-10 mt-16">
            <div className="mb-4">
              <p className="text-3xl font-bold">John Doe</p>
            </div>
            <div className="mb-4">
              <p className="text-gray-600 text-lg font-semibold">Phone: 123-456-7890</p>
            </div>
            <div className="mb-4">
              <p className="text-gray-600 text-lg font-semibold">Email: johndoe@example.com</p>
            </div>
            <div className="mb-4">
              <p className="text-gray-600 text-lg font-semibold">
                Address: 123 Main St, City, Country
              </p>
            </div>

            <div className="w-full flex items-center justify-start space-x-8 ">
              <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
                Edit
              </button>
              <button className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600">
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
   
  );
};

export default ContactProfile;
