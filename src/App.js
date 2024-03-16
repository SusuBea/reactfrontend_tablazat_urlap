import { useEffect, useState } from "react";
import "./App.css";
import DataService from "./model/DataService";
import Elem from "./components/Elem";
import Urlap from "./components/Urlap";

const DS = new DataService();

function App(props) {
  let vegpont = "/artists";
  //objLista=artists objektum lesz majd ha megjön
  const [objLista, setObjLista] = useState([]);
  const [ujAadat, setUjAdat] = useState({ title: "", date: "", price: "" });

  //DS.getData(vegpont, fveny);
  useEffect(() => {
    DS.getData(vegpont, setObjLista);
  }, [vegpont]);

  function postSiker(adat) {
    console.log("siker!", adat)
    setObjLista([...objLista, adat]);
  }

  function postHiba() {
    console.log("Hiba a felvitel során!")
  }

  // új adat küldése a backendnek
  function kuld(adat) {
    //axios.adatservice kuldes
    DS.postData(vegpont, adat, postSiker, postHiba);
  }

  function torlesHiba(error) {
    console.log("Hiba a törlésnél!", error);
  }

  function torlesSiker(id) {
    console.log("törlés siker", id);
    const idx = objLista.findIndex((obj) => id === obj.artist_id);
    const newObjLista = [...objLista];
    console.log("törlődni fog", newObjLista[idx].artist_id);
    newObjLista.splice(idx, 1);
    setObjLista(newObjLista);
  }

  // elem törlése
  function kattintas(obj) {
    console.log("kattintottam törlés: ", obj.artist_id);
    DS.deleteData(vegpont, obj.artist_id, torlesSiker, torlesHiba);
  }

  // létező elem frissítése (mentése)
  function frissites() {
    DS.putData()
  }
  
  return (
    <>
      <div className="App">
        <header className="App-header">
          <h1>React frontend</h1>
        </header>

        <article>
          <p>{console.log(objLista)}</p>
          <div>
            <Urlap kuld={kuld} />
          </div>
        </article>

        <table className="table table-bordered">
          <tbody>
            <tr>
              <th>No.</th>
              <th>Title</th>
              <th>Date</th>
              <th>Price</th>
              <th>Szerkeszt</th>
              <th>Töröl</th>
            </tr>

            {objLista.map((elem, index) => {
              return <Elem obj={elem} key={index} kattintas={kattintas} frissites={frissites}/>;
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default App;
