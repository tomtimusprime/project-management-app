import React from 'react'
import { Card, Row, Col } from 'react-bootstrap'
import { useAuth0 } from '@auth0/auth0-react'
import GuestImg from '../../../../assets/images/guest-avatar.jpg'
import styled from 'styled-components';
import { Avatar } from '../../../Layout/components/Sidebar/utils/utils';


const UserCard = ({cardHeight}) => {


    const { user, isAuthenticated } = useAuth0();

    return (
        <Card style={{ width: '90%', flexDirection: 'row', minHeight: cardHeight }}>
            <Card.Img style={{ width: 'initial' }} src={isAuthenticated && user.picture ? user.picture : GuestImg} />
            <Card.Body style={{display: "flex", flexDirection: 'column', justifyContent: 'space-around'}}>
                <Card.Title>How did you get here?</Card.Title>
                <Card.Text>
                    Projects:
                </Card.Text>
                <Card.Text>
                    Email:
                </Card.Text>
                <Card.Text>
                    Email:
                </Card.Text>
            </Card.Body>
        </Card>

    )
}
export default UserCard
