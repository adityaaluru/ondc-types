import { onSelectContext } from "./onSelect";

export class onCancelPayload {
  context: onCancelContext;
  message: onCancelMessage;

  constructor(context: onCancelContext, message: onCancelMessage) {
    this.context = context;
    this.message = message;
  }
}

class onCancelContext extends onSelectContext {
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

export class onCancelMessage {
  order: onCancelOrder;

  constructor(order: onCancelOrder) {
    this.order = order;
  }
}

export class onCancelOrder {
  id: string;
  state: string;
  tags: onCancelTags;

  constructor(id: string, state: string, tags: onCancelTags) {
    this.id = id;
    this.state = state;
    this.tags = tags;
  }
}

export class onCancelTags {
  cancellation_reason_id: string;

  constructor(cancellation_reason_id: string) {
    this.cancellation_reason_id = cancellation_reason_id;
  }
}
