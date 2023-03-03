import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserAssessmentsModule } from './user-assessments/user-assessments.module';
import { UsersModule } from './users/users.module';
import { LoginModule } from './login/login.module';
import { AuthMiddleware } from './auth/auth.middleware';

@Module({
  imports: [UserAssessmentsModule, UsersModule, LoginModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer): any {
    consumer
      .apply(AuthMiddleware)
      .exclude({
        path: 'login',
        method: RequestMethod.ALL,
      })
      .forRoutes({
        path: '/*',
        method: RequestMethod.ALL,
      });
  }
}
