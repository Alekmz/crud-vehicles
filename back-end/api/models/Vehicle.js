module.exports = (sequelize, DataTypes) => {
const Vehicle = sequelize.define("Vehicle", {
      placa: { 
        type: DataTypes.STRING, 
        allowNull: false,
        validate: {
          notEmpty: {
            msg: "Preencha totalmente o campo"
          }, 
          len: {
            args: 8,
            msg: "O numero da placa deve conter 8 caracteres!"
          },
        }
      },
      chassi: { 
        type: DataTypes.STRING, 
        allowNull: false,
        validate: {
          notEmpty: {
            msg: "Preencha totalmente o campo"
          },
          len: {
            min:17,
            max:25,
            msg: "O número do chassi deve conter mais de 17 caracteres junto aos espaços!"
          }, 
        }
      },
      renavam: { 
        type: DataTypes.STRING, 
        allowNull: false,
        validate: {
          notEmpty: {
            msg: "Preencha totalmente o campo"
          }, 
          len: {
            args: 11,
            msg: "O código Renavam deve conter 11 digitos!"
          },
        }
      },
      modelo: { 
        type: DataTypes.STRING, 
        allowNull: false,
        validate: {
          notEmpty: {
            msg: "Preencha totalmente o campo"
          }, 
        }
      },
      marca: { 
        type: DataTypes.STRING, 
        allowNull: false,
        validate: {
          notEmpty: {
            msg: "Preencha totalmente o campo"
          }, 
        }
      },
      ano: { 
        type: DataTypes.STRING, 
        allowNull: false,
        validate: {
          notEmpty: {
            msg: "Preencha totalmente o campo"
          },
          len: {
            args: 4,
            msg: "O ano de modelo do veículo deve conter apenas 4 digitos!"
          }, 
        }
      },
    });
    return Vehicle;
};

// module.exports = Vehicle;