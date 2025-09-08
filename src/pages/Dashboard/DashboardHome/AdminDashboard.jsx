import React from "react";
import { FaCheckCircle, FaTimesCircle, FaEdit, FaTrash } from "react-icons/fa";

const AdminDashboard = () => {
  const adminActions = [
    { title: "Approve Pending Quotes", icon: <FaCheckCircle /> },
    { title: "Set Approved Quotes to Pending", icon: <FaTimesCircle /> },
    { title: "Edit Any Quote", icon: <FaEdit /> },
    { title: "Delete Any Quote", icon: <FaTrash /> },
  ];

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Welcome Admin!</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {adminActions.map((action, idx) => (
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

export default AdminDashboard;
