const Sequelize = require('sequelize');

module.exports = class Post extends Sequelize.Model {
  static init(sequelize) {
    return super.init({
      content: {//id 생략. -> sequlize에서는 id가 생략될 수 있음.
        type: Sequelize.STRING(140),
        allowNull: false,
      },
      img: {
        type: Sequelize.STRING(200),
        allowNull: true,
      },//img 한개만 올릴 수 있음.
    }, {
      sequelize,
      timestamps: true,
      underscored: false,
      modelName: 'Post',
      tableName: 'posts',
      paranoid: false, //deleted at false -> 게시글 삭제시 완전 삭제
      charset: 'utf8mb4', //이모티콘
      collate: 'utf8mb4_general_ci',
    });
  }

  static associate(db) {
    db.Post.belongsTo(db.User);//post belongs to many user , has many  만 있어도 되지만 둘다 쓰는게 좋음.
    db.Post.belongsToMany(db.Hashtag, { through: 'PostHashtag' });//belongs to many 는 N:N 관계
  }// through: 'PostHashtag'는 중간 테이블 이름. N:N관계는 중간테이블이 생김.
};
