export class Team {
  private _id: number;
  private _iso2: String;
  private _name: String;

  constructor(id: number, iso2: String, name: String) {
    this._id = id;
    this._iso2 = iso2;
    this._name = name;
  }

  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get iso2(): String {
    return this._iso2;
  }

  set iso2(value: String) {
    this._iso2 = value;
  }

  get name(): String {
    return this._name;
  }

  set name(value: String) {
    this._name = value;
  }
}
