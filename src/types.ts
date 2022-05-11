export interface Brewery {
  address_2: string | null;
  address_3: string | null;
  brewery_type: string;
  city: string;
  country: string;
  county_province: string | null;
  created_at: string;
  id: number;
  latitude: string;
  longitude: string;
  name: string;
  obdb_id: string;
  phone: string;
  postal_code: string;
  state: string;
  street: string;
  updated_at: string;
  website_url: string;
}

export type State = {
  selectStateInput: string,
  breweries: Brewery[],
  cities: string[],
  filterByType: string;
  filterByCity: string[],
  searchBreweriesInput: string;
}


