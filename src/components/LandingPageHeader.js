import React from "react";

// reactstrap components
import { Button, Container } from "reactstrap";


function LandingPageHeader() {
  let pageHeader = React.createRef();

  React.useEffect(() => {
    if (window.innerWidth < 991) {
      const updateScroll = () => {
        let windowScrollTop = window.pageYOffset / 3;
        pageHeader.current.style.transform =
          "translate3d(0," + windowScrollTop + "px,0)";
      };
      window.addEventListener("scroll", updateScroll);
      return function cleanup() {
        window.removeEventListener("scroll", updateScroll);
      };
    }
  });

  return (
    <div
      className="page-header page-pic"
      data-parallax={true}
      ref={pageHeader}
    >
      <div className="filter" />
      <Container>
        <div className="motto text-center">
          <h1>Puppy Love</h1>
          <h3>Your new friend is just a click away!</h3>
          <br />
          <Button
            href="/features"
            className="btn-round mr-1"
            color="neutral"
            outline
          >
            Go to Shopping
          </Button>
          {/* <Button className="btn-round" color="neutral" type="button" outline>
            Download
          </Button> */}
        </div>
      </Container>
    </div>
  );
}

export default LandingPageHeader;
