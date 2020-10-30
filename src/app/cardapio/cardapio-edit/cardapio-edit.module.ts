import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CardapioEditPageRoutingModule } from './cardapio-edit-routing.module';

import { CardapioEditPage } from './cardapio-edit.page';
import { PdfViewerModule } from 'ng2-pdf-viewer';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CardapioEditPageRoutingModule,
    PdfViewerModule
  ],
  declarations: [CardapioEditPage]
})
export class CardapioEditPageModule {}
