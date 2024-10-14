import { Body, Controller, Get, Param, Post, Put, Query } from '@nestjs/common';

@Controller('users')
export class UsersController {
    @Get()
    hello(): string {
        return "Hello World!!"
    }

    @Post()
    test(@Body() {name, lastname}: {name: string, lastname: string}): {
        name: string;
        lastname: string;
    } {
        console.log({name, lastname});
        return {name: name, lastname}
    }

    @Put('update/:id')
    create(@Param() {id}: {id: string}): string{
        return id;
    }

    @Get('test')
    findOne(@Query() {id}: {id: string}): string{
        return id;
    }
}
