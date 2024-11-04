import { Controller, Get, Param, Res } from '@nestjs/common';
import { BasicReportsService } from './basic-reports.service';
import { Response } from 'express';

@Controller('basic-reports')
export class BasicReportsController {
  constructor(private readonly basicReportsService: BasicReportsService) { }

  @Get()
  async hello(@Res() response: Response) {
    const pdfDoc = this.basicReportsService.hello();

    response.setHeader('Content-Type', 'application/pdf')
    pdfDoc.info.Title = 'Hola_Mundo.pdf';
    pdfDoc.pipe(response);
    pdfDoc.end();
  }

  @Get('employment-letter')
  async employmentLetter(@Res() response: Response) {
    const pdfDoc = this.basicReportsService.employmentLetter();

    response.setHeader('Content-Type', 'application/pdf')
    pdfDoc.info.Title = 'Hola_Mundo.pdf';
    pdfDoc.pipe(response);
    pdfDoc.end();
  }


  /**
   * 
   * @param response 
   * @param employeeId 
   */
  @Get('employment-letter/:employeeId')
  async employmentLetterById(
    @Res() response: Response,
    @Param('employeeId') employeeId: string
  ) {
    const pdfDoc = await this.basicReportsService.employmentLetterById(+employeeId);

    response.setHeader('Content-Type', 'application/pdf')
    pdfDoc.info.Title = 'Hola_Mundo.pdf';
    pdfDoc.pipe(response);
    pdfDoc.end();
  }
}
