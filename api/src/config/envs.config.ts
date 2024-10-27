import * as joi from 'joi'

interface Envs {
    PORT: number
    NODE_ENV: string
    DATABASE_URL: string
}
const envsSchema = joi.object({
    PORT: joi.number().integer().max(9999).required().default(3001),
    NODE_ENV: joi.string().required(),
    DATABASE_URL: joi.string().required()

}).unknown(true)
const { error, value } = envsSchema.validate(process.env)

if (error) {
    console.error(`Config validation error: ${error.message}`)
    throw new Error(`Config validation error`);
}


export const envsValues: Envs = {
    PORT: value.PORT,
    DATABASE_URL: value.DATABASE_URL,
    NODE_ENV: value.NODE_ENV
};
console.log(`Envs ok: ${envsValues.NODE_ENV}`)