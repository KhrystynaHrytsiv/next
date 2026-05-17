import Joi from "joi";

export const carValidation = Joi.object({
    brand: Joi.string().pattern(/^[a-zA-Zа-яА-яёЁіІїЇєЄҐґ]{1,20}$/).required().messages({
        'string.pattern.base': 'only letters from 1 to 20'
    }),
    price: Joi.number().min(1).max(1000000).required().messages({
        'number.min': 'value must be positive',
        'number.max': 'value can`t exceed 1000000'
    }),
    year:Joi.number().min(1990).max(new Date().getFullYear()).required().messages({
        "number.min": "the year can`t be less than 1970",
        "number.max": "the year can`t exceed the current",
    })

});