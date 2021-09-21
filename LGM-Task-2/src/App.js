import { useState } from "react";
import "./App.css";
import Cards from "./components/Cards";
import Navbar from "./components/Navbar";
import Loading from "./components/Loading";

function App() {
  const baseUrl = "https://reqres.in/api/users?page=1";

  const [userData, setUserData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [getBtn, setGetBtn] = useState(false);

  const clickHandler = () => {
    setLoading(true);

    setTimeout(async () => {
      const res = await fetch(baseUrl);
      const data = await res.json();
      setUserData(data);
      setLoading(false);
    }, 2000);
    setGetBtn(!getBtn);
  };

  return (
    <div className="App container-fluid">
      <Navbar title="LetsGrowMore (Virtual Internship Program)" />
      <button onClick={clickHandler} className="getUserBtn">
        Get Users
      </button>
      {getBtn ? loading ? <Loading /> : <Cards users={userData.data} /> : null}
    </div>
  );
}

export default App;
