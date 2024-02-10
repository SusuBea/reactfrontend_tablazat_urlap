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
  const [ujArt, setujArt] = useState({title: "", date: "", price: ""});

  //DS.getData(vegpont, fveny);
  useEffect(() => {
    DS.getData(vegpont, setObjLista);
  }, [vegpont]);


function kuld(adat){
  //axios.adatservice kuldes
}

  function kattintas(id){
    console.log("kattintottam")
     
    DS.deleteData(vegpont, id);


 
  }



  return (
    <>
      <div className="App">
        <header className="App-header">
          <h1>React frontend</h1>
        </header>
     
        <article>
          <p>{console.log(objLista)}</p>
          <div><Urlap kuld={kuld} /></div>
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
          </tr >

            {objLista.map((elem, index) => {
              return <Elem obj={elem} key={index} kattintas={kattintas}/>;
            })}
          </tbody>
        </table>
        
      </div>
    </>
  );
}

export default App;
