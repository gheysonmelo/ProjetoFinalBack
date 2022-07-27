import {
    Table,
    Column,
    Model,
    AllowNull,
    Unique,
    Default,
    AutoIncrement,
    DataType,
    ForeignKey,
    BelongsTo,
    BelongsToMany,
} from "sequelize-typescript";

import { 
    Actor, 
    Category, 
    FilmActor, 
    FilmCategory, 
    Language 
} from ".";

@Table({modelName: "film"})
class Film extends Model {
    @AutoIncrement
    @Column({ 
        primaryKey: true, 
        type: DataType.INTEGER 
    })
    film_id!: number;

    @Unique
    @AllowNull(false)
    @Column({ type: DataType.STRING(255) })
    title!: string;

    @Column({ type: DataType.TEXT })
    description!: string;

    @Column({ type: DataType.INTEGER })
    release_year!: number;

    @ForeignKey(() => Language)
    @AllowNull(false)
    @Column({ type: DataType.INTEGER })
    language_id!: number;

    @Default(3)
    @AllowNull(false)
    @Column({ type: DataType.INTEGER })
    rental_duration!: number;

    @Default(4.99)
    @AllowNull(false)
    @Column({ type: DataType.FLOAT })
    rental_rate!: number;

    @Column({ type: DataType.INTEGER })
    length!: number;

    @Default(19.99)
    @AllowNull(false)
    @Column({ type: DataType.FLOAT })
    replacement_cost!: number;

    @Column({ type: DataType.STRING }) // datatype: mpaa rating
    rating!: string;

    @AllowNull(false)
    @Column({ type: DataType.DATE })
    last_update!: Date;

    @Column({ type: DataType.STRING }) // datatype: _text
    special_features!: string;

    @AllowNull(false)
    @Column({ type: DataType.TSVECTOR })
    fulltext!: string;

    // Relations
    @BelongsTo(() => Language)
    language!: Language;

    // @HasMany(() => Inventory)    uncomment on merge
    // inventories!: Inventory[]

    @BelongsToMany(() => Category, () => FilmCategory)
    categories!: Category[];

    @BelongsToMany(() => Actor, () => FilmActor)
    actors!: Actor[];
};

export default Film;