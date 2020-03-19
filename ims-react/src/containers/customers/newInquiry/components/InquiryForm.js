import React from 'react';
import {Formik, Field} from 'formik';
import {observer} from "mobx-react";
import {Row, Col, Button, Form, Container, FormLabel} from 'react-bootstrap';
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
      <Field
        as="select"
        name="topicAutoSelect"
      >
        {mapSelectOptions(referenceData.topicLabels, 'label', 'labelID')}
      </Field>
    </Row>
  </CwigCard>
);

const anonymousUserForm = (referenceData) => (
  <Container>
    <Row>
      <Col md={6}>
        <FormLabel>Customer type:</FormLabel>
        <Field
          as="select"
          name="customerType"
        >
          {mapSelectOptions(referenceData.customerTypes, "custType", "custTypeID")}
        </Field>
      </Col>
      <Col md={6}>
        <FormLabel>Customer role:</FormLabel>
        <Field
          as="select"
          name="customerRole"
        >
          {mapSelectOptions(referenceData.customerRoles, "custRole", "custRoleID")}
        </Field>
      </Col>
    </Row>
    <Row>
      <Col md={6}>
        <FormLabel>Organization type:</FormLabel>
        <Field
          as="select"
          name="customerType"
        >
          {mapSelectOptions(referenceData.organizationTypes, "orgType", "orgTypeID")}
        </Field>
      </Col>
      <Col md={6}>
        <FormLabel>Language:</FormLabel>
        <Field
          as="select"
          name="customerRole"
        >
          {mapSelectOptions(referenceData.languages, "language", "languageID")}
        </Field>
      </Col>
    </Row>
  </Container>
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
    <Row>
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
      />
    </Row>
    { formikProps.values.surveyOffered === 'No' && <Row>
      <Field
        as="select"
        name="surveyOption"
      >
        {mapSelectOptions(referenceData.surveyReasons, 'surveyReason', 'surveyReasonID')}
      </Field>
    </Row>}
  </CwigCard>
);

const inquiryAssignedTo = (referenceData) => (
  <CwigCard>
    <Row>
      <h3>Assign Inquiry</h3>
    </Row>
    <Row>
    <FormLabel>Language:</FormLabel>
      <Field
        as="select"
        name="inquiryAssignedTo"
      >
        {mapSelectOptions(referenceData.inquiryAssignedTos, "lastname", "id")}
      </Field>
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