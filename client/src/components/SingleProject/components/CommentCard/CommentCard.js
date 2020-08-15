import React, { useState, useEffect } from "react";
import { Row, Col, Container, Button, Form } from "react-bootstrap";

const CommentForm = ({ comment }) => {
    return (
        <Row>
            <Col xs={12} className="commentBox">
                <Col xs={2}></Col>
                <Col xs={2}>{comment.userEmail+": "}</Col>
                <Col xs={6}>{comment.comment}</Col>
                <Col xs={2}></Col>
            </Col>
        </Row>
    )
};

export default CommentForm;