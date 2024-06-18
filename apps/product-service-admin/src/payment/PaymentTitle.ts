import { Payment as TPayment } from "../api/payment/Payment";

export const PAYMENT_TITLE_FIELD = "paystackPaymentApiKey";

export const PaymentTitle = (record: TPayment): string => {
  return record.paystackPaymentApiKey?.toString() || String(record.id);
};
