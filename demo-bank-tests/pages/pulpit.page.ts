import { Page } from '@playwright/test';
import { SideMenuComponent } from '../components/side-menu.component';

export class PulpitPage {
  constructor(private page: Page) {}


  sideMenu = new SideMenuComponent(this.page)//przekazujemy obiekt strony, która jest wspólna

  transferReceiver = this.page.locator('#widget_1_transfer_receiver');
  transferAmount = this.page.locator('#widget_1_transfer_amount');
  transferTitle = this.page.locator('#widget_1_transfer_title');
  transferButton= this.page.getByRole('button', { name: 'wykonaj' });
  actionCloseButton = this.page.getByTestId('close-button');
  transferDoneMessage = this.page.locator('#show_messages');


  topUpReceiverInput = this.page.locator('#widget_1_topup_receiver');
  topUpAmount = this.page.locator('#widget_1_topup_amount')
  topUpAgreementCheckbox = this.page.locator('#uniform-widget_1_topup_agreement span')
  topUpButton = this.page.getByRole('button', { name: 'doładuj telefon' })

  messageText = this.page.locator('#show_messages');

  moneyValue = this.page.locator('#money_value');

  userNameText = this.page.getByTestId('user-name');

}