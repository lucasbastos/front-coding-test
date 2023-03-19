interface Country {
    ID: string;
    Country: string;
    CountryCode: string;
    Slug: string;
    TotalConfirmed: number;
    TotalDeaths: number;
    FatalitiesRate: number;
  }

  interface CountryDetails {
    Country: string;
    CountryCode: string;
    Province: string;
    City: string;
    CityCode: string;
    Lat: string;
    Lon: string;
    Cases: number;
    Status: string;
    Date: string;
  }

  export type { Country, CountryDetails };

