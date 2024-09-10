import { Component } from '@angular/core';
import { ExperienceListComponent } from "./experience-list/experience-list.component";

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [ExperienceListComponent],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent {

}
