import React, { useState } from "react";
import {Link} from 'react-router-dom'


const Body = ({ canidate1, canidate2, votecanidate, account }) => {
  const [Canidate, setCandidate] = useState("");

  const onchange = (e) => {
    setCandidate(e.target.value);
    console.log(e.target.value);
  };

  const onsubmit = (e) => {
    e.preventDefault();
    const date1=Date.now()
    if (Canidate.id !== 0) votecanidate(Number(Canidate));
    else window.alert("there is error in submission");
    const date2=Date.now()
    console.log(date2-date1);
  };

  return (
    <div className="mt-4 text-center" style={{ color: "#000000" }}>
      {/* <h2>Election Results</h2>
      <hr
        style={{
          width: "100%",
          borderStyle: "solid",
          borderWidth: "2px",
          borderColor: "#000000",
        }}
      />
      <div className="p-3 ml-auto mr-auto" style={{ width: "100%" }}>
        <div className="row ml-auto mr-auto  mb-2" style={{ width: "100%" }}>
          <div className="col">
            <p>#</p>
          </div>
          <div className="col">
            <p>Name</p>
          </div>
          <div className="col">
            <p>Votes</p>
          </div>
        </div>
        <hr
          style={{ width: "100%", borderStyle: "solid", borderColor: "#000000" }}
        />
        <div
          className="row ml-auto mr-auto mt-2  mb-2"
          style={{ width: "100%" }}
        >
          <div className="col">
            <p>{canidate1.id}</p>
          </div>
          <div className="col">
            <p>{canidate1.name}</p>
          </div>
          <div className="col">
            <p>{canidate1.voteCount}</p>
          </div>
        </div>
        <hr
          style={{ width: "100%", borderStyle: "solid", borderColor: "#000000" }}
        />
        <div
          className="row ml-auto mr-auto mt-2  mb-2"
          style={{ width: "100%" }}
        >
          <div className="col">
            <p>{canidate2.id}</p>
          </div>
          <div className="col">
            <p>{canidate2.name}</p>
          </div>
          <div className="col">
            <p>{canidate2.voteCount}</p>
          </div>
        </div>
      </div> */}
      <div className="my-5 mr-auto ml-auto text-left" style={{ width: "100%" }}>
        <h5>Cast Your Vote:</h5>
        <form onSubmit={onsubmit}>
          <select name="candidate" className="form-control" onChange={onchange}>
            <option defaultValue value="">
              Select
            </option>
            <option value="1">{canidate1.name}</option>
            <option value="2">{canidate2.name}</option>
          </select>
          <button className="btn btn-primary mt-2 btn-md w-60">
            Vote Candidate{""} {Canidate}
          </button>
        </form>
      </div>

      <li className="btn btn-warning mt-2 btn-md w-60">
      <Link to="/results">Results</Link>
          </li>
      <p className="my-5">
        Your address: <span className="font-weight-bold">{account}</span>
      </p>
    </div>
  );
};

export default Body;