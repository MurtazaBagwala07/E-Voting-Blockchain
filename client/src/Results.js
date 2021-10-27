import React from 'react'

function Results( {canidate1, canidate2}) {
    return (
        <div>
            <h2>Election Results</h2>
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
      </div>
      </div>
    )
}

export default Results
