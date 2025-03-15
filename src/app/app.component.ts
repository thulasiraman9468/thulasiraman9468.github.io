import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from "./footer/footer.component";
import { ServiceComponent } from './service/service.component';
import { CamputieComponent } from './camputie/camputie.component';
import { TechComponent } from './tech/tech.component';
import { AboutComponent } from './about/about.component';
import { EezzComponent } from './eezz/eezz.component';
import { ServiceCardsComponent } from './service-cards/service-cards.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, CommonModule, HeaderComponent, FooterComponent, ServiceComponent, CamputieComponent, TechComponent, AboutComponent,EezzComponent, ServiceCardsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'excite';
}
