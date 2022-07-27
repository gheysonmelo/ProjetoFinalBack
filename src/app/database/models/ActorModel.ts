import {
    Table,
    Column,
    Model,
    AllowNull,
    AutoIncrement,
    DataType,
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

    @AllowNull(false)
    @Column({ type: DataType.DATE })
    last_update!: Date;

    // Relations
    @BelongsToMany(() => Film, () => FilmActor)
    films!: Film[];
};

export default Actor;