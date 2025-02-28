import { Component, Input } from '@angular/core';
import { InfoCard } from '../../models/info-card.model';

@Component({
  selector: 'app-card-detail',
  imports: [],
  templateUrl: './card-detail.component.html',
  styleUrl: './card-detail.component.scss'
})
export class CardDetailComponent {
  @Input()
  cardInfo!: InfoCard;

}
