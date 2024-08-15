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
class FormProject extends Component {
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
      proTitle: this.proTitle.value,
      proDomain: this.proDomain.value,
      startDate: this.state.courseStart,
      endDate: this.state.courseEnd,
      currentProject: this.currentProject,
      associatedWith: this.associatedWith.value,
      description: this.description.value,
    };
    var t = window.confirm("Do you want to save it?");
    if (t === true) {
      this.props.formEvent(data);
      event.preventDefault();
      this.props.toggle();
      setTimeout(() => {
        this.props.addProject();
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
            <IntlMessages id="addNewProject" />
          </ModalHeader>

          <ModalBody>
            <Form onSubmit={(e) => this.form(e)}>
              <Row className="form-group">
                <Label htmlFor="proTitle" sm={12} className="mt-2">
                  <IntlMessages id="proTitle" />
                </Label>
                <Colxx sm={12}>
                  <Input
                    name="proTitle"
                    id="proTitle"
                    model=".proTitle"
                    type="text"
                    innerRef={(input) => (this.proTitle = input)}
                    required
                  />
                </Colxx>
              </Row>
              <Row className="form-group">
                <Label htmlFor="proDomain" sm={12} className="mt-2">
                  <IntlMessages id="proDomain" />
                </Label>
                <Colxx sm={12}>
                  <Input
                    name="proDomain"
                    id="proDomain"
                    model=".proDomain"
                    type="text"
                    innerRef={(input) => (this.proDomain = input)}
                    required
                  />
                </Colxx>
              </Row>
              <Row className="form-group">
                <Label sm={6} className="mt-2">
                  <IntlMessages id="startDate" />
                </Label>
                <Label sm={6} className="mt-2">
                  <IntlMessages id="endDate" />
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
                    name="currentProject"
                    id="currentProject"
                    model=".currentProject"
                    type="checkbox"
                    innerRef={(input) => (this.currentProject = "Yes")}
                  />
                </Colxx>
                <Label htmlFor="currentProject" sm={7} className="mt-2">
                  <IntlMessages id="currentProject" />
                </Label>
              </Row>
              <Row className="form-group">
                <Label htmlFor="associatedWith" sm={12} className="mt-2">
                  <IntlMessages id="associatedWith" />
                </Label>
                <Colxx sm={12}>
                  <Input
                    name="associatedWith"
                    id="associatedWith"
                    model=".associatedWith"
                    type="text"
                    innerRef={(input) => (this.associatedWith = input)}
                    required
                  />
                </Colxx>
              </Row>

              <Row className="form-group">
                <Label htmlFor="description" sm={12} className="mt-2">
                  <IntlMessages id="description" />
                </Label>
                <Colxx sm={12}>
                  <Input
                    model=".description"
                    name="description"
                    id="description"
                    type="textarea"
                    innerRef={(input) => (this.description = input)}
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
export default FormProject;
