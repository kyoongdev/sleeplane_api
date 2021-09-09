import * as entity from "./src/db/entity";

module.exports = {
  type: "mysql",
  port: 3306,
  host: "localhost",
  username: "root",
  password: process.env.MYSQL_PASSWORD,
  database: "sleeplane",
  synchronize: true,
  logging: false,
  entities: [entity.AirLine, entity.GuidanceVoice],
};
