import customApolloClient from "../client/client";

const API_DOMAIN = "pkx64q1x4q.sse.codesandbox.io";

export const CLIENT = customApolloClient.start({
    apiURI: `https://${API_DOMAIN}/`,
    wsURI: `wss://${API_DOMAIN}/graphql`
  });
  