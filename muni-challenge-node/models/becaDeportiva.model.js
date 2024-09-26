const BecaDeportiva = (sequelize, DataTypes) => {
    const BecaDeportiva = sequelize.define("becaDeportiva", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        
        tipoId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: "tipoDocumentos",
                key: "id"
            }
        },
        tramiteId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: "tramites",
                key: "id"
            }
        }
    });

    return BecaDeportiva;
};

export default BecaDeportiva;