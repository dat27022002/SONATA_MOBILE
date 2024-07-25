import { imageRequire, route } from '../../config';

export const listMenuSearchData = [
    { icon: imageRequire.TableStatus, to: route.ViewData.TABLESTATUS, name: 'Table status' },
    { icon: imageRequire.DaySale, to: route.ViewData.DAYSALE, name: 'Day sales list' },
    { icon: imageRequire.MonthlySale, to: route.ViewData.MONTHLYSALE, name: 'Monthly sales list' },
    { icon: imageRequire.WeeklySale, to: route.ViewData.WEEKLYSALE, name: 'Weekly sales' },
    { icon: imageRequire.TimeBase, to: route.ViewData.TIMEBASE, name: 'Time-based sales' },
    { icon: imageRequire.SaleByReceipt, to: route.ViewData.SALEBYRECEIPT, name: 'Sales by receipt' },
    { icon: imageRequire.SaleByItem, to: route.ViewData.SALEBYITEM, name: 'Sale by item' },
    { icon: imageRequire.ItemRank, to: route.ViewData.ITEMRANK, name: 'Item rank' },
    { icon: imageRequire.OrderCancelList, to: route.ViewData.ORDERCANCELLIST, name: 'Order cancel list' },
    { icon: imageRequire.CashReceiptApproval, to: route.ViewData.CASHRECEIPTAPPROVAL, name: 'Cash receipt approval' },
    { icon: imageRequire.CreditCardApproval, to: route.ViewData.CREDITCARDAPPROVAL, name: 'Credit card approval' },
    { icon: imageRequire.RefundHistory, to: route.ViewData.REFUNDHISTORY, name: 'Refund history' },
    { icon: imageRequire.InventoryStatus, to: route.ViewData.INVENTORYSTATUS, name: 'Inventory status' },
    { icon: imageRequire.RealTimeSale, to: route.ViewData.REALTIMESALE, name: 'Real-time sales' },
];

export const listMenuConfig = [
    { icon: imageRequire.AddItem, to: route.KIOSKConfigure.ADDITEM, name: 'Add item' },
    { icon: imageRequire.PrinterPaper, to: route.KIOSKConfigure.PRINTERPAPER, name: 'PrinterPaper' },
    {
        icon: imageRequire.ChangeAdminPassword,
        to: route.KIOSKConfigure.CHANGEADMINPASSWORD,
        name: 'Change admin password',
    },
    {
        icon: imageRequire.ChangeRefundPassword,
        to: route.KIOSKConfigure.CHANGEREFUNDPASSWORD,
        name: 'Change refund password',
    },
    { icon: imageRequire.BarcodeScan, to: route.KIOSKConfigure.BARCODESCAN, name: 'Barcode scan' },
];

export const listSupport = [
    { icon: imageRequire.ServiceCenter, to: route.Support.SERVICECENTER, name: 'Service center' },
    { icon: imageRequire.Language, to: route.Support.LANGUAGE, name: 'Language' },
    { icon: imageRequire.NFC, to: route.Support.NFC, name: 'UP order tag settings' },
];
