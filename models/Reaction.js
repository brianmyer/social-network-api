const { Schema, Types } = require('mongoose');

const reactionSchema = new Schema(
  {
    reactionId: {
      type: Schema.Types.ObjectId,
      default: () => new Types.ObjectId(),
    },
    reactionBody: {
      type: String,
      required: true,
      maxlength: 280,
    },
    username: {
      type: String,
      required: true,
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
  },
  {
    toJSON: {
      getters: true,
    },
    id: false,
  }
);

module.exports = reactionSchema;
