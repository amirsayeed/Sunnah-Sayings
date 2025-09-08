import React from "react";
import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Loading from "../../../components/shared/Loading";
import Swal from "sweetalert2";
import QuotesTable from "./QuotesTable";

const MyQuotes = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  const {
    data: quotes = [],
    isLoading,
    refetch,
    error,
  } = useQuery({
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

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "This quote will be permanently deleted.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const res = await axiosSecure.delete(`/quotes/${id}`);
          if (res.data?.deletedCount) {
            Swal.fire("Deleted!", "Quote has been deleted.", "success");
            refetch();
          }
        } catch (err) {
          console.error(err);
          Swal.fire("Error", "Failed to delete the quote.", "error");
        }
      }
    });
  };

  return (
    <div className="px-2 md:px-4 my-10">
      <h2 className="text-3xl font-bold mb-6">My Submitted Quotes</h2>
      <QuotesTable quotes={quotes} handleDelete={handleDelete} />
    </div>
  );
};

export default MyQuotes;