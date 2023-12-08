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

export interface GameDetailBinding extends Developer, Publisher {
  app_name: TypeVal;
  release_date: TypeValDatatype;
  background: TypeVal;
  in_english: TypeValDatatype;
  website?: TypeVal;
  support_url?: TypeVal;
  movies?: TypeVal;
  minimum_requirements?: TypeVal;
  recommended_requirements?: TypeVal;
  req_age: TypeValDatatype;
  header_image: TypeVal;
  avg_playtime: TypeValDatatype;
  median_playtime: TypeValDatatype;
  negative_ratings: TypeValDatatype;
  positive_ratings: TypeValDatatype;
  owners: TypeVal;
  screenshots: TypeValArray;
  categories: TypeVal | TypeValArray;
  genres: TypeVal | TypeValArray;
  platforms: TypeVal | TypeValArray;
  gameAbstract: Val;
  short_description: Val;
}

export interface Developer {
  developerName: Val;
  developerAbstract: Val;
  developerThumbnail?: Val;
  developerFounderName?: Val;
  developerNumEmployees?: Val;
  developerHomepage?: Val;
  developerLocation?: Val;
}

export interface Publisher {
  publisherName: Val;
  publisherAbstract: Val;
  publisherThumbnail?: Val;
  publisherFoundDate?: Val;
  publisherLocation?: Val;
  publisherFounderName?: Val;
  publisherNumEmployees?: Val;
  publisherHomepage?: Val;
}

export interface Val {
  value: string;
}

export interface TypeVal extends Val {
  type: string;
}

export interface TypeValDatatype extends TypeVal {
  datatype: string;
}

export interface TypeValArray {
  type: string;
  value: string[];
}
