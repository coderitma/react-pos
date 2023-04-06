import { useState } from "react";
import { Button, Form, InputGroup } from "react-bootstrap";
import { FaSearch } from "react-icons/fa";

const PemasokSearchInlineWidget = ({
  attr,
  isShowKodePemasok,
  isShowNamaPemasok,
  callbackPemasokSearchInlineWidget,
}) => {
  const [query, setQuery] = useState({ kodePemasok: "", namaPemasok: "" });

  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setQuery((values) => ({ ...values, [name]: value }));
  };

  return (
    <>
      <InputGroup>
        {isShowKodePemasok && (
          <Form.Control
            name="kodePemasok"
            type="text"
            placeholder="Kode pemask..."
            value={query.kodePemasok || ""}
            onChange={handleInput}
          />
        )}
        {isShowNamaPemasok && (
          <Form.Control
            name="namaPemasok"
            type="text"
            placeholder="Nama pemasok..."
            value={query.namaPemasok || ""}
            onChange={handleInput}
          />
        )}
        <Button
          {...attr}
          onClick={() => callbackPemasokSearchInlineWidget(query)}>
          <FaSearch /> Search
        </Button>
      </InputGroup>
    </>
  );
};

export default PemasokSearchInlineWidget;
