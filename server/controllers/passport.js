const passport = require("passport");
const shraga = require("passport-shraga");

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((user, done) => {
  done(null, user);
});

const config = {
  callbackURL: `${process.env.SERVER_URL || "http://localhost:4000"}/api/success`,
  shragaURL: process.env.SHRAGA_URL || "https://shraga-prod.northeurope.cloudapp.azure.com",
  useADFS: true,
  useEnrichId: true,
};
passport.use(
  new shraga.Strategy(config, (profile, done) => {
    if (profile && profile.RelayState) {
      profile.RelayState = profile.RelayState.replace("%26", "&");
    }
    const user = {
      id: profile.id,
      name: profile.name.firstName + " " + profile.name.lastName,
      displayName: profile.displayName,
      job: profile.job,
      relayState: profile.RelayState,
    };
    return done(null, user);
  })
);
module.exports = passport;
