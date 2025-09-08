import React from "react";
import ManageQuoteRow from "./ManageQuoteRow";


const ManageQuotesTable = ({ quotes, handleStatusChange, handleDelete, isUpdating }) => {
  return (
    <div className="overflow-x-auto">
      <table className="table table-zebra w-full">
        <thead className="bg-base-200">
          <tr>
            <th>#</th>
            <th>Quote</th>
            <th>Category</th>
            <th>Status</th>
            <th className="text-center">Actions</th>
          </tr>
        </thead>
        <tbody>
          {quotes.map((quote, index) => (
            <ManageQuoteRow
              key={quote._id}
              quote={quote}
              index={index}
              handleStatusChange={handleStatusChange}
              handleDelete={handleDelete}
              isUpdating={isUpdating}
            />
          ))}

          {quotes.length === 0 && (
            <tr>
              <td colSpan={5} className="text-center py-4">
                No quotes found.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default ManageQuotesTable;
