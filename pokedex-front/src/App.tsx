import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { useQuery } from "@apollo/client";
import { GET_POKE_LIST } from "./graphql/quries";
import { Poketmon, PoketmonListResponse } from "./types/BaseSchema";
import Router from "./shared/router/Router";
import Header from "./components/GNB/Header";
function App() {
  const { data } =
    useQuery<{ getPoketmonList: PoketmonListResponse }>(GET_POKE_LIST);
  const pokeList = data?.getPoketmonList?.poketmonList as Poketmon[];

  return (
    <div className="App">
      <Header />
      <Router />
    </div>
  );
}

export default App;
