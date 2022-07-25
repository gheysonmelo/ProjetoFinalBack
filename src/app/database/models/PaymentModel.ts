import {
    Table,
    Column,
    Model,
    AllowNull,
    PrimaryKey,
    AutoIncrement,
    DataType,
    ForeignKey,
    BelongsTo,
} from "sequelize-typescript";
import Customer from "./CustomerModel";
import Rental from "./RentalModel";
import Staff from "./StaffModel";

@Table({
    modelName: 'payment'
})
class Payment extends Model {

    @PrimaryKey
    @AutoIncrement
    @Column(DataType.INTEGER)
    payment_id!: number;

    @ForeignKey(() => Customer)
    @AllowNull(false)
    @Column(DataType.INTEGER)
    customer_id!: number;

    @ForeignKey(() => Staff)
    @AllowNull(false)
    @Column(DataType.INTEGER)
    staff_id!: number;

    @ForeignKey(() => Rental)
    @AllowNull(false)
    @Column(DataType.INTEGER)
    rental_id!: number;

    @AllowNull(false)
    @Column(DataType.INTEGER)
    amount!: number;

    @AllowNull(false)
    @Column(DataType.DATE)
    payment_date!: Date;

    @BelongsTo(() => Customer)
    customer!: Customer;

    @BelongsTo(() => Staff)
    staff!: Staff;

    @BelongsTo(() => Rental)
    rental!: Rental;
}

export default Payment;