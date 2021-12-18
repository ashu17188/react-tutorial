import React, { useEffect, useState } from "react";
// import logo from "./logo.svg";
// import * as JSURL from "jsurl";

//https://www.youtube.com/watch?v=nidmDGwJ-Jw
//https://www.coingecko.com/en/api/documentation

import logo from "../../assets/images/crypto/logo.png";
import bitcoinIcon from "../../assets/images/crypto/bitcoin.png";
import dogecoinIcon from "../../assets/images/crypto/dogecoin.png";
import ethereumIcon from "../../assets/images/crypto/ethereum.png";
import "./CryptoMain.scss";
import { useLocation } from "react-router";
import {
  Navbar,
  Container,
  Nav,
  NavDropdown,
  Button,
  Row,
  Col,
} from "react-bootstrap";
import axios from "axios";
function CryptoMain() {
  let location = useLocation();
  const iconPath = process.env.PUBLIC_URL + "/assets/images/";

  // The `backgroundLocation` state is the location that we were at when one of
  // the gallery links was clicked. If it's there, use it as the location for
  // the <Routes> so we show the gallery in the background, behind the modal.
  let state = location.state as { backgroundLocation?: Location };

  const [cryptoData, setCryptoData] = useState<any>(null!);

  useEffect(() => {
    let fetchData = async () => {
      let res: any = await axios.get(
        "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cdogecoin%2Cethereum&vs_currencies=usd"
      );
      setCryptoData(res.data);
    };
    fetchData();
  }, []);

  return (
    <>
      <section id="crypto-main">
        <Navbar expand="sm">
          <Container>
            <Navbar.Brand href="#home">
              <img
                src={logo}
                width="30"
                height="30"
                className="d-inline-block align-top"
                alt="React Bootstrap logo"
              />
            </Navbar.Brand>

            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="#markets" className="text-white">
                  Markets
                </Nav.Link>
                <Nav.Link href="#features" className="text-white">
                  Features
                </Nav.Link>
                <Nav.Link href="#whitePapers" className="text-white">
                  White Papers
                </Nav.Link>
                <Nav.Link href="#aboutus" className="text-white">
                  About Us
                </Nav.Link>
              </Nav>
              <Nav>
                <Button variant="outline-light" className="btn-rounded">
                  EN
                </Button>{" "}
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <section id="crypto-content">
          <Container>
            <Row className="py-5">
              <Col sm={12} md={6}>
                <div className="content">
                  <div className="content-left text-white">
                    <div className="first-line">Buy &</div>
                    <div className="second-line">
                      Sell <span className="crypto"> Crypto</span>{" "}
                    </div>
                  </div>
                  <div className="subcontent-left text-white">
                    World's biggest Cryptocurrency exchange available on web as
                    well as on mobile app.
                  </div>
                  <Button href="#" className="subcontent-link mt-4">
                    Explore more
                  </Button>
                </div>
              </Col>
            </Row>

            <Row className="pt-5">
              <Col md={4} lg={6}></Col>
              <Col
                xs={12}
                sm={12}
                md={8}
                lg={6}
                className="d-flex align-items-end"
              >
                <div className="crypto-data p-0 px-md-3">
                  <Row className="mt-2 mt-md-0">
                    <Col xs={4} sm={4}>
                      <div className="coin-info px-3 py-2">
                        <img
                          src={bitcoinIcon}
                          width={35}
                          height={35}
                          alt="Bitcoin"
                        />
                        <div className="crypto-info-right">
                          <div className="coin-value text-white">
                            ${cryptoData?.bitcoin?.usd}
                          </div>
                          <div className="coin-name text-orange">Bitcoin</div>
                        </div>
                      </div>
                    </Col>
                    <Col xs={4} sm={4}>
                      <div className="coin-info px-3 py-2">
                        <img
                          src={dogecoinIcon}
                          width={35}
                          height={35}
                          alt="Bitcoin"
                        />
                        <div className="crypto-info-right">
                          <div className="coin-value text-white">
                            ${cryptoData?.dogecoin?.usd}
                          </div>
                          <div className="coin-name text-orange">Dogecoin</div>
                        </div>
                      </div>
                    </Col>
                    <Col xs={4} sm={4}>
                      <div className="coin-info px-3 py-2">
                        <img
                          src={ethereumIcon}
                          width={35}
                          height={35}
                          alt="Bitcoin"
                        />
                        <div className="crypto-info-right">
                          <div className="coin-value text-white">
                            ${cryptoData?.ethereum?.usd}
                          </div>
                          <div className="coin-name text-orange">Ethereum</div>
                        </div>
                      </div>
                    </Col>
                  </Row>
                </div>
              </Col>
              <Col md={{ offset: 1 }}></Col>
            </Row>
          </Container>
        </section>
      </section>
    </>
  );
}

export default CryptoMain;
