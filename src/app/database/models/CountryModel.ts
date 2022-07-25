import {
    Table,
    Column,
    Model,
    AllowNull,
    PrimaryKey,
    AutoIncrement,
    DataType,
    UpdatedAt,
    HasMany,
} from "sequelize-typescript";
import City from "./CityModel";

@Table({
    modelName: 'country'
})
class Country extends Model {

    @PrimaryKey
    @AutoIncrement
    @Column(DataType.INTEGER)
    country_id!: number;

    @AllowNull(false)
    @Column(DataType.STRING)
    country!: string;

    @UpdatedAt
    last_update!: Date;

    @HasMany(() => City)
    cities!: City[];
}

export default Country;