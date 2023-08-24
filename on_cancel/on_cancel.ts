class onCancelPayload {
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
  tags: Tags;

  constructor(id: string, state: string, tags: Tags) {
    this.id = id;
    this.state = state;
    this.tags = tags;
  }
}

class Tags {
  cancellation_reason_id: string;

  constructor(cancellation_reason_id: string) {
    this.cancellation_reason_id = cancellation_reason_id;
  }
}
