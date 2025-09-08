import React from "react";
import { useMutation, useQuery } from "@tanstack/react-query";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Loading from "../../../components/shared/Loading";
import ManageQuotesTable from "./ManageQuotesTable";

const ManageQuotes = () => {
  const axiosSecure = useAxiosSecure();

  const { data: quotes = [], refetch, isLoading } = useQuery({
    queryKey: ["allQuotes"],
    queryFn: async () => {
      const res = await axiosSecure.get("/quotes");
      return res.data;
    },
  });

  const { mutateAsync: updateStatus, isPending: isUpdating } = useMutation({
    mutationFn: async ({ id, newStatus }) => {
      const res = await axiosSecure.patch(`/quotes/${id}/status`, {
        status: newStatus,
      });
      return res.data;
    },
    onSuccess: (data, variables) => {
      Swal.fire(
        "Success!",
        `Quote status changed to "${variables.newStatus}".`,
        "success"
      );
      refetch();
    },
    onError: () => {
      Swal.fire("Error", "Failed to update quote status", "error");
    },
  });

  const handleStatusChange = async (id, newStatus) => {
    const confirm = await Swal.fire({
      title: `Set this quote as ${newStatus}?`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: `Yes, set as ${newStatus}`,
    });

    if (confirm.isConfirmed) {
      await updateStatus({ id, newStatus });
    }
  };

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

  if (isLoading) return <Loading />;

  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold mb-6 text-center">Manage Quotes</h2>
      <ManageQuotesTable
        quotes={quotes}
        handleStatusChange={handleStatusChange}
        handleDelete={handleDelete}
        isUpdating={isUpdating}
      />
    </div>
  );
};

export default ManageQuotes;
