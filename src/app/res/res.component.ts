import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-res',
  templateUrl: './res.component.html',
  styleUrls: ['./res.component.css'],
})
export class ResComponent {
  @Input() sum: number = 0;
}
