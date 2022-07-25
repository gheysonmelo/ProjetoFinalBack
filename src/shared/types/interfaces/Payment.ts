import { Optional } from "sequelize";

export interface PaymentAttributes {
    payment_id: number,
    customer_id: number,
    staff_id: number,
    rental_id: number,
    amount: number,
    payment_date: string
}

export interface PaymentInput extends Optional<PaymentAttributes, 'payment_id'>{}
export interface PaymentOutput extends Required<PaymentAttributes>{}