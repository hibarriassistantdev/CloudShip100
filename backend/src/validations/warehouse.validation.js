const Joi = require('joi');

const assignParcel = {
  params: Joi.object().keys({
    parcelId: Joi.string().required(),
  }),
  body: Joi.object().keys({
    employeeId: Joi.string().trim(),
  }),
};

const optimizeRoute = {
  params: Joi.object().keys({
    routeId: Joi.string().required(),
  }),
};

module.exports = {
  assignParcel,
  optimizeRoute,
};
