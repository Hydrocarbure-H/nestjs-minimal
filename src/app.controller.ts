/* 
The controller contains the logic to handle HTTP requests. Here, it will
return a simple message in a JSON.
*/
import { Controller, Get } from "@nestjs/common";
import { AppService } from "./app.service";

@Controller()
export class AppController {
    constructor(private readonly appService: AppService) {
    }

    /**
     * This function returns a simple message in a JSON object.
     */
    @Get()
    getHello(): { message: string; random_number: number } {
        return {
            message: this.appService.getHello(),
            random_number: this.appService.getRandomNumber()
        };
    }
}
