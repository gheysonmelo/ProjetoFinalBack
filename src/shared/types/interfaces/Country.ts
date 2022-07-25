import { Optional } from "sequelize";

export interface CountryAttributes {
    country_id: number,
    country: string,
    last_update: string,
}

export interface CountryInput extends Optional<CountryAttributes, 'country_id'>{}
export interface CountryOutput extends Required<CountryAttributes>{}