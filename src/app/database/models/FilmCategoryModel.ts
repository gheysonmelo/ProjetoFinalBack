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
    Default,
    AutoIncrement,
    DataType,
    HasMany,
    ForeignKey,
} from "sequelize-typescript";
import { Category, Film } from ".";

@Table({modelName: "film_category"})
class FilmCategory extends Model {
    @ForeignKey(() => Film)
    @Column({ 
        primaryKey: true, 
        type: DataType.INTEGER 
    })
    film_id!: number;

    @ForeignKey(() => Category)
    @AllowNull(false)
    @Column({ type: DataType.INTEGER })
    category_id!: number;

    @Default(new Date())
    @AllowNull(false)
    @Column({ type: DataType.DATE })
    last_update!: Date;

    // @Default(false)
    // @AllowNull(false)
    // @Column
    // active!: boolean;

    // @CreatedAt
    // createdAt!: Date;

    // @UpdatedAt
    // updatedAt!: Date;
};

export default FilmCategory;