import passport from 'passport';
import { twitch, twitter } from './passport/strategies';

passport.use(twitch);
passport.use(twitter);
