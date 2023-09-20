import { SearchContext } from "./Search";

export class SelectPayload {
  context: SelectContext;
  message: SelectMessage;

  constructor(context: SelectContext, message: SelectMessage) {
    this.context = context;
    this.message = message;
  }
}

class SelectContext extends SearchContext {
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

export class SelectMessage {
  order: SelectOrder;

  constructor(order: SelectOrder) {
    this.order = order;
  }
}

export class SelectOrder {
  provider: SelectProvider;
  items: SelectItem[];
  fulfillments: SelectFulfillment[];

  constructor(
    provider: SelectProvider,
    items: SelectItem[],
    fulfillments: SelectFulfillment[]
  ) {
    this.provider = provider;
    this.items = items;
    this.fulfillments = fulfillments;
  }
}

export class SelectProvider {
  id: string;
  locations: SelectLocations[];

  constructor(id: string, locations: SelectLocations[]) {
    this.id = id;
    this.locations = locations;
  }
}

export class SelectLocations {
  id: string;

  constructor(id: string) {
    this.id = id;
  }
}

export class SelectItem {
  id: string;
  location_id: string;
  quantity: SelectQuantity;

  constructor(id: string, location_id: string, quantity: SelectQuantity) {
    this.id = id;
    this.location_id = location_id;
    this.quantity = quantity;
  }
}

export class SelectQuantity {
  count: number;

  constructor(count: number) {
    this.count = count;
  }
}

export class SelectFulfillment {
  end: SelectEnd;

  constructor(end: SelectEnd) {
    this.end = end;
  }
}

export class SelectEnd {
  location: SelectLocation;

  constructor(location: SelectLocation) {
    this.location = location;
  }
}

export class SelectLocation {
  gps: SelectGps;

  constructor(gps: SelectGps) {
    this.gps = gps;
  }
}

export class SelectGps {
  gps: string;
  address: SelectAddress;

  constructor(gps: string, address: SelectAddress) {
    this.gps = gps;
    this.address = address;
  }
}

export class SelectAddress {
  area_code: string;

  constructor(area_code: string) {
    this.area_code = area_code;
  }
}
