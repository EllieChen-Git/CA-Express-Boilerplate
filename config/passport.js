const passport = require("passport");
const LocalStrategy = require("passport-local");
const UserModel = require("../database/models/user_model");

passport.serializeUser((user, done)=>{
    done(null, user._id);
})

passport.deserializeUser(async (id, done)=>{
    try{
        const user = await UserModel.findById(id);
        done(null, user)
    } catch(error) {
        done(error);
    }
})


passport.use(new LocalStrategy({
        usernameField: "email"  //we don't have username here, so we use email as default username
    }, 
    async (email, password, done) => {
        const user = await UserModel.findOne({ email })
        .catch(done);

        if (!user || !user.verifyPasswordSync(password)) {
            return done(null, false) //not log in correctly
        }

        return done(null, user);
    }
));
//1arg config object, 2 callback func

module.exports = passport;