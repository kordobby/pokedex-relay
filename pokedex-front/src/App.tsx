import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { useQuery } from "@apollo/client";
import { GET_POKE_LIST } from "./graphql/quries";
import { Poketmon, PoketmonListResponse } from "./types/BaseSchema";
import Router from "./shared/router/Router";
import GNB from "./components/GNB/GNB";

function App() {
  const { data } =
    useQuery<{ getPoketmonList: PoketmonListResponse }>(GET_POKE_LIST);
  const pokeList = data?.getPoketmonList?.poketmonList as Poketmon[];

  return (
    <div className="App">
      <GNB>
        <Router />
      </GNB>
    </div>
  );
}

export default App;
