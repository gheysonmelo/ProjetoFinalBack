import {
    Table,
    Column,
    Model,
    UpdatedAt,
    AllowNull,
    PrimaryKey,
    AutoIncrement,
    DataType,
    HasMany,
    BelongsTo,
} from "sequelize-typescript";
import Rental from "./RentalModel";

@Table({
    modelName: 'inventory'
})
class Inventory extends Model {

    @PrimaryKey
    @AutoIncrement
    @Column(DataType.INTEGER)
    inventory_id!: number;

    @AllowNull(false)
    @Column(DataType.INTEGER)
    film_id!: number;

    @AllowNull(false)
    @Column(DataType.INTEGER)
    store_id!: number;

    @UpdatedAt
    last_update!: Date;

    @HasMany(()  => Rental)
    rentals!: Rental;

    // @BelongsTo(() => Film)
    // film!: Film;
}

export default Inventory;