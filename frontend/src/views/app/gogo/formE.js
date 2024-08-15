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
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  ModalFooter,
} from "reactstrap";

import DatePicker from "react-datepicker";
import IntlMessages from "../../../helpers/IntlMessages";
import { Colxx, Separator } from "../../../components/common/CustomBootstrap";
import Breadcrumb from "../../../containers/navs/Breadcrumb";
import "react-datepicker/dist/react-datepicker.css";

class FormE extends Component {
  constructor(props) {
    super(props);
    this.state = {
      i: 9,
      courseStart: new Date().toLocaleDateString(),
      courseEnd: new Date().toLocaleDateString(),
    };
    this.courseEnd = this.courseEnd.bind(this);
    this.courseStart = this.courseStart.bind(this);
    this.form = this.form.bind(this);
    this.form1 = this.form1.bind(this);
  }
  form = (e) => {
    const data = {
      degree: this.degree.value,
      course: this.course.value,
      branch: this.branch.value,
      dept: this.dept.value,
      collegeName: this.collegeName.value,
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
  form1 = (e) => {
    const data = {
      currentSem: this.sem.value,
      noscores: this.noscore,
      score: this.score.value,
      courseStart: this.state.courseStart,
      courseEnd: this.state.courseEnd,
      lateral: this.lateral,
      uniID: this.uniID.value,
      sem1: this.sem1.value,
      sem1tot: this.sem1tot.value,
      sem1ongoing: this.sem1ongoing.value,
      sem2: this.sem2.value,
      sem2tot: this.sem2tot.value,
      sem2ongoing: this.sem2ongoing.value,
      sem3: this.sem3.value,
      sem3tot: this.sem3tot.value,
      sem3ongoing: this.sem3ongoing.value,
      sem4: this.sem4.value,
      sem4tot: this.sem4tot.value,
      sem4ongoing: this.sem4ongoing.value,
      sem5: this.sem5.value,
      sem5tot: this.sem5tot.value,
      sem5ongoing: this.sem5ongoing.value,
      sem6: this.sem6.value,
      sem6tot: this.sem6tot.value,
      sem6ongoing: this.sem6ongoing.value,
      sem7: this.sem7.value,
      sem7tot: this.sem7tot.value,
      sem7ongoing: this.sem7ongoing.value,
      sem8: this.sem8.value,
      sem8tot: this.sem8tot.value,
      sem8ongoing: this.sem8ongoing.value,
    };
    var t = window.confirm("Do you want to save it?");
    if (t === true) {
      this.props.formUpdate(data);
      e.preventDefault();
      this.props.toggleEInner();
    } else {
      this.props.toggleEInner();
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
      <>
        <Modal isOpen={this.props.open} toggle={this.props.toggle}>
          <div className="form-side">
            <ModalHeader toggle={this.props.toggle}>
              {" "}
              <IntlMessages id="currentEdu" />
            </ModalHeader>
            <ModalBody>
              <Form>
                <Row className="form-group">
                  <Label htmlFor="degree" sm={12} className="mt-2">
                    <IntlMessages id="degree" />
                  </Label>
                  <Colxx sm={12}>
                    <Input
                      name="degree"
                      disabled={this.props.degree !== "" ? true : false}
                      model="degree"
                      defaultValue={this.props.degree}
                      id="degree"
                      type="select"
                      innerRef={(input) => (this.degree = input)}
                    >
                      <option value="Bachelor's degree">
                        Bachelor's degree
                      </option>
                      <option value="Master's degree">Master's degree</option>
                      <option value="Doctorate or higher">
                        Doctorate or higher
                      </option>
                    </Input>
                  </Colxx>
                </Row>
                <Row className="form-group">
                  <Label htmlFor="course" sm={12} className="mt-2">
                    <IntlMessages id="course" />
                  </Label>
                  <Colxx sm={12}>
                    <Input
                      name="course"
                      model=".course"
                      disabled={this.props.course !== "" ? true : false}
                      id="course"
                      type="select"
                      defaultValue={this.props.course}
                      innerRef={(input) => (this.course = input)}
                    >
                      <option value="B.Tech">B.Tech</option>
                      <option value="M.Tech">M.Tech</option>
                      <option value="B.Sc">B.Sc</option>
                      <option value="M.Sc">M.Sc</option>
                      <option value="B.Arch">B.Arch</option>
                      <option value="BCA">BCA</option>
                      <option value="MCA">MCA</option>
                      <option value="BDS">BDS</option>
                      <option value="BA">BA</option>
                      <option value="BBA">BBA</option>
                      <option value="MBA">MBA</option>
                      <option value="BFD">BFD</option>
                      <option value="B.Com">B.Com</option>
                      <option value="CA">CA</option>
                    </Input>
                  </Colxx>
                </Row>
                <Row className="form-group">
                  <Label htmlFor="branch" sm={12} className="mt-2">
                    <IntlMessages id="branch" />
                  </Label>
                  <Colxx sm={12}>
                    <Input
                      name="branch"
                      model=".branch"
                      id="branch"
                      disabled={this.props.branch !== "" ? true : false}
                      defaultValue={this.props.branch}
                      type="select"
                      innerRef={(input) => (this.branch = input)}
                    >
                      <option>Aeronautical Engineering</option>
                      <option>Automobile Engineering</option>
                      <option>Civil Engineering</option>
                      <option>Computer Science and Engineering</option>
                      <option>Biotechnology Engineering</option>
                      <option>Electrical and Electronics Engineering</option>
                      <option>Electronics and Communication Engineering</option>
                      <option>Automation and Robotics</option>
                      <option>Petroleum Engineering</option>
                      <option>Instrumentation Engineering</option>
                      <option>Ceramic Engineering</option>
                      <option>Chemical Engineering</option>
                      <option>Structural Engineering</option>
                      <option>Transportation Engineering</option>
                      <option>Construction Engineering</option>
                      <option>Power Engineering</option>
                      <option>Robotics Engineering</option>
                      <option>Textile Engineering</option>
                      <option>Smart Manufacturing & Automation</option>
                      <option>NA</option>
                    </Input>
                  </Colxx>
                </Row>
                <Row className="form-group">
                  <Label sm={12} className="mt-2" htmlFor="dept">
                    <IntlMessages id="dept" />
                  </Label>
                  <Colxx sm={12}>
                    <Input
                      disabled={this.props.dept !== "" ? true : false}
                      name="dept"
                      id="dept"
                      defaultValue={this.props.dept}
                      type="text"
                      innerRef={(input) => (this.dept = input)}
                      required
                    />
                  </Colxx>
                </Row>
                <Row className="form-group">
                  <Label sm={12} className="mt-2" htmlFor="collegeName">
                    <IntlMessages id="collegeName" />
                  </Label>
                  <Colxx sm={12}>
                    <Input
                      disabled={this.props.collegeName !== "" ? true : false}
                      name="collegeName"
                      id="collegeName"
                      defaultValue={this.props.collegeName}
                      type="text"
                      innerRef={(input) => (this.collegeName = input)}
                      required
                    />
                  </Colxx>
                </Row>

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
              </Form>
            </ModalBody>
          </div>
        </Modal>
        <Modal isOpen={this.props.openInner} toggle={this.props.toggleEInner}>
          <div className="form-side">
            <ModalHeader toggle={this.props.toggleEInner}>
              {" "}
              <IntlMessages id="updateEdu" />
            </ModalHeader>
            <ModalBody>
              <Form>
                <Row className="form-group">
                  <Label htmlFor="currentSem" sm={12} className="mt-2">
                    <IntlMessages id="currentSem" />
                  </Label>
                  <Colxx sm={12}>
                    <Input
                      name="currentSem"
                      required
                      model="currentSem"
                      defaultValue={this.props.sem}
                      id="currentSem"
                      type="select"
                      innerRef={(input) => (this.sem = input)}
                    >
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                      <option>5</option>
                      <option>6</option>
                      <option>7</option>
                      <option>8</option>
                    </Input>
                  </Colxx>
                </Row>
                <Row className="form-group">
                  <Colxx
                    md={{ offset: 1, size: 1 }}
                    sm={{ offset: 1, size: 1 }}
                    className="mt-1"
                  >
                    <Input
                      name="noscore"
                      model=".noscore"
                      id="noscore"
                      type="checkbox"
                      defaultValue={this.props.noscore}
                      innerRef={(input) => (this.noscore = true)}
                    />
                  </Colxx>
                  <Label htmlFor="noscore" sm={5}>
                    <IntlMessages id="noscore" />
                  </Label>
                </Row>
                <Row className="form-group">
                  <Label htmlFor="score" sm={12} className="mt-1">
                    <IntlMessages id="score" />
                  </Label>
                  <Colxx sm={12}>
                    <InputGroup>
                      <Input
                        name="score"
                        model=".score"
                        id="score"
                        required
                        defaultValue={this.props.score}
                        type="text"
                        innerRef={(input) => (this.score = input)}
                      />
                      <InputGroupAddon addonType="append">%</InputGroupAddon>
                    </InputGroup>
                  </Colxx>
                </Row>
                <Row className="form-group">
                  <Label sm={12} className="mt-2">
                    <IntlMessages id="courseStart" />
                  </Label>
                  <Colxx sm={6}>
                    <DatePicker
                      value={this.state.courseStart}
                      onChange={(date) =>
                        this.courseStart(date.toDate().toLocaleDateString())
                      }
                      showYearDropdown
                      showMonthDropdown
                    />
                  </Colxx>
                </Row>
                <Row className="form-group">
                  <Label sm={12} className="mt-2">
                    <IntlMessages id="courseEnd" />
                  </Label>
                  <Colxx sm={6}>
                    <DatePicker
                      value={this.state.courseEnd}
                      onChange={(date) =>
                        this.courseEnd(date.toDate().toLocaleDateString())
                      }
                      showYearDropdown
                      showMonthDropdown
                    />
                  </Colxx>
                </Row>
                <Row className="form-group">
                  <Colxx
                    md={{ offset: 1, size: 1 }}
                    sm={{ offset: 1, size: 1 }}
                    className="mt-1"
                  >
                    <Input
                      name="lateral"
                      model=".lateral"
                      id="lateral"
                      type="checkbox"
                      defaultValue={this.props.lateral}
                      innerRef={(input) => (this.lateral = true)}
                    />
                  </Colxx>
                  <Label htmlFor="lateral" sm={5}>
                    <IntlMessages id="lateral" />
                  </Label>
                </Row>
                {sessionStorage.getItem("role") === "STUDENT" ? (
                  <Row className="form-group">
                    <Label sm={12} className="mt-2" htmlFor="uniID">
                      <IntlMessages id="uniID" />
                    </Label>
                    <Colxx sm={12}>
                      <Input
                        name="uniID"
                        id="uniID"
                        defaultValue={this.props.uniID}
                        type="text"
                        innerRef={(input) => (this.uniID = input)}
                        required
                      />
                    </Colxx>
                  </Row>
                ) : null}
                <Row className="form-group">
                  <Colxx sm={12}>
                    <IntlMessages id="Performance" />
                  </Colxx>
                  <Colxx sm={4}>
                    <IntlMessages id="Backlog Details" />
                  </Colxx>
                </Row>
                <Row className="form-group">
                  <Colxx sm={{ offset: 7, size: 2 }}>
                    <IntlMessages id="Total" />
                  </Colxx>
                  <Colxx sm={{ offset: 9, size: 2 }}>
                    <IntlMessages id="On Going" />
                  </Colxx>
                </Row>
                <ModalBody>
                  <Row className="form-group">
                    <Label sm={3} className="mt-2" htmlFor="sem1">
                      <IntlMessages id="sem1" />
                    </Label>
                    <Colxx sm={4}>
                      <InputGroup>
                        <Input
                          name="sem1"
                          id="sem1"
                          defaultValue={this.props.sem1}
                          type="text"
                          innerRef={(input) => (this.sem1 = input)}
                          required
                        />
                        <InputGroupAddon addonType="append">%</InputGroupAddon>
                      </InputGroup>
                    </Colxx>
                    <Colxx sm={2}>
                      <Input
                        name="sem1tot"
                        id="sem1tot"
                        defaultValue={this.props.sem1tot}
                        type="text"
                        innerRef={(input) => (this.sem1tot = input)}
                        required
                      />
                    </Colxx>
                    <Colxx sm={2}>
                      <Input
                        name="sem1ongoing"
                        id="sem1ongoing"
                        defaultValue={this.props.sem1ongoing}
                        type="text"
                        innerRef={(input) => (this.sem1ongoing = input)}
                        required
                      />
                    </Colxx>
                  </Row>
                  <Row className="form-group">
                    <Label sm={3} className="mt-2" htmlFor="sem2">
                      <IntlMessages id="sem2" />
                    </Label>
                    <Colxx sm={4}>
                      <InputGroup>
                        <Input
                          name="sem2"
                          id="sem2"
                          defaultValue={this.props.sem2}
                          type="text"
                          innerRef={(input) => (this.sem2 = input)}
                          required
                        />
                        <InputGroupAddon addonType="append">%</InputGroupAddon>
                      </InputGroup>
                    </Colxx>
                    <Colxx sm={2}>
                      <Input
                        name="sem2tot"
                        id="sem2tot"
                        defaultValue={this.props.sem2tot}
                        type="text"
                        innerRef={(input) => (this.sem2tot = input)}
                        required
                      />
                    </Colxx>
                    <Colxx sm={2}>
                      <Input
                        name="sem2ongoing"
                        id="sem2ongoing"
                        defaultValue={this.props.sem2ongoing}
                        type="text"
                        innerRef={(input) => (this.sem2ongoing = input)}
                        required
                      />
                    </Colxx>
                  </Row>
                  <Row className="form-group">
                    <Label sm={3} className="mt-2" htmlFor="sem3">
                      <IntlMessages id="sem3" />
                    </Label>
                    <Colxx sm={4}>
                      <InputGroup>
                        <Input
                          name="sem3"
                          id="sem3"
                          defaultValue={this.props.sem3}
                          type="text"
                          innerRef={(input) => (this.sem3 = input)}
                          required
                        />
                        <InputGroupAddon addonType="append">%</InputGroupAddon>
                      </InputGroup>
                    </Colxx>
                    <Colxx sm={2}>
                      <Input
                        name="sem3tot"
                        id="sem3tot"
                        defaultValue={this.props.sem3tot}
                        type="text"
                        innerRef={(input) => (this.sem3tot = input)}
                        required
                      />
                    </Colxx>
                    <Colxx sm={2}>
                      <Input
                        name="sem3ongoing"
                        id="sem3ongoing"
                        defaultValue={this.props.sem3ongoing}
                        type="text"
                        innerRef={(input) => (this.sem3ongoing = input)}
                        required
                      />
                    </Colxx>
                  </Row>
                  <Row className="form-group">
                    <Label sm={3} className="mt-2" htmlFor="sem4">
                      <IntlMessages id="sem4" />
                    </Label>
                    <Colxx sm={4}>
                      <InputGroup>
                        <Input
                          name="sem4"
                          id="sem4"
                          defaultValue={this.props.sem4}
                          type="text"
                          innerRef={(input) => (this.sem4 = input)}
                          required
                        />
                        <InputGroupAddon addonType="append">%</InputGroupAddon>
                      </InputGroup>
                    </Colxx>
                    <Colxx sm={2}>
                      <Input
                        name="sem4tot"
                        id="sem4tot"
                        defaultValue={this.props.sem4tot}
                        type="text"
                        innerRef={(input) => (this.sem4tot = input)}
                        required
                      />
                    </Colxx>
                    <Colxx sm={2}>
                      <Input
                        name="sem4ongoing"
                        id="sem4ongoing"
                        defaultValue={this.props.sem4ongoing}
                        type="text"
                        innerRef={(input) => (this.sem4ongoing = input)}
                        required
                      />
                    </Colxx>
                  </Row>
                  <Row className="form-group">
                    <Label sm={3} className="mt-2" htmlFor="sem5">
                      <IntlMessages id="sem5" />
                    </Label>
                    <Colxx sm={4}>
                      <InputGroup>
                        <Input
                          name="sem5"
                          id="sem5"
                          defaultValue={this.props.sem5}
                          type="text"
                          innerRef={(input) => (this.sem5 = input)}
                          required
                        />
                        <InputGroupAddon addonType="append">%</InputGroupAddon>
                      </InputGroup>
                    </Colxx>
                    <Colxx sm={2}>
                      <Input
                        name="sem5tot"
                        id="sem5tot"
                        defaultValue={this.props.sem5tot}
                        type="text"
                        innerRef={(input) => (this.sem5tot = input)}
                        required
                      />
                    </Colxx>
                    <Colxx sm={2}>
                      <Input
                        name="sem5ongoing"
                        id="sem5ongoing"
                        defaultValue={this.props.sem5ongoing}
                        type="text"
                        innerRef={(input) => (this.sem5ongoing = input)}
                        required
                      />
                    </Colxx>
                  </Row>
                  <Row className="form-group">
                    <Label sm={3} className="mt-2" htmlFor="sem6">
                      <IntlMessages id="sem6" />
                    </Label>
                    <Colxx sm={4}>
                      <InputGroup>
                        <Input
                          name="sem6"
                          id="sem6"
                          defaultValue={this.props.sem6}
                          type="text"
                          innerRef={(input) => (this.sem6 = input)}
                          required
                        />
                        <InputGroupAddon addonType="append">%</InputGroupAddon>
                      </InputGroup>
                    </Colxx>
                    <Colxx sm={2}>
                      <Input
                        name="sem6tot"
                        id="sem6tot"
                        defaultValue={this.props.sem6tot}
                        type="text"
                        innerRef={(input) => (this.sem6tot = input)}
                        required
                      />
                    </Colxx>
                    <Colxx sm={2}>
                      <Input
                        name="sem6ongoing"
                        id="sem6ongoing"
                        defaultValue={this.props.sem6ongoing}
                        type="text"
                        innerRef={(input) => (this.sem6ongoing = input)}
                        required
                      />
                    </Colxx>
                  </Row>
                  <Row className="form-group">
                    <Label sm={3} className="mt-2" htmlFor="sem7">
                      <IntlMessages id="sem7" />
                    </Label>
                    <Colxx sm={4}>
                      <InputGroup>
                        <Input
                          name="sem7"
                          id="sem7"
                          defaultValue={this.props.sem7}
                          type="text"
                          innerRef={(input) => (this.sem7 = input)}
                        />
                        <InputGroupAddon addonType="append">%</InputGroupAddon>
                      </InputGroup>
                    </Colxx>
                    <Colxx sm={2}>
                      <Input
                        name="sem7tot"
                        id="sem7tot"
                        defaultValue={this.props.sem7tot}
                        type="text"
                        innerRef={(input) => (this.sem7tot = input)}
                      />
                    </Colxx>
                    <Colxx sm={2}>
                      <Input
                        name="sem7ongoing"
                        id="sem7ongoing"
                        defaultValue={this.props.sem7ongoing}
                        type="text"
                        innerRef={(input) => (this.sem7ongoing = input)}
                      />
                    </Colxx>
                  </Row>
                  <Row className="form-group">
                    <Label sm={3} className="mt-2" htmlFor="sem8">
                      <IntlMessages id="sem8" />
                    </Label>
                    <Colxx sm={4}>
                      <InputGroup>
                        <Input
                          name="sem8"
                          id="sem8"
                          defaultValue={this.props.sem8}
                          type="text"
                          innerRef={(input) => (this.sem8 = input)}
                        />
                        <InputGroupAddon addonType="append">%</InputGroupAddon>
                      </InputGroup>
                    </Colxx>
                    <Colxx sm={2}>
                      <Input
                        name="sem8tot"
                        id="sem8tot"
                        defaultValue={this.props.sem8tot}
                        type="text"
                        innerRef={(input) => (this.sem8tot = input)}
                      />
                    </Colxx>
                    <Colxx sm={2}>
                      <Input
                        name="sem8ongoing"
                        id="sem8ongoing"
                        defaultValue={this.props.sem8ongoing}
                        type="text"
                        innerRef={(input) => (this.sem8ongoing = input)}
                      />
                    </Colxx>
                  </Row>
                </ModalBody>
                <ModalFooter>
                  <div className="d-flex justify-content-end align-items-center">
                    <Button
                      color="primary"
                      type="submit"
                      value="submit"
                      onClick={(e) => this.form1(e)}
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
              </Form>
            </ModalBody>
          </div>
        </Modal>
      </>
    );
  }
}
export default FormE;
