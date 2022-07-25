import {
    Table,
    Column,
    Model,
    AllowNull,
    PrimaryKey,
    AutoIncrement,
    DataType,
    UpdatedAt,
    ForeignKey,
    BelongsTo,
    HasMany,
} from "sequelize-typescript";
import Address from "./AddressModel";
import Country from "./CountryModel";

@Table({
    modelName: 'city'
})
class City extends Model {

    @PrimaryKey
    @AutoIncrement
    @Column(DataType.INTEGER)
    city_id!: number;

    @AllowNull(false)
    @Column(DataType.STRING)
    city!: string;

    @ForeignKey(() => Country)
    @AllowNull(false)
    @Column(DataType.INTEGER)
    country_id!: number;

    @UpdatedAt
    last_update!: Date;

    @BelongsTo(() => Country)
    country!: Country

    @HasMany(() => Address)
    adresses!: Address[]
}

export default City;