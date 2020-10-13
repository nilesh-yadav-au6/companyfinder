import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../styles/Homepage.css";
import axios from "axios";
import {
  Container,
  Card,
  ListGroup,
  ListGroupItem,
  Button,
  Spinner,
} from "react-bootstrap";

class HomePage extends Component {
  state = {
    companiList: [],
  };

  async componentDidMount() {
    const { data } = await axios.get(`http://localhost:1234/getCompanies`);
    console.log(data);
    this.setState({ companiList: data.companies });
  }

  render() {
    return (
      <div className="main-home">
        <Link to="/search">
          <Button
            variant="dark"
            style={{ float: "right", marginRight: "3rem" }}
          >
            Add Company
          </Button>{" "}
        </Link>
        <h2>List Of Added Company</h2>
        <Container>
          <div
            style={{
              display: "flex",
              justifyContent: "space-around",
              flexWrap: "wrap",
              marginTop: "2rem",
            }}
          >
            {this.state.companiList.length !== 0 ? (
              this.state.companiList.map((company, index) => (
                <div key={index}>
                  <Card style={{ marginTop: "1rem" }}>
                    <ListGroupItem className="company-list">
                      <h4>Company name : {company.name}</h4>
                      <h5>CIN : {company.cin}</h5>
                    </ListGroupItem>
                  </Card>
                </div>
              ))
            ) : (
              <Spinner animation="grow" variant="success" />
            )}
          </div>
        </Container>
      </div>
    );
  }
}

export default HomePage;
