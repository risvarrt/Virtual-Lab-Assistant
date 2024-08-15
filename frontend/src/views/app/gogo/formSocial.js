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
class FormSocial extends Component {
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
      url: this.url.value,
      social: this.social.value,
    };
    var t = window.confirm("Do you want to save it?");
    if (t === true) {
      this.props.formEvent(data);
      event.preventDefault();
      this.props.toggle();
      setTimeout(() => {
        this.props.addSocial();
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
            <IntlMessages id="addSocial" />
          </ModalHeader>

          <ModalBody>
            <Form onSubmit={(e) => this.form(e)}>
              <Row className="form-group">
                <Label htmlFor="social" sm={12} className="mt-2">
                  <IntlMessages id="social" />
                </Label>
                <Colxx sm={12}>
                  <Input
                    name="social"
                    id="social"
                    model=".social"
                    type="select"
                    innerRef={(input) => (this.social = input)}
                    required
                  >
                    <option>Codechef</option>
                    <option>Dribbble</option>
                    <option>Facebook</option>
                    <option>Github</option>
                    <option>Google Plus</option>
                    <option>Hackerrank</option>
                    <option>Instagram</option>
                    <option>LinkedIn</option>
                    <option>Skype</option>
                  </Input>
                </Colxx>
              </Row>
              <Row className="form-group">
                <Label htmlFor="url" sm={12} className="mt-2">
                  <IntlMessages id="url" />
                </Label>
                <Colxx sm={12}>
                  <Input
                    name="url"
                    id="url"
                    model=".url"
                    type="text"
                    innerRef={(input) => (this.url = input)}
                    required
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
                <IntlMessages id="addSocial" />
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
export default FormSocial;
