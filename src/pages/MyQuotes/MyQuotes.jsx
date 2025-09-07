import React from "react";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useAuth from "../../hooks/useAuth";
import Loading from "../../components/shared/Loading";


const MyQuotes = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();


  const { data: quotes = [], isLoading, error } = useQuery({
    queryKey: ["myQuotes", user?.email],
    queryFn: async () => {
      if (!user?.email) return [];
      const res = await axiosSecure.get(`/quotes?email=${user.email}`);
      return res.data;
    },
    enabled: !!user?.email, 
  });

  if (isLoading) return <Loading />;
  if (error)
    return (
      <div className="text-center text-red-500">
        Failed to load your quotes.
      </div>
    );

  const handleEdit = (id) => {
    console.log("Edit quote", id);
  };

  const handleDelete = (id) => {
    console.log('delete quote',id)
  };

  return (
    <div className="px-4 py-10">
      <h2 className="text-3xl font-bold mb-6">My Submitted Quotes</h2>
      <div className="overflow-x-auto">
        <table className="table table-zebra w-full">
          <thead>
            <tr>
              <th>#</th>  
              <th>Quote</th>
              <th>Category</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {quotes.map((quote,idx) => (
              <tr key={quote._id}>
                <td>{idx+1}</td>
                <td className="max-w-xs truncate">{quote.text}</td>
                <td>{quote.category}</td>
                <td>
                  <span
                    className={`badge ${
                      quote.status === "approved"
                        ? "badge-success"
                        : quote.status === "pending"
                        ? "badge-warning"
                        : "badge-error"
                    }`}
                  >
                    {quote.status}
                  </span>
                </td>
                <td className="flex gap-2">
                  <button
                    className="btn btn-sm btn-outline btn-info"
                    onClick={() => handleEdit(quote._id)}
                  >
                    Edit
                  </button>
                  <button
                    className="btn btn-sm btn-outline btn-error"
                    onClick={() => handleDelete(quote._id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}

            {quotes.length === 0 && (
              <tr>
                <td colSpan={4} className="text-center py-4">
                  No quotes submitted yet.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyQuotes;
