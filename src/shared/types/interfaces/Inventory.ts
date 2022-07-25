import { Optional } from "sequelize";

export interface InventoryAttributes {
    inventory_id: number,
    film_id: number,
    store_id: number,
    last_update: string,
}

export interface InventoryInput extends Optional<InventoryAttributes, 'inventory_id'>{}
export interface InventoryOutput extends Required<InventoryAttributes>{}