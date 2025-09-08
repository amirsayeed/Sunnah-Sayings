import React from "react";
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Loading from "../../../components/shared/Loading";
import QuotesCard from "../../QuotesList/QuotesCard";



const LatestQuotes = () => {
  const axiosSecure = useAxiosSecure();

  const { data: quotes = [], isLoading, error } = useQuery({
    queryKey: ["latestQuotes"],
    queryFn: async () => {
      const res = await axiosSecure.get("/quotes/latest");
      return res.data;
    },
  });

  if (isLoading) return <Loading />;
  if (error)
    return (
      <div className="text-center text-red-500">
        Failed to load latest quotes.
      </div>
    );

  return (
    <div className="px-2 md:px-4 my-10">
      <h2 className="text-xl md:text-3xl font-bold mb-6 text-center">
        Freshly Added Quotes
      </h2>
      <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {quotes.map((quote) => 
            <QuotesCard key={quote._id} quote={quote}/>
        )}
      </div>
      <div className="text-center mt-8">
        <Link to="/quotesList">
          <button onClick={()=>window.scrollTo(0,0)} className="btn bg-[#2dcfc4] text-white">
            View All Quotes
          </button>
        </Link>
      </div>
    </div>
  );
};

export default LatestQuotes;
