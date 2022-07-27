import {
    Table,
    Column,
    Model,
    AllowNull,
    Unique,
    AutoIncrement,
    DataType,
    BelongsToMany,
    UpdatedAt,
} from "sequelize-typescript";

import { Film, FilmCategory } from ".";

@Table({modelName: "category"})
class Category extends Model {
    @AutoIncrement
    @Column({ 
        primaryKey: true, 
        type: DataType.INTEGER 
    })
    category_id!: number;

    @Unique
    @AllowNull(false)
    @Column({ type: DataType.STRING(25) })
    name!: string;

    @UpdatedAt
    @AllowNull(false)
    @Column({ type: DataType.DATE })
    last_update!: Date;

    // Relations
    @BelongsToMany(() => Film, () => FilmCategory)
    films!: Film[];
};

export default Category;