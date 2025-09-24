import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { TranslateModule } from '@ngx-translate/core';

import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { FixedMenuComponent } from './components/fixed-menu/fixed-menu.component';
import { SlideShowImageComponent } from './components/slideshow_image/slideshowimage.component';
import { SlideShowTextComponent } from './components/slideshow_text/slideshowtext.component';
import { BreadcrumbComponent } from './components/breadcrumb.component';
import { SubSectionComponent } from './components/page_sub_sections';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';

//import { NewItemDirective } from './new-item.directive';
//import { OrdersPipe } from './orders.pipe';

@NgModule({
  imports: [
    CommonModule,
    FooterComponent,
    HeaderComponent,
    TranslateModule,
    FixedMenuComponent,
    SlideShowImageComponent,
    SlideShowTextComponent,
    BreadcrumbComponent,
    SubSectionComponent,
    MatCardModule,
    MatGridListModule,
  ],
  declarations: [],
  exports: [
    FooterComponent,
    HeaderComponent,
    CommonModule,
    FormsModule,
    TranslateModule,
    FixedMenuComponent,
    SlideShowImageComponent,
    SlideShowTextComponent,
    BreadcrumbComponent,
    SubSectionComponent,
    MatCardModule,
    MatGridListModule,
  ],
})
export class SharedModule {}
