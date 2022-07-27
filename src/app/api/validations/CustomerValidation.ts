import { celebrate, Joi, Segments } from "celebrate";

export const CreateCustomerValidation = celebrate ({
    [Segments.BODY]:Joi.object().keys({
        name: Joi.string().required(),
        email: Joi.string().required(),
        password: Joi.string().required()
    })
});

export const UpdateCustomerValidation = celebrate ({
    [Segments.BODY]:Joi.object().keys({
        name: Joi.string(),
        email: Joi.string(),
        password: Joi.string()
    })
});