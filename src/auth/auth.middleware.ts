import { HttpStatus, Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response } from 'express';
import { AdminCredentials, UserCredentials } from '../mock/login.mock';

@Injectable()
export class AuthMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: () => void) {
    const token = req.headers['x-token'] as string;
    if (token != null && token != '') {
      const xToken = token.replace('x-token ', '');
      if (
        xToken === AdminCredentials.token ||
        xToken === UserCredentials.token
      ) {
        req['isAdmin'] = xToken === AdminCredentials.token;
        next();
      } else {
        AuthMiddleware.accessDenied(req.url, res);
      }
    } else {
      AuthMiddleware.accessDenied(req.url, res);
    }
  }

  private static accessDenied(url: string, res: Response) {
    res.status(HttpStatus.FORBIDDEN).json({
      statusCode: HttpStatus.FORBIDDEN,
      timestamp: new Date().toISOString(),
      path: url,
      message: 'access denied',
    });
  }
}
