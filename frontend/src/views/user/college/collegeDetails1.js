import React, { useState, useEffect } from "react";
import { Row, Card, CardTitle, Form, Label, Input, Button } from "reactstrap";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { registerUser } from "../../../redux/actions";
import { useHistory } from "react-router-dom";
import IntlMessages from "../../../helpers/IntlMessages";
import { Colxx } from "../../../components/common/CustomBootstrap";

const CollegeDocs = () => {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     incorp: "",

  //     addressProof: "",
  //     bankStmt: "",
  //   };
  // }
  const history = useHistory();
  const [incorp, setIncorp] = useState("");

  const [addressProof, setAddProof] = useState("");
  const [bankStmt, setBankStmt] = useState("");
  const [url1, setUrl1] = useState("");
  const [url2, setUrl2] = useState("");
  const [url3, setUrl3] = useState("");

  useEffect(() => {
    if (!url1 || !url2 || !url3) {
    } else {
      console.log("URLS", url1, url2, url3);
      fetch("/college/docs", {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: sessionStorage.getItem("email"),
          bankStmt: url3,
          addProof: url2,
          collegeEst: url1,
        }),
      })
        .then((res) => res.json())
        .then((result) => {
          console.log(result);
          history.push("/user/colleges/login");
        });
    }
  }, [url1, url2, url3]);
  const onUpload = async () => {
    const data = new FormData();

    data.append("file", incorp);

    data.append("upload_preset", "Documents");
    data.append("cloud_name", "dl0dsqomf");
    fetch("https://api.cloudinary.com/v1_1/dl0dsqomf/image/upload", {
      method: "post",

      body: data,
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("1", data.url);
        setUrl1(data.url);
      })
      .catch((err) => console.log(err));

    const data2 = new FormData();

    data2.append("file", addressProof);

    data2.append("upload_preset", "Documents");
    data2.append("cloud_name", "dl0dsqomf");
    await fetch("https://api.cloudinary.com/v1_1/dl0dsqomf/image/upload", {
      method: "post",

      body: data2,
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("2", data.url);
        setUrl2(data.url);
      })
      .catch((err) => console.log(err));
    const data3 = new FormData();

    data3.append("file", bankStmt);

    data3.append("upload_preset", "Documents");
    data3.append("cloud_name", "dl0dsqomf");
    await fetch("https://api.cloudinary.com/v1_1/dl0dsqomf/image/upload", {
      method: "post",

      body: data3,
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("3", data.url);
        setUrl3(data.url);
      })
      .catch((err) => console.log(err));
    history.push("/user/orgs/login");
  };

  return (
    <Row className="h-100">
      <Colxx xxs="12" md="10" className="mx-auto my-auto">
        <Card className="auth-card">
          <div className="position-relative image-side ">
            <p className="text-white h2">MAGIC IS IN THE DETAILS</p>
          </div>
          <div className="form-side">
            <NavLink to={`/`} className="white">
              <span className="logo-single" />
            </NavLink>
            <CardTitle className="mb-4">
              <IntlMessages id="college.documents" />
            </CardTitle>
            <Form>
              <Label className="form-group has-float-label mb-4">
                College Establishment Certificate
                <Input
                  type="file"
                  onChange={(e) => {
                    setIncorp(e.target.files[0]);
                  }}
                />
              </Label>

              <Label className="form-group has-float-label mb-4">
                Address Proof
                <Input
                  type="file"
                  onChange={(e) => setAddProof(e.target.files[0])}
                />
              </Label>
              <Label className="form-group has-float-label mb-4">
                Bank Statement
                <Input
                  type="file"
                  onChange={(e) => setBankStmt(e.target.files[0])}
                />
              </Label>

              <div className="d-flex justify-content-end align-items-center">
                <Button
                  color="primary"
                  className="btn-shadow"
                  size="lg"
                  onClick={() => onUpload()}
                >
                  <IntlMessages id="user.next" />
                </Button>
              </div>
            </Form>
          </div>
        </Card>
      </Colxx>
    </Row>
  );
};

export default CollegeDocs;
