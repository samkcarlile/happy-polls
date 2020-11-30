const Joi = require('joi');
const { nanoid } = require('nanoid');
const model = require('../db/model');

const pollSchema = Joi.object({
  _id: Joi.string().length(21).default(nanoid),

  created_at: Joi.date().default(Date.now),

  prompt: Joi.string().min(3).max(280).required(),

  options: Joi.array()
    .min(1)
    .unique()
    .items(
      Joi.object({
        title: Joi.string().min(1).max(140).required(),
        votes: Joi.number().min(0).default(0),
      }).required()
    )
    .required(),
});

const Poll = model('polls', pollSchema);

module.exports = Poll;
