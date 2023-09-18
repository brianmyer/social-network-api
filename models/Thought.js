const { Schema, model } = require('mongoose');
const Reaction = require('./Reaction');

// Schema to create Post model
const thoughtSchema = new Schema(
  {
    thoughtText: {
      type: String,
      required: true,
      minLength: 1,
      maxLength: 280,
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: function (value) {
        const options = {
          year: 'numeric', // Full year (e.g., 2023)
          month: 'long',   // Full month name (e.g., September)
          day: 'numeric',  // Day of the month (e.g., 13)
          hour: 'numeric', // Hour (e.g., 14 for 2 PM)
          minute: 'numeric', // Minute (e.g., 30)
          second: 'numeric', // Second (e.g., 45)
          timeZoneName: 'short', // Time zone name (e.g., "PST")
        };
        return value.toLocaleDateString('en-US', options)
      }
    },
    username: {
      type: String,
      required: true,
    },
    reactions: [Reaction],
  },
  {
    toJSON: {
      virtuals: true,
      getters: true
    },

  }
);

thoughtSchema
  .virtual('reactionCount')
  .get(function () {
    return this.reactions.length;
  });

// Initialize our Video model
const Thought = model('thought', thoughtSchema);

module.exports = Thought;
