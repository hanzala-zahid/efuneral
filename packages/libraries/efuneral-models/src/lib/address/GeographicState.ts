export enum GeographicState {
    ALABAMA = 'Alabama',
    ALASKA = 'Alaska',
    ARIZONA = 'Arizona',
    ARKANSAS = 'Arkansas',
    CALIFORNIA = 'California',
    COLORADO = 'Colorado',
    CONNECTICUT = 'Connecticut',
    // WASHINGTONDC = 'Washington DC', TODO - do we really need this?
    DELAWARE = 'Delaware',
    FLORIDA = 'Florida',
    GEORGIA = 'Georgia',
    HAWAII = 'Hawaii',
    IDAHO = 'Idaho',
    ILLINOIS = 'Illinois',
    INDIANA = 'Indiana',
    IOWA = 'Iowa',
    KANSAS = 'Kansas',
    KENTUCKY = 'Kentucky',
    LOUISIANA = 'Louisiana',
    MAINE = 'Maine',
    MARYLAND = 'Maryland',
    MASSACHUSETTS = 'Massachusetts',
    MICHIGAN = 'Michigan',
    MINNESOTA = 'Minnesota',
    MISSISSIPPI = 'Mississippi',
    MISSOURI = 'Missouri',
    MONTANA = 'Montana',
    NEBRASKA = 'Nebraska',
    NEVADA = 'Nevada',
    NEWHAMPSHIRE = 'New Hampshire',
    NEWJERSEY = 'New Jersey',
    NEWMEXICO = 'New Mexico',
    NEWYORK = 'New York',
    NORTHCAROLINA = 'North Carolina',
    NORTHDAKOTA = 'North Dakota',
    OHIO = 'Ohio',
    OKLAHOMA = 'Oklahoma',
    OREGON = 'Oregon',
    PENNSYLVANIA = 'Pennsylvania',
    RHODEISLAND = 'Rhode Island',
    SOUTHCAROLINA = 'South Carolina',
    SOUTHDAKOTA = 'South Dakota',
    TENNESSEE = 'Tennessee',
    TEXAS = 'Texas',
    UTAH = 'Utah',
    VERMONT = 'Vermont',
    VIRGINIA = 'Virginia',
    WASHINGTON = 'Washington',
    WESTVIRGINIA = 'West Virginia',
    WISCONSIN = 'Wisconsin',
    WYOMING = 'Wyoming',
}

export const getTwoLetterCodeForState = (geographicState: GeographicState) => {
    switch(geographicState) {
        case GeographicState.ALABAMA: return 'AL';
        case GeographicState.ALASKA: return 'AK';
        case GeographicState.ARIZONA: return 'AZ';
        case GeographicState.ARKANSAS: return 'AR';
        case GeographicState.CALIFORNIA: return 'CA';
        case GeographicState.COLORADO: return 'CO';
        case GeographicState.CONNECTICUT: return 'CT';
        // case GeographicState.WASHINGTONDC: return 'DC'; TODO - do we really need this?
        case GeographicState.DELAWARE: return 'DE';
        case GeographicState.FLORIDA: return 'FL';
        case GeographicState.GEORGIA: return 'GA';
        case GeographicState.HAWAII: return 'HI';
        case GeographicState.IDAHO: return 'ID';
        case GeographicState.ILLINOIS: return 'IL';
        case GeographicState.INDIANA: return 'IN';
        case GeographicState.IOWA: return 'IA';
        case GeographicState.KANSAS: return 'KS';
        case GeographicState.KENTUCKY: return 'KY';
        case GeographicState.LOUISIANA: return 'LA';
        case GeographicState.MAINE: return 'ME';
        case GeographicState.MARYLAND: return 'MD';
        case GeographicState.MASSACHUSETTS: return 'MA';
        case GeographicState.MICHIGAN: return 'MI';
        case GeographicState.MINNESOTA: return 'MN';
        case GeographicState.MISSISSIPPI: return 'MS';
        case GeographicState.MISSOURI: return 'MO';
        case GeographicState.MONTANA: return 'MT';
        case GeographicState.NEBRASKA: return 'NE';
        case GeographicState.NEVADA: return 'NV';
        case GeographicState.NEWHAMPSHIRE: return 'NH';
        case GeographicState.NEWJERSEY: return 'NJ';
        case GeographicState.NEWMEXICO: return 'NM';
        case GeographicState.NEWYORK: return 'NY';
        case GeographicState.NORTHCAROLINA: return 'NC';
        case GeographicState.NORTHDAKOTA: return 'ND';
        case GeographicState.OHIO: return 'OH';
        case GeographicState.OKLAHOMA: return 'OK';
        case GeographicState.OREGON: return 'OR';
        case GeographicState.PENNSYLVANIA: return 'PA';
        case GeographicState.RHODEISLAND: return 'RI';
        case GeographicState.SOUTHCAROLINA: return 'SC';
        case GeographicState.SOUTHDAKOTA: return 'SD';
        case GeographicState.TENNESSEE: return 'TN';
        case GeographicState.TEXAS: return 'TX';
        case GeographicState.UTAH: return 'UT';
        case GeographicState.VERMONT: return 'VT';
        case GeographicState.VIRGINIA: return 'VA';
        case GeographicState.WASHINGTON: return 'WA';
        case GeographicState.WESTVIRGINIA: return 'WV';
        case GeographicState.WISCONSIN: return 'WI';
        case GeographicState.WYOMING: return 'WY';
    }
}