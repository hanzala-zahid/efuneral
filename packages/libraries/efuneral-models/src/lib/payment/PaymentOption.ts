import { PaymentMode } from "./PaymentMode";
import { PaymentPeriod } from "./PaymentPeriod";

export interface PaymentOption {
    years: number | null;
    numberOfPayments: number;
    singleFaceAmount: number | null;
    singlePremium: number | null;
    multiFaceAmount: number | null;
    multiPremium: number | null;
    amountOfFirstPayment: number;
    paymentMode: PaymentMode;
    paymentPeriod: PaymentPeriod | null;
}