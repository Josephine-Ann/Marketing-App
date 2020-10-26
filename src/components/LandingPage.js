import React from 'react';
import LandingPageHeader from './LandingPageHeader'
import { connect } from 'react-redux';

// reactstrap components
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardTitle,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col,
} from "reactstrap";

function LandingPage() {
  document.documentElement.classList.remove("nav-open");
  React.useEffect(() => {
    document.body.classList.add("profile-page");
    return function cleanup() {
      document.body.classList.remove("profile-page");
    };
  });
  return (
    <div>
      <LandingPageHeader />
      <div className="main">
        <div className="section text-center">
          <Container>
            <Row>
              <Col className="ml-auto mr-auto" md="8">
                <h2 className="title">Doggy Love</h2>
                <h5 className="description">
                  Our pet shop supplies the biggest selection
                  of foods and pet toys in all the country. Our
                  assistants have undertaken special courses in
                  animal nutrition and training. Ask them anything
                  you like.
                </h5>
                <br />
                <Button
                  className="btn-round"
                  color="info"
                  href="/features"
                >
                  shop now!
                </Button>
              </Col>
            </Row>
            <br />
            <br />
            <Row>
              <Col md="3">
                <div className="info">
                  <div className="icon icon-info">
                  </div>
                  <div className="description">
                    <h4 className="info-title">Convenient</h4>
                    <p className="description">
                      We understand that not every person likes to shop
                      online. Sometimes it can be difficult to get out to
                      a shop. Do we think that you should be left trying to
                      guess what animal food you ought to buy? Certainly not!
                      We have a dedicated Twitter account, where you can write
                      to us around the clock. We guarantee an answer within half
                      an hour.
                    </p>
                    {/* <Button className="btn-link" color="info" href="#pablo">
                      See more
                    </Button> */}
                  </div>
                </div>
              </Col>
              <Col md="3">
                <div className="info">
                  <div className="icon icon-info">
                  </div>
                  <div className="description">
                    <h4 className="info-title">Dog Toys</h4>
                    <p className="description">
                      Do you have a high-energy dog, or are they more the shy, retiring type?
                      Do they needs to chew, or run like the wind? Whatever it is, we'll help
                      you find it.
                    </p>
                    {/* <Button className="btn-link" color="info" href="#pablo">
                      See more
                    </Button> */}
                  </div>
                </div>
              </Col>
              <Col md="3">
                <div className="info">
                  <div className="icon icon-info">
                  </div>
                  <div className="description">
                    <h4 className="info-title">Scratching posts</h4>
                    <p className="description">
                      It's common sense. Cats need scratching posts. Do they
                      all have to look the same, though? We have all kinds of
                      scratching posts, for all kinds of homes.
                    </p>
                    {/* <Button className="btn-link" color="info" href="#pablo">
                      See more
                    </Button> */}
                  </div>
                </div>
              </Col>
              <Col md="3">
                <div className="info">
                  <div className="icon icon-info">
                  </div>
                  <div className="description">
                    <h4 className="info-title">Intern programs</h4>
                    <p className="description">
                      Doggy Love hires many interns to work on publicity and web development.
                      Do you have a passion for animals and a drive to learn? Send us your
                      CV and we'll be sure to get in touch.
                    </p>
                    {/* <Button className="btn-link" color="info" href="#pablo">
                      See more
                    </Button> */}
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
        <div className="section section-dark text-center">
          <Container>
            <h2 className="title">Let's talk about us</h2>
            <Row>
              <Col md="4">
                <Card className="card-profile card-plain">
                  <div className="card-avatar">
                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                      <img
                        alt="..."
                        src="https://res.cloudinary.com/chadsaglam/image/upload/v1570714503/Chad/zwufypympohhf0z3c2nb.jpg"
                      />
                    </a>
                  </div>
                  <CardBody>
                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                      <div className="author">
                        <CardTitle tag="h4">Chad Saglam</CardTitle>
                        <h6 className="card-category">Product Manager</h6>
                      </div>
                    </a>
                    <p className="card-description text-center">
                      Chad has years of experience as a developer, and deeply
                      enjoyed working on the website for Puppy Love. He believes
                      that it is incredibly important to have ethical marketplaces.
                    </p>
                  </CardBody>

                </Card>
              </Col>
              <Col md="4">
                <Card className="card-profile card-plain">
                  <div className="card-avatar">
                    <a href="/feature" >
                      <img
                        alt="..."
                        src="https://images.dog.ceo/breeds/hound-afghan/n02088094_1003.jpg"
                      />
                    </a>
                  </div>
                  <CardBody>
                    <a href="/feature">
                      <div className="author">
                        <CardTitle tag="h4">Sophie</CardTitle>
                        <h6 className="card-category">Doggy Love's permanent resident</h6>
                      </div>
                    </a>
                    <p className="card-description text-center">
                      Sophie keeps the whole team company. Our developers have
                      complained that she stares too much while they're eating
                      their lunch, but I guess they'll get used to it!
                    </p>
                  </CardBody>
                </Card>
              </Col>
              <Col md="4">
                <Card className="card-profile card-plain">
                  <div className="card-avatar">
                    <a href="#pablo" >
                      <img
                        alt="..."
                        src="https://res.cloudinary.com/chadsaglam/image/upload/v1602596539/Chad/xyqheqaetmjcltg53dtb.jpg"
                      />
                    </a>
                  </div>
                  <CardBody>
                    <a href="#pablo">
                      <div className="author">
                        <CardTitle tag="h4">Josephine</CardTitle>
                        <h6 className="card-category">Developer</h6>
                      </div>
                    </a>
                    <p className="card-description text-center">
                      Josephine is also a developer who is just breaking
                      into the world of programming. She has also stated
                      that she considers ethical marketplaces to be of the
                      utmost importance.
                    </p>
                  </CardBody>
                  <CardFooter className="text-center">
                    <Button
                      className="btn-just-icon btn-neutral"
                      color="link"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      <i className="fa fa-twitter" />
                    </Button>
                    <Button
                      className="btn-just-icon btn-neutral ml-1"
                      color="link"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      <i className="fa fa-google-plus" />
                    </Button>
                    <Button
                      className="btn-just-icon btn-neutral ml-1"
                      color="link"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      <i className="fa fa-linkedin" />
                    </Button>
                  </CardFooter>
                </Card>
              </Col>
            </Row>
          </Container>
        </div>
        <div className="section landing-section">
          <Container>
            <Row>
              <Col className="ml-auto mr-auto" md="8">
                <h2 className="text-center">Keep in touch?</h2>
                <Form className="contact-form">
                  <Row>
                    <Col md="6">
                      <label>Name</label>
                      <InputGroup>
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            {/* <i className="nc-icon nc-single-02" /> */}
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input placeholder="Name" type="text" />
                      </InputGroup>
                    </Col>
                    <Col md="6">
                      <label>Email</label>
                      <InputGroup>
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            {/* <i className="nc-icon nc-email-85" /> */}
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input placeholder="Email" type="text" />
                      </InputGroup>
                    </Col>
                  </Row>
                  <label>Message</label>
                  <Input
                    placeholder="Tell us your thoughts and feelings..."
                    type="textarea"
                    rows="4"
                  />
                  <Row>
                    <Col className="ml-auto mr-auto" md="4">
                      <Button className="btn-fill" color="danger" size="lg">
                        Send Message
                      </Button>
                    </Col>
                  </Row>
                </Form>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </div>
  );
}

export default LandingPage


