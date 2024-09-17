import { imageRequire, route } from '../../config';
import i18n from '../../utils/i18next';

export const listMenuSearchData = () => [
    { icon: imageRequire.DaySale, to: route.ViewData.DAYSALE, name: i18n.t('Menu.DaySalesList') },
    { icon: imageRequire.MonthlySale, to: route.ViewData.MONTHLYSALE, name: i18n.t('Menu.MonthlySalesList') },
    { icon: imageRequire.WeeklySale, to: route.ViewData.WEEKLYSALE, name: i18n.t('Menu.WeeklySales') },
    { icon: imageRequire.TimeBase, to: route.ViewData.TIMEBASE, name: i18n.t('Menu.TimeBasedSales') },
    { icon: imageRequire.SaleByReceipt, to: route.ViewData.SALEBYRECEIPT, name: i18n.t('Menu.SalesByReceipt') },
    { icon: imageRequire.SaleByItem, to: route.ViewData.SALEBYITEM, name: i18n.t('Menu.SaleByItem') },
    { icon: imageRequire.ItemRank, to: route.ViewData.ITEMRANK, name: i18n.t('Menu.ItemRank') },
    { icon: imageRequire.OrderCancelList, to: route.ViewData.ORDERCANCELLIST, name: i18n.t('Menu.OrderCancelList') },
    {
        icon: imageRequire.ApproveElectronicInvoice,
        to: route.ViewData.APPROVEELECTRONICINVOICE,
        name: i18n.t('Menu.ApproveElectronicInvoice'),
    },
    { icon: imageRequire.RefundHistory, to: route.ViewData.REFUNDHISTORY, name: i18n.t('Menu.RefundHistory') },
];

export const listSupport = () => [
    { icon: imageRequire.ServiceCenter, to: route.Support.SERVICECENTER, name: i18n.t('Menu.ServiceCenter') },
    { icon: imageRequire.Language, to: route.Support.LANGUAGE, name: i18n.t('Menu.Language') },
    // { icon: imageRequire.NFC, to: route.Support.NFC, name: i18n.t('Menu.UPOrderTagSettings') },
];
