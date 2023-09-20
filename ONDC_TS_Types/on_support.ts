import { onSelectContext } from "./onSelect";

export class onSupportPayload {
  context: onSupportContext;
  message: onSupportMessage;

  constructor(context: onSupportContext, message: onSupportMessage) {
    this.context = context;
    this.message = message;
  }
}

class onSupportContext extends onSelectContext {
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

export class onSupportMessage {
  phone: string;
  email: string;
  uri: string;

  constructor(phone: string, email: string, uri: string) {
    this.phone = phone;
    this.email = email;
    this.uri = uri;
  }
}
