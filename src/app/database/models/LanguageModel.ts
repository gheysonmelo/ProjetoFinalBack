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
} from "sequelize-typescript";
import { Film } from ".";

@Table({modelName: "language"})
class Language extends Model {
    @AutoIncrement
    @Column({ 
        primaryKey: true, 
        type: DataType.INTEGER 
    })
    language_id!: number;

    @Unique
    @AllowNull(false)
    @Column({ type: DataType.STRING(20) })
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
    @HasMany(() => Film)
    films!: Film[];
};

export default Language;