import React from "react";
import Head from "next/head";
import DateTime from "../components/time&date";

export default function HomePage() {
  const student = [
    {
      student_id: 240002,
      nfc_id: "1",
      stud_pic: "/user/user.svg",
      lname: "manuel",
      fname: "KENneth",
      mname: "C.",
      strand: "humss",
      grade: "11",
      section: "mACTAN",
    },
  ];
  return (
    <React.Fragment>
      <Head>
        <title>Student Logs</title>
      </Head>
      <div className=" h-screen w-full bg-[url('../public/images/bg.svg')] bg-cover ">
        <div className=" w-full h-[20%] flex flex-row items-center justify-center gap-6 bg-white bg-opacity-50">
          <img src="/images/logo.svg" alt="logo" className=" h-[70%]" />
          <div className=" text-center text-[#002147] font-semibold ">
            <h1 className=" uppercase text-3xl">College of mary immaculate</h1>
            <h3 className=" text-lg">Poblacion, Pandi, Bulacan</h3>
          </div>
        </div>
        <div className=" h-[80%] w-full text-center text-3xl font-extrabold text-[#002147] bg-white bg-opacity-50">
          <div className=" h-[15%]">
            <DateTime />
          </div>
          {student.map((item) => (
            <div
              key={item.student_id}
              className=" h-[85%] w-full flex flex-row"
            >
              <div className=" h-full w-[40%] flex flex-col items-center justify-center p-6 gap-y-4">
                <img
                  src={item.stud_pic}
                  alt="user"
                  className="bg-white w-[80%] h-[80%]"
                />
              </div>
              <div className=" h-full w-[60%] text-[50px] flex flex-col gap-y-8 justify-center items-start uppercase">
              <input type="text" className=" border border-[#002147]" placeholder=" NFC ID" />
                <h1>Student ID: {item.student_id}</h1>
                <h1>
                  {item.lname}, {item.fname} {item.mname}
                </h1>
                <h1>
                  {item.strand} {item.grade} - {item.section}
                </h1>
                <h1 className=" text-[100px] mt-10 animate-pulse">
                  YOU'RE IN !
                </h1>
              </div>
            </div>
          ))}
        </div>
      </div>
    </React.Fragment>
  );
}
