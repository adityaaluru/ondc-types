import { SearchContext } from "./Search";
import { SelectProvider, SelectLocations, SelectQuantity } from "./select";

export class InitPayload {
  context: initContext;
  message: initMessage;

  constructor(context: initContext, message: initMessage) {
    this.context = context;
    this.message = message;
  }
}

class initContext extends SearchContext {
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
    super(
      domain,
      action,
      core_version,
      bap_id,
      bap_uri,
      bpp_id,
      bpp_uri,
      transaction_id,
      message_id,
      city,
      country,
      timestamp,
      ttl
    );
  }
}

export class initMessage {
  order: initOrder;

  constructor(order: initOrder) {
    this.order = order;
  }
}

export class initOrder {
  provider: initProvider;
  items: initItem[];
  billing: initBilling;
  fulfillments: initFulfillment[];

  constructor(
    provider: initProvider,
    items: initItem[],
    billing: initBilling,
    fulfillments: initFulfillment[]
  ) {
    this.provider = provider;
    this.items = items;
    this.billing = billing;
    this.fulfillments = fulfillments;
  }
}

class initProvider extends SelectProvider {
  constructor(id: string, locations: SelectLocations[]) {
    super(id, locations);
  }
}

export class initItem {
  id: string;
  fulfillmentId: string;
  quantity: initQuantity;

  constructor(id: string, fulfillmentId: string, quantity: initQuantity) {
    this.id = id;
    this.fulfillmentId = fulfillmentId;
    this.quantity = quantity;
  }
}

class initQuantity extends SelectQuantity {
  constructor(count: number) {
    super(count);
  }
}

export class initBilling {
  name: string;
  address: initAddress;
  email: string;
  phone: string;
  createdAt: string;
  updatedAt: string;

  constructor(
    name: string,
    address: initAddress,
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

export class initAddress {
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

export class initFulfillment {
  id: string;
  type: string;
  providerId: string;
  end: initEnd;

  constructor(id: string, type: string, providerId: string, end: initEnd) {
    this.id = id;
    this.type = type;
    this.providerId = providerId;
    this.end = end;
  }
}

export class initEnd {
  location: initLocationclass;
  contact: initContact;

  constructor(location: initLocationclass, contact: initContact) {
    this.location = location;
    this.contact = contact;
  }
}

export class initLocationclass {
  gps: string;
  address: initAddress;

  constructor(gps: string, address: initAddress) {
    this.gps = gps;
    this.address = address;
  }
}

export class initContact {
  phone: string;

  constructor(phone: string) {
    this.phone = phone;
  }
}
