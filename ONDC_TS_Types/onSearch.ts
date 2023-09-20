export class OnSearchPayload {
  body: OnSearchBody;
  headers: OnSearchHeadersclass;

  constructor(body: OnSearchBody, headers: OnSearchHeadersclass) {
    this.body = body;
    this.headers = headers;
  }
}

export class OnSearchBody {
  context: OnSearchContext;
  message: OnSearchMessage;

  constructor(context: OnSearchContext, message: OnSearchMessage) {
    this.context = context;
    this.message = message;
  }
}

export class OnSearchContext {
  domain: string;
  country: string;
  city: string;
  action: string;
  core_version: string;
  bap_id: string;
  bap_uri: string;
  transaction_id: string;
  message_id: string;
  timestamp: string;
  bpp_uri: string;
  bpp_id: string;

  constructor(
    domain: string,
    country: string,
    city: string,
    action: string,
    core_version: string,
    bap_id: string,
    bap_uri: string,
    transaction_id: string,
    message_id: string,
    timestamp: string,
    bpp_uri: string,
    bpp_id: string
  ) {
    this.domain = domain;
    this.country = country;
    this.city = city;
    this.action = action;
    this.core_version = core_version;
    this.bap_id = bap_id;
    this.bap_uri = bap_uri;
    this.transaction_id = transaction_id;
    this.message_id = message_id;
    this.timestamp = timestamp;
    this.bpp_uri = bpp_uri;
    this.bpp_id = bpp_id;
  }
}

export class OnSearchMessage {
  catalog: OnSearchCatalog;

  constructor(catalog: OnSearchCatalog) {
    this.catalog = catalog;
  }
}

export class OnSearchCatalog {
  "bpp/fulfillments": OnSearchFulfillment[];
  "bpp/descriptor": OnSearchDescriptor;
  "bpp/providers": OnSearchProvider[];

  constructor(
    fulfillments: OnSearchFulfillment[],
    descriptor: OnSearchDescriptor,
    providers: OnSearchProvider[]
  ) {
    this["bpp/fulfillments"] = fulfillments;
    this["bpp/descriptor"] = descriptor;
    this["bpp/providers"] = providers;
  }
}

export class OnSearchFulfillment {
  id: string;
  type: string;

  constructor(id: string, type: string) {
    this.id = id;
    this.type = type;
  }
}

export class OnSearchDescriptor {
  name: string;
  short_desc: string;
  long_desc: string;
  images: string[];
  symbol: string;

  constructor(
    name: string,
    short_desc: string,
    long_desc: string,
    images: string[],
    symbol: string
  ) {
    this.name = name;
    this.short_desc = short_desc;
    this.long_desc = long_desc;
    this.images = images;
    this.symbol = symbol;
  }
}

export class OnSearchProvider {
  id: string;
  time: OnSearchTime;
  fulfillments: OnSearchFulfillments[];
  descriptor: OnSearchDescriptor;
  ttl: string;
  tags: OnSearchTag[];
  locations: OnSearchLocationclass[];
  "@ondc/org/fssai_license_no"?: string;
  items: OnSearchItem[];

  constructor(
    id: string,
    time: OnSearchTime,
    fulfillments: OnSearchFulfillments[],
    descriptor: OnSearchDescriptor,
    ttl: string,
    tags: OnSearchTag[],
    locations: OnSearchLocationclass[],
    fssaiLicenseNo: string,
    items: OnSearchItem[]
  ) {
    this.id = id;
    this.time = time;
    this.fulfillments = fulfillments;
    this.descriptor = descriptor;
    this.ttl = ttl;
    this.tags = tags;
    this.locations = locations;
    this["@ondc/org/fssai_license_no"] = fssaiLicenseNo;
    this.items = items;
  }
}

export class OnSearchTime {
  label: string;
  timestamp: string;

  constructor(label: string, timestamp: string) {
    this.label = label;
    this.timestamp = timestamp;
  }
}

export class OnSearchTag {
  code: string;
  list: OnSearchListItem[];

  constructor(code: string, list: OnSearchListItem[]) {
    this.code = code;
    this.list = list;
  }
}

export class OnSearchListItem {
  code: string;
  value: string;

  constructor(code: string, value: string) {
    this.code = code;
    this.value = value;
  }
}

export class OnSearchFulfillments {
  contact: OnSearchContact;

  constructor(contact: OnSearchContact) {
    this.contact = contact;
  }
}

export class OnSearchContact {
  email: string;
  phone: string;

  constructor(email: string, phone: string) {
    this.email = email;
    this.phone = phone;
  }
}
export class OnSearchLocationclass {
  id: string;
  gps: string;
  address: OnSearchAddress;
  time: OnSearchTime;

  constructor(
    id: string,
    gps: string,
    address: OnSearchAddress,
    time: OnSearchTime
  ) {
    this.id = id;
    this.gps = gps;
    this.address = address;
    this.time = time;
  }
}

export class OnSearchAddress {
  area_code: string;
  city: string;
  locality: string;
  state: string;
  street: string;

  constructor(
    area_code: string,
    city: string,
    locality: string,
    state: string,
    street: string
  ) {
    this.area_code = area_code;
    this.city = city;
    this.locality = locality;
    this.state = state;
    this.street = street;
  }
}

export class OnSearchItem {
  id: string;
  "@ondc/org/available_on_cod"?: boolean;
  "@ondc/org/cancellable"?: boolean;
  "@ondc/org/contact_details_consumer_care"?: string;
  "@ondc/org/return_window"?: string;
  "@ondc/org/returnable"?: boolean;
  "@ondc/org/seller_pickup_return"?: boolean;
  "@ondc/org/statutory_reqs_prepackaged_food"?: OnSearchFood;
  "@ondc/org/statutory_reqs_packaged_commodities"?: OnSearchCommodities;
  "@ondc/org/time_to_ship"?: string;
  category_id?: string;
  descriptor?: OnSearchDescriptor;
  fulfillment_id?: string;
  location_id?: string;
  price?: OnSearchPrice;
  quantity?: OnSearchQuantity;
  tags?: OnSearchTags;

  constructor(
    id: string,
    availableOnCod?: boolean,
    cancellable?: boolean,
    contactDetailsConsumerCare?: string,
    returnWindow?: string,
    returnable?: boolean,
    sellerPickupReturn?: boolean,
    statutoryReqsPrepackagedFood?: OnSearchFood,
    statutoryReqsPackagedCommodities?: OnSearchCommodities,
    timeToShip?: string,
    categoryId?: string,
    descriptor?: OnSearchDescriptor,
    fulfillmentId?: string,
    locationId?: string,
    price?: OnSearchPrice,
    quantity?: OnSearchQuantity,
    tags?: OnSearchTags
  ) {
    this.id = id;
    this["@ondc/org/available_on_cod"] = availableOnCod;
    this["@ondc/org/cancellable"] = cancellable;
    this["@ondc/org/contact_details_consumer_care"] =
      contactDetailsConsumerCare;
    this["@ondc/org/return_window"] = returnWindow;
    this["@ondc/org/returnable"] = returnable;
    this["@ondc/org/seller_pickup_return"] = sellerPickupReturn;
    this["@ondc/org/statutory_reqs_prepackaged_food"] =
      statutoryReqsPrepackagedFood;
    this["@ondc/org/statutory_reqs_packaged_commodities"] =
      statutoryReqsPackagedCommodities;
    this["@ondc/org/time_to_ship"] = timeToShip;
    this.category_id = categoryId;
    this.descriptor = descriptor;
    this.fulfillment_id = fulfillmentId;
    this.location_id = locationId;
    this.price = price;
    this.quantity = quantity;
    this.tags = tags;
  }
}

export class OnSearchFood {
  additives_info?: string;
  brand_owner_FSSAI_license_no?: string;
  nutritional_info?: string;

  constructor(
    additivesInfo?: string,
    brandOwnerFssaiLicenseNo?: string,
    nutritionalInfo?: string
  ) {
    this.additives_info = additivesInfo;
    this.brand_owner_FSSAI_license_no = brandOwnerFssaiLicenseNo;
    this.nutritional_info = nutritionalInfo;
  }
}

export class OnSearchCommodities {
  common_or_generic_name_of_commodity?: string;
  manufacturer_or_packer_address?: string;
  manufacturer_or_packer_name?: string;
  month_year_of_manufacture_packing_import?: string;
  net_quantity_or_measure_of_commodity_in_pkg?: number;

  constructor(
    commonOrGenericNameOfCommodity?: string,
    manufacturerOrPackerAddress?: string,
    manufacturerOrPackerName?: string,
    monthYearOfManufacturePackingImport?: string,
    netQuantityOrMeasureOfCommodityInPkg?: number
  ) {
    this.common_or_generic_name_of_commodity = commonOrGenericNameOfCommodity;
    this.manufacturer_or_packer_address = manufacturerOrPackerAddress;
    this.manufacturer_or_packer_name = manufacturerOrPackerName;
    this.month_year_of_manufacture_packing_import =
      monthYearOfManufacturePackingImport;
    this.net_quantity_or_measure_of_commodity_in_pkg =
      netQuantityOrMeasureOfCommodityInPkg;
  }
}

export class OnSearchPrice {
  currency: string;
  value: string;
  maximum_value?: string;

  constructor(currency: string, value: string, maximumValue?: string) {
    this.currency = currency;
    this.value = value;
    this.maximum_value = maximumValue;
  }
}

export class OnSearchQuantity {
  available: OnSearchAvailable;
  maximum: OnSearchMaximum;

  constructor(available: OnSearchAvailable, maximum: OnSearchMaximum) {
    this.available = available;
    this.maximum = maximum;
  }
}

export class OnSearchAvailable {
  count: string;

  constructor(count: string) {
    this.count = count;
  }
}

export class OnSearchMaximum {
  count: string;

  constructor(count: string) {
    this.count = count;
  }
}

export class OnSearchTags {
  veg?: string;
  non_veg?: string;

  constructor(veg?: string, nonVeg?: string) {
    this.veg = veg;
    this.non_veg = nonVeg;
  }
}

export class OnSearchHeadersclass {
  host: string;
  accept: string;
  acceptlanguage: string;
  authorization: string;
  cachecontrol: string;
  cdnloop: string;
  contentlength: string;
  contenttype: string;
  fastlyclientip: string;
  fastlyff: string;
  fastlyssl: string;
  fastlytempxff: string;
  pragma: string;
  remotehost: string;
  via: string;
  xb3parentspanid: string;
  xb3sampled: string;
  xb3spanid: string;
  xb3traceid: string;
  xcountrycode: string;
  xfirebasechannel: string;
  xfirebasehostingchannel: string;
  xforwardedfor: string;
  xforwardedhost: string;
  xforwardedserver: string;
  xforwardedurl: string;
  xgatewayauthorization: string;
  xtimer: string;
  xvarnish: string;
  useragent: string;
  xcloudtracecontext: string;
  traceparent: string;
  xforwardedproto: string;
  forwarded: string;
  acceptencoding: string;

  constructor(
    host: string,
    accept: string,
    acceptlanguage: string,
    authorization: string,
    cachecontrol: string,
    cdnloop: string,
    contentlength: string,
    contenttype: string,
    fastlyclientip: string,
    fastlyff: string,
    fastlyssl: string,
    fastlytempxff: string,
    pragma: string,
    remotehost: string,
    via: string,
    xb3parentspanid: string,
    xb3sampled: string,
    xb3spanid: string,
    xb3traceid: string,
    xcountrycode: string,
    xfirebasechannel: string,
    xfirebasehostingchannel: string,
    xforwardedfor: string,
    xforwardedhost: string,
    xforwardedserver: string,
    xforwardedurl: string,
    xgatewayauthorization: string,
    xtimer: string,
    xvarnish: string,
    useragent: string,
    xcloudtracecontext: string,
    traceparent: string,
    xforwardedproto: string,
    forwarded: string,
    acceptencoding: string
  ) {
    this.accept = accept;
    this.acceptlanguage = acceptlanguage;
    this.authorization = authorization;
    this.cachecontrol = cachecontrol;
    this.cdnloop = cdnloop;
    this.contentlength = contentlength;
    this.contenttype = contenttype;
    this.fastlyclientip = fastlyclientip;
    this.fastlyff = fastlyff;
    this.fastlyssl = fastlyssl;
    this.fastlytempxff = fastlytempxff;
    this.pragma = pragma;
    this.remotehost = remotehost;
    this.via = via;
    this.xb3parentspanid = xb3parentspanid;
    this.xb3sampled = xb3sampled;
    this.xb3spanid = xb3spanid;
    this.xb3traceid = xb3traceid;
    this.xcountrycode = xcountrycode;
    this.xfirebasechannel = xfirebasechannel;
    this.xfirebasehostingchannel = xfirebasehostingchannel;
    this.xforwardedfor = xforwardedfor;
    this.xforwardedhost = xforwardedhost;
    this.xforwardedserver = xforwardedserver;
    this.xforwardedurl = xforwardedurl;
    this.xgatewayauthorization = xgatewayauthorization;
    this.xtimer = xtimer;
    this.xvarnish = xvarnish;
    this.useragent = useragent;
    this.xcloudtracecontext = xcloudtracecontext;
    this.traceparent = traceparent;
    this.xforwardedproto = xforwardedproto;
    this.forwarded = forwarded;
    this.acceptencoding = acceptencoding;
  }
}
