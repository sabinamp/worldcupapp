export class Channel {

}

export interface Match {
  id: number;
  away_team: number;
  channels: Channel[];
  date: Date;
  finished: boolean;
  home_team: number;
  name: number;
  stadium: number;
  type: String;
}

export interface MatchId extends Match {
  key: string;
}

export interface Group {
  id: String;
  matches?: Match[];
}

export interface GroupID extends Group {
  key: string;
}
