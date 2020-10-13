import React, { Component } from "react";
import { Container, ListGroupItem, Spinner} from "react-bootstrap";
import "../styles/CompanyList.css";
import axios from "axios";
import { withRouter } from "react-router-dom"

class CompanyList extends Component {
  handleClick = async (name, cin) => {
    const obj = {
      name,
      cin,
    };
    await axios.post(`http://localhost:1234/add/company`, obj);
    this.props.history.push("/")
  };

  render() {
    return (
      <Container className="company-div">
        <h5>
          {this.props.companies !== null ? (
            <div>
              {this.props.companies.length !== 0 ? (
                this.props.companies.map((company, index) => (
                  <div key={index}>
                    <div
                      style={{
                        display: "flex",
                        marginTop: "0.5rem",
                        width: "100%",
                        justifyContent: "center",
                      }}
                    >
                      <ListGroupItem className="company-home">
                        <h4>Company name : {company.name}</h4>
                        <h5>CIN : {company.cin}</h5>
                      </ListGroupItem>
                      <button
                        name="list"
                        className="span-tag"
                        onClick={() =>
                          this.handleClick(company.name, company.cin)
                        }
                      >
                        Submit
                      </button>
                    </div>
                  </div>
                ))
              ) : (
                <Spinner />
              )}
            </div>
          ) : null}
        </h5>
      </Container>
    );
  }
}

export default withRouter(CompanyList);
