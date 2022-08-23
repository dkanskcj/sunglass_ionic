import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LayoutPage } from './layout.page';

const routes: Routes = [{
  path: '',
  component: LayoutPage,
  children: [
    {
      path: 'dashboard',
      loadChildren: () => import('../home/home.module').then(m => m.HomePageModule)
    },
    {
      path: 'items',
      loadChildren: () => import('../pages/items/items.module').then(m => m.ItemsPageModule)
    },
    {
      path: 'stock',
      loadChildren: () => import('../pages/stock/stock.module').then(m => m.StockPageModule)
    },
    {
      path: 'order',
      loadChildren: () => import('../pages/order/order.module').then( m => m.OrderPageModule)
    },
    {
      path: 'shipping',
      loadChildren: () => import('../pages/shipping/shipping.module').then( m => m.ShippingPageModule)
    },
    {
      path: 'refund',
      loadChildren: () => import('../pages/sales-refund/sales-refund.module').then( m => m.SalesRefundPageModule)
    },
    {
      path: 'total_sales',
      loadChildren: () => import('../pages/total-sales/total-sales.module').then( m => m.TotalSalesPageModule)
    },
    {
      path: 'total_refund_sales',
      loadChildren: () => import('../pages/total-refund-sales/total-refund-sales.module').then( m => m.TotalRefundSalesPageModule)
    },
    {
      path: 'customer',
      loadChildren: () => import('../pages/customer/customer.module').then( m => m.CustomerPageModule)
    },
    {
      path: 'connection',
      loadChildren: () => import('../pages/connection/connection.module').then( m => m.ConnectionPageModule)
    },
    {
      path: 'buy',
      loadChildren: () => import('../pages/buy/buy.module').then( m => m.BuyPageModule)
    },
    {
      path: 'refund_buy',
      loadChildren: () => import('../pages/refund-buy/refund-buy.module').then( m => m.RefundBuyPageModule)
    },
    {
      path: 'brand',
      loadChildren: () => import('../pages/brand/brand.module').then( m => m.BrandPageModule)
    },
    {
      path: 'register',
      loadChildren: () => import('../pages/items-register/items-register.module').then(m=>m.ItemsRegisterPageModule)
    },
    {
      path: 'modify',
      loadChildren: () => import('../pages/items-modify/items-modify.module').then(m=>m.ItemsModifyPageModule)
    },
    {
      path: 'stock_detail',
      loadChildren: () => import('../pages/stock-detail/stock-detail.module').then(m=>m.StockDetailPageModule)
    },
    {
      path: 'exchange',
      loadChildren: () => import('../pages/order/exchange/exchange.module').then(m=>m.ExchangePageModule)
    }
  ]
}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LayoutPageRoutingModule { }
