import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MapsModule } from './maps/maps.module';
import { ConfigModule } from '@nestjs/config';
import { RoutesModule } from './routes/routes.module';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [ConfigModule.forRoot({ isGlobal: true }), PrismaModule,MapsModule,RoutesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
