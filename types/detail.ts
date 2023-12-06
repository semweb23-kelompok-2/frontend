export interface GameDetail {
  results: Results;
  head: Head;
}

interface Head {
  vars: string[];
}

interface Results {
  bindings: GameDetailBinding[];
}

export interface GameDetailBinding {
  app_name: TypeVal;
  release_date: Releasedate;
  background: TypeVal;
  in_english: Releasedate;
  developer: TypeVal;
  publisher: TypeVal;
  website?: TypeVal;
  support_url?: TypeVal;
  movies?: TypeVal;
  minimum_requirements?: TypeVal;
  recommended_requirements?: TypeVal;
  req_age: Releasedate;
  header_image: TypeVal;
  avg_playtime: Releasedate;
  median_playtime: Releasedate;
  negative_ratings: Releasedate;
  positive_ratings: Releasedate;
  owners: TypeVal;
  screenshots: TypeVal;
  categories: TypeVal | TypeValArray;
  genres: TypeVal;
  platforms: TypeVal;
}

interface Releasedate {
  type: string;
  value: string;
  datatype: string;
}

export interface TypeVal {
  type: string;
  value: string;
}

export interface TypeValArray {
  type: string;
  value: string[];
}
