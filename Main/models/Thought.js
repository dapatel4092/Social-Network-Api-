const { Schema, model } = require('mongoose');
const reactionSchema = require('./Reaction');

// Schema to create Student model
const thoughtsSchema = new Schema(
  {
    thoughtText: {
      type: String,
      required: true,
      max_length: 280,
    },
    createdAt: {
      type: Date,
      required: true,
      default: () => new Date(+new Date() + 84 * 24 * 60 * 60 * 1000),
     
    },
    username: {
      type: String,
      required: true,
      
    },
    reactions: [reactionSchema],
  },
  {
    toJSON: {
      getters: true,
    },
  }
);

thoughtsSchema.virtual('reactionCount').get(function(){
  return this.reactions.length
})

const Thought = model('thought', thoughtsSchema);

module.exports = Thought;
