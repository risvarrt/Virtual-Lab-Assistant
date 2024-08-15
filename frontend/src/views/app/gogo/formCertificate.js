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
class FormCertificate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      courseStart: new Date().toLocaleDateString(),
    };
    this.form = this.form.bind(this);

    this.courseStart = this.courseStart.bind(this);
  }
  form = (event) => {
    const data = {
      name: this.name.value,
      issuingAuth: this.issuingAuth.value,
      certiUrl: this.certiUrl.value,
      certiDate: this.state.courseStart,
      licNo: this.licNo.value,
      certiExpiry: this.certiExpiry,
      description: this.description.value,
    };
    var t = window.confirm("Do you want to save it?");
    if (t === true) {
      this.props.formEvent(data);
      event.preventDefault();
      this.props.toggle();
      setTimeout(() => {
        this.props.addCertification();
      }, 1000);
    } else {
      this.props.toggle();
    }
  };
  courseStart = (date) => {
    this.setState({ courseStart: date });
  };

  render() {
    return (
      <Modal isOpen={this.props.open} toggle={this.props.toggle}>
        <div className="form-side">
          <ModalHeader toggle={this.props.toggle}>
            {" "}
            <IntlMessages id="addNewCertification" />
          </ModalHeader>

          <ModalBody>
            <Form onSubmit={(e) => this.form(e)}>
              <Row className="form-group">
                <Label htmlFor="name" sm={12} className="mt-2">
                  <IntlMessages id="name" />
                </Label>
                <Colxx sm={12}>
                  <Input
                    name="name"
                    id="name"
                    model=".name"
                    type="text"
                    innerRef={(input) => (this.name = input)}
                    required
                  />
                </Colxx>
              </Row>
              <Row className="form-group">
                <Label htmlFor="issuingAuth" sm={12} className="mt-2">
                  <IntlMessages id="issuingAuth" />
                </Label>
                <Colxx sm={12}>
                  <Input
                    name="issuingAuth"
                    id="issuingAuth"
                    model=".issuingAuth"
                    type="text"
                    innerRef={(input) => (this.issuingAuth = input)}
                    required
                  />
                </Colxx>
              </Row>
              <Row className="form-group">
                <Label htmlFor="certiUrl" sm={12} className="mt-2">
                  <IntlMessages id="certiUrl" />
                </Label>
                <Colxx sm={12}>
                  <Input
                    name="certiUrl"
                    id="certiUrl"
                    model=".certiUrl"
                    type="text"
                    innerRef={(input) => (this.certiUrl = input)}
                    required
                  />
                </Colxx>
              </Row>
              <Row className="form-group">
                <Label sm={12} className="mt-2">
                  <IntlMessages id="certiDate" />
                </Label>

                <Colxx sm={12}>
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
              </Row>
              <Row className="form-group">
                <Label htmlFor="licNo" sm={12} className="mt-2">
                  <IntlMessages id="licNo" />
                </Label>
                <Colxx sm={12}>
                  <Input
                    name="licNo"
                    id="licNo"
                    model=".licNo"
                    type="text"
                    innerRef={(input) => (this.licNo = input)}
                    required
                  />
                </Colxx>
              </Row>
              <Row className="form-group">
                <Colxx sm={12}>
                  <Input
                    name="certiExpiry"
                    id="certiExpiry"
                    model=".certiExpiry"
                    type="checkbox"
                    innerRef={(input) => (this.certiExpiry = "Yes")}
                  />
                </Colxx>
                <Label htmlFor="certiExpiry" sm={12} className="mt-2">
                  <IntlMessages id="certiExpiry" />
                </Label>
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
export default FormCertificate;
