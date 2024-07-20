import imageRequire from '../../config/ImageRequire';

export const listMenuSearchData = [
    { icon: imageRequire.TableStatus, to: 'TableStatus', name: 'Table status' },
    { icon: imageRequire.DaySale, to: 'DaySale', name: 'Day sales list' },
    { icon: imageRequire.MonthlySale, to: 'MonthlySale', name: 'Monthly sales list' },
    { icon: imageRequire.WeeklySale, to: 'WeeklySale', name: 'Weekly sales' },
    { icon: imageRequire.TimeBase, to: 'TimeBase', name: 'Time-based sales' },
    { icon: imageRequire.SaleByReceipt, to: 'SaleByReceipt', name: 'Sales by receipt' },
    { icon: imageRequire.SaleByItem, to: 'SaleByItem', name: 'Sale by item' },
    { icon: imageRequire.ItemRank, to: 'ItemRank', name: 'Item rank' },
    { icon: imageRequire.OrderCancelList, to: 'OrderCancelList', name: 'Order cancel list' },
    { icon: imageRequire.CashReceiptApproval, to: 'CashReceiptApproval', name: 'Cash receipt approval' },
    { icon: imageRequire.CreditCardApproval, to: 'CreditCardApproval', name: 'Credit card approval' },
    { icon: imageRequire.RefundHistory, to: 'RefundHistory', name: 'Refund history' },
    { icon: imageRequire.InventoryStatus, to: 'InventoryStatus', name: 'Inventory status' },
    { icon: imageRequire.RealTimeSale, to: 'RealTimeSale', name: 'Real-time sales' },
];

export const listMenuConfig = [
    { icon: imageRequire.AddItem, to: 'AddItem', name: 'Add item' },
    { icon: imageRequire.PrinterPaper, to: 'PrinterPaper', name: 'PrinterPaper' },
    { icon: imageRequire.ChangeAdminPassword, to: 'ChangeAdminPassword', name: 'Change admin password' },
    { icon: imageRequire.ChangeRefundPassword, to: 'ChangeRefundPassword', name: 'Change refund password' },
    { icon: imageRequire.BarcodeScan, to: 'BarcodeScan', name: 'Barcode scan' },
];

export const listSupport = [
    { icon: imageRequire.ServiceCenter, to: 'ServiceCenter', name: 'Service center' },
    { icon: imageRequire.Language, to: 'Language', name: 'Language' },
    { icon: imageRequire.NFC, to: 'NFC', name: 'UP order tag settings' },
];
