class onStatusPayload {
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
    timestamp: string
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
  documents: Documents[];
  created_at: string;
  updated_at: string;

  constructor(
    id: string,
    state: string,
    provider: Provider,
    items: Item[],
    billing: Billing,
    fulfillments: Fulfillment[],
    quote: Quote,
    payment: Payment,
    documents: Documents[],
    created_at: string,
    updated_at: string
  ) {
    this.id = id;
    this.state = state;
    this.provider = provider;
    this.items = items;
    this.billing = billing;
    this.fulfillments = fulfillments;
    this.quote = quote;
    this.payment = payment;
    this.documents = documents;
    this.created_at = created_at;
    this.updated_at = updated_at;
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
  tags: Tags;

  constructor(
    id: string,
    fulfillment_id: string,
    quantity: Quantity,
    tags: Tags
  ) {
    this.id = id;
    this.fulfillment_id = fulfillment_id;
    this.quantity = quantity;
    this.tags = tags;
  }
}

class Quantity {
  count: number;

  constructor(count: number) {
    this.count = count;
  }
}

class Tags {
  status: string;

  constructor(status: string) {
    this.status = status;
  }
}

class Billing {
  name: string;
  address: Address;
  email: string;
  phone: string;
  created_at: string;
  updated_at: string;

  constructor(
    name: string,
    address: Address,
    email: string,
    phone: string,
    created_at: string,
    updated_at: string
  ) {
    this.name = name;
    this.address = address;
    this.phone = phone;
    this.email = email;
    this.created_at = created_at;
    this.updated_at = updated_at;
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

  constructor(
    name: string,
    building: string,
    door: string,
    locality: string,
    city: string,
    state: string,
    country: string,
    area_code: string
  ) {
    this.name = name;
    this.building = building;
    this.door = door;
    this.locality = locality;
    this.city = city;
    this.state = state;
    this.country = country;
    this.area_code = area_code;
  }
}

class Fulfillment {
  id: string;
  provider_name: string;
  type: string;
  tracking: boolean;
  state: State;
  start: Start;
  end: End;
  agent: Agent;
  vehicle: Vehicle;

  constructor(
    id: string,
    provider_name: string,
    type: string,
    tracking: boolean,
    state: State,
    start: Start,
    end: End,
    agent: Agent,
    vehicle: Vehicle
  ) {
    this.id = id;
    this.provider_name = provider_name;
    this.type = type;
    this.tracking = tracking;
    this.state = state;
    this.start = start;
    this.end = end;
    this.agent = agent;
    this.vehicle = vehicle;
  }
}

class State {
  descriptor: Descriptor;

  constructor(descriptor: Descriptor) {
    this.descriptor = descriptor;
  }
}

class Descriptor {
  code: string;

  constructor(code: string) {
    this.code = code;
  }
}

class Start {
  location: Locationclass;
  time: Time;
  instructions: Instructions;
  contact: Contact;

  constructor(
    location: Locationclass,
    time: Time,
    instructions: Instructions,
    contact: Contact
  ) {
    this.location = location;
    this.time = time;
    this.instructions = instructions;
    this.contact = contact;
  }
}

class Locationclass {
  descriptor: Descriptors;
  gps: string;

  constructor(descriptor: Descriptors, gps: string) {
    this.descriptor = descriptor;
    this.gps = gps;
  }
}

class Descriptors {
  name: string;
  images: string;

  constructor(name: string, images: string) {
    this.name = name;
    this.images = images;
  }
}

class Time {
  range: Ranges;
  timestamp: string;

  constructor(range: Ranges, timestamp: string) {
    this.range = range;
    this.timestamp = timestamp;
  }
}

class Ranges {
  start: string;
  end: string;

  constructor(start: string, end: string) {
    this.start = start;
    this.end = end;
  }
}

class Instructions {
  name: string;
  short_desc: String;
  long_desc: string;
  images: string;

  constructor(
    name: string,
    short_desc: String,
    long_desc: string,
    images: string
  ) {
    this.name = name;
    this.short_desc = short_desc;
    this.long_desc = long_desc;
    this.images = images;
  }
}

class Contact {
  phone: string;
  email: string;

  constructor(phone: string, email: string) {
    this.phone = phone;
    this.email = email;
  }
}

class End {
  location: Location1;
  time: Time;
  instructions: Instructions;
  contact: Contacts;

  constructor(
    location: Location1,
    time: Time,
    instructions: Instructions,
    contact: Contacts
  ) {
    this.location = location;
    this.time = time;
    this.instructions = instructions;
    this.contact = contact;
  }
}

class Location1 {
  gps: string;
  address: Address;

  constructor(gps: string, address: Address) {
    this.gps = gps;
    this.address = address;
  }
}

class Contacts {
  phone: string;

  constructor(phone: string) {
    this.phone = phone;
  }
}

class Agent {
  name: string;
  phone: string;

  constructor(name: string, phone: string) {
    this.name = name;
    this.phone = phone;
  }
}

class Vehicle {
  category: string;
  size: string;
  registration: string;

  constructor(category: string, size: string, registration: string) {
    this.category = category;
    this.size = size;
    this.registration = registration;
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

class Documents {
  url: string;
  label: string;

  constructor(url: string, label: string) {
    this.url = url;
    this.label = label;
  }
}
