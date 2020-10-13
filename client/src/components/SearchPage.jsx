import React, { Component } from 'react'
import { Form , Button } from "react-bootstrap"
import CompanyList from "./CompanyList"
import axios from "axios"
import "../styles/SearchPage.css"
import { store } from 'react-notifications-component';

class SearchPage extends Component {
    state = {
        cname:"",
        searchList:[]
      };

      handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
      };

    handleSubmit =async (e) => {
        e.preventDefault();
        if(!this.state.cname){
            store.addNotification({
                title: "Warning",
                message: "Search Box cannot be Empty",
                type: "danger",
                insert: "top",
                container: "top-right",
                animationIn: ["animate__animated", "animate__fadeIn"],
                animationOut: ["animate__animated", "animate__fadeOut"],
                dismiss: {
                  duration: 5000,
                  onScreen: true
                }
              });
        return
        }
        const {data} = await axios.post(`http://localhost:1234/search/company` ,{cname:this.state.cname})
        if(data.statusCode === 400){
          store.addNotification({
            title: "Not Found",
            message: "No such Company Found",
            type: "danger",
            insert: "top",
            container: "top-right",
            animationIn: ["animate__animated", "animate__fadeIn"],
            animationOut: ["animate__animated", "animate__fadeOut"],
            dismiss: {
              duration: 5000,
              onScreen: true
            }
          });
          return
        }
        console.log(data)
        this.setState({searchList:data.companies})
      };
    render(){
        return (
            <>
            <div className="form">
            <Form className="form-inner" onSubmit={this.handleSubmit}>
            <input
              type="txt"
              name="cname"
              value={this.state.cname}
              placeholder="Search By Company Name"
              onChange={this.handleChange}
            />
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
            <CompanyList companies={this.state.searchList}/>
          </div>
          </>
        )
    }
}

export default SearchPage
