import { Component } from '@angular/core';
import { ExperiencesService } from '../../../services/experiences.service';
import { Experience } from '../../../interfaces/experience';
import { ExperienceItemComponent } from '../experience-item/experience-item.component';

@Component({
  selector: 'app-experience-list',
  standalone: true,
  imports: [ExperienceItemComponent],
  templateUrl: './experience-list.component.html',
  styleUrl: './experience-list.component.scss'
})
export class ExperienceListComponent {
  experienceList: Experience[] = []

  constructor(private experiencesService: ExperiencesService){
    this.experienceList = this.experiencesService.experiencelist
  }
}
