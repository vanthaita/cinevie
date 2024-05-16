import React from 'react';

export default function PaginationNews({ start, setStart, totalPages }) {
  const renderPreviousButton = () => {
    if (start > 0) {
      return (
        <p
          onClick={() => setStart(start - 10)}
          className="cursor-pointer btn-pagination"
        >
          &lt; Previous
        </p>
      );
    } else {
      return null;
    }
  };

  const renderNextButton = () => {
    if (start + 10 < totalPages * 10) {
      return (
        <p
          onClick={() => setStart(start + 10)}
          className="cursor-pointer btn-pagination"
        >
          Next &gt;
        </p>
      );
    } else {
      return null;
    }
  };

  return (
    <div className="flex justify-between gap-4">
      {renderPreviousButton()}
      {renderNextButton()}
    </div>
  );
}
