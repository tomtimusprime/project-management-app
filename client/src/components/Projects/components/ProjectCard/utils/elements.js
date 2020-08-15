import styled from "styled-components";
import { Button } from "react-bootstrap";

export const MoveButton = styled(Button)`
  width: 6rem;
  height: 3rem;
  border-radius: 0;
  padding: 0.25rem;
`;

export const HoverDiv = styled.div`
  display: flex;
  color: white;
  text-decoration: none;
  padding: 0 1rem;
  flex-grow: 1;
  justify-content: space-between;

  &:hover {
    cursor: pointer;
  }
`;
