/* The controller contains the logic to handle HTTP requests. Here, it will return a simple message in a JSON. */
import {Controller, Get} from '@nestjs/common';
import {AppService} from './app.service';

@Controller()
export class AppController {
    constructor(private readonly appService: AppService) {
    }

    @Get()
    getHello(): { message: string } {
        return {message: this.appService.getHello()};
    }
}
