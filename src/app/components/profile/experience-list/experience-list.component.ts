import { Component, OnInit } from '@angular/core';
import { ExperiencesService } from '../../../services/experiences.service';
import { Experience } from '../../../interfaces/experience';
import { ExperienceItemComponent } from '../experience-item/experience-item.component';

@Component({
  selector: 'app-experience-list',
  standalone: true,
  imports: [ExperienceItemComponent],
  templateUrl: './experience-list.component.html',
  styleUrl: './experience-list.component.scss',
})
export class ExperienceListComponent implements OnInit {
  experienceList: Experience[] = [];

  constructor(private experiencesService: ExperiencesService) {}
  ngOnInit(): void {
    this.experiencesService
      .getExperiences()
      .subscribe((experience: Experience[]): void => {
        this.experienceList = experience;
      });
  }
}
