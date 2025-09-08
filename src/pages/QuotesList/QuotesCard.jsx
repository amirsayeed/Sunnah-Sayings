import React from 'react';
import { Link } from 'react-router';

const QuotesCard = ({quote}) => {
    return (
        <div className="card bg-base-100 shadow-xl border border-gray-300 p-2">
          <div className="card-body">
            <p className="text-gray-800 text-lg font-medium mb-2">
              "{quote.text}"
            </p>
            <p className="text-gray-600 font-semibold mb-3">— {quote.author}</p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-4">
              {quote.tags?.map((tag, index) => (
                <span
                  key={index}
                  className="bg-[#2dcfc4] text-white text-xs px-2 py-1 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="card-actions justify-center">
              <Link to={`/quotes/${quote._id}`} className="btn btn-sm text-white bg-[#2dcfc4] rounded-lg">
                View More
              </Link>
            </div>
          </div>
        </div>
    );
};

export default QuotesCard;