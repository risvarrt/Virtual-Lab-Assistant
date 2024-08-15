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
class FormLanguage extends Component {
  constructor(props) {
    super(props);

    this.form = this.form.bind(this);
  }
  form = (event) => {
    const data = {
      language: this.language.value,
      proficiency: this.proficiency.value,
    };
    var t = window.confirm("Do you want to save it?");
    if (t === true) {
      this.props.formEvent(data);
      event.preventDefault();
      this.props.toggle();
      setTimeout(() => {
        this.props.addLanguage();
      }, 1000);
    } else {
      this.props.toggle();
    }
  };

  render() {
    return (
      <Modal isOpen={this.props.open} toggle={this.props.toggle}>
        <div className="form-side">
          <ModalHeader toggle={this.props.toggle}>
            {" "}
            <IntlMessages id="addNewLanguage" />
          </ModalHeader>

          <ModalBody>
            <Form onSubmit={(e) => this.form(e)}>
              <Row className="form-group">
                <Label htmlFor="language" sm={12} className="mt-2">
                  <IntlMessages id="language" />
                </Label>
                <Colxx sm={12}>
                  <Input
                    name="language"
                    id="language"
                    model=".language"
                    type="text"
                    innerRef={(input) => (this.language = input)}
                    required
                  />
                </Colxx>
              </Row>
              <Row className="form-group">
                <Label htmlFor="proficiency" sm={12} className="mt-2">
                  <IntlMessages id="proficiency" />
                </Label>
                <Colxx sm={12}>
                  <Input
                    name="proficiency"
                    id="proficiency"
                    model=".proficiency"
                    type="select"
                    innerRef={(input) => (this.proficiency = input)}
                    required
                  >
                    <option>Elementary Proficiency</option>
                    <option>Limited Working Proficiency</option>
                    <option>Professional Working Proficiency</option>
                    <option>Full Professional Working Proficiency</option>
                    <option>Native or Bilingual Proficiency</option>
                  </Input>
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
export default FormLanguage;
