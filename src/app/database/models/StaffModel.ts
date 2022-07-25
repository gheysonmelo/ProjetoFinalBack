import {
    Table,
    Column,
    Model,
    AllowNull,
    PrimaryKey,
    AutoIncrement,
    DataType,
    IsEmail,
    UpdatedAt,
    ForeignKey,
    BelongsTo,
    HasMany,
} from "sequelize-typescript";
import Address from "./AddressModel";
import Payment from "./PaymentModel";
import Rental from "./RentalModel";
import Store from "./StoreModel";

@Table({
    modelName: 'staff'
})
class Staff extends Model {

    @PrimaryKey
    @AutoIncrement
    @Column(DataType.INTEGER)
    staff_id!: number;

    @AllowNull(false)
    @Column(DataType.STRING)
    first_name!: string;

    @AllowNull(false)
    @Column(DataType.STRING)
    last_name!: string;

    @ForeignKey(() => Address)
    @AllowNull(false)
    @Column(DataType.INTEGER)
    address_id!: number;

    @IsEmail
    @AllowNull(true)
    @Column(DataType.STRING)
    email!: string;

    @ForeignKey(() => Store)
    @AllowNull(false)
    @Column(DataType.INTEGER)
    store_id!: number;

    @AllowNull(false)
    @Column(DataType.BOOLEAN)
    active!: boolean;

    @AllowNull(false)
    @Column(DataType.STRING)
    username!: string;

    @AllowNull(true)
    @Column(DataType.STRING)
    password!: string;

    @UpdatedAt
    last_update!: Date;
    
    @AllowNull(true)
    @Column(DataType.STRING)
    picture!: string;

    @BelongsTo(() => Address)
    address!: Address;

    @BelongsTo(() => Store)
    store!: Store;

    @HasMany(() => Rental)
    rentals!: Rental[];

    @HasMany(() => Payment)
    payments!: Payment[];
}

export default Staff;
