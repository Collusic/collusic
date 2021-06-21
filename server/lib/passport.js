var mysql = require('./mysql');

module.exports = function (app) {

    var passport = require('passport'),
        LocalStrategy = require('passport-local').Strategy;

    app.use(passport.initialize());
    app.use(passport.session());

    passport.serializeUser(function (user, done) {
        console.log('serializeUser', user);
        done(null, user.email);
    });

    passport.deserializeUser(function (id, done) {
        mysql.db.query(
            `SELECT * FROM user WHERE email=?`,
            [id],
            function (error2, result) {
              if (error2) {
                throw error2;
              }
                console.log('deserializeUser', id, result[0]);
                done(null, result[0]);
            });
        
    });

    passport.use(new LocalStrategy({
            usernameField: 'email',
            passwordField: 'pwd'
        },
        function (email, password, done) {
            console.log('LocalStrategy', email, password);
            mysql.db.query(
                `SELECT * FROM user WHERE email=?`,
                [email],
                function (error2, result) {
                if (error2) {
                    throw error2;
                }
                if (result[0]) {
                    console.log('user1:',result[0]);
                    if(password === result[0].password){
                        return done(null, result[0], {
                            message: 'Welcome.'
                        });
                    } else {
                        return done(null, false, {
                            message: 'Password is not correct.'
                        });
                    }
                } else {
                    return done(null, false, {
                        message: 'There is no email.'
                    });
                }
                });
        }
    ));
    return passport;
}