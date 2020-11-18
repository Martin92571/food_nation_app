class CountryApi {
  static getAllCountries() {
    return _countries;
  }

  static getCountryLogoUrl(countryCode) {
    return `https://www.countryflags.io/${countryCode}/flat/64.png`;
  }

  static getCountryNameFromCode(countryCode) {
    return _countries.find((country) => {
      return country.code === countryCode.toUpperCase();
    }).name;
  }
  static getFoodFromCountry(countryCode) {
    return _countries.find((country) => {
      return country.code === countryCode.toUpperCase();
    }).food;
  }
}
const _countries = [
  {
    "code": "AF",
    "name": "Afghanistan",
    "food": "Click Here"
  },
  {
    "code": "AL",
    "name": "Albania",
    "food": "Click Here"
  },
  {
    "code": "DZ",
    "name": "Algeria",
    "food": "Click Here"
  },
  {
    "code": "AS",
    "name": "American Samoa",
    "food": "Click Here"
  },
  {
    "code": "AD",
    "name": "Andorra",
    "food": "Click Here"
  },
  {
    "code": "AO",
    "name": "Angola",
    "food": "Click Here"
  },
  {
    "code": "AI",
    "name": "Anguilla"
  },
  {
    "code": "AQ",
    "name": "Antarctica"
  },
  {
    "code": "AG",
    "name": "Antigua And Barbuda"
  },
  {
    "code": "AR",
    "name": "Argentina",
    "food": "Click Here"
  },
  {
    "code": "AM",
    "name": "Armenia",
    "food": "Click Here"
  },
  {
    "code": "AW",
    "name": "Aruba",
    "food": "Click Here"
  },
  {
    "code": "AU",
    "name": "Australia",
    "food": "Click Here"
  },
  {
    "code": "AT",
    "name": "Austria",
    "food": "Click Here"
  },
  {
    "code": "AZ",
    "name": "Azerbaijan",
    "food": "Click Here"
  },
  {
    "code": "BS",
    "name": "Bahamas",
    "food": "Click Here"
  },
  {
    "code": "BH",
    "name": "Bahrain",
    "food": "Click Here"
  },
  {
    "code": "BD",
    "name": "Bangladesh",
    "food": "Click Here"
  },
  {
    "code": "BB",
    "name": "Barbados",
    "food": "Click Here"
  },
  {
    "code": "BY",
    "name": "Belarus",
    "food": "Click Here"
  },
  {
    "code": "BE",
    "name": "Belgium",
    "food": "Click Here"
  },
  {
    "code": "BZ",
    "name": "Belize",
    "food": "Click Here"
  },
  {
    "code": "BJ",
    "name": "Benin",
    "food": "Click Here"
  },
  {
    "code": "BM",
    "name": "Bermuda",
    "food": "Click Here"
  },
  {
    "code": "BT",
    "name": "Bhutan",
    "food": "Click Here"
  },
  {
    "code": "BO",
    "name": "Bolivia",
    "food": "Click Here"
  },
  {
    "code": "BW",
    "name": "Botswana",
    "food": "Click Here"
  },
  {
    "code": "BR",
    "name": "Brazil",
    "food": "Click Here"
  },
  {
    "code": "BG",
    "name": "Bulgaria",
    "food": "Click Here"
  },
  {
    "code": "BF",
    "name": "Burkina Faso",
    "food": "Click Here"
  },
  {
    "code": "BI",
    "name": "Burundi",
    "food": "Click Here"
  },
  {
    "code": "KH",
    "name": "Cambodia",
    "food": "Click Here"
  },
  {
    "code": "CM",
    "name": "Cameroon",
    "food": "Click Here"
  },
  {
    "code": "CA",
    "name": "Canada",
    "food": "Click Here"
  },
  {
    "code": "CV",
    "name": "Cape Verde",
    "food": "Click Here"
  },
  {
    "code": "KY",
    "name": "Cayman Islands",
    "food": "Click Here"
  },
  {
    "code": "CF",
    "name": "Central African Republic",
    "food": "Click Here"
  },
  {
    "code": "TD",
    "name": "Chad",
    "food": "Click Here"
  },
  {
    "code": "CL",
    "name": "Chile",
    "food": "Click Here"
  },
  {
    "code": "CN",
    "name": "China",
    "food": "Click Here"
  },
  {
    "code": "CX",
    "name": "Christmas Island",
    "food": "Click Here"
  },
  {
    "code": "CO",
    "name": "Colombia",
    "food": "Click Here"
  },
  {
    "code": "KM",
    "name": "Comoros",
    "food": "Click Here"
  },
  {
    "code": "CG",
    "name": "Congo",
    "food": "Click Here"
  },
  {
    "code": "CD",
    "name": "Congo, Democratic Republic",
    "food": "Click Here"
  },
  {
    "code": "CK",
    "name": "Cook Islands",
    "food": "Click Here"
  },
  {
    "code": "CR",
    "name": "Costa Rica",
    "food": "Click Here"
  },
  {
    "code": "CI",
    "name": "Cote D'Ivoire",
    "food": "Click Here"
  },
  {
    "code": "HR",
    "name": "Croatia",
    "food": "Click Here"
  },
  {
    "code": "CU",
    "name": "Cuba",
    "food": "Click Here"
  },
  {
    "code": "CY",
    "name": "Cyprus",
    "food": "Click Here"
  },
  {
    "code": "CZ",
    "name": "Czech Republic",
    "food": "Click Here"
  },
  {
    "code": "DK",
    "name": "Denmark",
    "food": "Click Here"
  },
  {
    "code": "DJ",
    "name": "Djibouti",
    "food": "Click Here"
  },
  {
    "code": "DM",
    "name": "Dominica",
    "food": "Click Here"
  },
  {
    "code": "DO",
    "name": "Dominican Republic",
    "food": "Click Here"
  },
  {
    "code": "EC",
    "name": "Ecuador",
    "food": "Click Here"
  },
  {
    "code": "EG",
    "name": "Egypt",
    "food": "Click Here"
  },
  {
    "code": "SV",
    "name": "El Salvador",
    "food": "Click Here"
  },
  {
    "code": "GQ",
    "name": "Equatorial Guinea",
    "food": "Click Here"
  },
  {
    "code": "ER",
    "name": "Eritrea",
    "food": "Click Here"
  },
  {
    "code": "EE",
    "name": "Estonia",
    "food": "Click Here"
  },
  {
    "code": "ET",
    "name": "Ethiopia",
    "food": "Click Here"
  },
  {
    "code": "FK",
    "name": "Falkland Islands",
    "food": "Click Here"
  },
  {
    "code": "FO",
    "name": "Faroe Islands",
    "food": "Click Here"
  },
  {
    "code": "FJ",
    "name": "Fiji",
    "food": "Click Here"
  },
  {
    "code": "FI",
    "name": "Finland",
    "food": "Click Here"
  },
  {
    "code": "FR",
    "name": "France",
    "food": "Click Here"
  },
  {
    "code": "GA",
    "name": "Gabon",
    "food": "Click Here"
  },
  {
    "code": "GM",
    "name": "Gambia",
    "food": "Click Here"
  },
  {
    "code": "GE",
    "name": "Georgia",
    "food": "Click Here"
  },
  {
    "code": "DE",
    "name": "Germany",
    "food": "Click Here"
  },
  {
    "code": "GH",
    "name": "Ghana",
    "food": "Click Here"
  },
  {
    "code": "GI",
    "name": "Gibraltar",
    "food": "Click Here"
  },
  {
    "code": "GR",
    "name": "Greece",
    "food": "Click Here"
  },
  {
    "code": "GL",
    "name": "Greenland",
    "food": "Click Here"
  },
  {
    "code": "GD",
    "name": "Grenada",
    "food": "Click Here"
  },
  {
    "code": "GT",
    "name": "Guatemala",
    "food": "Click Here"
  },
  {
    "code": "GN",
    "name": "Guinea",
    "food": "Click Here"
  },
  {
    "code": "GW",
    "name": "Guinea-Bissau",
    "food": "Click Here"
  },
  {
    "code": "GY",
    "name": "Guyana",
    "food": "Click Here"
  },
  {
    "code": "HT",
    "name": "Haiti",
    "food": "Click Here"
  },
  {
    "code": "HN",
    "name": "Honduras",
    "food": "Click Here"
  },
  {
    "code": "HU",
    "name": "Hungary",
    "food": "Click Here"
  },
  {
    "code": "IS",
    "name": "Iceland",
    "food": "Click Here"
  },
  {
    "code": "IN",
    "name": "India",
    "food": "Click Here"
  },
  {
    "code": "ID",
    "name": "Indonesia",
    "food": "Click Here"
  },
  {
    "code": "IQ",
    "name": "Iraq",
    "food": "Click Here"
  },
  {
    "code": "IE",
    "name": "Ireland",
    "food": "Click Here"
  },
  {
    "code": "IL",
    "name": "Israel",
    "food": "Click Here"
  },
  {
    "code": "IT",
    "name": "Italy",
    "food": "Click Here"
  },
  {
    "code": "JM",
    "name": "Jamaica",
    "food": "Click Here"
  },
  {
    "code": "JP",
    "name": "Japan",
    "food": "Click Here"
  },
  {
    "code": "JO",
    "name": "Jordan",
    "food": "Click Here"
  },
  {
    "code": "KZ",
    "name": "Kazakhstan",
    "food": "Click Here"
  },
  {
    "code": "KE",
    "name": "Kenya",
    "food": "Click Here"
  },
  {
    "code": "KI",
    "name": "Kiribati",
    "food": "Click Here"
  },
  {
    "code": "KR",
    "name": "Korea",
    "food": "Click Here"
  },
  {
    "code": "KW",
    "name": "Kuwait",
    "food": "Click Here"
  },
  {
    "code": "KG",
    "name": "Kyrgyzstan",
    "food": "Click Here"
  },
  {
    "code": "LV",
    "name": "Latvia",
    "food": "Click Here"
  },
  {
    "code": "LB",
    "name": "Lebanon",
    "food": "Click Here"
  },
  {
    "code": "LR",
    "name": "Liberia",
    "food": "Click Here"
  },
  {
    "code": "LT",
    "name": "Lithuania",
    "food": "Click Here"
  },
  {
    "code": "LU",
    "name": "Luxembourg",
    "food": "Click Here"
  },
  {
    "code": "MK",
    "name": "Macedonia",
    "food": "Click Here"
  },
  {
    "code": "MG",
    "name": "Madagascar",
    "food": "Click Here"
  },
  {
    "code": "MW",
    "name": "Malawi",
    "food": "Click Here"
  },
  {
    "code": "MY",
    "name": "Malaysia",
    "food": "Click Here"
  },
  {
    "code": "MV",
    "name": "Maldives",
    "food": "Click Here"
  },
  {
    "code": "ML",
    "name": "Mali",
    "food": "Click Here"
  },
  {
    "code": "MT",
    "name": "Malta",
    "food": "Click Here"
  },
  {
    "code": "MH",
    "name": "Marshall Islands",
    "food": "Click Here"
  },
  {
    "code": "MR",
    "name": "Mauritania",
    "food": "Click Here"
  },
  {
    "code": "MU",
    "name": "Mauritius",
    "food": "Click Here"
  },
  {
    "code": "MX",
    "name": "Mexico",
    "food": "Click Here"
  },
  {
    "code": "MD",
    "name": "Moldova",
    "food": "Click Here"
  },
  {
    "code": "MC",
    "name": "Monaco",
    "food": "Click Here"
  },
  {
    "code": "MN",
    "name": "Mongolia",
    "food": "Click Here"
  },
  {
    "code": "ME",
    "name": "Montenegro",
    "food": "Click Here"
  },
  {
    "code": "MS",
    "name": "Montserrat",
    "food": "Click Here"
  },
  {
    "code": "MA",
    "name": "Morocco",
    "food": "Click Here"
  },
  {
    "code": "MZ",
    "name": "Mozambique",
    "food": "Click Here"
  },
  {
    "code": "NA",
    "name": "Namibia",
    "food": "Click Here"
  },
  {
    "code": "NR",
    "name": "Nauru",
    "food": "Click Here"
  },
  {
    "code": "NP",
    "name": "Nepal",
    "food": "Click Here"
  },
  {
    "code": "NL",
    "name": "Netherlands",
    "food": "Click Here"
  },
  {
    "code": "NZ",
    "name": "New Zealand",
    "food": "Click Here"
  },
  {
    "code": "NI",
    "name": "Nicaragua",
    "food": "Click Here"
  },
  {
    "code": "NE",
    "name": "Niger",
    "food": "Click Here"
  },
  {
    "code": "NG",
    "name": "Nigeria",
    "food": "Click Here"
  },
  {
    "code": "NO",
    "name": "Norway",
    "food": "Click Here"
  },
  {
    "code": "OM",
    "name": "Oman",
    "food": "Click Here"
  },
  {
    "code": "PK",
    "name": "Pakistan",
    "food": "Click Here"
  },
  {
    "code": "PW",
    "name": "Palau",
    "food": "Click Here"
  },

  {
    "code": "PA",
    "name": "Panama",
    "food": "Click Here"
  },
  {
    "code": "PG",
    "name": "Papua New Guinea",
    "food": "Click Here"
  },
  {
    "code": "PY",
    "name": "Paraguay",
    "food": "Click Here"
  },
  {
    "code": "PE",
    "name": "Peru",
    "food": "Click Here"
  },
  {
    "code": "PH",
    "name": "Philippines",
    "food": "Click Here"
  },
  {
    "code": "PL",
    "name": "Poland",
    "food": "Click Here"
  },
  {
    "code": "PT",
    "name": "Portugal",
    "food": "Click Here"
  },
  {
    "code": "PR",
    "name": "Puerto Rico",
    "food": "Click Here"
  },
  {
    "code": "QA",
    "name": "Qatar",
    "food": "Click Here"
  },
  {
    "code": "RO",
    "name": "Romania",
    "food": "Click Here"
  },
  {
    "code": "RU",
    "name": "Russia",
    "food": "Click Here"
  },
  {
    "code": "RW",
    "name": "Rwanda",
    "food": "Click Here"
  },
  {
    "code": "LC",
    "name": "Saint Lucia",
    "food": "Click Here"
  },
  {
    "code": "WS",
    "name": "Samoa",
    "food": "Click Here"
  },
  {
    "code": "SM",
    "name": "San Marino",
    "food": "Click Here"
  },

  {
    "code": "SA",
    "name": "Saudi Arabia",
    "food": "Click Here"
  },
  {
    "code": "SN",
    "name": "Senegal",
    "food": "Click Here"
  },
  {
    "code": "RS",
    "name": "Serbia",
    "food": "Click Here"
  },
  {
    "code": "SC",
    "name": "Seychelles",
    "food": "Click Here"
  },
  {
    "code": "SL",
    "name": "Sierra Leone",
    "food": "Click Here"
  },
  {
    "code": "SG",
    "name": "Singapore",
    "food": "Click Here"
  },
  {
    "code": "SK",
    "name": "Slovakia",
    "food": "Click Here"
  },
  {
    "code": "SI",
    "name": "Slovenia",
    "food": "Click Here"
  },
  {
    "code": "SB",
    "name": "Solomon Islands",
    "food": "Click Here"
  },
  {
    "code": "SO",
    "name": "Somalia",
    "food": "Click Here"
  },
  {
    "code": "ZA",
    "name": "South Africa",
    "food": "Click Here"
  },
  {
    "code": "KR",
    "name": "South Korea",
    "food": "Click Here"
  },
  {
    "code": "ES",
    "name": "Spain",
    "food": "Click Here"
  },
  {
    "code": "LK",
    "name": "Sri Lanka",
    "food": "Click Here"
  },
  {
    "code": "SD",
    "name": "Sudan",
    "food": "Click Here"
  },
  {
    "code": "SR",
    "name": "Suriname",
    "food": "Click Here"
  },
  {
    "code": "SE",
    "name": "Sweden",
    "food": "Click Here"
  },
  {
    "code": "CH",
    "name": "Switzerland",
    "food": "Click Here"
  },
  {
    "code": "TW",
    "name": "Taiwan",
    "food": "Click Here"
  },
  {
    "code": "TJ",
    "name": "Tajikistan",
    "food": "Click Here"
  },
  {
    "code": "TZ",
    "name": "Tanzania",
    "food": "Click Here"
  },
  {
    "code": "TH",
    "name": "Thailand",
    "food": "Click Here"
  },
  {
    "code": "TG",
    "name": "Togo",
    "food": "Click Here"
  },
  {
    "code": "TN",
    "name": "Tunisia",
    "food": "Click Here"
  },
  {
    "code": "TR",
    "name": "Turkey",
    "food": "Click Here"
  },
  {
    "code": "TM",
    "name": "Turkmenistan",
    "food": "Click Here"
  },
  {
    "code": "TV",
    "name": "Tuvalu",
    "food": "Click Here"
  },
  {
    "code": "UG",
    "name": "Uganda",
    "food": "Click Here"
  },
  {
    "code": "UA",
    "name": "Ukraine",
    "food": "Click Here"
  },
  {
    "code": "AE",
    "name": "United Arab Emirates",
    "food": "Click Here"
  },
  {
    "code": "GB",
    "name": "United Kingdom",
    "food": "Click Here"
  },
  {
    "code": "US",
    "name": "United States",
    "food": "Click Here"
  },

  {
    "code": "UY",
    "name": "Uruguay",
    "food": "Click Here"
  },
  {
    "code": "UZ",
    "name": "Uzbekistan",
    "food": "Click Here"
  },
  {
    "code": "VU",
    "name": "Vanuatu",
    "food": "Click Here"
  },
  {
    "code": "VE",
    "name": "Venezuela",
    "food": "Click Here"
  },
  {
    "code": "VN",
    "name": "Viet Nam",
    "food": "Click Here"
  },
  {
    "code": "YE",
    "name": "Yemen",
    "food": "Click Here"
  },
  {
    "code": "ZM",
    "name": "Zambia",
    "food": "Click Here"
  },
  {
    "code": "ZW",
    "name": "Zimbabwe",
    "food": "Click Here"
  }
];
