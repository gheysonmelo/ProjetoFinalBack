import { Optional } from "sequelize";

export interface CustomerAttributes {
    customer_id: number,
    store_id: number,
    first_name: string,
    last_name: string,
    email: string,
    addres_id: number,
    activebool: boolean,
    create_date: Date,
    last_update: Date,
    active: number,
    address_id?: number
}

export interface CustomerInput extends Optional<CustomerAttributes, 'customer_id'>{}
export interface CustomerOutput extends Required<CustomerAttributes>{}