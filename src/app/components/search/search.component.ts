import { Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgxMaskDirective } from 'ngx-mask';
import { UtilsService } from '../../services/utils.service';
import { CardDetailComponent } from '../card-detail/card-detail.component';
import { findFakeInfoByCpf, InfoCard } from '../../models/info-card.model';

@Component({
  selector: 'app-search',
  imports: [FormsModule, NgxMaskDirective, CardDetailComponent],
  providers: [UtilsService],
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss'
})
export class SearchComponent {
  private utilsService = inject(UtilsService);

  cpfNumber: string = '';
  cpfIsValid = signal(false);
  searchExecuted = signal(false);
  cardInfos: InfoCard[] = [];

  searchCpf(): void {
    this.searchExecuted.set(true);
    this.cpfIsValid.set(this.utilsService.cpfIsValid(this.cpfNumber));
    this.cardInfos = this.cpfIsValid() ? findFakeInfoByCpf() : [];
  }

  updateSearch(){
    this.searchExecuted.set(false);
  }

  
}
