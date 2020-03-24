import React from 'react';
import {Formik, Field} from 'formik';
import {observer} from "mobx-react";
import {Row, Col, Button, Form, Container} from 'react-bootstrap';
import CwigCard from '../../../../components/CwigCard';
import RadioButtonGroup from '../../../../components/RadioButtonGroup';
import {CheckboxGroup, Checkbox} from '../../../../components/CheckboxGroup';
import SelectExistingUserForm from '../../../../components/SelectExistinUserForm';

const mapSelectOptions = (options, labelKey, idKey) => (
  options.map((option) => (
    <option value={option[idKey]} key={option[idKey]}>
      {option[labelKey]}
    </option>
  ))
);

const mapCheckboxOptions = (options, name, labelKey, idKey) => (
  options.map((option) => (
    <Field 
      component={Checkbox}
      name={name}
      id={`${labelKey}-${option[idKey].toString()}`}
      label={option[labelKey]}
    />
  ))
);

const topicAutoSelect = (referenceData) => (
  <CwigCard>
    <Row>
      <h3>Topic Labels</h3>
    </Row>
    <Row>
    <Form.Group>
      <Form.Control
        as="select"
        name="topicAutoSelect"
      >
        {mapSelectOptions(referenceData.topicLabels, 'label', 'labelID')}
      </Form.Control>
      </Form.Group>
    </Row>
  </CwigCard>
);

const anonymousUserForm = (referenceData) => (
  <fieldset>
    <Form.Row>
      <Form.Group as={Col} md="6">
        <Form.Label>Customer type:</Form.Label>
        <Form.Control
          as="select"
          name="customerType"
        >
          {mapSelectOptions(referenceData.customerTypes, "custType", "custTypeID")}
        </Form.Control>
      </Form.Group>
      <Form.Group as={Col} md="6">
        <Form.Label>Customer role:</Form.Label>
        <Form.Control
          as="select"
          name="customerRole"
        >
          {mapSelectOptions(referenceData.customerRoles, "custRole", "custRoleID")}
        </Form.Control>
      </Form.Group>
    </Form.Row>
    <Form.Row>
      <Form.Group as={Col} md="6">
        <Form.Label>Organization type:</Form.Label>
        <Form.Control
          as="select"
          name="customerType"
        >
          {mapSelectOptions(referenceData.organizationTypes, "orgType", "orgTypeID")}
        </Form.Control>
      </Form.Group>
      <Form.Group as={Col} md="6">
        <Form.Label>Language:</Form.Label>
        <Form.Control
          as="select"
          name="customerRole"
        >
          {mapSelectOptions(referenceData.languages, "language", "languageID")}
        </Form.Control>
      </Form.Group>
    </Form.Row>
  </fieldset>
);

const newUserForm = () => (
  <Container>
    <Row>
      <Field placeholder="First name*" name="firstName" />
    </Row>
    <Row>
      <Field placeholder="Last name*" name="lastName" />
    </Row>
    <Row>
      <Field placeholder="Email" name="email" />
    </Row>
    <Row>
      <Field placeholder="Organization" name="organization" />
    </Row>
    <Row>
      <Field placeholder="Street Address 1" name="addressOne" />
    </Row>
    <Row>
      <Field placeholder="Street Address 2" name="addressTwo" />
    </Row>
    <Row>
      <Field placeholder="City" name="city" />
    </Row>
    <Row>
      <Field placeholder="State" name="state" />
    </Row>
    <Row>
      <Field placeholder="Zip Code" name="zipCode" />
    </Row>
    <Row>
      <Field placeholder="Country" name="country" />
    </Row>
    <Row>
      <Field placeholder="Phone Number" name="phoneNumber" />
    </Row>
    <Row>
      <Field placeholder="Fax Number" name="faxNumber" />
    </Row>
  </Container>
);

const onCustomerSelect = (firstName, lastName, id, formikProps) => {
  formikProps.setFieldValue('selectedCustomer.id', id)
  formikProps.setFieldValue('selectedCustomer.firstName', firstName)
  formikProps.setFieldValue('selectedCustomer.lastName', lastName)
}

const selectCustomer = (referenceData, formikProps, customerSearchStore) => (
  <CwigCard>
    <Row>
      <h3>Select Customer</h3>
    </Row>
    { formikProps.values.selectedCustomer.id === '' ?
      <Row>
        <RadioButtonGroup 
          id="userType"
          options={["Anonymous", "Create New Customer", "Add Existing Customer"]}
          value={formikProps.usertype}
        />
      </Row>: null
    }
    {
      formikProps.values.userType === "Anonymous" & formikProps.values.selectedCustomer.id === '' ? 
      anonymousUserForm(referenceData) : null
    }
    {
      formikProps.values.userType === "Create New Customer" & formikProps.values.selectedCustomer.id === '' ? 
      newUserForm() : null
    }
    {
      formikProps.values.userType === "Add Existing Customer" & formikProps.values.selectedCustomer.id === '' ? 
      <SelectExistingUserForm 
        customerSearchStore={customerSearchStore} 
        onCustomerSelect={
          ({firstName, lastName, customerID})=> onCustomerSelect(firstName, lastName, customerID, formikProps)}>
      </SelectExistingUserForm> : null
    }
    {
      formikProps.values.selectedCustomer.id !== '' ?
      <Row>
        <p>SelectedCustomer: {formikProps.values.selectedCustomer.firstName} {formikProps.values.selectedCustomer.lastName}</p>
      </Row> : null
    }
  </CwigCard>
);

const chooseTopics = (referenceData, formikProps) => (
  <CwigCard>
    <Row className="mb-2">
      <h3>Choose Topics</h3>
    </Row>
    <Row>
      <Container>
        <Row>
          <h4>Topic Medium:</h4>
        </Row>
        <Row>
          <RadioButtonGroup 
            id="inquiryMedium"
            options={referenceData.inquiryMeduims.map((medium) => medium.medium)}
            value={formikProps.inquiryMedium}
          />
        </Row>
      </Container>      
    </Row>
    <Row>
      <Container>
        <Row>
          <h4>Topic of Request:</h4>
        </Row>
        <Row>
          <CheckboxGroup
            id="topicOfRequest"
            value={formikProps.values.topicOfRequest}
            error={formikProps.errors.topicOfRequest}
            touched={formikProps.touched.topicOfRequest}
            onChange={formikProps.setFieldValue}
            onBlur={formikProps.setFieldTouched}
          >
            {mapCheckboxOptions(referenceData.itemTopics, "topicOfRequest", "topic", "topicID")}
          </CheckboxGroup>
        </Row>
      </Container>      
    </Row>
    <Row>
      <Container>
        <Row>
          <h4>Use of Information:</h4>
        </Row>
        <Row>
          <CheckboxGroup
            id="useOfInformation"
            value={formikProps.values.useOfInformation}
            error={formikProps.errors.useOfInformation}
            touched={formikProps.touched.useOfInformation}
            onChange={formikProps.setFieldValue}
            onBlur={formikProps.setFieldTouched}
          >
            {mapCheckboxOptions(referenceData.usesOfInformation, "useOfInformation", "informationUse", "informationUseID")}
          </CheckboxGroup>
        </Row>
      </Container>      
    </Row>
    <Row>
      <Container>
        <Row>
          <h4>Type of Information:</h4>
        </Row>
        <Row>
          <CheckboxGroup
            id="typeOfInformation"
            value={formikProps.values.typeOfInformation}
            error={formikProps.errors.typeOfInformation}
            touched={formikProps.touched.typeOfInformation}
            onChange={formikProps.setFieldValue}
            onBlur={formikProps.setFieldTouched}
          >
            {mapCheckboxOptions(referenceData.typesOfInformation, "typeOfInformation", "informationType", "informationTypeID")}
          </CheckboxGroup>
        </Row>
      </Container>      
    </Row>
  </CwigCard>
);

const surveyInformation = (referenceData, formikProps) => (
  <CwigCard>
    <Row>
      <h3>Survey Information</h3>
    </Row>
    <Row>
      <label>Was a survey offered?</label>
    </Row>
    <Row>
      <RadioButtonGroup 
        id="surveyOffered"
        options={['Yes', 'No']}
        value={formikProps.surveyOffered}
        className="col-md-4"
      />
    </Row>
    { formikProps.values.surveyOffered === 'No' && 
    <Row>
      <Form.Group>
        <Form.Control
          as="select"
          name="surveyOption"
        >
          {mapSelectOptions(referenceData.surveyReasons, 'surveyReason', 'surveyReasonID')}
        </Form.Control>
      </Form.Group>
    </Row>}
  </CwigCard>
);

const inquiryAssignedTo = (referenceData) => (
  <CwigCard>
    <Row>
      <h3>Assign Inquiry</h3>
    </Row>
    <Row>
      <Form.Group as={Row} controlId="formHorizontalEmail">
        <Form.Label column md={4}>Assignee:</Form.Label>
        <Col md={8}>
          <Form.Control
            as="select"
            name="inquiryAssignedTo"
          >
            {mapSelectOptions(referenceData.inquiryAssignedTos, "lastname", "id")}
          </Form.Control>
        </Col>
      </Form.Group>
    </Row>
  </CwigCard>
)

const InquiryForm = observer(({referenceData, customerSearchStore}) => {
  return(
    <Formik
      initialValues={{
        topicAutoSelect: '',
        userType: '',
        inquiryMedium: '',
        topicOfRequest: [],
        useOfInformation: [],
        typeOfInformation: [],
        surveyOffered: '',
        firstName: '',
        lastName: '',
        email: '',
        organization: '',
        addressOne: '',
        addressTwo: '',
        city: '',
        state: '',
        zipCode: '',
        country: '',
        phoneNumber: '',
        faxNumber: '',
        inquiryAssignedTo:'',
        selectedCustomer: {
          firstName:'',
          lastName: '',
          id: ''
        }
      }}
      onSubmit={values => console.log(values)}
    >
      {
        formikProps => console.log(formikProps) ||
        <Form>
          {topicAutoSelect(referenceData, formikProps)}
          {selectCustomer(referenceData, formikProps, customerSearchStore)}
          {chooseTopics(referenceData, formikProps)}
          {surveyInformation(referenceData, formikProps)}
          {inquiryAssignedTo(referenceData, formikProps)}
          <Button onClick={formikProps.handleSubmit}>Create New Inquiry</Button>
        </Form>
      }
    </Formik>
  );
});

export default InquiryForm;