import React, { useReducer, useRef  } from "react";

import "./style.css";

function Picks() {
  const inputRef = useRef();
  const projects = [
    {
      "id": 1,
      "name": "New Home Construction",
      "image": "https://si.wsj.net/public/resources/images/B3-DM067_RIGHTS_IM_20190319162958.jpg",
      "details": "build a home from scratch",
      "location": "USA"
    },
    {
      "id": 2,
      "name": "Home Additions",
      "image": "https://specials-images.forbesimg.com/imageserve/1026205392/960x0.jpg?fit=scale",
      "details": "Remove or add stuff to an existing home",
      "location": "Entire World"
    },
    {
      "id": 3,
      "name": "Bathroom Remodels",
      "image": "https://www.thespruce.com/thmb/YuqBcOldMD_Z6D35Em-3ae-A0x8=/640x428/filters:no_upscale()/beach-style-bathroom-white-marble-589daa1c3df78c475853c280.jpg",
      "details": "installation for faucets, sinks, showerheads, tubs, and other related items",
      "location": "USA"
    },
    {
      "id": 4,
      "name": "Kitchen Remodels",
      "image": "https://st.hzcdn.com/fimgs/90f15e760c36401e_1566-w312-h312-b0-p0--transitional-kitchen.jpg",
      "details": "replacements of countertops with granite and faucet installation",
      "location": "USA and Europe"
    },
    {
      "id": 5,
      "name": "Windows and Doors",
      "image": "https://www.scorpionhome.com/images/pages/replacement-windows-doors-belleville-il.jpg",
      "details": "placement of items",
      "location": "USA"
    },
    {
      "id": 6,
      "name": "Decks and Porches",
      "image": "https://nexgenremodeling.com/wp-content/uploads/2019/07/porch-and-deck-construction-services-by-local-professionals.jpg",
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

export default Picks;