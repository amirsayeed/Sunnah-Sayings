import React from "react";

const QuoteRow = ({ quote, index, handleDelete }) => {
  return (
    <tr>
      <td>{index + 1}</td>
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
      <td>
        <button
          className="btn btn-sm btn-outline btn-error"
          onClick={() => handleDelete(quote._id)}
          disabled={quote.status === "approved"}
        >
          Delete
        </button>
      </td>
    </tr>
  );
};

export default QuoteRow;