import React from "react";
import { useState } from "react";
import { IUser } from "./models/IUser";
import { profileControl } from "./util";

function Login() {
  let cities = ["İstanbul", "Ankara", 1, 2, 3];
  cities = [...cities, "Kayseri"];
  cities.push("Zonguldak");
  cities.splice(cities.length - 1, 1);

  cities = cities.filter((item, index) => typeof item === "string");

  const userx: IUser = {
    name: "Soner",
    surname: "ÇELİK",
    age: 33,
    status: true,
    email: "sonercelix@hotmail.com",
    address: { title: "Ev Adresi", no: 4, code: 2022 },
  };

  interface IAction {
    id: number;
    fncCall: Function;
  }
  const fncSum = (a: number, b: number): number => {
    return a + b;
  };

  const itemAction: IAction = {
    id: 0,
    fncCall: fncSum,
  };

  const sm = itemAction.fncCall(10, 20);
  console.log(sm);

  console.log(userx);
  profileControl();

  const [data, setData] = useState("");
  console.log(data);

  return (
    <>
      <div>{data}</div>
      <p>Login page</p>
      <input onChange={(evt) => setData(evt.target.value)} />
      <button
        onClick={(evt) => {
          console.log(data);
        }}
      >
        Göster
      </button>
      {userx.email && <div>{userx.email.length}</div>}
      <ul>
        {cities.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </>
  );
}

export default Login;
