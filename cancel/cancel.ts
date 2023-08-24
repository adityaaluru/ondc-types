class CancelPayload {
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
  order_id: string;
  cancellation_reason_id: string;

  constructor(order_id: string, cancellation_reason_id: string) {
    this.order_id = order_id;
    this.cancellation_reason_id = cancellation_reason_id;
  }
}
