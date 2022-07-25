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
    BelongsToMany,
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

    // Relations
    @BelongsToMany(() => Film, () => FilmCategory)
    films!: Film[];
};

export default Category;