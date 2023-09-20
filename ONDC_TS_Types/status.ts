import { SearchContext } from "./Search";

export class statusPayload {
  context: statusContext;
  message: statusMessage;

  constructor(context: statusContext, message: statusMessage) {
    this.context = context;
    this.message = message;
  }
}

class statusContext extends SearchContext {

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

export class statusMessage {
  order_id: string;

  constructor(order_id: string) {
    this.order_id = order_id;
  }
}
