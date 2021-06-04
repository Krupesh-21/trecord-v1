import React from "react";
import { Link } from "react-router-dom";
import { Card, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import styled from "styled-components";

const StyledCard = styled(Card)`
  width: 19rem;
  margin: 8px auto;
`;

function RecordCard(props) {
    console.log(props);
  return (
    <StyledCard>
      <Card.Body>
        <Card.Title>
          Journey: {props.from} - {props.to}
        </Card.Title>
        <Link to={{pathname: `/records/record/${props.id}`, state:{record: props} }}>
          <Button className="mt-2" variant="info">
            Click To See Record
          </Button>
        </Link>
      </Card.Body>
    </StyledCard>
  );
}

export default RecordCard;
