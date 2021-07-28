const Sequelize = require("sequelize");
const env = process.env.NODE_ENV || "development"; //config.json의 development 가져오기
const config = require("../config/config")[env]; //config.json의 development 가져오기
const User = require("./user");
const Post = require("./post");
const Comment = require("./comment");

const db = {};
const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  config
);

db.sequelize = sequelize;
db.User = User;
db.Post = Post;
db.Comment = Comment;
//사람과 게시글은 1:1관계, 게시글과 해시태그는 1:N 관계
User.init(sequelize);
Post.init(sequelize);
Comment.init(sequelize);

User.associate(db);
Post.associate(db);
Comment.associate(db);

module.exports = db;
