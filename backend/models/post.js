const Sequelize = require("sequelize");

module.exports = class Post extends Sequelize.Model {
  static init(sequelize) {
    return super.init(
      {
        title: {
          //id 생략. -> sequlize에서는 id가 생략될 수 있음.
          type: Sequelize.STRING(140),
          allowNull: false,
        },
        description: {
          type: Sequelize.TEXT,
          allowNull: true,
        },
        audioFile: {
          type: Sequelize.STRING(140),
          allowNull: false,
        },
        state: {
          type: Sequelize.BOOLEAN,
          allowNull: true,
        },
        field_free: {
          type: Sequelize.BOOLEAN,
          allowNull: true,
        },
        lyrics_text: {
          type: Sequelize.TEXT,
          allowNull: true,
        },
        genre: {
          type: Sequelize.STRING(140),
          allowNull: true,
        },
        mood: {
          type: Sequelize.STRING(140),
          allowNull: true,
        },
        music_field: {
          type: Sequelize.BOOLEAN,
          allowNull: true,
        },
        lyrics_field: {
          type: Sequelize.BOOLEAN,
          allowNull: true,
        },
        instrument_field: {
          type: Sequelize.BOOLEAN,
          allowNull: true,
        },
      },
      {
        sequelize,
        timestamps: true,
        underscored: false,
        modelName: "Post",
        tableName: "posts",
        paranoid: false, //deleted at false -> 게시글 삭제시 완전 삭제
        charset: "utf8mb4", //이모티콘
        collate: "utf8mb4_general_ci",
      }
    );
  }

  static associate(db) {
    db.Post.belongsTo(db.User, { foreignKey: "uid", sourceKey: "id" });
    db.Post.hasMany(db.Comment, { foreignKey: "pid", targetKey: "id" });
  }
};
