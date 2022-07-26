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
import { Actor, Film } from ".";

@Table({modelName: "film_actor"})
class FilmActor extends Model {
    @ForeignKey(() => Actor)
    @Column({
        primaryKey: true,
        type: DataType.INTEGER 
    })
    actor_id!: number;

    @ForeignKey(() => Film)
    @AllowNull(false)
    @Column({ type: DataType.INTEGER })
    film_id!: number;

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

export default FilmActor;