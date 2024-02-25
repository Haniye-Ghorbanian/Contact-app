import React from "react";

const ContactProfile = () => {
  return (
    <div className="container mx-auto h-full">
      <div className="flex">
        <div className="w-1/3">
          <div className="bg-gray-200 rounded-full h-40 w-40 mx-auto mb-4"></div>
        </div>

        <div className="w-2/3 ml-4 relative">
          <button className="absolute top-0 right-0 p-2 rounded-full bg-gray-300">
            ...
          </button>

          <div className="flex flex-col">
            <div className="mb-4">
              <p className="text-lg font-bold">John Doe</p>
            </div>
            <div className="mb-4">
              <p className="text-gray-600">Phone: 123-456-7890</p>
            </div>
            <div className="mb-4">
              <p className="text-gray-600">Email: johndoe@example.com</p>
            </div>
            <div className="mb-4">
              <p className="text-gray-600">
                Address: 123 Main St, City, Country
              </p>
            </div>

            <div className="flex justify-between">
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
    </div>
  );
};

export default ContactProfile;
