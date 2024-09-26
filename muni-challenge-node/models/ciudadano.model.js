const Ciudadano = (sequelize, DataTypes) => {
    const Ciudadano = sequelize.define("ciudadano", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nombre: {
            type: DataTypes.STRING,
            allowNull: false
        },
        dni: {
            type: DataTypes.STRING,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            isEmail: true
        },
    });

    return Ciudadano;
};

export default Ciudadano;