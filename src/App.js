import SpendingAmount from "./component/SpendingAmount";
import { useState, useEffect } from "react";

function App() {
  const [spendingData, setSpendingData] = useState([]);

  const balance = 921.48;

  const totalWeekSpending = spendingData
    .map((spending) => spending.amount)
    .reduce((partialSum, a) => partialSum + a, 0);

  const totalThisMonth = balance - totalWeekSpending;

  const getData = () => {
    fetch("data.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then(function (response) {
        return response.json();
      })
      .then(function (myJson) {
        setSpendingData(myJson);
      });
  };
  useEffect(() => {
    getData();
  }, []);

  let today = new Date();
  let todayDate =
    today.getDate() + "-" + (today.getMonth() + 1) + "-" + today.getFullYear();

  return (
    <div className="bg-white h-full mx-auto p-2 md:p-12">
      <div className="bg-orange-200 h-auto rounded-md p-2">
        <div className="flex justify-between px-2">
          <span>{todayDate}</span>
          <span className="font-extralight text-gray-400 ">DD-MM-YYYY</span>
        </div>
        <div className="bg-orange-600 mt-6 rounded-md p-4 text-white">
          <h1>My balance</h1>
          <span className="font-bold text-xl">${balance}</span>
        </div>
        <div className="bg-white mt-6 rounded-md p-4">
          <h2 className="text-3xl ml-4">Spending - Last 7 days</h2>
          <div className="">
            <SpendingAmount spendingData={spendingData} todayDate={todayDate} />
          </div>
          <div className="flex justify-between md:px-4">
            <div className="">
              <h3 className="text-gray-400 font-light">Total this month</h3>
              <h4 className="font-bold text-2xl">${totalThisMonth}</h4>
            </div>
            <div className="mt-6 text-sm">
              <h5 className="font-bold">+2.4%</h5>
              <h6 className="text-gray-400 font-light">from last month</h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
