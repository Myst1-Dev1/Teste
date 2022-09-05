const {DataTypes , Model } = require("sequelize");

class Users extends Model {
    static init(connection: any) {
        super.init({
            name: DataTypes.STRING,
            cpf: DataTypes.STRING,
            rg: DataTypes.STRING,
            phone: DataTypes.INTEGER
        },{
            sequelize: connection
        })
    }

    static associate(models: any) {
        this.hasOne(models.Logins, {foreignKey: 'user_id', as: 'login_user_owner' });
        this.hasMany(models.UserPackages, {foreignKey: 'user_id', sourceKey:'id', as:'user_package_user_owner' })
    }
}

export { Users }