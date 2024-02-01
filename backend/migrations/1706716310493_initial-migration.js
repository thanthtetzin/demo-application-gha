/* eslint-disable camelcase */

exports.shorthands = undefined;

process.env.DATABASE_URL =
  "postgres://postgres:rn6yBZ1QG7x1asvBRzaX@localhost:5432/demo";

console.log(process.env.DATABASE_URL);

exports.up = (pgm) => {
  pgm.createTable("tasks", {
    id: "id",
    title: { type: "varchar(1000)", notNull: true },
    isDone: { type: "boolean", default: false },
  });
};

exports.down = (pgm) => {};
