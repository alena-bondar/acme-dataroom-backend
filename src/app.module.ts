import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { PrismaService } from './prisma.service';
import { UsersService } from './users/users.service';
import { FilesService } from './files/files.service';
import { UsersController } from './users/users.controller';
import { APP_FILTER } from '@nestjs/core';
import { PrismaExceptionFilter } from './common/prisma-exception.filter';

@Module({
  imports: [ConfigModule.forRoot()],
  controllers: [AppController, UsersController],
  providers: [
    AppService,
    {
      provide: APP_FILTER,
      useClass: PrismaExceptionFilter,
    },
    PrismaService,
    UsersService,
    FilesService,
  ],
})
export class AppModule {}
