export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** `Date` type as integer. Type represents date and time as number of milliseconds from start of UNIX epoch. */
  Timestamp: any;
};

export type Poketmon = {
  id: Scalars["Int"];
  num: Scalars["Int"];
  name: string;
  type: string;
  category: string;
  attribute: string;
  description: string;
  image: string;
  health: Scalars["Int"];
  attack: Scalars["Int"];
  defense: Scalars["Int"];
  sAttack: Scalars["Int"];
  sDefense: Scalars["Int"];
  speed: Scalars["Int"];
};

export type PoketmonListResponse = {
  count: Scalars["Int"];
  poketmonList: [Poketmon];
};
