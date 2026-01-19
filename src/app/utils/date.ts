function getWeekDays(startDate: Date) {
    return Array.from({length: 7}).map((_, index) => {
        const date = new Date(startDate);
        date.setDate(startDate.getDate() + index);
        return date;
    })
}