import { Optional } from "sequelize";

export interface StaffAttributes {
    staff_id: number,
    first_name: string,
    last_name: string,
    address_id: number,
    email?: string,
    store_id: number,
    active: boolean,
    username: string,
    password?: string,
    last_update: string,
    picture?: string
}

export interface StaffInput extends Optional<StaffAttributes, 'staff_id'>{}
export interface StaffOutput extends Required<StaffAttributes>{}