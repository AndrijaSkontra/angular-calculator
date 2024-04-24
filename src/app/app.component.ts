import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { CalculatorBodyComponent } from './calculator-body/calculator-body.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, CalculatorBodyComponent, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'calculator';
}
