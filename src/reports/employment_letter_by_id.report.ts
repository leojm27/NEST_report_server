import type { StyleDictionary, TDocumentDefinitions } from "pdfmake/interfaces";
import { headerSection } from "./sections/header.section";
import { DateFormatter } from "src/helpers";

const styles: StyleDictionary = {
    header: {
        fontSize: 22,
        bold: true,
        alignment: 'center',
        margin: [0, 60, 0, 20]
    },
    body: {
        alignment: 'justify',
        margin: [0, 0, 0, 70],
    },
    signature: {
        fontSize: 14,
        bold: true
    },
    footer: {
        fontSize: 10,
        italics: true,
        alignment: 'center',
        margin: [0, 0, 0, 20]
    }
}

interface ReportValues {
    employerName: string;
    employerPosition: string;
    employeeName: string;
    employeePosition: string;
    employeeStartDate: Date;
    employeeHours: number;
    employeeWorkSchedule: string;
    employerCompany: string;
}

/**
 * 
 * @returns 
 */
export const getEmploymentLetterReportById = (values: ReportValues): TDocumentDefinitions => {
    const docDefinition: TDocumentDefinitions = {
        styles,
        pageMargins: [40, 60, 40, 60],
        header: headerSection({ showLogo: true }),
        content: [
            {
                text: 'CONSTANCIA DE EMPLEO',
                style: 'header'
            },
            {
                text: `Yo, ${values.employerName}, en mi calidad de ${values.employerPosition} de ${values.employerCompany},
                por medio de la presente certifico que ${values.employeeName} ha sido empleado en nuestra
                empresa desde el ${DateFormatter.getDDMMMMYYYY(values.employeeStartDate)}. \n\n
                Durante su empleo, el Sr./Sra. ${values.employeeName} ha desempeñado el cargo de ${values.employeePosition}, demostrando responsabilidad, compromiso y habilidades profesionales en sus
                labores. \n\n
                La jornada laboral del Sr./ Sra. ${values.employeeName} es de ${values.employeeHours} horas
                semanales, con un horario de ${values.employeeWorkSchedule}, cumpliendo con las políticas y
                procedimientos establecidos por la empresa. \n\n
                Esta constancia se expide a solicitud del interesado para los fines que considere conveniente. \n\n`,
                style: 'body'
            },
            { text: `Atentamente`, style: 'signature' },
            { text: values.employerName, style: 'signature' },
            { text: values.employerPosition, style: 'signature' },
            { text: values.employerCompany, style: 'signature' },
            { text: DateFormatter.getDDMMMMYYYY(values.employeeStartDate), style: 'signature' },
        ],
        footer: {
            text: `Este documento es una constancia de empleo y no representa un compromiso laboral.`,
            style: 'footer'
        }
    }

    return docDefinition;
}