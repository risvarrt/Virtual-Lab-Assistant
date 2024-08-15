import React, { Component, Fragment } from "react";
import {
  Row,
  Card,
  CardTitle,
  CardBody,
  Col,
  CardText,
  CardHeader,
} from "reactstrap";
import { PDFExport } from "@progress/kendo-react-pdf";
import Snackbar from "@material-ui/core/Snackbar";
import Alert from "@material-ui/lab/Alert";
import { makeStyles } from "@material-ui/core/styles";
import ProfileLayout from "./profileLayout";
import IntlMessages from "../../../helpers/IntlMessages";
import { Colxx, Separator } from "../../../components/common/CustomBootstrap";
import Breadcrumb from "../../../containers/navs/Breadcrumb";
import "react-datepicker/dist/react-datepicker.css";
import FormA from "./formA";
import FormB from "./formB";
import FormC from "./formC";
import FormD from "./formD";
import FormE from "./formE";
import FormG from "./formG";
import FormSkill from "./formSkill";
import FormProject from "./formProjects";
import FormPositionOfRes from "./formPositionOfRes";
import FormSubject from "./formSubject";
import FormLanguage from "./formLanguage";
import FormAward from "./formAward";
import FormPublication from "./formPublication";
import FormF from "./formF";
import FormFEdit from "./formFEdit";
import FormCertificate from "./formCertificate";
import FormCompetition from "./formCompetition";
import FormWorkShop from "./formWorkShop";
import FormTest from "./formTest";
import FormPatent from "./formPatent";
import FormScholar from "./formScholar";
import FormVol from "./formVol";
import FormExtra from "./formExtra";
import FormSocial from "./formSocial";

export default class Start extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dob: "",
      gender: "",
      cat: "",

      email: "",
      collegeEmail: "",
      phno: "",
      pcity: "",
      pcountry: "",
      ppincode: "",
      paddressLine: "",
      pstate: "",
      pdis: "",
      cdis: "",
      ccity: "",
      ccountry: "",
      cpincode: "",
      caddressLine: "",
      cstate: "",

      nationality: "",
      passno: "",
      alternatephno: "",
      carbrk10: "",
      carbrk12: "",
      fathersname: "",
      mothersname: "",
      fathersoccup: "",
      mothersoccup: "",
      fathersphno: "",
      mothersphno: "",
      fathersalterphno: "",
      fathersemail: "",
      fatherworksin: "",
      fathersofficeadd: "",
      mothersalterphno: "",
      motherworksin: "",
      mothersofficeadd: "",
      mothersemail: "",
      boarding: "",
      lan: "",
      elective: "",
      prog: "",
      home: "",
      permphno: "",
      passyn: "",
      skypeid: "",

      carPlan: "",
      jobSector1: "",
      jobSector2: "",

      degree: "",
      course: "",
      branch: "",
      dept: "",
      collegeName: "",

      currentSem: "",
      noScores: "",
      score: "",
      courseStartDate: "",
      courseEndDate: "",
      lateral: "",
      uniID: "",
      sem1: [],
      sem2: [],
      sem3: [],
      sem4: [],
      sem5: [],
      sem6: [],
      sem7: [],
      sem8: [],

      school: "",
      board: "",
      program: "",
      specialisation: "",
      eduType: "",
      durationFrom: "",
      durationTo: "",
      addEdu: [],

      addExp: [],
      company: "",
      jobTitle: "",
      location: "",
      positionType: "",
      jobFn: "",
      companySector: "",
      currentWorking: "",
      stipend: "",
      details: "",
      from: "",
      to: "",

      proficiency: "",
      skill: "",
      addSkill: [],

      addPosition: [],
      title: "",
      orgName: "",
      startDate: "",
      endDate: "",
      currentHold: "",
      description: "",

      proTitle: "",
      proDomain: "",
      associatedWith: "",
      projectStartDate: "",
      projectEndDate: "",
      projectDescription: "",
      currentProject: "",
      modalProject: false,
      addProject: [],
      subjectName: "",
      subjectAssociatedWith: "",
      addSubject: [],

      language: "",
      languageProficiency: "",
      modalLanguage: false,
      addLanguage: [],

      modalSubject: false,

      awardTitle: "",
      issuer: "",
      issueDate: "",
      awardAssociatedWith: "",
      awardDescription: "",
      modalAward: false,
      addAward: [],

      certiName: "",
      issuingAuth: "",
      certiUrl: "",
      certiDate: "",
      licNo: "",
      certiExpiry: "",
      certiDescription: "",
      addCertification: [],
      modalCerti: false,

      competitionTitle: "",
      competitionPosition: "",
      competitionDate: "",
      competitionAssociatedWith: "",
      competitionDescription: "",

      modalCompetition: false,
      addCompetition: [],

      workshopTitle: "",
      workshopOrganizer: "",
      workshopEventDate: "",
      workshopAddress: "",
      workshopDescription: "",

      modalWorkshop: false,
      addWorkshop: [],

      testTitle: "",
      testChoose: "",
      testScore: "",
      testTotal: "",
      testDate: "",
      testAssociatedWith: "",
      testDescription: "",
      modalTest: false,
      addTest: [],

      patentTitle: "",
      patentOffice: "",
      patentNo: "",
      patentStatus: "",
      patentDescription: "",
      patentDate: "",
      modalPatent: false,
      addPatent: [],

      pubTitle: "",
      publisher: "",
      pubDate: "",
      pubUrl: "",
      pubDescription: "",
      modalPublication: false,
      addPublication: [],

      scholarTitle: "",
      grantDate: "",
      scholarDescrition: "",
      scholarAssociatedWith: "",
      modalScholar: false,
      addScholar: [],

      volOrg: "",
      volRole: "",
      volCause: "",
      volStart: "",
      volEnd: "",
      currentVol: "",
      volDescription: "",
      modalVol: false,
      addVol: [],

      extraCat: "",
      extraStart: "",
      extraEnd: "",
      extraDescription: "",
      modalActivity: false,
      addActivity: [],

      socialProfile: "",
      socialUrl: "",
      addSocial: [],
      modalSocial: false,

      modalPosOfRes: false,
      modalA: false,
      modalB: false,
      modalC: false,
      modalD: false,
      modalE: false,
      modalF: false,
      modalF1: false,
      modalG: false,
      modalSkill: false,
      modalEInner: false,
      modalInner1: false,
      modalInner: false,

      previousEducation: [],
      experience: [],
      skills: [],
      position: [],
      subjects: [],
      languages: [],
      awards: [],
      certification: [],
      competitions: [],
      conferences: [],
      social: [],
      projects: [],
      test: [],
      patent: [],
      publications: [],
      scholarships: [],
      volunteer: [],
      activity: [],
      open: false,
      msg: "",
      neg: false,
    };
    this.toggleA = this.toggleA.bind(this);
    this.toggleB = this.toggleB.bind(this);
    this.toggleC = this.toggleC.bind(this);
    this.toggleD = this.toggleD.bind(this);
    this.toggleE = this.toggleE.bind(this);
    this.toggleF = this.toggleF.bind(this);
    this.toggleF1 = this.toggleF1.bind(this);
    this.toggleAward = this.toggleAward.bind(this);
    this.toggleActivity = this.toggleActivity.bind(this);
    this.toggleG = this.toggleG.bind(this);
    this.toggleTest = this.toggleTest.bind(this);
    this.toggleCerti = this.toggleCerti.bind(this);
    this.toggleLanguage = this.toggleLanguage.bind(this);
    this.toggleProject = this.toggleProject.bind(this);
    this.togglePosOfRes = this.togglePosOfRes.bind(this);
    this.toggleSubject = this.toggleSubject.bind(this);
    this.toggleSkill = this.toggleSkill.bind(this);
    this.toggleVol = this.toggleVol.bind(this);
    this.toggleEInner = this.toggleEInner.bind(this);
    this.toggleInner = this.toggleInner.bind(this);
    this.toggleInner1 = this.toggleInner1.bind(this);
    this.toggleCompetition = this.toggleCompetition.bind(this);
    this.togglePatent = this.togglePatent.bind(this);
    this.toggleWorkshop = this.toggleWorkshop.bind(this);
    this.toggleScholar = this.toggleScholar.bind(this);
    this.togglePublication = this.togglePublication.bind(this);
    this.toggleSocial = this.toggleSocial.bind(this);
    this.formA = this.formA.bind(this);

    this.formB = this.formB.bind(this);
    this.formBInner = this.formBInner.bind(this);
    this.formBInner1 = this.formBInner1.bind(this);
    this.formC = this.formC.bind(this);
    this.formD = this.formD.bind(this);
    this.formE = this.formE.bind(this);
    this.formUpdate = this.formUpdate.bind(this);
    this.formF = this.formF.bind(this);
    this.formG = this.formG.bind(this);
    this.addEdu = this.addEdu.bind(this);
    this.addExp = this.addExp.bind(this);
    this.formSkill = this.formSkill.bind(this);
    this.addSkill = this.addSkill.bind(this);
    this.formPosOfRes = this.formPosOfRes.bind(this);
    this.addPosOfRes = this.addPosOfRes.bind(this);
    this.formProject = this.formProject.bind(this);
    this.addProject = this.addProject.bind(this);
    this.formSubject = this.formSubject.bind(this);
    this.addSubject = this.addSubject.bind(this);
    this.formLanguage = this.formLanguage.bind(this);
    this.addLanguage = this.addLanguage.bind(this);
    this.formAward = this.formAward.bind(this);
    this.addAward = this.addAward.bind(this);
    this.formCerti = this.formCerti.bind(this);
    this.addCertification = this.addCertification.bind(this);
    this.formCompetition = this.formCompetition.bind(this);
    this.addCompetition = this.addCompetition.bind(this);
    this.formWorkshop = this.formWorkshop.bind(this);
    this.addWorkshop = this.addWorkshop.bind(this);
    this.formTest = this.formTest.bind(this);
    this.addTest = this.addTest.bind(this);
    this.formPatent = this.formPatent.bind(this);
    this.addPatent = this.addPatent.bind(this);
    this.formPublication = this.formPublication.bind(this);
    this.addPublication = this.addPublication.bind(this);
    this.formScholar = this.formScholar.bind(this);
    this.addScholar = this.addScholar.bind(this);
    this.formVol = this.formVol.bind(this);
    this.addVol = this.addVol.bind(this);
    this.formExtra = this.formExtra.bind(this);
    this.addActivity = this.addActivity.bind(this);
    this.formSocial = this.formSocial.bind(this);
    this.addSocial = this.addSocial.bind(this);

    this.handleClick = this.handleClick.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.exportPDFWithComponent = this.exportPDFWithComponent.bind(this);
  }

  toggleA = () => this.setState({ modalA: !this.state.modalA });
  toggleB = () => this.setState({ modalB: !this.state.modalB });
  toggleC = () => this.setState({ modalC: !this.state.modalC });
  toggleD = () => this.setState({ modalD: !this.state.modalD });
  toggleE = () => this.setState({ modalE: !this.state.modalE });
  toggleF = () => this.setState({ modalF: !this.state.modalF });
  toggleF1 = () => this.setState({ modalF1: !this.state.modalF1 });
  toggleG = () => this.setState({ modalG: !this.state.modalG });
  toggleProject = () =>
    this.setState({ modalProject: !this.state.modalProject });
  togglePosOfRes = () =>
    this.setState({ modalPosOfRes: !this.state.modalPosOfRes });

  toggleSubject = () =>
    this.setState({ modalSubject: !this.state.modalSubject });
  toggleLanguage = () =>
    this.setState({ modalLanguage: !this.state.modalLanguage });
  togglePatent = () => this.setState({ modalPatent: !this.state.modalPatent });
  toggleVol = () => this.setState({ modalVol: !this.state.modalVol });
  toggleCerti = () => this.setState({ modalCerti: !this.state.modalCerti });
  toggleAward = () => this.setState({ modalAward: !this.state.modalAward });
  toggleEInner = () => this.setState({ modalEInner: !this.state.modalEInner });
  toggleSkill = () => this.setState({ modalSkill: !this.state.modalSkill });
  toggleInner = () => this.setState({ modalInner: !this.state.modalInner });
  toggleInner1 = () => this.setState({ modalInner1: !this.state.modalInner1 });
  toggleCompetition = () =>
    this.setState({ modalCompetition: !this.state.modalCompetition });
  toggleWorkshop = () =>
    this.setState({ modalWorkshop: !this.state.modalWorkshop });
  toggleActivity = () =>
    this.setState({ modalActivity: !this.state.modalActivity });
  toggleTest = () => this.setState({ modalTest: !this.state.modalTest });
  toggleScholar = () =>
    this.setState({ modalScholar: !this.state.modalScholar });
  togglePublication = () =>
    this.setState({ modalPublication: !this.state.modalPublication });
  toggleSocial = () => this.setState({ modalSocial: !this.state.modalSocial });

  handleClick = () => {
    this.setState({ open: true });
  };

  handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    this.setState({ open: false });
  };

  formA = (e) => {
    this.setState({
      dob: e.dob,
      gender: e.gender,
      cat: e.cat,
    });

    setTimeout(() => {
      fetch(
        `/${
          sessionStorage.getItem("role") === "STUDENT" ? "students" : "candidates"
        }/aboutus`,
        {
          method: "post",
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + sessionStorage.getItem("token"),
          },
          body: JSON.stringify({
            dob: this.state.dob,
            gender: this.state.gender,
            category: this.state.cat,
          }),
        }
      )
        .then((res) => res.json)
        .then((data) => {
          if (data.error) {
            this.handleClick();
            this.setState({
              msg: data.error,
              neg: true,
            });
            console.log(data.error);
          } else {
            this.handleClick();
            this.setState({
              msg: data.message,
              neg: false,
            });
            console.log(data.message);
          }
        });
    }, 1000);
  };

  formB = (e) => {
    this.setState({
      email: e.email,
      phno: e.phno,
      collegeEmail: e.collegeEmail,
    });
  };
  formBInner = (e) => {
    this.setState({
      pcity: e.pcity,
      pcountry: e.pcountry,
      ppincode: e.ppincode,
      paddressLine: e.paddressLine,
      pstate: e.pstate,
      pdis: e.pdis,
    });
  };
  formBInner1 = (e) => {
    this.setState({
      cdis: e.cdis,
      ccity: e.ccity,
      ccountry: e.ccountry,
      cpincode: e.cpincode,
      caddressLine: e.caddressLine,
      cstate: e.cstate,
    });
    setTimeout(() => {
      fetch(
        `/${
          sessionStorage.getItem("role") === "STUDENT" ? "students" : "candidates"
        }/contact`,
        {
          method: "post",
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + sessionStorage.getItem("token"),
          },
          body: JSON.stringify({
            email: this.state.email,
            collegeEmail: !this.state.collegeEmail
              ? null
              : this.state.collegeEmail,
            phoneNo: this.state.phno,
            paddress:
              this.state.paddressLine +
              ", " +
              this.state.pdis +
              ", " +
              this.state.pcity +
              "-" +
              this.state.ppincode +
              ", " +
              this.state.pstate +
              ", " +
              this.state.pcountry,
            caddress:
              this.state.caddressLine +
              ", " +
              this.state.cdis +
              ", " +
              this.state.ccity +
              "-" +
              this.state.cpincode +
              ", " +
              this.state.cstate +
              ", " +
              this.state.ccountry,
          }),
        }
      )
        .then((res) => res.json())
        .then((data) => {
          if (data.error) {
            this.handleClick();
            this.setState({
              msg: data.error,
              neg: true,
            });
            console.log(data.error);
          } else {
            this.handleClick();
            this.setState({
              msg: data.message,
              neg: false,
            });
            console.log(data.message);
          }
        });
    }, 1000);
  };
  formC = (e) => {
    this.setState({
      nationality: e.nationality,
      passno: e.passno,
      alternatephno: e.alterphnp,
      carbrk10: e.carbrk10,
      carbrk12: e.carbrk12,
      fathersname: e.fathersname,
      mothersname: e.mothersname,
      fathersoccup: e.fathersoccup,
      mothersoccup: e.mothersoccup,
      fathersphno: e.fathersphno,
      mothersphno: e.mothersphno,
      fathersalterphno: e.fathersalterphno,
      fathersemail: e.fathersemail,
      fatherworksin: e.fathersworkin,
      fathersofficeadd: e.fathersoffadd,
      mothersalterphno: e.mothersalterphno,
      motherworksin: e.motherworkin,
      mothersemail: e.mothersemail,
      mothersofficeadd: e.mothersoffadd,
      boarding: e.boarding,
      lan: e.lan,
      elective: e.elective,
      prog: e.prog,
      home: e.home,
      permphno: e.pphno,
      passyn: e.passyn,
      skypeid: e.skypeid,
    });
    setTimeout(() => {
      fetch(
        `/${
          sessionStorage.getItem("role") === "STUDENT" ? "students" : "candidates"
        }/additionalInfo`,
        {
          method: "post",
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + sessionStorage.getItem("token"),
          },
          body: JSON.stringify({
            nationality: this.state.nationality,
            passportno: this.state.passno,
            alternatePhno: this.state.alternatephno,
            carBrk1012: this.state.carbrk10,
            carBrk12: this.state.carbrk12,
            fatherName: this.state.fathersname,
            motherName: this.state.mothersname,
            fatherPhNo: this.state.fathersphno,
            fatherAlternatePhNom: this.state.fathersalterphno,
            motherPhno: this.state.mothersphno,
            motherAlternatePhno: this.state.mothersalterphno,
            fatherOccupation: this.state.fathersoccup,
            motherOccupation: this.state.mothersoccup,
            fatherEmail: this.state.fathersemail,
            motherEmail: this.state.mothersemail,
            fatherWorkIn: this.state.fatherworksin,
            motherWorkIn: this.state.motherworksin,
            fatherOfficeAddress: this.state.fathersofficeadd,
            motherOfficeAddress: this.state.mothersofficeadd,
            boarding: this.state.boarding,
            languages: this.state.lan,
            elective: this.state.elective,
            programming: this.state.prog,
            hometown: this.state.home,
            permanentPhno: this.state.permphno,
            passport: this.state.passyn,
            skypeID: this.state.skypeid,
          }),
        }
      )
        .then((res) => res.json())
        .then((data) => {
          if (data.error) {
            this.handleClick();
            this.setState({
              msg: data.error,
              neg: true,
            });
            console.log(data.error);
          } else {
            this.handleClick();
            this.setState({
              msg: data.message,
              neg: false,
            });
            console.log(data.message);
          }
        });
    }, 1000);
  };
  formD = (e) => {
    this.setState({
      carPlan: e.carPlan,
      jobSector1: e.jobSector1,
      jobSector2: e.jobSector2,
    });
    setTimeout(() => {
      fetch(
        `/${
          sessionStorage.getItem("role") === "STUDENT" ? "students" : "candidates"
        }/placement-details`,
        {
          method: "post",
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + sessionStorage.getItem("token"),
          },
          body: JSON.stringify({
            carPlan: this.state.carPlan,
            jobSector1: this.state.jobSector1,
            jobSector2: this.state.jobSector2,
          }),
        }
      )
        .then((res) => res.json())
        .then((data) => {
          if (data.error) {
            this.handleClick();
            this.setState({
              msg: data.error,
              neg: true,
            });
            console.log(data.error);
          } else {
            this.handleClick();
            this.setState({
              msg: data.message,
              neg: false,
            });
            console.log(data.message);
          }
        });
    });
  };
  formE = (e) => {
    this.setState({
      degree: e.degree,
      course: e.course,
      branch: e.branch,
      dept: e.dept,
      collegeName: e.collegeName,
    });
    setTimeout(() => {
      fetch(
        `/${
          sessionStorage.getItem("role") === "STUDENT" ? "students" : "candidates"
        }/current-edu-details`,
        {
          method: "post",
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + sessionStorage.getItem("token"),
          },
          body: JSON.stringify({
            degree: this.state.degree,
            course: this.state.course,
            branch: this.state.branch,
            department: this.state.dept,
            collegeName: this.state.collegeName,
          }),
        }
      )
        .then((res) => res.json())
        .then((data) => {
          if (data.error) {
            this.handleClick();
            this.setState({
              msg: data.error,
              neg: true,
            });
            console.log(data.error);
          } else {
            this.handleClick();
            this.setState({
              msg: data.message,
              neg: false,
            });
            console.log(data.message);
          }
        });
    }, 1000);
  };
  formUpdate = (e) => {
    this.setState({
      currentSem: e.currentSem,
      noScores: !e.noScores ? "NA" : "Yes",
      score: e.score,
      courseStartDate: e.courseStart,
      courseEndDate: e.courseEnd,
      lateral: !e.lateral ? "NA" : "Yes",
      uniID: e.uniID,
      sem1: [e.sem1, e.sem1tot, e.sem1ongoing],
      sem2: [e.sem2, e.sem2tot, e.sem2ongoing],
      sem3: [e.sem3, e.sem3tot, e.sem3ongoing],
      sem4: [e.sem4, e.sem4tot, e.sem4ongoing],
      sem5: [e.sem5, e.sem5tot, e.sem5ongoing],
      sem6: [e.sem6, e.sem6tot, e.sem6ongoing],
      sem7: [e.sem7, e.sem7tot, e.sem7ongoing],
      sem8: [e.sem8, e.sem8tot, e.sem8ongoing],
    });
    setTimeout(() => {
      fetch(
        `/${
          sessionStorage.getItem("role") === "STUDENT" ? "students" : "candidates"
        }/current-edu-details/addOn`,
        {
          method: "post",
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + sessionStorage.getItem("token"),
          },
          body: JSON.stringify({
            currSem: this.state.currentSem,
            scoreYet: this.state.noScores,
            score: this.state.score,
            courseStartDate: this.state.courseStartDate,
            courseEndDate: this.state.courseEndDate,
            lateral: this.state.lateral,
            usn: this.state.uniID,
            sem1: this.state.sem1,
            sem2: this.state.sem2,
            sem3: this.state.sem3,
            sem4: this.state.sem4,
            sem5: this.state.sem5,
            sem6: this.state.sem6,
            sem7: this.state.sem7,
            sem8: this.state.sem8,
          }),
        }
      )
        .then((res) => res.json())
        .then((data) => {
          if (data.error) {
            this.handleClick();
            this.setState({
              msg: data.error,
              neg: true,
            });
            console.log(data.error);
          } else {
            this.handleClick();
            this.setState({
              msg: data.message,
              neg: false,
            });
            console.log(data.message);
          }
        });
    }, 1000);
  };
  formF = (e) => {
    this.setState({
      school: e.school,
      board: e.board,
      program: e.program,
      specialisation: e.specialisation,
      eduType: e.eduType,
      durationFrom: e.duration[0],
      durationTo: e.duration[1],
    });
    setTimeout(() => {
      fetch(
        `/${
          sessionStorage.getItem("role") === "STUDENT" ? "students" : "candidates"
        }/educationDetails`,
        {
          method: "post",
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + sessionStorage.getItem("token"),
          },
          body: JSON.stringify({
            school: this.state.school,
            board: this.state.board,
            program: this.state.program,
            branch: this.state.specialisation,
            eduType: this.state.eduType,
            durationFrom: this.state.durationFrom,
            durationTo: this.state.durationTo,
          }),
        }
      )
        .then((res) => res.json())
        .then((data) => {
          if (data.error) {
            this.handleClick();
            this.setState({
              msg: data.error,
              neg: true,
            });
            console.log(data.error);
          } else {
            this.handleClick();
            this.setState({
              msg: data.message,
              neg: false,
            });
            console.log(data.message);
          }
        });
    }, 1000);
  };
  formG = (e) => {
    this.setState({
      company: e.company,
      jobTitle: e.jobTitle,
      location: e.location,
      positionType: e.positionType,
      jobFn: e.jobFn,
      companySector: e.companySector,
      currentWorking: !e.currentWorking ? "No" : "Yes",
      stipend: e.stipend,
      details: e.details,
      from: e.timePeriod[0],
      to: e.timePeriod[1],
    });
    setTimeout(() => {
      fetch(
        `/${
          sessionStorage.getItem("role") === "STUDENT" ? "students" : "candidates"
        }/experience`,
        {
          method: "post",
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + sessionStorage.getItem("token"),
          },
          body: JSON.stringify({
            company: this.state.company,
            jobTitle: this.state.jobTitle,
            location: this.state.location,
            positionType: this.state.positionType,
            jobFunction: this.state.jobFn,
            companySecotr: this.state.companySector,
            timeFrom: this.state.from,
            timeTo: this.state.to,
            current: this.state.currentWorking,
            details: this.state.details,
          }),
        }
      )
        .then((res) => res.json())
        .then((data) => {
          if (data.error) {
            this.handleClick();
            this.setState({
              msg: data.error,
              neg: true,
            });
            console.log(data.error);
          } else {
            console.log(data.message);
            this.handleClick();
            this.setState({
              msg: data.message,
              neg: false,
            });
          }
        });
    }, 1000);
  };
  addEdu = () => {
    let component = this.state.addEdu;
    const card = (
      <div className=" d-flex flex-grow-1 min-width-zero ">
        <CardBody
          style={{ fontSize: 18 }}
          className=" pl-0 align-self-center mr-5 ml-5 flex-column flex-md-row justify-content-between min-width-zero"
        >
          <Row>
            <Colxx xxs="12">
              <Col className="offset-11">
                {" "}
                <i
                  style={{ cursor: "pointer" }}
                  className="simple-icon-pencil "
                  onClick={this.toggleF1}
                >
                  {" "}
                  Edit
                </i>
              </Col>
              <CardTitle className="mb-10 "></CardTitle>
              <CardBody>
                <Row className="mb-4">
                  <Col sm={3}>
                    <IntlMessages id="school/institute" />
                  </Col>
                  <Col sm={4}>
                    <CardText style={{ fontSize: 18 }}>
                      {this.state.school}
                    </CardText>
                  </Col>
                </Row>
                <hr
                  style={{
                    color: "#808080",
                    backgroundColor: "#808080",
                    height: 1,
                    border: " 1px solid #808080",
                  }}
                />
                <Row className="mb-4">
                  <Col sm={3}>
                    <IntlMessages id="board/university" />
                  </Col>
                  <Col sm={4}>
                    <CardText style={{ fontSize: 18 }}>
                      {this.state.board}
                    </CardText>
                  </Col>
                </Row>
                <hr
                  style={{
                    color: "#808080",
                    backgroundColor: "#808080",
                    height: 1,
                    border: " 1px solid #808080",
                  }}
                />
                <Row className="mb-4">
                  <Col sm={3}>
                    <IntlMessages id="program" />
                  </Col>
                  <Col sm={4}>
                    <CardText style={{ fontSize: 18 }}>
                      {this.state.program}
                    </CardText>
                  </Col>
                </Row>
                <hr
                  style={{
                    color: "#808080",
                    backgroundColor: "#808080",
                    height: 1,
                    border: " 1px solid #808080",
                  }}
                />
                <Row className="mb-4">
                  <Col sm={3}>
                    <IntlMessages id="specialisation" />
                  </Col>
                  <Col sm={4}>
                    <CardText style={{ fontSize: 18 }}>
                      {this.state.specialisation}
                    </CardText>
                  </Col>
                </Row>
                <hr
                  style={{
                    color: "#808080",
                    backgroundColor: "#808080",
                    height: 1,
                    border: " 1px solid #808080",
                  }}
                />
                <Row className="mb-4">
                  <Col sm={3}>
                    <IntlMessages id="duration" />
                  </Col>
                  <Col sm={2}>
                    <CardText style={{ fontSize: 18 }}>
                      {this.state.durationFrom}
                    </CardText>
                  </Col>
                  <Col sm={1}>
                    <IntlMessages id="to" />
                  </Col>
                  <Col sm={2}>
                    <CardText style={{ fontSize: 18 }}>
                      {this.state.durationTo}
                    </CardText>
                  </Col>
                </Row>
              </CardBody>
            </Colxx>
          </Row>
        </CardBody>
        <FormFEdit
          school={this.state.school}
          board={this.state.board}
          program={this.state.program}
          specialisation={this.state.specialisation}
          eduType={this.state.eduType}
          open={this.state.modalF1}
          toggle={this.toggleF1}
          formEvent={this.formF}
          addEdu={this.addEdu}
        />
      </div>
    );
    component.push(card);
    this.setState({ addEdu: component });
  };
  addExp = () => {
    let component = this.state.addExp;
    const card = (
      <div className=" d-flex flex-grow-1 min-width-zero ">
        <CardTitle className="mb-10">{this.state.jobTitle}</CardTitle>
        <CardBody
          style={{ fontSize: 18 }}
          className=" pl-0 align-self-center mr-5 ml-5 flex-column flex-md-row justify-content-between min-width-zero"
        >
          <Row>
            <Colxx xxs="12">
              <Col className="offset-11">
                {" "}
                <i
                  style={{ cursor: "pointer" }}
                  className="simple-icon-pencil "
                >
                  {" "}
                  Edit
                </i>
              </Col>
              <CardTitle className="mb-10 "></CardTitle>
              <CardBody>
                <Row className="mb-4">
                  <Col sm={3}>
                    <IntlMessages id="company" />
                  </Col>
                  <Col sm={4}>
                    <CardText style={{ fontSize: 18 }}>
                      {this.state.company}
                    </CardText>
                  </Col>
                </Row>
                <hr
                  style={{
                    color: "#808080",
                    backgroundColor: "#808080",
                    height: 1,
                    border: " 1px solid #808080",
                  }}
                />
                <Row className="mb-4">
                  <Col sm={3}>
                    <IntlMessages id="jobTitle" />
                  </Col>
                  <Col sm={4}>
                    <CardText style={{ fontSize: 18 }}>
                      {this.state.jobTitle}
                    </CardText>
                  </Col>
                </Row>
                <hr
                  style={{
                    color: "#808080",
                    backgroundColor: "#808080",
                    height: 1,
                    border: " 1px solid #808080",
                  }}
                />
                <Row className="mb-4">
                  <Col sm={3}>
                    <IntlMessages id="location" />
                  </Col>
                  <Col sm={4}>
                    <CardText style={{ fontSize: 18 }}>
                      {this.state.location}
                    </CardText>
                  </Col>
                </Row>
                <hr
                  style={{
                    color: "#808080",
                    backgroundColor: "#808080",
                    height: 1,
                    border: " 1px solid #808080",
                  }}
                />
                <Row className="mb-4">
                  <Col sm={3}>
                    <IntlMessages id="positionType" />
                  </Col>
                  <Col sm={4}>
                    <CardText style={{ fontSize: 18 }}>
                      {this.state.positionType}
                    </CardText>
                  </Col>
                </Row>
                <hr
                  style={{
                    color: "#808080",
                    backgroundColor: "#808080",
                    height: 1,
                    border: " 1px solid #808080",
                  }}
                />
                <Row className="mb-4">
                  <Col sm={3}>
                    <IntlMessages id="jobFn" />
                  </Col>
                  <Col sm={4}>
                    <CardText style={{ fontSize: 18 }}>
                      {this.state.jobFn}
                    </CardText>
                  </Col>
                </Row>
                <hr
                  style={{
                    color: "#808080",
                    backgroundColor: "#808080",
                    height: 1,
                    border: " 1px solid #808080",
                  }}
                />
                <Row className="mb-4">
                  <Col sm={3}>
                    <IntlMessages id="companySector" />
                  </Col>
                  <Col sm={4}>
                    <CardText style={{ fontSize: 18 }}>
                      {this.state.companySector}
                    </CardText>
                  </Col>
                </Row>
                <hr
                  style={{
                    color: "#808080",
                    backgroundColor: "#808080",
                    height: 1,
                    border: " 1px solid #808080",
                  }}
                />
                <Row className="mb-4">
                  <Col sm={3}>
                    <IntlMessages id="timePeriod" />
                  </Col>
                  <Col sm={2}>
                    <CardText style={{ fontSize: 18 }}>
                      {this.state.from}
                    </CardText>
                  </Col>
                  <Col sm={1}>
                    <IntlMessages id="to" />
                  </Col>
                  <Col sm={2}>
                    <CardText style={{ fontSize: 18 }}>
                      {this.state.to}
                    </CardText>
                  </Col>
                </Row>
                <hr
                  style={{
                    color: "#808080",
                    backgroundColor: "#808080",
                    height: 1,
                    border: " 1px solid #808080",
                  }}
                />
                {this.state.currentWorking === "Yes" ? (
                  <Row className="mb-4">
                    <Col sm={3}>
                      <IntlMessages id="currentWorking" />
                    </Col>
                    <Col sm={4}>
                      <CardText style={{ fontSize: 18 }}>
                        {this.state.currentWorking}
                      </CardText>
                    </Col>
                    <hr
                      style={{
                        color: "#808080",
                        backgroundColor: "#808080",
                        height: 1,
                        border: " 1px solid #808080",
                      }}
                    />
                  </Row>
                ) : null}
                <Row className="mb-4">
                  <Col sm={3}>
                    <IntlMessages id="details" />
                  </Col>
                  <Col sm={4}>
                    <CardText style={{ fontSize: 18 }}>
                      {this.state.details}
                    </CardText>
                  </Col>
                </Row>
              </CardBody>
            </Colxx>
          </Row>
        </CardBody>
      </div>
    );
    component.push(card);
    this.setState({ addExp: component });
  };

  formSkill = (e) => {
    this.setState({
      skill: e.skill,
      proficiency: e.proficiency,
    });
    setTimeout(() => {
      fetch(
        `/${
          sessionStorage.getItem("role") === "STUDENT" ? "students" : "candidates"
        }/addSkills`,
        {
          method: "post",
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + sessionStorage.getItem("token"),
          },
          body: JSON.stringify({
            skill: this.state.skill,
            proficiency: this.state.proficiency,
          }),
        }
      )
        .then((res) => res.json())
        .then((data) => {
          if (data.error) {
            this.handleClick();
            this.setState({
              msg: data.error,
              neg: true,
            });
            console.log(data.error);
          } else {
            console.log(data.message);
            this.handleClick();
            this.setState({
              msg: data.message,
              neg: false,
            });
          }
        });
    });
  };
  addSkill = () => {
    let component = this.state.addSkill;
    const card = (
      <Row>
        <Colxx xxs="12">
          <CardBody>
            <Row className="mb-4">
              <Col sm={4}>
                <CardText style={{ fontSize: 18 }}>{this.state.skill}</CardText>
              </Col>
              <Col sm={3}>
                <CardText style={{ fontSize: 18 }}>
                  {this.state.proficiency}
                </CardText>
              </Col>
              <Col
                sm={{ offset: 2, size: 2 }}
                className="justify-content-between"
              >
                <i
                  className="simple-icon-pencil"
                  style={{ cursor: "pointer" }}
                ></i>

                <i
                  className="iconsminds-pen "
                  style={{ cursor: "pointer" }}
                ></i>

                <i
                  className="simple-icon-trash"
                  style={{ cursor: "pointer" }}
                ></i>
              </Col>
            </Row>

            <hr
              style={{
                color: "#808080",
                backgroundColor: "#808080",
                height: 1,
                border: " 1px solid #808080",
              }}
            />
          </CardBody>
        </Colxx>
      </Row>
    );
    component.push(card);
    this.setState({ addSkill: component });
  };
  formPosOfRes = (e) => {
    this.setState({
      title: e.title,
      orgName: e.orgName,
      startDate: e.startDate,
      endDate: e.endDate,
      currentHold: !e.currentHold ? "No" : "Yes",
      description: e.description,
    });
    setTimeout(() => {
      fetch(
        `/${
          sessionStorage.getItem("role") === "STUDENT" ? "students" : "candidates"
        }/addPosition`,
        {
          method: "post",
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + sessionStorage.getItem("token"),
          },
          body: JSON.stringify({
            title: this.state.title,
            orgName: this.state.orgName,
            startDate: this.state.startDate,
            endDate: this.state.endDate,
            current: this.state.currentHold,
            description: this.state.description,
          }),
        }
      )
        .then((res) => res.json())
        .then((data) => {
          if (data.error) {
            this.handleClick();
            this.setState({
              msg: data.error,
              neg: true,
            });
            console.log(data.error);
          } else {
            console.log(data.message);
            this.handleClick();
            this.setState({
              msg: data.message,
              neg: false,
            });
          }
        });
    }, 1000);
  };
  addPosOfRes = () => {
    let component = this.state.addPosition;
    const card = (
      <CardBody
        style={{ fontSize: 18 }}
        className=" pl-0 align-self-center mr-5 ml-5 flex-column flex-md-row justify-content-between min-width-zero"
      >
        <Row>
          <Colxx xxs="12">
            <Col className="offset-11">
              {" "}
              <i style={{ cursor: "pointer" }} className="simple-icon-pencil ">
                {" "}
                Edit
              </i>
            </Col>

            <CardBody>
              <Row className="mb-4">
                <Col sm={3}>
                  <IntlMessages id="title" />
                </Col>
                <Col sm={4}>
                  <CardText style={{ fontSize: 18 }}>
                    {this.state.title}
                  </CardText>
                </Col>
              </Row>
              <hr
                style={{
                  color: "#808080",
                  backgroundColor: "#808080",
                  height: 1,
                  border: " 1px solid #808080",
                }}
              />
              <Row className="mb-4">
                <Col sm={3}>
                  <IntlMessages id="orgName" />
                </Col>
                <Col sm={4}>
                  <CardText style={{ fontSize: 18 }}>
                    {this.state.orgName}
                  </CardText>
                </Col>
              </Row>
              <hr
                style={{
                  color: "#808080",
                  backgroundColor: "#808080",
                  height: 1,
                  border: " 1px solid #808080",
                }}
              />
              <Row className="mb-4">
                <Col sm={3}>
                  <IntlMessages id="startDate" />
                </Col>
                <Col sm={4}>
                  <CardText style={{ fontSize: 18 }}>
                    {this.state.startDate}
                  </CardText>
                </Col>
              </Row>
              <hr
                style={{
                  color: "#808080",
                  backgroundColor: "#808080",
                  height: 1,
                  border: " 1px solid #808080",
                }}
              />
              <Row className="mb-4">
                <Col sm={3}>
                  <IntlMessages id="endDate" />
                </Col>
                <Col sm={4}>
                  <CardText style={{ fontSize: 18 }}>
                    {this.state.endDate}
                  </CardText>
                </Col>
              </Row>
              <hr
                style={{
                  color: "#808080",
                  backgroundColor: "#808080",
                  height: 1,
                  border: " 1px solid #808080",
                }}
              />
              {this.state.currentHold === "No" ? null : (
                <Row className="mb-4">
                  <Col sm={3}>
                    <IntlMessages id="currentHold" />
                  </Col>
                  <Col sm={4}>
                    <CardText style={{ fontSize: 18 }}>
                      {this.state.currentHold}
                    </CardText>
                  </Col>
                  <hr
                    style={{
                      color: "#808080",
                      backgroundColor: "#808080",
                      height: 1,
                      border: " 1px solid #808080",
                    }}
                  />
                </Row>
              )}
              <Row className="mb-4">
                <Col sm={3}>
                  <IntlMessages id="description" />
                </Col>
                <Col sm={4}>
                  <CardText style={{ fontSize: 18 }}>
                    {this.state.description}
                  </CardText>
                </Col>
              </Row>
            </CardBody>
          </Colxx>
        </Row>
      </CardBody>
    );
    component.push(card);
    this.setState({ addPosition: component });
  };
  formProject = (e) => {
    this.setState({
      proTitle: e.proTitle,
      proDomain: e.proDomain,
      associatedWith: e.associatedWith,
      projectStartDate: e.startDate,
      projectEndDate: e.endDate,
      projectDescription: e.description,
      currentProject: !e.currentProject ? "No" : "Yes",
    });
    setTimeout(() => {
      fetch(
        `/${
          sessionStorage.getItem("role") === "STUDENT" ? "students" : "candidates"
        }/addProject`,
        {
          method: "post",
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + sessionStorage.getItem("token"),
          },
          body: JSON.stringify({
            title: this.state.proTitle,
            domain: this.state.proDomain,
            startDate: this.state.projectStartDate,
            endDate: this.state.projectEndDate,
            current: this.state.currentProject,
            associatedWith: this.state.associatedWith,
            description: this.state,
          }),
        }
      )
        .then((res) => res.json())
        .then((data) => {
          if (data.error) {
            this.handleClick();
            this.setState({
              msg: data.error,
              neg: true,
            });
            console.log(data.error);
          } else {
            console.log(data.message);
            this.handleClick();
            this.setState({
              msg: data.message,
              neg: false,
            });
          }
        });
    });
  };
  addProject = () => {
    let component = this.state.addProject;
    const card = (
      <CardBody
        style={{ fontSize: 18 }}
        className=" pl-0 align-self-center mr-5 ml-5 flex-column flex-md-row justify-content-between min-width-zero"
      >
        <Row>
          <Colxx xxs="12">
            <Col className="offset-11">
              {" "}
              <i style={{ cursor: "pointer" }} className="simple-icon-pencil ">
                {" "}
                Edit
              </i>
            </Col>

            <CardBody>
              <Row className="mb-4">
                <Col sm={3}>
                  <IntlMessages id="proTitle" />
                </Col>
                <Col sm={4}>
                  <CardText style={{ fontSize: 18 }}>
                    {this.state.proTitle}
                  </CardText>
                </Col>
              </Row>
              <hr
                style={{
                  color: "#808080",
                  backgroundColor: "#808080",
                  height: 1,
                  border: " 1px solid #808080",
                }}
              />
              <Row className="mb-4">
                <Col sm={3}>
                  <IntlMessages id="proDomain" />
                </Col>
                <Col sm={4}>
                  <CardText style={{ fontSize: 18 }}>
                    {this.state.proDomain}
                  </CardText>
                </Col>
              </Row>
              <hr
                style={{
                  color: "#808080",
                  backgroundColor: "#808080",
                  height: 1,
                  border: " 1px solid #808080",
                }}
              />
              <Row className="mb-4">
                <Col sm={3}>
                  <IntlMessages id="startDate" />
                </Col>
                <Col sm={4}>
                  <CardText style={{ fontSize: 18 }}>
                    {this.state.projectStartDate}
                  </CardText>
                </Col>
              </Row>
              <hr
                style={{
                  color: "#808080",
                  backgroundColor: "#808080",
                  height: 1,
                  border: " 1px solid #808080",
                }}
              />
              <Row className="mb-4">
                <Col sm={3}>
                  <IntlMessages id="endDate" />
                </Col>
                <Col sm={4}>
                  <CardText style={{ fontSize: 18 }}>
                    {this.state.projectEndDate}
                  </CardText>
                </Col>
              </Row>
              <hr
                style={{
                  color: "#808080",
                  backgroundColor: "#808080",
                  height: 1,
                  border: " 1px solid #808080",
                }}
              />
              {this.state.currentProject === "No" ? null : (
                <Row className="mb-4">
                  <Col sm={3}>
                    <IntlMessages id="currentProject" />
                  </Col>
                  <Col sm={4}>
                    <CardText style={{ fontSize: 18 }}>
                      {this.state.currentProject}
                    </CardText>
                  </Col>
                  <hr
                    style={{
                      color: "#808080",
                      backgroundColor: "#808080",
                      height: 1,
                      border: " 1px solid #808080",
                    }}
                  />
                </Row>
              )}
              <Row className="mb-4">
                <Col sm={3}>
                  <IntlMessages id="associatedWith" />
                </Col>
                <Col sm={4}>
                  <CardText style={{ fontSize: 18 }}>
                    {this.state.associatedWith}
                  </CardText>
                </Col>
              </Row>
              <hr
                style={{
                  color: "#808080",
                  backgroundColor: "#808080",
                  height: 1,
                  border: " 1px solid #808080",
                }}
              />
              <Row className="mb-4">
                <Col sm={3}>
                  <IntlMessages id="description" />
                </Col>
                <Col sm={4}>
                  <CardText style={{ fontSize: 18 }}>
                    {this.state.projectDescription}
                  </CardText>
                </Col>
              </Row>
            </CardBody>
          </Colxx>
        </Row>
      </CardBody>
    );
    component.push(card);
    this.setState({ addProject: component });
  };

  formSubject = (e) => {
    this.setState({
      subjectName: e.subjectName,
      subjectAssociatedWith: e.associatedWith,
    });
    setTimeout(() => {
      fetch(
        `/${
          sessionStorage.getItem("role") === "STUDENT" ? "students" : "candidates"
        }/addSubject`,
        {
          method: "post",
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + sessionStorage.getItem("token"),
          },
          body: JSON.stringify({
            name: this.state.subjectName,
            associatedWith: this.state.subjectAssociatedWith,
          }),
        }
      )
        .then((res) => res.json())
        .then((data) => {
          if (data.error) {
            this.handleClick();
            this.setState({
              msg: data.error,
              neg: true,
            });
            console.log(data.error);
          } else {
            console.log(data.message);
            this.handleClick();
            this.setState({
              msg: data.message,
              neg: false,
            });
          }
        });
    });
  };
  addSubject = () => {
    let component = this.state.addSubject;
    const card = (
      <CardBody
        style={{ fontSize: 18 }}
        className=" pl-0 align-self-center mr-5 ml-5 flex-column flex-md-row justify-content-between min-width-zero"
      >
        <Row>
          <Colxx xxs="12">
            <Col className="offset-11">
              {" "}
              <i style={{ cursor: "pointer" }} className="simple-icon-pencil ">
                {" "}
                Edit
              </i>
            </Col>

            <CardBody>
              <Row className="mb-4">
                <Col sm={3}>
                  <IntlMessages id="subjectName" />
                </Col>
                <Col sm={4}>
                  <CardText style={{ fontSize: 18 }}>
                    {this.state.subjectName}
                  </CardText>
                </Col>
              </Row>
              <hr
                style={{
                  color: "#808080",
                  backgroundColor: "#808080",
                  height: 1,
                  border: " 1px solid #808080",
                }}
              />
              <Row className="mb-4">
                <Col sm={3}>
                  <IntlMessages id="associatedWith" />
                </Col>
                <Col sm={4}>
                  <CardText style={{ fontSize: 18 }}>
                    {this.state.subjectAssociatedWith}
                  </CardText>
                </Col>
              </Row>
            </CardBody>
          </Colxx>
        </Row>
      </CardBody>
    );
    component.push(card);
    this.setState({ addSubject: component });
  };
  formLanguage = (e) => {
    this.setState({
      language: e.language,
      languageProficiency: e.proficiency,
    });
    setTimeout(() => {
      fetch(
        `/${
          sessionStorage.getItem("role") === "STUDENT" ? "students" : "candidates"
        }/addLanguage`,
        {
          method: "post",
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + sessionStorage.getItem("token"),
          },
          body: JSON.stringify({
            language: this.state.language,
            proficiency: this.state.languageProficiency,
          }),
        }
      )
        .then((res) => res.json())
        .then((data) => {
          if (data.error) {
            this.handleClick();
            this.setState({
              msg: data.error,
              neg: true,
            });
            console.log(data.error);
          } else {
            console.log(data.message);
            this.handleClick();
            this.setState({
              msg: data.message,
              neg: false,
            });
          }
        });
    });
  };
  addLanguage = () => {
    let component = this.state.addLanguage;
    const card = (
      <CardBody
        style={{ fontSize: 18 }}
        className=" pl-0 align-self-center mr-5 ml-5 flex-column flex-md-row justify-content-between min-width-zero"
      >
        <Row>
          <Colxx xxs="12">
            <Col className="offset-11">
              {" "}
              <i style={{ cursor: "pointer" }} className="simple-icon-pencil ">
                {" "}
                Edit
              </i>
            </Col>

            <CardBody>
              <Row className="mb-4">
                <Col sm={3}>
                  <IntlMessages id="language" />
                </Col>
                <Col sm={4}>
                  <CardText style={{ fontSize: 18 }}>
                    {this.state.language}
                  </CardText>
                </Col>
              </Row>
              <hr
                style={{
                  color: "#808080",
                  backgroundColor: "#808080",
                  height: 1,
                  border: " 1px solid #808080",
                }}
              />
              <Row className="mb-4">
                <Col sm={3}>
                  <IntlMessages id="proficiency" />
                </Col>
                <Col sm={4}>
                  <CardText style={{ fontSize: 18 }}>
                    {this.state.languageProficiency}
                  </CardText>
                </Col>
              </Row>
            </CardBody>
          </Colxx>
        </Row>
      </CardBody>
    );
    component.push(card);
    this.setState({ addLanguage: component });
  };

  formAward = (e) => {
    this.setState({
      awardTitle: e.title,
      issuer: e.issuer,
      issueDate: e.issueDate,
      awardAssociatedWith: e.associatedWith,
      awardDescription: e.description,
    });
    setTimeout(() => {
      fetch(
        `/${
          sessionStorage.getItem("role") === "STUDENT" ? "students" : "candidates"
        }/addAward`,
        {
          method: "post",
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + sessionStorage.getItem("token"),
          },
          body: JSON.stringify({
            title: this.state.awardTitle,
            organizer: this.state.issuer,
            issueDate: this.state.issueDate,
            associatedWith: this.state.awardAssociatedWith,
            description: this.state.awardDescription,
          }),
        }
      )
        .then((res) => res.json())
        .then((data) => {
          if (data.error) {
            this.handleClick();
            this.setState({
              msg: data.error,
              neg: true,
            });
            console.log(data.error);
          } else {
            console.log(data.message);
            this.handleClick();
            this.setState({
              msg: data.message,
              neg: false,
            });
          }
        });
    }, 1000);
  };
  addAward = () => {
    let component = this.state.addAward;
    const card = (
      <CardBody
        style={{ fontSize: 18 }}
        className=" pl-0 align-self-center mr-5 ml-5 flex-column flex-md-row justify-content-between min-width-zero"
      >
        <Row>
          <Colxx xxs="12">
            <Col className="offset-11">
              {" "}
              <i style={{ cursor: "pointer" }} className="simple-icon-pencil ">
                {" "}
                Edit
              </i>
            </Col>

            <CardBody>
              <Row className="mb-4">
                <Col sm={3}>
                  <IntlMessages id="title" />
                </Col>
                <Col sm={4}>
                  <CardText style={{ fontSize: 18 }}>
                    {this.state.awardTitle}
                  </CardText>
                </Col>
              </Row>
              <hr
                style={{
                  color: "#808080",
                  backgroundColor: "#808080",
                  height: 1,
                  border: " 1px solid #808080",
                }}
              />
              <Row className="mb-4">
                <Col sm={3}>
                  <IntlMessages id="issuer" />
                </Col>
                <Col sm={4}>
                  <CardText style={{ fontSize: 18 }}>
                    {this.state.issuer}
                  </CardText>
                </Col>
              </Row>
              <hr
                style={{
                  color: "#808080",
                  backgroundColor: "#808080",
                  height: 1,
                  border: " 1px solid #808080",
                }}
              />
              <Row className="mb-4">
                <Col sm={3}>
                  <IntlMessages id="issueDate" />
                </Col>
                <Col sm={4}>
                  <CardText style={{ fontSize: 18 }}>
                    {this.state.issueDate}
                  </CardText>
                </Col>
              </Row>
              <hr
                style={{
                  color: "#808080",
                  backgroundColor: "#808080",
                  height: 1,
                  border: " 1px solid #808080",
                }}
              />
              <Row className="mb-4">
                <Col sm={3}>
                  <IntlMessages id="associatedWith" />
                </Col>
                <Col sm={4}>
                  <CardText style={{ fontSize: 18 }}>
                    {this.state.awardAssociatedWith}
                  </CardText>
                </Col>
              </Row>
              <hr
                style={{
                  color: "#808080",
                  backgroundColor: "#808080",
                  height: 1,
                  border: " 1px solid #808080",
                }}
              />
              <Row className="mb-4">
                <Col sm={3}>
                  <IntlMessages id="description" />
                </Col>
                <Col sm={4}>
                  <CardText style={{ fontSize: 18 }}>
                    {this.state.awardDescription}
                  </CardText>
                </Col>
              </Row>
            </CardBody>
          </Colxx>
        </Row>
      </CardBody>
    );
    component.push(card);
    this.setState({ addAward: component });
  };
  formCerti = (e) => {
    this.setState({
      certiName: e.name,
      issuingAuth: e.issuingAuth,
      certiUrl: e.certiUrl,
      certiDate: e.certiDate,
      licNo: e.licNo,
      certiDescription: e.description,
      certiExpiry: !e.certiExpiry ? "No" : "Yes",
    });
    setTimeout(() => {
      fetch(
        `/${
          sessionStorage.getItem("role") === "STUDENT" ? "students" : "candidates"
        }/addCertfication`,
        {
          method: "post",
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + sessionStorage.getItem("token"),
          },
          body: JSON.stringify({
            name: this.state.certiName,
            issuingAuthority: this.state.issuingAuth,
            certificateURL: this.state.certiUrl,
            certificateDate: this.state.certiDate,
            licenceNo: this.state.licNo,
            certificateExpiry: this.state.certiExpiry,
            description: this.state.certiDescription,
          }),
        }
      )
        .then((res) => res.json())
        .then((data) => {
          if (data.error) {
            this.handleClick();
            this.setState({
              msg: data.error,
              neg: true,
            });
            console.log(data.error);
          } else {
            console.log(data.message);
            this.handleClick();
            this.setState({
              msg: data.message,
              neg: false,
            });
          }
        });
    }, 1000);
  };
  addCertification = () => {
    let component = this.state.addCertification;
    const card = (
      <CardBody
        style={{ fontSize: 18 }}
        className=" pl-0 align-self-center mr-5 ml-5 flex-column flex-md-row justify-content-between min-width-zero"
      >
        <Row>
          <Colxx xxs="12">
            <Col className="offset-11">
              {" "}
              <i style={{ cursor: "pointer" }} className="simple-icon-pencil ">
                {" "}
                Edit
              </i>
            </Col>

            <CardBody>
              <Row className="mb-4">
                <Col sm={3}>
                  <IntlMessages id="name" />
                </Col>
                <Col sm={4}>
                  <CardText style={{ fontSize: 18 }}>
                    {this.state.certiName}
                  </CardText>
                </Col>
              </Row>
              <hr
                style={{
                  color: "#808080",
                  backgroundColor: "#808080",
                  height: 1,
                  border: " 1px solid #808080",
                }}
              />
              <Row className="mb-4">
                <Col sm={3}>
                  <IntlMessages id="issuingAuth" />
                </Col>
                <Col sm={4}>
                  <CardText style={{ fontSize: 18 }}>
                    {this.state.issuingAuth}
                  </CardText>
                </Col>
              </Row>
              <hr
                style={{
                  color: "#808080",
                  backgroundColor: "#808080",
                  height: 1,
                  border: " 1px solid #808080",
                }}
              />
              <Row className="mb-4">
                <Col sm={3}>
                  <IntlMessages id="certiUrl" />
                </Col>
                <Col sm={4}>
                  <CardText style={{ fontSize: 18 }}>
                    {this.state.certiUrl}
                  </CardText>
                </Col>
              </Row>
              <hr
                style={{
                  color: "#808080",
                  backgroundColor: "#808080",
                  height: 1,
                  border: " 1px solid #808080",
                }}
              />
              <Row className="mb-4">
                <Col sm={3}>
                  <IntlMessages id="certiDate" />
                </Col>
                <Col sm={4}>
                  <CardText style={{ fontSize: 18 }}>
                    {this.state.certiDate}
                  </CardText>
                </Col>
              </Row>
              <hr
                style={{
                  color: "#808080",
                  backgroundColor: "#808080",
                  height: 1,
                  border: " 1px solid #808080",
                }}
              />
              <Row className="mb-4">
                <Col sm={3}>
                  <IntlMessages id="licNo" />
                </Col>
                <Col sm={4}>
                  <CardText style={{ fontSize: 18 }}>
                    {this.state.licNo}
                  </CardText>
                </Col>
              </Row>
              <hr
                style={{
                  color: "#808080",
                  backgroundColor: "#808080",
                  height: 1,
                  border: " 1px solid #808080",
                }}
              />
              {this.state.certiExpiry === "No" ? null : (
                <Row className="mb-4">
                  <Col sm={3}>
                    <IntlMessages id="certiExpiry" />
                  </Col>
                  <Col sm={4}>
                    <CardText style={{ fontSize: 18 }}>
                      {this.state.certiExpiry}
                    </CardText>
                  </Col>
                  <hr
                    style={{
                      color: "#808080",
                      backgroundColor: "#808080",
                      height: 1,
                      border: " 1px solid #808080",
                    }}
                  />
                </Row>
              )}
              <Row className="mb-4">
                <Col sm={3}>
                  <IntlMessages id="description" />
                </Col>
                <Col sm={4}>
                  <CardText style={{ fontSize: 18 }}>
                    {this.state.certiDescription}
                  </CardText>
                </Col>
              </Row>
            </CardBody>
          </Colxx>
        </Row>
      </CardBody>
    );
    component.push(card);
    this.setState({ addCertification: component });
  };

  formCompetition = (e) => {
    this.setState({
      competitionTitle: e.title,
      competitionPosition: e.position,
      competitionDate: e.competDate,
      competitionAssociatedWith: e.associatedWith,
      competitionDescription: e.description,
    });
    setTimeout(() => {
      fetch(
        `/${
          sessionStorage.getItem("role") === "STUDENT" ? "students" : "candidates"
        }/addCompetition`,
        {
          method: "post",
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + sessionStorage.getItem("token"),
          },
          body: JSON.stringify({
            title: this.state.competitionTitle,
            position: this.state.competitionPosition,
            competitionDate: this.state.competitionDate,
            associatedWith: this.state.competitionAssociatedWith,
            description: this.state.competitionDescription,
          }),
        }
      )
        .then((res) => res.json())
        .then((data) => {
          if (data.error) {
            this.handleClick();
            this.setState({
              msg: data.error,
              neg: true,
            });
            console.log(data.error);
          } else {
            console.log(data.message);
            this.handleClick();
            this.setState({
              msg: data.message,
              neg: false,
            });
          }
        });
    }, 1000);
  };
  addCompetition = () => {
    let component = this.state.addCompetition;
    const card = (
      <CardBody
        style={{ fontSize: 18 }}
        className=" pl-0 align-self-center mr-5 ml-5 flex-column flex-md-row justify-content-between min-width-zero"
      >
        <Row>
          <Colxx xxs="12">
            <Col className="offset-11">
              {" "}
              <i style={{ cursor: "pointer" }} className="simple-icon-pencil ">
                {" "}
                Edit
              </i>
            </Col>

            <CardBody>
              <Row className="mb-4">
                <Col sm={3}>
                  <IntlMessages id="title" />
                </Col>
                <Col sm={4}>
                  <CardText style={{ fontSize: 18 }}>
                    {this.state.competitionTitle}
                  </CardText>
                </Col>
              </Row>
              <hr
                style={{
                  color: "#808080",
                  backgroundColor: "#808080",
                  height: 1,
                  border: " 1px solid #808080",
                }}
              />
              <Row className="mb-4">
                <Col sm={3}>
                  <IntlMessages id="position" />
                </Col>
                <Col sm={4}>
                  <CardText style={{ fontSize: 18 }}>
                    {this.state.competitionPosition}
                  </CardText>
                </Col>
              </Row>
              <hr
                style={{
                  color: "#808080",
                  backgroundColor: "#808080",
                  height: 1,
                  border: " 1px solid #808080",
                }}
              />
              <Row className="mb-4">
                <Col sm={3}>
                  <IntlMessages id="competDate" />
                </Col>
                <Col sm={4}>
                  <CardText style={{ fontSize: 18 }}>
                    {this.state.competitionDate}
                  </CardText>
                </Col>
              </Row>
              <hr
                style={{
                  color: "#808080",
                  backgroundColor: "#808080",
                  height: 1,
                  border: " 1px solid #808080",
                }}
              />
              <Row className="mb-4">
                <Col sm={3}>
                  <IntlMessages id="associatedWith" />
                </Col>
                <Col sm={4}>
                  <CardText style={{ fontSize: 18 }}>
                    {this.state.competitionAssociatedWith}
                  </CardText>
                </Col>
              </Row>
              <hr
                style={{
                  color: "#808080",
                  backgroundColor: "#808080",
                  height: 1,
                  border: " 1px solid #808080",
                }}
              />
              <Row className="mb-4">
                <Col sm={3}>
                  <IntlMessages id="description" />
                </Col>
                <Col sm={4}>
                  <CardText style={{ fontSize: 18 }}>
                    {this.state.competitionDescription}
                  </CardText>
                </Col>
              </Row>
            </CardBody>
          </Colxx>
        </Row>
      </CardBody>
    );
    component.push(card);
    this.setState({ addCompetition: component });
  };

  formWorkshop = (e) => {
    this.setState({
      workshopTitle: e.title,
      workshopOrganizer: e.organizer,
      workshopEventDate: e.eventDate,
      workshopAddress: e.address,
      workshopDescription: e.description,
    });
    setTimeout(() => {
      fetch(
        `/${
          sessionStorage.getItem("role") === "STUDENT" ? "students" : "candidates"
        }/addWorkshops`,
        {
          method: "post",
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + sessionStorage.getItem("token"),
          },
          body: JSON.stringify({
            title: this.state.workshopTitle,
            organizer: this.state.workshopOrganizer,
            eventDate: this.state.workshopEventDate,
            address: this.state.workshopAddress,
            description: this.state.workshopDescription,
          }),
        }
      )
        .then((res) => res.json())
        .then((data) => {
          if (data.error) {
            this.handleClick();
            this.setState({
              msg: data.error,
              neg: true,
            });
            console.log(data.error);
          } else {
            console.log(data.message);
            this.handleClick();
            this.setState({
              msg: data.message,
              neg: false,
            });
          }
        });
    }, 1000);
  };
  addWorkshop = () => {
    let component = this.state.addWorkshop;
    const card = (
      <CardBody
        style={{ fontSize: 18 }}
        className=" pl-0 align-self-center mr-5 ml-5 flex-column flex-md-row justify-content-between min-width-zero"
      >
        <Row>
          <Colxx xxs="12">
            <Col className="offset-11">
              {" "}
              <i style={{ cursor: "pointer" }} className="simple-icon-pencil ">
                {" "}
                Edit
              </i>
            </Col>

            <CardBody>
              <Row className="mb-4">
                <Col sm={3}>
                  <IntlMessages id="title" />
                </Col>
                <Col sm={4}>
                  <CardText style={{ fontSize: 18 }}>
                    {this.state.workshopTitle}
                  </CardText>
                </Col>
              </Row>
              <hr
                style={{
                  color: "#808080",
                  backgroundColor: "#808080",
                  height: 1,
                  border: " 1px solid #808080",
                }}
              />
              <Row className="mb-4">
                <Col sm={3}>
                  <IntlMessages id="organizer" />
                </Col>
                <Col sm={4}>
                  <CardText style={{ fontSize: 18 }}>
                    {this.state.workshopOrganizer}
                  </CardText>
                </Col>
              </Row>
              <hr
                style={{
                  color: "#808080",
                  backgroundColor: "#808080",
                  height: 1,
                  border: " 1px solid #808080",
                }}
              />
              <Row className="mb-4">
                <Col sm={3}>
                  <IntlMessages id="eventDate" />
                </Col>
                <Col sm={4}>
                  <CardText style={{ fontSize: 18 }}>
                    {this.state.workshopEventDate}
                  </CardText>
                </Col>
              </Row>
              <hr
                style={{
                  color: "#808080",
                  backgroundColor: "#808080",
                  height: 1,
                  border: " 1px solid #808080",
                }}
              />
              <Row className="mb-4">
                <Col sm={3}>
                  <IntlMessages id="address" />
                </Col>
                <Col sm={4}>
                  <CardText style={{ fontSize: 18 }}>
                    {this.state.workshopAddress}
                  </CardText>
                </Col>
              </Row>
              <hr
                style={{
                  color: "#808080",
                  backgroundColor: "#808080",
                  height: 1,
                  border: " 1px solid #808080",
                }}
              />
              <Row className="mb-4">
                <Col sm={3}>
                  <IntlMessages id="description" />
                </Col>
                <Col sm={4}>
                  <CardText style={{ fontSize: 18 }}>
                    {this.state.workshopDescription}
                  </CardText>
                </Col>
              </Row>
            </CardBody>
          </Colxx>
        </Row>
      </CardBody>
    );
    component.push(card);
    this.setState({ addWorkshop: component });
  };
  formTest = (e) => {
    this.setState({
      testTitle: e.title,
      testChoose: e.chooseOne,
      testScore: e.scoreObtn,
      testTotal: e.totScore,
      testDate: e.examDate,
      testAssociatedWith: e.associatedWith,
      testDescription: e.description,
    });
    setTimeout(() => {
      fetch(
        `/${
          sessionStorage.getItem("role") === "STUDENT" ? "students" : "candidates"
        }/addTest`,
        {
          method: "post",
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + sessionStorage.getItem("token"),
          },
          body: JSON.stringify({
            title: this.state.testTitle,
            chooseOne: this.state.testChoose,
            scoreObtn: this.state.testScore,
            scoreTot: this.state.testTotal,
            examDate: this.state.testDate,
            associatedWith: this.state.testAssociatedWith,
            description: this.state.testDescription,
          }),
        }
      )
        .then((res) => res.json())
        .then((data) => {
          if (data.error) {
            this.handleClick();
            this.setState({
              msg: data.error,
              neg: true,
            });
            console.log(data.error);
          } else {
            console.log(data.message);
            this.handleClick();
            this.setState({
              msg: data.message,
              neg: false,
            });
          }
        });
    }, 1000);
  };
  addTest = () => {
    let component = this.state.addTest;
    const card = (
      <CardBody
        style={{ fontSize: 18 }}
        className=" pl-0 align-self-center mr-5 ml-5 flex-column flex-md-row justify-content-between min-width-zero"
      >
        <Row>
          <Colxx xxs="12">
            <Col className="offset-11">
              {" "}
              <i style={{ cursor: "pointer" }} className="simple-icon-pencil ">
                {" "}
                Edit
              </i>
            </Col>

            <CardBody>
              <Row className="mb-4">
                <Col sm={3}>
                  <IntlMessages id="title" />
                </Col>
                <Col sm={4}>
                  <CardText style={{ fontSize: 18 }}>
                    {this.state.testTitle}
                  </CardText>
                </Col>
              </Row>
              <hr
                style={{
                  color: "#808080",
                  backgroundColor: "#808080",
                  height: 1,
                  border: " 1px solid #808080",
                }}
              />
              <Row className="mb-4">
                <Col sm={3}>
                  <IntlMessages id="marks" />
                </Col>
                <Col sm={4}>
                  <CardText style={{ fontSize: 18 }}>
                    {this.state.testChoose}
                  </CardText>
                </Col>
              </Row>
              <hr
                style={{
                  color: "#808080",
                  backgroundColor: "#808080",
                  height: 1,
                  border: " 1px solid #808080",
                }}
              />
              <Row className="mb-4">
                <Col sm={3}>
                  <IntlMessages id="scoreObtn" />
                </Col>
                <Col sm={4}>
                  <CardText style={{ fontSize: 18 }}>
                    {this.state.testScore}
                  </CardText>
                </Col>
              </Row>
              <hr
                style={{
                  color: "#808080",
                  backgroundColor: "#808080",
                  height: 1,
                  border: " 1px solid #808080",
                }}
              />
              <Row className="mb-4">
                <Col sm={3}>
                  <IntlMessages id="totScore" />
                </Col>
                <Col sm={4}>
                  <CardText style={{ fontSize: 18 }}>
                    {this.state.testTotal}
                  </CardText>
                </Col>
              </Row>
              <hr
                style={{
                  color: "#808080",
                  backgroundColor: "#808080",
                  height: 1,
                  border: " 1px solid #808080",
                }}
              />
              <Row className="mb-4">
                <Col sm={3}>
                  <IntlMessages id="examDate" />
                </Col>
                <Col sm={4}>
                  <CardText style={{ fontSize: 18 }}>
                    {this.state.testDate}
                  </CardText>
                </Col>
              </Row>
              <hr
                style={{
                  color: "#808080",
                  backgroundColor: "#808080",
                  height: 1,
                  border: " 1px solid #808080",
                }}
              />
              <Row className="mb-4">
                <Col sm={3}>
                  <IntlMessages id="associatedWith" />
                </Col>
                <Col sm={4}>
                  <CardText style={{ fontSize: 18 }}>
                    {this.state.testAssociatedWith}
                  </CardText>
                </Col>
              </Row>
              <hr
                style={{
                  color: "#808080",
                  backgroundColor: "#808080",
                  height: 1,
                  border: " 1px solid #808080",
                }}
              />
              <Row className="mb-4">
                <Col sm={3}>
                  <IntlMessages id="description" />
                </Col>
                <Col sm={4}>
                  <CardText style={{ fontSize: 18 }}>
                    {this.state.testDescription}
                  </CardText>
                </Col>
              </Row>
            </CardBody>
          </Colxx>
        </Row>
      </CardBody>
    );
    component.push(card);
    this.setState({ addTest: component });
  };
  formPatent = (e) => {
    this.setState({
      patentTitle: e.title,
      patentOffice: e.patentOffice,
      patentNo: e.patentNo,
      patentStatus: e.patentStatus,
      patentDescription: e.description,
      patentDate: e.patentDate,
    });
    setTimeout(() => {
      fetch(
        `/${
          sessionStorage.getItem("role") === "STUDENT" ? "students" : "candidates"
        }/addPatent`,
        {
          method: "post",
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + sessionStorage.getItem("token"),
          },
          body: JSON.stringify({
            title: this.state.patentTitle,
            patentOffice: this.state.patentOffice,
            patentNo: this.state.patentNo,
            patentStatus: this.state.patentStatus,
            dateOfIssue: this.state.patentDate,
            description: this.state.patentDescription,
          }),
        }
      )
        .then((res) => res.json())
        .then((data) => {
          if (data.error) {
            this.handleClick();
            this.setState({
              msg: data.error,
              neg: true,
            });

            console.log(data.error);
          } else {
            console.log(data.message);

            this.handleClick();
            this.setState({
              msg: data.message,
              neg: false,
            });
          }
        });
    }, 1000);
  };
  addPatent = () => {
    let component = this.state.addPatent;
    const card = (
      <CardBody
        style={{ fontSize: 18 }}
        className=" pl-0 align-self-center mr-5 ml-5 flex-column flex-md-row justify-content-between min-width-zero"
      >
        <Row>
          <Colxx xxs="12">
            <Col className="offset-11">
              {" "}
              <i style={{ cursor: "pointer" }} className="simple-icon-pencil ">
                {" "}
                Edit
              </i>
            </Col>

            <CardBody>
              <Row className="mb-4">
                <Col sm={3}>
                  <IntlMessages id="title" />
                </Col>
                <Col sm={4}>
                  <CardText style={{ fontSize: 18 }}>
                    {this.state.patentTitle}
                  </CardText>
                </Col>
              </Row>
              <hr
                style={{
                  color: "#808080",
                  backgroundColor: "#808080",
                  height: 1,
                  border: " 1px solid #808080",
                }}
              />
              <Row className="mb-4">
                <Col sm={3}>
                  <IntlMessages id="patentOff" />
                </Col>
                <Col sm={4}>
                  <CardText style={{ fontSize: 18 }}>
                    {this.state.patentOffice}
                  </CardText>
                </Col>
              </Row>
              <hr
                style={{
                  color: "#808080",
                  backgroundColor: "#808080",
                  height: 1,
                  border: " 1px solid #808080",
                }}
              />
              <Row className="mb-4">
                <Col sm={3}>
                  <IntlMessages id="patentNo" />
                </Col>
                <Col sm={4}>
                  <CardText style={{ fontSize: 18 }}>
                    {this.state.patentNo}
                  </CardText>
                </Col>
              </Row>
              <hr
                style={{
                  color: "#808080",
                  backgroundColor: "#808080",
                  height: 1,
                  border: " 1px solid #808080",
                }}
              />
              <Row className="mb-4">
                <Col sm={3}>
                  <IntlMessages id="patentStatus" />
                </Col>
                <Col sm={4}>
                  <CardText style={{ fontSize: 18 }}>
                    {this.state.patentStatus}
                  </CardText>
                </Col>
              </Row>
              <hr
                style={{
                  color: "#808080",
                  backgroundColor: "#808080",
                  height: 1,
                  border: " 1px solid #808080",
                }}
              />
              <Row className="mb-4">
                <Col sm={3}>
                  <IntlMessages id="patentDate" />
                </Col>
                <Col sm={4}>
                  <CardText style={{ fontSize: 18 }}>
                    {this.state.patentDate}
                  </CardText>
                </Col>
              </Row>
              <hr
                style={{
                  color: "#808080",
                  backgroundColor: "#808080",
                  height: 1,
                  border: " 1px solid #808080",
                }}
              />
              <Row className="mb-4">
                <Col sm={3}>
                  <IntlMessages id="description" />
                </Col>
                <Col sm={4}>
                  <CardText style={{ fontSize: 18 }}>
                    {this.state.patentDescription}
                  </CardText>
                </Col>
              </Row>
            </CardBody>
          </Colxx>
        </Row>
      </CardBody>
    );
    component.push(card);
    this.setState({ addPatent: component });
  };
  formPublication = (e) => {
    this.setState({
      pubTitle: e.title,
      publisher: e.publication,
      pubDate: e.pubDate,
      pubUrl: e.pubUrl,
      pubDescription: e.description,
    });
    setTimeout(() => {
      fetch(
        `/${
          sessionStorage.getItem("role") === "STUDENT" ? "students" : "candidates"
        }/addPublications`,
        {
          method: "post",
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + sessionStorage.getItem("token"),
          },
          body: JSON.stringify({
            title: this.state.pubTitle,
            publisher: this.state.publisher,
            publicationURL: this.state.pubUrl,
            publicationDate: this.state.pubDate,
            description: this.state.pubDescription,
          }),
        }
      )
        .then((res) => res.json())
        .then((data) => {
          if (data.error) {
            this.handleClick();
            this.setState({
              msg: data.error,
              neg: true,
            });
            console.log(data.error);
          } else {
            console.log(data.message);

            this.handleClick();
            this.setState({
              msg: data.message,
              neg: false,
            });
          }
        });
    }, 1000);
  };
  addPublication = () => {
    let component = this.state.addPublication;
    const card = (
      <CardBody
        style={{ fontSize: 18 }}
        className=" pl-0 align-self-center mr-5 ml-5 flex-column flex-md-row justify-content-between min-width-zero"
      >
        <Row>
          <Colxx xxs="12">
            <Col className="offset-11">
              {" "}
              <i style={{ cursor: "pointer" }} className="simple-icon-pencil ">
                {" "}
                Edit
              </i>
            </Col>

            <CardBody>
              <Row className="mb-4">
                <Col sm={3}>
                  <IntlMessages id="title" />
                </Col>
                <Col sm={4}>
                  <CardText style={{ fontSize: 18 }}>
                    {this.state.pubTitle}
                  </CardText>
                </Col>
              </Row>
              <hr
                style={{
                  color: "#808080",
                  backgroundColor: "#808080",
                  height: 1,
                  border: " 1px solid #808080",
                }}
              />
              <Row className="mb-4">
                <Col sm={3}>
                  <IntlMessages id="publication/publisher" />
                </Col>
                <Col sm={4}>
                  <CardText style={{ fontSize: 18 }}>
                    {this.state.publisher}
                  </CardText>
                </Col>
              </Row>
              <hr
                style={{
                  color: "#808080",
                  backgroundColor: "#808080",
                  height: 1,
                  border: " 1px solid #808080",
                }}
              />
              <Row className="mb-4">
                <Col sm={3}>
                  <IntlMessages id="pubDate" />
                </Col>
                <Col sm={4}>
                  <CardText style={{ fontSize: 18 }}>
                    {this.state.pubDate}
                  </CardText>
                </Col>
              </Row>
              <hr
                style={{
                  color: "#808080",
                  backgroundColor: "#808080",
                  height: 1,
                  border: " 1px solid #808080",
                }}
              />
              <Row className="mb-4">
                <Col sm={3}>
                  <IntlMessages id="pubUrl" />
                </Col>
                <Col sm={4}>
                  <CardText style={{ fontSize: 18 }}>
                    {this.state.pubUrl}
                  </CardText>
                </Col>
              </Row>
              <hr
                style={{
                  color: "#808080",
                  backgroundColor: "#808080",
                  height: 1,
                  border: " 1px solid #808080",
                }}
              />
              <Row className="mb-4">
                <Col sm={3}>
                  <IntlMessages id="description" />
                </Col>
                <Col sm={4}>
                  <CardText style={{ fontSize: 18 }}>
                    {this.state.pubDescription}
                  </CardText>
                </Col>
              </Row>
            </CardBody>
          </Colxx>
        </Row>
      </CardBody>
    );
    component.push(card);
    this.setState({ addPublication: component });
  };
  formScholar = (e) => {
    this.setState({
      scholarTitle: e.title,
      grantDate: e.grantDate,
      scholarDescrition: e.description,
      scholarAssociatedWith: e.associatedWith,
    });
    setTimeout(() => {
      fetch(
        `/${
          sessionStorage.getItem("role") === "STUDENT" ? "students" : "candidates"
        }/addScholarships`,
        {
          method: "post",
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + sessionStorage.getItem("token"),
          },
          body: JSON.stringify({
            title: this.state.scholarTitle,
            associatedWith: this.state.scholarAssociatedWith,

            grantDate: this.state.grantDate,
            description: this.state.scholarDescrition,
          }),
        }
      )
        .then((res) => res.json())
        .then((data) => {
          if (data.error) {
            this.handleClick();
            this.setState({
              msg: data.error,
              neg: true,
            });
            console.log(data.error);
          } else {
            console.log(data.message);
            this.handleClick();
            this.setState({
              msg: data.message,
              neg: false,
            });
          }
        });
    }, 1000);
  };
  addScholar = () => {
    let component = this.state.addScholar;
    const card = (
      <CardBody
        style={{ fontSize: 18 }}
        className=" pl-0 align-self-center mr-5 ml-5 flex-column flex-md-row justify-content-between min-width-zero"
      >
        <Row>
          <Colxx xxs="12">
            <Col className="offset-11">
              {" "}
              <i style={{ cursor: "pointer" }} className="simple-icon-pencil ">
                {" "}
                Edit
              </i>
            </Col>

            <CardBody>
              <Row className="mb-4">
                <Col sm={3}>
                  <IntlMessages id="title" />
                </Col>
                <Col sm={4}>
                  <CardText style={{ fontSize: 18 }}>
                    {this.state.scholarTitle}
                  </CardText>
                </Col>
              </Row>
              <hr
                style={{
                  color: "#808080",
                  backgroundColor: "#808080",
                  height: 1,
                  border: " 1px solid #808080",
                }}
              />
              <Row className="mb-4">
                <Col sm={3}>
                  <IntlMessages id="grantDate" />
                </Col>
                <Col sm={4}>
                  <CardText style={{ fontSize: 18 }}>
                    {this.state.grantDate}
                  </CardText>
                </Col>
              </Row>
              <hr
                style={{
                  color: "#808080",
                  backgroundColor: "#808080",
                  height: 1,
                  border: " 1px solid #808080",
                }}
              />
              <Row className="mb-4">
                <Col sm={3}>
                  <IntlMessages id="description" />
                </Col>
                <Col sm={4}>
                  <CardText style={{ fontSize: 18 }}>
                    {this.state.scholarDescrition}
                  </CardText>
                </Col>
              </Row>
              <hr
                style={{
                  color: "#808080",
                  backgroundColor: "#808080",
                  height: 1,
                  border: " 1px solid #808080",
                }}
              />
              <Row className="mb-4">
                <Col sm={3}>
                  <IntlMessages id="associatedWith" />
                </Col>
                <Col sm={4}>
                  <CardText style={{ fontSize: 18 }}>
                    {this.state.scholarAssociatedWith}
                  </CardText>
                </Col>
              </Row>
            </CardBody>
          </Colxx>
        </Row>
      </CardBody>
    );
    component.push(card);
    this.setState({ addScholar: component });
  };
  formVol = (e) => {
    this.setState({
      volOrg: e.org,
      volRole: e.role,
      volCause: e.cause,
      volStart: e.startDate,
      volEnd: e.endDate,
      currentVol: !e.currentVol ? "No" : "Yes",
      volDescription: e.description,
    });
    setTimeout(() => {
      fetch(
        `/${
          sessionStorage.getItem("role") === "STUDENT" ? "students" : "candidates"
        }/addVolunteering`,
        {
          method: "post",
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + sessionStorage.getItem("token"),
          },
          body: JSON.stringify({
            org: this.state.volOrg,
            role: this.state.volRole,
            cause: this.state.volCause,

            startDate: this.state.volStart,
            endDate: this.state.volEnd,
            current: this.state.currentVol,
            description: this.state.volDescription,
          }),
        }
      )
        .then((res) => res.json())
        .then((data) => {
          if (data.error) {
            this.handleClick();
            this.setState({
              msg: data.error,
              neg: true,
            });
            console.log(data.error);
          } else {
            console.log(data.message);
            this.handleClick();
            this.setState({
              msg: data.message,
              neg: false,
            });
          }
        });
    }, 1000);
  };
  addVol = () => {
    let component = this.state.addVol;
    const card = (
      <CardBody
        style={{ fontSize: 18 }}
        className=" pl-0 align-self-center mr-5 ml-5 flex-column flex-md-row justify-content-between min-width-zero"
      >
        <Row>
          <Colxx xxs="12">
            <Col className="offset-11">
              {" "}
              <i style={{ cursor: "pointer" }} className="simple-icon-pencil ">
                {" "}
                Edit
              </i>
            </Col>

            <CardBody>
              <Row className="mb-4">
                <Col sm={3}>
                  <IntlMessages id="org" />
                </Col>
                <Col sm={4}>
                  <CardText style={{ fontSize: 18 }}>
                    {this.state.volOrg}
                  </CardText>
                </Col>
              </Row>
              <hr
                style={{
                  color: "#808080",
                  backgroundColor: "#808080",
                  height: 1,
                  border: " 1px solid #808080",
                }}
              />
              <Row className="mb-4">
                <Col sm={3}>
                  <IntlMessages id="role" />
                </Col>
                <Col sm={4}>
                  <CardText style={{ fontSize: 18 }}>
                    {this.state.volRole}
                  </CardText>
                </Col>
              </Row>
              <hr
                style={{
                  color: "#808080",
                  backgroundColor: "#808080",
                  height: 1,
                  border: " 1px solid #808080",
                }}
              />
              <Row className="mb-4">
                <Col sm={3}>
                  <IntlMessages id="cause" />
                </Col>
                <Col sm={4}>
                  <CardText style={{ fontSize: 18 }}>
                    {this.state.volCause}
                  </CardText>
                </Col>
              </Row>
              <hr
                style={{
                  color: "#808080",
                  backgroundColor: "#808080",
                  height: 1,
                  border: " 1px solid #808080",
                }}
              />
              <Row className="mb-4">
                <Col sm={3}>
                  <IntlMessages id="startDate" />
                </Col>
                <Col sm={4}>
                  <CardText style={{ fontSize: 18 }}>
                    {this.state.volStart}
                  </CardText>
                </Col>
              </Row>
              <hr
                style={{
                  color: "#808080",
                  backgroundColor: "#808080",
                  height: 1,
                  border: " 1px solid #808080",
                }}
              />
              <Row className="mb-4">
                <Col sm={3}>
                  <IntlMessages id="endDate" />
                </Col>
                <Col sm={4}>
                  <CardText style={{ fontSize: 18 }}>
                    {this.state.volEnd}
                  </CardText>
                </Col>
              </Row>
              <hr
                style={{
                  color: "#808080",
                  backgroundColor: "#808080",
                  height: 1,
                  border: " 1px solid #808080",
                }}
              />
              <Row className="mb-4">
                <Col sm={3}>
                  <IntlMessages id="currentVol" />
                </Col>
                <Col sm={4}>
                  <CardText style={{ fontSize: 18 }}>
                    {this.state.currentVol}
                  </CardText>
                </Col>
              </Row>
              <hr
                style={{
                  color: "#808080",
                  backgroundColor: "#808080",
                  height: 1,
                  border: " 1px solid #808080",
                }}
              />
              <Row className="mb-4">
                <Col sm={3}>
                  <IntlMessages id="description" />
                </Col>
                <Col sm={4}>
                  <CardText style={{ fontSize: 18 }}>
                    {this.state.volDescription}
                  </CardText>
                </Col>
              </Row>
            </CardBody>
          </Colxx>
        </Row>
      </CardBody>
    );
    component.push(card);
    this.setState({ addVol: component });
  };
  formExtra = (e) => {
    this.setState({
      extraCat: e.cat,
      extraStart: e.startDate,
      extraEnd: e.endDate,
      extraDescription: e.description,
    });
    setTimeout(() => {
      fetch(
        `/${
          sessionStorage.getItem("role") === "STUDENT" ? "students" : "candidates"
        }/addActitvity`,
        {
          method: "post",
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + sessionStorage.getItem("token"),
          },
          body: JSON.stringify({
            cat: this.state.extraCat,
            startDate: this.state.extraStart,
            endDate: this.state.extraEnd,
            description: this.state.extraDescription,
          }),
        }
      )
        .then((res) => res.json())
        .then((data) => {
          if (data.error) {
            this.handleClick();
            this.setState({
              msg: data.error,
              neg: true,
            });
            console.log(data.error);
          } else {
            console.log(data.message);
            this.handleClick();
            this.setState({
              msg: data.message,
              neg: false,
            });
          }
        });
    }, 1000);
  };
  addActivity = () => {
    let component = this.state.addActivity;
    const card = (
      <CardBody
        style={{ fontSize: 18 }}
        className=" pl-0 align-self-center mr-5 ml-5 flex-column flex-md-row justify-content-between min-width-zero"
      >
        <Row>
          <Colxx xxs="12">
            <Col className="offset-11">
              {" "}
              <i style={{ cursor: "pointer" }} className="simple-icon-pencil ">
                {" "}
                Edit
              </i>
            </Col>

            <CardBody>
              <Row className="mb-4">
                <Col sm={3}>
                  <IntlMessages id="cat" />
                </Col>
                <Col sm={4}>
                  <CardText style={{ fontSize: 18 }}>
                    {this.state.extraCat}
                  </CardText>
                </Col>
              </Row>
              <hr
                style={{
                  color: "#808080",
                  backgroundColor: "#808080",
                  height: 1,
                  border: " 1px solid #808080",
                }}
              />
              <Row className="mb-4">
                <Col sm={3}>
                  <IntlMessages id="startDate" />
                </Col>
                <Col sm={4}>
                  <CardText style={{ fontSize: 18 }}>
                    {this.state.extraStart}
                  </CardText>
                </Col>
              </Row>
              <hr
                style={{
                  color: "#808080",
                  backgroundColor: "#808080",
                  height: 1,
                  border: " 1px solid #808080",
                }}
              />
              <Row className="mb-4">
                <Col sm={3}>
                  <IntlMessages id="endDate" />
                </Col>
                <Col sm={4}>
                  <CardText style={{ fontSize: 18 }}>
                    {this.state.extraEnd}
                  </CardText>
                </Col>
              </Row>
              <hr
                style={{
                  color: "#808080",
                  backgroundColor: "#808080",
                  height: 1,
                  border: " 1px solid #808080",
                }}
              />
              <Row className="mb-4">
                <Col sm={3}>
                  <IntlMessages id="description" />
                </Col>
                <Col sm={4}>
                  <CardText style={{ fontSize: 18 }}>
                    {this.state.extraDescription}
                  </CardText>
                </Col>
              </Row>
            </CardBody>
          </Colxx>
        </Row>
      </CardBody>
    );
    component.push(card);
    this.setState({ addActivity: component });
  };
  formSocial = (e) => {
    this.setState({
      socialProfile: e.social,
      socialUrl: e.url,
    });
    setTimeout(() => {
      fetch(
        `/${
          sessionStorage.getItem("role") === "STUDENT" ? "students" : "candidates"
        }/addSocial`,
        {
          method: "post",
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + sessionStorage.getItem("token"),
          },
          body: JSON.stringify({
            social: this.state.socialProfile,
            link: this.state.socialUrl,
          }),
        }
      )
        .then((res) => res.json())
        .then((data) => {
          if (data.error) {
            this.handleClick();
            this.setState({
              msg: data.error,
              neg: true,
            });
            console.log(data.error);
          } else {
            console.log(data.message);
            this.handleClick();
            this.setState({
              msg: data.message,
              neg: false,
            });
          }
        });
    }, 1000);
  };
  addSocial = () => {
    let component = this.state.addSocial;
    const card = (
      <CardBody
        style={{ fontSize: 18 }}
        className=" pl-0 align-self-center mr-5 ml-5 flex-column flex-md-row justify-content-between min-width-zero"
      >
        <Row>
          <Colxx xxs="12">
            <Col className="offset-11">
              {" "}
              <i style={{ cursor: "pointer" }} className="simple-icon-pencil ">
                {" "}
                Edit
              </i>
            </Col>

            <CardBody>
              <Row className="mb-4">
                <Col sm={4}>
                  {this.state.socialProfile === "Dribbble" ? (
                    <i className="simple-icon-social-dribbble" />
                  ) : this.state.socialProfile === "Facebook" ? (
                    <i className="simple-icon-social-facebook" />
                  ) : this.state.socialProfile === "Github" ? (
                    <i className="simple-icon-social-github" />
                  ) : this.state.socialProfile === "Google Plus" ? (
                    <i className="simple-icon-social-google" />
                  ) : this.state.socialProfile === "Hackerrank" ? (
                    <CardText style={{ fontSize: 18 }}>
                      {this.state.socialProfile}
                    </CardText>
                  ) : this.state.socialProfile === "Codechef" ? (
                    <CardText style={{ fontSize: 18 }}>
                      {this.state.socialProfile}
                    </CardText>
                  ) : this.state.socialProfile === "Instagram" ? (
                    <i className="simple-icon-social-instagram" />
                  ) : this.state.socialProfile === "LinkedIn" ? (
                    <i className="simple-icon-social-linkedin" />
                  ) : this.state.socialProfile === "Skype" ? (
                    <i className="simple-icon-social-skype" />
                  ) : (
                    ""
                  )}
                </Col>
                <Col sm={6}>
                  <CardText style={{ fontSize: 18 }}>
                    <a href={this.state.socialUrl}>{this.state.socialUrl}</a>
                  </CardText>
                </Col>
              </Row>
              <hr
                style={{
                  color: "#808080",
                  backgroundColor: "#808080",
                  height: 1,
                  border: " 1px solid #808080",
                }}
              />
            </CardBody>
          </Colxx>
        </Row>
      </CardBody>
    );
    component.push(card);
    this.setState({ addSocial: component });
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
          this.setState({
            dob: "",
            gender: "",
            cat: "",

            email: "",
            collegeEmail: "",
            phno: "",
            pcity: "",
            pcountry: "",
            ppincode: "",
            paddressLine: "",
            pstate: "",
            pdis: "",
            cdis: "",
            ccity: "",
            ccountry: "",
            cpincode: "",
            caddressLine: "",
            cstate: "",

            nationality: "",
            passno: "",
            alternatephno: "",
            carbrk10: "",
            carbrk12: "",
            fathersname: "",
            mothersname: "",
            fathersoccup: "",
            mothersoccup: "",
            fathersphno: "",
            mothersphno: "",
            fathersalterphno: "",
            fathersemail: "",
            fatherworksin: "",
            fathersofficeadd: "",
            mothersalterphno: "",
            motherworksin: "",
            mothersofficeadd: "",
            mothersemail: "",
            boarding: "",
            lan: "",
            elective: "",
            prog: "",
            home: "",
            permphno: "",
            passyn: "",
            skypeid: "",

            carPlan: "",
            jobSector1: "",
            jobSector2: "",

            degree: "",
            course: "",
            branch: "",
            dept: "",
            collegeName: "",

            currentSem: "",
            noScores: "",
            score: "",
            courseStartDate: "",
            courseEndDate: "",
            lateral: "",
            uniID: "",
            sem1: [],
            sem2: [],
            sem3: [],
            sem4: [],
            sem5: [],
            sem6: [],
            sem7: [],
            sem8: [],

            school: "",
            board: "",
            program: "",
            specialisation: "",
            eduType: "",
            durationFrom: "",
            durationTo: "",
            addEdu: [],

            addExp: [],
            company: "",
            jobTitle: "",
            location: "",
            positionType: "",
            jobFn: "",
            companySector: "",
            currentWorking: "",
            stipend: "",
            details: "",
            from: "",
            to: "",

            proficiency: "",
            skill: "",
            addSkill: [],

            addPosition: [],
            title: "",
            orgName: "",
            startDate: "",
            endDate: "",
            currentHold: "",
            description: "",

            proTitle: "",
            proDomain: "",
            associatedWith: "",
            projectStartDate: "",
            projectEndDate: "",
            projectDescription: "",
            currentProject: "",

            addProject: [],
            subjectName: "",
            subjectAssociatedWith: "",
            addSubject: [],

            language: "",
            languageProficiency: "",

            addLanguage: [],

            awardTitle: "",
            issuer: "",
            issueDate: "",
            awardAssociatedWith: "",
            awardDescription: "",

            addAward: [],

            certiName: "",
            issuingAuth: "",
            certiUrl: "",
            certiDate: "",
            licNo: "",
            certiExpiry: "",
            certiDescription: "",
            addCertification: [],

            competitionTitle: "",
            competitionPosition: "",
            competitionDate: "",
            competitionAssociatedWith: "",
            competitionDescription: "",

            addCompetition: [],

            workshopTitle: "",
            workshopOrganizer: "",
            workshopEventDate: "",
            workshopAddress: "",
            workshopDescription: "",

            addWorkshop: [],

            testTitle: "",
            testChoose: "",
            testScore: "",
            testTotal: "",
            testDate: "",
            testAssociatedWith: "",
            testDescription: "",

            addTest: [],

            patentTitle: "",
            patentOffice: "",
            patentNo: "",
            patentStatus: "",
            patentDescription: "",
            patentDate: "",

            addPatent: [],

            pubTitle: "",
            publisher: "",
            pubDate: "",
            pubUrl: "",
            pubDescription: "",

            addPublication: [],

            scholarTitle: "",
            grantDate: "",
            scholarDescrition: "",
            scholarAssociatedWith: "",

            addScholar: [],

            volOrg: "",
            volRole: "",
            volCause: "",
            volStart: "",
            volEnd: "",
            currentVol: "",
            volDescription: "",

            addVol: [],

            extraCat: "",
            extraStart: "",
            extraEnd: "",
            extraDescription: "",

            addActivity: [],

            socialProfile: "",
            socialUrl: "",
            addSocial: [],
          });
        } else {
          console.log(data.student);
          const paddress = data.student.contactSection.permanentAdd.split(", ");
          const caddress = data.student.contactSection.currentAdd.split(", ");
          this.setState({
            dob: data.student.aboutSection.dob,
            gender: data.student.aboutSection.Gender,
            cat: data.student.aboutSection.Category,

            email: data.student.contactSection.email,
            collegeEmail: data.student.contactSection.collegeEmail,
            phno: data.student.contactSection.phoneNo,
            pcity: paddress[3].split("-")[0],
            pcountry: paddress[5],
            ppincode: paddress[3].split("-")[1],
            paddressLine: paddress[0] + paddress[1],
            pstate: paddress[4],
            pdis: paddress[3],
            cdis: caddress[3],
            ccity: caddress[3].split("-")[0],
            ccountry: caddress[5],
            cpincode: caddress[3].split("-")[1],
            caddressLine: caddress[0] + caddress[1],
            cstate: caddress[4],

            nationality: data.student.additionalInfo.nationality,
            passno: data.student.additionalInfo.passportNo,
            alternatephno: data.student.additionalInfo.alternatePhNo, //*,
            carbrk10: data.student.additionalInfo.careerBreak10_12,
            carbrk12: data.student.additionalInfo.careerBreak12_grad,
            fathersname: data.student.additionalInfo.fatherName,
            mothersname: data.student.additionalInfo.motherName,
            fathersoccup: data.student.additionalInfo.fatherOccupation,
            mothersoccup: data.student.additionalInfo.motherOccupation,
            fathersphno: data.student.additionalInfo.fatherPhNo,
            mothersphno: data.student.additionalInfo.motherPhNo,
            fathersalterphno: data.student.additionalInfo.fatherAlternatePhno,
            fathersemail: data.student.additionalInfo.fatherEmail,
            fatherworksin: data.student.additionalInfo.fatherWorkIn,
            fathersofficeadd: data.student.additionalInfo.fatherOfficeAddress,
            mothersalterphno: data.student.additionalInfo.motherAlternatePhNo,
            motherworksin: data.student.additionalInfo.motherWorkIn,
            mothersofficeadd: data.student.additionalInfo.motherOfficeAddress,
            mothersemail: data.student.additionalInfo.motherEmail,
            boarding: data.student.additionalInfo.boarding,
            lan: data.student.additionalInfo.languages.programming,
            elective: data.student.additionalInfo.elective,
            prog: data.student.additionalInfo.programming,
            home: data.student.additionalInfo.hometown,
            permphno: data.student.additionalInfo.permanentPhno,
            passyn: data.student.additionalInfo.passport,
            skypeid: data.student.additionalInfo.skypeID,

            carPlan: data.student.jobPlacements.carPlan,
            jobSector1: data.student.jobPlacements.jobSector1,
            jobSector2: data.student.jobPlacements.jobSector2,

            degree: data.student.currentEducation.degree,
            course: data.student.currentEducation.course,
            branch: data.student.currentEducation.branch,
            dept: data.student.currentEducation.department,
            collegeName: data.student.currentEducation.collegeName,

            currentSem: data.student.currentEducationDetails.currSem,
            noScores: data.student.currentEducationDetails.scoreYet,
            score: data.student.currentEducationDetails.score,
            courseStartDate:
              data.student.currentEducationDetails.courseStartDate,
            courseEndDate: data.student.currentEducationDetails.courseEndDate,
            lateral: data.student.currentEducationDetails.lateral,
            uniID: data.student.currentEducationDetails.usn,
            sem1: [
              data.student.currentEducationDetails.sem1.performance,
              data.student.currentEducationDetails.sem1.backlogTotal,
              data.student.currentEducationDetails.sem1.backlogsOnGoing,
            ],
            sem2: [
              data.student.currentEducationDetails.sem2.performance,
              data.student.currentEducationDetails.sem2.backlogTotal,
              data.student.currentEducationDetails.sem2.backlogsOnGoing,
            ],
            sem3: [
              data.student.currentEducationDetails.sem3.performance,
              data.student.currentEducationDetails.sem3.backlogTotal,
              data.student.currentEducationDetails.sem3.backlogsOnGoing,
            ],
            sem4: [
              data.student.currentEducationDetails.sem4.performance,
              data.student.currentEducationDetails.sem4.backlogTotal,
              data.student.currentEducationDetails.sem4.backlogsOnGoing,
            ],
            sem5: [
              data.student.currentEducationDetails.sem5.performance,
              data.student.currentEducationDetails.sem5.backlogTotal,
              data.student.currentEducationDetails.sem5.backlogsOnGoing,
            ],
            sem6: [
              data.student.currentEducationDetails.sem6.performance,
              data.student.currentEducationDetails.sem6.backlogTotal,
              data.student.currentEducationDetails.sem6.backlogsOnGoing,
            ],
            sem7: [
              data.student.currentEducationDetails.sem7.performance,
              data.student.currentEducationDetails.sem7.backlogTotal,
              data.student.currentEducationDetails.sem7.backlogsOnGoing,
            ],
            sem8: [
              data.student.currentEducationDetails.sem8.performance,
              data.student.currentEducationDetails.sem8.backlogTotal,
              data.student.currentEducationDetails.sem8.backlogsOnGoing,
            ],

            previousEducation: data.student.previousEducation,
            experience: data.student.experience,
            skills: data.student.skills,
            position: data.student.position,
            subjects: data.student.subjects,
            languages: data.student.languages,
            awards: data.student.awards,
            certification: data.student.certification,
            competitions: data.student.competitions,
            conferences: data.student.conferences,
            social: data.student.socialProfile,
            projects: data.student.projects,
            test: data.student.test,
            patent: data.student.patent,
            publications: data.student.publications,
            scholarships: data.student.scholarships,
            volunteer: data.student.volunteer,
            activity: data.student.activity,
          });
        }
      });
    console.log(
      this.state.pcity,
      this.state.ppincode,
      this.state.paddressLine,
      this.state.pstate
    );
    console.log(
      this.state.ccity,
      this.state.cpincode,
      this.state.caddressLine,
      this.state.cstate
    );
  }
  exportPDFWithComponent = () => {
    this.resume.save();
  };
  render() {
    return (
      <Fragment>
        <Row>
          <Colxx xxs="12">
            <Breadcrumb heading="About" match={this.props.match} />
            <Separator className="mb-5" />
          </Colxx>
        </Row>

        <Row>
          <Colxx xxs="12">
            <div className="d-flex flex-row mb-4">
              <ProfileLayout
                url={this.props.match.url}
                collegeName={this.state.collegeName}
              />
            </div>

            <Card className="d-flex flex-row mb-4">
              <div className=" d-flex flex-grow-1 min-width-zero ">
                <CardBody
                  style={{ fontSize: 18 }}
                  className=" pl-0 align-self-center mr-5 ml-5 flex-column flex-md-row justify-content-between min-width-zero"
                >
                  <Row>
                    <Colxx xxs="12">
                      <Col className="offset-11">
                        {this.state.dob ||
                        this.state.gender ||
                        this.state.cat ? (
                          <i
                            style={{ fontSize: 18, cursor: "pointer" }}
                            className="simple-icon-lock"
                            onClick={() =>
                              alert("Please contact admin to edit.")
                            }
                          />
                        ) : (
                          <i
                            style={{ cursor: "pointer" }}
                            className="simple-icon-pencil "
                            onClick={this.toggleA}
                          >
                            {" "}
                            {this.state.dob ||
                            this.state.cat ||
                            this.state.gender
                              ? "Edit"
                              : "Add"}
                          </i>
                        )}
                      </Col>
                      <CardTitle style={{ fontSize: 24 }} className="mb-10 ">
                        <IntlMessages id="student.about-section" />
                        <hr
                          style={{
                            color: "#808080",
                            backgroundColor: "#808080",
                            height: 1,
                            border: " 1px solid #808080",
                          }}
                        />
                      </CardTitle>
                      <CardBody>
                        <Row className="mb-4">
                          <Col sm={3}>
                            <IntlMessages id="dob" />
                          </Col>
                          <Col sm={4}>
                            <CardText style={{ fontSize: 18 }}>
                              {this.state.dob}
                            </CardText>
                          </Col>
                        </Row>
                        <hr
                          style={{
                            color: "#808080",
                            backgroundColor: "#808080",
                            height: 1,
                            border: " 1px solid #808080",
                          }}
                        />
                        <Row className="mb-4">
                          <Col sm={3}>
                            <IntlMessages id="gender" />
                          </Col>
                          <Col sm={4}>
                            <CardText style={{ fontSize: 18 }}>
                              {this.state.gender}
                            </CardText>
                          </Col>
                        </Row>
                        <hr
                          style={{
                            color: "#808080",
                            backgroundColor: "#808080",
                            height: 1,
                            border: " 1px solid #808080",
                          }}
                        />
                        <Row className="mb-4">
                          <Col sm={3}>
                            <IntlMessages id="cat" />
                          </Col>
                          <Col sm={4}>
                            <CardText style={{ fontSize: 18 }}>
                              {this.state.cat}
                            </CardText>
                          </Col>
                        </Row>
                      </CardBody>
                    </Colxx>
                  </Row>
                </CardBody>
              </div>
              <FormA
                open={this.state.modalA}
                toggle={this.toggleA}
                formEvent={this.formA}
              />
            </Card>

            <Card className="d-flex flex-row mb-4">
              <div className=" d-flex flex-grow-1 min-width-zero">
                <CardBody
                  style={{ fontSize: 18 }}
                  className=" pl-0 align-self-center mr-5 ml-5 flex-column flex-md-row justify-content-between min-width-zero"
                >
                  <Row>
                    <Colxx xxs="12">
                      <Col className="offset-11">
                        {" "}
                        <i
                          style={{ cursor: "pointer" }}
                          className="simple-icon-pencil "
                          onClick={this.toggleB}
                        >
                          {" "}
                          Edit
                        </i>
                      </Col>
                      <CardTitle style={{ fontSize: 24 }} className="mb-10">
                        <IntlMessages id="contact-details" />
                        <hr
                          style={{
                            color: "#808080",
                            backgroundColor: "#808080",
                            height: 1,
                            border: " 1px solid #808080",
                          }}
                        />
                      </CardTitle>
                      <CardBody>
                        <Row className="mb-4">
                          <Col sm={3}>
                            <IntlMessages id="user.email" />
                          </Col>
                          <Col sm={4}>
                            <CardText style={{ fontSize: 18 }}>
                              {this.state.email}
                            </CardText>
                          </Col>
                        </Row>
                        <hr
                          style={{
                            color: "#808080",
                            backgroundColor: "#808080",
                            height: 1,
                            border: " 1px solid #808080",
                          }}
                        />
                        {sessionStorage.getItem("role") === "STUDENT" ? (
                          <>
                            <Row className="mb-4">
                              <Col sm={3}>
                                <IntlMessages id="collegeEmail" />
                              </Col>
                              <Col sm={4}>
                                <CardText style={{ fontSize: 18 }}>
                                  {this.state.collegeEmail}
                                </CardText>
                              </Col>
                            </Row>
                            <hr
                              style={{
                                color: "#808080",
                                backgroundColor: "#808080",
                                height: 1,
                                border: " 1px solid #808080",
                              }}
                            />
                          </>
                        ) : null}

                        <Row className="mb-4">
                          <Col sm={3}>
                            <IntlMessages id="user.phone-number" />
                          </Col>
                          <Col sm={4}>
                            <CardText style={{ fontSize: 18 }}>
                              {this.state.phno}
                            </CardText>
                          </Col>
                        </Row>
                        <hr
                          style={{
                            color: "#808080",
                            backgroundColor: "#808080",
                            height: 1,
                            border: " 1px solid #808080",
                          }}
                        />

                        <Row className="mb-4">
                          <Col sm={3}>
                            <IntlMessages id="paddress" />
                          </Col>
                          <Col sm={3}>
                            <CardText style={{ fontSize: 18 }}>
                              {this.state.paddressLine ||
                              this.state.pcity ||
                              this.state.ppincode ||
                              this.pdis ||
                              this.state.pstate
                                ? this.state.paddressLine +
                                  ",\n" +
                                  this.state.pcity +
                                  " - " +
                                  this.state.ppincode +
                                  ",\n" +
                                  this.state.pdis +
                                  " " +
                                  this.state.pstate +
                                  " " +
                                  this.state.pcountry
                                : null}
                            </CardText>
                          </Col>
                          {this.state.paddressLine ||
                          this.state.pcity ||
                          this.state.ppincode ||
                          this.pdis ||
                          this.state.pstate ? (
                            <Col sm={{ size: 3, offset: 3 }}>
                              <i
                                style={{ fontSize: 18, cursor: "pointer" }}
                                className="simple-icon-lock"
                                onClick={() =>
                                  alert("Please contact admin to edit.")
                                }
                              />
                            </Col>
                          ) : (
                            <Col sm={{ size: 3, offset: 3 }}>
                              <i
                                style={{ cursor: "pointer" }}
                                className="simple-icon-pencil "
                                onClick={this.toggleInner}
                              >
                                {"  "}
                                Add Permanet Address
                              </i>
                            </Col>
                          )}
                        </Row>
                        <hr
                          style={{
                            color: "#808080",
                            backgroundColor: "#808080",
                            height: 1,
                            border: " 1px solid #808080",
                          }}
                        />
                        <Row className="mb-4">
                          <Col sm={3}>
                            <IntlMessages id="caddress" />
                          </Col>
                          <Col sm={3}>
                            <CardText style={{ fontSize: 18 }}>
                              {this.state.caddressLine ||
                              this.state.ccity ||
                              this.state.cpincode ||
                              this.cdis ||
                              this.state.cstate
                                ? this.state.caddressLine +
                                  ",\n" +
                                  this.state.ccity +
                                  " - " +
                                  this.state.cpincode +
                                  ",\n" +
                                  this.state.cdis +
                                  " " +
                                  this.state.cstate +
                                  " " +
                                  this.state.ccountry
                                : null}
                            </CardText>
                          </Col>
                          <Col sm={{ size: 3, offset: 3 }}>
                            <i
                              style={{ cursor: "pointer" }}
                              className="simple-icon-pencil "
                              onClick={this.toggleInner1}
                            >
                              {"  "}
                              Edit Current Address
                            </i>
                          </Col>
                        </Row>
                      </CardBody>
                      <FormB
                        formB={this.formB}
                        formBInner={this.formBInner}
                        formBInner1={this.formBInner1}
                        open={this.state.modalB}
                        openInner={this.state.modalInner}
                        openInner1={this.state.modalInner1}
                        toggleInner1={this.toggleInner1}
                        toggleInner={this.toggleInner}
                        toggle={this.toggleB}
                        email={this.state.email}
                        collegeEmail={this.state.collegeEmail}
                        phno={this.state.phno}
                        ppincode={this.state.ppincode}
                        paddressLine={this.state.paddressLine}
                        pstate={this.state.pstate}
                        pdis={this.state.pdis}
                        cdis={this.state.cdis}
                        cpincode={this.state.cpincode}
                        caddressLine={this.state.caddressLine}
                        cstate={this.state.cstate}
                      />
                    </Colxx>
                  </Row>
                </CardBody>
              </div>
            </Card>
            <Card className="d-flex flex-row mb-4">
              <div className=" d-flex flex-grow-1 min-width-zero">
                <CardBody
                  style={{ fontSize: 18 }}
                  className=" pl-0 align-self-center mr-5 ml-5 flex-column flex-md-row justify-content-between min-width-zero"
                >
                  <Row>
                    <Colxx xxs="12">
                      <Col className="offset-11">
                        {" "}
                        <i
                          style={{ cursor: "pointer" }}
                          className="simple-icon-pencil "
                          onClick={this.toggleC}
                        >
                          {" "}
                          Edit
                        </i>
                      </Col>
                      <CardTitle style={{ fontSize: 24 }} className="mb-10">
                        <IntlMessages id="addinfo" />
                        <hr
                          style={{
                            color: "#808080",
                            backgroundColor: "#808080",
                            height: 1,
                            border: " 1px solid #808080",
                          }}
                        />
                      </CardTitle>
                      <CardBody>
                        <Row className="mb-4">
                          <Col sm={3}>
                            <IntlMessages id="nationality" />
                          </Col>
                          <Col sm={4}>
                            <CardText style={{ fontSize: 18 }}>
                              {this.state.nationality}
                            </CardText>
                          </Col>
                        </Row>
                        <hr
                          style={{
                            color: "#808080",
                            backgroundColor: "#808080",
                            height: 1,
                            border: " 1px solid #808080",
                          }}
                        />
                        <Row className="mb-4">
                          <Col sm={3}>
                            <IntlMessages id="passportno" />
                          </Col>
                          <Col sm={4}>
                            <CardText style={{ fontSize: 18 }}>
                              {this.state.passno}
                            </CardText>
                          </Col>
                        </Row>
                        <hr
                          style={{
                            color: "#808080",
                            backgroundColor: "#808080",
                            height: 1,
                            border: " 1px solid #808080",
                          }}
                        />
                        <Row className="mb-4">
                          <Col sm={3}>
                            <IntlMessages id="alertnatephno" />
                          </Col>
                          <Col sm={4}>
                            <CardText style={{ fontSize: 18 }}>
                              {this.state.alternatephno}
                            </CardText>
                          </Col>
                        </Row>
                        <hr
                          style={{
                            color: "#808080",
                            backgroundColor: "#808080",
                            height: 1,
                            border: " 1px solid #808080",
                          }}
                        />
                        <Row className="mb-4">
                          <Col sm={3}>
                            <IntlMessages id="carbrk10" />
                          </Col>
                          <Col sm={4}>
                            <CardText style={{ fontSize: 18 }}>
                              {this.state.carbrk10}
                            </CardText>
                          </Col>
                        </Row>
                        <hr
                          style={{
                            color: "#808080",
                            backgroundColor: "#808080",
                            height: 1,
                            border: " 1px solid #808080",
                          }}
                        />
                        <Row className="mb-4">
                          <Col sm={3}>
                            <IntlMessages id="carbrk12" />
                          </Col>
                          <Col sm={4}>
                            <CardText style={{ fontSize: 18 }}>
                              {this.state.carbrk12}
                            </CardText>
                          </Col>
                        </Row>
                        <hr
                          style={{
                            color: "#808080",
                            backgroundColor: "#808080",
                            height: 1,
                            border: " 1px solid #808080",
                          }}
                        />
                        <Row className="mb-4">
                          <Col sm={3}>
                            <IntlMessages id="fathersname" />
                          </Col>
                          <Col sm={4}>
                            <CardText style={{ fontSize: 18 }}>
                              {this.state.fathersname}
                            </CardText>
                          </Col>
                        </Row>
                        <hr
                          style={{
                            color: "#808080",
                            backgroundColor: "#808080",
                            height: 1,
                            border: " 1px solid #808080",
                          }}
                        />
                        <Row className="mb-4">
                          <Col sm={3}>
                            <IntlMessages id="fathersoccup" />
                          </Col>
                          <Col sm={4}>
                            <CardText style={{ fontSize: 18 }}>
                              {this.state.fathersoccup}
                            </CardText>
                          </Col>
                        </Row>
                        <hr
                          style={{
                            color: "#808080",
                            backgroundColor: "#808080",
                            height: 1,
                            border: " 1px solid #808080",
                          }}
                        />
                        <Row className="mb-4">
                          <Col sm={3}>
                            <IntlMessages id="fathersphno" />
                          </Col>
                          <Col sm={4}>
                            <CardText style={{ fontSize: 18 }}>
                              {this.state.fathersphno}
                            </CardText>
                          </Col>
                        </Row>
                        <hr
                          style={{
                            color: "#808080",
                            backgroundColor: "#808080",
                            height: 1,
                            border: " 1px solid #808080",
                          }}
                        />
                        <Row className="mb-4">
                          <Col sm={3}>
                            <IntlMessages id="fathersalertnatephno" />
                          </Col>
                          <Col sm={4}>
                            <CardText style={{ fontSize: 18 }}>
                              {this.state.fathersalterphno}
                            </CardText>
                          </Col>
                        </Row>
                        <hr
                          style={{
                            color: "#808080",
                            backgroundColor: "#808080",
                            height: 1,
                            border: " 1px solid #808080",
                          }}
                        />
                        <Row className="mb-4">
                          <Col sm={3}>
                            <IntlMessages id="fathersmail" />
                          </Col>
                          <Col sm={4}>
                            <CardText style={{ fontSize: 18 }}>
                              {this.state.fathersemail}
                            </CardText>
                          </Col>
                        </Row>
                        <hr
                          style={{
                            color: "#808080",
                            backgroundColor: "#808080",
                            height: 1,
                            border: " 1px solid #808080",
                          }}
                        />
                        <Row className="mb-4">
                          <Col sm={3}>
                            <IntlMessages id="fathersworksin" />
                          </Col>
                          <Col sm={4}>
                            <CardText style={{ fontSize: 18 }}>
                              {this.state.fatherworksin}
                            </CardText>
                          </Col>
                        </Row>
                        <hr
                          style={{
                            color: "#808080",
                            backgroundColor: "#808080",
                            height: 1,
                            border: " 1px solid #808080",
                          }}
                        />
                        <Row className="mb-4">
                          <Col sm={3}>
                            <IntlMessages id="fathersofficeadd" />
                          </Col>
                          <Col sm={4}>
                            <CardText style={{ fontSize: 18 }}>
                              {this.state.fathersofficeadd}
                            </CardText>
                          </Col>
                        </Row>
                        <hr
                          style={{
                            color: "#808080",
                            backgroundColor: "#808080",
                            height: 1,
                            border: " 1px solid #808080",
                          }}
                        />
                        <Row className="mb-4">
                          <Col sm={3}>
                            <IntlMessages id="mothersname" />
                          </Col>
                          <Col sm={4}>
                            <CardText style={{ fontSize: 18 }}>
                              {this.state.mothersname}
                            </CardText>
                          </Col>
                        </Row>
                        <hr
                          style={{
                            color: "#808080",
                            backgroundColor: "#808080",
                            height: 1,
                            border: " 1px solid #808080",
                          }}
                        />
                        <Row className="mb-4">
                          <Col sm={3}>
                            <IntlMessages id="mothersphno" />
                          </Col>
                          <Col sm={4}>
                            <CardText style={{ fontSize: 18 }}>
                              {this.state.mothersphno}
                            </CardText>
                          </Col>
                        </Row>
                        <hr
                          style={{
                            color: "#808080",
                            backgroundColor: "#808080",
                            height: 1,
                            border: " 1px solid #808080",
                          }}
                        />
                        <Row className="mb-4">
                          <Col sm={3}>
                            <IntlMessages id="mothersalertphno" />
                          </Col>
                          <Col sm={4}>
                            <CardText style={{ fontSize: 18 }}>
                              {this.state.mothersalterphno}
                            </CardText>
                          </Col>
                        </Row>
                        <hr
                          style={{
                            color: "#808080",
                            backgroundColor: "#808080",
                            height: 1,
                            border: " 1px solid #808080",
                          }}
                        />
                        <Row className="mb-4">
                          <Col sm={3}>
                            <IntlMessages id="mothersmail" />
                          </Col>
                          <Col sm={4}>
                            <CardText style={{ fontSize: 18 }}>
                              {this.state.mothersemail}
                            </CardText>
                          </Col>
                        </Row>
                        <hr
                          style={{
                            color: "#808080",
                            backgroundColor: "#808080",
                            height: 1,
                            border: " 1px solid #808080",
                          }}
                        />
                        <Row className="mb-4">
                          <Col sm={3}>
                            <IntlMessages id="mothersoccup" />
                          </Col>
                          <Col sm={4}>
                            <CardText style={{ fontSize: 18 }}>
                              {this.state.mothersoccup}
                            </CardText>
                          </Col>
                        </Row>
                        <hr
                          style={{
                            color: "#808080",
                            backgroundColor: "#808080",
                            height: 1,
                            border: " 1px solid #808080",
                          }}
                        />
                        <Row className="mb-4">
                          <Col sm={3}>
                            <IntlMessages id="mothersworkin" />
                          </Col>
                          <Col sm={4}>
                            <CardText style={{ fontSize: 18 }}>
                              {this.state.motherworksin}
                            </CardText>
                          </Col>
                        </Row>
                        <hr
                          style={{
                            color: "#808080",
                            backgroundColor: "#808080",
                            height: 1,
                            border: " 1px solid #808080",
                          }}
                        />
                        <Row className="mb-4">
                          <Col sm={3}>
                            <IntlMessages id="mothersofficeadd" />
                          </Col>
                          <Col sm={4}>
                            <CardText style={{ fontSize: 18 }}>
                              {this.state.mothersofficeadd}
                            </CardText>
                          </Col>
                        </Row>
                        <hr
                          style={{
                            color: "#808080",
                            backgroundColor: "#808080",
                            height: 1,
                            border: " 1px solid #808080",
                          }}
                        />
                        <Row className="mb-4">
                          <Col sm={3}>
                            <IntlMessages id="boarding" />
                          </Col>
                          <Col sm={4}>
                            <CardText style={{ fontSize: 18 }}>
                              {this.state.boarding}
                            </CardText>
                          </Col>
                        </Row>
                        <hr
                          style={{
                            color: "#808080",
                            backgroundColor: "#808080",
                            height: 1,
                            border: " 1px solid #808080",
                          }}
                        />
                        <Row className="mb-4">
                          <Col sm={3}>
                            <IntlMessages id="languages" />
                          </Col>
                          <Col sm={4}>
                            <CardText style={{ fontSize: 18 }}>
                              {this.state.lan}
                            </CardText>
                          </Col>
                        </Row>
                        <hr
                          style={{
                            color: "#808080",
                            backgroundColor: "#808080",
                            height: 1,
                            border: " 1px solid #808080",
                          }}
                        />
                        <Row className="mb-4">
                          <Col sm={3}>
                            <IntlMessages id="elective" />
                          </Col>
                          <Col sm={4}>
                            <CardText style={{ fontSize: 18 }}>
                              {this.state.elective}
                            </CardText>
                          </Col>
                        </Row>
                        <hr
                          style={{
                            color: "#808080",
                            backgroundColor: "#808080",
                            height: 1,
                            border: " 1px solid #808080",
                          }}
                        />
                        <Row className="mb-4">
                          <Col sm={3}>
                            <IntlMessages id="programming" />
                          </Col>
                          <Col sm={4}>
                            <CardText style={{ fontSize: 18 }}>
                              {this.state.prog}
                            </CardText>
                          </Col>
                        </Row>
                        <hr
                          style={{
                            color: "#808080",
                            backgroundColor: "#808080",
                            height: 1,
                            border: " 1px solid #808080",
                          }}
                        />
                        <Row className="mb-4">
                          <Col sm={3}>
                            <IntlMessages id="hometown" />
                          </Col>
                          <Col sm={4}>
                            <CardText style={{ fontSize: 18 }}>
                              {this.state.home}
                            </CardText>
                          </Col>
                        </Row>
                        <hr
                          style={{
                            color: "#808080",
                            backgroundColor: "#808080",
                            height: 1,
                            border: " 1px solid #808080",
                          }}
                        />
                        <Row className="mb-4">
                          <Col sm={3}>
                            <IntlMessages id="pcontactno" />
                          </Col>
                          <Col sm={4}>
                            <CardText style={{ fontSize: 18 }}>
                              {this.state.permphno}
                            </CardText>
                          </Col>
                        </Row>
                        <hr
                          style={{
                            color: "#808080",
                            backgroundColor: "#808080",
                            height: 1,
                            border: " 1px solid #808080",
                          }}
                        />
                        <Row className="mb-4">
                          <Col sm={3}>
                            <IntlMessages id="passyn" />
                          </Col>
                          <Col sm={4}>
                            <CardText style={{ fontSize: 18 }}>
                              {this.state.passyn}
                            </CardText>
                          </Col>
                        </Row>
                        <hr
                          style={{
                            color: "#808080",
                            backgroundColor: "#808080",
                            height: 1,
                            border: " 1px solid #808080",
                          }}
                        />
                        <Row className="mb-4">
                          <Col sm={3}>
                            <IntlMessages id="skypeid" />
                          </Col>
                          <Col sm={4}>
                            <CardText style={{ fontSize: 18 }}>
                              {this.state.skypeid}
                            </CardText>
                          </Col>
                        </Row>
                      </CardBody>
                      <FormC
                        nationality={this.state.nationality}
                        passno={this.state.passno}
                        alternatephno={this.state.alternatephno}
                        carbrk10={this.state.carbrk10}
                        carbrk12={this.state.carbrk12}
                        fathersname={this.state.fathersname}
                        mothersname={this.state.mothersname}
                        fathersoccup={this.state.fathersoccup}
                        mothersoccup={this.state.mothersoccup}
                        fathersphno={this.state.fathersphno}
                        mothersphno={this.state.mothersphno}
                        fathersalterphno={this.state.fathersalterphno}
                        fathersemail={this.state.fathersemail}
                        fatherworksin={this.state.fatherworksin}
                        fathersofficeadd={this.state.fathersofficeadd}
                        mothersalterphno={this.state.mothersalterphno}
                        motherworksin={this.state.motherworksin}
                        mothersofficeadd={this.state.mothersofficeadd}
                        mothersemail={this.state.mothersemail}
                        boarding={this.state.boarding}
                        lan={this.state.lan}
                        elective={this.state.elective}
                        prog={this.state.prog}
                        home={this.state.home}
                        permphno={this.state.permphno}
                        passyn={this.state.passyn}
                        skypeid={this.state.skypeid}
                        open={this.state.modalC}
                        formEvent={this.formC}
                        toggle={this.toggleC}
                      />
                    </Colxx>
                  </Row>
                </CardBody>
              </div>
            </Card>
            <Card className="d-flex flex-row mb-4">
              <div className=" d-flex flex-grow-1 min-width-zero ">
                <CardBody
                  style={{ fontSize: 18 }}
                  className=" pl-0 align-self-center mr-5 ml-5 flex-column flex-md-row justify-content-between min-width-zero"
                >
                  <Row>
                    <Colxx xxs="12">
                      <Col className="offset-11">
                        {" "}
                        <i
                          style={{ cursor: "pointer" }}
                          className="simple-icon-pencil "
                          onClick={this.toggleD}
                        >
                          {" "}
                          Edit
                        </i>
                      </Col>
                      <CardTitle style={{ fontSize: 24 }} className="mb-10 ">
                        <IntlMessages id="placementdetails" />
                        <hr
                          style={{
                            color: "#808080",
                            backgroundColor: "#808080",
                            height: 1,
                            border: " 1px solid #808080",
                          }}
                        />
                      </CardTitle>
                      <CardBody>
                        <Row className="mb-4">
                          <Col sm={3}>
                            <IntlMessages id="carPlan" />
                          </Col>
                          <Col sm={4}>
                            <CardText style={{ fontSize: 18 }}>
                              {this.state.carPlan}
                            </CardText>
                          </Col>
                        </Row>
                        <hr
                          style={{
                            color: "#808080",
                            backgroundColor: "#808080",
                            height: 1,
                            border: " 1px solid #808080",
                          }}
                        />
                        <Row className="mb-4">
                          <Col sm={3}>
                            <IntlMessages id="jobSector1" />
                          </Col>
                          <Col sm={4}>
                            <CardText style={{ fontSize: 18 }}>
                              {this.state.jobSector1}
                            </CardText>
                          </Col>
                        </Row>
                        <hr
                          style={{
                            color: "#808080",
                            backgroundColor: "#808080",
                            height: 1,
                            border: " 1px solid #808080",
                          }}
                        />
                        <Row className="mb-4">
                          <Col sm={3}>
                            <IntlMessages id="jobSector2" />
                          </Col>
                          <Col sm={4}>
                            <CardText style={{ fontSize: 18 }}>
                              {this.state.jobSector2}
                            </CardText>
                          </Col>
                        </Row>
                      </CardBody>
                      <FormD
                        carPlan={this.state.carPlan}
                        jobSector1={this.state.jobSector1}
                        jobSector2={this.state.jobSector2}
                        open={this.state.modalD}
                        toggle={this.toggleD}
                        formEvent={this.formD}
                      />
                    </Colxx>
                  </Row>
                </CardBody>
              </div>
            </Card>
            <Card className="d-flex flex-row mb-4">
              <div className=" d-flex flex-grow-1 min-width-zero ">
                <CardBody
                  style={{ fontSize: 18 }}
                  className=" pl-0 align-self-center mr-5 ml-5 flex-column flex-md-row justify-content-between min-width-zero"
                >
                  <Row>
                    <Colxx xxs="12">
                      <Col className="offset-11">
                        {" "}
                        <i
                          style={{ cursor: "pointer" }}
                          className="simple-icon-pencil "
                          onClick={this.toggleE}
                        >
                          {" "}
                          Edit
                        </i>
                      </Col>
                      <CardTitle style={{ fontSize: 24 }} className="mb-10 ">
                        <IntlMessages id="currentEdu" />
                        <hr
                          style={{
                            color: "#808080",
                            backgroundColor: "#808080",
                            height: 1,
                            border: " 1px solid #808080",
                          }}
                        />
                      </CardTitle>
                      <CardBody>
                        <Row className="mb-4">
                          <Col sm={3}>
                            <IntlMessages id="degree" />
                          </Col>
                          <Col sm={4}>
                            <CardText style={{ fontSize: 18 }}>
                              {this.state.degree}
                            </CardText>
                          </Col>
                        </Row>
                        <hr
                          style={{
                            color: "#808080",
                            backgroundColor: "#808080",
                            height: 1,
                            border: " 1px solid #808080",
                          }}
                        />
                        <Row className="mb-4">
                          <Col sm={3}>
                            <IntlMessages id="course" />
                          </Col>
                          <Col sm={4}>
                            <CardText style={{ fontSize: 18 }}>
                              {this.state.course}
                            </CardText>
                          </Col>
                        </Row>
                        <hr
                          style={{
                            color: "#808080",
                            backgroundColor: "#808080",
                            height: 1,
                            border: " 1px solid #808080",
                          }}
                        />
                        <Row className="mb-4">
                          <Col sm={3}>
                            <IntlMessages id="branch" />
                          </Col>
                          <Col sm={4}>
                            <CardText style={{ fontSize: 18 }}>
                              {this.state.branch}
                            </CardText>
                          </Col>
                        </Row>
                        <hr
                          style={{
                            color: "#808080",
                            backgroundColor: "#808080",
                            height: 1,
                            border: " 1px solid #808080",
                          }}
                        />
                        <Row className="mb-4">
                          <Col sm={3}>
                            <IntlMessages id="dept" />
                          </Col>
                          <Col sm={4}>
                            <CardText style={{ fontSize: 18 }}>
                              {this.state.dept}
                            </CardText>
                          </Col>
                        </Row>
                        <hr
                          style={{
                            color: "#808080",
                            backgroundColor: "#808080",
                            height: 1,
                            border: " 1px solid #808080",
                          }}
                        />
                        <Row className="mb-4">
                          <Col sm={3}>
                            <IntlMessages id="collegeName" />
                          </Col>
                          <Col sm={4}>
                            <CardText style={{ fontSize: 18 }}>
                              {this.state.collegeName}
                            </CardText>
                          </Col>
                        </Row>
                      </CardBody>
                      <FormE
                        degree={this.state.degree}
                        course={this.state.course}
                        branch={this.state.branch}
                        dept={this.state.dept}
                        collegeName={this.state.collegeName}
                        open={this.state.modalE}
                        toggle={this.toggleE}
                        formEvent={this.formE}
                        openInner={this.state.modalEInner}
                        toggleEInner={this.toggleEInner}
                        currentSem={this.state.currentSem}
                        noScores={this.state.noScores}
                        score={this.state.score}
                        lateral={this.state.lateral}
                        uniID={this.state.uniID}
                        backlogs={this.state.backlogs}
                        formUpdate={this.formUpdate}
                      />
                      <Col className="offset-11">
                        {" "}
                        <i
                          style={{ cursor: "pointer" }}
                          className="simple-icon-pencil "
                          onClick={this.toggleEInner}
                        >
                          {" "}
                          Edit
                        </i>
                      </Col>

                      <CardBody>
                        <Row className="mb-4">
                          <Col sm={3}>
                            <IntlMessages id="currentSem" />
                          </Col>
                          <Col sm={4}>
                            <CardText style={{ fontSize: 18 }}>
                              {this.state.currentSem}
                            </CardText>
                          </Col>
                        </Row>
                        <hr
                          style={{
                            color: "#808080",
                            backgroundColor: "#808080",
                            height: 1,
                            border: " 1px solid #808080",
                          }}
                        />
                        <Row className="mb-4">
                          <Col sm={3}>
                            <IntlMessages id="noscore" />
                          </Col>
                          <Col sm={4}>
                            <CardText style={{ fontSize: 18 }}>
                              {this.state.noScores ? "Yes" : "NA"}
                            </CardText>
                          </Col>
                        </Row>
                        <hr
                          style={{
                            color: "#808080",
                            backgroundColor: "#808080",
                            height: 1,
                            border: " 1px solid #808080",
                          }}
                        />
                        <Row className="mb-4">
                          <Col sm={3}>
                            <IntlMessages id="score" />
                          </Col>
                          <Col sm={4}>
                            <CardText style={{ fontSize: 18 }}>
                              {this.state.score}
                            </CardText>
                          </Col>
                        </Row>
                        <hr
                          style={{
                            color: "#808080",
                            backgroundColor: "#808080",
                            height: 1,
                            border: " 1px solid #808080",
                          }}
                        />
                        <Row className="mb-4">
                          <Col sm={3}>
                            <IntlMessages id="courseStart" />
                          </Col>
                          <Col sm={4}>
                            <CardText style={{ fontSize: 18 }}>
                              {this.state.courseStartDate}
                            </CardText>
                          </Col>
                        </Row>
                        <hr
                          style={{
                            color: "#808080",
                            backgroundColor: "#808080",
                            height: 1,
                            border: " 1px solid #808080",
                          }}
                        />
                        <Row className="mb-4">
                          <Col sm={3}>
                            <IntlMessages id="courseEnd" />
                          </Col>
                          <Col sm={4}>
                            <CardText style={{ fontSize: 18 }}>
                              {this.state.courseEndDate}
                            </CardText>
                          </Col>
                        </Row>
                        <hr
                          style={{
                            color: "#808080",
                            backgroundColor: "#808080",
                            height: 1,
                            border: " 1px solid #808080",
                          }}
                        />
                        <Row className="mb-4">
                          <Col sm={3}>
                            <IntlMessages id="lateral" />
                          </Col>
                          <Col sm={4}>
                            <CardText style={{ fontSize: 18 }}>
                              {this.state.lateral ? "Yes" : "NA"}
                            </CardText>
                          </Col>
                        </Row>
                        <hr
                          style={{
                            color: "#808080",
                            backgroundColor: "#808080",
                            height: 1,
                            border: " 1px solid #808080",
                          }}
                        />
                        <Row className="mb-4">
                          <Col sm={3}>
                            <IntlMessages id="uniID" />
                          </Col>
                          <Col sm={4}>
                            <CardText style={{ fontSize: 18 }}>
                              {this.state.uniID}
                            </CardText>
                          </Col>
                        </Row>
                        <hr
                          style={{
                            color: "#808080",
                            backgroundColor: "#808080",
                            height: 1,
                            border: " 1px solid #808080",
                          }}
                        />
                        <Row className="mb-4">
                          <Col sm={3}>
                            <IntlMessages id="sem1" />
                          </Col>
                          <Col sm={4}>
                            <CardText style={{ fontSize: 18 }}>
                              {!this.state.sem1[0] ? "*" : this.state.sem1[0]}
                            </CardText>
                          </Col>
                        </Row>
                        <hr
                          style={{
                            color: "#808080",
                            backgroundColor: "#808080",
                            height: 1,
                            border: " 1px solid #808080",
                          }}
                        />
                        <Row className="mb-4">
                          <Col sm={3}>
                            <IntlMessages id="sem2" />
                          </Col>
                          <Col sm={4}>
                            <CardText style={{ fontSize: 18 }}>
                              {!this.state.sem2[0] ? "*" : this.state.sem2[0]}
                            </CardText>
                          </Col>
                        </Row>
                        <hr
                          style={{
                            color: "#808080",
                            backgroundColor: "#808080",
                            height: 1,
                            border: " 1px solid #808080",
                          }}
                        />
                        <Row className="mb-4">
                          <Col sm={3}>
                            <IntlMessages id="sem3" />
                          </Col>
                          <Col sm={4}>
                            <CardText style={{ fontSize: 18 }}>
                              {!this.state.sem2[0] ? "*" : this.state.sem2[0]}
                            </CardText>
                          </Col>
                        </Row>
                        <hr
                          style={{
                            color: "#808080",
                            backgroundColor: "#808080",
                            height: 1,
                            border: " 1px solid #808080",
                          }}
                        />
                        <Row className="mb-4">
                          <Col sm={3}>
                            <IntlMessages id="sem4" />
                          </Col>
                          <Col sm={4}>
                            <CardText style={{ fontSize: 18 }}>
                              {!this.state.sem4[0] ? "*" : this.state.sem4[0]}
                            </CardText>
                          </Col>
                        </Row>
                        <hr
                          style={{
                            color: "#808080",
                            backgroundColor: "#808080",
                            height: 1,
                            border: " 1px solid #808080",
                          }}
                        />
                        <Row className="mb-4">
                          <Col sm={3}>
                            <IntlMessages id="sem5" />
                          </Col>
                          <Col sm={4}>
                            <CardText style={{ fontSize: 18 }}>
                              {!this.state.sem5[0] ? "*" : this.state.sem5[0]}
                            </CardText>
                          </Col>
                        </Row>
                        <hr
                          style={{
                            color: "#808080",
                            backgroundColor: "#808080",
                            height: 1,
                            border: " 1px solid #808080",
                          }}
                        />
                        <Row className="mb-4">
                          <Col sm={3}>
                            <IntlMessages id="sem6" />
                          </Col>
                          <Col sm={4}>
                            <CardText style={{ fontSize: 18 }}>
                              {!this.state.sem6[0] ? "*" : this.state.sem6[0]}
                            </CardText>
                          </Col>
                        </Row>
                        <hr
                          style={{
                            color: "#808080",
                            backgroundColor: "#808080",
                            height: 1,
                            border: " 1px solid #808080",
                          }}
                        />
                        <Row className="mb-4">
                          <Col sm={3}>
                            <IntlMessages id="sem7" />
                          </Col>
                          <Col sm={4}>
                            <CardText style={{ fontSize: 18 }}>
                              {!this.state.sem7[0] ? "*" : this.state.sem7[0]}
                            </CardText>
                          </Col>
                        </Row>
                        <hr
                          style={{
                            color: "#808080",
                            backgroundColor: "#808080",
                            height: 1,
                            border: " 1px solid #808080",
                          }}
                        />
                        <Row className="mb-4">
                          <Col sm={3}>
                            <IntlMessages id="sem8" />
                          </Col>
                          <Col sm={4}>
                            <CardText style={{ fontSize: 18 }}>
                              {!this.state.sem8[0] ? "*" : this.state.sem8[0]}
                            </CardText>
                          </Col>
                        </Row>
                      </CardBody>
                    </Colxx>
                  </Row>
                </CardBody>
              </div>
            </Card>
            <Card className="d-flex flex-row mb-4">
              <div className=" d-flex flex-grow-1 min-width-zero ">
                <CardBody
                  style={{ fontSize: 18 }}
                  className=" pl-0 align-self-center mr-5 ml-5 flex-column flex-md-row justify-content-between min-width-zero"
                >
                  <Row>
                    <Colxx xxs="12">
                      <Col className="offset-11">
                        {" "}
                        <i
                          style={{ cursor: "pointer" }}
                          className="simple-icon-plus "
                          onClick={this.toggleF}
                        >
                          {" "}
                          Add
                        </i>
                      </Col>
                      <Col style={{ fontSize: 24 }} className="mb-5">
                        <IntlMessages id="preEduDetails" />
                        <hr
                          style={{
                            color: "#808080",
                            backgroundColor: "#808080",
                            height: 1,
                            border: " 1px solid #808080",
                          }}
                        />
                      </Col>
                      {this.state.previousEducation
                        ? this.state.previousEducation.map((edu) => (
                            <div
                              key={edu._id}
                              className=" d-flex flex-grow-1 min-width-zero "
                            >
                              <CardBody
                                style={{ fontSize: 18 }}
                                className=" pl-0 align-self-center mr-5 ml-5 flex-column flex-md-row justify-content-between min-width-zero"
                              >
                                <Row>
                                  <Colxx xxs="12">
                                    <Col className="offset-11">
                                      {" "}
                                      <i
                                        style={{ cursor: "pointer" }}
                                        className="simple-icon-trash "
                                        onClick={() => {
                                          var t = window.confirm(
                                            "Do you want to delete it?"
                                          );
                                          if (t === true) {
                                            setTimeout(() => {
                                              fetch("/students/delete/preEdu", {
                                                method: "post",
                                                headers: {
                                                  "Content-Type":
                                                    "application/json",
                                                  Authorization:
                                                    "Bearer " +
                                                    sessionStorage.getItem(
                                                      "token"
                                                    ),
                                                },
                                                body: JSON.stringify({
                                                  id: edu,
                                                }),
                                              })
                                                .then((res) => res.json())
                                                .then((data) => {
                                                  if (data.error) {
                                                    console.log(data.error);
                                                  } else {
                                                    const v = this.state.previousEducation.filter(
                                                      (exp1) =>
                                                        exp1._id !== edu._id
                                                    );
                                                    this.setState({
                                                      previousEducation: v,
                                                    });
                                                    alert(
                                                      data.message +
                                                        "Deleted Successfully"
                                                    );
                                                  }
                                                });
                                            }, 500);
                                          }
                                        }}
                                      >
                                        {" "}
                                        Delete
                                      </i>
                                    </Col>

                                    <CardBody>
                                      <Row className="mb-4">
                                        <Col sm={3}>
                                          <IntlMessages id="school/institute" />
                                        </Col>
                                        <Col sm={4}>
                                          <CardText style={{ fontSize: 18 }}>
                                            {edu.school}
                                          </CardText>
                                        </Col>
                                      </Row>
                                      <hr
                                        style={{
                                          color: "#808080",
                                          backgroundColor: "#808080",
                                          height: 1,
                                          border: " 1px solid #808080",
                                        }}
                                      />
                                      <Row className="mb-4">
                                        <Col sm={3}>
                                          <IntlMessages id="board/university" />
                                        </Col>
                                        <Col sm={4}>
                                          <CardText style={{ fontSize: 18 }}>
                                            {edu.board}
                                          </CardText>
                                        </Col>
                                      </Row>
                                      <hr
                                        style={{
                                          color: "#808080",
                                          backgroundColor: "#808080",
                                          height: 1,
                                          border: " 1px solid #808080",
                                        }}
                                      />
                                      <Row className="mb-4">
                                        <Col sm={3}>
                                          <IntlMessages id="program" />
                                        </Col>
                                        <Col sm={4}>
                                          <CardText style={{ fontSize: 18 }}>
                                            {edu.program}
                                          </CardText>
                                        </Col>
                                      </Row>
                                      <hr
                                        style={{
                                          color: "#808080",
                                          backgroundColor: "#808080",
                                          height: 1,
                                          border: " 1px solid #808080",
                                        }}
                                      />
                                      <Row className="mb-4">
                                        <Col sm={3}>
                                          <IntlMessages id="specialisation" />
                                        </Col>
                                        <Col sm={4}>
                                          <CardText style={{ fontSize: 18 }}>
                                            {edu.branch}
                                          </CardText>
                                        </Col>
                                      </Row>
                                      <hr
                                        style={{
                                          color: "#808080",
                                          backgroundColor: "#808080",
                                          height: 1,
                                          border: " 1px solid #808080",
                                        }}
                                      />
                                      <Row className="mb-4">
                                        <Col sm={3}>
                                          <IntlMessages id="duration" />
                                        </Col>
                                        <Col sm={2}>
                                          <CardText style={{ fontSize: 18 }}>
                                            {edu.durationFrom}
                                          </CardText>
                                        </Col>
                                        <Col sm={1}>
                                          <IntlMessages id="to" />
                                        </Col>
                                        <Col sm={2}>
                                          <CardText style={{ fontSize: 18 }}>
                                            {edu.durationTo}
                                          </CardText>
                                        </Col>
                                      </Row>
                                    </CardBody>
                                  </Colxx>
                                </Row>
                              </CardBody>
                            </div>
                          ))
                        : null}
                      {this.state.addEdu.map((comp) => comp)}

                      <FormF
                        open={this.state.modalF}
                        toggle={this.toggleF}
                        formEvent={this.formF}
                        addEdu={this.addEdu}
                      />
                    </Colxx>
                  </Row>
                </CardBody>
              </div>
            </Card>
            <Card className="d-flex flex-row mb-4">
              <div className=" d-flex flex-grow-1 min-width-zero ">
                <CardBody
                  style={{ fontSize: 18 }}
                  className=" pl-0 align-self-center mr-5 ml-5 flex-column flex-md-row justify-content-between min-width-zero"
                >
                  <Row>
                    <Colxx xxs="12">
                      <Col className="offset-11">
                        {" "}
                        <i
                          style={{ cursor: "pointer" }}
                          className="simple-icon-plus "
                          onClick={this.toggleG}
                        >
                          {" "}
                          Add
                        </i>
                      </Col>
                      <Col className="mb-5" style={{ fontSize: 24 }}>
                        <IntlMessages id="addExp" />
                        <hr
                          style={{
                            color: "#808080",
                            backgroundColor: "#808080",
                            height: 1,
                            border: " 1px solid #808080",
                          }}
                        />
                      </Col>
                      {this.state.experience
                        ? this.state.experience.map((exp) => (
                            <div
                              key={exp._id}
                              className=" d-flex flex-grow-1 min-width-zero "
                            >
                              <CardBody
                                style={{ fontSize: 18 }}
                                className=" pl-0 align-self-center mr-5 ml-5 flex-column flex-md-row justify-content-between min-width-zero"
                              >
                                <Row>
                                  <Colxx xxs="12">
                                    <Col className="offset-11">
                                      {" "}
                                      <i
                                        style={{ cursor: "pointer" }}
                                        className="simple-icon-trash "
                                        onClick={() => {
                                          var t = window.confirm(
                                            "Do you want to delete it?"
                                          );
                                          if (t === true) {
                                            setTimeout(() => {
                                              fetch(
                                                "/students/delete/experience",
                                                {
                                                  method: "post",
                                                  headers: {
                                                    "Content-Type":
                                                      "application/json",
                                                    Authorization:
                                                      "Bearer " +
                                                      sessionStorage.getItem(
                                                        "token"
                                                      ),
                                                  },
                                                  body: JSON.stringify({
                                                    id: exp,
                                                  }),
                                                }
                                              )
                                                .then((res) => res.json())
                                                .then((data) => {
                                                  if (data.error) {
                                                    console.log(data.error);
                                                  } else {
                                                    const v = this.state.experience.filter(
                                                      (exp1) =>
                                                        exp1._id !== exp._id
                                                    );
                                                    this.setState({
                                                      experience: v,
                                                    });
                                                    alert(
                                                      data.message +
                                                        "Deleted Successfully"
                                                    );
                                                  }
                                                });
                                            }, 500);
                                          }
                                        }}
                                      >
                                        {" "}
                                        Delete
                                      </i>
                                    </Col>
                                    <CardTitle className="mb-10 "></CardTitle>
                                    <CardBody>
                                      <Row className="mb-4">
                                        <Col sm={3}>
                                          <IntlMessages id="company" />
                                        </Col>
                                        <Col sm={4}>
                                          <CardText style={{ fontSize: 18 }}>
                                            {exp.company}
                                          </CardText>
                                        </Col>
                                      </Row>
                                      <hr
                                        style={{
                                          color: "#808080",
                                          backgroundColor: "#808080",
                                          height: 1,
                                          border: " 1px solid #808080",
                                        }}
                                      />
                                      <Row className="mb-4">
                                        <Col sm={3}>
                                          <IntlMessages id="jobTitle" />
                                        </Col>
                                        <Col sm={4}>
                                          <CardText style={{ fontSize: 18 }}>
                                            {exp.jobTitle}
                                          </CardText>
                                        </Col>
                                      </Row>
                                      <hr
                                        style={{
                                          color: "#808080",
                                          backgroundColor: "#808080",
                                          height: 1,
                                          border: " 1px solid #808080",
                                        }}
                                      />
                                      <Row className="mb-4">
                                        <Col sm={3}>
                                          <IntlMessages id="location" />
                                        </Col>
                                        <Col sm={4}>
                                          <CardText style={{ fontSize: 18 }}>
                                            {exp.location}
                                          </CardText>
                                        </Col>
                                      </Row>
                                      <hr
                                        style={{
                                          color: "#808080",
                                          backgroundColor: "#808080",
                                          height: 1,
                                          border: " 1px solid #808080",
                                        }}
                                      />
                                      <Row className="mb-4">
                                        <Col sm={3}>
                                          <IntlMessages id="positionType" />
                                        </Col>
                                        <Col sm={4}>
                                          <CardText style={{ fontSize: 18 }}>
                                            {exp.positionType}
                                          </CardText>
                                        </Col>
                                      </Row>
                                      <hr
                                        style={{
                                          color: "#808080",
                                          backgroundColor: "#808080",
                                          height: 1,
                                          border: " 1px solid #808080",
                                        }}
                                      />
                                      <Row className="mb-4">
                                        <Col sm={3}>
                                          <IntlMessages id="jobFn" />
                                        </Col>
                                        <Col sm={4}>
                                          <CardText style={{ fontSize: 18 }}>
                                            {exp.jobFunction}
                                          </CardText>
                                        </Col>
                                      </Row>
                                      <hr
                                        style={{
                                          color: "#808080",
                                          backgroundColor: "#808080",
                                          height: 1,
                                          border: " 1px solid #808080",
                                        }}
                                      />
                                      <Row className="mb-4">
                                        <Col sm={3}>
                                          <IntlMessages id="companySector" />
                                        </Col>
                                        <Col sm={4}>
                                          <CardText style={{ fontSize: 18 }}>
                                            {exp.companySector}
                                          </CardText>
                                        </Col>
                                      </Row>
                                      <hr
                                        style={{
                                          color: "#808080",
                                          backgroundColor: "#808080",
                                          height: 1,
                                          border: " 1px solid #808080",
                                        }}
                                      />
                                      <Row className="mb-4">
                                        <Col sm={3}>
                                          <IntlMessages id="timePeriod" />
                                        </Col>
                                        <Col sm={2}>
                                          <CardText style={{ fontSize: 18 }}>
                                            {exp.timeFrom}
                                          </CardText>
                                        </Col>
                                        <Col sm={1}>
                                          <IntlMessages id="to" />
                                        </Col>
                                        <Col sm={2}>
                                          <CardText style={{ fontSize: 18 }}>
                                            {exp.timeTo}
                                          </CardText>
                                        </Col>
                                      </Row>
                                      <hr
                                        style={{
                                          color: "#808080",
                                          backgroundColor: "#808080",
                                          height: 1,
                                          border: " 1px solid #808080",
                                        }}
                                      />
                                      {exp.current === "Yes" ? (
                                        <Row className="mb-4">
                                          <Col sm={3}>
                                            <IntlMessages id="currentWorking" />
                                          </Col>
                                          <Col sm={4}>
                                            <CardText style={{ fontSize: 18 }}>
                                              {exp.current}
                                            </CardText>
                                          </Col>
                                          <hr
                                            style={{
                                              color: "#808080",
                                              backgroundColor: "#808080",
                                              height: 1,
                                              border: " 1px solid #808080",
                                            }}
                                          />
                                        </Row>
                                      ) : null}
                                      <Row className="mb-4">
                                        <Col sm={3}>
                                          <IntlMessages id="details" />
                                        </Col>
                                        <Col sm={4}>
                                          <CardText style={{ fontSize: 18 }}>
                                            {exp.details}
                                          </CardText>
                                        </Col>
                                      </Row>
                                    </CardBody>
                                  </Colxx>
                                </Row>
                              </CardBody>
                            </div>
                          ))
                        : null}
                      {this.state.addExp.map((comp) => comp)}
                      <FormG
                        open={this.state.modalG}
                        toggle={this.toggleG}
                        formEvent={this.formG}
                        addExp={this.addExp}
                      />
                    </Colxx>
                  </Row>
                </CardBody>
              </div>
            </Card>
            <Card className="d-flex flex-row mb-4">
              <div className=" d-flex flex-grow-1 min-width-zero ">
                <CardBody
                  style={{ fontSize: 18 }}
                  className=" pl-0 align-self-center mr-5 ml-5 flex-column flex-md-row justify-content-between min-width-zero"
                >
                  <Row>
                    <Colxx xxs="12">
                      <Col className="offset-11">
                        {" "}
                        <i
                          style={{ cursor: "pointer" }}
                          className="simple-icon-plus "
                          onClick={this.toggleSkill}
                        >
                          {" "}
                          Add
                        </i>
                      </Col>
                      <Col style={{ fontSize: 24 }} className="mb-5">
                        <IntlMessages id="addNewSkill" />
                        <hr
                          style={{
                            color: "#808080",
                            backgroundColor: "#808080",
                            height: 1,
                            border: " 1px solid #808080",
                          }}
                        />
                      </Col>
                      {this.state.skills
                        ? this.state.skills.map((skill) => (
                            <Row>
                              <Colxx xxs="12">
                                <CardBody>
                                  <Row className="mb-4">
                                    <Col sm={4}>
                                      <CardText style={{ fontSize: 18 }}>
                                        {skill.skill}
                                      </CardText>
                                    </Col>
                                    <Col sm={3}>
                                      <CardText style={{ fontSize: 18 }}>
                                        {skill.proficiency}
                                      </CardText>
                                    </Col>
                                    <Col
                                      sm={{ offset: 2, size: 2 }}
                                      className="justify-content-between"
                                    >
                                      <i
                                        className="simple-icon-pencil"
                                        style={{ cursor: "pointer" }}
                                      ></i>

                                      <i
                                        className="iconsminds-pen "
                                        style={{ cursor: "pointer" }}
                                      ></i>

                                      <i
                                        className="simple-icon-trash"
                                        style={{ cursor: "pointer" }}
                                        onClick={() => {
                                          var t = window.confirm(
                                            "Do you want to delete it?"
                                          );
                                          if (t === true) {
                                            setTimeout(() => {
                                              fetch("/students/delete/skill", {
                                                method: "post",
                                                headers: {
                                                  "Content-Type":
                                                    "application/json",
                                                  Authorization:
                                                    "Bearer " +
                                                    sessionStorage.getItem(
                                                      "token"
                                                    ),
                                                },
                                                body: JSON.stringify({
                                                  id: skill,
                                                }),
                                              })
                                                .then((res) => res.json())
                                                .then((data) => {
                                                  if (data.error) {
                                                    console.log(data.error);
                                                  } else {
                                                    const v = this.state.skill.filter(
                                                      (exp1) =>
                                                        exp1._id !== skill._id
                                                    );
                                                    this.setState({
                                                      skills: v,
                                                    });
                                                    alert(
                                                      data.message +
                                                        "Deleted Successfully"
                                                    );
                                                  }
                                                });
                                            }, 500);
                                          }
                                        }}
                                      ></i>
                                    </Col>
                                  </Row>

                                  <hr
                                    style={{
                                      color: "#808080",
                                      backgroundColor: "#808080",
                                      height: 1,
                                      border: " 1px solid #808080",
                                    }}
                                  />
                                </CardBody>
                              </Colxx>
                            </Row>
                          ))
                        : null}
                      {this.state.addSkill.map((comp) => comp)}

                      <FormSkill
                        open={this.state.modalSkill}
                        toggle={this.toggleSkill}
                        formEvent={this.formSkill}
                        addSkill={this.addSkill}
                      />
                    </Colxx>
                  </Row>
                </CardBody>
              </div>
            </Card>
            <Card className="d-flex flex-row mb-4">
              <div className=" d-flex flex-grow-1 min-width-zero ">
                <CardBody
                  style={{ fontSize: 18 }}
                  className=" pl-0 align-self-center mr-5 ml-5 flex-column flex-md-row justify-content-between min-width-zero"
                >
                  <Row>
                    <Colxx xxs="12">
                      <Col className="offset-11">
                        {" "}
                        <i
                          style={{ cursor: "pointer" }}
                          className="simple-icon-plus "
                          onClick={this.togglePosOfRes}
                        >
                          {" "}
                          Add
                        </i>
                      </Col>
                      <Col style={{ fontSize: 24 }} className="mb-5">
                        <IntlMessages id="addPosition" />
                        <hr
                          style={{
                            color: "#808080",
                            backgroundColor: "#808080",
                            height: 1,
                            border: " 1px solid #808080",
                          }}
                        />
                      </Col>
                      {this.state.position
                        ? this.state.position.map((pos) => (
                            <CardBody
                              style={{ fontSize: 18 }}
                              className=" pl-0 align-self-center mr-5 ml-5 flex-column flex-md-row justify-content-between min-width-zero"
                            >
                              <Row>
                                <Colxx xxs="12">
                                  <Col className="offset-11">
                                    {" "}
                                    <i
                                      style={{ cursor: "pointer" }}
                                      className="simple-icon-trash "
                                      onClick={() => {
                                        var t = window.confirm(
                                          "Do you want to delete it?"
                                        );
                                        if (t === true) {
                                          setTimeout(() => {
                                            fetch("/students/delete/position", {
                                              method: "post",
                                              headers: {
                                                "Content-Type":
                                                  "application/json",
                                                Authorization:
                                                  "Bearer " +
                                                  sessionStorage.getItem("token"),
                                              },
                                              body: JSON.stringify({
                                                id: pos,
                                              }),
                                            })
                                              .then((res) => res.json())
                                              .then((data) => {
                                                if (data.error) {
                                                  console.log(data.error);
                                                } else {
                                                  const v = this.state.position.filter(
                                                    (exp1) =>
                                                      exp1._id !== pos._id
                                                  );
                                                  this.setState({
                                                    position: v,
                                                  });
                                                  alert(
                                                    data.message +
                                                      "Deleted Successfully"
                                                  );
                                                }
                                              });
                                          }, 500);
                                        }
                                      }}
                                    >
                                      {" "}
                                      Delete
                                    </i>
                                  </Col>

                                  <CardBody>
                                    <Row className="mb-4">
                                      <Col sm={3}>
                                        <IntlMessages id="title" />
                                      </Col>
                                      <Col sm={4}>
                                        <CardText style={{ fontSize: 18 }}>
                                          {pos.title}
                                        </CardText>
                                      </Col>
                                    </Row>
                                    <hr
                                      style={{
                                        color: "#808080",
                                        backgroundColor: "#808080",
                                        height: 1,
                                        border: " 1px solid #808080",
                                      }}
                                    />
                                    <Row className="mb-4">
                                      <Col sm={3}>
                                        <IntlMessages id="orgName" />
                                      </Col>
                                      <Col sm={4}>
                                        <CardText style={{ fontSize: 18 }}>
                                          {pos.orgName}
                                        </CardText>
                                      </Col>
                                    </Row>
                                    <hr
                                      style={{
                                        color: "#808080",
                                        backgroundColor: "#808080",
                                        height: 1,
                                        border: " 1px solid #808080",
                                      }}
                                    />
                                    <Row className="mb-4">
                                      <Col sm={3}>
                                        <IntlMessages id="startDate" />
                                      </Col>
                                      <Col sm={4}>
                                        <CardText style={{ fontSize: 18 }}>
                                          {pos.startDate}
                                        </CardText>
                                      </Col>
                                    </Row>
                                    <hr
                                      style={{
                                        color: "#808080",
                                        backgroundColor: "#808080",
                                        height: 1,
                                        border: " 1px solid #808080",
                                      }}
                                    />
                                    <Row className="mb-4">
                                      <Col sm={3}>
                                        <IntlMessages id="endDate" />
                                      </Col>
                                      <Col sm={4}>
                                        <CardText style={{ fontSize: 18 }}>
                                          {pos.endDate}
                                        </CardText>
                                      </Col>
                                    </Row>
                                    <hr
                                      style={{
                                        color: "#808080",
                                        backgroundColor: "#808080",
                                        height: 1,
                                        border: " 1px solid #808080",
                                      }}
                                    />
                                    {pos.currentHold === "No" ? null : (
                                      <Row className="mb-4">
                                        <Col sm={3}>
                                          <IntlMessages id="currentHold" />
                                        </Col>
                                        <Col sm={4}>
                                          <CardText style={{ fontSize: 18 }}>
                                            {pos.current}
                                          </CardText>
                                        </Col>
                                        <hr
                                          style={{
                                            color: "#808080",
                                            backgroundColor: "#808080",
                                            height: 1,
                                            border: " 1px solid #808080",
                                          }}
                                        />
                                      </Row>
                                    )}
                                    <Row className="mb-4">
                                      <Col sm={3}>
                                        <IntlMessages id="description" />
                                      </Col>
                                      <Col sm={4}>
                                        <CardText style={{ fontSize: 18 }}>
                                          {pos.description}
                                        </CardText>
                                      </Col>
                                    </Row>
                                  </CardBody>
                                </Colxx>
                              </Row>
                            </CardBody>
                          ))
                        : null}
                      {this.state.addPosition.map((comp) => comp)}

                      <FormPositionOfRes
                        open={this.state.modalPosOfRes}
                        toggle={this.togglePosOfRes}
                        formEvent={this.formPosOfRes}
                        addPosition={this.addPosOfRes}
                      />
                    </Colxx>
                  </Row>
                </CardBody>
              </div>
            </Card>
            <Card className="d-flex flex-row mb-4">
              <div className=" d-flex flex-grow-1 min-width-zero ">
                <CardBody
                  style={{ fontSize: 18 }}
                  className=" pl-0 align-self-center mr-5 ml-5 flex-column flex-md-row justify-content-between min-width-zero"
                >
                  <Row>
                    <Colxx xxs="12">
                      <Col className="offset-11">
                        {" "}
                        <i
                          style={{ cursor: "pointer" }}
                          className="simple-icon-plus "
                          onClick={this.toggleProject}
                        >
                          {" "}
                          Add
                        </i>
                      </Col>
                      <Col style={{ fontSize: 24 }} className="mb-5">
                        <IntlMessages id="addProjects" />
                        <hr
                          style={{
                            color: "#808080",
                            backgroundColor: "#808080",
                            height: 1,
                            border: " 1px solid #808080",
                          }}
                        />
                      </Col>
                      {this.state.projects
                        ? this.state.projects.map((pro) => (
                            <CardBody
                              style={{ fontSize: 18 }}
                              className=" pl-0 align-self-center mr-5 ml-5 flex-column flex-md-row justify-content-between min-width-zero"
                            >
                              <Row>
                                <Colxx xxs="12">
                                  <Col className="offset-11">
                                    {" "}
                                    <i
                                      style={{ cursor: "pointer" }}
                                      className="simple-icon-trash "
                                      onClick={() => {
                                        var t = window.confirm(
                                          "Do you want to delete it?"
                                        );
                                        if (t === true) {
                                          setTimeout(() => {
                                            fetch("/students/delete/projects", {
                                              method: "post",
                                              headers: {
                                                "Content-Type":
                                                  "application/json",
                                                Authorization:
                                                  "Bearer " +
                                                  sessionStorage.getItem("token"),
                                              },
                                              body: JSON.stringify({
                                                id: pro,
                                              }),
                                            })
                                              .then((res) => res.json())
                                              .then((data) => {
                                                if (data.error) {
                                                  console.log(data.error);
                                                } else {
                                                  const v = this.state.projects.filter(
                                                    (exp1) =>
                                                      exp1._id !== pro._id
                                                  );
                                                  this.setState({
                                                    projects: v,
                                                  });
                                                  alert(
                                                    data.message +
                                                      "Deleted Successfully"
                                                  );
                                                }
                                              });
                                          }, 500);
                                        }
                                      }}
                                    >
                                      {" "}
                                      Delete
                                    </i>
                                  </Col>

                                  <CardBody>
                                    <Row className="mb-4">
                                      <Col sm={3}>
                                        <IntlMessages id="proTitle" />
                                      </Col>
                                      <Col sm={4}>
                                        <CardText style={{ fontSize: 18 }}>
                                          {pro.title}
                                        </CardText>
                                      </Col>
                                    </Row>
                                    <hr
                                      style={{
                                        color: "#808080",
                                        backgroundColor: "#808080",
                                        height: 1,
                                        border: " 1px solid #808080",
                                      }}
                                    />
                                    <Row className="mb-4">
                                      <Col sm={3}>
                                        <IntlMessages id="proDomain" />
                                      </Col>
                                      <Col sm={4}>
                                        <CardText style={{ fontSize: 18 }}>
                                          {pro.domain}
                                        </CardText>
                                      </Col>
                                    </Row>
                                    <hr
                                      style={{
                                        color: "#808080",
                                        backgroundColor: "#808080",
                                        height: 1,
                                        border: " 1px solid #808080",
                                      }}
                                    />
                                    <Row className="mb-4">
                                      <Col sm={3}>
                                        <IntlMessages id="startDate" />
                                      </Col>
                                      <Col sm={4}>
                                        <CardText style={{ fontSize: 18 }}>
                                          {pro.startDate}
                                        </CardText>
                                      </Col>
                                    </Row>
                                    <hr
                                      style={{
                                        color: "#808080",
                                        backgroundColor: "#808080",
                                        height: 1,
                                        border: " 1px solid #808080",
                                      }}
                                    />
                                    <Row className="mb-4">
                                      <Col sm={3}>
                                        <IntlMessages id="endDate" />
                                      </Col>
                                      <Col sm={4}>
                                        <CardText style={{ fontSize: 18 }}>
                                          {pro.endDate}
                                        </CardText>
                                      </Col>
                                    </Row>
                                    <hr
                                      style={{
                                        color: "#808080",
                                        backgroundColor: "#808080",
                                        height: 1,
                                        border: " 1px solid #808080",
                                      }}
                                    />
                                    {pro.current === "No" ? null : (
                                      <Row className="mb-4">
                                        <Col sm={3}>
                                          <IntlMessages id="currentProject" />
                                        </Col>
                                        <Col sm={4}>
                                          <CardText style={{ fontSize: 18 }}>
                                            {pro.current}
                                          </CardText>
                                        </Col>
                                        <hr
                                          style={{
                                            color: "#808080",
                                            backgroundColor: "#808080",
                                            height: 1,
                                            border: " 1px solid #808080",
                                          }}
                                        />
                                      </Row>
                                    )}
                                    <Row className="mb-4">
                                      <Col sm={3}>
                                        <IntlMessages id="associatedWith" />
                                      </Col>
                                      <Col sm={4}>
                                        <CardText style={{ fontSize: 18 }}>
                                          {pro.associatedWith}
                                        </CardText>
                                      </Col>
                                    </Row>
                                    <hr
                                      style={{
                                        color: "#808080",
                                        backgroundColor: "#808080",
                                        height: 1,
                                        border: " 1px solid #808080",
                                      }}
                                    />
                                    <Row className="mb-4">
                                      <Col sm={3}>
                                        <IntlMessages id="description" />
                                      </Col>
                                      <Col sm={4}>
                                        <CardText style={{ fontSize: 18 }}>
                                          {pro.projectDescription}
                                        </CardText>
                                      </Col>
                                    </Row>
                                  </CardBody>
                                </Colxx>
                              </Row>
                            </CardBody>
                          ))
                        : null}
                      {this.state.addProject.map((comp) => comp)}

                      <FormProject
                        open={this.state.modalProject}
                        toggle={this.toggleProject}
                        formEvent={this.formProject}
                        addProject={this.addProject}
                      />
                    </Colxx>
                  </Row>
                </CardBody>
              </div>
            </Card>
            <Card className="d-flex flex-row mb-4">
              <div className=" d-flex flex-grow-1 min-width-zero ">
                <CardBody
                  style={{ fontSize: 18 }}
                  className=" pl-0 align-self-center mr-5 ml-5 flex-column flex-md-row justify-content-between min-width-zero"
                >
                  <Row>
                    <Colxx xxs="12">
                      <Col className="offset-11">
                        {" "}
                        <i
                          style={{ cursor: "pointer" }}
                          className="simple-icon-plus "
                          onClick={this.toggleSubject}
                        >
                          {" "}
                          Add
                        </i>
                      </Col>
                      <Col style={{ fontSize: 24 }} className="mb-5">
                        <IntlMessages id="addSubject" />
                        <hr
                          style={{
                            color: "#808080",
                            backgroundColor: "#808080",
                            height: 1,
                            border: " 1px solid #808080",
                          }}
                        />
                      </Col>
                      {this.state.subjects
                        ? this.state.subjects.map((sub) => (
                            <CardBody
                              style={{ fontSize: 18 }}
                              className=" pl-0 align-self-center mr-5 ml-5 flex-column flex-md-row justify-content-between min-width-zero"
                            >
                              <Row>
                                <Colxx xxs="12">
                                  <Col className="offset-11">
                                    {" "}
                                    <i
                                      style={{ cursor: "pointer" }}
                                      className="simple-icon-trash "
                                      onClick={() => {
                                        var t = window.confirm(
                                          "Do you want to delete it?"
                                        );
                                        if (t === true) {
                                          setTimeout(() => {
                                            fetch("/students/delete/subjects", {
                                              method: "post",
                                              headers: {
                                                "Content-Type":
                                                  "application/json",
                                                Authorization:
                                                  "Bearer " +
                                                  sessionStorage.getItem("token"),
                                              },
                                              body: JSON.stringify({
                                                id: sub,
                                              }),
                                            })
                                              .then((res) => res.json())
                                              .then((data) => {
                                                if (data.error) {
                                                  console.log(data.error);
                                                } else {
                                                  const v = this.state.subjects.filter(
                                                    (exp1) =>
                                                      exp1._id !== sub._id
                                                  );
                                                  this.setState({
                                                    subjects: v,
                                                  });
                                                  alert(
                                                    data.message +
                                                      "Deleted Successfully"
                                                  );
                                                }
                                              });
                                          }, 500);
                                        }
                                      }}
                                    >
                                      {" "}
                                      Delete
                                    </i>
                                  </Col>

                                  <CardBody>
                                    <Row className="mb-4">
                                      <Col sm={3}>
                                        <IntlMessages id="subjectName" />
                                      </Col>
                                      <Col sm={4}>
                                        <CardText style={{ fontSize: 18 }}>
                                          {sub.name}
                                        </CardText>
                                      </Col>
                                    </Row>
                                    <hr
                                      style={{
                                        color: "#808080",
                                        backgroundColor: "#808080",
                                        height: 1,
                                        border: " 1px solid #808080",
                                      }}
                                    />
                                    <Row className="mb-4">
                                      <Col sm={3}>
                                        <IntlMessages id="associatedWith" />
                                      </Col>
                                      <Col sm={4}>
                                        <CardText style={{ fontSize: 18 }}>
                                          {sub.associatedWith}
                                        </CardText>
                                      </Col>
                                    </Row>
                                  </CardBody>
                                </Colxx>
                              </Row>
                            </CardBody>
                          ))
                        : null}
                      {this.state.addSubject.map((comp) => comp)}

                      <FormSubject
                        open={this.state.modalSubject}
                        toggle={this.toggleSubject}
                        formEvent={this.formSubject}
                        addSubject={this.addSubject}
                        college={this.state.collegeName}
                        school={this.state.school}
                      />
                    </Colxx>
                  </Row>
                </CardBody>
              </div>
            </Card>
            <Card className="d-flex flex-row mb-4">
              <div className=" d-flex flex-grow-1 min-width-zero ">
                <CardBody
                  style={{ fontSize: 18 }}
                  className=" pl-0 align-self-center mr-5 ml-5 flex-column flex-md-row justify-content-between min-width-zero"
                >
                  <Row>
                    <Colxx xxs="12">
                      <Col className="offset-11">
                        {" "}
                        <i
                          style={{ cursor: "pointer" }}
                          className="simple-icon-plus "
                          onClick={this.toggleLanguage}
                        >
                          {" "}
                          Add
                        </i>
                      </Col>
                      <Col style={{ fontSize: 24 }} className="mb-5">
                        <IntlMessages id="addLanguage" />
                        <hr
                          style={{
                            color: "#808080",
                            backgroundColor: "#808080",
                            height: 1,
                            border: " 1px solid #808080",
                          }}
                        />
                      </Col>
                      {this.state.languages
                        ? this.state.languages.map((lan) => (
                            <CardBody
                              style={{ fontSize: 18 }}
                              className=" pl-0 align-self-center mr-5 ml-5 flex-column flex-md-row justify-content-between min-width-zero"
                            >
                              <Row>
                                <Colxx xxs="12">
                                  <Col className="offset-11">
                                    {" "}
                                    <i
                                      style={{ cursor: "pointer" }}
                                      className="simple-icon-trash "
                                      onClick={() => {
                                        var t = window.confirm(
                                          "Do you want to delete it?"
                                        );
                                        if (t === true) {
                                          setTimeout(() => {
                                            fetch("/students/delete/language", {
                                              method: "post",
                                              headers: {
                                                "Content-Type":
                                                  "application/json",
                                                Authorization:
                                                  "Bearer " +
                                                  sessionStorage.getItem("token"),
                                              },
                                              body: JSON.stringify({
                                                id: lan,
                                              }),
                                            })
                                              .then((res) => res.json())
                                              .then((data) => {
                                                if (data.error) {
                                                  console.log(data.error);
                                                } else {
                                                  const v = this.state.languages.filter(
                                                    (exp1) =>
                                                      exp1._id !== lan._id
                                                  );
                                                  this.setState({
                                                    languages: v,
                                                  });
                                                  alert(
                                                    data.message +
                                                      "Deleted Successfully"
                                                  );
                                                }
                                              });
                                          }, 500);
                                        }
                                      }}
                                    >
                                      {" "}
                                      Delete
                                    </i>
                                  </Col>

                                  <CardBody>
                                    <Row className="mb-4">
                                      <Col sm={3}>
                                        <IntlMessages id="language" />
                                      </Col>
                                      <Col sm={4}>
                                        <CardText style={{ fontSize: 18 }}>
                                          {lan.language}
                                        </CardText>
                                      </Col>
                                    </Row>
                                    <hr
                                      style={{
                                        color: "#808080",
                                        backgroundColor: "#808080",
                                        height: 1,
                                        border: " 1px solid #808080",
                                      }}
                                    />
                                    <Row className="mb-4">
                                      <Col sm={3}>
                                        <IntlMessages id="proficiency" />
                                      </Col>
                                      <Col sm={4}>
                                        <CardText style={{ fontSize: 18 }}>
                                          {lan.proficiency}
                                        </CardText>
                                      </Col>
                                    </Row>
                                  </CardBody>
                                </Colxx>
                              </Row>
                            </CardBody>
                          ))
                        : null}
                      {this.state.addLanguage.map((comp) => comp)}

                      <FormLanguage
                        open={this.state.modalLanguage}
                        toggle={this.toggleLanguage}
                        formEvent={this.formLanguage}
                        addLanguage={this.addLanguage}
                      />
                    </Colxx>
                  </Row>
                </CardBody>
              </div>
            </Card>
            <Card className="d-flex flex-row mb-4">
              <div className=" d-flex flex-grow-1 min-width-zero ">
                <CardBody
                  style={{ fontSize: 18 }}
                  className=" pl-0 align-self-center mr-5 ml-5 flex-column flex-md-row justify-content-between min-width-zero"
                >
                  <Row>
                    <Colxx xxs="12">
                      <Col className="offset-11">
                        {" "}
                        <i
                          style={{ cursor: "pointer" }}
                          className="simple-icon-plus "
                          onClick={this.toggleAward}
                        >
                          {" "}
                          Add
                        </i>
                      </Col>
                      <Col className="mb-5" style={{ fontSize: 24 }}>
                        <IntlMessages id="award" />
                        <hr
                          style={{
                            color: "#808080",
                            backgroundColor: "#808080",
                            height: 1,
                            border: " 1px solid #808080",
                          }}
                        />
                      </Col>
                      {this.state.awards
                        ? this.state.awards.map((award) => (
                            <CardBody
                              style={{ fontSize: 18 }}
                              className=" pl-0 align-self-center mr-5 ml-5 flex-column flex-md-row justify-content-between min-width-zero"
                            >
                              <Row>
                                <Colxx xxs="12">
                                  <Col className="offset-11">
                                    {" "}
                                    <i
                                      style={{ cursor: "pointer" }}
                                      className="simple-icon-trash "
                                      onClick={() => {
                                        var t = window.confirm(
                                          "Do you want to delete it?"
                                        );
                                        if (t === true) {
                                          setTimeout(() => {
                                            fetch("/students/delete/award", {
                                              method: "post",
                                              headers: {
                                                "Content-Type":
                                                  "application/json",
                                                Authorization:
                                                  "Bearer " +
                                                  sessionStorage.getItem("token"),
                                              },
                                              body: JSON.stringify({
                                                id: award,
                                              }),
                                            })
                                              .then((res) => res.json())
                                              .then((data) => {
                                                if (data.error) {
                                                  console.log(data.error);
                                                } else {
                                                  const v = this.state.awards.filter(
                                                    (exp1) =>
                                                      exp1._id !== award._id
                                                  );
                                                  this.setState({
                                                    awards: v,
                                                  });
                                                  alert(
                                                    data.message +
                                                      "Deleted Successfully"
                                                  );
                                                }
                                              });
                                          }, 500);
                                        }
                                      }}
                                    >
                                      {" "}
                                      Delete
                                    </i>
                                  </Col>

                                  <CardBody>
                                    <Row className="mb-4">
                                      <Col sm={3}>
                                        <IntlMessages id="title" />
                                      </Col>
                                      <Col sm={4}>
                                        <CardText style={{ fontSize: 18 }}>
                                          {award.title}
                                        </CardText>
                                      </Col>
                                    </Row>
                                    <hr
                                      style={{
                                        color: "#808080",
                                        backgroundColor: "#808080",
                                        height: 1,
                                        border: " 1px solid #808080",
                                      }}
                                    />
                                    <Row className="mb-4">
                                      <Col sm={3}>
                                        <IntlMessages id="issuer" />
                                      </Col>
                                      <Col sm={4}>
                                        <CardText style={{ fontSize: 18 }}>
                                          {award.organizer}
                                        </CardText>
                                      </Col>
                                    </Row>
                                    <hr
                                      style={{
                                        color: "#808080",
                                        backgroundColor: "#808080",
                                        height: 1,
                                        border: " 1px solid #808080",
                                      }}
                                    />
                                    <Row className="mb-4">
                                      <Col sm={3}>
                                        <IntlMessages id="issueDate" />
                                      </Col>
                                      <Col sm={4}>
                                        <CardText style={{ fontSize: 18 }}>
                                          {award.issueDate}
                                        </CardText>
                                      </Col>
                                    </Row>
                                    <hr
                                      style={{
                                        color: "#808080",
                                        backgroundColor: "#808080",
                                        height: 1,
                                        border: " 1px solid #808080",
                                      }}
                                    />
                                    <Row className="mb-4">
                                      <Col sm={3}>
                                        <IntlMessages id="associatedWith" />
                                      </Col>
                                      <Col sm={4}>
                                        <CardText style={{ fontSize: 18 }}>
                                          {award.associatedWith}
                                        </CardText>
                                      </Col>
                                    </Row>
                                    <hr
                                      style={{
                                        color: "#808080",
                                        backgroundColor: "#808080",
                                        height: 1,
                                        border: " 1px solid #808080",
                                      }}
                                    />
                                    <Row className="mb-4">
                                      <Col sm={3}>
                                        <IntlMessages id="description" />
                                      </Col>
                                      <Col sm={4}>
                                        <CardText style={{ fontSize: 18 }}>
                                          {award.description}
                                        </CardText>
                                      </Col>
                                    </Row>
                                  </CardBody>
                                </Colxx>
                              </Row>
                            </CardBody>
                          ))
                        : null}
                      {this.state.addAward.map((comp) => comp)}

                      <FormAward
                        open={this.state.modalAward}
                        toggle={this.toggleAward}
                        formEvent={this.formAward}
                        addAward={this.addAward}
                        college={this.state.collegeName}
                        school={this.state.school}
                      />
                    </Colxx>
                  </Row>
                </CardBody>
              </div>
            </Card>
            <Card className="d-flex flex-row mb-4">
              <div className=" d-flex flex-grow-1 min-width-zero ">
                <CardBody
                  style={{ fontSize: 18 }}
                  className=" pl-0 align-self-center mr-5 ml-5 flex-column flex-md-row justify-content-between min-width-zero"
                >
                  <Row>
                    <Colxx xxs="12">
                      <Col className="offset-11">
                        {" "}
                        <i
                          style={{ cursor: "pointer" }}
                          className="simple-icon-plus "
                          onClick={this.toggleCerti}
                        >
                          {" "}
                          Add
                        </i>
                      </Col>
                      <Col style={{ fontSize: 24 }} className="mb-5">
                        <IntlMessages id="certification" />
                        <hr
                          style={{
                            color: "#808080",
                            backgroundColor: "#808080",
                            height: 1,
                            border: " 1px solid #808080",
                          }}
                        />
                      </Col>
                      {this.state.certification
                        ? this.state.certification.map((certi) => (
                            <CardBody
                              style={{ fontSize: 18 }}
                              className=" pl-0 align-self-center mr-5 ml-5 flex-column flex-md-row justify-content-between min-width-zero"
                            >
                              <Row>
                                <Colxx xxs="12">
                                  <Col className="offset-11">
                                    {" "}
                                    <i
                                      style={{ cursor: "pointer" }}
                                      className="simple-icon-trash "
                                      onClick={() => {
                                        var t = window.confirm(
                                          "Do you want to delete it?"
                                        );
                                        if (t === true) {
                                          setTimeout(() => {
                                            fetch(
                                              "/students/delete/certificate",
                                              {
                                                method: "post",
                                                headers: {
                                                  "Content-Type":
                                                    "application/json",
                                                  Authorization:
                                                    "Bearer " +
                                                    sessionStorage.getItem(
                                                      "token"
                                                    ),
                                                },
                                                body: JSON.stringify({
                                                  id: certi,
                                                }),
                                              }
                                            )
                                              .then((res) => res.json())
                                              .then((data) => {
                                                if (data.error) {
                                                  console.log(data.error);
                                                } else {
                                                  const v = this.state.certification.filter(
                                                    (exp1) =>
                                                      exp1._id !== certi._id
                                                  );
                                                  this.setState({
                                                    certification: v,
                                                  });
                                                  alert(
                                                    data.message +
                                                      "Deleted Successfully"
                                                  );
                                                }
                                              });
                                          }, 500);
                                        }
                                      }}
                                    >
                                      {" "}
                                      Delete
                                    </i>
                                  </Col>

                                  <CardBody>
                                    <Row className="mb-4">
                                      <Col sm={3}>
                                        <IntlMessages id="name" />
                                      </Col>
                                      <Col sm={4}>
                                        <CardText style={{ fontSize: 18 }}>
                                          {certi.name}
                                        </CardText>
                                      </Col>
                                    </Row>
                                    <hr
                                      style={{
                                        color: "#808080",
                                        backgroundColor: "#808080",
                                        height: 1,
                                        border: " 1px solid #808080",
                                      }}
                                    />
                                    <Row className="mb-4">
                                      <Col sm={3}>
                                        <IntlMessages id="issuingAuth" />
                                      </Col>
                                      <Col sm={4}>
                                        <CardText style={{ fontSize: 18 }}>
                                          {certi.issuingAuthority}
                                        </CardText>
                                      </Col>
                                    </Row>
                                    <hr
                                      style={{
                                        color: "#808080",
                                        backgroundColor: "#808080",
                                        height: 1,
                                        border: " 1px solid #808080",
                                      }}
                                    />
                                    <Row className="mb-4">
                                      <Col sm={3}>
                                        <IntlMessages id="certiUrl" />
                                      </Col>
                                      <Col sm={4}>
                                        <a href={certi.certificateURL}>
                                          {certi.certificateURL}
                                        </a>
                                      </Col>
                                    </Row>
                                    <hr
                                      style={{
                                        color: "#808080",
                                        backgroundColor: "#808080",
                                        height: 1,
                                        border: " 1px solid #808080",
                                      }}
                                    />
                                    <Row className="mb-4">
                                      <Col sm={3}>
                                        <IntlMessages id="certiDate" />
                                      </Col>
                                      <Col sm={4}>
                                        <CardText style={{ fontSize: 18 }}>
                                          {certi.certificateDate}
                                        </CardText>
                                      </Col>
                                    </Row>
                                    <hr
                                      style={{
                                        color: "#808080",
                                        backgroundColor: "#808080",
                                        height: 1,
                                        border: " 1px solid #808080",
                                      }}
                                    />
                                    <Row className="mb-4">
                                      <Col sm={3}>
                                        <IntlMessages id="licNo" />
                                      </Col>
                                      <Col sm={4}>
                                        <CardText style={{ fontSize: 18 }}>
                                          {certi.licenceNo}
                                        </CardText>
                                      </Col>
                                    </Row>
                                    <hr
                                      style={{
                                        color: "#808080",
                                        backgroundColor: "#808080",
                                        height: 1,
                                        border: " 1px solid #808080",
                                      }}
                                    />
                                    {certi.certiExpiry === "No" ? null : (
                                      <Row className="mb-4">
                                        <Col sm={3}>
                                          <IntlMessages id="certiExpiry" />
                                        </Col>
                                        <Col sm={4}>
                                          <CardText style={{ fontSize: 18 }}>
                                            {certi.certificateExpiry}
                                          </CardText>
                                        </Col>
                                        <hr
                                          style={{
                                            color: "#808080",
                                            backgroundColor: "#808080",
                                            height: 1,
                                            border: " 1px solid #808080",
                                          }}
                                        />
                                      </Row>
                                    )}
                                    <Row className="mb-4">
                                      <Col sm={3}>
                                        <IntlMessages id="description" />
                                      </Col>
                                      <Col sm={4}>
                                        <CardText style={{ fontSize: 18 }}>
                                          {certi.description}
                                        </CardText>
                                      </Col>
                                    </Row>
                                  </CardBody>
                                </Colxx>
                              </Row>
                            </CardBody>
                          ))
                        : null}
                      {this.state.addCertification.map((comp) => comp)}

                      <FormCertificate
                        open={this.state.modalCerti}
                        toggle={this.toggleCerti}
                        formEvent={this.formCerti}
                        addCertification={this.addCertification}
                      />
                    </Colxx>
                  </Row>
                </CardBody>
              </div>
            </Card>
            <Card className="d-flex flex-row mb-4">
              <div className=" d-flex flex-grow-1 min-width-zero ">
                <CardBody
                  style={{ fontSize: 18 }}
                  className=" pl-0 align-self-center mr-5 ml-5 flex-column flex-md-row justify-content-between min-width-zero"
                >
                  <Row>
                    <Colxx xxs="12">
                      <Col className="offset-11">
                        {" "}
                        <i
                          style={{ cursor: "pointer" }}
                          className="simple-icon-plus "
                          onClick={this.toggleCompetition}
                        >
                          {" "}
                          Add
                        </i>
                      </Col>
                      <Col style={{ fontSize: 24 }} className="mb-5">
                        <IntlMessages id="competition" />
                        <hr
                          style={{
                            color: "#808080",
                            backgroundColor: "#808080",
                            height: 1,
                            border: " 1px solid #808080",
                          }}
                        />
                      </Col>

                      {this.state.competitions
                        ? this.state.competitions.map((comp) => (
                            <CardBody
                              style={{ fontSize: 18 }}
                              className=" pl-0 align-self-center mr-5 ml-5 flex-column flex-md-row justify-content-between min-width-zero"
                            >
                              <Row>
                                <Colxx xxs="12">
                                  <Col className="offset-11">
                                    {" "}
                                    <i
                                      style={{ cursor: "pointer" }}
                                      className="simple-icon-trash "
                                      onClick={() => {
                                        var t = window.confirm(
                                          "Do you want to delete it?"
                                        );
                                        if (t === true) {
                                          setTimeout(() => {
                                            fetch(
                                              "/students/delete/competition",
                                              {
                                                method: "post",
                                                headers: {
                                                  "Content-Type":
                                                    "application/json",
                                                  Authorization:
                                                    "Bearer " +
                                                    sessionStorage.getItem(
                                                      "token"
                                                    ),
                                                },
                                                body: JSON.stringify({
                                                  id: comp,
                                                }),
                                              }
                                            )
                                              .then((res) => res.json())
                                              .then((data) => {
                                                if (data.error) {
                                                  console.log(data.error);
                                                } else {
                                                  const v = this.state.competitions.filter(
                                                    (exp1) =>
                                                      exp1._id !== comp._id
                                                  );
                                                  this.setState({
                                                    competitions: v,
                                                  });
                                                  alert(
                                                    data.message +
                                                      "Deleted Successfully"
                                                  );
                                                }
                                              });
                                          }, 500);
                                        }
                                      }}
                                    >
                                      {" "}
                                      Delete
                                    </i>
                                  </Col>

                                  <CardBody>
                                    <Row className="mb-4">
                                      <Col sm={3}>
                                        <IntlMessages id="title" />
                                      </Col>
                                      <Col sm={4}>
                                        <CardText style={{ fontSize: 18 }}>
                                          {comp.title}
                                        </CardText>
                                      </Col>
                                    </Row>
                                    <hr
                                      style={{
                                        color: "#808080",
                                        backgroundColor: "#808080",
                                        height: 1,
                                        border: " 1px solid #808080",
                                      }}
                                    />
                                    <Row className="mb-4">
                                      <Col sm={3}>
                                        <IntlMessages id="position" />
                                      </Col>
                                      <Col sm={4}>
                                        <CardText style={{ fontSize: 18 }}>
                                          {comp.position}
                                        </CardText>
                                      </Col>
                                    </Row>
                                    <hr
                                      style={{
                                        color: "#808080",
                                        backgroundColor: "#808080",
                                        height: 1,
                                        border: " 1px solid #808080",
                                      }}
                                    />
                                    <Row className="mb-4">
                                      <Col sm={3}>
                                        <IntlMessages id="competDate" />
                                      </Col>
                                      <Col sm={4}>
                                        <CardText style={{ fontSize: 18 }}>
                                          {comp.competitionDate}
                                        </CardText>
                                      </Col>
                                    </Row>
                                    <hr
                                      style={{
                                        color: "#808080",
                                        backgroundColor: "#808080",
                                        height: 1,
                                        border: " 1px solid #808080",
                                      }}
                                    />
                                    <Row className="mb-4">
                                      <Col sm={3}>
                                        <IntlMessages id="associatedWith" />
                                      </Col>
                                      <Col sm={4}>
                                        <CardText style={{ fontSize: 18 }}>
                                          {comp.associatedWith}
                                        </CardText>
                                      </Col>
                                    </Row>
                                    <hr
                                      style={{
                                        color: "#808080",
                                        backgroundColor: "#808080",
                                        height: 1,
                                        border: " 1px solid #808080",
                                      }}
                                    />
                                    <Row className="mb-4">
                                      <Col sm={3}>
                                        <IntlMessages id="description" />
                                      </Col>
                                      <Col sm={4}>
                                        <CardText style={{ fontSize: 18 }}>
                                          {comp.description}
                                        </CardText>
                                      </Col>
                                    </Row>
                                  </CardBody>
                                </Colxx>
                              </Row>
                            </CardBody>
                          ))
                        : null}
                      {this.state.addCompetition.map((comp) => comp)}

                      <FormCompetition
                        open={this.state.modalCompetition}
                        toggle={this.toggleCompetition}
                        formEvent={this.formCompetition}
                        addCompetition={this.addCompetition}
                        college={this.state.collegeName}
                        school={this.state.school}
                      />
                    </Colxx>
                  </Row>
                </CardBody>
              </div>
            </Card>
            <Card className="d-flex flex-row mb-4">
              <div className=" d-flex flex-grow-1 min-width-zero ">
                <CardBody
                  style={{ fontSize: 18 }}
                  className=" pl-0 align-self-center mr-5 ml-5 flex-column flex-md-row justify-content-between min-width-zero"
                >
                  <Row>
                    <Colxx xxs="12">
                      <Col className="offset-11">
                        {" "}
                        <i
                          style={{ cursor: "pointer" }}
                          className="simple-icon-plus "
                          onClick={this.toggleWorkshop}
                        >
                          {" "}
                          Add
                        </i>
                      </Col>
                      <Col style={{ fontSize: 24 }} className="mb-5">
                        <IntlMessages id="workshop" />
                        <hr
                          style={{
                            color: "#808080",
                            backgroundColor: "#808080",
                            height: 1,
                            border: " 1px solid #808080",
                          }}
                        />
                      </Col>
                      {this.state.conferences
                        ? this.state.conferences.map((conf) => (
                            <CardBody
                              style={{ fontSize: 18 }}
                              className=" pl-0 align-self-center mr-5 ml-5 flex-column flex-md-row justify-content-between min-width-zero"
                            >
                              <Row>
                                <Colxx xxs="12">
                                  <Col className="offset-11">
                                    {" "}
                                    <i
                                      style={{ cursor: "pointer" }}
                                      className="simple-icon-trash "
                                      onClick={() => {
                                        var t = window.confirm(
                                          "Do you want to delete it?"
                                        );
                                        if (t === true) {
                                          setTimeout(() => {
                                            fetch(
                                              "/students/delete/workshops",
                                              {
                                                method: "post",
                                                headers: {
                                                  "Content-Type":
                                                    "application/json",
                                                  Authorization:
                                                    "Bearer " +
                                                    sessionStorage.getItem(
                                                      "token"
                                                    ),
                                                },
                                                body: JSON.stringify({
                                                  id: conf,
                                                }),
                                              }
                                            )
                                              .then((res) => res.json())
                                              .then((data) => {
                                                if (data.error) {
                                                  console.log(data.error);
                                                } else {
                                                  const v = this.state.position.filter(
                                                    (exp1) =>
                                                      exp1._id !== conf._id
                                                  );
                                                  this.setState({
                                                    position: v,
                                                  });
                                                  alert(
                                                    data.message +
                                                      "Deleted Successfully"
                                                  );
                                                }
                                              });
                                          }, 500);
                                        }
                                      }}
                                    >
                                      {" "}
                                      Delete
                                    </i>
                                  </Col>

                                  <CardBody>
                                    <Row className="mb-4">
                                      <Col sm={3}>
                                        <IntlMessages id="title" />
                                      </Col>
                                      <Col sm={4}>
                                        <CardText style={{ fontSize: 18 }}>
                                          {conf.title}
                                        </CardText>
                                      </Col>
                                    </Row>
                                    <hr
                                      style={{
                                        color: "#808080",
                                        backgroundColor: "#808080",
                                        height: 1,
                                        border: " 1px solid #808080",
                                      }}
                                    />
                                    <Row className="mb-4">
                                      <Col sm={3}>
                                        <IntlMessages id="organizer" />
                                      </Col>
                                      <Col sm={4}>
                                        <CardText style={{ fontSize: 18 }}>
                                          {conf.organizer}
                                        </CardText>
                                      </Col>
                                    </Row>
                                    <hr
                                      style={{
                                        color: "#808080",
                                        backgroundColor: "#808080",
                                        height: 1,
                                        border: " 1px solid #808080",
                                      }}
                                    />
                                    <Row className="mb-4">
                                      <Col sm={3}>
                                        <IntlMessages id="eventDate" />
                                      </Col>
                                      <Col sm={4}>
                                        <CardText style={{ fontSize: 18 }}>
                                          {conf.eventDate}
                                        </CardText>
                                      </Col>
                                    </Row>
                                    <hr
                                      style={{
                                        color: "#808080",
                                        backgroundColor: "#808080",
                                        height: 1,
                                        border: " 1px solid #808080",
                                      }}
                                    />
                                    <Row className="mb-4">
                                      <Col sm={3}>
                                        <IntlMessages id="address" />
                                      </Col>
                                      <Col sm={4}>
                                        <CardText style={{ fontSize: 18 }}>
                                          {conf.address}
                                        </CardText>
                                      </Col>
                                    </Row>
                                    <hr
                                      style={{
                                        color: "#808080",
                                        backgroundColor: "#808080",
                                        height: 1,
                                        border: " 1px solid #808080",
                                      }}
                                    />
                                    <Row className="mb-4">
                                      <Col sm={3}>
                                        <IntlMessages id="description" />
                                      </Col>
                                      <Col sm={4}>
                                        <CardText style={{ fontSize: 18 }}>
                                          {conf.description}
                                        </CardText>
                                      </Col>
                                    </Row>
                                  </CardBody>
                                </Colxx>
                              </Row>
                            </CardBody>
                          ))
                        : null}
                      {this.state.addWorkshop.map((comp) => comp)}

                      <FormWorkShop
                        open={this.state.modalWorkshop}
                        toggle={this.toggleWorkshop}
                        formEvent={this.formWorkshop}
                        addWorkshop={this.addWorkshop}
                      />
                    </Colxx>
                  </Row>
                </CardBody>
              </div>
            </Card>
            <Card className="d-flex flex-row mb-4">
              <div className=" d-flex flex-grow-1 min-width-zero ">
                <CardBody
                  style={{ fontSize: 18 }}
                  className=" pl-0 align-self-center mr-5 ml-5 flex-column flex-md-row justify-content-between min-width-zero"
                >
                  <Row>
                    <Colxx xxs="12">
                      <Col className="offset-11">
                        {" "}
                        <i
                          style={{ cursor: "pointer" }}
                          className="simple-icon-plus "
                          onClick={this.toggleTest}
                        >
                          {" "}
                          Add
                        </i>
                      </Col>
                      <Col style={{ fontSize: 24 }} className="mb-5">
                        <IntlMessages id="test" />
                        <hr
                          style={{
                            color: "#808080",
                            backgroundColor: "#808080",
                            height: 1,
                            border: " 1px solid #808080",
                          }}
                        />
                      </Col>
                      {this.state.test
                        ? this.state.test.map((tes) => (
                            <CardBody
                              style={{ fontSize: 18 }}
                              className=" pl-0 align-self-center mr-5 ml-5 flex-column flex-md-row justify-content-between min-width-zero"
                            >
                              <Row>
                                <Colxx xxs="12">
                                  <Col className="offset-11">
                                    {" "}
                                    <i
                                      style={{ cursor: "pointer" }}
                                      className="simple-icon-trash "
                                      onClick={() => {
                                        var t = window.confirm(
                                          "Do you want to delete it?"
                                        );
                                        if (t === true) {
                                          setTimeout(() => {
                                            fetch("/students/delete/test", {
                                              method: "post",
                                              headers: {
                                                "Content-Type":
                                                  "application/json",
                                                Authorization:
                                                  "Bearer " +
                                                  sessionStorage.getItem("token"),
                                              },
                                              body: JSON.stringify({
                                                id: tes,
                                              }),
                                            })
                                              .then((res) => res.json())
                                              .then((data) => {
                                                if (data.error) {
                                                  console.log(data.error);
                                                } else {
                                                  const v = this.state.test.filter(
                                                    (exp1) =>
                                                      exp1._id !== tes._id
                                                  );
                                                  this.setState({
                                                    test: v,
                                                  });
                                                  alert(
                                                    data.message +
                                                      "Deleted Successfully"
                                                  );
                                                }
                                              });
                                          }, 500);
                                        }
                                      }}
                                    >
                                      {" "}
                                      Edit
                                    </i>
                                  </Col>

                                  <CardBody>
                                    <Row className="mb-4">
                                      <Col sm={3}>
                                        <IntlMessages id="title" />
                                      </Col>
                                      <Col sm={4}>
                                        <CardText style={{ fontSize: 18 }}>
                                          {tes.title}
                                        </CardText>
                                      </Col>
                                    </Row>
                                    <hr
                                      style={{
                                        color: "#808080",
                                        backgroundColor: "#808080",
                                        height: 1,
                                        border: " 1px solid #808080",
                                      }}
                                    />
                                    <Row className="mb-4">
                                      <Col sm={3}>
                                        <IntlMessages id="marks" />
                                      </Col>
                                      <Col sm={4}>
                                        <CardText style={{ fontSize: 18 }}>
                                          {tes.chooseOne}
                                        </CardText>
                                      </Col>
                                    </Row>
                                    <hr
                                      style={{
                                        color: "#808080",
                                        backgroundColor: "#808080",
                                        height: 1,
                                        border: " 1px solid #808080",
                                      }}
                                    />
                                    <Row className="mb-4">
                                      <Col sm={3}>
                                        <IntlMessages id="scoreObtn" />
                                      </Col>
                                      <Col sm={4}>
                                        <CardText style={{ fontSize: 18 }}>
                                          {tes.scoreObtn}
                                        </CardText>
                                      </Col>
                                    </Row>
                                    <hr
                                      style={{
                                        color: "#808080",
                                        backgroundColor: "#808080",
                                        height: 1,
                                        border: " 1px solid #808080",
                                      }}
                                    />
                                    <Row className="mb-4">
                                      <Col sm={3}>
                                        <IntlMessages id="totScore" />
                                      </Col>
                                      <Col sm={4}>
                                        <CardText style={{ fontSize: 18 }}>
                                          {tes.scoreTot}
                                        </CardText>
                                      </Col>
                                    </Row>
                                    <hr
                                      style={{
                                        color: "#808080",
                                        backgroundColor: "#808080",
                                        height: 1,
                                        border: " 1px solid #808080",
                                      }}
                                    />
                                    <Row className="mb-4">
                                      <Col sm={3}>
                                        <IntlMessages id="examDate" />
                                      </Col>
                                      <Col sm={4}>
                                        <CardText style={{ fontSize: 18 }}>
                                          {tes.examDate}
                                        </CardText>
                                      </Col>
                                    </Row>
                                    <hr
                                      style={{
                                        color: "#808080",
                                        backgroundColor: "#808080",
                                        height: 1,
                                        border: " 1px solid #808080",
                                      }}
                                    />
                                    <Row className="mb-4">
                                      <Col sm={3}>
                                        <IntlMessages id="associatedWith" />
                                      </Col>
                                      <Col sm={4}>
                                        <CardText style={{ fontSize: 18 }}>
                                          {tes.associatedWith}
                                        </CardText>
                                      </Col>
                                    </Row>
                                    <hr
                                      style={{
                                        color: "#808080",
                                        backgroundColor: "#808080",
                                        height: 1,
                                        border: " 1px solid #808080",
                                      }}
                                    />
                                    <Row className="mb-4">
                                      <Col sm={3}>
                                        <IntlMessages id="description" />
                                      </Col>
                                      <Col sm={4}>
                                        <CardText style={{ fontSize: 18 }}>
                                          {tes.description}
                                        </CardText>
                                      </Col>
                                    </Row>
                                  </CardBody>
                                </Colxx>
                              </Row>
                            </CardBody>
                          ))
                        : null}
                      {this.state.addTest.map((comp) => comp)}

                      <FormTest
                        open={this.state.modalTest}
                        toggle={this.toggleTest}
                        formEvent={this.formTest}
                        addTest={this.addTest}
                        college={this.state.collegeName}
                        school={this.state.school}
                      />
                    </Colxx>
                  </Row>
                </CardBody>
              </div>
            </Card>
            <Card className="d-flex flex-row mb-4">
              <div className=" d-flex flex-grow-1 min-width-zero ">
                <CardBody
                  style={{ fontSize: 18 }}
                  className=" pl-0 align-self-center mr-5 ml-5 flex-column flex-md-row justify-content-between min-width-zero"
                >
                  <Row>
                    <Colxx xxs="12">
                      <Col className="offset-11">
                        {" "}
                        <i
                          style={{ cursor: "pointer" }}
                          className="simple-icon-plus "
                          onClick={this.togglePatent}
                        >
                          {" "}
                          Add
                        </i>
                      </Col>
                      <Col style={{ fontSize: 24 }} className="mb-5">
                        <IntlMessages id="patent" />
                        <hr
                          style={{
                            color: "#808080",
                            backgroundColor: "#808080",
                            height: 1,
                            border: " 1px solid #808080",
                          }}
                        />
                      </Col>
                      {this.state.patent
                        ? this.state.patent.map((pat) => (
                            <CardBody
                              style={{ fontSize: 18 }}
                              className=" pl-0 align-self-center mr-5 ml-5 flex-column flex-md-row justify-content-between min-width-zero"
                            >
                              <Row>
                                <Colxx xxs="12">
                                  <Col className="offset-11">
                                    {" "}
                                    <i
                                      style={{ cursor: "pointer" }}
                                      className="simple-icon-trash "
                                      onClick={() => {
                                        var t = window.confirm(
                                          "Do you want to delete it?"
                                        );
                                        if (t === true) {
                                          setTimeout(() => {
                                            fetch("/students/delete/patent", {
                                              method: "post",
                                              headers: {
                                                "Content-Type":
                                                  "application/json",
                                                Authorization:
                                                  "Bearer " +
                                                  sessionStorage.getItem("token"),
                                              },
                                              body: JSON.stringify({
                                                id: pat,
                                              }),
                                            })
                                              .then((res) => res.json())
                                              .then((data) => {
                                                if (data.error) {
                                                  console.log(data.error);
                                                } else {
                                                  const v = this.state.patent.filter(
                                                    (exp1) =>
                                                      exp1._id !== pat._id
                                                  );
                                                  this.setState({
                                                    patent: v,
                                                  });
                                                  alert(
                                                    data.message +
                                                      "Deleted Successfully"
                                                  );
                                                }
                                              });
                                          }, 500);
                                        }
                                      }}
                                    >
                                      {" "}
                                      Edit
                                    </i>
                                  </Col>

                                  <CardBody>
                                    <Row className="mb-4">
                                      <Col sm={3}>
                                        <IntlMessages id="title" />
                                      </Col>
                                      <Col sm={4}>
                                        <CardText style={{ fontSize: 18 }}>
                                          {pat.title}
                                        </CardText>
                                      </Col>
                                    </Row>
                                    <hr
                                      style={{
                                        color: "#808080",
                                        backgroundColor: "#808080",
                                        height: 1,
                                        border: " 1px solid #808080",
                                      }}
                                    />
                                    <Row className="mb-4">
                                      <Col sm={3}>
                                        <IntlMessages id="patentOff" />
                                      </Col>
                                      <Col sm={4}>
                                        <CardText style={{ fontSize: 18 }}>
                                          {pat.patentOffice}
                                        </CardText>
                                      </Col>
                                    </Row>
                                    <hr
                                      style={{
                                        color: "#808080",
                                        backgroundColor: "#808080",
                                        height: 1,
                                        border: " 1px solid #808080",
                                      }}
                                    />
                                    <Row className="mb-4">
                                      <Col sm={3}>
                                        <IntlMessages id="patentNo" />
                                      </Col>
                                      <Col sm={4}>
                                        <CardText style={{ fontSize: 18 }}>
                                          {pat.patentNo}
                                        </CardText>
                                      </Col>
                                    </Row>
                                    <hr
                                      style={{
                                        color: "#808080",
                                        backgroundColor: "#808080",
                                        height: 1,
                                        border: " 1px solid #808080",
                                      }}
                                    />
                                    <Row className="mb-4">
                                      <Col sm={3}>
                                        <IntlMessages id="patentStatus" />
                                      </Col>
                                      <Col sm={4}>
                                        <CardText style={{ fontSize: 18 }}>
                                          {pat.patentStatus}
                                        </CardText>
                                      </Col>
                                    </Row>
                                    <hr
                                      style={{
                                        color: "#808080",
                                        backgroundColor: "#808080",
                                        height: 1,
                                        border: " 1px solid #808080",
                                      }}
                                    />
                                    <Row className="mb-4">
                                      <Col sm={3}>
                                        <IntlMessages id="patentDate" />
                                      </Col>
                                      <Col sm={4}>
                                        <CardText style={{ fontSize: 18 }}>
                                          {pat.dateOfIssue}
                                        </CardText>
                                      </Col>
                                    </Row>
                                    <hr
                                      style={{
                                        color: "#808080",
                                        backgroundColor: "#808080",
                                        height: 1,
                                        border: " 1px solid #808080",
                                      }}
                                    />
                                    <Row className="mb-4">
                                      <Col sm={3}>
                                        <IntlMessages id="description" />
                                      </Col>
                                      <Col sm={4}>
                                        <CardText style={{ fontSize: 18 }}>
                                          {pat.description}
                                        </CardText>
                                      </Col>
                                    </Row>
                                  </CardBody>
                                </Colxx>
                              </Row>
                            </CardBody>
                          ))
                        : null}
                      {this.state.addPatent.map((comp) => comp)}

                      <FormPatent
                        open={this.state.modalPatent}
                        toggle={this.togglePatent}
                        formEvent={this.formPatent}
                        addPatent={this.addPatent}
                      />
                    </Colxx>
                  </Row>
                </CardBody>
              </div>
            </Card>
            <Card className="d-flex flex-row mb-4">
              <div className=" d-flex flex-grow-1 min-width-zero ">
                <CardBody
                  style={{ fontSize: 18 }}
                  className=" pl-0 align-self-center mr-5 ml-5 flex-column flex-md-row justify-content-between min-width-zero"
                >
                  <Row>
                    <Colxx xxs="12">
                      <Col className="offset-11">
                        {" "}
                        <i
                          style={{ cursor: "pointer" }}
                          className="simple-icon-plus "
                          onClick={this.togglePublication}
                        >
                          {" "}
                          Add
                        </i>
                      </Col>
                      <Col style={{ fontSize: 24 }} className="mb-5">
                        <IntlMessages id="publication" />
                        <hr
                          style={{
                            color: "#808080",
                            backgroundColor: "#808080",
                            height: 1,
                            border: " 1px solid #808080",
                          }}
                        />
                      </Col>

                      {this.state.publications
                        ? this.state.publications.map((pub) => (
                            <CardBody
                              style={{ fontSize: 18 }}
                              className=" pl-0 align-self-center mr-5 ml-5 flex-column flex-md-row justify-content-between min-width-zero"
                            >
                              <Row>
                                <Colxx xxs="12">
                                  <Col className="offset-11">
                                    {" "}
                                    <i
                                      style={{ cursor: "pointer" }}
                                      className="simple-icon-trash "
                                      onClick={() => {
                                        var t = window.confirm(
                                          "Do you want to delete it?"
                                        );
                                        if (t === true) {
                                          setTimeout(() => {
                                            fetch(
                                              "/students/delete/publication",
                                              {
                                                method: "post",
                                                headers: {
                                                  "Content-Type":
                                                    "application/json",
                                                  Authorization:
                                                    "Bearer " +
                                                    sessionStorage.getItem(
                                                      "token"
                                                    ),
                                                },
                                                body: JSON.stringify({
                                                  id: pub,
                                                }),
                                              }
                                            )
                                              .then((res) => res.json())
                                              .then((data) => {
                                                if (data.error) {
                                                  console.log(data.error);
                                                } else {
                                                  const v = this.state.publications.filter(
                                                    (exp1) =>
                                                      exp1._id !== pub._id
                                                  );
                                                  this.setState({
                                                    publications: v,
                                                  });
                                                  alert(
                                                    data.message +
                                                      "Deleted Successfully"
                                                  );
                                                }
                                              });
                                          }, 500);
                                        }
                                      }}
                                    >
                                      {" "}
                                      Edit
                                    </i>
                                  </Col>

                                  <CardBody>
                                    <Row className="mb-4">
                                      <Col sm={3}>
                                        <IntlMessages id="title" />
                                      </Col>
                                      <Col sm={4}>
                                        <CardText style={{ fontSize: 18 }}>
                                          {pub.title}
                                        </CardText>
                                      </Col>
                                    </Row>
                                    <hr
                                      style={{
                                        color: "#808080",
                                        backgroundColor: "#808080",
                                        height: 1,
                                        border: " 1px solid #808080",
                                      }}
                                    />
                                    <Row className="mb-4">
                                      <Col sm={3}>
                                        <IntlMessages id="publication/publisher" />
                                      </Col>
                                      <Col sm={4}>
                                        <CardText style={{ fontSize: 18 }}>
                                          {pub.publisher}
                                        </CardText>
                                      </Col>
                                    </Row>
                                    <hr
                                      style={{
                                        color: "#808080",
                                        backgroundColor: "#808080",
                                        height: 1,
                                        border: " 1px solid #808080",
                                      }}
                                    />
                                    <Row className="mb-4">
                                      <Col sm={3}>
                                        <IntlMessages id="pubDate" />
                                      </Col>
                                      <Col sm={4}>
                                        <CardText style={{ fontSize: 18 }}>
                                          {pub.publicationDate}
                                        </CardText>
                                      </Col>
                                    </Row>
                                    <hr
                                      style={{
                                        color: "#808080",
                                        backgroundColor: "#808080",
                                        height: 1,
                                        border: " 1px solid #808080",
                                      }}
                                    />
                                    <Row className="mb-4">
                                      <Col sm={3}>
                                        <IntlMessages id="pubUrl" />
                                      </Col>
                                      <Col sm={4}>
                                        <CardText style={{ fontSize: 18 }}>
                                          {pub.publicationURL}
                                        </CardText>
                                      </Col>
                                    </Row>
                                    <hr
                                      style={{
                                        color: "#808080",
                                        backgroundColor: "#808080",
                                        height: 1,
                                        border: " 1px solid #808080",
                                      }}
                                    />
                                    <Row className="mb-4">
                                      <Col sm={3}>
                                        <IntlMessages id="description" />
                                      </Col>
                                      <Col sm={4}>
                                        <CardText style={{ fontSize: 18 }}>
                                          {pub.description}
                                        </CardText>
                                      </Col>
                                    </Row>
                                  </CardBody>
                                </Colxx>
                              </Row>
                            </CardBody>
                          ))
                        : null}
                      {this.state.addPublication.map((comp) => comp)}

                      <FormPublication
                        open={this.state.modalPublication}
                        toggle={this.togglePublication}
                        formEvent={this.formPublication}
                        addPublication={this.addPublication}
                      />
                    </Colxx>
                  </Row>
                </CardBody>
              </div>
            </Card>
            <Card className="d-flex flex-row mb-4">
              <div className=" d-flex flex-grow-1 min-width-zero ">
                <CardBody
                  style={{ fontSize: 18 }}
                  className=" pl-0 align-self-center mr-5 ml-5 flex-column flex-md-row justify-content-between min-width-zero"
                >
                  <Row>
                    <Colxx xxs="12">
                      <Col className="offset-11">
                        {" "}
                        <i
                          style={{ cursor: "pointer" }}
                          className="simple-icon-plus "
                          onClick={this.toggleScholar}
                        >
                          {" "}
                          Add
                        </i>
                      </Col>
                      <Col style={{ fontSize: 24 }} className="mb-5">
                        <IntlMessages id="scholarship" />
                        <hr
                          style={{
                            color: "#808080",
                            backgroundColor: "#808080",
                            height: 1,
                            border: " 1px solid #808080",
                          }}
                        />
                      </Col>
                      {this.state.scholarships !== []
                        ? this.state.scholarships.map((scholar) => (
                            <CardBody
                              style={{ fontSize: 18 }}
                              className=" pl-0 align-self-center mr-5 ml-5 flex-column flex-md-row justify-content-between min-width-zero"
                            >
                              <Row>
                                <Colxx xxs="12">
                                  <Col className="offset-11">
                                    {" "}
                                    <i
                                      style={{ cursor: "pointer" }}
                                      className="simple-icon-trash "
                                      onClick={() => {
                                        var t = window.confirm(
                                          "Do you want to delete it?"
                                        );
                                        if (t === true) {
                                          setTimeout(() => {
                                            fetch("/students/delete/scholar", {
                                              method: "post",
                                              headers: {
                                                "Content-Type":
                                                  "application/json",
                                                Authorization:
                                                  "Bearer " +
                                                  sessionStorage.getItem("token"),
                                              },
                                              body: JSON.stringify({
                                                id: scholar,
                                              }),
                                            })
                                              .then((res) => res.json())
                                              .then((data) => {
                                                if (data.error) {
                                                  console.log(data.error);
                                                } else {
                                                  const v = this.state.scholarships.filter(
                                                    (exp1) =>
                                                      exp1._id !== scholar._id
                                                  );
                                                  this.setState({
                                                    scholarships: v,
                                                  });
                                                  alert(
                                                    data.message +
                                                      "Deleted Successfully"
                                                  );
                                                }
                                              });
                                          }, 500);
                                        }
                                      }}
                                    >
                                      {" "}
                                      Delete
                                    </i>
                                  </Col>

                                  <CardBody>
                                    <Row className="mb-4">
                                      <Col sm={3}>
                                        <IntlMessages id="title" />
                                      </Col>
                                      <Col sm={4}>
                                        <CardText style={{ fontSize: 18 }}>
                                          {scholar.title}
                                        </CardText>
                                      </Col>
                                    </Row>
                                    <hr
                                      style={{
                                        color: "#808080",
                                        backgroundColor: "#808080",
                                        height: 1,
                                        border: " 1px solid #808080",
                                      }}
                                    />
                                    <Row className="mb-4">
                                      <Col sm={3}>
                                        <IntlMessages id="grantDate" />
                                      </Col>
                                      <Col sm={4}>
                                        <CardText style={{ fontSize: 18 }}>
                                          {scholar.grantDate}
                                        </CardText>
                                      </Col>
                                    </Row>
                                    <hr
                                      style={{
                                        color: "#808080",
                                        backgroundColor: "#808080",
                                        height: 1,
                                        border: " 1px solid #808080",
                                      }}
                                    />
                                    <Row className="mb-4">
                                      <Col sm={3}>
                                        <IntlMessages id="description" />
                                      </Col>
                                      <Col sm={4}>
                                        <CardText style={{ fontSize: 18 }}>
                                          {scholar.description}
                                        </CardText>
                                      </Col>
                                    </Row>
                                    <hr
                                      style={{
                                        color: "#808080",
                                        backgroundColor: "#808080",
                                        height: 1,
                                        border: " 1px solid #808080",
                                      }}
                                    />
                                    <Row className="mb-4">
                                      <Col sm={3}>
                                        <IntlMessages id="associatedWith" />
                                      </Col>
                                      <Col sm={4}>
                                        <CardText style={{ fontSize: 18 }}>
                                          {scholar.associatedWith}
                                        </CardText>
                                      </Col>
                                    </Row>
                                  </CardBody>
                                </Colxx>
                              </Row>
                            </CardBody>
                          ))
                        : null}
                      {this.state.addScholar.map((comp) => comp)}

                      <FormScholar
                        open={this.state.modalScholar}
                        toggle={this.toggleScholar}
                        formEvent={this.formScholar}
                        addScholar={this.addScholar}
                        college={this.state.collegeName}
                        school={this.state.school}
                      />
                    </Colxx>
                  </Row>
                </CardBody>
              </div>
            </Card>
            <Card className="d-flex flex-row mb-4">
              <div className=" d-flex flex-grow-1 min-width-zero ">
                <CardBody
                  style={{ fontSize: 18 }}
                  className=" pl-0 align-self-center mr-5 ml-5 flex-column flex-md-row justify-content-between min-width-zero"
                >
                  <Row>
                    <Colxx xxs="12">
                      <Col className="offset-11">
                        {" "}
                        <i
                          style={{ cursor: "pointer" }}
                          className="simple-icon-plus "
                          onClick={this.toggleVol}
                        >
                          {" "}
                          Add
                        </i>
                      </Col>
                      <Col style={{ fontSize: 24 }} className="mb-5">
                        <IntlMessages id="volunteer" />
                        <hr
                          style={{
                            color: "#808080",
                            backgroundColor: "#808080",
                            height: 1,
                            border: " 1px solid #808080",
                          }}
                        />
                      </Col>
                      {this.state.volunteer
                        ? this.state.volunteer.map((vol) => (
                            <CardBody
                              style={{ fontSize: 18 }}
                              className=" pl-0 align-self-center mr-5 ml-5 flex-column flex-md-row justify-content-between min-width-zero"
                            >
                              <Row>
                                <Colxx xxs="12">
                                  <Col className="offset-11">
                                    {" "}
                                    <i
                                      style={{ cursor: "pointer" }}
                                      className="simple-icon-trash "
                                      onClick={() => {
                                        var t = window.confirm(
                                          "Do you want to delete it?"
                                        );
                                        if (t === true) {
                                          setTimeout(() => {
                                            fetch(
                                              "/students/delete/volunteer",
                                              {
                                                method: "post",
                                                headers: {
                                                  "Content-Type":
                                                    "application/json",
                                                  Authorization:
                                                    "Bearer " +
                                                    sessionStorage.getItem(
                                                      "token"
                                                    ),
                                                },
                                                body: JSON.stringify({
                                                  id: vol,
                                                }),
                                              }
                                            )
                                              .then((res) => res.json())
                                              .then((data) => {
                                                if (data.error) {
                                                  console.log(data.error);
                                                } else {
                                                  const v = this.state.volunteer.filter(
                                                    (exp1) =>
                                                      exp1._id !== vol._id
                                                  );
                                                  this.setState({
                                                    volunteer: v,
                                                  });
                                                  alert(
                                                    data.message +
                                                      "Deleted Successfully"
                                                  );
                                                }
                                              });
                                          }, 500);
                                        }
                                      }}
                                    >
                                      {" "}
                                      Delete
                                    </i>
                                  </Col>

                                  <CardBody>
                                    <Row className="mb-4">
                                      <Col sm={3}>
                                        <IntlMessages id="org" />
                                      </Col>
                                      <Col sm={4}>
                                        <CardText style={{ fontSize: 18 }}>
                                          {vol.org}
                                        </CardText>
                                      </Col>
                                    </Row>
                                    <hr
                                      style={{
                                        color: "#808080",
                                        backgroundColor: "#808080",
                                        height: 1,
                                        border: " 1px solid #808080",
                                      }}
                                    />
                                    <Row className="mb-4">
                                      <Col sm={3}>
                                        <IntlMessages id="role" />
                                      </Col>
                                      <Col sm={4}>
                                        <CardText style={{ fontSize: 18 }}>
                                          {vol.role}
                                        </CardText>
                                      </Col>
                                    </Row>
                                    <hr
                                      style={{
                                        color: "#808080",
                                        backgroundColor: "#808080",
                                        height: 1,
                                        border: " 1px solid #808080",
                                      }}
                                    />
                                    <Row className="mb-4">
                                      <Col sm={3}>
                                        <IntlMessages id="cause" />
                                      </Col>
                                      <Col sm={4}>
                                        <CardText style={{ fontSize: 18 }}>
                                          {vol.cause}
                                        </CardText>
                                      </Col>
                                    </Row>
                                    <hr
                                      style={{
                                        color: "#808080",
                                        backgroundColor: "#808080",
                                        height: 1,
                                        border: " 1px solid #808080",
                                      }}
                                    />
                                    <Row className="mb-4">
                                      <Col sm={3}>
                                        <IntlMessages id="startDate" />
                                      </Col>
                                      <Col sm={4}>
                                        <CardText style={{ fontSize: 18 }}>
                                          {vol.startDate}
                                        </CardText>
                                      </Col>
                                    </Row>
                                    <hr
                                      style={{
                                        color: "#808080",
                                        backgroundColor: "#808080",
                                        height: 1,
                                        border: " 1px solid #808080",
                                      }}
                                    />
                                    <Row className="mb-4">
                                      <Col sm={3}>
                                        <IntlMessages id="endDate" />
                                      </Col>
                                      <Col sm={4}>
                                        <CardText style={{ fontSize: 18 }}>
                                          {vol.endDate}
                                        </CardText>
                                      </Col>
                                    </Row>
                                    <hr
                                      style={{
                                        color: "#808080",
                                        backgroundColor: "#808080",
                                        height: 1,
                                        border: " 1px solid #808080",
                                      }}
                                    />
                                    <Row className="mb-4">
                                      <Col sm={3}>
                                        <IntlMessages id="currentVol" />
                                      </Col>
                                      <Col sm={4}>
                                        <CardText style={{ fontSize: 18 }}>
                                          {vol.current}
                                        </CardText>
                                      </Col>
                                    </Row>
                                    <hr
                                      style={{
                                        color: "#808080",
                                        backgroundColor: "#808080",
                                        height: 1,
                                        border: " 1px solid #808080",
                                      }}
                                    />
                                    <Row className="mb-4">
                                      <Col sm={3}>
                                        <IntlMessages id="description" />
                                      </Col>
                                      <Col sm={4}>
                                        <CardText style={{ fontSize: 18 }}>
                                          {vol.description}
                                        </CardText>
                                      </Col>
                                    </Row>
                                  </CardBody>
                                </Colxx>
                              </Row>
                            </CardBody>
                          ))
                        : null}
                      {this.state.addVol.map((comp) => comp)}

                      <FormVol
                        open={this.state.modalVol}
                        toggle={this.toggleVol}
                        formEvent={this.formVol}
                        addVol={this.addVol}
                      />
                    </Colxx>
                  </Row>
                </CardBody>
              </div>
            </Card>
            <Card className="d-flex flex-row mb-4">
              <div className=" d-flex flex-grow-1 min-width-zero ">
                <CardBody
                  style={{ fontSize: 18 }}
                  className=" pl-0 align-self-center mr-5 ml-5 flex-column flex-md-row justify-content-between min-width-zero"
                >
                  <Row>
                    <Colxx xxs="12">
                      <Col className="offset-11">
                        {" "}
                        <i
                          style={{ cursor: "pointer" }}
                          className="simple-icon-plus "
                          onClick={this.toggleActivity}
                        >
                          {" "}
                          Add
                        </i>
                      </Col>
                      <Col style={{ fontSize: 24 }} className="mb-5">
                        <IntlMessages id="activity" />
                        <hr
                          style={{
                            color: "#808080",
                            backgroundColor: "#808080",
                            height: 1,
                            border: " 1px solid #808080",
                          }}
                        />
                      </Col>
                      {this.state.activity
                        ? this.state.activity.map((act) => (
                            <CardBody
                              style={{ fontSize: 18 }}
                              className=" pl-0 align-self-center mr-5 ml-5 flex-column flex-md-row justify-content-between min-width-zero"
                            >
                              <Row>
                                <Colxx xxs="12">
                                  <Col className="offset-11">
                                    {" "}
                                    <i
                                      style={{ cursor: "pointer" }}
                                      className="simple-icon-trash "
                                      onClick={() => {
                                        var t = window.confirm(
                                          "Do you want to delete it?"
                                        );
                                        if (t === true) {
                                          setTimeout(() => {
                                            fetch("/students/delete/activity", {
                                              method: "post",
                                              headers: {
                                                "Content-Type":
                                                  "application/json",
                                                Authorization:
                                                  "Bearer " +
                                                  sessionStorage.getItem("token"),
                                              },
                                              body: JSON.stringify({
                                                id: act,
                                              }),
                                            })
                                              .then((res) => res.json())
                                              .then((data) => {
                                                if (data.error) {
                                                  console.log(data.error);
                                                } else {
                                                  const v = this.state.activity.filter(
                                                    (exp1) =>
                                                      exp1._id !== act._id
                                                  );
                                                  this.setState({
                                                    activity: v,
                                                  });
                                                  alert(
                                                    data.message +
                                                      "Deleted Successfully"
                                                  );
                                                }
                                              });
                                          }, 500);
                                        }
                                      }}
                                    >
                                      {" "}
                                      Delete
                                    </i>
                                  </Col>

                                  <CardBody>
                                    <Row className="mb-4">
                                      <Col sm={3}>
                                        <IntlMessages id="cat" />
                                      </Col>
                                      <Col sm={4}>
                                        <CardText style={{ fontSize: 18 }}>
                                          {act.cat}
                                        </CardText>
                                      </Col>
                                    </Row>
                                    <hr
                                      style={{
                                        color: "#808080",
                                        backgroundColor: "#808080",
                                        height: 1,
                                        border: " 1px solid #808080",
                                      }}
                                    />
                                    <Row className="mb-4">
                                      <Col sm={3}>
                                        <IntlMessages id="startDate" />
                                      </Col>
                                      <Col sm={4}>
                                        <CardText style={{ fontSize: 18 }}>
                                          {act.startDate}
                                        </CardText>
                                      </Col>
                                    </Row>
                                    <hr
                                      style={{
                                        color: "#808080",
                                        backgroundColor: "#808080",
                                        height: 1,
                                        border: " 1px solid #808080",
                                      }}
                                    />
                                    <Row className="mb-4">
                                      <Col sm={3}>
                                        <IntlMessages id="endDate" />
                                      </Col>
                                      <Col sm={4}>
                                        <CardText style={{ fontSize: 18 }}>
                                          {act.endDate}
                                        </CardText>
                                      </Col>
                                    </Row>
                                    <hr
                                      style={{
                                        color: "#808080",
                                        backgroundColor: "#808080",
                                        height: 1,
                                        border: " 1px solid #808080",
                                      }}
                                    />
                                    <Row className="mb-4">
                                      <Col sm={3}>
                                        <IntlMessages id="description" />
                                      </Col>
                                      <Col sm={4}>
                                        <CardText style={{ fontSize: 18 }}>
                                          {act.description}
                                        </CardText>
                                      </Col>
                                    </Row>
                                  </CardBody>
                                </Colxx>
                              </Row>
                            </CardBody>
                          ))
                        : null}
                      {this.state.addActivity.map((comp) => comp)}

                      <FormExtra
                        open={this.state.modalActivity}
                        toggle={this.toggleActivity}
                        formEvent={this.formExtra}
                        addActivity={this.addActivity}
                      />
                    </Colxx>
                  </Row>
                </CardBody>
              </div>
            </Card>
            <Card className="d-flex flex-row mb-4">
              <div className=" d-flex flex-grow-1 min-width-zero ">
                <CardBody
                  style={{ fontSize: 18 }}
                  className=" pl-0 align-self-center mr-5 ml-5 flex-column flex-md-row justify-content-between min-width-zero"
                >
                  <Row>
                    <Colxx xxs="12">
                      <Col className="offset-11">
                        {" "}
                        <i
                          style={{ cursor: "pointer" }}
                          className="simple-icon-plus "
                          onClick={this.toggleSocial}
                        >
                          {" "}
                          Add
                        </i>
                      </Col>
                      <Col style={{ fontSize: 24 }} className="mb-5">
                        <IntlMessages id="social_title" />
                        <hr
                          style={{
                            color: "#808080",
                            backgroundColor: "#808080",
                            height: 1,
                            border: " 1px solid #808080",
                          }}
                        />
                      </Col>

                      {this.state.social
                        ? this.state.social.map((so) => (
                            <CardBody
                              style={{ fontSize: 18 }}
                              className=" pl-0 align-self-center mr-5 ml-5 flex-column flex-md-row justify-content-between min-width-zero"
                            >
                              <Row>
                                <Colxx xxs="12">
                                  <Col className="offset-11">
                                    {" "}
                                    <i
                                      style={{ cursor: "pointer" }}
                                      className="simple-icon-trash "
                                      onClick={() => {
                                        var t = window.confirm(
                                          "Do you want to delete it?"
                                        );
                                        if (t === true) {
                                          setTimeout(() => {
                                            fetch("/students/delete/social", {
                                              method: "post",
                                              headers: {
                                                "Content-Type":
                                                  "application/json",
                                                Authorization:
                                                  "Bearer " +
                                                  sessionStorage.getItem("token"),
                                              },
                                              body: JSON.stringify({
                                                id: so,
                                              }),
                                            })
                                              .then((res) => res.json())
                                              .then((data) => {
                                                if (data.error) {
                                                  console.log(data.error);
                                                } else {
                                                  const v = this.state.social.filter(
                                                    (exp1) =>
                                                      exp1._id !== so._id
                                                  );
                                                  this.setState({
                                                    social: v,
                                                  });
                                                  alert(
                                                    data.message +
                                                      "Deleted Successfully"
                                                  );
                                                }
                                              });
                                          }, 500);
                                        }
                                      }}
                                    >
                                      {" "}
                                      Delete
                                    </i>
                                  </Col>

                                  <CardBody>
                                    <Row className="mb-4">
                                      <Col sm={4}>
                                        {so.social === "Dribbble" ? (
                                          <i className="simple-icon-social-dribbble" />
                                        ) : so.social === "Facebook" ? (
                                          <i className="simple-icon-social-facebook" />
                                        ) : so.social === "Github" ? (
                                          <i className="simple-icon-social-github" />
                                        ) : so.social === "Google Plus" ? (
                                          <i className="simple-icon-social-google" />
                                        ) : so.social === "Hackerrank" ? (
                                          <CardText style={{ fontSize: 18 }}>
                                            {so.social}
                                          </CardText>
                                        ) : so.social === "Codechef" ? (
                                          <CardText style={{ fontSize: 18 }}>
                                            {so.social}
                                          </CardText>
                                        ) : so.social === "Instagram" ? (
                                          <i className="simple-icon-social-instagram" />
                                        ) : so.social === "LinkedIn" ? (
                                          <i className="simple-icon-social-linkedin" />
                                        ) : so.social === "Skype" ? (
                                          <i className="simple-icon-social-skype" />
                                        ) : (
                                          ""
                                        )}
                                      </Col>
                                      <Col sm={6}>
                                        <CardText style={{ fontSize: 18 }}>
                                          <a href={so.link}>{so.link}</a>
                                        </CardText>
                                      </Col>
                                    </Row>
                                    <hr
                                      style={{
                                        color: "#808080",
                                        backgroundColor: "#808080",
                                        height: 1,
                                        border: " 1px solid #808080",
                                      }}
                                    />
                                  </CardBody>
                                </Colxx>
                              </Row>
                            </CardBody>
                          ))
                        : null}
                      {this.state.addSocial.map((comp) => comp)}

                      <FormSocial
                        open={this.state.modalSocial}
                        toggle={this.toggleSocial}
                        formEvent={this.formSocial}
                        addSocial={this.addSocial}
                      />
                    </Colxx>
                  </Row>
                </CardBody>
              </div>
            </Card>
          </Colxx>
        </Row>

        <div>
          <Snackbar
            anchorOrigin={{ vertical: "top", horizontal: "right" }}
            open={this.state.open}
            autoHideDuration={4000}
            onClose={this.handleClose}
          >
            <Alert
              onClose={this.handleClose}
              severity={this.state.neg ? "error" : "success"}
            >
              {this.state.msg}
            </Alert>
          </Snackbar>
        </div>
      </Fragment>
    );
  }
}
