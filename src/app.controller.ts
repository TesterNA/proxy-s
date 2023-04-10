import { Controller, Get, Query, Req, Res } from "@nestjs/common";
import axios from "axios";

@Controller()
export class AppController {
  @Get('proxy')
  async proxy(@Req() req, @Res() res, @Query('url') url: string) {
    try {
      const response = await axios.get(url, {
        responseType: 'stream'
      });

      response.data.pipe(res);
    } catch (error) {
      console.error(error);
      res.sendStatus(500);
    }
  }
}
