import React, { Component } from "react";
import {
  Row,
  Form,
  Label,
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
class FormA extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dob: new Date().toLocaleDateString(),
    };
    this.form = this.form.bind(this);
    this.changeDOB = this.changeDOB.bind(this);
  }
  form = (e) => {
    const data = {
      dob: this.state.dob,
      gender: this.gender,
      cat: this.cat.value,
    };
    var t = window.confirm("Do you want to save it?");
    if (t === true) {
      this.props.formEvent(data);
      e.preventDefault();
      this.props.toggle();
    } else {
      this.props.toggle();
    }
  };
  changeDOB = (date) => {
    this.setState({ dob: date });
  };

  render() {
    return (
      <Modal isOpen={this.props.open} toggle={this.props.toggle}>
        <div className="form-side">
          <ModalHeader toggle={this.props.toggle}>
            {" "}
            <IntlMessages id="student.about-section" />
          </ModalHeader>

          <ModalBody>
            <Form>
              <Row className="form-group">
                <Label sm={12} className="mt-2">
                  <IntlMessages id="dob" />
                </Label>
                <Colxx sm={12}>
                  <DatePicker
                    value={this.state.dob}
                    showYearDropdown
                    dropdownMode="select"
                    onChange={(date) =>
                      this.changeDOB(date.toDate().toLocaleDateString())
                    }
                  />
                </Colxx>
              </Row>
              <Row className="form-group">
                <Label sm={12} className="mt-2">
                  <IntlMessages id="gender" />
                </Label>
                <Colxx sm={6} className="mt-3">
                  <Label check>
                    <Input
                      type="radio"
                      name="radio1"
                      onClick={(input) => (this.gender = "Male")}
                    />{" "}
                    <IntlMessages id="male" />
                  </Label>
                </Colxx>
                <Colxx sm={6} className="mt-3">
                  <Label check>
                    <Input
                      type="radio"
                      name="radio1"
                      onClick={(input) => (this.gender = "Female")}
                    />
                    <IntlMessages id="female" />
                  </Label>
                </Colxx>
              </Row>

              <Row className="form-group">
                <Label sm={12} className="mt-2">
                  <IntlMessages id="cat" />
                </Label>
                <Colxx sm={12}>
                  <Input type="select" innerRef={(input) => (this.cat = input)}>
                    <option>General/Open</option>
                    <option>OBC</option>
                    <option>BC</option>
                    <option>ST/SC</option>
                  </Input>
                </Colxx>
              </Row>
            </Form>
          </ModalBody>
          <ModalFooter>
            <div className="d-flex justify-content-end align-items-center">
              <Button
                color="primary"
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
export default FormA;
