import { Optional } from "sequelize";

export interface RentalAttributes {
    rental_id: number,
    rental_date: string,
    inventory_id: number,
    customer_id: number,
    return_date?: string,
    staff_id: number,
    last_update: string
}

export interface RentalInput extends Optional<RentalAttributes, 'rental_id'>{}
export interface RentalOutput extends Required<RentalAttributes>{}