import React from "react";
import { useParams } from "react-router";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import Loading from "../../components/shared/Loading";

const QuoteDetailsPage = () => {
  const { id } = useParams(); 
  const axiosSecure = useAxiosSecure();

  const { data: quote, isLoading, error } = useQuery({
    queryKey: ["quote", id],
    queryFn: async () => {
      const res = await axiosSecure.get(`/quotes/${id}`);
      return res.data;
    },
    enabled: !!id, 
  });

  if (isLoading) return <Loading />;
  if (error)
    return (
      <div className="text-center text-red-500">
        Failed to load quote details.
      </div>
    );

  if (!quote)
    return (
      <div className="text-center text-gray-500">
        Quote not found.
      </div>
    );

  return (
    <div className="max-w-4xl mx-auto px-2 md:px-4 my-10">
      <h2 className="text-3xl font-bold mb-6 text-center">Quote Details</h2>

      <div className="card bg-base-100 shadow-xl border border-gray-200 p-6">
        <p className="text-xl text-gray-800 mb-4">"{quote.text}"</p>
        <p className="text-gray-600 font-semibold mb-2">— {quote.author}</p>
        {quote.source && (
          <p className="text-gray-500 mb-2">
            <span className="font-semibold">Source:</span> {quote.source}
          </p>
        )}
        <p className="text-gray-500 mb-2">
          <span className="font-semibold">Category:</span> {quote.category}
        </p>
        {quote.description && (
          <p className="text-gray-500 mb-2">
            <span className="font-semibold">Description:</span> {quote.description}
          </p>
        )}

        {quote.tags?.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-2">
            {quote.tags.map((tag, index) => (
              <span
                key={index}
                className="bg-[#2dcfc4] text-white text-sm px-2 py-1 rounded-full"
              >
                #{tag}
              </span>
            ))}
          </div>
        )}

      </div>
    </div>
  );
};

export default QuoteDetailsPage;
