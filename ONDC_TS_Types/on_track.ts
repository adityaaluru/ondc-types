import { onSelectContext } from "./onSelect";

export class onTrackPayload {
  context: onTrackContext;
  message: onTrackMessage;

  constructor(context: onTrackContext, message: onTrackMessage) {
    this.context = context;
    this.message = message;
  }
}

class onTrackContext extends onSelectContext {
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
export class onTrackMessage {
  tracking: onTrackTracking;

  constructor(tracking: onTrackTracking) {
    this.tracking = tracking;
  }
}

export class onTrackTracking {
  url: string;
  status: string;

  constructor(url: string, status: string) {
    this.url = url;
    this.status = status;
  }
}
