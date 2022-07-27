import { celebrate, Joi, Segments } from "celebrate";

export const CreateRentalValidation = celebrate ({
    [Segments.BODY]:Joi.object().keys({
        rental_date: Joi.number().required(),
        inventory_id: Joi.number().required(),
        customer_id: Joi.number().required(),
        return_date: Joi.number(),
        staff_id: Joi.number().required(),
        last_update: Joi.number()
    })
});

export const UpdateRentalValidation = celebrate ({
    [Segments.BODY]:Joi.object().keys({
        rental_date: Joi.number(),
        inventory_id: Joi.number(),
        customer_id: Joi.number(),
        return_date: Joi.number(),
        staff_id: Joi.number(),
        last_update: Joi.number()
    })
});