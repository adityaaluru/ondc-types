class InitPayload {
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
  coreVersion: string;
  bapId: string;
  bapUri: string;
  bppId: string;
  bppUri: string;
  transactionId: string;
  messageId: string;
  city: string;
  country: string;
  timestamp: string;
  ttl: string;

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
    timestamp: string,
    ttl: string
  ) {
    this.domain = domain;
    this.action = action;
    this.coreVersion = coreVersion;
    this.bapId = bapId;
    this.bapUri = bapUri;
    this.bppId = bppId;
    this.bppUri = bppUri;
    this.transactionId = transactionId;
    this.messageId = messageId;
    this.city = city;
    this.country = country;
    this.timestamp = timestamp;
    this.ttl = ttl;
  }
}

class Message {
  order: Order;

  constructor(order: Order) {
    this.order = order;
  }
}

class Order {
  provider: Provider;
  items: Item[];
  billing: Billing;
  fulfillments: Fulfillment[];

  constructor(
    provider: Provider,
    items: Item[],
    billing: Billing,
    fulfillments: Fulfillment[]
  ) {
    this.provider = provider;
    this.items = items;
    this.billing = billing;
    this.fulfillments = fulfillments;
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
  fulfillmentId: string;
  quantity: Quantity;

  constructor(id: string, fulfillmentId: string, quantity: Quantity) {
    this.id = id;
    this.fulfillmentId = fulfillmentId;
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
  email: string;
  phone: string;
  createdAt: string;
  updatedAt: string;

  constructor(
    name: string,
    address: Address,
    email: string,
    phone: string,
    createdAt: string,
    updatedAt: string
  ) {
    this.name = name;
    this.address = address;
    this.email = email;
    this.phone = phone;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
  }
}

class Address {
  name: string;
  door: string;
  building: string;
  locality: string;
  city: string;
  state: string;
  country: string;
  areaCode: string;

  constructor(
    name: string,
    door: string,
    building: string,
    locality: string,
    city: string,
    state: string,
    country: string,
    areaCode: string
  ) {
    this.name = name;
    this.door = door;
    this.building = building;
    this.locality = locality;
    this.city = city;
    this.state = state;
    this.country = country;
    this.areaCode = areaCode;
  }
}

class Fulfillment {
  id: string;
  type: string;
  providerId: string;
  end: End;

  constructor(id: string, type: string, providerId: string, end: End) {
    this.id = id;
    this.type = type;
    this.providerId = providerId;
    this.end = end;
  }
}

class End {
  location: Locationclass;
  contact: Contact;

  constructor(location: Locationclass, contact: Contact) {
    this.location = location;
    this.contact = contact;
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

class Contact {
  phone: string;

  constructor(phone: string) {
    this.phone = phone;
  }
}
