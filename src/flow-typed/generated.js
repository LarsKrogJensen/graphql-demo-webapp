// @flow
declare type QueryType =  {
    listing: ?Listing;
    organization: ?Organization;
    persons: ?Array<Person>;
    listingSearch: ?Array<SearchItem>;
    listingSearchPaged: ?SearchConnection;
}

declare type ListingQueryType =  {
    id: string;
}

declare type OrganizationQueryType =  {
    id: string;
}

declare type ListingSearchQueryType =  {
    searchQuery: string;
}

declare type ListingSearchPagedQueryType =  {
    searchQuery: string;
    first: ?number;
    last: ?number;
    before: ?string;
    after: ?string;
}

declare type Listing =  {
    id: string;
    name: ?string;
    longName: ?string;
    currencyCode: ?string;
    type: ?string;
    roundLot: ?number;
    listingDate: ?DateTime;
    quotes: ?Quotes;
    orderbook: ?OrderBook;
    issuer: ?Organization;
}

declare type DateTime = any;

declare type Quotes =  {
    lastUpdated: ?DateTime;
    openPrice: ?number;
    lowPrice: ?number;
    lastPrice: ?number;
    askPrice: ?number;
    bidPrice: ?number;
    highPrice: ?number;
    tradedVolume: ?number;
    tradedAmount: ?number;
}

declare type OrderBook =  {
    lastUpdated: ?DateTime;
    state: ?string;
    levels: ?Array<OrderLevel>;
}

declare type OrderLevel =  {
    level: ?number;
    askPrice: ?number;
    askVolume: ?number;
    askOrders: ?number;
    bidPrice: ?number;
    bidVolume: ?number;
    bidOrders: ?number;
}

declare type Organization =  {
    id: string;
    name: ?string;
    countryCode: ?string;
    industryClassification: ?Sector;
    subIndustryClassification: ?Sector;
    mostLiquidEquity: ?Listing;
}

declare type Sector =  {
    code: ?string;
    name: ?string;
}

declare type Person =  {
    socialSecurityId: ?number;
    firstName: ?string;
    lastName: ?string;
}

export type SearchItem =  {
    id: ?string;
    score: ?number;
    name: ?string;
    longName: ?string;
    listing: ?Listing;
}

declare type SearchConnection =  {
    edges: ?Array<SearchEdge>;
    pageInfo: PageInfo;
}

declare type SearchEdge =  {
    node: ?SearchItem;
    cursor: string;
}

declare type PageInfo =  {
    hasNextPage: bool;
    hasPreviousPage: bool;
    startCursor: ?string;
    endCursor: ?string;
}

declare type MutationType =  {
    addPerson: ?Person;
    removePerson: ?Person;
}

declare type AddPersonMutationType =  {
    person: PersonInput;
}

declare type RemovePersonMutationType =  {
    socialSecurityId: number;
}

declare type PersonInput =  {
    socialSecurityId: number;
    firstName: string;
    lastName: string;
}

