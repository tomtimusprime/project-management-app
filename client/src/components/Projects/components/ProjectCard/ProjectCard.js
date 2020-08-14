import React from "react";
import "./ProjectCard.css";
import {  Row  } from "react-bootstrap";
import { API } from "../../../../utils/API";
import { motion } from "framer-motion";
import { CustCard } from "../../../SingleProject/utils/elements";
import {MoveButton,HoverDiv} from './utils/elements'

const ProjectCard = ({
  name,
  createdAt,
  id,
  issues,
  inProgress,
  completed,
  setUserData,
}) => {

  const handleMove = async (e) => {
    const { id } = e.target.dataset;
    if (inProgress) {
      const { data } = await API.setProjectStatus(id, "completed", true);
      setUserData(data[0]);
    }
    if (!inProgress && !completed) {
      const { data } = await API.setProjectStatus(id, "inProgress", true);
      setUserData(data[0]);
    }
  };

  const handleDelete = async (e) => {
    const  data  = API.setProjectStatus(id, 'removed', true);
    setUserData(data);
  };

  const date = new Date(createdAt).toLocaleDateString();
  
  return (
    <motion.div
      whileHover={{
        scale: 1.1,
        zIndex: 1,
        boxShadow: "6px 6px 5px 0px rgba(0,0,0,0.25)",
      }}
      transition={{ type: "spring", damping: 10 }}
    >
    <CustCard className="h-auto p-0 my-2 justify-content-center">
        <Row className="d-flex align-items-center mx-0 justify-content-between w-100">
          <HoverDiv
          onClick={() => {
            window.location='/projects/' + id
          }}>
            <div style={{width: '100px', whiteSpace: 'nowrap', textOverflow: 'ellipsis'}}>
            <h6 style={{overflow: 'hidden', whiteSpace: 'nowrap', textOverflow: 'ellipsis'}} >{name}</h6>

            </div>
            <h6>{date}</h6>
            <h6>{issues}</h6>
          </HoverDiv>
          {completed ? (
            <div style={{ flexShrink: 0 }}>
              <MoveButton variant="danger" data-id={id} onClick={handleDelete}>
                Delete
              </MoveButton>
            </div>
          ) : (
            <div style={{ flexShrink: 0 }}>
              <MoveButton data-id={id} onClick={handleMove}>
                Move
              </MoveButton>
            </div>
          )}
        </Row>
      </CustCard>
    </motion.div>
  );
};

export default ProjectCard;


