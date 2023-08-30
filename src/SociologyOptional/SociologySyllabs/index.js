import React from "react";
import Style from "./index.module.scss";
import CommanHeading from "../CommonHeading";
import Item from "../CommonLi";
import CommonTittle from "../../Components/CommonTittle";

const SociologySyllaus = () => {
  return (
    <>
      <section className={Style.syllabus}>
        <CommonTittle text="SOCIOLOGY FOUNDATION WITH " colorText="DAILY ANSWER WRITING" />

        <div className={Style.syllabus__btnWrap}>
          <button className={Style.syllabus__btnWrap__left}>
            Click here to Enroll Online &nbsp; <span>49000/-</span>
          </button>
          <button className={Style.syllabus__btnWrap__right}>
            Click here to Enroll offline &nbsp; <span>51000/-</span>
          </button>
        </div>
        <CommanHeading heading="Course Features for" highlight="Sociology Optional Syllabus:" />
        <Item para="Daily 2 hours of sociology optional classes. At the end of the lecture, an assignment related to the sociology optional syllabus . topic is given based on sociology optional previous year question papers." />
        <Item para="After attending the online lecture, engage in a telephonic doubt discussion related to sociology optional notes with Vikash Sir." />
        <Item para="The course duration is four months, but your direct contact with Sir and his mentorship will remain till your final success in upsc sociology optional syllabus." />
        <Item para="Class begins with basics and equal focus on fundamentals & applied sociology, ensuring complete coverage of sociology optional syllabus for upsc. An applied understanding of the upsc sociology optional syllabus pdf will help you retain the concepts and theories." />
        <Item para="Previous year questions from sociology optional question paper are integrated into the foundation course itself." />

        <CommanHeading heading="Study Material /Notes:" highlight="Notes:" />
        <Item para="PRINTED BOOKLETS for each topic which is concise, well updated, & exam-oriented based on sociology optional books." />
        <Item para="MINUTES REVISION CARDS (5-MRC) for regular revision of the sociology optional notes." />

        <CommanHeading heading="Practice Workbooks for" highlight="text" />
        <Item para="Students will get 2 workbooks consisting of 10 sets of mock test papers based on sociology optional syllabus upsc." />

        <CommanHeading heading="Personal " highlight="Mentorship:" />
        <Item para="Get personal mentorship from Vikash Sir for your sociology optional coaching, including general studies strategy, essay, and personality development for civil services." />
        <Item para="Regular one-on-one interaction & individual counseling for stress management and refinement of strategy for exams by Vikash Ranjan Sir." />
        <CommanHeading heading="Specialist Guidance of" highlight="Vikash Ranjan Sir:" />
        <Item para="Vikash Ranjan Sir is a specialist teacher of sociology optional with vast experience in teaching and writing sociology optional books. Under his guidance, students will not only learn sociology but also practice answer writing, focusing on the sociology optional question paper pattern." />
        <CommanHeading heading="At the End of the Class.." />

        <Item para="Students will have complete Conceptual Understanding of Each and Every Topic of the Syllabus." />
        <Item para="Students will be able to attempt any of the questions, be Direct or Applied, ensuring 300+ Marks in Sociology." />
      </section>
    </>
  );
};

export default SociologySyllaus;
