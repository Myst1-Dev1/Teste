const {DataTypes ,Model } = require("sequelize");

class Packages extends Model{
    static init(connection:any) {
        super.init({
            name: DataTypes.STRING,
            origin: DataTypes.STRING,
            destination: DataTypes.STRING,
            date_start: DataTypes.DATE,
            date_end: DataTypes.DATE,
            count_people: DataTypes.INTEGER,
            count_days: DataTypes.INTEGER,
           },{
               sequelize:connection
           })
    }

    static associate(models:any) {
        this.belongsTo(models.Rooms, {foreignKey: 'room_id', as: 'room_user_owner'});
        this.belongsTo(models.Flights, {foreignKey: 'flight_id', as: 'flight_user_owner'});
        this.hasOne(models.UserPackages, {foreignKey: 'package_id', sourceKey:'id', as: 'user_package_package_owner' })
    }

}

export { Packages }