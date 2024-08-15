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
import { CountryDropdown, RegionDropdown } from "react-country-region-selector";
import DatePicker from "react-datepicker";
import IntlMessages from "../../../helpers/IntlMessages";
import { Colxx, Separator } from "../../../components/common/CustomBootstrap";
import Breadcrumb from "../../../containers/navs/Breadcrumb";
import "react-datepicker/dist/react-datepicker.css";
class FormPatent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      country: "India",
      courseStart: new Date().toLocaleDateString(),
    };
    this.form = this.form.bind(this);
    this.patentoffice = this.patentoffice.bind(this);
    this.courseStart = this.courseStart.bind(this);
  }
  form = (event) => {
    const data = {
      title: this.title.value,
      patentOffice: this.state.country,
      patentDate: this.state.courseStart,
      patentNo: this.patentNo.value,

      patentStatus: this.patentStatus.value,

      description: this.description.value,
    };
    var t = window.confirm("Do you want to save it?");
    if (t === true) {
      this.props.formEvent(data);
      event.preventDefault();
      this.props.toggle();
      setTimeout(() => {
        this.props.addPatent();
      }, 1000);
    } else {
      this.props.toggle();
    }
  };
  courseStart = (date) => {
    this.setState({ courseStart: date });
  };
  patentoffice = (e) => {
    this.setState({ country: e });
  };

  render() {
    return (
      <Modal isOpen={this.props.open} toggle={this.props.toggle}>
        <div className="form-side">
          <ModalHeader toggle={this.props.toggle}>
            {" "}
            <IntlMessages id="addNewPatent" />
          </ModalHeader>

          <ModalBody>
            <Form onSubmit={(e) => this.form(e)}>
              <Row className="form-group">
                <Label htmlFor="title" sm={12} className="mt-2">
                  <IntlMessages id="title" />
                </Label>
                <Colxx sm={12}>
                  <Input
                    name="title"
                    id="title"
                    model=".title"
                    type="text"
                    innerRef={(input) => (this.title = input)}
                    required
                  />
                </Colxx>
              </Row>
              <Row className="form-group">
                <Label htmlFor="patentOff" sm={12} className="mt-2">
                  <IntlMessages id="patentOff" />
                </Label>
                <CountryDropdown
                  value={this.state.country}
                  onChange={(val) => this.patentoffice(val)}
                />
              </Row>

              <Row className="form-group">
                <Label htmlFor="patentNo" sm={12} className="mt-2">
                  <IntlMessages id="patentNo" />
                </Label>
                <Colxx sm={12}>
                  <Input
                    name="patentNo"
                    id="patentNo"
                    model=".patentNo"
                    type="text"
                    innerRef={(input) => (this.patentNo = input)}
                    required
                  />
                </Colxx>
              </Row>
              <Row className="form-group">
                <Label htmlFor="patentStatus" sm={12} className="mt-2">
                  <IntlMessages id="patentStatus" />
                </Label>
                <Colxx sm={12}>
                  <Input
                    name="patentStatus"
                    id="patentStatus"
                    model=".patentStatus"
                    type="select"
                    innerRef={(input) => (this.patentStatus = input)}
                    required
                  >
                    <option>Patent Pending</option>
                    <option>Patent issued</option>
                  </Input>
                </Colxx>
              </Row>

              <Row className="form-group">
                <Label sm={12} className="mt-2">
                  <IntlMessages id="patentDate" />
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
export default FormPatent;
