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
    BelongsTo,
    BelongsToMany,
} from "sequelize-typescript";
import { Film, FilmActor } from ".";

@Table({modelName: "actor"})
class Actor extends Model {
    @AutoIncrement
    @Column({ 
        primaryKey: true, 
        type: DataType.INTEGER 
    })
    actor_id!: number;

    @AllowNull(false)
    @Column({ type: DataType.STRING(45) })
    first_name!: string;

    @AllowNull(false)
    @Column({ type: DataType.STRING(45) })
    last_name!: string;

    @Default(new Date())
    @AllowNull(false)
    @Column({ type: DataType.DATE })
    last_update!: Date;

    // Relations
    @BelongsToMany(() => Film, () => FilmActor)
    films!: Film[];
};

export default Actor;