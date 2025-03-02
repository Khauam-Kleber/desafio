import { Component, ElementRef, inject, signal, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgxMaskDirective } from 'ngx-mask';
import { UtilsService } from '../../services/utils.service';
import { CardDetailComponent } from '../card-detail/card-detail.component';
import { findFakeInfoByCpf, InfoCard } from '../../models/info-card.model';
import { CommonModule } from '@angular/common';
import { StepperComponent } from '../stepper/stepper.component';

@Component({
  selector: 'app-search',
  imports: [FormsModule, NgxMaskDirective, CardDetailComponent, CommonModule, StepperComponent],
  providers: [UtilsService],
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss'
})
export class SearchComponent {
  private utilsService = inject(UtilsService);
  @ViewChild('cpfInput')
  yourElement!: ElementRef;
  timeoutKeyDown: any = null;
  cpfNumber: string = '';
  cpfIsValid = signal(true);
  searchExecuted = signal(false);
  loading = signal(false);
  cardInfos: InfoCard[] = [];
  

  searchCpf(): void {
    if(this.cpfNumber !== ''){
      this.loading.set(true);
      setTimeout(() => {
        this.searchExecuted.set(true);
        this.cardInfos = this.cpfIsValid() ? findFakeInfoByCpf() : [];
        this.loading.set(false);
      }, 1000);
    }
  }

  updateValidation(event: any):void {
    this.cardInfos = [];
    clearTimeout(this.timeoutKeyDown);
    var $this = this;
    this.timeoutKeyDown = setTimeout(function () {
      if (event.keyCode != 13) {
        $this.cpfIsValid.set($this.utilsService.cpfIsValid($this.cpfNumber));
      }
    }, 500);
  }
}
