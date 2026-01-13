import React from 'react';
import PropTypes from 'prop-types';

const ReviewCard = ({ review }) => {
  const { quote, name, designation, avatarColor = '#004d4d' } = review || {};

  if (!review) return null; // Safety: যদি review না থাকে

  return (
    <div className="max-w-md w-full rounded-3xl bg-white p-8 shadow-lg border border-gray-100 h-full flex flex-col justify-between">
      
      {/* Opening quote */}
      <div className="text-6xl text-cyan-100 font-serif leading-none mb-4">“</div>
      
      {/* Review text */}
      <p className="text-gray-600 text-lg md:text-xl leading-relaxed mb-6">
        {quote || 'No review provided.'}
      </p>
      
      {/* Divider */}
      <div className="border-t border-dashed border-gray-300 mb-6"></div>
      
      {/* Reviewer info */}
      <div className="flex items-center gap-4">
        <div
          className="w-14 h-14 rounded-full flex-shrink-0"
          style={{ backgroundColor: avatarColor }}
        />
        <div>
          <h4 className="font-semibold text-gray-900 text-lg md:text-xl">{name || 'Anonymous'}</h4>
          <p className="text-gray-500 font-medium">{designation || 'N/A'}</p>
        </div>
      </div>
    </div>
  );
};

// Optional: PropTypes validation (best practice for senior dev)
ReviewCard.propTypes = {
  review: PropTypes.shape({
    quote: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    designation: PropTypes.string.isRequired,
    avatarColor: PropTypes.string,
  }),
};

export default ReviewCard;
