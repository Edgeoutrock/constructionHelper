import React, { useReducer, useRef  } from "react";
import "./App.css";

function Count() {
  const inputRef = useRef();
  const projects = [
    {
      "id": 1,
      "name": "New Home Construction",
      "image": "https://vignette.wikia.nocookie.net/spongebobgalaxy/images/0/07/SpongeBob_SquarePants.png/revision/latest?cb=20171228024014",
      "details": "build a home from scratch",
      "location": "USA"
    },
    {
      "id": 2,
      "name": "Home Additions",
      "image": "https://vignette3.wikia.nocookie.net/vsbattles/images/8/80/Mr._Krabs.png/revision/latest?cb=20150919162131",
      "details": "Remove or add stuff to an existing home",
      "location": "Entire World"
    },
    {
      "id": 3,
      "name": "Bathroom Remodels",
      "image": "https://vignette2.wikia.nocookie.net/fictionalcharacters/images/a/ac/Squidward.png/revision/latest?cb=20131121012626",
      "details": "installation for faucets, sinks, showerheads, tubs, and other related items",
      "location": "USA"
    },
    {
      "id": 4,
      "name": "Kitchen Remodels",
      "image": "https://s-media-cache-ak0.pinimg.com/originals/fe/32/49/fe32495d45283cd6860ae122f0aeaad9.png",
      "details": "replacements of countertops with granite and faucet installation",
      "location": "USA and Europe"
    },
    {
      "id": 5,
      "name": "Windows and Doors",
      "image": "https://vignette4.wikia.nocookie.net/vsbattles/images/3/39/Courage-0.png/revision/latest?cb=20160719055423",
      "details": "placement of items",
      "location": "USA"
    },
    {
      "id": 6,
      "name": "Decks and Porches",
      "image": "https://vignette1.wikia.nocookie.net/doug/images/3/3b/Doug001.gif/revision/latest?cb=20110807170511",
      "details": "the exterior looks better with replacements",
      "location": "USA"
    }
  ];

  const [state, dispatch] = useReducer(
    (state, action) => {
      if (action === "changeNewHomeConstruction") {
        var sureContact = inputRef.current.value;
        return { ...state, NewHomeConstructionchange: sureContact }; // something ends in praises
      } else if (action === "changeHomeAdditions") {
        var userContact = inputRef.current.value;
        return { ...state, HomeAdditionschange: userContact };
      } else if (action === "changeBathroomRemodels") {
        var makeContact = inputRef.current.value;
        return { ...state, BathroomRemodelschange: makeContact };
      }else if (action === "changeKitchenRemodels") {
        var  wakeContact = inputRef.current.value;
            return { ...state, KitchenRemodelschange: wakeContact };
       } else if (action === "changeWindowsandDoors") {
        var attemptContact = inputRef.current.value;
            return { ...state, WindowsandDoorschange: attemptContact };
         }  else if (action === "changeDecksandPorches") {
          var  lostContact = inputRef.current.value;
              return { ...state, DecksandPorcheschange: lostContact };
          } else {
        return state;
      }
    },
    { NewHomeConstructionchange: "", HomeAdditionschange: "", BathroomRemodelschange: "", KitchenRemodelschange: "", WindowsandDoorschange: "", DecksandPorcheschange: "" }
  );

  return (
    <div className="App">
      <h1>Leave Contact Information for which projects you want</h1>
      <input type = "text" ref={inputRef} placeholder = "leave contact"/>
      <div className="row mt-5">
        {projects.map(item => (
          <div key={item.name} className="card mx-auto col-4">
            <img className="card-img-top" src={item.image} alt={item.name} />
            <div className="card-body">
              <h4 className="card-title">{item.name}</h4>
              <p className="card-text">
                {item.name} has an order by {state[item.name.split(" ").join("") + "change"]} !
              </p>
            {/* <input type = "text" ref={inputRef}/> */}
              <button className="btn btn-primary" onClick={() => dispatch("change" + item.name.split(" ").join(""))}>
                Add Contact Information
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Count;
