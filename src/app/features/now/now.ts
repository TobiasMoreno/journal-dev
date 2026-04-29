import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-now',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './now.html',
  styleUrl: './now.css',
})
export class NowComponent {}
