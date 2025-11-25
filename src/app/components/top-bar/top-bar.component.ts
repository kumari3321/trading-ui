import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabsComponent } from '../tabs/tabs.component';

@Component({
  selector: 'app-top-bar',
  standalone: true,
  imports: [CommonModule, TabsComponent],
  templateUrl: './top-bar.component.html',
  styleUrl: './top-bar.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TopBarComponent {
	@Input() tabs: string[] = [];
	@Input() activeIndex = 0;
	@Output() tabChange = new EventEmitter<number>();
}
