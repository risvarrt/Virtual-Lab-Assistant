import React, { Component, Fragment } from "react";
import {
  Row,
  Card,
  CardTitle,
  CardBody,
  Col,
  CardText,
  CardImg,
  Label,
  CardSubtitle,
  Form,
  CardFooter,
  CardHeader,
  Input,
  ModalBody,
  Modal,
  ModalFooter,
  Button,
  ModalHeader,
} from "reactstrap";
import Resizer from "react-image-file-resizer";

import CardMedia from "@material-ui/core/CardMedia";
import Avatar from "@material-ui/core/Avatar";
import { CircularProgressbar } from "react-circular-progressbar";
import IntlMessages from "../../../helpers/IntlMessages";
import { Colxx, Separator } from "../../../components/common/CustomBootstrap";

class ProfileLayout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "title",
      coverpic: "",
      profilepic: "",
      open1: false,
      open2: false,
      open3: false,
      open: false,
      percent: 50,
      isSortable: false,
      bio: "",
      cover:
        "https://res.cloudinary.com/dl0dsqomf/image/upload/v1592923070/sample.jpg",
      source: "",
      alt: "blah",
      name: "",

      degree: "",
      course: "",
      dept: "",
      sem: "",
      passout: "",
      resumeUrl: "",
      usn: "",
      resume: "",
    };
    this.toggle = this.toggle.bind(this);
    this.toggle1 = this.toggle1.bind(this);
    this.toggle2 = this.toggle2.bind(this);
    this.toggle3 = this.toggle3.bind(this);
    this.profilePic = this.profilePic.bind(this);
    this.coverPic = this.coverPic.bind(this);
    this.postBio = this.postBio.bind(this);
    this.generateURL = this.generateURL.bind(this);
  }
  toggle = () => this.setState({ open: !this.state.open });
  toggle1 = () => this.setState({ open1: !this.state.open1 });
  toggle2 = () => this.setState({ open2: !this.state.open2 });
  toggle3 = () => this.setState({ open3: !this.state.open3 });

  profilePic = () => {
    fetch(
      `/${
        sessionStorage.getItem("role") === "STUDENT" ? "students" : "candidates"
      }/profile-pic`,
      {
        method: "post",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + sessionStorage.getItem("token"),
        },
        body: JSON.stringify({
          url: this.state.source,
        }),
      }
    )
      .then((res) => res.json())
      .then((data) => console.log(data));
  };
  coverPic = () => {
    fetch(
      `/${
        sessionStorage.getItem("role") === "STUDENT" ? "students" : "candidates"
      }/cover-pic`,
      {
        method: "post",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + sessionStorage.getItem("token"),
        },
        body: JSON.stringify({
          url: this.state.cover,
        }),
      }
    )
      .then((res) => res.json())
      .then((data) => console.log(data));
  };
  postBio = () => {
    setTimeout(() => {
      fetch(
        `/${
          sessionStorage.getItem("role") === "STUDENT" ? "students" : "candidates"
        }/bio`,
        {
          method: "post",
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + sessionStorage.getItem("token"),
          },
          body: JSON.stringify({
            bio: this.state.bio,
          }),
        }
      )
        .then((res) => res.json())
        .then((data) => console.log(data));
    }, 500);
  };
  componentDidMount() {
    fetch(
      `/${
        sessionStorage.getItem("role") === "STUDENT" ? "students" : "candidates"
      }/getData`,
      {
        method: "get",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + sessionStorage.getItem("token"),
        },
      }
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.error) {
          console.log(data.error);
        } else {
          this.setState({
            cover: data.student.coverUrl,
            source: data.student.profileUrl,
            name: data.student.Name,
            alt: data.student.Name,
            degree: data.student.currentEducation.degree,
            course: data.student.currentEducation.branch,
            dept: data.student.currentEducation.department,
            bio: data.student.bio,
            sem: data.student.currentEducationDetails.currSem,
            passout: new Date(
              data.student.currentEducationDetails.courseEndDate
            ).getFullYear(),
            usn: data.student.currentEducationDetails.usn,
          });
        }
      });
  }
  generateURL = () => {
    alert(
      this.props.url + "/" + this.props.collegeName + "/" + this.state.name
    );
  };

  render() {
    return (
      <>
        <Card>
          {this.state.isSortable && (
            <CardHeader className="p-0 position-relative">
              <div className="position-absolute handle card-icon">
                <i className="simple-icon-shuffle" />
              </div>
            </CardHeader>
          )}

          <div className="d-flex flex-grow-1 min-width-zero ">
            <CardBody
              className=" pl-0 align-self-center mr-5 ml-5 flex-column flex-md-row justify-content-between min-width-zero"
              style={{ fontSize: 18 }}
            >
              <CardMedia
                style={{ cursor: "pointer" }}
                onClick={this.toggle1}
                component="img"
                alt="Contemplative Reptile"
                height="500"
                image={this.state.cover}
                title={this.state.name}
              />

              <Row className="mt-3" style={{ justifyContent: "normal" }}>
                <Col
                  style={{ cursor: "pointer" }}
                  onClick={this.toggle}
                  sm={{ offset: 5, size: 7 }}
                >
                  <Avatar
                    style={{ width: 150, height: 150 }}
                    alt={this.state.alt}
                    src={this.state.source}
                  />
                </Col>
                <Col className="mt-5" sm={{ offset: 5, size: 7 }}>
                  <CardTitle style={{ fontSize: 24 }}>
                    {this.state.name}
                  </CardTitle>
                </Col>
                <Col className="mt-1 mr-5 offset-4" sm={8}>
                  <CardTitle style={{ fontSize: 24 }}>
                    {this.state.passout} Passout Batch {"\t"} {this.state.usn}{" "}
                  </CardTitle>
                </Col>
                <Col className="mt-1 mr-5 offset-5" sm={8}>
                  <CardSubtitle>
                    {this.state.sem}th Semester, {"\t"} {this.state.degree}{" "}
                  </CardSubtitle>
                </Col>
                <Col className="mt-1 mr-5 offset-4" sm={9}>
                  <CardSubtitle style={{ fontSize: 24 }}>
                    {this.state.course}, {"\t"} {this.state.dept}{" "}
                  </CardSubtitle>
                </Col>

                <Col className="offset-4">
                  <Button
                    color="primary"
                    onClick={this.toggle3}
                    className="btn-shadow"
                    size="lg"
                  >
                    <IntlMessages id="Add Resume" />
                  </Button>
                  <Button
                    color="primary"
                    onClick={this.generateURL}
                    className="btn-shadow ml-4"
                    size="lg"
                  >
                    <IntlMessages id="Share Profile" />
                  </Button>
                </Col>
              </Row>
              <CardFooter className="mt-2" style={{ backgroundColor: "white" }}>
                {this.state.bio}
              </CardFooter>
              <Row className="mt-2">
                <Col className="offset-11">
                  <i
                    style={{ cursor: "pointer" }}
                    className="simple-icon-pencil "
                    onClick={this.toggle2}
                  >
                    {" "}
                    Edit
                  </i>
                </Col>
              </Row>
            </CardBody>
          </div>
        </Card>
        <Modal isOpen={this.state.open} toggle={this.toggle}>
          <div className="form-side">
            <ModalHeader toggle={this.toggle}>
              {" "}
              <IntlMessages id="Change Profile Picture" />
            </ModalHeader>

            <ModalBody>
              <Form>
                <Row>
                  <Label className="form-group has-float-label mb-4">
                    Profile Picture{" "}
                  </Label>
                  <Col>
                    <Input
                      type="file"
                      onChange={(e) =>
                        this.setState({ profilepic: e.target.files[0] })
                      }
                    />
                  </Col>
                </Row>
              </Form>
            </ModalBody>
            <ModalFooter>
              <div className="d-flex justify-content-end align-items-center">
                <Button
                  color="primary"
                  onClick={() => {
                    Resizer.imageFileResizer(
                      this.state.profilepic,
                      150,
                      150,
                      "JPEG",
                      100,
                      0,
                      (uri) => {
                        const formdata = new FormData();
                        formdata.append("file", uri);

                        formdata.append("upload_preset", "Documents");
                        formdata.append("cloud_name", "dl0dsqomf");
                        fetch(
                          "https://api.cloudinary.com/v1_1/dl0dsqomf/image/upload",
                          {
                            method: "post",

                            body: formdata,
                          }
                        )
                          .then((res) => res.json())
                          .then((data) => {
                            console.log(data.url);
                            this.setState({ source: data.url });
                            this.profilePic();
                            this.toggle();
                          });
                      },
                      "base64"
                    );
                  }}
                  className="btn-shadow"
                  size="lg"
                >
                  <IntlMessages id="save" />
                </Button>
              </div>
              <div className="d-flex justify-content-end align-items-center">
                <Button
                  color="secondary"
                  onClick={this.toggle}
                  className="btn-shadow"
                  size="lg"
                >
                  <IntlMessages id="cancel" />
                </Button>
              </div>
            </ModalFooter>
          </div>
        </Modal>
        <Modal isOpen={this.state.open1} toggle={this.toggle1}>
          <div className="form-side">
            <ModalHeader toggle={this.toggle1}>
              {" "}
              <IntlMessages id="Change Cover Picture" />
            </ModalHeader>

            <ModalBody>
              <Form>
                <Row>
                  <Label className="form-group has-float-label mb-4">
                    Cover Picture{" "}
                  </Label>
                  <Col>
                    <Input
                      type="file"
                      onChange={(e) =>
                        this.setState({ coverpic: e.target.files[0] })
                      }
                    />
                  </Col>
                </Row>
              </Form>
            </ModalBody>
            <ModalFooter>
              <div className="d-flex justify-content-end align-items-center">
                <Button
                  color="primary"
                  onClick={() => {
                    Resizer.imageFileResizer(
                      this.state.coverpic,
                      "100%",
                      500,
                      "JPEG",
                      100,
                      0,
                      (uri) => {
                        const formdata = new FormData();
                        formdata.append("file", uri);

                        formdata.append("upload_preset", "Documents");
                        formdata.append("cloud_name", "dl0dsqomf");
                        fetch(
                          "https://api.cloudinary.com/v1_1/dl0dsqomf/image/upload",
                          {
                            method: "post",

                            body: formdata,
                          }
                        )
                          .then((res) => res.json())
                          .then((data) => {
                            console.log(data.url);
                            this.setState({ cover: data.url });
                            this.coverPic();
                            this.toggle1();
                          })
                          .catch((err) => console.log(err));
                      },
                      "base64"
                    );
                  }}
                  className="btn-shadow"
                  size="lg"
                >
                  <IntlMessages id="save" />
                </Button>
              </div>
              <div className="d-flex justify-content-end align-items-center">
                <Button
                  color="secondary"
                  onClick={this.toggle1}
                  className="btn-shadow"
                  size="lg"
                >
                  <IntlMessages id="cancel" />
                </Button>
              </div>
            </ModalFooter>
          </div>
        </Modal>
        <Modal isOpen={this.state.open2} toggle={this.toggle2}>
          <div className="form-side">
            <ModalHeader toggle={this.toggle2}>
              {" "}
              <IntlMessages id="Change Bio" />
            </ModalHeader>

            <ModalBody>
              <Form>
                <Row>
                  <Col sm={12}>
                    <Input
                      defaultValue={this.state.bio}
                      innerRef={(input) => (this.bio = input)}
                      type="textarea"
                    />
                  </Col>
                </Row>
              </Form>
            </ModalBody>
            <ModalFooter>
              <div className="d-flex justify-content-end align-items-center">
                <Button
                  color="primary"
                  onClick={() => {
                    this.setState({ bio: this.bio.value });
                    this.postBio();
                    this.toggle2();
                  }}
                  className="btn-shadow"
                  size="lg"
                >
                  <IntlMessages id="save" />
                </Button>
              </div>
              <div className="d-flex justify-content-end align-items-center">
                <Button
                  color="secondary"
                  onClick={this.toggle2}
                  className="btn-shadow"
                  size="lg"
                >
                  <IntlMessages id="cancel" />
                </Button>
              </div>
            </ModalFooter>
          </div>
        </Modal>
        <Modal isOpen={this.state.open3} toggle={this.toggle3}>
          <div className="form-side">
            <ModalHeader toggle={this.toggle3}>
              {" "}
              <IntlMessages id="Add Resume" />
            </ModalHeader>

            <ModalBody>
              <Form>
                <Row>
                  <Col sm={12}>
                    <Input
                      type="file"
                      onChange={(e) =>
                        this.setState({ resume: e.target.files[0] })
                      }
                    />
                  </Col>
                </Row>
              </Form>
            </ModalBody>
            <ModalFooter>
              <div className="d-flex justify-content-end align-items-center">
                <Button
                  color="primary"
                  onClick={() => {
                    const formdata = new FormData();
                    formdata.append("file", formdata);

                    formdata.append("upload_preset", "Documents");
                    formdata.append("cloud_name", "dl0dsqomf");
                    fetch(
                      "https://api.cloudinary.com/v1_1/dl0dsqomf/image/upload",
                      {
                        method: "post",

                        body: formdata,
                      }
                    )
                      .then((res) => res.json())
                      .then((data) => {
                        console.log(data.url);
                        this.setState({ resumeUrl: data.url });
                        fetch(
                          `/${
                            sessionStorage.getItem("role") === "STUDENT"
                              ? "students"
                              : "candidates"
                          }/resume`,
                          {
                            method: "post",
                            headers: {
                              "Content-Type": "application/json",
                              Authorization:
                                "Bearer " + sessionStorage.getItem("token"),
                            },
                            body: JSON.stringify({
                              url: this.state.resumeUrl,
                            }),
                          }
                        )
                          .then((res) => res.json)
                          .then((result) => {
                            if (result.error) {
                              alert("Error");
                            }
                            window.alert(result.message);
                            this.toggle3();
                          });
                      })
                      .catch((err) => console.log(err));
                  }}
                  className="btn-shadow"
                  size="lg"
                >
                  <IntlMessages id="save" />
                </Button>
              </div>
              <div className="d-flex justify-content-end align-items-center">
                <Button
                  color="secondary"
                  onClick={this.toggle3}
                  className="btn-shadow"
                  size="lg"
                >
                  <IntlMessages id="cancel" />
                </Button>
              </div>
            </ModalFooter>
          </div>
        </Modal>
      </>
    );
  }
}

export default ProfileLayout;
