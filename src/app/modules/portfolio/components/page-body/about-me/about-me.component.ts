import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss']
})
export class AboutMeComponent implements OnInit {
  public skills = ['HTML','CSS','JavaScript','Angular','Java','Spring Boot','SASS','GIT','Github','Bitbucker','MySQL']
  constructor() { }

  ngOnInit(): void {
  }

}
