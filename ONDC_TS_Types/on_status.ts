import {
  confirmParams,
  confirmPayment,
  confirmSettlementDetails,
} from "./confirm";
import { initAddress, initBilling, initItem } from "./init";
import {
  onSelectBreakup,
  onSelectContext,
  onSelectPrice,
  onSelectQuote,
} from "./onSelect";
import {
  onConfirmDocuments,
  onConfirmLocations,
  onConfirmProvider,
} from "./on_confirm";
import { SelectQuantity } from "./select";

export class onStatusPayload {
  context: onStatusContext;
  message: onStatusMessage;

  constructor(context: onStatusContext, message: onStatusMessage) {
    this.context = context;
    this.message = message;
  }
}

class onStatusContext extends onSelectContext {
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

export class onStatusMessage {
  order: onStatusOrder;

  constructor(order: onStatusOrder) {
    this.order = order;
  }
}

export class onStatusOrder {
  id: string;
  state: string;
  provider: onStatusProvider;
  items: onStatusItem[];
  billing: onStatusBilling;
  fulfillments: onStatusFulfillment[];
  quote: onStatusQuote;
  payment: onStatusPayment;
  documents: onStatusDocuments[];
  created_at: string;
  updated_at: string;

  constructor(
    id: string,
    state: string,
    provider: onStatusProvider,
    items: onStatusItem[],
    billing: onStatusBilling,
    fulfillments: onStatusFulfillment[],
    quote: onStatusQuote,
    payment: onStatusPayment,
    documents: onStatusDocuments[],
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

export class onStatusProvider {
  id: string;
  locations: onConfirmLocations[];

  constructor(id: string, locations: onConfirmLocations[]) {
    this.id = id;
    this.locations = locations;
  }
}

class onStatusItem extends initItem {
  tags: onStatusTags;

  constructor(
    id: string,
    fulfillment_id: string,
    quantity: SelectQuantity,
    tags: onStatusTags
  ) {
    super(id, fulfillment_id, quantity);
    this.tags = tags;
  }
}

export class onStatusTags {
  status: string;

  constructor(status: string) {
    this.status = status;
  }
}

class onStatusBilling extends initBilling {
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

export class onStatusFulfillment {
  id: string;
  provider_name: string;
  type: string;
  tracking: boolean;
  state: onStatusState;
  start: onStatusStart;
  end: onStatusEnd;
  agent: onStatusAgent;
  vehicle: onStatusVehicle;

  constructor(
    id: string,
    provider_name: string,
    type: string,
    tracking: boolean,
    state: onStatusState,
    start: onStatusStart,
    end: onStatusEnd,
    agent: onStatusAgent,
    vehicle: onStatusVehicle
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

export class onStatusState {
  descriptor: onStatusDescriptor;

  constructor(descriptor: onStatusDescriptor) {
    this.descriptor = descriptor;
  }
}

export class onStatusDescriptor {
  code: string;

  constructor(code: string) {
    this.code = code;
  }
}

export class onStatusStart {
  location: onStatusLocationclass;
  time: onStatusTime;
  instructions: onStatusInstructions;
  contact: onStatusContact;

  constructor(
    location: onStatusLocationclass,
    time: onStatusTime,
    instructions: onStatusInstructions,
    contact: onStatusContact
  ) {
    this.location = location;
    this.time = time;
    this.instructions = instructions;
    this.contact = contact;
  }
}

export class onStatusLocationclass {
  descriptor: onStatusDescriptors;
  gps: string;

  constructor(descriptor: onStatusDescriptors, gps: string) {
    this.descriptor = descriptor;
    this.gps = gps;
  }
}

export class onStatusDescriptors {
  name: string;
  images: string;

  constructor(name: string, images: string) {
    this.name = name;
    this.images = images;
  }
}

export class onStatusTime {
  range: onStatusRanges;
  timestamp: string;

  constructor(range: onStatusRanges, timestamp: string) {
    this.range = range;
    this.timestamp = timestamp;
  }
}

export class onStatusRanges {
  start: string;
  end: string;

  constructor(start: string, end: string) {
    this.start = start;
    this.end = end;
  }
}

export class onStatusInstructions {
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

export class onStatusContact {
  phone: string;
  email: string;

  constructor(phone: string, email: string) {
    this.phone = phone;
    this.email = email;
  }
}

export class onStatusEnd {
  location: onStatusLocation1;
  time: onStatusTime;
  instructions: onStatusInstructions;
  contact: onStatusContacts;

  constructor(
    location: onStatusLocation1,
    time: onStatusTime,
    instructions: onStatusInstructions,
    contact: onStatusContacts
  ) {
    this.location = location;
    this.time = time;
    this.instructions = instructions;
    this.contact = contact;
  }
}

export class onStatusLocation1 {
  gps: string;
  address: initAddress;

  constructor(gps: string, address: initAddress) {
    this.gps = gps;
    this.address = address;
  }
}

export class onStatusContacts {
  phone: string;

  constructor(phone: string) {
    this.phone = phone;
  }
}

export class onStatusAgent {
  name: string;
  phone: string;

  constructor(name: string, phone: string) {
    this.name = name;
    this.phone = phone;
  }
}

export class onStatusVehicle {
  category: string;
  size: string;
  registration: string;

  constructor(category: string, size: string, registration: string) {
    this.category = category;
    this.size = size;
    this.registration = registration;
  }
}

class onStatusQuote extends onSelectQuote {
  constructor(price: onSelectPrice, breakup: onSelectBreakup[], ttl: string) {
    super(price, breakup, ttl);
  }
}

class onStatusPayment extends confirmPayment {
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
    super(
      uri,
      tl_method,
      params,
      status,
      type,
      collected_by,
      buyer_app_finder_fee_type,
      buyer_app_finder_fee_amount,
      settlement_details
    );
  }
}

class onStatusDocuments extends onConfirmDocuments {
  constructor(url: string, label: string) {
    super(url, label);
  }
}
