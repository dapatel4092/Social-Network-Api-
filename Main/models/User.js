const { Schema, model } = require('mongoose');

// Schema to create a course model
const userSchema = new Schema(
  {
    userName: {
      type: String,
      required: true,
      unique: true,
      trim:true,
    },
    email: {
      type: String,
      default: true,
      required:true,
      unique:true,
      match:[/.+@.+\..+/,"Please enter a valid email"]
    },
  
    createdDate: {
      type: Date,
      // Sets a default value of 12 weeks from now
      default: () => new Date(+new Date() + 84 * 24 * 60 * 60 * 1000),
    },
    thoughts: [
      {
        type: Schema.Types.ObjectId,
        ref: 'thought',
      },
    ],
    friends: [
      {
        type: Schema.Types.ObjectId,
        ref: 'user',
      },
    ],
  },
  {
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);
userSchema.virtual('thoughtCount').get(function(){
  return this.thoughts.length
})

const User = model('user', userSchema);

module.exports = User;
