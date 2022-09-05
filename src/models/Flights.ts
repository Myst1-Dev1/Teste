const { DataTypes, Model } = require("sequelize");

class Flights extends Model{
    static init(connection: any){
        super.init({
            name: DataTypes.STRING,
            origin: DataTypes.STRING,
            destination: DataTypes.STRING,
            company: DataTypes.STRING,
            date_out: DataTypes.DATE,
            date_in: DataTypes.DATE
        },{
            sequelize:connection
        })
    }

    static associate(models:any) {
        this.hasOne(models.Packages, {foreignKey: 'flight_id',sourceKey: 'id', as: 'flight_user_owner'}) 
    }
}

export { Flights }