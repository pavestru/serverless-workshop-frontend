const dev = {
  s3: {
    REGION: "us-east-1",
    BUCKET: "notes-app-api-dev-attachmentsbucket-1234"
  },
  apiGateway: {
    REGION: "us-east-1",
    URL: "https://1234.execute-api.us-east-1.amazonaws.com/dev"
  },
  cognito: {
    REGION: "us-east-1",
    USER_POOL_ID: "us-east-1_1234",
    APP_CLIENT_ID: "1234",
    IDENTITY_POOL_ID: "us-east-1:1234"
  }
};

const prod = {
  // Just copy the dev config for now
  ...dev
};

// Default to dev if not set
const config = process.env.REACT_APP_STAGE === 'prod'
  ? prod
  : dev;

export default {
  // Add common config values here
  MAX_ATTACHMENT_SIZE: 5000000,
  ...config
};
