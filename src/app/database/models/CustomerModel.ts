import {
    Table,
    Column,
    Model,
    CreatedAt,
    UpdatedAt,
    IsEmail,
    Length,
    AllowNull,
    Unique,
    PrimaryKey,
    AutoIncrement,
    DataType,
    ForeignKey,
    BelongsTo,
    HasMany,
} from "sequelize-typescript";
import Address from "./AddressModel";
import Payment from "./PaymentModel";
import Rental from "./RentalModel";

@Table({
    modelName: 'customer'
})
class Customer extends Model {

    @PrimaryKey
    @AutoIncrement
    @Column(DataType.INTEGER)
    customer_id!: number;

    @AllowNull(false)
    @Column(DataType.INTEGER)
    store_id!: number;

    @Length({ max: 60 })
    @AllowNull(false)
    @Column(DataType.STRING)
    first_name!: string;

    @Length({ max: 60 })
    @AllowNull(false)
    @Column(DataType.STRING)
    last_name!: string;

    @IsEmail
    @Length({ max: 254 })
    @Unique
    @AllowNull(false)
    @Column(DataType.STRING)
    email!: string;

    @ForeignKey(() => Address)
    @AllowNull(true)
    @Column(DataType.INTEGER)
    addres_id!: number;

    @AllowNull(false)
    @Column(DataType.BOOLEAN)
    activebool!: boolean;

    @CreatedAt
    create_date!: Date;

    @UpdatedAt
    last_update!: Date;

    @AllowNull(false)
    @Column
    active!: number;

    @BelongsTo(() => Address)
    address!: Address;

    @HasMany(() => Rental)
    rentals!: Rental[];

    @HasMany(() => Payment)
    payments!: Payment[];
}

export default Customer;
