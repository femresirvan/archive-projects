const bcrypt = require('bcrypt')
const passport = require('passport');
const localStrategy = require('passport-local').Strategy;
const UserModel = require('../model/users');
const JWTstrategy = require('passport-jwt').Strategy;
const ExtractJWT = require('passport-jwt').ExtractJwt;

passport.use('signup',new localStrategy({usernameField: 'username',passwordField: 'password'},
      async (username, password, done) => {
        try {
          password = await bcrypt.hash(password, 10);
          const user = await UserModel.create({ username, password });
          
          return done(null, user);
        } catch (error) {
          done(error);
        }
      }
    )
  );

passport.use('login',new localStrategy({usernameField: 'username',passwordField: 'password'},async (username, password, done) => {
        try {
          const user = await UserModel.findOne({ username });
  
          if (!user) {
            return done(null, false, { message: 'User not found' });
          }
  
          const validate = await bcrypt.compare(password, user.password);
  
          if (!validate) {
            return done(null, false, { message: 'Wrong Password' });
          }
  
          return done(null, user, { message: 'Logged in Successfully' });
        } catch (error) {
          return done(error);
        }
      }
    )
  );


passport.use(
  new JWTstrategy(
    {
      secretOrKey: 'TOP_SECRET',
      jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken()
    },
    async (jwtPayload, done) => {
      try {
        console.log(jwtPayload.user);
        const result = await UserModel.findById(jwtPayload.user).exec();
        if(result){
          return done(null, jwtPayload.user);
        }
      } catch (error) {
        console.log(error)
        return done(error);
      }
    }
  )
);