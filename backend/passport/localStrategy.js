const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcrypt');

const User = require('../models/user');

module.exports = () => {//로그인 로직. 모듈임.
  passport.use(new LocalStrategy({
    usernameField: 'email', //req.body.email
    passwordField: 'password', //req.body.password
  }, async (email, password, done) => {
    try {
      const exUser = await User.findOne({ where: { email } });//그 email을 가진 사람이 있나 찾기
      if (exUser) {
        const result = await bcrypt.compare(password, exUser.password);//brypt.compare로 비번이랑, 디비에 비번이랑 비교
        if (result) {
          done(null, exUser);
        } else {
          done(null, false, { message: '비밀번호가 일치하지 않습니다.' });
        }
      } else {
        done(null, false, { message: '가입되지 않은 회원입니다.' });
      }
    } catch (error) {
      console.error(error);
      done(error);
    }
  }));
};
//email, password로 로그인하는 것을 적은 파일