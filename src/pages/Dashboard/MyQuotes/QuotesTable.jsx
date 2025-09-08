import React from "react";
import QuoteRow from "./QuoteRow";

const QuotesTable = ({ quotes, handleDelete }) => {
  return (
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
          {quotes.map((quote, idx) => (
            <QuoteRow
              key={quote._id}
              quote={quote}
              index={idx}
              handleDelete={handleDelete}
            />
          ))}

          {quotes.length === 0 && (
            <tr>
              <td colSpan={5} className="text-center py-4">
                No quotes submitted yet.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default QuotesTable;
