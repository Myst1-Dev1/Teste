const {DataTypes , Model } = require("sequelize");

class Rooms extends Model {
    static init(connection:any) {
        super.init({
         room_name: DataTypes.STRING,
         hotel_name: DataTypes.STRING,
         available: DataTypes.BOOLEAN
        },{
            sequelize:connection
        })
    }

    static associate(models:any) {
        this.hasMany(models.Packages, {foreignKey: 'room_id', sourceKey:'id', as: 'room_user_owner' })
    }
}

export { Rooms }