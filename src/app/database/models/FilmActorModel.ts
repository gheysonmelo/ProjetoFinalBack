import {
    Table,
    Column,
    Model,
    AllowNull,
    DataType,
    ForeignKey,
    UpdatedAt,
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

    @UpdatedAt
    @AllowNull(false)
    @Column({ type: DataType.DATE })
    last_update!: Date;
};

export default FilmActor;