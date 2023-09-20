import { confirmParams, confirmPayment, confirmSettlementDetails } from "./confirm";
import { initAddress, initBilling, initItem } from "./init";
import { onSelectBreakup, onSelectContext, onSelectPrice, onSelectQuote } from "./onSelect";
import { SelectQuantity } from "./select";

export class onConfirmPayload {
  context: onConfirmContext;
  message: onConfirmMessage;

  constructor(context: onConfirmContext, message: onConfirmMessage) {
    this.context = context;
    this.message = message;
  }
}

class onConfirmContext extends onSelectContext {
  constructor(
    domain: string,
    action: string,
    coreVersion: string,
    bapId: string,
    bapUri: string,
    bppId: string,
    bppUri: string,
    transactionId: string,
    messageId: string,
    city: string,
    country: string,
    timestamp: string
  ) {
    super(
      domain,
      action,
      coreVersion,
      bapId,
      bapUri,
      bppId,
      bppUri,
      transactionId,
      messageId,
      city,
      country,
      timestamp
    );
  }
}

export class onConfirmMessage {
  order: onConfirmOrder;

  constructor(order: onConfirmOrder) {
    this.order = order;
  }
}

export class onConfirmOrder {
  id: string;
  state: string;
  provider: onConfirmProvider;
  items: onConfirmItem[];
  billing: onConfirmBilling;
  fulfillments: onConfirmFulfillment[];
  quote: onConfirmQuote;
  payment: onConfirmPayment;
  documents: onConfirmDocuments[];
  created_at: string;
  updated_at: string;

  constructor(
    id: string,
    state: string,
    provider: onConfirmProvider,
    items: onConfirmItem[],
    billing: onConfirmBilling,
    fulfillments: onConfirmFulfillment[],
    quote: onConfirmQuote,
    payment: onConfirmPayment,
    documents: onConfirmDocuments[],
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

export class onConfirmProvider {
  id: string;
  locations: onConfirmLocations[];
  rateable: boolean;

  constructor(id: string, locations: onConfirmLocations[], rateable: boolean) {
    this.id = id;
    this.locations = locations;
    this.rateable = rateable;
  }
}

export class onConfirmLocations {
  id: string;

  constructor(id: string) {
    this.id = id;
  }
}

class onConfirmItem extends initItem {

  constructor(id: string, fulfillmentId: string, quantity: SelectQuantity) {
    super(id, fulfillmentId, quantity);
  }
}


class onConfirmBilling extends initBilling {
  constructor(
    name: string,
    address: initAddress,
    email: string,
    phone: string,
    createdAt: string,
    updatedAt: string
  ) {
    super(name, address, email, phone, createdAt, updatedAt);
  }
}

export class onConfirmFulfillment {
  id: string;
  provider_name: string;
  state: onConfirmState;
  type: string;
  tracking: boolean;
  start: onConfirmStart;
  end: onConfirmEnd;
  relatable: boolean;

  constructor(
    id: string,
    provider_name: string,
    state: onConfirmState,
    type: string,
    tracking: boolean,
    start: onConfirmStart,
    end: onConfirmEnd,
    relatable: boolean
  ) {
    this.id = id;
    this.provider_name = provider_name;
    this.state = state;
    this.type = type;
    this.tracking = tracking;
    this.start = start;
    this.end = end;
    this.relatable = relatable;
  }
}

export class onConfirmState {
  descriptor: onConfirmDescriptor;

  constructor(descriptor: onConfirmDescriptor) {
    this.descriptor = descriptor;
  }
}

export class onConfirmDescriptor {
  code: string;

  constructor(code: string) {
    this.code = code;
  }
}

export class onConfirmStart {
  location: onConfirmLocationclass;
  time: onConfirmTime;
  instructions: onConfirmInstructions;
  contact: onConfirmContact;

  constructor(
    location: onConfirmLocationclass,
    time: onConfirmTime,
    instructions: onConfirmInstructions,
    contact: onConfirmContact
  ) {
    this.location = location;
    this.time = time;
    this.instructions = instructions;
    this.contact = contact;
  }
}

export class onConfirmLocationclass {
  id: string;
  descriptor: onConfirmDescriptors;

  constructor(id: string, descriptor: onConfirmDescriptors) {
    this.id = id;
    this.descriptor = descriptor;
  }
}

export class onConfirmDescriptors {
  name: string;

  constructor(name: string) {
    this.name = name;
  }
}

export class onConfirmTime {
  range: onConfirmRanges;

  constructor(range: onConfirmRanges) {
    this.range = range;
  }
}

export class onConfirmRanges {
  start: string;
  end: string;

  constructor(start: string, end: string) {
    this.start = start;
    this.end = end;
  }
}

export class onConfirmInstructions {
  name: string;
  short_desc: String;

  constructor(name: string, short_desc: String) {
    this.name = name;
    this.short_desc = short_desc;
  }
}

export class onConfirmContact {
  phone: string;
  email: string;

  constructor(phone: string, email: string) {
    this.phone = phone;
    this.email = email;
  }
}

export class onConfirmEnd {
  location: onConfirmLocation1;
  time: onConfirmTime;
  instructions: onConfirmInstructions;
  contact: onConfirmContacts;

  constructor(
    location: onConfirmLocation1,
    time: onConfirmTime,
    instructions: onConfirmInstructions,
    contact: onConfirmContacts
  ) {
    this.location = location;
    this.time = time;
    this.instructions = instructions;
    this.contact = contact;
  }
}

export class onConfirmLocation1 {
  gps: string;
  address: initAddress;

  constructor(gps: string, address: initAddress) {
    this.gps = gps;
    this.address = address;
  }
}

export class onConfirmContacts {
  phone: string;

  constructor(phone: string) {
    this.phone = phone;
  }
}

class onConfirmQuote extends onSelectQuote {
  constructor(price: onSelectPrice, breakup: onSelectBreakup[], ttl: string) {
    super(price, breakup, ttl);
  }
}


export class onConfirmItemQuantity {
  count: number;

  constructor(count: number) {
    this.count = count;
  }
}

export class onConfirmItemPrice {
  price: onSelectPrice;

  constructor(price: onSelectPrice) {
    this.price = price;
  }
}

class onConfirmPayment extends confirmPayment {
  
  constructor(
    uri: string,
    tl_method: string,
    params: confirmParams,
    status: string,
    type: string,
    collected_by: string,
    buyer_app_finder_fee_type: string,
    buyer_app_finder_fee_amount: string,
    settlement_details: confirmSettlementDetails[]
  ) {
   super(uri, tl_method, params, status, type, collected_by, buyer_app_finder_fee_type, buyer_app_finder_fee_amount, settlement_details);
  }
}


export class onConfirmDocuments {
  url: string;
  label: string;

  constructor(url: string, label: string) {
    this.url = url;
    this.label = label;
  }
}
