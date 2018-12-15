"use strict";
module.exports = function(app) {
  var userHandlers = require("../controllers/user.server.controller");
  var protocolHandlers = require("../controllers/protocol.server.controller");

  app
    .route("/api/protocol/create")
    .post(userHandlers.loginRequired, protocolHandlers.create);

  app
    .route("/api/protocol/get_all")
    .get(userHandlers.loginRequired, protocolHandlers.getAll);

  app
    .route("/api/protocol/delete")
    .put(userHandlers.loginRequired, protocolHandlers.delete);
};
