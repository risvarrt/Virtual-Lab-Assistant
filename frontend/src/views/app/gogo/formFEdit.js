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
class FormFEdit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      courseStart: new Date().getFullYear(),
      courseEnd: new Date().getFullYear(),
    };
    this.form = this.form.bind(this);
    this.courseEnd = this.courseEnd.bind(this);
    this.courseStart = this.courseStart.bind(this);
  }
  form = (event) => {
    const data = {
      school: this.school.value,
      board: this.board.value,
      program: this.program.value,
      specialisation: this.specialisation.value,
      eduType: this.eduType.value,
      duration: [this.state.courseStart, this.state.courseEnd],
    };
    var t = window.confirm("Do you want to save it?");
    if (t === true) {
      this.props.formEvent(data);
      event.preventDefault();
      this.props.toggle();
      setTimeout(() => {
        this.props.addEdu();
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
            <IntlMessages id="edu" />
          </ModalHeader>

          <ModalBody>
            <Form onSubmit={(e) => this.form(e)}>
              <Row className="form-group">
                <Label htmlFor="school/institute" sm={12} className="mt-2">
                  <IntlMessages id="school/institute" />
                </Label>
                <Colxx sm={12}>
                  <Input
                    name="school/institute"
                    id="school/institute"
                    model=".school/institute"
                    defaultValue={this.props.school}
                    type="text"
                    innerRef={(input) => (this.school = input)}
                    required
                  />
                </Colxx>
              </Row>
              <Row className="form-group">
                <Label htmlFor="board" sm={12} className="mt-2">
                  <IntlMessages id="board/university" />
                </Label>
                <Colxx sm={12}>
                  <Input
                    name="board"
                    id="board"
                    model=".board"
                    defaultValue={this.props.board}
                    type="text"
                    innerRef={(input) => (this.board = input)}
                    required
                  />
                </Colxx>
              </Row>
              <Row className="form-group">
                <Label htmlFor="program" sm={12} className="mt-2">
                  <IntlMessages id="program" />
                </Label>
                <Colxx sm={12}>
                  <Input
                    model=".program"
                    name="program"
                    id="program"
                    type="select"
                    innerRef={(input) => (this.program = input)}
                  >
                    <option>BMS (3 years)</option>
                    <option>BMS (4 years</option>
                    <option>BPT</option>
                    <option>BSW</option>
                    <option>BTTM</option>
                    <option>BVA</option>
                    <option>CA</option>
                    <option>CERT</option>
                    <option>CLASS X</option>
                    <option>CLASS XII</option>
                  </Input>
                </Colxx>
              </Row>
              <Row className="form-group">
                <Label htmlFor="specialisation" sm={12} className="mt-2">
                  <IntlMessages id="specialisation" />
                </Label>
                <Colxx sm={12}>
                  <Input
                    name="specialisation"
                    id="specialisation"
                    model=".specialisation"
                    defaultValue={this.props.specialisation}
                    type="text"
                    innerRef={(input) => (this.specialisation = input)}
                    required
                  />
                </Colxx>
              </Row>
              <Row className="form-group">
                <Label htmlFor="eduType" sm={12} className="mt-2">
                  <IntlMessages id="eduType" />
                </Label>
                <Colxx sm={12}>
                  <Input
                    model=".eduType"
                    name="eduType"
                    id="eduType"
                    type="select"
                    innerRef={(input) => (this.eduType = input)}
                  >
                    <option>Full Time</option>
                    <option>Part Time</option>
                    <option>Correspondence</option>
                    <option>Others</option>
                  </Input>
                </Colxx>
              </Row>
              <Row className="form-group">
                <Label sm={12} className="mt-2">
                  <IntlMessages id="duration" />
                </Label>
                <Colxx sm={4}>
                  <DatePicker
                    value={this.state.courseStart}
                    onChange={(date) =>
                      this.courseStart(date.toDate().getFullYear())
                    }
                    showMonthDropdown
                    showYearDropdown
                    dropdownMode="select"
                    dateFormat="yyyy"
                  />
                </Colxx>
                <Col sm={1} className="mt-2">
                  <IntlMessages id="To" />
                </Col>

                <Colxx sm={4}>
                  <DatePicker
                    value={this.state.courseEnd}
                    onChange={(date) =>
                      this.courseEnd(date.toDate().getFullYear())
                    }
                    showMonthDropdown
                    showYearDropdown
                    dropdownMode="select"
                    dateFormat="yyyy"
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
export default FormFEdit;
