import { HttpInterceptorFn } from '@angular/common/http';

export const exampleInterceptorInterceptor: HttpInterceptorFn = (req, next) => {

  const jwtToken = localStorage.getItem("JWT")
  req.headers.set("Authorization", "Bearer "+jwtToken)

  return next(req);
};
