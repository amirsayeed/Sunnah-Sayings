import React from "react";
import { Link } from "react-router";

const ManageQuoteRow = ({
  quote,
  index,
  handleStatusChange,
  handleDelete,
  isUpdating,
}) => {
  return (
    <tr>
      <td>{index + 1}</td>
      <td className="max-w-xs truncate">{quote.text}</td>
      <td>{quote.category}</td>
      <td>
        <span
          className={`badge ${
            quote.status === "approved" ? "badge-success" : "badge-warning"
          }`}
        >
          {quote.status || "pending"}
        </span>
      </td>
      <td className="flex gap-2 justify-center flex-wrap">
        <button
          className="btn btn-sm btn-success"
          disabled={quote.status === "approved" || isUpdating}
          onClick={() => handleStatusChange(quote._id, "approved")}
        >
          Approve
        </button>
        <button
          className="btn btn-sm btn-warning"
          disabled={quote.status === "pending" || isUpdating}
          onClick={() => handleStatusChange(quote._id, "pending")}
        >
          Set Pending
        </button>
        <Link to={`/updateQuotes/${quote._id}`}>
          <button className="btn btn-sm btn-info text-white">Edit</button>
        </Link>
        <button
          onClick={() => handleDelete(quote._id)}
          className="btn btn-sm btn-error text-white"
        >
          Delete
        </button>
      </td>
    </tr>
  );
};

export default ManageQuoteRow;
