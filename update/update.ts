class UpdatePayload {
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
    this.ttl = ttl;
  }
}

class Message {
  update_target: string;
  order: Order;

  constructor(update_target: string, order: Order) {
    this.update_target = update_target;
    this.order = order;
  }
}

class Order {
  id: string;
  state: string;
  provider: Provider;
  items: Item[];
  payment: Payment;

  constructor(
    id: string,
    state: string,
    provider: Provider,
    items: Item[],
    payment: Payment
  ) {
    this.id = id;
    this.state = state;
    this.provider = provider;
    this.items = items;
    this.payment = payment;
  }
}

class Provider {
  id: string;

  constructor(id: string) {
    this.id = id;
  }
}

class Item {
  id: string;
  quantity: Quantity;
  tags: Tags;

  constructor(id: string, quantity: Quantity, tags: Tags) {
    this.id = id;
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
  update_type: string;
  reason_code: string;
  ttl_approval: string;
  ttl_reverseqc: string;
  image: string;

  constructor(
    update_type: string,
    reason_code: string,
    ttl_approval: string,
    ttl_reverseqc: string,
    image: string
  ) {
    this.update_type = update_type;
    this.reason_code = reason_code;
    this.ttl_approval = ttl_approval;
    this.ttl_reverseqc = ttl_reverseqc;
    this.image = image;
  }
}

class Payment {
  settlement_details: Settlement_details;

  constructor(settlement_details: Settlement_details) {
    this.settlement_details;
  }
}

class Settlement_details {
  settlement_counterparty: string;
  settlement_phase: string;
  settlement_type: string;
  settlement_amount: string;
  settlement_timestamp: string;

  constructor(
    settlement_counterparty: string,
    settlement_phase: string,
    settlement_type: string,
    settlement_amount: string,
    settlement_timestamp: string
  ) {
    this.settlement_counterparty = settlement_counterparty;
    this.settlement_phase = settlement_phase;
    this.settlement_type = settlement_type;
    this.settlement_amount = settlement_amount;
    this.settlement_timestamp = settlement_timestamp;
  }
}
