import { initItem } from "./init";
import { onSelectContext, onSelectItemQuantity, onSelectPrice } from "./onSelect";
import { onStatusState } from "./on_status";
import { SelectQuantity } from "./select";

export class onUpdatePayload {
  context: onUpdateContext;
  message: onUpdateMessage;

  constructor(context: onUpdateContext, message: onUpdateMessage) {
    this.context = context;
    this.message = message;
  }
}

class onUpdateContext extends onSelectContext {

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
    super(
      domain,
      action,
      coreVersion,
      bapId,
      bapUri,
      bppId,
      bppUri,
      transactionId,
      messageId,
      city,
      country,
      timestamp
    );
  }
}

export class onUpdateMessage {
  order: onUpdateOrder;

  constructor(order: onUpdateOrder) {
    this.order = order;
  }
}

export class onUpdateOrder {
  id: string;
  state: string;
  items: onUpdateItem[];
  quote: onUpdateQuote;
  fulfillments: onUpdateFulfillment[];
}

class onUpdateItem extends initItem {
  tags?: onUpdateTags;

  constructor(
    id: string,
    fulfillment_id: string,
    quantity: SelectQuantity,
    tags?: onUpdateTags
  ) {
    super(id, fulfillment_id, quantity);
    this.tags = tags;
  }
}


export class onUpdateTags {
  status: string;

  constructor(status: string) {
    this.status = status;
  }
}

export class onUpdateQuote {
  price: onSelectPrice;
  breakup: onUpdateBreakup[];

  constructor(price: onSelectPrice, breakup: onUpdateBreakup[]) {
    this.price = price;
    this.breakup = breakup;
  }
}


export class onUpdateBreakup {
  item_id?: string;
  title_type?: string;
  itemQuantity?: onSelectItemQuantity;
  item?: onSelectPrice;

  constructor(
    item_id?: string,
    title_type?: string,
    itemQuantity?:  onSelectItemQuantity,
    item?: onSelectPrice
  ) {
    this.item_id = item_id;
    this.title_type = title_type;
    this.itemQuantity = itemQuantity;
    this.item = item;
  }
}

export class onUpdateFulfillment {
  id: string;
  type: string;
  state: onStatusState;
  start: onUpdateStart;

  constructor(id: string, type: string, state: onStatusState, start: onUpdateStart) {
    this.id = id;
    this.type = type;
    this.state = state;
    this.start = start;
  }
}

export class onUpdateStart {
  time: onUpdateTime;
  instructions: onUpdateInstructions;
  images: string;

  constructor(time: onUpdateTime, instructions: onUpdateInstructions, images: string) {
    this.time = time;
    this.instructions = instructions;
    this.images = images;
  }
}

export class onUpdateTime {
  range: onUpdateRanges;

  constructor(range: onUpdateRanges) {
    this.range = range;
  }
}

export class onUpdateRanges {
  start: string;
  end: string;

  constructor(start: string, end: string) {
    this.start = start;
    this.end = end;
  }
}

export class onUpdateInstructions {
  short_desc: string;
  long_desc: string;
  additional_desc: onUpdateAdditionalDesc;
  images: string;

  constructor(
    short_desc: string,
    long_desc: string,
    additional_desc: onUpdateAdditionalDesc,
    images: string
  ) {
    this.short_desc = short_desc;
    this.long_desc = long_desc;
    this.additional_desc = additional_desc;
    this.images = images;
  }
}

export class onUpdateAdditionalDesc {
  content_type: string;
  url: string;

  constructor(content_type: string, url: string) {
    this.content_type = content_type;
    this.url = url;
  }
}


