class ConfirmPayload {
  context: Context;
  message: Message;

  constructor(context: Context, message: Message) {
    this.context = context;
    this.message = message;
  }
}

class Context {
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

  constructor(options: {
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
  }) {
    this.domain = options.domain;
    this.action = options.action;
    this.core_version = options.core_version;
    this.bap_id = options.bap_id;
    this.bap_uri = options.bap_uri;
    this.bpp_id = options.bpp_id;
    this.bpp_uri = options.bpp_uri;
    this.transaction_id = options.transaction_id;
    this.message_id = options.message_id;
    this.city = options.city;
    this.country = options.country;
    this.timestamp = options.timestamp;
    this.ttl = options.ttl;
  }
}

class Message {
  order: Order;

  constructor(order: Order) {
    this.order = order;
  }
}

class Order {
  id: string;
  state: string;
  provider: Provider;
  items: Item[];
  billing: Billing;
  fulfillments: Fulfillment[];
  quote: Quote;
  payment: Payment;
  created_at: string;
  updated_at: string;

  constructor(options: {
    id: string;
    state: string;
    provider: Provider;
    items: Item[];
    billing: Billing;
    fulfillments: Fulfillment[];
    quote: Quote;
    payment: Payment;
    created_at: string;
    updated_at: string;
  }) {
    this.id = options.id;
    this.state = options.state;
    this.provider = options.provider;
    this.items = options.items;
    this.billing = options.billing;
    this.fulfillments = options.fulfillments;
    this.quote = options.quote;
    this.payment = options.payment;
    this.created_at = options.created_at;
    this.updated_at = options.updated_at;
  }
}

class Provider {
  id: string;
  locations: Locations[];

  constructor(id: string, locations: Locations[]) {
    this.id = id;
    this.locations = locations;
  }
}

class Locations {
  id: string;

  constructor(id: string) {
    this.id = id;
  }
}

class Item {
  id: string;
  fulfillment_id: string;
  quantity: Quantity;

  constructor(id: string, fulfillment_id: string, quantity: Quantity) {
    this.id = id;
    this.fulfillment_id = fulfillment_id;
    this.quantity = quantity;
  }
}

class Quantity {
  count: number;

  constructor(count: number) {
    this.count = count;
  }
}

class Billing {
  name: string;
  address: Address;
  phone: string;
  email: string;

  constructor(options: {
    name: string;
    address: Address;
    phone: string;
    email: string;
  }) {
    this.name = options.name;
    this.address = options.address;
    this.phone = options.phone;
    this.email = options.email;
  }
}

class Address {
  name: string;
  building: string;
  door: string;
  locality: string;
  city: string;
  state: string;
  country: string;
  area_code: string;

  constructor(options: {
    name: string;
    building: string;
    door: string;
    locality: string;
    city: string;
    state: string;
    country: string;
    area_code: string;
  }) {
    this.name = options.name;
    this.building = options.building;
    this.door = options.door;
    this.locality = options.locality;
    this.city = options.city;
    this.state = options.state;
    this.country = options.country;
    this.area_code = options.area_code;
  }
}

class Fulfillment {
  id: string;
  type: string;
  tracking: boolean;
  provider_id: string;
  end: End;

  constructor(options: {
    id: string;
    type: string;
    tracking: boolean;
    provider_id: string;
    end: End;
  }) {
    this.id = options.id;
    this.type = options.type;
    this.tracking = options.tracking;
    this.provider_id = options.provider_id;
    this.end = options.end;
  }
}

class End {
  person: Person;
  contact: Contact;
  location: Locationclass;

  constructor(options: {
    person: Person;
    contact: Contact;
    location: Locationclass;
  }) {
    this.person = options.person;
    this.contact = options.contact;
    this.location = options.location;
  }
}

class Person {
  name: string;

  constructor(name: string) {
    this.name = name;
  }
}

class Contact {
  email: string;
  phone: string;

  constructor(email: string, phone: string) {
    this.email = email;
    this.phone = phone;
  }
}

class Locationclass {
  gps: string;
  address: Address;

  constructor(gps: string, address: Address) {
    this.gps = gps;
    this.address = address;
  }
}

class Quote {
  price: Price;
  breakup: Breakup[];
  ttl: string;

  constructor(price: Price, breakup: Breakup[], ttl: string) {
    this.price = price;
    this.breakup = breakup;
    this.ttl = ttl;
  }
}

class Price {
  currency: string;
  value: string;

  constructor(currency: string, value: string) {
    this.currency = currency;
    this.value = value;
  }
}

class Breakup {
  itemId: string;
  itemQuantity: ItemQuantity;
  title: string;
  titleType: string;
  price: Price;
  item: ItemPrice;

  constructor(
    itemId: string,
    itemQuantity: ItemQuantity,
    title: string,
    titleType: string,
    price: Price,
    item: ItemPrice
  ) {
    this.itemId = itemId;
    this.itemQuantity = itemQuantity;
    this.title = title;
    this.titleType = titleType;
    this.price = price;
    this.item = item;
  }
}

class ItemQuantity {
  count: number;

  constructor(count: number) {
    this.count = count;
  }
}

class ItemPrice {
  price: Price;

  constructor(price: Price) {
    this.price = price;
  }
}

class Payment {
  uri: string;
  tl_method: string;
  params: Params;
  status: string;
  type: string;
  collected_by: string;
  "@ondc/org/buyer_app_finder_fee_type": string;
  "@ondc/org/buyer_app_finder_fee_amount": string;
  "@ondc/org/settlement_details": SettlementDetails[];

  constructor(options: {
    uri: string;
    tl_method: string;
    params: Params;
    status: string;
    type: string;
    collected_by: string;
    "@ondc/org/buyer_app_finder_fee_type": string;
    "@ondc/org/buyer_app_finder_fee_amount": string;
    "@ondc/org/settlement_details": SettlementDetails[];
  }) {
    this.uri = options.uri;
    this.tl_method = options.tl_method;
    this.params = options.params;
    this.status = options.status;
    this.type = options.type;
    this.collected_by = options.collected_by;
    this["@ondc/org/buyer_app_finder_fee_type"] =
      options["@ondc/org/buyer_app_finder_fee_type"];
    this["@ondc/org/buyer_app_finder_fee_amount"] =
      options["@ondc/org/buyer_app_finder_fee_amount"];
    this["@ondc/org/settlement_details"] =
      options["@ondc/org/settlement_details"];
  }
}

class Params {
  currency: string;
  transaction_id: string;
  amount: string;

  constructor(currency: string, transaction_id: string, amount: string) {
    this.currency = currency;
    this.transaction_id = transaction_id;
    this.amount = amount;
  }
}

class SettlementDetails {
  settlement_counterparty: string;
  settlement_phase: string;
  settlement_type: string;
  upi_address: string;
  settlement_bank_account_no: string;
  settlement_ifsc_code: string;
  beneficiary_name: string;
  bank_name: string;
  branch_name: string;

  constructor(options: {
    settlement_counterparty: string;
    settlement_phase: string;
    settlement_type: string;
    upi_address: string;
    settlement_bank_account_no: string;
    settlement_ifsc_code: string;
    beneficiary_name: string;
    bank_name: string;
    branch_name: string;
  }) {
    this.settlement_counterparty = options.settlement_counterparty;
    this.settlement_phase = options.settlement_phase;
    this.settlement_type = options.settlement_type;
    this.upi_address = options.upi_address;
    this.settlement_bank_account_no = options.settlement_bank_account_no;
    this.settlement_ifsc_code = options.settlement_ifsc_code;
    this.beneficiary_name = options.beneficiary_name;
    this.bank_name = options.bank_name;
    this.branch_name = options.branch_name;
  }
}
