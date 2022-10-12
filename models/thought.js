const { Schema, model } = require('mongoose');

const thoughtSchema = new Schema (
    {
        thoughtText: {
            type: String,
            required: true,
            minLength: 1,
            maxLength: 280,
          },
          username: {
            type: String,
            required: true,
          },
    },
    {
        toJSON: {
          virtuals: true,
            },
        id: false,
          }
);
const Thought = model("Thought", thoughtSchema);
module.exports = Thought;