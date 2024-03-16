import { useState } from "react";

export default function Elem(props) {
  const [edit, setEdit] = useState(false);

  // törlés
  function kattintas(obj) {
    console.log(obj.artist_id);
    props.kattintas(obj);
  }

  

  const fields = ["artist_id", "title", "date", "price"];

  return (
    <tr className="elem" id={`obj_${props.obj.artist_id}`}>
      {Object.keys(props.obj).map((kulcs, index) => {
        return (
          <td
            className="txt"
            key={index}
            data-field={kulcs}
          >
         
            {props.obj[kulcs]}
          </td>
        );
      })}
      <td>

      </td>{" "}
      <td>
        <button onClick={kattintas} >
          Töröl
        </button>{" "}
      </td>
    </tr>
  );
}
