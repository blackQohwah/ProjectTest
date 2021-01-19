export const server = 'https://localhost:44378';

export const webAPIUrl = `${server}/api`;

export const authSettings = {
   domain: 'blackqohwah.us.auth0.com',
   client_id: '38QQcJzGhs0KRaiW8NIGdvVPsiQ5Ltws',
   redirect_uri: window.location.origin + '/signin-callback',
   scope: 'openid profile QandAAPI email',
   audience: 'https://qanda',
};
