'use strict';

var mongoose = require('mongoose'),
    Protocol = mongoose.model('Protocol');
    
exports.create = function(req, res) {
    let protocol = new Protocol(req.body);
    protocol.save(function(err, protocol) {
        if (err) {
            return res.status(400).send({
                message: err
            });
        } else {
            res.status(200).send();
        }
    });
};

exports.getAll = function(req, res) {
    Protocol.find({}).sort('-created').exec(function (err, protocols) {
        res.json(protocols);
    });
};

exports.delete = function(req, res) {
    const idToDelete = req.body.id;

    Protocol.findByIdAndRemove(idToDelete).exec(function (err) {
        if (err) {
            res.status(400).send({
                message: err
            });
        } else {
            res.status(200).send();
        }
    })
}
