const validate = ({schema, data, config}) => {
    try {
        const {error, value} = schema.validate(data);
        if(error) throw new Error(error.message);
        return value;
    }
    catch (err) {
        throw new Error(err.message);
    }
}

const validateAsync = async ({schema, data, config}) => {
    try {
        const value = await schema.validateAsync(data);
        return value;
    }
    catch (err) { 
        throw new Error(err.message);
    }
}

module.exports = {
    validateAsync, validate
}