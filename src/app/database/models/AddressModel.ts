import {
    Table,
    Column,
    Model,
    AllowNull,
    PrimaryKey,
    AutoIncrement,
    DataType,
    UpdatedAt,
    BelongsTo,
    ForeignKey,
    HasMany,
} from "sequelize-typescript";
import City from "./CityModel";
import Customer from "./CustomerModel";
import Staff from "./StaffModel";
import Store from "./StoreModel";

@Table({
    modelName: 'address'
})
class Address extends Model {

    @PrimaryKey
    @AutoIncrement
    @Column(DataType.INTEGER)
    address_id!: number;

    @AllowNull(false)
    @Column(DataType.STRING)
    address!: string;

    @AllowNull(true)
    @Column(DataType.STRING)
    address2!: string;

    @AllowNull(false)
    @Column(DataType.STRING)
    district!: string;

    @ForeignKey(() => City)
    @AllowNull(false)
    @Column(DataType.INTEGER)
    city_id!: number;

    @AllowNull(true)
    @Column(DataType.STRING)
    postal_code!: string;    

    @AllowNull(false)
    @Column(DataType.STRING)
    phone!: string;

    @UpdatedAt
    last_update!: Date;

    @BelongsTo(() => City)
    city!: City;

    @HasMany(() => Store)
    stores!: Store[];

    @HasMany(() => Customer)
    customers!: Customer[];

    @HasMany (() => Staff)
    staffs!: Staff[];
}

export default Address;