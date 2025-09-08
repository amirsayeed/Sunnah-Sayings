import React from "react";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import Loading from "../../components/shared/Loading";
import QuotesCard from "./QuotesCard";

const Quotes = () => {
  const axiosSecure = useAxiosSecure();

  const { data: quotes = [], isLoading, error } = useQuery({
    queryKey: ["quotes"],
    queryFn: async () => {
      const res = await axiosSecure.get("/quotes/approved");
      return res.data;
    },
  });

  if (isLoading) return <Loading />;
  if (error)
    return (
      <div className="text-center text-red-500">
        Failed to load quotes.
      </div>
    );

  return (
    <div className="px-2 md:px-4 my-10">
    <div className="space-y-3">
      <h2 className="text-2xl font-bold text-center">All Quotes</h2>
      <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {quotes.map((quote) => (
          <QuotesCard key={quote._id} quote={quote}/>
        ))}
      </div>
    </div>
    </div>
  );
};

export default Quotes;
