/* eslint-disable camelcase */

exports.shorthands = undefined;

exports.up = (pgm) => {
  pgm.addColumns("tasks", {
    createdAt: { type: "timestamp", default: "NOW()" },
    updatedAt: { type: "timestamp", default: "NOW()" },
  });
};

exports.down = (pgm) => {};
