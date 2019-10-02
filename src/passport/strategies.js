import { Strategy as TwitchtvStrategy } from 'passport-twitch';
import { Strategy as TwitterStrategy } from 'passport-twitter';

export const twitch = new TwitchtvStrategy({
  clientID: process.env.TWITCHTV_CLIENT_ID,
  clientSecret: process.env.TWITCHTV_CLIENT_SECRET,
  callbackURL: process.env.TWITCHTV_CALLBACK,
  scope: ''
}, (accessToken, refreshToken, profile, done) => {
});

export const twitter = new TwitterStrategy({
  consumerKey: process.env.TWITTER_CONSUMER_KEY,
  consumerSecret: process.env.TWITTER_CONSUMER_SECRET,
  callbackURL: process.env.TWITTER_CALLBACK
}, (token, tokenSecret, profile, done) => {
});
