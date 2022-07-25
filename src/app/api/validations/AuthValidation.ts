import { celebrate, Joi, Segments } from 'celebrate';

export const AuthSigValidation = celebrate({
    [Segments.BODY]:Joi.object().keys({
        name: Joi.string(),
        email: Joi.string().required(),
        password: Joi.string().required()
    })
})