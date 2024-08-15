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

import IntlMessages from "../../../helpers/IntlMessages";
import { Colxx, Separator } from "../../../components/common/CustomBootstrap";
import Breadcrumb from "../../../containers/navs/Breadcrumb";

class FormC extends Component {
  constructor(props) {
    super(props);
    this.form = this.form.bind(this);
  }
  form = (event) => {
    const formData = {
      nationality: this.nationality.value,
      passno: this.passno.value,
      alterphnp: this.alterphno.value,
      carbrk10: this.carbrk10.value,
      carbrk12: this.carbrk12.value,
      fathersname: this.fathersname.value,
      fathersoccup: this.fathersoccup.value,
      fathersphno: this.fathersphno.value,
      fathersalterphno: this.fathersalterphno.value,
      fathersemail: this.fathersemail.value,
      fathersworkin: this.fatherworksin.value,
      fathersoffadd: this.fathersofficeadd.value,
      mothersname: this.mothersname.value,
      mothersphno: this.mothersalterphno.value,
      mothersalterphno: this.mothersalterphno.value,
      mothersemail: this.mothermail.value,
      mothersoccup: this.mothersoccup.value,
      motherworkin: this.motherworksin.value,
      mothersoffadd: this.mothersofficeadd.value,
      boarding: this.boarding.value,
      lan: this.lan.value,
      elective: this.elective.value,
      prog: this.prog.value,
      home: this.home.value,
      pphno: this.pcontactno.value,
      passyn: this.passyn,
      skypeid: this.skypeid.value,
    };
    var t = window.confirm("Do you want to save it?");
    if (t === true) {
      this.props.formEvent(formData);
      event.preventDefault();
      this.props.toggle();
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
            <IntlMessages id="student.about-section" />
          </ModalHeader>
          <ModalBody>
            <Form onSubmit={(e) => this.form(e)}>
              <Row className="form-group">
                <Label htmlFor="nationality" md={2} className="mt-2">
                  <IntlMessages id="nationality" />
                </Label>
                <Colxx sm={12}>
                  <Input
                    disabled={this.props.nationality === "" ? false : true}
                    innerRef={(input) => (this.nationality = input)}
                    type="select"
                    model=".nationality"
                    defaultValue={this.props.nationality}
                    name="nationality"
                    id="nationality"
                  >
                    <option value="">-- select one --</option>
                    <option value="afghan">Afghan</option>
                    <option value="albanian">Albanian</option>
                    <option value="algerian">Algerian</option>
                    <option value="american">American</option>
                    <option value="andorran">Andorran</option>
                    <option value="angolan">Angolan</option>
                    <option value="antiguans">Antiguans</option>
                    <option value="argentinean">Argentinean</option>
                    <option value="armenian">Armenian</option>
                    <option value="australian">Australian</option>
                    <option value="austrian">Austrian</option>
                    <option value="azerbaijani">Azerbaijani</option>
                    <option value="bahamian">Bahamian</option>
                    <option value="bahraini">Bahraini</option>
                    <option value="bangladeshi">Bangladeshi</option>
                    <option value="barbadian">Barbadian</option>
                    <option value="barbudans">Barbudans</option>
                    <option value="batswana">Batswana</option>
                    <option value="belarusian">Belarusian</option>
                    <option value="belgian">Belgian</option>
                    <option value="belizean">Belizean</option>
                    <option value="beninese">Beninese</option>
                    <option value="bhutanese">Bhutanese</option>
                    <option value="bolivian">Bolivian</option>
                    <option value="bosnian">Bosnian</option>
                    <option value="brazilian">Brazilian</option>
                    <option value="british">British</option>
                    <option value="bruneian">Bruneian</option>
                    <option value="bulgarian">Bulgarian</option>
                    <option value="burkinabe">Burkinabe</option>
                    <option value="burmese">Burmese</option>
                    <option value="burundian">Burundian</option>
                    <option value="cambodian">Cambodian</option>
                    <option value="cameroonian">Cameroonian</option>
                    <option value="canadian">Canadian</option>
                    <option value="cape verdean">Cape Verdean</option>
                    <option value="central african">Central African</option>
                    <option value="chadian">Chadian</option>
                    <option value="chilean">Chilean</option>
                    <option value="chinese">Chinese</option>
                    <option value="colombian">Colombian</option>
                    <option value="comoran">Comoran</option>
                    <option value="congolese">Congolese</option>
                    <option value="costa rican">Costa Rican</option>
                    <option value="croatian">Croatian</option>
                    <option value="cuban">Cuban</option>
                    <option value="cypriot">Cypriot</option>
                    <option value="czech">Czech</option>
                    <option value="danish">Danish</option>
                    <option value="djibouti">Djibouti</option>
                    <option value="dominican">Dominican</option>
                    <option value="dutch">Dutch</option>
                    <option value="east timorese">East Timorese</option>
                    <option value="ecuadorean">Ecuadorean</option>
                    <option value="egyptian">Egyptian</option>
                    <option value="emirian">Emirian</option>
                    <option value="equatorial guinean">
                      Equatorial Guinean
                    </option>
                    <option value="eritrean">Eritrean</option>
                    <option value="estonian">Estonian</option>
                    <option value="ethiopian">Ethiopian</option>
                    <option value="fijian">Fijian</option>
                    <option value="filipino">Filipino</option>
                    <option value="finnish">Finnish</option>
                    <option value="french">French</option>
                    <option value="gabonese">Gabonese</option>
                    <option value="gambian">Gambian</option>
                    <option value="georgian">Georgian</option>
                    <option value="german">German</option>
                    <option value="ghanaian">Ghanaian</option>
                    <option value="greek">Greek</option>
                    <option value="grenadian">Grenadian</option>
                    <option value="guatemalan">Guatemalan</option>
                    <option value="guinea-bissauan">Guinea-Bissauan</option>
                    <option value="guinean">Guinean</option>
                    <option value="guyanese">Guyanese</option>
                    <option value="haitian">Haitian</option>
                    <option value="herzegovinian">Herzegovinian</option>
                    <option value="honduran">Honduran</option>
                    <option value="hungarian">Hungarian</option>
                    <option value="icelander">Icelander</option>
                    <option value="indian">Indian</option>
                    <option value="indonesian">Indonesian</option>
                    <option value="iranian">Iranian</option>
                    <option value="iraqi">Iraqi</option>
                    <option value="irish">Irish</option>
                    <option value="israeli">Israeli</option>
                    <option value="italian">Italian</option>
                    <option value="ivorian">Ivorian</option>
                    <option value="jamaican">Jamaican</option>
                    <option value="japanese">Japanese</option>
                    <option value="jordanian">Jordanian</option>
                    <option value="kazakhstani">Kazakhstani</option>
                    <option value="kenyan">Kenyan</option>
                    <option value="kittian and nevisian">
                      Kittian and Nevisian
                    </option>
                    <option value="kuwaiti">Kuwaiti</option>
                    <option value="kyrgyz">Kyrgyz</option>
                    <option value="laotian">Laotian</option>
                    <option value="latvian">Latvian</option>
                    <option value="lebanese">Lebanese</option>
                    <option value="liberian">Liberian</option>
                    <option value="libyan">Libyan</option>
                    <option value="liechtensteiner">Liechtensteiner</option>
                    <option value="lithuanian">Lithuanian</option>
                    <option value="luxembourger">Luxembourger</option>
                    <option value="macedonian">Macedonian</option>
                    <option value="malagasy">Malagasy</option>
                    <option value="malawian">Malawian</option>
                    <option value="malaysian">Malaysian</option>
                    <option value="maldivan">Maldivan</option>
                    <option value="malian">Malian</option>
                    <option value="maltese">Maltese</option>
                    <option value="marshallese">Marshallese</option>
                    <option value="mauritanian">Mauritanian</option>
                    <option value="mauritian">Mauritian</option>
                    <option value="mexican">Mexican</option>
                    <option value="micronesian">Micronesian</option>
                    <option value="moldovan">Moldovan</option>
                    <option value="monacan">Monacan</option>
                    <option value="mongolian">Mongolian</option>
                    <option value="moroccan">Moroccan</option>
                    <option value="mosotho">Mosotho</option>
                    <option value="motswana">Motswana</option>
                    <option value="mozambican">Mozambican</option>
                    <option value="namibian">Namibian</option>
                    <option value="nauruan">Nauruan</option>
                    <option value="nepalese">Nepalese</option>
                    <option value="new zealander">New Zealander</option>
                    <option value="ni-vanuatu">Ni-Vanuatu</option>
                    <option value="nicaraguan">Nicaraguan</option>
                    <option value="nigerien">Nigerien</option>
                    <option value="north korean">North Korean</option>
                    <option value="northern irish">Northern Irish</option>
                    <option value="norwegian">Norwegian</option>
                    <option value="omani">Omani</option>
                    <option value="pakistani">Pakistani</option>
                    <option value="palauan">Palauan</option>
                    <option value="panamanian">Panamanian</option>
                    <option value="papua new guinean">Papua New Guinean</option>
                    <option value="paraguayan">Paraguayan</option>
                    <option value="peruvian">Peruvian</option>
                    <option value="polish">Polish</option>
                    <option value="portuguese">Portuguese</option>
                    <option value="qatari">Qatari</option>
                    <option value="romanian">Romanian</option>
                    <option value="russian">Russian</option>
                    <option value="rwandan">Rwandan</option>
                    <option value="saint lucian">Saint Lucian</option>
                    <option value="salvadoran">Salvadoran</option>
                    <option value="samoan">Samoan</option>
                    <option value="san marinese">San Marinese</option>
                    <option value="sao tomean">Sao Tomean</option>
                    <option value="saudi">Saudi</option>
                    <option value="scottish">Scottish</option>
                    <option value="senegalese">Senegalese</option>
                    <option value="serbian">Serbian</option>
                    <option value="seychellois">Seychellois</option>
                    <option value="sierra leonean">Sierra Leonean</option>
                    <option value="singaporean">Singaporean</option>
                    <option value="slovakian">Slovakian</option>
                    <option value="slovenian">Slovenian</option>
                    <option value="solomon islander">Solomon Islander</option>
                    <option value="somali">Somali</option>
                    <option value="south african">South African</option>
                    <option value="south korean">South Korean</option>
                    <option value="spanish">Spanish</option>
                    <option value="sri lankan">Sri Lankan</option>
                    <option value="sudanese">Sudanese</option>
                    <option value="surinamer">Surinamer</option>
                    <option value="swazi">Swazi</option>
                    <option value="swedish">Swedish</option>
                    <option value="swiss">Swiss</option>
                    <option value="syrian">Syrian</option>
                    <option value="taiwanese">Taiwanese</option>
                    <option value="tajik">Tajik</option>
                    <option value="tanzanian">Tanzanian</option>
                    <option value="thai">Thai</option>
                    <option value="togolese">Togolese</option>
                    <option value="tongan">Tongan</option>
                    <option value="trinidadian or tobagonian">
                      Trinidadian or Tobagonian
                    </option>
                    <option value="tunisian">Tunisian</option>
                    <option value="turkish">Turkish</option>
                    <option value="tuvaluan">Tuvaluan</option>
                    <option value="ugandan">Ugandan</option>
                    <option value="ukrainian">Ukrainian</option>
                    <option value="uruguayan">Uruguayan</option>
                    <option value="uzbekistani">Uzbekistani</option>
                    <option value="venezuelan">Venezuelan</option>
                    <option value="vietnamese">Vietnamese</option>
                    <option value="welsh">Welsh</option>
                    <option value="yemenite">Yemenite</option>
                    <option value="zambian">Zambian</option>
                    <option value="zimbabwean">Zimbabwean</option>
                  </Input>
                </Colxx>
              </Row>
              <Row className="form-group">
                <Label htmlFor="passno" sm={12} className="mt-2">
                  <IntlMessages id="passportno" />
                </Label>
                <Colxx sm={12} className="mt-2">
                  <Input
                    disabled={this.props.passno === "" ? false : true}
                    defaultValue={this.props.passno}
                    innerRef={(input) => (this.passno = input)}
                    type="text"
                    name="passno"
                    id="passno"
                  />
                </Colxx>
              </Row>
              <Row className="form-group">
                <Label htmlFor="alterphno" sm={12} className="mt-2">
                  <IntlMessages id="alertnatephno" />
                </Label>
                <Colxx sm={12} className="mt-2">
                  <Input
                    type="text"
                    innerRef={(input) => (this.alterphno = input)}
                    name="alterphno"
                    defaultValue={this.props.alternatephno}
                    id="alterphno"
                  />
                </Colxx>
              </Row>
              <Row className="form-group">
                <Label sm={12} className="mt-2">
                  <IntlMessages id="carbrk10" />
                </Label>
                <Colxx sm={12} className="mt-2">
                  <Input
                    disabled={this.props.carbrk10 === "" ? false : true}
                    defaultValue={this.props.carbrk10}
                    type="text"
                    innerRef={(input) => (this.carbrk10 = input)}
                    required
                  />
                </Colxx>
              </Row>
              <Row className="form-group">
                <Label sm={12} className="mt-2">
                  <IntlMessages id="carbrk12" />
                </Label>
                <Colxx sm={12} className="mt-2">
                  <Input
                    disabled={this.props.carbrk12 !== "" ? true : false}
                    defaultValue={this.props.carbrk12}
                    type="text"
                    innerRef={(input) => (this.carbrk12 = input)}
                    required
                  />
                </Colxx>
              </Row>
              <Row className="form-group">
                <Label sm={12} className="mt-2">
                  <IntlMessages id="fathersname" />
                </Label>
                <Colxx sm={12} className="mt-2">
                  <Input
                    disabled={this.props.fathersname !== "" ? true : false}
                    type="text"
                    defaultValue={this.props.fathersname}
                    innerRef={(input) => (this.fathersname = input)}
                    required
                  />
                </Colxx>
              </Row>
              <Row className="form-group">
                <Label sm={12} className="mt-2">
                  <IntlMessages id="fathersoccup" />
                </Label>
                <Colxx sm={12} className="mt-2">
                  <Input
                    type="text"
                    disabled={this.props.fathersoccup !== "" ? true : false}
                    defaultValue={this.props.fathersoccup}
                    innerRef={(input) => (this.fathersoccup = input)}
                    required
                  />
                </Colxx>
              </Row>
              <Row className="form-group">
                <Label sm={12} className="mt-2">
                  <IntlMessages id="fathersphno" />
                </Label>
                <Colxx sm={12} className="mt-2">
                  <Input
                    defaultValue={this.props.fathersphno}
                    type="text"
                    innerRef={(input) => (this.fathersphno = input)}
                    required
                  />
                </Colxx>
              </Row>
              <Row className="form-group">
                <Label sm={12} className="mt-2">
                  <IntlMessages id="fathersalertnatephno" />
                </Label>
                <Colxx sm={12} className="mt-2">
                  <Input
                    type="text"
                    defaultValue={this.props.fathersalterphno}
                    innerRef={(input) => (this.fathersalterphno = input)}
                    required
                  />
                </Colxx>
              </Row>
              <Row className="form-group">
                <Label sm={12} className="mt-2">
                  <IntlMessages id="fathersmail" />
                </Label>
                <Colxx sm={12} className="mt-2">
                  <Input
                    type="email"
                    defaultValue={this.props.fathersemail}
                    innerRef={(input) => (this.fathersemail = input)}
                    required
                  />
                </Colxx>
              </Row>
              <Row className="form-group">
                <Label sm={12} className="mt-2">
                  <IntlMessages id="fathersworksin" />
                </Label>
                <Colxx sm={12} className="mt-2">
                  <Input
                    type="text"
                    disabled={this.props.fathersworksin !== "" ? true : false}
                    defaultValue={this.props.fathersworksin}
                    innerRef={(input) => (this.fatherworksin = input)}
                    required
                  />
                </Colxx>
              </Row>
              <Row className="form-group">
                <Label sm={12} className="mt-2">
                  <IntlMessages id="fathersofficeadd" />
                </Label>
                <Colxx sm={12} className="mt-2">
                  <Input
                    disabled={this.props.fathersofficeadd !== "" ? true : false}
                    defaultValue={this.props.fathersofficeadd}
                    type="textarea"
                    innerRef={(input) => (this.fathersofficeadd = input)}
                    required
                  />
                </Colxx>
              </Row>
              <Row className="form-group">
                <Label sm={12} className="mt-2">
                  <IntlMessages id="mothersname" />
                </Label>
                <Colxx sm={12} className="mt-2">
                  <Input
                    defaultValue={this.props.mothersname}
                    type="text"
                    innerRef={(input) => (this.mothersname = input)}
                    required
                  />
                </Colxx>
              </Row>
              <Row className="form-group">
                <Label sm={12} className="mt-2">
                  <IntlMessages id="mothersphno" />
                </Label>
                <Colxx sm={12} className="mt-2">
                  <Input
                    type="text"
                    defaultValue={this.props.mothersphno}
                    innerRef={(input) => (this.mothersphno = input)}
                    required
                  />
                </Colxx>
              </Row>
              <Row className="form-group">
                <Label sm={12} className="mt-2">
                  <IntlMessages id="mothersalertphno" />
                </Label>
                <Colxx sm={12} className="mt-2">
                  <Input
                    defaultValue={this.props.mothersalterphno}
                    type="text"
                    innerRef={(input) => (this.mothersalterphno = input)}
                    required
                  />
                </Colxx>
              </Row>
              <Row className="form-group">
                <Label sm={12} className="mt-2">
                  <IntlMessages id="mothersmail" />
                </Label>
                <Colxx sm={12} className="mt-2">
                  <Input
                    defaultValue={this.props.mothersemail}
                    type="text"
                    innerRef={(input) => (this.mothermail = input)}
                    required
                  />
                </Colxx>
              </Row>
              <Row className="form-group">
                <Label sm={12} className="mt-2">
                  <IntlMessages id="mothersoccup" />
                </Label>
                <Colxx sm={12} className="mt-2">
                  <Input
                    defaultValue={this.props.mothersoccup}
                    type="text"
                    innerRef={(input) => (this.mothersoccup = input)}
                    required
                  />
                </Colxx>
              </Row>
              <Row className="form-group">
                <Label sm={12} className="mt-2">
                  <IntlMessages id="mothersworkin" />
                </Label>
                <Colxx sm={12} className="mt-2">
                  <Input
                    type="text"
                    defaultValue={this.props.motherworksin}
                    innerRef={(input) => (this.motherworksin = input)}
                    required
                  />
                </Colxx>
              </Row>
              <Row className="form-group">
                <Label sm={12} className="mt-2">
                  <IntlMessages id="mothersofficeadd" />
                </Label>
                <Colxx sm={12} className="mt-2">
                  <Input
                    type="textarea"
                    defaultValue={this.props.mothersofficeadd}
                    innerRef={(input) => (this.mothersofficeadd = input)}
                    required
                  />
                </Colxx>
              </Row>
              <Row className="form-group">
                <Label sm={12} className="mt-2">
                  <IntlMessages id="boarding" />
                </Label>
                <Colxx sm={12} className="mt-2">
                  <Input
                    type="text"
                    disabled={this.props.boarding !== "" ? true : false}
                    defaultValue={this.props.boarding}
                    innerRef={(input) => (this.boarding = input)}
                    required
                  />
                </Colxx>
              </Row>
              <Row className="form-group">
                <Label sm={12} className="mt-2">
                  <IntlMessages id="languages" />
                </Label>
                <Colxx sm={12} className="mt-2">
                  <Input
                    type="text"
                    defaultValue={this.props.lan}
                    innerRef={(input) => (this.lan = input)}
                    required
                  />
                </Colxx>
              </Row>
              <Row className="form-group">
                <Label sm={12} className="mt-2">
                  <IntlMessages id="elective" />
                </Label>
                <Colxx sm={12} className="mt-2">
                  <Input
                    type="text"
                    defaultValue={this.props.elective}
                    innerRef={(input) => (this.elective = input)}
                    required
                  />
                </Colxx>
              </Row>
              <Row className="form-group">
                <Label sm={12} className="mt-2">
                  <IntlMessages id="programming" />
                </Label>
                <Colxx sm={12} className="mt-2">
                  <Input
                    type="text"
                    defaultValue={this.props.prog}
                    innerRef={(input) => (this.prog = input)}
                    required
                  />
                </Colxx>
              </Row>
              <Row className="form-group">
                <Label sm={12} className="mt-2">
                  <IntlMessages id="hometown" />
                </Label>
                <Colxx sm={12} className="mt-2">
                  <Input
                    type="text"
                    defaultValue={this.props.home}
                    innerRef={(input) => (this.home = input)}
                    required
                  />
                </Colxx>
              </Row>
              <Row className="form-group">
                <Label sm={12} className="mt-2">
                  <IntlMessages id="pcontactno" />
                </Label>
                <Colxx sm={12} className="mt-2">
                  <Input
                    type="text"
                    disabled={this.props.permphno !== "" ? true : false}
                    defaultValue={this.props.permphno}
                    innerRef={(input) => (this.pcontactno = input)}
                    required
                  />
                </Colxx>
              </Row>
              <Row className="form-group">
                <Label sm={12} className="mt-2">
                  <IntlMessages id="passyn" />
                </Label>
                <Colxx sm={12} className="mt-3">
                  <Label check>
                    <Input
                      disabled={this.props.passyn !== "YES" ? true : false}
                      type="radio"
                      onClick={(input) => (this.passyn = "YES")}
                      name="radio3"
                    />{" "}
                    <IntlMessages id="yes" />
                  </Label>
                </Colxx>
                <Colxx sm={12} className="mt-3">
                  <Label check>
                    <Input
                      disabled={this.props.passyn !== "NO" ? true : false}
                      type="radio"
                      onClick={(input) => (this.passyn = "NO")}
                      name="radio3"
                    />
                    <IntlMessages id="no" />
                  </Label>
                </Colxx>
              </Row>
              <Row className="form-group">
                <Label sm={12} className="mt-2">
                  <IntlMessages id="skypeid" />
                </Label>
                <Colxx sm={12} className="mt-2">
                  <Input
                    type="text"
                    defaultValue={this.props.skypeid}
                    innerRef={(input) => (this.skypeid = input)}
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
                    onClick={this.toggle}
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
    );
  }
}
export default FormC;
