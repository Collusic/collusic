const Sequelize = require("sequelize");

module.exports = class Comment extends Sequelize.Model {
  static init(sequelize) {
    return super.init(
      {
        c_description: {
          type: Sequelize.TEXT,
          allowNull: false,
        },
        c_audioFile: {
          type: Sequelize.STRING(140),
          allowNull: false,
        },
        c_lyrics_text: {
          type: Sequelize.TEXT,
          allowNull: true,
        },
        selected_status: {
          type: Sequelize.BOOLEAN,
          allowNull: true,
        },
      },
      {
        sequelize,
        timestamps: true,
        underscored: false,
        modelName: "Comment",
        tableName: "comment",
        paranoid: false,
        charset: "utf8mb4",
        collate: "utf8mb4_general_ci",
      }
    );
  }

  static associate(db) {
    db.Comment.belongsTo(db.Post, { foreignKey: "pid", sourceKey: "id" });
    db.Comment.belongsTo(db.User, { foreignKey: "uid", sourceKey: "id" });
  }
};
//requestid 외래키
//uid 외래키
//constraint uid foreign key uid references user.uid on delete cascade on update cascade
