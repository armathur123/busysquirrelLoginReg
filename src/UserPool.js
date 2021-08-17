import {CognitoUserPool} from 'amazon-cognito-identity-js';

const poolData = {
  UserPoolId: 'us-east-2_OtrGJYrCT',
  ClientId: '455m0ga05v3dcmd2hvtk443gmf'
};

export default new CognitoUserPool(poolData);
