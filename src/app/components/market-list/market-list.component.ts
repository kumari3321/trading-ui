import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Market } from '../../core/models/market.model';
import { MarketRowComponent } from '../market-row/market-row.component';

@Component({
  selector: 'app-market-list',
  standalone: true,
  imports: [CommonModule, MarketRowComponent],
  templateUrl: './market-list.component.html',
  styleUrl: './market-list.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MarketListComponent {
	@Input() markets: Market[] = [];
}
