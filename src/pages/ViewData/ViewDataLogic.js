export const calculateTodaySales = (listSale) => {
    // Get today's date without time
    const today = new Date();
    const todayStr = today.toISOString().split('T')[0]; // Format YYYY-MM-DD

    //  Initialize totals
    let totalAmountToday = 0;
    let quantityToday = 0;

    // Calculate totals for today
    listSale.forEach((sale) => {
        const saleDate = sale.date.split('T')[0]; // Format YYYY-MM-DD
        if (saleDate === todayStr) {
            totalAmountToday += sale.totalAmout;
            quantityToday += 1; // Assuming each entry represents 1 sale
        }
    });

    return { revenue: totalAmountToday.toLocaleString('vi-VN'), quantity: quantityToday };
};
