class TrackPayload {
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

  constructor(options: {
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
  }) {
    this.domain = options.domain;
    this.action = options.action;
    this.core_version = options.core_version;
    this.bap_id = options.bap_id;
    this.bap_uri = options.bap_uri;
    this.bpp_id = options.bpp_id;
    this.bpp_uri = options.bpp_uri;
    this.transaction_id = options.transaction_id;
    this.message_id = options.message_id;
    this.city = options.city;
    this.country = options.country;
    this.timestamp = options.timestamp;
    this.ttl = options.ttl;
  }
}

class Message {
  order_id: string;
  callback_url: string;

  constructor(order_id: string, callback_url: string) {
    this.order_id = order_id;
    this.callback_url = callback_url;
  }
}
