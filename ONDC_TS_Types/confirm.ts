import { SearchContext } from "./Search";
import { initAddress, initItem } from "./init";
import { onSelectBreakup, onSelectPrice, onSelectQuote } from "./onSelect";
import { SelectLocations, SelectProvider, SelectQuantity } from "./select";

export class confirmPayload {
  context: confirmContext;
  message: confirmMessage;

  constructor(context: confirmContext, message: confirmMessage) {
    this.context = context;
    this.message = message;
  }
}
class confirmContext extends SearchContext {
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

export class confirmMessage {
  order: confirmOrder;

  constructor(order: confirmOrder) {
    this.order = order;
  }
}
export class confirmOrder {
  id: string;
  state: string;
  provider: confirmProvider;
  items: confirmItem[];
  billing: confirmBilling;
  fulfillments: confirmFulfillment[];
  quote: confirmQuote;
  payment: confirmPayment;
  created_at: string;
  updated_at: string;

  constructor(
    id: string,
    state: string,
    provider: confirmProvider,
    items: confirmItem[],
    billing: confirmBilling,
    fulfillments: confirmFulfillment[],
    quote: confirmQuote,
    payment: confirmPayment,
    created_at: string,
    updated_at: string
  ) {
    this.id = id;
    this.state = state;
    this.provider = provider;
    this.items = items;
    this.billing = billing;
    this.fulfillments = fulfillments;
    this.quote = quote;
    this.payment = payment;
    this.created_at = created_at;
    this.updated_at = updated_at;
  }
}
class confirmProvider extends SelectProvider {
  constructor(id: string, locations: SelectLocations[]) {
    super(id, locations);
  }
}

class confirmItem extends initItem {
  constructor(id: string, fulfillment_id: string, quantity: SelectQuantity) {
    super(id, fulfillment_id, quantity);
  }
}

export class confirmBilling {
  name: string;
  address: confirmAddress;
  phone: string;
  email: string;
  created_at: string;
  updated_at: string;

  constructor(options: {
    name: string;
    address: confirmAddress;
    phone: string;
    email: string;
    created_at: string;
    updated_at: string;
  }) {
    this.name = options.name;
    this.address = options.address;
    this.phone = options.phone;
    this.email = options.email;
    this.created_at = options.created_at;
    this.updated_at = options.updated_at;
  }
}
class confirmAddress extends initAddress {
  constructor(
    name: string,
    building: string,
    door: string,
    locality: string,
    city: string,
    state: string,
    country: string,
    area_code: string
  ) {
    super(name, building, door, locality, city, state, country, area_code);
  }
}
export class confirmFulfillment {
  id: string;
  type: string;
  tracking: boolean;
  provider_id: string;
  end: confirmEnd;

  constructor(options: {
    id: string;
    type: string;
    tracking: boolean;
    provider_id: string;
    end: confirmEnd;
  }) {
    this.id = options.id;
    this.type = options.type;
    this.tracking = options.tracking;
    this.provider_id = options.provider_id;
    this.end = options.end;
  }
}

export class confirmEnd {
  person: confirmPerson;
  contact: confirmContact;
  location: confirmLocationclass;

  constructor(options: {
    person: confirmPerson;
    contact: confirmContact;
    location: confirmLocationclass;
  }) {
    this.person = options.person;
    this.contact = options.contact;
    this.location = options.location;
  }
}

export class confirmPerson {
  name: string;

  constructor(name: string) {
    this.name = name;
  }
}

export class confirmContact {
  email: string;
  phone: string;

  constructor(email: string, phone: string) {
    this.email = email;
    this.phone = phone;
  }
}

export class confirmLocationclass {
  gps: string;
  address: confirmAddress;

  constructor(gps: string, address: confirmAddress) {
    this.gps = gps;
    this.address = address;
  }
}

class confirmQuote extends onSelectQuote {
  constructor(price: onSelectPrice, breakup: onSelectBreakup[], ttl: string) {
    super(price, breakup, ttl);
  }
}

export class confirmPrice {
  currency: string;
  value: string;

  constructor(currency: string, value: string) {
    this.currency = currency;
    this.value = value;
  }
}

export class confirmItemQuantity {
  count: number;

  constructor(count: number) {
    this.count = count;
  }
}

export class confirmItemPrice {
  price: confirmPrice;

  constructor(price: confirmPrice) {
    this.price = price;
  }
}

export class confirmPayment {
  uri: string;
  tl_method: string;
  params: confirmParams;
  status: string;
  type: string;
  collected_by: string;
  buyer_app_finder_fee_type: string;
  buyer_app_finder_fee_amount: string;
  settlement_details: confirmSettlementDetails[];

  constructor(
    uri: string,
    tl_method: string,
    params: confirmParams,
    status: string,
    type: string,
    collected_by: string,
    buyer_app_finder_fee_type: string,
    buyer_app_finder_fee_amount: string,
    settlement_details: confirmSettlementDetails[]
  ) {
    this.uri = uri;
    this.tl_method = tl_method;
    this.params = params;
    this.status = status;
    this.type = type;
    this.collected_by = collected_by;
    this.buyer_app_finder_fee_type = buyer_app_finder_fee_type;
    this.buyer_app_finder_fee_amount = buyer_app_finder_fee_amount;
    this.settlement_details = settlement_details;
  }
}

export class confirmParams {
  currency: string;
  transaction_id: string;
  amount: string;

  constructor(currency: string, transaction_id: string, amount: string) {
    this.currency = currency;
    this.transaction_id = transaction_id;
    this.amount = amount;
  }
}

export class confirmSettlementDetails {
  settlement_counterparty: string;
  settlement_phase: string;
  settlement_type: string;
  upi_address: string;
  settlement_bank_account_no: string;
  settlement_ifsc_code: string;
  beneficiary_name: string;
  bank_name: string;
  branch_name: string;

  constructor(options: {
    settlement_counterparty: string;
    settlement_phase: string;
    settlement_type: string;
    upi_address: string;
    settlement_bank_account_no: string;
    settlement_ifsc_code: string;
    beneficiary_name: string;
    bank_name: string;
    branch_name: string;
  }) {
    this.settlement_counterparty = options.settlement_counterparty;
    this.settlement_phase = options.settlement_phase;
    this.settlement_type = options.settlement_type;
    this.upi_address = options.upi_address;
    this.settlement_bank_account_no = options.settlement_bank_account_no;
    this.settlement_ifsc_code = options.settlement_ifsc_code;
    this.beneficiary_name = options.beneficiary_name;
    this.bank_name = options.bank_name;
    this.branch_name = options.branch_name;
  }
}
