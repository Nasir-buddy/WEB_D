const mongoos = require('mongoose');

const contactSchema = new mongoos.Schema({
    name: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    }
});

const Contact = mongoos.model('Contact', contactSchema);

module.exports = Contact;