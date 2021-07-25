const Sequelize = require('sequelize');
//db 테이블과 sequelize 연동을 위한 코드
module.exports = class User extends Sequelize.Model {
  static init(sequelize) {
    return super.init({
      email: {
        type: Sequelize.STRING(40),
        allowNull: true,
        unique: true,
      },
      nick: {
        type: Sequelize.STRING(15),
        allowNull: false,//sns 로그인인경우 없음.
      },
      password: {
        type: Sequelize.STRING(100),
        allowNull: true,
      },
      provider: {//로그인 제공자 (2021collusic에서는 local)
        type: Sequelize.STRING(10),
        allowNull: false,
        defaultValue: 'local', 
      },
      introduce: {
        type: Sequelize.TEXT,
        allowNull: true,
      },
      imagePath: {
        type: Sequelize.STRING(100),
        allowNull: true
      }
    }, {
      sequelize,
      timestamps: true, //생성일 수정일 삭제일이 기록
      underscored: false,
      modelName: 'User',
      tableName: 'users',
      paranoid: true,
      charset: 'utf8',
      collate: 'utf8_general_ci', //한글 지원
    });
  }

  static associate(db) {
    db.User.hasMany(db.Post);//user has many db.post
    // db.User.belongsToMany(db.User, {
    //   foreignKey: 'followingId', //둘다 foreignkey가 userid이면 모르니까. 선언.
    //   as: 'Followers',
    //   through: 'Follow',
   // });//사용자와 사용자간의 관계: 팔로잉 팔로워 관계
    // db.User.belongsToMany(db.User, {
    //   foreignKey: 'followerId',
    //   as: 'Followings',
    //   through: 'Follow',
    // });
  }
};
