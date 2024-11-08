/*
The AppModule combines the controller and service. This is where we configure "Hello World" in a modular way.
 */
import {Module} from '@nestjs/common';
import {AppController} from './app.controller';
import {AppService} from './app.service';

@Module({
    imports: [],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {
}
