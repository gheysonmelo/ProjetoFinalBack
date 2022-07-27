import {
    Table,
    Column,
    Model,
    AllowNull,
    DataType,
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

    @AllowNull(false)
    @Column({ type: DataType.DATE })
    last_update!: Date;
};

export default FilmCategory;