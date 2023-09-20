import { SearchContext } from "./Search";

export class supportPayload {
  context: supportContext;
  message: supportMessage;

  constructor(context: supportContext, message: supportMessage) {
    this.context = context;
    this.message = message;
  }
}

class supportContext extends SearchContext {
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

export class supportMessage {
  ref_id: string;

  constructor(ref_id: string) {
    this.ref_id = ref_id;
  }
}
