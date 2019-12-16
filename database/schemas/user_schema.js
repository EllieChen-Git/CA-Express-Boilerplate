const { Schema } = require("mongoose");

const UserSchema = new Schema({
    eamil: {
        type: String,
        required: true,
        trim: true   //remove whitespace before & after //data sanitisation
    },
    password:{    //can do pw validation in Schema or celebrate (preferred)
        type: String,
        required: true,
        trim: true
    }
});

module.exports = UserSchema;