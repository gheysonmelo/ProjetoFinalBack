import {
    Table,
    Column,
    Model,
    AllowNull,
    Unique,
    AutoIncrement,
    DataType,
    HasMany,
    UpdatedAt,
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

    @UpdatedAt
    @AllowNull(false)
    @Column({ type: DataType.DATE })
    last_update!: Date;

    // Relations
    @HasMany(() => Film)
    films!: Film[];
};

export default Language;