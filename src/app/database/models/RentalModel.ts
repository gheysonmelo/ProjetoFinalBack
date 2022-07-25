import {
    Table,
    Column,
    Model,
    UpdatedAt,
    AllowNull,
    PrimaryKey,
    AutoIncrement,
    DataType,
    ForeignKey,
    BelongsTo,
    HasMany,
} from "sequelize-typescript";
import Customer from "./CustomerModel";
import Inventory from "./InventoryModel";
import Payment from "./PaymentModel";
import Staff from "./StaffModel";

@Table({
    modelName: 'rental'
})
class Rental extends Model {

    @PrimaryKey
    @AutoIncrement
    @Column(DataType.INTEGER)
    rental_id!: number;

    @AllowNull(false)
    @Column(DataType.DATE)
    rental_date!: Date;

    @ForeignKey(() => Inventory)
    @AllowNull(false)
    @Column(DataType.INTEGER)
    inventory_id!: number;

    @ForeignKey(() => Customer)
    @AllowNull(false)
    @Column(DataType.INTEGER)
    customer_id!: number;

    @AllowNull(true)
    @Column(DataType.DATE)
    return_date!: Date;

    @ForeignKey(() => Staff)
    @AllowNull(false)
    @Column(DataType.INTEGER)
    staff_id!: number;

    @UpdatedAt
    last_update!: Date;

    @BelongsTo(() => Customer)
    customer!: Customer;

    @BelongsTo(() => Staff)
    staffs!: Staff;

    @BelongsTo(() => Inventory)
    inventory!: Inventory;

    @HasMany(() => Payment)
    payments!: Payment[];
}

export default Rental;
