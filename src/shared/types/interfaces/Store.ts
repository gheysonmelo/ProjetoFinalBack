import { Optional } from "sequelize";

export interface StoreAttributes {
    store_id: number,
    manager_staff_id: number,
    address_id: number,
    last_update: string,
}

export interface StoreInput extends Optional<StoreAttributes, 'store_id'>{}
export interface StoreOutput extends Required<StoreAttributes>{}