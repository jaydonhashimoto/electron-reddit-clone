import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {
    Container,
    Row,
    Col
} from 'reactstrap';

class Post extends Component {

    componentDidMount() {
        console.log(this.props.location.state.post.data);
    }

    render() {
        const { author, title, selftext, preview, thumbnail } = this.props.location.state.post.data;
        return (
            <div>
                <Container>
                    <Row>
                        <Col>
                            <Link to="/">
                                Back
                            </Link>
                        </Col>
                        <Col>
                            {author}
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            {title}
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            {selftext}
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            {/* <img src={preview.images[0].source.url} alt="image" style={{ maxWidth: '100%' }} /> */}
                            <img src={thumbnail} alt="image" style={{ maxWidth: '100%' }} />
                        </Col>
                    </Row>
                </Container>
            </div>

        );
    }
}

export default Post;