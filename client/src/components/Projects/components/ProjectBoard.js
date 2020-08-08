import React from 'react'
import { Card } from 'react-bootstrap';
import styled from 'styled-components';

const CustCard = styled.div`
    width:100%;
    border: 2px solid var(--light-grey-sec);
    border-radius: 5px;
    box-shadow: 2px 2px 5px 0px rgba(0, 0, 0, .25);
    height: 500px;
    overflowY: auto;
    display: flex;
    flex-direction: column;
`

const CardHeader = styled.div`
    border-bottom: 1px solid var(--light-grey-sec);
    background-color: var(--light-grey-sec);
    padding: 1rem;
`

const CardBody = styled.div`
padding: 2rem;
`
const ProjectBoard = () => {
    return (
        <CustCard>
            <CardHeader>
                <h1 className='text-center'>hi</h1>
            </CardHeader>
            <CardBody>

            </CardBody>
        </CustCard>

    )
}
export default ProjectBoard
