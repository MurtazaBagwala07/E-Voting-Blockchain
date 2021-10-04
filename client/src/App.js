import React,{useEffect,useState} from 'react';
import Navbar from './Navbar';
import Electionabi from "./contracts/Election.json";
import Web3 from "web3";
import Body from './Body';

function App() {

  useEffect(() => {
    loadWeb3();
    LoadBlockchaindata();
  }, []);

  const [Currentaccount, setCurrentaccount] = useState("");
  const [loader, setloader] = useState(true);
  const [Electionsm, SetElectionsm] = useState();
  const [Candidate1, setCandidate1] = useState();
  const [Candidate2, setCandidate2] = useState();

  const loadWeb3 = async () => {
    if (window.ethereum) {
      window.web3 = new Web3(window.ethereum);
      await window.ethereum.enable();
    } else if (window.web3) {
      window.web3 = new Web3(window.web3.currentProvider);
    } else {
      window.alert(
        "Non-Ethereum browser detected. You should consider trying MetaMask!"
      );
    }
  };

  const LoadBlockchaindata = async () => {
    
    setloader(true);
    const web3 = window.web3;

    const accounts = await web3.eth.getAccounts();
    const account = accounts[0];

    setCurrentaccount(account);
    
    const networkId = await web3.eth.net.getId();

    const networkData = Electionabi.networks[networkId];

    if (networkData) {
      const election = new web3.eth.Contract(
        Electionabi.abi,
        networkData.address
      );

      const canidate1 = await election.methods.candidates(1).call();
      // const canidate1id = canidate1.id;
      // const canidate1name = canidate1.name;
      // const canidate1votecount = canidate1.voteCount;
      const canidate2 = await election.methods.candidates(2).call();
      // const canidate2id = canidate1.id;
      // const canidate2name = canidate2.name;
      // const canidate2votecount = canidate2.voteCount;

      setCandidate1(canidate1);
      setCandidate2(canidate2);
        console.log(canidate1);
        console.log(canidate2);
      SetElectionsm(election);
      setloader(false);
      
    } else {
      window.alert("the smart contract is not deployed current network");
    }
  };

  const votecanidate = async (canidateid) => {
    setloader(true);
    await Electionsm.methods
      .vote(canidateid)
      .send({ from: Currentaccount })
      .on("transactionhash", () => {
        console.log("succesfully ran");
      });
    setloader(false);
  };

  if (loader) {
    return <div>loading ..</div>;
  }

  return (
    <div className="App">
      <Navbar account={Currentaccount} />
      <Body
        canidate1={Candidate1}
        canidate2={Candidate2}
        votecanidate={votecanidate}
        account={Currentaccount}
      />
    </div>
  );
}

export default App;
