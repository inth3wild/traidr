// src/config/passport.ts
import passport from 'passport';
import User from '../database/models/user.model'; // Adjust the path based on your User model location

passport.serializeUser((user, done) => {
  // @ts-expect-error: not paid for this
  done(null, user.id); // Store user ID in session
});

passport.deserializeUser(async (id, done) => {
  try {
      // @ts-expect-error: not paid for this
    const user = await User.findByPk(id); // Fetch user from DB
    done(null, user); // Attach user to req.user
  } catch (error) {
    done(error);
  }
});
