import { Component, OnInit } from '@angular/core';
import { Project } from '../../../interfaces/project';
import { ProjectsService } from '../../../services/projects.service';
import { ProjectComponent } from './project/project.component';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [ProjectComponent],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
})
export class ProjectsComponent implements OnInit {
  projects: Project[] = [];

  constructor(private projectService: ProjectsService) {}
  ngOnInit(): void {
    this.projectService.getProjects().subscribe((projects: Project[]): void => {
      this.projects = projects;
    });
  }
}
