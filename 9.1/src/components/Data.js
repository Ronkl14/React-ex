import React from "react";
import Name from "./Name";
import { useState } from "react";
import Card from "./Card";

const Data = () => {
  const data = [
    {
      name: "John",
      birthday: "1-1-1995",
      favoriteFoods: {
        meats: ["hamburgers", "sausages"],
        fish: ["salmon", "pike"],
      },
    },
    {
      name: "Mark",
      birthday: "10-5-1980",
      favoriteFoods: {
        meats: ["hamburgers", "steak", "lamb"],
        fish: ["tuna", "salmon", "barracuda"],
      },
    },
    {
      name: "Mary",
      birthday: "1-10-1977",
      favoriteFoods: {
        meats: ["ham", "chicken"],
        fish: ["pike"],
      },
    },
    {
      name: "Thomas",
      birthday: "1-10-1990",
      favoriteFoods: {
        meats: ["bird", "rooster"],
        fish: ["salmon"],
      },
    },
    {
      name: "Mary",
      birthday: "1-10-1977",
      favoriteFoods: {
        meats: ["hamburgers", "lamb"],
        fish: ["anchovies", "tuna"],
      },
    },
  ];

  const [names, setNames] = useState(getNames());
  const [before90, setBefore90] = useState(bornBefore90());

  function getNames() {
    return data.map((person) => person.name);
  }
  function bornBefore90() {
    return data.filter((person) => Number(person.birthday.slice(-4)) < 1990);
  }

  return (
    <div>
      {names.map((name) => (
        <Name name={name} />
      ))}
      {before90.map((person) => (
        <Card
          personName={person.name}
          birthday={person.birthday}
          meat={person.favoriteFoods.meats.map((meat) => (
            <p>{meat}</p>
          ))}
          fish={person.favoriteFoods.fish.map((fish) => (
            <p>{fish}</p>
          ))}
        />
      ))}
    </div>
  );
};

export default Data;
