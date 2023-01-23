import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { useQuery } from "@apollo/client";
import { GET_POKE_LIST } from "./graphql/quries";
import { Poketmon, PoketmonListResponse } from "./types/BaseSchema";

function App() {
  const { data } =
    useQuery<{ getPoketmonList: PoketmonListResponse }>(GET_POKE_LIST);
  const pokeList = data?.getPoketmonList?.poketmonList as Poketmon[];

  return (
    <div className="App">
      {pokeList?.map((value: Poketmon) => {
        return (
          <div key={`main-list-${value?.id}`}>
            <img src={value.image} alt="" />
            <p>{value.name}</p>
          </div>
        );
      })}
    </div>
  );
}

export default App;
