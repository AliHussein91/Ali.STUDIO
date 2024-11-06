import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import {
  Router,
  RouterLink,
  RouterLinkActive,
  Event,
  NavigationEnd,

} from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, CommonModule, RouterLinkActive],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent implements OnInit {
  isProductPage!: boolean;
  router: Router = inject(Router);

  ngOnInit(): void {

    this.router.events.subscribe((routerEvent: Event) => {
      if (routerEvent instanceof NavigationEnd) {
        if (this.router.url.split('/')[1] === 'projects') {
          this.isProductPage = true;
        } else {
          this.isProductPage = false;
        }

      }

    });
  }
}
