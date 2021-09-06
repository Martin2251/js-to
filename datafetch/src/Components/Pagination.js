import React from "react";
import PropTypes from "prop-types";
import { Button } from "react-bootstrap";

const Pagination = ({ goToPrevPage, goToNextPage, isFirst, isLast }) => {
  console.log(isFirst, isLast);
  return (
    <React.Fragment>
      <Button
        variant="dark"
        size="sm"
        onClick={goToPrevPage}
        disabled={isFirst}
      >
        Previous
      </Button>

      <Button variant="dark" size="sm" onClick={goToNextPage} disabled={isLast}>
        Next
      </Button>
    </React.Fragment>
  );
};

export default Pagination;
