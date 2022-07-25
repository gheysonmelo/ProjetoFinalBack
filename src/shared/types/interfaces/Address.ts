import { Optional } from "sequelize";

export interface AddressAttributes {
    address_id: number,
    address: string,
    address2?: string,
    district: string,
    city_id: number,
    postal_code?: string,
    phone: string,
    last_update: string,
}

export interface AddressInput extends Optional<AddressAttributes, 'address_id'>{}
export interface AddressOutput extends Required<AddressAttributes>{}