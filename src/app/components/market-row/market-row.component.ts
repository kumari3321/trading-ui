import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Market } from '../../core/models/market.model';

@Component({
  selector: 'app-market-row',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './market-row.component.html',
  styleUrl: './market-row.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MarketRowComponent {
	@Input() market!: Market;
}
