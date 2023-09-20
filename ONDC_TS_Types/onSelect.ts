export class onSelectPayload {
  context: onSelectContext;
  message: onSelectMessage;
  error?: onSelectErrorclass;

  constructor(context: onSelectContext, message: onSelectMessage, error?: onSelectErrorclass) {
    this.context = context;
    this.message = message;
    this.error = error;
  }
}

export class onSelectContext {
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

export class onSelectMessage {
  order: onSelectOrder;

  constructor(order: onSelectOrder) {
    this.order = order;
  }
}

// Order class
export class onSelectOrder {
  provider: onSelectProvider;
  items: onSelectItems[];
  fulfillments: onSelectFulfillment[];
  quote: onSelectQuote;

  constructor(
    provider: onSelectProvider,
    items: onSelectItems[],
    fulfillments: onSelectFulfillment[],
    quote: onSelectQuote
  ) {
    this.provider = provider;
    this.items = items;
    this.fulfillments = fulfillments;
    this.quote = quote;
  }
}

// Provider class
export class onSelectProvider {
  id: string;

  constructor(id: string) {
    this.id = id;
  }
}

// Item class
export class onSelectItems {
  fulfillment_id: string;
  id: string;

  constructor(fulfillment_id: string, id: string) {
    this.fulfillment_id = fulfillment_id;
    this.id = id;
  }
}

// Fulfillment class
export class onSelectFulfillment {
  id: string;
  provider_name: string;
  tracking: boolean;
  category: string;
  tat: string;
  state: onSelectState;

  constructor(
    id: string,
    provider_name: string,
    tracking: boolean,
    category: string,
    tat: string,
    state: onSelectState
  ) {
    this.id = id;
    this.provider_name = provider_name;
    this.tracking = tracking;
    this.category = category;
    this.tat = tat;
    this.state = state;
  }
}

// State class
export class onSelectState {
  descriptor: onSelectDescriptor;

  constructor(descriptor: onSelectDescriptor) {
    this.descriptor = descriptor;
  }
}

// Descriptor class
export class onSelectDescriptor {
  code: string;

  constructor(code: string) {
    this.code = code;
  }
}

// Quote class
export class onSelectQuote {
  price: onSelectPrice;
  breakup: onSelectBreakup[];
  ttl: string;

  constructor(price: onSelectPrice, breakup: onSelectBreakup[], ttl: string) {
    this.price = price;
    this.breakup = breakup;
    this.ttl = ttl;
  }
}

// Price class
export class onSelectPrice {
  currency: string;
  value: string;

  constructor(currency: string, value: string) {
    this.currency = currency;
    this.value = value;
  }
}

// Breakup class
export class onSelectBreakup {
  item_id?: string;
  item_quantity?: onSelectItemQuantity;
  title?: string;
  title_type?: string;
  price?: onSelectPrice;
  item?: onSelectItem;

  constructor(obj: {
    item_id?: string;
    item_quantity?: onSelectItemQuantity;
    title?: string;
    title_type?: string;
    price?: onSelectPrice;
    item?: onSelectItem;
  }) {
    this.item_id = obj.item_id;
    this.item_quantity = obj.item_quantity;
    this.title = obj.title;
    this.title_type = obj.title_type;
    this.price = obj.price;
    this.item = obj.item;
  }
}

export class onSelectItemQuantity {
  count: number;

  constructor(count: number) {
    this.count = count;
  }
}

export class onSelectItem {
  quantity?: onSelectQuantity;
  price?: onSelectPrice;

  constructor(quantity?: onSelectQuantity, price?: onSelectPrice) {
    this.quantity = quantity;
    this.price = price;
  }
}

export class onSelectQuantity {
  available?: onSelectAvailable;
  maximum?: onSelectMaximum;

  constructor(available?: onSelectAvailable, maximum?: onSelectMaximum) {
    this.available = available;
    this.maximum = maximum;
  }
}

export class onSelectAvailable {
  count?: string;

  constructor(count?: string) {
    this.count = count;
  }
}

export class onSelectMaximum {
  count?: string;

  constructor(count?: string) {
    this.count = count;
  }
}

// Error class
export class onSelectErrorclass {
  type: string;
  code: string;

  constructor(type: string, code: string) {
    this.type = type;
    this.code = code;
  }
}
