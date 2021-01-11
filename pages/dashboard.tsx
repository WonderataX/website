import React from "react";
import EditProfile from "../components/dashboard/EditProfile";
import Head from "next/head";
import Navbar from "../components/dashboard/Navbar";
import Courses from "../components/dashboard/Courses";
import Referrals from "../components/dashboard/Referrals";
import Billing from "../components/dashboard/Billing";

const optionsList = ["Courses", "Profile", "Referrals", "Billing"];

export default function Dashboard() {
  const [selectedOption, setSelectedOption] = React.useState(optionsList[0]);

  return (
    <>
      <Head>
        <title>Dashboard</title>
        <link
          rel="icon"
          href="/favicon.ico"
          type="image/ico"
          sizes="32x32"
        ></link>
      </Head>
      <Navbar
        options={optionsList}
        selectedOption={selectedOption}
        setSelectedOption={(v) => setSelectedOption(v)}
      />
      <div className="my-12 container mx-auto">
        {selectedOption == "Referrals" ? <Referrals /> : null}
        {selectedOption == "Courses" ? <Courses /> : null}
        {selectedOption == "Profile" ? <EditProfile /> : null}
        {selectedOption == "Billing" ? <Billing /> : null}
      </div>
    </>
  );
}
