import { celebrate, Joi, Segments } from "celebrate";

export const FilmCreateValidation = celebrate({
    [Segments.BODY]: Joi.object().keys({
        title: Joi.string().required(),
        description: Joi.string(),
        release_year: Joi.number(),
        language_id: Joi.number().required(),
        rental_duration: Joi.number().required(),
        rental_rate: Joi.number().required(),
        length: Joi.number(),
        replacement_cost: Joi.number().required(),
        rating: Joi.string(), 
        special_features: Joi.string(),
        fulltext: Joi.string().required(),
    })
});

export const FilmUpdateValidation = celebrate({
    [Segments.BODY]: Joi.object().keys({
        title: Joi.string(),
        description: Joi.string(),
        release_year: Joi.number(),
        language_id: Joi.number(),
        rental_duration: Joi.number(),
        rental_rate: Joi.number(),
        length: Joi.number(),
        replacement_cost: Joi.number(),
        rating: Joi.string(),
        special_features: Joi.string(),
        fulltext: Joi.string(),
    }).min(1)
});