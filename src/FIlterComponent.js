import React from "react";
import { Button, InputGroup, FormControl } from "react-bootstrap";
const FilterComponent = ({ filterText, onFilter, onClear }) => {
  return (
    <>
      <InputGroup className="mt-3">
        <FormControl
          placeholder="Filter by post"
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
          value={filterText}
          onChange={onFilter}
        />
        <InputGroup.Append>
          <Button onClick={onClear} variant="outline-secondary">
            X
          </Button>
        </InputGroup.Append>
      </InputGroup>
    </>
  );
};

export default FilterComponent;
