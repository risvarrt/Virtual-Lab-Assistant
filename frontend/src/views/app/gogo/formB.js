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
import { CountryDropdown, RegionDropdown } from "react-country-region-selector";

import IntlMessages from "../../../helpers/IntlMessages";
import { Colxx, Separator } from "../../../components/common/CustomBootstrap";
import Breadcrumb from "../../../containers/navs/Breadcrumb";

class FormB extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pcountry: "India",
      pstate: "Maharashtra",
      ccountry: "India",
      cstate: "Maharahstra",
    };
    this.changePCountry = this.changePCountry.bind(this);
    this.changeCCountry = this.changeCCountry.bind(this);
    this.form = this.form.bind(this);
    this.formInner = this.formInner.bind(this);
    this.formInner1 = this.formInner1.bind(this);
    this.changePState = this.changePState.bind(this);
    this.changeCState = this.changeCState.bind(this);
  }
  formInner = (e) => {
    const data = {
      paddressLine: this.paddressLine.value,
      pcity: this.pcity.value,
      pdis: this.pdis.value,
      pcountry: this.state.pcountry,
      pstate: this.state.pstate,
      ppincode: this.ppincode.value,
    };
    var t = window.confirm("Do you want to save it?");
    if (t === true) {
      this.props.formBInner(data);
      e.preventDefault();
      this.props.toggleInner();
    } else {
      this.props.toggleInner();
    }
  };
  formInner1 = (e) => {
    const data = {
      caddressLine: this.caddressLine.value,
      ccity: this.ccity.value,
      cdis: this.cdis.value,
      ccountry: this.state.ccountry,
      cstate: this.state.cstate,
      ccincode: this.cpincode.value,
    };
    var t = window.confirm("Do you want to save it?");
    if (t === true) {
      this.props.formBInner1(data);
      e.preventDefault();
      this.props.toggleInner1();
    } else {
      this.props.toggleInner1();
    }
  };
  form = (e) => {
    const data = {
      email: this.email.value,
      phno: this.phno.value,
      collegeEmail: this.collegeEmail.value,
    };
    var t = window.confirm("Do you want to save it?");
    if (t === true) {
      this.props.formB(data);
      e.preventDefault();
      this.props.toggle();
    } else {
      this.props.toggle();
    }
  };
  changePCountry = (e) => {
    this.setState({ pcountry: e });
  };
  changePState = (e) => {
    this.setState({ pstate: e });
  };
  changeCCountry = (e) => {
    this.setState({ ccountry: e });
  };
  changeCState = (e) => {
    this.setState({ cstate: e });
  };
  render() {
    return (
      <>
        <Modal isOpen={this.props.open} toggle={this.props.toggle}>
          <div className="form-side">
            <ModalHeader toggle={this.props.toggle}>
              {" "}
              <IntlMessages id="contact-details" />
            </ModalHeader>
            <ModalBody>
              <Form>
                <Row className="form-group">
                  <Label sm={12} className="mt-2">
                    <IntlMessages id="user.email" />
                  </Label>
                  <Colxx sm={12}>
                    <Input
                      defaultValue={this.props.email}
                      type="email"
                      innerRef={(input) => (this.email = input)}
                      required
                    />
                  </Colxx>
                </Row>
                {sessionStorage.getItem("role") === "STUDENT" ? (
                  <Row className="form-group">
                    <Label sm={12} className="mt-2">
                      <IntlMessages id="collegeEmail" />
                    </Label>
                    <Colxx sm={12}>
                      <Input
                        disabled={this.props.collegeEmail !== "" ? true : false}
                        defaultValue={this.props.collegeEmail}
                        type="email"
                        innerRef={(input) => (this.collegeEmail = input)}
                        required
                      />
                    </Colxx>
                  </Row>
                ) : null}
                <Row className="form-group">
                  <Label sm={12} className="mt-2">
                    <IntlMessages id="user.phone-number" />
                  </Label>
                  <Colxx sm={12} className="mt-2">
                    <Input
                      disabled={this.props.phno !== "" ? true : false}
                      defaultValue={this.props.phno}
                      type="text"
                      innerRef={(input) => (this.phno = input)}
                      required
                    />
                  </Colxx>
                </Row>

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
              </Form>
            </ModalBody>
          </div>
        </Modal>
        <Modal isOpen={this.props.openInner} toggle={this.props.toggleInner}>
          <div className="form-side">
            <ModalHeader toggle={this.props.toggleInner}>
              {" "}
              <IntlMessages id="paddress" />
            </ModalHeader>

            <ModalBody>
              <Form>
                <Row className="form-group">
                  <Label sm={12} className="mt-2">
                    <IntlMessages id="addline" />
                  </Label>
                  <Colxx sm={12}>
                    <Input
                      defaultValue={this.props.paddressLine}
                      type="text"
                      innerRef={(input) => (this.paddressLine = input)}
                      required
                    />
                  </Colxx>
                </Row>
                <Row className="form-group">
                  <Label sm={12} className="mt-2">
                    <IntlMessages id="count&state" />
                  </Label>
                  <Colxx sm={12}>
                    <CountryDropdown
                      value={this.state.pcountry}
                      onChange={(val) => this.changePCountry(val)}
                    />
                    <RegionDropdown
                      country={this.state.pcountry}
                      value={this.state.pstate}
                      onChange={(val) => this.changePState(val)}
                    />
                  </Colxx>
                </Row>
                <Row className="form-group">
                  <Label sm={12} className="mt-2">
                    <IntlMessages id="pincode" />
                  </Label>
                  <Colxx sm={12} className="mt-2">
                    <Input
                      defaultValue={this.props.ppincode}
                      type="text"
                      innerRef={(input) => (this.ppincode = input)}
                      required
                    />
                  </Colxx>
                </Row>
                <Row className="form-group">
                  <Label sm={12} className="mt-2">
                    <IntlMessages id="district" />
                  </Label>
                  <Colxx sm={12} className="mt-2">
                    <Input
                      type="text"
                      defaultValue={this.props.pdis}
                      innerRef={(input) => (this.pdis = input)}
                      required
                    />
                  </Colxx>
                </Row>
                <Row className="form-group">
                  <Label sm={12} className="mt-2">
                    <IntlMessages id="city" />
                  </Label>
                  <Colxx sm={12} className="mt-2">
                    <Input
                      type="text"
                      defaultValue={this.props.pcity}
                      innerRef={(input) => (this.pcity = input)}
                      required
                    />
                  </Colxx>
                </Row>
                <ModalFooter>
                  <div className="d-flex justify-content-end align-items-center">
                    <Button
                      color="primary"
                      onClick={(e) => this.formInner(e)}
                      className="btn-shadow"
                      size="lg"
                    >
                      <IntlMessages id="save" />
                    </Button>
                  </div>
                  <div className="d-flex justify-content-end align-items-center">
                    <Button
                      color="secondary"
                      onClick={this.props.toggleInner}
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
        <Modal isOpen={this.props.openInner1} toggle={this.props.toggleInner1}>
          <div className="form-side">
            <ModalHeader toggle={this.props.toggleInner1}>
              {" "}
              <IntlMessages id="caddress" />
            </ModalHeader>

            <ModalBody>
              <Form>
                <Row className="form-group">
                  <Label sm={12} className="mt-2">
                    <IntlMessages id="addline" />
                  </Label>
                  <Colxx sm={12}>
                    <Input
                      type="text"
                      defaultValue={this.props.caddressLine}
                      innerRef={(input) => (this.caddressLine = input)}
                      required
                    />
                  </Colxx>
                </Row>
                <Row className="form-group">
                  <Label sm={12} className="mt-2">
                    <IntlMessages id="count&state" />
                  </Label>
                  <Colxx md={7} sm={10}>
                    <CountryDropdown
                      value={this.state.ccountry}
                      onChange={(val) => this.changeCCountry(val)}
                    />
                    <RegionDropdown
                      country={this.state.ccountry}
                      value={this.state.cstate}
                      onChange={(val) => this.changeCState(val)}
                    />
                  </Colxx>
                </Row>
                <Row className="form-group">
                  <Label sm={12} className="mt-2">
                    <IntlMessages id="pincode" />
                  </Label>
                  <Colxx sm={12} className="mt-2">
                    <Input
                      type="text"
                      defaultValue={this.props.cpincode}
                      innerRef={(input) => (this.cpincode = input)}
                      required
                    />
                  </Colxx>
                </Row>
                <Row className="form-group">
                  <Label sm={12} className="mt-2">
                    <IntlMessages id="district" />
                  </Label>
                  <Colxx sm={12} className="mt-2">
                    <Input
                      type="text"
                      defaultValue={this.props.cdis}
                      innerRef={(input) => (this.cdis = input)}
                      required
                    />
                  </Colxx>
                </Row>
                <Row className="form-group">
                  <Label sm={12} className="mt-2">
                    <IntlMessages id="city" />
                  </Label>
                  <Colxx sm={12} className="mt-2">
                    <Input
                      type="text"
                      defaultValue={this.props.ccity}
                      innerRef={(input) => (this.ccity = input)}
                      required
                    />
                  </Colxx>
                </Row>
                <ModalFooter>
                  <div className="d-flex justify-content-end align-items-center">
                    <Button
                      color="primary"
                      onClick={(e) => this.formInner1(e)}
                      className="btn-shadow"
                      size="lg"
                    >
                      <IntlMessages id="save" />
                    </Button>
                  </div>
                  <div className="d-flex justify-content-end align-items-center">
                    <Button
                      color="secondary"
                      onClick={this.props.toggleInner1}
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
export default FormB;
