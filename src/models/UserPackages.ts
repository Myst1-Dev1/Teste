const {DataTypes , Model } = require("sequelize");

class UserPackages extends Model {
    static init(connection:any) {
        super.init({},{sequelize:connection})
    }

    static associate(models:any) {
        this.belongsTo(models.Users, {foreignKey: 'user_id', as: 'user_package_user_owner'})
        this.belongsTo(models.Packages, {foreignKey: 'package_id', as:'user_package_package_owner'})     
    }
}

export { UserPackages };