import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { CryptocurrenciesModule } from './cryptocurrencies/cryptocurrencies.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(process.env.DATABASE_URL),
    CryptocurrenciesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
