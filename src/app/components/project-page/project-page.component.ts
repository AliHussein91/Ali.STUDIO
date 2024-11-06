import { Component, inject, OnInit } from '@angular/core';
import { Project } from '../../interfaces/project';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-project-page',
  standalone: true,
  imports: [],
  templateUrl: './project-page.component.html',
  styleUrl: './project-page.component.scss',
})
export class ProjectPageComponent implements OnInit {
  route = inject(ActivatedRoute)
  project!: Project

  constructor() {

  }
  ngOnInit(): void {
    this.route.data.subscribe(({ project }) => {
      this.project = project[0] 
    })
  }
}
