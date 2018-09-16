import React from "react";
import ReactDOM from "react-dom";
import Profile from "./Profile/Profile.js";

import "./styles.css";

const profile = {
  name: "Narasimha Swamy Ardhani",
  vendor: "ICP",
  rate: 500,
  biography:
    "Jackie has extensive experience as a strategic business consultant through her multiple internal roles.Her experiences include developing and managing operational teams, process improvement, implementing, administrating and creating strategy for CRM systems, managing sales effectiveness programs, managing technology projects and corporate and sales training. Prior to consulting, Jackie spent 20 years in the payments industry with companies such as Elavon-US Bank, Citizens Financial Group and Worldpay in various senior leadership roles. At Worldpay, she managed team accountable for various operations projects including CRM implementation, administration and reporting and developed ongoing CRM strategy for 4 different platforms with 900+ users. She managed projects to ensure smooth conversion of national customers to WorldPay platform. Jackie generated $1M+ in operational savings by employing process improvement methodology in multiple departments.",
  consultantCompanies: [
    {
      name: "D. E. Shaw",
      title: "Senior Member Technical",
      startDate: "2014-10-29 00:00:00",
      endDate: "Present"
    },
    {
      name: "D. E. Shaw",
      title: "Member Technical",
      startDate: "2012-10-29 00:00:00",
      endDate: "2014-10-29 00:00:00"
    },
    {
      name: "Religare",
      title: "Intern",
      startDate: "2012-01-01 00:00:00",
      endDate: "2012-07-01 00:00:00"
    }
  ]
};

function App() {
  return (
    <div>
      <Profile />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
