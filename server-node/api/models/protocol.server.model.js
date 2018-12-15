'use strict';

var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var ProtocolSchema = new Schema({
  protocolText: {
    type: String,
    required: true
  },
  created: {
    type: Date,
    default: Date.now
  }
});

mongoose.model('Protocol', ProtocolSchema);