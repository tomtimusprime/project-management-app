import React, { useEffect, useState } from "react";
import { useAuth0, withAuthenticationRequired } from "@auth0/auth0-react";
import axios from "axios";
import Loading from "../Loading/Loading";
import { Container, Row, Col, Button } from "react-bootstrap";
import ProjectListCard from './ProjectListCard/ProjectListCard';

const ProjectList = () => {
    const { user, isAuthenticated } = useAuth0();
    const [userList, setUserList] = useState([]);
    const [publicProjects,setPublicProjects] = useState([]);

    const fetchUserData = async () => {
        const res = await axios.get("/api/allUsers")
        const users = res.data;
        setUserList(users);
        await getProjects(users);
      };
      let projectListItems= [];

      const getProjects=async(users)=>{
      for(let i=0;i<users.length;i++){
          for(let j=0;j<users[i].projects.length;j++){
              console.log(users[i].projects[j]);
              let projectItem = {};
              projectItem.creator=users[i].email;
              projectItem.id=users[i].projects[j]._id;
              projectItem.name=users[i].projects[j].projectName;
              projectItem.description=users[i].projects[j].description;
              if(users[i].projects[j].completed===false && users[i].projects[j].inProgress===false){
                  projectItem.status="Upcoming"
              }
              else if (users[i].projects[j].completed===false && users[i].projects[j].inProgress===true){
                  projectItem.status="In Progress"
              } else {
                  projectItem.status="Completed"
              }
              if(user.email!==users[i].email){
              projectListItems.push(projectItem)
              }
          }
      }
      setPublicProjects(projectListItems);
  }

    useEffect(() => {
        if (isAuthenticated) {
            fetchUserData();
        }
    }, []);

    console.log(userList)
    console.log(publicProjects)
    return (
        <>
        {publicProjects.map((i)=>
            <ProjectListCard 
                creator={i.creator}
                name={i.name}
                description={i.description}
                status={i.status}
                key={i.pName}
            />
        )}
        </>
    );
};

export default withAuthenticationRequired(ProjectList, {
    onRedirecting: () => <Loading />,
    returnTo: "/projectList",
});
