import { gql } from "@apollo/client";

export const GET_POKE_LIST = gql`
  query GetPoketmonList($poketmonListInput: PoketmonListInput) {
    getPoketmonList(PoketmonListInput: $poketmonListInput) {
      count
      poketmonList {
        name
        id
        image
        attack
        attribute
        category
        defense
        description
        health
        num
        sAttack
        sDefense
        speed
        type
      }
    }
  }
`;

export const GET_POKE_DETAIL = gql`
  query GetPoketmon($poketmonInput: PoketmonInput!) {
    getPoketmon(PoketmonInput: $poketmonInput) {
      id
      num
      name
      type
      category
      attribute
      description
      image
      health
      attack
      defense
      sAttack
      sDefense
      speed
    }
  }
`;
