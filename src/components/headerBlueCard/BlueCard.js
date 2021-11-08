import React from "react";
import "./BlueCard.css";
import {Button, Col, Container, Row} from "react-bootstrap"



const BlueCard = () => {
    return (
        <Container>
        <Row>
        <Col>
        <div className="bluecell">
        <h3 className="n">
        <a href="">Free math worksheets</a>
        </h3>
        <a href="" title="Generate free math worksheets!">
            <img style={{border:"0", float:"right", marginLeft:"12px", width:"150"}} src="./images/worksheets-1.jpeg"/>
        </a>
        Genereta
        <b> math worksheets </b>
        galore from 1st grade number charts to 7th grade proportions and square roots. Customizable and randomly generated.
        </div>
        </Col>

        <Col>
        <div className="bluecell">
        <h3 className="n">
        <a href="">Lessons & articles</a>
        </h3>
        <a href="" title="Free math lessons">
            <img style={{border:"0", float:"right", marginLeft:"12px", width:"150"}} src="images/bluecell1-2.jpeg"/>
        </a>
        Find free math lessons from 1st grade addition to percent (elementary &  middle school).
        <br/>
        <br/>
        We also offer
        <a href="" title="Math education articles"> articles </a>
        on mathematics education topics, such as calculator usage,
        <a href=""> help with word problems </a>
        ,
        <a href=""> kindergarten math </a>
        , summer math, and more.
        </div>
        </Col>  
        </Row>


        <Row>
        <Col>
        <div className="bluecell">
        <h3 className="n">
        <a href="">Curriculum guide</a>
        </h3>
        <a href="" title="Homeschool math curriculum guide">
            <img style={{border:"0", float:"right", marginLeft:"12px", width:"150"}} src="images/bluecell2-1.jpeg"/>
        </a>
        Homeschool math
        <a href="" title="Homeschool math curriculum guide"> curriculum guide </a>
        — articles, scope & sequence chart, how to find inexpensive math materials, and reviews of <u>ALL</u> popular homeschool math curricula left by my site visitors.
        </div>
        </Col>

        <Col>
        <div className="bluecell">
        <h3 className="n">
        <a href="">Online math games & more</a>
        </h3>
        <a href="" title="Online math games & resources -- arranged by topic">
            <img style={{border:"0", float:"right", marginLeft:"12px", width:"150"}} src="images/bluecell2-2.jpeg"/>
        </a>
        A very comprehensive list of <b>online math games</b> and resources, arranged by math topic from addition & subtraction all the way to geometry, algebra, and calculus.
        </div>
        </Col>  
        </Row>


        <Row>
        <Col>
        <div className="bluecell">
        <h3 className="n">
        <a href="">Reviews</a>
        </h3>
        <a href="" title="Reviews of math products">
            <img style={{border:"0", float:"right", marginLeft:"12px", width:"150"}} src="images/bluecell3-1.jpeg"/>
        </a>
        Detailed <b>reviews</b> of dozens of interesting math products, such as Giggle Facts, Dr. Math, Harold Jacobs, Mathletics, IXL, YourTeacher, Time4Learning, Math Goodies, Hands-On Equations, etc. etc.
        </div>
        </Col>

        <Col>
        <div className="bluecell">
        <h3 className="n">
        <a href="">Math videos</a>
        </h3>
        <a href="" title="Math videos">
            <img style={{border:"0", float:"right", marginLeft:"12px", width:"150"}} src="images/bluecell3-2.jpeg"/>
        </a>
        My <b>math videos</b> at Youtube teach  both the teacher and the student. These will also work as lesson plans for teachers.
        </div>
        </Col>  
        </Row>



         </Container>
    );
}

export default BlueCard;
