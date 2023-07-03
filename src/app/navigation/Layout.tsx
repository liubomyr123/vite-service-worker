import { Outlet } from "react-router-dom";

import Header from "./Header";
import Footer from "./Footer";
import NavigationMenu from "./NavigationMenu";
import { Container, Row, Col } from 'react-bootstrap';

export const Layout = () => {
    return (
        <Container fluid className="layout-container">
            <Row className="layout-header" as="header">
                <Header />
            </Row>
            <Row className="layout-main" as="main">
                <Col>
                    <NavigationMenu />
                </Col>
                <Col>
                    <Outlet />
                </Col>
            </Row>
            <Row className="layout-footer" as="footer">
                <Footer />
            </Row>
        </Container>
    );
};