import React from 'react'
import { Card } from 'react-bootstrap'
const ProjectsCard = ({cardHeight}) => {
    return (
        <Card style={{ width: '90%', flexDirection: 'row', minHeight: cardHeight,  }}>
            <Card.Body style={{display: "flex", flexDirection: 'column', justifyContent: 'space-around'}}>
                <Card.Title>Overview: </Card.Title>
                <Card.Text>
                    Current Projects:
            </Card.Text>
                <Card.Text>
                    Open Issues:
            </Card.Text>
            </Card.Body>
        </Card>
    )
}

export default ProjectsCard
