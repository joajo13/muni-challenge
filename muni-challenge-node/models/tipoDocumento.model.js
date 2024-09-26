const TipoDocumento = (sequelize, DataTypes) => {
    const TipoDocumento = sequelize.define("tipoDocumento", {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      tipo: {
        type: DataTypes.STRING,
        allowNull: false
      }
    });
  
    return TipoDocumento;
  };

export default TipoDocumento;