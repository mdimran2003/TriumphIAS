import React from "react";
import CommonTittle from "../../Components/CommonTittle";
import Styles from "./index.module.scss";
import FormInput from "../../Registranion/formInput/FormInput";
import CommonHeading from "../../Components/CommonHeading";
import CommonPurpleButton from "../../Components/CommonButton";
import CourseSection from "../../Components/CoursesSection";
import SociologyFoundation from "../../SociologyOptional/SociologyFoundation";
import AboutRanjanSir from "../../Components/AboutRanjanSir";
import AppStoreSection from "../../Components/AppStoreSection";
import CommonRadioButton from "../../Components/CommonRadioButton";
const PaymentPage = () => {
  return (
    <div className={Styles.paymentArea}>
      <CommonTittle fontFamily="Nunito" text="user registration" colorText="successfull," rightText="please complete payment" />
      <CommonTittle text="Registration payment" />
      <div className={Styles.paymentArea__paymentFormAea}>
        <div className={Styles.paymentArea__paymentFormAea__formField}>
          <FormInput
            laberMargin="10px"
            marginBottom="20px"
            type="text"
            placeholder="Sociology foundation with daily answer writing"
            name="CourseDetails"
            id="Course-Details"
            label="Course Details"
          />
          <FormInput marginBottom="20px" type="text" placeholder="Online Classroom Program" name="OnlineClassroomProgram" />
          <FormInput type="text" placeholder="Course Fee: ₹49,000/-" name="CourseFee" />
        </div>
        <div className={Styles.paymentArea__paymentFormAea__bankDetail}>
          <CommonHeading text="Pay Online - ICICI EazyPay" />
          <CommonPurpleButton text="Click here to Pay Now" width="50%" backgroundColor="red" />
          <p className={Styles.paymentArea__paymentFormAea__bankDetail__aboutPayment}>
            After Payment is Completed send the Payment confirmation details or E-Receipt through whatsApp OR SMS to 7840888102 get the
            payment receipt.
          </p>
          <CommonHeading text="Deposit in Branch / Online Trnsfer (" colorText="Net banking, NEFT, IMPS,RTGS" rightText=")" />
          <ul>
            <li>
              Bank Name : <span>union bank</span>
            </li>
            <li>
              A/c Name : <span>Triumph education and & publishing pvt. ltd.</span>
            </li>
            <li>
              A/c No : <span>236711010000033</span>
            </li>
            <li>
              A/c type : <span>current account</span>
            </li>
            <li>
              Branch : <span>rajender nagar</span>
            </li>
            <li>
              IFSC Code : <span>ubin0823678</span>
            </li>
          </ul>
        </div>
      </div>
      <CommonHeading
        marginBottom="80px"
        fontSize="30px"
        text="Make Payment via Any Payment Mode &"
        colorText="Enter Transaction ID"
        rightText="Once Payment is Done"
      />
      <div className={Styles.paymentArea__paymentMode}>
        <CommonHeading fontSize="30px" text="Select Payment Mode" />
        <div className={Styles.paymentArea__paymentMode__bankOption}>
          <CommonRadioButton label="ICICI EasyPay" name="ICICI" />
          <CommonRadioButton label="Deposit in Branch / Online Transfer" name="PaymentMode" backgroundColor="#8383ff" />
        </div>
        <FormInput marginBottom="30px" type="text" placeholder="Enter Transaction-ID" name="TransactionID" id="TransactionID" />
        <FormInput
          laberMargin="20px"
          marginBottom="60px"
          type="file"
          placeholder="Enter Transaction-ID"
          name="PaymentReceipt"
          id="PaymentReceipt"
          label="Attach Payment Receipt (Image/PDF)"
        />
      </div>
      <CommonTittle fontFamily="Nunito" text="Courses" colorText="offered" />
      <CourseSection />
      <CommonTittle text="EXPLORE THE LATEST VIDEOS ON" colorText="SOCIOLOGY" rightText="FOUNDATION" />
      <SociologyFoundation />
      <CommonTittle text="About" colorText="Vikash ranjan" rightText="sir" />
      <AboutRanjanSir />
      <AppStoreSection />
    </div>
  );
};

export default PaymentPage;
