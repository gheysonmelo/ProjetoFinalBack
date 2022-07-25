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
    HasMany,
} from "sequelize-typescript";
import Address from "./AddressModel";
import Staff from "./StaffModel";

@Table({
    modelName: 'store'
})
class Store extends Model {

    @PrimaryKey
    @AutoIncrement
    @Column(DataType.INTEGER)
    store_id!: number;

    @AllowNull(false)
    @Column(DataType.INTEGER)
    manager_staff_id!: number;

    @ForeignKey(() => Address)
    @AllowNull(false)
    @Column(DataType.INTEGER)
    address_id!: number;

    @AllowNull(false)
    @Column(DataType.STRING)
    last_update!: string;

    @BelongsTo(() => Address)
    address!: Address;

    @HasMany(() => Staff)
    staffs!: Staff[];
}

export default Store;
