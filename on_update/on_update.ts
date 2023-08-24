class onUpdatePayload {
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
  items: Item[];
  quote: Quote;
  fulfillments: Fulfillment[];
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

class Quote {
  price: Price;
  breakup: Breakup[];

  constructor(price: Price, breakup: Breakup[]) {
    this.price = price;
    this.breakup = breakup;
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
  item_id: string;
  title_type: string;
  itemQuantity: ItemQuantity;
  item: ItemPrice;

  constructor(
    item_id: string,
    title_type: string,
    itemQuantity: ItemQuantity,
    item: ItemPrice
  ) {
    this.item_id = item_id;
    this.title_type = title_type;
    this.itemQuantity = itemQuantity;
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

class Fulfillment {
  id: string;
  type: string;
  state: State;
  start: Start;

  constructor(id: string, type: string, state: State, start: Start) {
    this.id = id;
    this.type = type;
    this.state = state;
    this.start = start;
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
  time: Time;
  instructions: Instructions;
  images: string;

  constructor(time: Time, instructions: Instructions, images: string) {
    this.time = time;
    this.instructions = instructions;
    this.images = images;
  }
}

class Time {
  range: Ranges;

  constructor(range: Ranges) {
    this.range = range;
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
  short_desc: String;
  long_desc: string;
  additional_desc: AdditionalDesc;
  images: string;

  constructor(
    short_desc: String,
    long_desc: string,
    additional_desc: AdditionalDesc,
    images: string
  ) {
    this.short_desc = short_desc;
    this.long_desc = long_desc;
    this.additional_desc = additional_desc;
    this.images = images;
  }
}

class AdditionalDesc {
  content_type: string;
  url: string;

  constructor(content_type: string, url: string) {
    this.content_type = content_type;
    this.url = url;
  }
}


