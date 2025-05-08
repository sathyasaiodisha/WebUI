import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { TranslateModule } from '@ngx-translate/core';

import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { FixedMenuComponent } from './components/fixed-menu/fixed-menu.component';
//import { NewItemDirective } from './new-item.directive';
//import { OrdersPipe } from './orders.pipe';

@NgModule({
  imports: [
    CommonModule,
    FooterComponent,
    HeaderComponent,
    TranslateModule,
    FixedMenuComponent,
  ],
  declarations: [],
  exports: [
    FooterComponent,
    HeaderComponent,
    CommonModule,
    FormsModule,
    TranslateModule,
    FixedMenuComponent,
  ],
})
export class SharedModule {}
