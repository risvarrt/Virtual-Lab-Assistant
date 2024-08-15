import React, { Component } from "react";
import {
  Row,
  Form,
  Label,
  Col,
  Input,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "reactstrap";

import DatePicker from "react-datepicker";
import IntlMessages from "../../../helpers/IntlMessages";
import { Colxx, Separator } from "../../../components/common/CustomBootstrap";
import Breadcrumb from "../../../containers/navs/Breadcrumb";
import "react-datepicker/dist/react-datepicker.css";
class FormG extends Component {
  constructor(props) {
    super(props);
    this.state = {
      courseStart: new Date().toLocaleDateString(),
      courseEnd: new Date().toLocaleDateString(),
    };
    this.form = this.form.bind(this);
    this.courseEnd = this.courseEnd.bind(this);
    this.courseStart = this.courseStart.bind(this);
  }
  form = (event) => {
    const data = {
      company: this.company.value,
      jobTitle: this.jobTitle.value,
      location: this.location.value,
      positionType: this.positionType.value,
      jobFn: this.jobFn.value,
      companySector: this.companySector.value,
      currentWorking: this.currentWorking,
      stipend: this.stipend.value,
      details: this.details.value,
      timePeriod: [this.state.courseStart, this.state.courseEnd],
    };
    var t = window.confirm("Do you want to save it?");
    if (t === true) {
      this.props.formEvent(data);
      event.preventDefault();
      this.props.toggle();
      setTimeout(() => {
        this.props.addExp();
      }, 1000);
    } else {
      this.props.toggle();
    }
  };
  courseStart = (date) => {
    this.setState({ courseStart: date });
  };
  courseEnd = (date) => {
    this.setState({ courseEnd: date });
  };
  render() {
    return (
      <Modal isOpen={this.props.open} toggle={this.props.toggle}>
        <div className="form-side">
          <ModalHeader toggle={this.props.toggle}>
            {" "}
            <IntlMessages id="addExp" />
          </ModalHeader>

          <ModalBody>
            <Form onSubmit={(e) => this.form(e)}>
              <Row className="form-group">
                <Label htmlFor="company" sm={12} className="mt-2">
                  <IntlMessages id="company" />
                </Label>
                <Colxx sm={12}>
                  <Input
                    name="company"
                    id="company"
                    model=".company"
                    type="text"
                    innerRef={(input) => (this.company = input)}
                    required
                  />
                </Colxx>
              </Row>
              <Row className="form-group">
                <Label htmlFor="jobTitle" sm={12} className="mt-2">
                  <IntlMessages id="jobTitle" />
                </Label>
                <Colxx sm={12}>
                  <Input
                    name="jobTitle"
                    id="jobTitle"
                    model=".jobTitle"
                    type="text"
                    required
                    innerRef={(input) => (this.jobTitle = input)}
                  />
                </Colxx>
              </Row>
              <Row className="form-group">
                <Label htmlFor="location" sm={12} className="mt-2">
                  <IntlMessages id="location" />
                </Label>
                <Colxx sm={12}>
                  <Input
                    model=".location"
                    name="location"
                    id="location"
                    required
                    type="text"
                    innerRef={(input) => (this.location = input)}
                  />
                </Colxx>
              </Row>
              <Row className="form-group">
                <Label htmlFor="positionType" sm={12} className="mt-2">
                  <IntlMessages id="positionType" />
                </Label>
                <Colxx sm={12}>
                  <Input
                    model=".positionType"
                    name="positionType"
                    id="positionType"
                    type="select"
                    innerRef={(input) => (this.positionType = input)}
                  >
                    <option>Full Time</option>
                    <option>Part Time</option>
                    <option>Volunteering Experience</option>
                    <option>Others</option>
                  </Input>
                </Colxx>
              </Row>
              <Row className="form-group">
                <Label htmlFor="jobFn" sm={12} className="mt-2">
                  <IntlMessages id="jobFn" />
                </Label>
                <Colxx sm={12}>
                  <Input
                    model=".jobFn"
                    name="jobFn"
                    id="jobFn"
                    type="select"
                    innerRef={(input) => (this.jobFn = input)}
                  >
                    <option>Accounting</option>
                    <option>Actuary</option>
                    <option>Administration</option>
                    <option>Advertising, Media & PR</option>
                    <option>Architecture & Planning</option>
                    <option>Business Development</option>
                    <option>Community & Social Services</option>
                    <option>Construction / Contracting</option>
                    <option>Consulting</option>
                    <option>Counseling</option>
                    <option>Customer/Technical Support</option>
                    <option>Data & Analytics</option>
                    <option>Design / Art</option>
                    <option>Education / Teaching / Training</option>
                    <option>Engineering - Civil / Mechanical / Other</option>
                    <option>Engineering - Web / Software</option>
                    <option>Entrepreneurship</option>
                    <option>Environmental / Sustainability Mgmt</option>
                    <option>Finance</option>
                    <option>Fundraising & Event Management</option>
                    <option>General Management</option>
                    <option>Healthcare Services</option>
                    <option>Hotel / Restaurant / Hospitality</option>
                    <option>Human Resources</option>
                    <option>Information Technology</option>
                    <option>Legal</option>
                    <option>Library Science</option>
                    <option>Logistics & Supply Chain</option>
                    <option>Marketing - Brand Management</option>
                    <option>Marketing - General</option>
                    <option>Military & Protective Services</option>
                    <option>Operations / Production</option>
                    <option>Others</option>
                    <option>Political Organizing / Lobbying</option>
                    <option>Product Management</option>
                    <option>Product / Project Management</option>
                    <option>Project Management</option>
                    <option>Purchasing</option>
                    <option>Quality Assurance</option>
                    <option>Real Estate</option>
                    <option>Research</option>
                    <option>Sales</option>
                    <option>Veterinary / Animal Care</option>
                    <option>Writing / Editing</option>
                  </Input>
                </Colxx>
              </Row>
              <Row className="form-group">
                <Label htmlFor="companySector" sm={12} className="mt-2">
                  <IntlMessages id="companySector" />
                </Label>
                <Colxx sm={12}>
                  <Input
                    model=".companySector"
                    name="companySector"
                    id="companySector"
                    type="select"
                    innerRef={(input) => (this.companySector = input)}
                  >
                    <option>Analytics</option>
                    <option>Consulting</option>
                    <option>Computer Science - Software - IT</option>
                    <option>E-commerce</option>
                    <option>Education</option>
                    <option>Engineering and Technology</option>
                    <option>Finance/BFSI</option>
                    <option>FMCG</option>
                    <option>Healthcare</option>
                    <option>Media/entertainment</option>
                    <option>Research and Development</option>
                    <option>Telecom</option>
                    <option>Energy</option>
                    <option>Manufacturing and Technology</option>
                    <option>Others</option>
                  </Input>
                </Colxx>
              </Row>

              <Row className="form-group">
                <Label sm={12} className="mt-2">
                  <IntlMessages id="timePeriod" />
                </Label>
                <Colxx sm={4}>
                  <DatePicker
                    value={this.state.courseStart}
                    onChange={(date) =>
                      this.courseStart(date.toDate().toLocaleDateString())
                    }
                    showMonthDropdown
                    showYearDropdown
                    dropdownMode="select"
                  />
                </Colxx>
                <Col sm={1} className="mt-2">
                  <IntlMessages id="to" />
                </Col>

                <Colxx sm={4}>
                  <DatePicker
                    value={this.state.courseEnd}
                    onChange={(date) =>
                      this.courseEnd(date.toDate().toLocaleDateString())
                    }
                    showMonthDropdown
                    showYearDropdown
                    dropdownMode="select"
                  />
                </Colxx>
              </Row>
              <Row className="form-group">
                <Colxx sm={5}>
                  <Input
                    name="currentWorking"
                    id="currentWorking"
                    model=".currentWorking"
                    type="checkbox"
                    innerRef={(input) => (this.currentWorking = "Yes")}
                    required
                  />
                </Colxx>
                <Label htmlFor="currentWorking" sm={7} className="mt-2">
                  <IntlMessages id="currentWorking" />
                </Label>
              </Row>
              <Row className="form-group">
                <Label htmlFor="stipend" sm={12} className="mt-2">
                  <IntlMessages id="stipend" />
                </Label>
                <Colxx sm={12}>
                  <Input
                    model=".stipend"
                    name="stipend"
                    id="stipend"
                    type="select"
                    innerRef={(input) => (this.stipend = input)}
                  >
                    <option>No Salary/Stipend</option>
                    <option>₹ 0 - ₹ 5,000</option>
                    <option>₹ 5,000 - ₹ 10,000</option>
                    <option>₹ 10,000 - ₹ 25,000</option>
                    <option>₹ 25,000 - ₹ 50,000</option>
                    <option>₹ 50,000 - ₹ 1,00,000</option>
                    <option>Above ₹ 1,00,000</option>
                    <option>Do not wish to specify</option>
                  </Input>
                </Colxx>
              </Row>
              <Row className="form-group">
                <Label htmlFor="details" sm={12} className="mt-2">
                  <IntlMessages id="details" />
                </Label>
                <Colxx sm={12}>
                  <Input
                    model=".details"
                    name="details"
                    id="details"
                    required
                    type="textarea"
                    innerRef={(input) => (this.details = input)}
                  />
                </Colxx>
              </Row>
            </Form>
          </ModalBody>
          <ModalFooter>
            <div className="d-flex justify-content-end align-items-center">
              <Button
                color="primary"
                type="submit"
                value="submit"
                onClick={(e) => this.form(e)}
                className="btn-shadow"
                size="lg"
              >
                <IntlMessages id="save" />
              </Button>
            </div>
            <div className="d-flex justify-content-end align-items-center">
              <Button
                color="secondary"
                onClick={this.props.toggle}
                className="btn-shadow"
                size="lg"
              >
                <IntlMessages id="cancel" />
              </Button>
            </div>
          </ModalFooter>
        </div>
      </Modal>
    );
  }
}
export default FormG;
