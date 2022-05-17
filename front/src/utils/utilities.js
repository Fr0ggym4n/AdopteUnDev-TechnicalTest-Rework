export const endOfSubscription = (startDate, engagement) => {
    const formatStartDate = new Date(startDate);
    const endDate = new Date(formatStartDate.setMonth(formatStartDate.getMonth() + engagement));
    return endDate;
};