export class SearchPayload {
  context: SearchContext;
  message: SearchMessage;

  constructor(context: SearchContext, message: SearchMessage) {
    this.context = context;
    this.message = message;
  }
}

export class SearchContext {
  domain: string;
  action: string;
  core_version: string;
  bap_id: string;
  bap_uri: string;
  bpp_id: string;
  bpp_uri: string;
  transaction_id: string;
  message_id: string;
  city: string;
  country: string;
  timestamp: string;
  ttl: string;

  constructor(
    domain: string,
    action: string,
    core_version: string,
    bap_id: string,
    bap_uri: string,
    bpp_id: string,
    bpp_uri: string,
    transaction_id: string,
    message_id: string,
    city: string,
    country: string,
    timestamp: string,
    ttl: string
  ) {
    this.domain = domain;
    this.action = action;
    this.core_version = core_version;
    this.bap_id = bap_id;
    this.bap_uri = bap_uri;
    this.bpp_id = bpp_id;
    this.bpp_uri = bpp_uri;
    this.transaction_id = transaction_id;
    this.message_id = message_id;
    this.city = city;
    this.country = country;
    this.timestamp = timestamp;
    this.ttl = ttl;
  }
}

export class SearchMessage {
  intent: SearchIntent;

  constructor(intent: SearchIntent) {
    this.intent = intent;
  }
}

export class SearchIntent {
  fulfillment: SearchFulfillment;
  payment: SearchPayment;

  constructor(fulfillment: SearchFulfillment, payment: SearchPayment) {
    this.fulfillment = fulfillment;
    this.payment = payment;
  }
}

export class SearchFulfillment {
  type: string;
  end: SearchEnd;

  constructor(type: string, end: SearchEnd) {
    this.type = type;
    this.end = end;
  }
}

export class SearchEnd {
  location = SearchLocationclass;

  constructor(location = SearchLocationclass) {
    this.location = location;
  }
}

export class SearchLocationclass {
  gps: string;
  address: SearchAddress;

  constructor(gps: string, address: SearchAddress) {
    this.gps = gps;
    this.address = address;
  }
}

export class SearchAddress {
  areacode: string;

  constructor(areacode: string) {
    this.areacode = areacode;
  }
}

export class SearchPayment {
  feetype: string;
  feeamount: string;

  constructor(feetype: string, feeamount: string) {
    this.feetype = feetype;
    this.feeamount = feeamount;
  }
}
