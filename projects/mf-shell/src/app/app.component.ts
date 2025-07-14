import { AsyncPipe } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { CommonsLibService } from '@commons-lib';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, AsyncPipe, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  constructor(public commonsLibService: CommonsLibService) {}
}
