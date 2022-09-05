import { Sequelize } from "sequelize";
import { Flights } from "../models/Flights";
import { Logins } from "../models/Logins";
import { Packages } from "../models/Packages";
import { Rooms } from "../models/Rooms";
import { Users } from "../models/users";
import { UserPackages } from "../models/UserPackages";

const dbConfig = require('./config');

const connection = new Sequelize(dbConfig);

Users.init(connection);
Logins.init(connection);
Rooms.init(connection);
Flights.init(connection);
Packages.init(connection);
UserPackages.init(connection);

Users.associate(connection.models);
Logins.associate(connection.models);
Rooms.associate(connection.models);
Flights.associate(connection.models);
Packages.associate(connection.models);
UserPackages.associate(connection.models);

export { connection };