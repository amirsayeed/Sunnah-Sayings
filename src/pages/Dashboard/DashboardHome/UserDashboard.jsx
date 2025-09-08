import React from "react";
import { FaPlusCircle, FaClipboardList, FaEdit } from "react-icons/fa";
import useAuth from "../../../hooks/useAuth";

const UserDashboard = () => {
  const {user} = useAuth();
  const userActions = [
    { title: "Add a Quote", icon: <FaPlusCircle/> },
    { title: "See Submitted Quotes Status", icon: <FaClipboardList/> },
    { title: "Manage Your Quotes", icon: <FaEdit /> },
  ];

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Welcome {user.displayName}!</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {userActions.map((action, idx) => (
          <div
            key={idx}
            className="border border-gray-200 shadow-lg rounded-lg p-6 flex flex-col items-center justify-center text-center hover:shadow-xl transition"
          >
            <div className="text-3xl mb-4">{action.icon}</div>
            <h3 className="font-semibold text-lg">{action.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserDashboard;
