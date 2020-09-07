import { environment } from "./environment";

export const APIs = {
  authorization: () => environment.URL + '/api/v1/auth/check-authorization',
  login: () => environment.URL + '/api/v1/auth/login',
  signup: () => environment.URL + '/api/v1/auth/signup',
  refreshTokens: userId => environment.URL + '/api/v1/auth/refresh/' + userId,
  user: userId => environment.URL + '/api/v1/users/' + userId,
  todos: userId => environment.URL + '/api/v1/users/' + userId + '/todos',
  todo: (userId, todoId) => environment.URL + '/api/v1/users/' + userId + '/todos/' + todoId
};
