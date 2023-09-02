import React from "react";
import Style from "./index.module.scss";
import Img from "../../Assets/Scanner.png";
import CommonTittle from "../../Components/CommonTittle";

const AdmissionAccount = () => {
  return (
    <>
      <section className={Style.account}>
        <CommonTittle text="for {OPTIONAL SYLLABUS} DEPOSIT YOUR FEE IN THE ACCOUNT GIVEN" />

        <div className={Style.account__wrap}>
          <div className={Style.account__wrap__details}>
            <h3>Account Name - TRIUMPH EDUCATION & PUBLISHING PVT. LTD.</h3>
            <h3>Bank Name- UNION BANK</h3>
            <h3>Current Account No.- 236711010000033</h3>
            <h3>IFSC Code: UBINO823678</h3>
            <h3>Branch- RAJENDRA NAGAR</h3>
          </div>
          <div className={Style.account__wrap__scanner}>
            <img src={Img} alt="text" />
          </div>
        </div>
        <div className={Style.account__paymentConfirmation}>
          <h3>
            After Payment send the confirmation details through whatsApp to
            7840888102 get the payment receipt.
          </h3>
        </div>
        <CommonTittle text="term and {condition}" />

        <div className={Style.account__termAndCondition}>
          <h4>
            1. Fees once paid are not returnable/refundable or transferrable
          </h4>
          <h4>
            2. Study material given to students is a proprietary material. It
            should not be shared or copied or circulated, disclose, reproduce,
            duplicate and distribute in any form. Strict action will be taken
            against violation. In case a student is found involved in any
            violation of copyrights of Triumph IAS material, the admission will
            be cancelled.
          </h4>
          <h4>
            3. Study material will be issued only once. Students are advised to
            keep them safe. No duplicate or copy of the material will be
            issuedivate Windows
          </h4>
          <h4>
            4. The Right to Cancelled the addmission any student for indicipline
            or violation terms and conditions rest with the managment
          </h4>
          <h4>
            5. Students shall submit his/her recent passport size photograph &
            one ID Proof at the time of admission
          </h4>
          <h4>
            6. By taking enrollment, the student submits to the above said
            terms and conditions
          </h4>
        </div>
      </section>
    </>
  );
};

export default AdmissionAccount;
