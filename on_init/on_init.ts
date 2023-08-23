class OnInitPayload {
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
  coreVersion: string;
  bapId: string;
  bapUri: string;
  bppId: string;
  bppUri: string;
  transactionId: string;
  messageId: string;
  city: string;
  country: string;
  timestamp: string;

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
    this.domain = domain;
    this.action = action;
    this.coreVersion = coreVersion;
    this.bapId = bapId;
    this.bapId = bapUri;
    this.bppId = bppId;
    this.bppUri = bppUri;
    this.transactionId = transactionId;
    this.messageId = messageId;
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
  provider: Provider;
  providerLocation: ProviderLocation;
  items: Item[];
  billing: Billing;
  fulfillments: Fulfillment[];
  quote: Quote;
  payment: Payment;

  constructor(
    provider: Provider,
    providerLocation: ProviderLocation,
    items: Item[],
    billing: Billing,
    fulfillments: Fulfillment[],
    quote: Quote,
    payment: Payment
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

class Provider {
  id: string;

  constructor(id: string) {
    this.id = id;
  }
}

class ProviderLocation {
  id: string;

  constructor(id: string) {
    this.id = id;
  }
}

class Item {
  id: string;
  fulfillmentId: string;
  quantity: Quantity;

  constructor(id: string, fulfillmentId: string, quantity: Quantity) {
    this.id = id;
    this.fulfillmentId = fulfillmentId;
    this.quantity = quantity;
  }
}

class Quantity {
  count: number;

  constructor(count: number) {
    this.count = count;
  }
}

class Billing {
  name: string;
  address: Address;
  email: string;
  phone: string;
  createdAt: string;
  updatedAt: string;

  constructor(
    name: string,
    address: Address,
    email: string,
    phone: string,
    createdAt: string,
    updatedAt: string
  ) {
    this.name = name;
    this.address = address;
    this.email = email;
    this.phone = phone;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
  }
}

class Address {
  name: string;
  door: string;
  building: string;
  locality: string;
  city: string;
  state: string;
  country: string;
  areaCode: string;

  constructor(
    name: string,
    door: string,
    building: string,
    locality: string,
    city: string,
    state: string,
    country: string,
    areaCode: string
  ) {
    this.name = name;
    this.door = door;
    this.building = building;
    this.locality = locality;
    this.city = city;
    this.state = state;
    this.country = country;
    this.areaCode = areaCode;
  }
}

class Fulfillment {
  id: string;
  type: string;
  providerId: string;
  tracking: boolean;
  end: End;

  constructor(
    id: string,
    type: string,
    providerId: string,
    tracking: boolean,
    end: End
  ) {
    this.id = id;
    this.type = type;
    this.providerId = providerId;
    this.tracking = tracking;
    this.end = end;
  }
}

class End {
  location: Location;
  contact: Contact;

  constructor(location: Location, contact: Contact) {
    this.location = location;
    this.contact = contact;
  }
}

class Contact {
  phone: string;

  constructor(phone: string) {
    this.phone = phone;
  }
}

class Quote {
  price: Price;
  breakup: Breakup[];
  ttl: string;

  constructor(price: Price, breakup: Breakup[], ttl: string) {
    this.price = price;
    this.breakup = breakup;
    this.ttl = ttl;
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
  itemId: string;
  itemQuantity: ItemQuantity;
  title: string;
  titleType: string;
  price: Price;
  item: ItemPrice;

  constructor(
    itemId: string,
    itemQuantity: ItemQuantity,
    title: string,
    titleType: string,
    price: Price,
    item: ItemPrice
  ) {
    this.itemId = itemId;
    this.itemQuantity = itemQuantity;
    this.title = title;
    this.titleType = titleType;
    this.price = price;
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

class Payment {
  buyerAppFinderFeeType: string;
  buyerAppFinderFeeAmount: string;
  settlementDetails: SettlementDetails[];

  constructor(
    buyerAppFinderFeeType: string,
    buyerAppFinderFeeAmount: string,
    settlementDetails: SettlementDetails[]
  ) {
    this.buyerAppFinderFeeType = buyerAppFinderFeeType;
    this.buyerAppFinderFeeAmount = buyerAppFinderFeeAmount;
    this.settlementDetails = settlementDetails;
  }
}

class SettlementDetails {
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
