const Sequelize = require("sequelize");
//db 테이블과 sequelize 연동을 위한 코드
module.exports = class User extends Sequelize.Model {
  static init(sequelize) {
    return super.init(
      {
        email: {
          type: Sequelize.STRING(40),
          allowNull: false,
          unique: true,
        },
        nick: {
          type: Sequelize.STRING(15),
          allowNull: true,
        },
        password: {
          type: Sequelize.STRING(100),
          allowNull: false,
        },
        provider: {
          //로그인 제공자
          type: Sequelize.STRING(10),
          allowNull: false,
          defaultValue: "local",
        },
        introduce: {
          type: Sequelize.TEXT,
          allowNull: true,
        },
        imagePath: {
          type: Sequelize.STRING(100),
          allowNull: true,
        },
      },
      {
        sequelize,
        timestamps: true,
        underscored: false,
        modelName: "User",
        tableName: "users",
        paranoid: true,
        charset: "utf8",
        collate: "utf8_general_ci",
      }
    );
  }

  static associate(db) {
    db.User.hasMany(db.Post, { foreignKey: "uid", targetKey: "id" });
    db.User.hasMany(db.Comment, { foreignKey: "uid", targetkey: "id" });
  }
};
