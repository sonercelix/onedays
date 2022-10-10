import React from "react";

function Login() {
  let cities = ["İstanbul", "Ankara", 1, 2, 3];
  cities = [...cities, "Kayseri"];
  cities.push("Zonguldak");
  cities.splice(cities.length - 1, 1);

  cities = cities.filter((item, index) => typeof item === "string");

  return (
    <>
      <p>Login page</p>
      <ul>
        {cities.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </>
  );
}

export default Login;
