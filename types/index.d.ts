export declare const ABEvent: {
  readonly LOGIN: "abx:login";
  readonly LOGOUT: "abx:logout";
  readonly SIGN_UP: "abx:sign_up";
  readonly USE_CREDIT: "abx:use_credit";
  readonly APP_UPDATE: "abx:app_update";
  readonly INVITE: "abx:invite";
  readonly PURCHASE: "abx:purchase";
  readonly REFUND: "abx:refund";
  readonly ADD_TO_CART: "abx:add_to_cart";
  readonly ADD_TO_WISHLIST: "abx:add_to_wishlist";
  readonly PRODUCT_VIEW: "abx:product_view";
  readonly CATEGORY_VIEW: "abx:category_view";
  readonly REVIEW_ORDER: "abx:review_order";
  readonly SEARCH: "abx:search";
  readonly SHARE: "abx:share";
  readonly VIEW_HOME: "abx:view_home";
  readonly LIST_VIEW: "abx:list_view";
  readonly CART_VIEW: "abx:cart_view";
  readonly PAYMENT_INFO_ADDED: "abx:paymentinfo_added";
  readonly LEVEL_ACHIEVED: "abx:level_achieved";
  readonly TUTORIAL_COMPLETED: "abx:tutorial_completed";
  readonly CHARACTER_CREATED: "abx:character_created";
  readonly STAGE_CLEARED: "abx:stage_cleared";
};

export declare const ABEventProperty: {
  readonly IS_SKIP: "abx:is_skip";
  readonly LEVEL: "abx:level";
  readonly STAGE: "abx:stage";
  readonly PREV_VER: "abx:prev_ver";
  readonly CURR_VER: "abx:curr_ver";
  readonly KEYWORD: "abx:keyword";
  readonly SHARING_CHANNEL: "abx:sharing_channel";
  readonly SIGN_CHANNEL: "abx:sign_channel";
  readonly INVITE_CHANNEL: "abx:invite_channel";
  readonly ORDER_ID: "abx:order_id";
  readonly DELIVERY_CHARGE: "abx:delivery_charge";
  readonly PENALTY_CHARGE: "abx:penalty_charge";
  readonly PAYMENT_METHOD: "abx:payment_method";
  readonly ORDER_SALES: "abx:order_sales";
  readonly CATEGORY1: "abx:category1";
  readonly CATEGORY2: "abx:category2";
  readonly CATEGORY3: "abx:category3";
  readonly CATEGORY4: "abx:category4";
  readonly CATEGORY5: "abx:category5";
  readonly DISCOUNT: "abx:discount";
  readonly ITEMS: "abx:items";
  readonly ITEM_PRODUCT_ID: "abx:product_id";
  readonly ITEM_PRODUCT_NAME: "abx:product_name";
  readonly ITEM_PRICE: "abx:price";
  readonly ITEM_QUANTITY: "abx:quantity";
  readonly ITEM_DISCOUNT: "abx:discount";
  readonly ITEM_CURRENCY: "abx:currency";
  readonly ITEM_CATEGORY1: "abx:category1";
  readonly ITEM_CATEGORY2: "abx:category2";
  readonly ITEM_CATEGORY3: "abx:category3";
  readonly ITEM_CATEGORY4: "abx:category4";
  readonly ITEM_CATEGORY5: "abx:category5";
};

export declare const ABSignUpChannel: {
  readonly KAKAO: "Kakao";
  readonly NAVER: "Naver";
  readonly LINE: "Line";
  readonly GOOGLE: "Google";
  readonly FACEBOOK: "Facebook";
  readonly TWITTER: "Twitter";
  readonly WHATSAPP: "whatsApp";
  readonly QQ: "QQ";
  readonly WECHAT: "WeChat";
  readonly USER_ID: "UserId";
  readonly ETC: "ETC";
  readonly SKT_ID: "SkTid";
  readonly APPLE_ID: "AppleId";
};

export declare const ABInviteChannel: {
  readonly KAKAO: "Kakao";
  readonly NAVER: "Naver";
  readonly LINE: "Line";
  readonly GOOGLE: "Google";
  readonly FACEBOOK: "Facebook";
  readonly TWITTER: "Twitter";
  readonly WHATSAPP: "whatsApp";
  readonly QQ: "QQ";
  readonly WECHAT: "WeChat";
  readonly ETC: "ETC";
};

export declare const ABSharingChannel: {
  readonly FACEBOOK: "Facebook";
  readonly KAKAOTALK: "KakaoTalk";
  readonly KAKAOSTORY: "KakaoStory";
  readonly LINE: "Line";
  readonly WHATSAPP: "whatsApp";
  readonly QQ: "QQ";
  readonly WECHAT: "WeChat";
  readonly SMS: "SMS";
  readonly EMAIL: "Email";
  readonly COPY_URL: "copyUrl";
  readonly ETC: "ETC";
};

export declare const ABPaymentMethod: {
  readonly CREDIT_CARD: "CreditCard";
  readonly BANK_TRANSFER: "BankTransfer";
  readonly MOBILE_PAYMENT: "MobilePayment";
  readonly ETC: "ETC";
};

export declare const ABCurrency: {
  readonly KRW: "KRW";
  readonly USD: "USD";
  readonly JPY: "JPY";
  readonly EUR: "EUR";
  readonly GBP: "GBP";
  readonly CNY: "CNY";
  readonly TWD: "TWD";
  readonly HKD: "HKD";
  readonly IDR: "IDR";
  readonly INR: "INR";
  readonly RUB: "RUB";
  readonly THB: "THB";
  readonly VND: "VND";
  readonly MYR: "MYR";
};

export declare const ABConfig: {
  readonly LOG_ENABLE: "logEnable";
  readonly LOG_LEVEL: "logLevel";
  readonly SHARE_SUBDOMAIN_COOKIE: "shareSubdomainCookie";
};

export declare const ABLogLevel: {
  readonly ERROR: 1;
  readonly WARN: 2;
  readonly INFO: 3;
};

export type ABEventName = (typeof ABEvent)[keyof typeof ABEvent] | string;
export type ABCurrencyValue = (typeof ABCurrency)[keyof typeof ABCurrency];
export type ABPaymentMethodValue =
  (typeof ABPaymentMethod)[keyof typeof ABPaymentMethod];
export type ABLogLevelValue = (typeof ABLogLevel)[keyof typeof ABLogLevel];
export type ABChannelValue =
  | (typeof ABSignUpChannel)[keyof typeof ABSignUpChannel]
  | (typeof ABInviteChannel)[keyof typeof ABInviteChannel]
  | (typeof ABSharingChannel)[keyof typeof ABSharingChannel]
  | string;

export type ABInitOptions = {
  shareSubdomainCookie?: boolean;
  logEnable?: boolean;
  logLevel?: ABLogLevelValue;
  isExecPageViewEvent?: boolean;
};

export type ABProductItem = {
  "abx:product_id": string;
  "abx:product_name": string;
  "abx:price": number;
  "abx:quantity": number;
  "abx:discount": number;
  "abx:currency"?: ABCurrencyValue | string;
  "abx:category1"?: string;
  "abx:category2"?: string;
  "abx:category3"?: string;
  "abx:category4"?: string;
  "abx:category5"?: string;
} & Record<string, string | number | boolean | undefined>;

export type ABEventProperties = Record<string, unknown> | null;

export declare const adbrix: {
  init(
    appKey: string,
    webSecretKey: string,
    options?: ABInitOptions,
  ): Promise<void>;
  onInitialized(callback: () => void): void;
  waitUntilInitialized(): Promise<void>;
  logEvent(
    eventName: ABEventName,
    properties?: ABEventProperties,
  ): Promise<void>;
};

export default adbrix;
