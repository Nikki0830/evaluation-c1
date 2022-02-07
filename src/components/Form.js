import { useEffect, useState } from "react";
import "./Form.css";

export const Form = () => {
  const [forms, setForms] = useState([]);
  //   const [text, setText] = useState("");
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getData();
  }, [page]);

  const getData = () => {
    setLoading(true);
    fetch("http://localhost:3001/games")
      .then((d) => d.json())
      .then((res) => {
        setForms(res);
        setLoading(false);
      });
  };

  return (
    <div>
      <div className="form">
        <h3 id="text">Form to Add Games</h3>
        <form id="mainbox">
          <input
            className="box"
            id="one"
            type="text"
            placeholder="Game Name"
            required="True"
          />
          <br />
          <input
            className="box"
            id="two"
            type="text"
            placeholder="Game Author"
            required="True"
          />
          <br />
          <input
            className="box"
            id="three"
            type="text"
            placeholder="Game Tags"
            required="True"
          />
          <br />
          <input
            className="box"
            id="four"
            type="text"
            placeholder="Game Price"
            required="True"
          />
          <br />
          <input
            className="box"
            id="five"
            type="text"
            placeholder="Forkids"
            required="True"
          />
          <input id="chk" type="checkbox" />
          <br />

          <input
            className="box"
            id="six"
            type="text"
            placeholder="Game Desc"
            required="True"
          />
          <br />
          <select classname="Rating" id="seven">
            <option value="1">Select Rating</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
          <br />
          <button
            className="sub"
            id="eight"
            onClick={() => {
              const data = {
                gamename: document.getElementById("one").value,
                gameauthor: document.getElementById("two").value,
                gametags: document.getElementById("three").value,
                gameprice: document.getElementById("four").value,
                forkids: document.getElementById("five").value,
                gamedesc: document.getElementById("six").value,
                gamerating: document.getElementById("seven").value,
              };
              fetch("http://localhost:3001/games", {
                method: "POST",
                body: JSON.stringify(data),
                headers: {
                  "content-type": "application/json",
                },
              }).then(getData);
            }}
          >
            Submit
          </button>
          
        </form>
      </div>
      <br/>
      <button className = "btn">Sort by Price</button><button className = "btn2">Sort by Rating</button>

      <table border = "2">
        <tr>
          <th>Game Name</th>
          <th>Game Author</th>
          <th>Game Tags</th>
          <th>Game Price</th>
          <th>Forkids</th>
          <th>Game Desc</th>
          <th>Game Rating</th>
        </tr>
        <tr>
        <td>
        {forms.map((e, i) => (
            <div key={e.id}>{e.gamename}</div>
        ))}
        </td>
        <td>
        {forms.map((e, i) => (
            <div key={e.id}>{e.gameauthor}</div>
        ))}
        </td>
        <td>
        {forms.map((e, i) => (
            <div key={e.id}>{e.gametags}</div>
        ))}
        </td>

        <td>
        {forms.map((e, i) => (
            <div key={e.id}>{e.gameprice}</div>
        ))}
        </td>

        <td>
        {forms.map((e, i) => (
            <div key={e.id}>{e.forkids}</div>
        ))}
        </td>

        <td>
        {forms.map((e, i) => (
            <div key={e.id}>{e.gamedesc}</div>
        ))}
        </td>

        <td>
        {forms.map((e, i) => (
            <div key={e.id}>{e.gamerating}</div>
        ))}
        </td>

        </tr>
      </table>
    </div>
  );
};
