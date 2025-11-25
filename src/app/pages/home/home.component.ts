import { ChangeDetectionStrategy, Component, Signal, effect, signal, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopBarComponent } from '../../components/top-bar/top-bar.component';
import { MarketListComponent } from '../../components/market-list/market-list.component';
import { BottomNavComponent } from '../../components/bottom-nav/bottom-nav.component';
import { MarketDataService } from '../../core/market-data/market-data.service';
import { Market } from '../../core/models/market.model';
import { map } from 'rxjs';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, TopBarComponent, MarketListComponent, BottomNavComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent implements OnInit {
	tabs = this.data.getCategories();
	activeTabIndex = signal(1); // default to 'Forex'
	markets = signal<Market[]>([]);

	constructor(private data: MarketDataService){
		effect(() => {
			const cat = this.tabs[this.activeTabIndex()];
			this.data.getMarkets(cat).subscribe(res => this.markets.set(res));
		});
	}

	ngOnInit(): void {
		this.loadMarkets(this.activeTabIndex());
	}

	setTab(index: number){
		this.activeTabIndex.set(index);
		this.loadMarkets(index);
	}

	private loadMarkets(index: number){
		const cat = this.tabs[index];
		this.data.getMarkets(cat).subscribe(res => this.markets.set(res));
	}
}
