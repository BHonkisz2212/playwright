import { Page } from "@playwright/test";

export class SideMenuComponent{
    constructor(private page:Page){}
    paymentButton = this.page.getByRole('link', { name: 'płatności' })//teraz bazujemy na propert zdefiniowanym w tym miejscu!!!


}