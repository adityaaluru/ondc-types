import { SearchContext } from "./Search";

export class updatePayload {
  context: updateContext;
  message: updateMessage;

  constructor(context: updateContext, message: updateMessage) {
    this.context = context;
    this.message = message;
  }
}

class updateContext extends SearchContext {
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

export class updateMessage {
  update_target: string;
  order: updateOrder;

  constructor(update_target: string, order: updateOrder) {
    this.update_target = update_target;
    this.order = order;
  }
}

export class updateOrder {
  id: string;
  state: string;
  provider: updateProvider;
  items: updateItem[];
  payment: updatePayment;

  constructor(
    id: string,
    state: string,
    provider: updateProvider,
    items: updateItem[],
    payment: updatePayment
  ) {
    this.id = id;
    this.state = state;
    this.provider = provider;
    this.items = items;
    this.payment = payment;
  }
}

export class updateProvider {
  id: string;

  constructor(id: string) {
    this.id = id;
  }
}

export class updateItem {
  id: string;
  quantity: updateQuantity;
  tags: updateTags;

  constructor(id: string, quantity: updateQuantity, tags: updateTags) {
    this.id = id;
    this.quantity = quantity;
    this.tags = tags;
  }
}

export class updateQuantity {
  count: number;

  constructor(count: number) {
    this.count = count;
  }
}

export class updateTags {
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

export class updatePayment {
  settlement_details: updateSettlement_details;

  constructor(settlement_details: updateSettlement_details) {
    this.settlement_details;
  }
}

export class updateSettlement_details {
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
