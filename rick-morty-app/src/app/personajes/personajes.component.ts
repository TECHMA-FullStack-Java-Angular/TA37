import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  styleUrls: ['./personajes.component.css']
})
export class PersonajesComponent implements OnInit {
  characters: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.fetchCharacters();
  }

  fetchCharacters() {
    this.http.get<any>('assets/database.json').subscribe(data => {
      this.characters = data.characters;
    });
  }
}

