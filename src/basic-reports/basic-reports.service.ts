import { Injectable, NotFoundException, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { PrinterService } from '../printer/printer.service';
import { getEmploymentLetterReport, getEmploymentLetterReportById, getHelloWorldReport,  } from 'src/reports';
import type { TDocumentDefinitions } from 'pdfmake/interfaces';



@Injectable()
export class BasicReportsService extends PrismaClient implements OnModuleInit {

    async onModuleInit() {
        await this.$connect();
    }

    constructor(private readonly printerService: PrinterService) {
        super();
    }

    /**
     * 
     * @returns 
     */
    hello() {
        const pdfDoc: TDocumentDefinitions = getHelloWorldReport({ name: 'Leonardo' })

        const doc = this.printerService.createPdf(pdfDoc);
        return doc;
    }

    /**
     * 
     * @returns 
     */
    employmentLetter() {
        const pdfDoc: TDocumentDefinitions = getEmploymentLetterReport()

        const doc = this.printerService.createPdf(pdfDoc);
        return doc;
    }

    /**
     * 
     * @returns 
     */
    async employmentLetterById(employeeId: number) {
        const employee = await this.employees.findUnique({
            where: {
                id: employeeId
            }
        })

        if (!employee) {
            throw new NotFoundException(`Employee with id ${employeeId} not found`)
        }
        const pdfDoc: TDocumentDefinitions = getEmploymentLetterReportById({
            employerName: 'Leonardo Morales',
            employerPosition: 'Gerente RRHH',
            employeeName: employee.name,
            employeePosition: employee.position,
            employeeStartDate: employee.start_date,
            employeeHours: employee.hours_per_day,
            employeeWorkSchedule: employee.work_schedule,
            employerCompany: 'Web31',
        })

        const doc = this.printerService.createPdf(pdfDoc);
        return doc;
    }
}
