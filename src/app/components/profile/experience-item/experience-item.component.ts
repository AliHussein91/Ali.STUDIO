import { Component, Input } from '@angular/core';
import { Experience } from '../../../interfaces/experience';

@Component({
  selector: 'app-experience-item',
  standalone: true,
  imports: [],
  templateUrl: './experience-item.component.html',
  styleUrl: './experience-item.component.scss'
})
export class ExperienceItemComponent {
  @Input() experience!: Experience
}
