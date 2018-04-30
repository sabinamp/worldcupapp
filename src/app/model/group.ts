export class Channel {

}

export class Match {
  private _id: number;
  private _away_team: number;
  private _channels: Channel[];
  private _date: Date;
  private _finished: boolean;
  private _home_team: number;
  private _name: number;
  private _stadium: number;
  private _type: String;

  constructor(id: number, away_team: number, channels: Channel[], date: Date, finished: boolean, home_team: number, name: number, stadium: number, type: String) {
    this._id = id;
    this._away_team = away_team;
    this._channels = channels;
    this._date = date;
    this._finished = finished
    this._home_team = home_team;
    this._name = name
    this._stadium = stadium;
    this._type = type;
  }

  get id(): number {
    return this._id;
  }

  get away_team(): number {
    return this._away_team;
  }

  get channels(): Channel[] {
    return this._channels;
  }

  get date(): Date {
    return this._date;
  }

  get finished(): boolean {
    return this._finished;
  }

  get home_team(): number {
    return this._home_team;
  }

  get name(): number {
    return this._name;
  }

  get stadium(): number {
    return this._stadium;
  }

  get type(): String {
    return this._type;
  }
}

export class Group {
  private _id: String;
  private _matches: Match[];

  constructor(id: String, matches?: Match[]) {
    this._id = id;
    if (matches) {
      this._matches = matches;
    }
  }

  get id(): String {
    return this._id;
  }

  get matches(): Match[] {
    return this._matches;
  }
}
