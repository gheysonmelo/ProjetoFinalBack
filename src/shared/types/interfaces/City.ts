import { Optional } from "sequelize";

export interface CityAttributes {
    city_id: number,
    city: string,
    country_id: number,
    last_update: string,
}

export interface CityInput extends Optional<CityAttributes, 'city_id'>{}
export interface CityOutput extends Required<CityAttributes>{}