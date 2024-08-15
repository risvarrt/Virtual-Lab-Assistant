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

import IntlMessages from "../../../helpers/IntlMessages";
import { Colxx, Separator } from "../../../components/common/CustomBootstrap";
import Breadcrumb from "../../../containers/navs/Breadcrumb";

class FormSubject extends Component {
  constructor(props) {
    super(props);

    this.form = this.form.bind(this);
  }
  form = (event) => {
    const data = {
      subjectName: this.subjectName.value,
      associatedWith: this.associatedWith.value,
    };
    var t = window.confirm("Do you want to save it?");
    if (t === true) {
      this.props.formEvent(data);
      event.preventDefault();
      this.props.toggle();
      setTimeout(() => {
        this.props.addSubject();
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
            <IntlMessages id="addNewSubject" />
          </ModalHeader>

          <ModalBody>
            <Form onSubmit={(e) => this.form(e)}>
              <Row className="form-group">
                <Label htmlFor="subjectName" sm={12} className="mt-2">
                  <IntlMessages id="subjectName" />
                </Label>
                <Colxx sm={12}>
                  <Input
                    name="subjectName"
                    id="subjectName"
                    model=".subjectName"
                    type="text"
                    innerRef={(input) => (this.subjectName = input)}
                    required
                  />
                </Colxx>
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
                    type="select"
                    innerRef={(input) => (this.associatedWith = input)}
                    required
                  >
                    <option>{this.props.college}</option>
                    <option>{this.props.school}</option>
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
export default FormSubject;
