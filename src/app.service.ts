/* The service can contain business logic.
Here, it returns a simple string, but it’s designed for more complex functions. */

import {Injectable} from '@nestjs/common';

@Injectable()
export class AppService {
    getHello(): string {
        return "Hello, World!"
    }
}
