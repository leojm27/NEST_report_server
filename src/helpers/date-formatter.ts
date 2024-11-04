
export class DateFormatter {
    static readonly formatter = new Intl.DateTimeFormat('es-ES', {
        year: 'numeric',
        month: 'long',
        day: '2-digit'
    })

    /**
     * 
     * @param date 
     * @returns 
     */
    static getDDMMMMYYYY(date: Date): string {
        return this.formatter.format(date)
    }
}