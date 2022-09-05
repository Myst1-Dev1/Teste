const {DataTypes ,Model } = require("sequelize");

class Logins extends Model {
    static init(connection: any) {
        super.init({
            email: DataTypes.STRING,
            password: DataTypes.STRING
        },{
            sequelize: connection
        })
    }

    static associate(models: any) {
        this.belongsTo(models.Users, {foreignKey: 'user_id', as: 'login_user_owner'});
    }
}

export { Logins }