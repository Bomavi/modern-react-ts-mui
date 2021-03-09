export const awsConfig = {
  Auth: {
    region: process.env.REACT_APP_COGNITO_REGION,
    userPoolId: process.env.REACT_APP_COGNITO_USERPOOL_ID,
    userPoolWebClientId: process.env.REACT_APP_COGNITO_USERPOOL_WEBCLIENT_ID,
    oauth: {
      domain: process.env.REACT_APP_COGNITO_DOMAIN,
      scope: ['phone', 'email'],
      redirectSignIn: process.env.REACT_APP_COGNITO_REDIRECT_SIGNIN,
      redirectSignOut: process.env.REACT_APP_COGNITO_REDIRECT_SIGNOUT,
      responseType: process.env.REACT_APP_COGNITO_REDIRECT_RESPONSE_TYPE,
    },
  },
};
