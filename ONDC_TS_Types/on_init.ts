import { initAddress, initBilling, initItem } from "./init";
import { onSelectBreakup, onSelectContext, onSelectPrice, onSelectProvider, onSelectQuote} from "./onSelect";
import { SelectQuantity } from "./select";

export class onInitPayload {
  context: onInitContext;
  message: onInitMessage;

  constructor(context: onInitContext, message: onInitMessage) {
    this.context = context;
    this.message = message;
  }
}

class onInitContext extends onSelectContext  {
  
  constructor(
    domain: string,
    action: string,
    coreVersion: string,
    bapId: string,
    bapUri: string,
    bppId: string,
    bppUri: string,
    transactionId: string,
    messageId: string,
    city: string,
    country: string,
    timestamp: string
  ) {
    super(domain, action, coreVersion, bapId, bapUri, bppId, bppUri, transactionId, messageId, city, country, timestamp );
  }
}

export class onInitMessage {
  order: onInitOrder;

  constructor(order: onInitOrder) {
    this.order = order;
  }
}

export class onInitOrder {
  provider: onInitProvider;
  providerLocation: onInitProviderLocation;
  items: onInitItem[];
  billing: onInitBilling;
  fulfillments: onInitFulfillment[];
  quote: onInitQuote;
  payment: onInitPayment;

  constructor(
    provider: onInitProvider,
    providerLocation: onInitProviderLocation,
    items: onInitItem[],
    billing: onInitBilling,
    fulfillments: onInitFulfillment[],
    quote: onInitQuote,
    payment: onInitPayment
  ) {
    this.provider = provider;
    this.providerLocation = providerLocation;
    this.items = items;
    this.billing = billing;
    this.fulfillments = fulfillments;
    this.quote = quote;
    this.payment = payment;
  }
}

class onInitProvider extends onSelectProvider {
  constructor(id: string) {
    super(id);
  }
}

export class onInitProviderLocation {
  id: string;

  constructor(id: string) {
    this.id = id;
  }
}

class onInitItem extends initItem {

  constructor(id: string, fulfillmentId: string, quantity: SelectQuantity) {
    super(id, fulfillmentId, quantity);
  }
}


class onInitBilling extends initBilling {
  constructor(
    name: string,
    address: initAddress,
    email: string,
    phone: string,
    createdAt: string,
    updatedAt: string
  ) {
    super(name, address, email, phone, createdAt, updatedAt);
  }
}


export class onInitFulfillment {
  id: string;
  type: string;
  providerId: string;
  tracking: boolean;
  end: onInitEnd;

  constructor(
    id: string,
    type: string,
    providerId: string,
    tracking: boolean,
    end: onInitEnd
  ) {
    this.id = id;
    this.type = type;
    this.providerId = providerId;
    this.tracking = tracking;
    this.end = end;
  }
}

export class onInitEnd {
  location: onInitLocation;
  contact: onInitContact;

  constructor(location: onInitLocation, contact: onInitContact) {
    this.location = location;
    this.contact = contact;
  }
}

export class onInitLocation {
  gps: string;
  address: initAddress;

  constructor(gps: string, address: initAddress) {
    this.gps = gps;
    this.address = address;
  }
}

export class onInitContact {
  phone: string;

  constructor(phone: string) {
    this.phone = phone;
  }
}

class onInitQuote extends onSelectQuote {

  constructor(price: onSelectPrice, breakup: onSelectBreakup[], ttl: string) {
    super(price, breakup, ttl);
  }
}

export class onInitPrice {
  currency: string;
  value: string;

  constructor(currency: string, value: string) {
    this.currency = currency;
    this.value = value;
  }
}

export class onInitItemQuantity {
  count: number;

  constructor(count: number) {
    this.count = count;
  }
}

export class onInitItemPrice {
  price: onInitPrice;

  constructor(price: onInitPrice) {
    this.price = price;
  }
}

export class onInitPayment {
  buyerAppFinderFeeType: string;
  buyerAppFinderFeeAmount: string;
  settlementDetails: onInitSettlementDetails[];

  constructor(
    buyerAppFinderFeeType: string,
    buyerAppFinderFeeAmount: string,
    settlementDetails: onInitSettlementDetails[]
  ) {
    this.buyerAppFinderFeeType = buyerAppFinderFeeType;
    this.buyerAppFinderFeeAmount = buyerAppFinderFeeAmount;
    this.settlementDetails = settlementDetails;
  }
}

export class onInitSettlementDetails {
  settlementCounterparty: string;
  settlementPhase: string;
  settlementType: string;
  beneficiaryName: string;
  upiAddress: string;
  settlementBankAccountNo: string;
  settlementIfscCode: string;
  bankName: string;
  branchName: string;

  constructor(
    settlementCounterparty: string,
    settlementPhase: string,
    settlementType: string,
    beneficiaryName: string,
    upiAddress: string,
    settlementBankAccountNo: string,
    settlementIfscCode: string,
    bankName: string,
    branchName: string
  ) {
    this.settlementCounterparty = settlementCounterparty;
    this.settlementPhase = settlementPhase;
    this.settlementType = settlementType;
    this.beneficiaryName = beneficiaryName;
    this.upiAddress = upiAddress;
    this.settlementBankAccountNo = settlementBankAccountNo;
    this.settlementIfscCode = settlementIfscCode;
    this.bankName = bankName;
    this.branchName = branchName;
  }
}
