import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HttpClient, HttpClientModule, HttpHandler } from '@angular/common/http';
import { Observable } from 'rxjs';
import { InitService } from './services/init.service';

@Component({
	selector: 'app-root',
	standalone: true,
	imports: [CommonModule, RouterOutlet, HttpClientModule ],
	providers: [InitService],
	templateUrl: './app.component.html',
	styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
	title = 'rick-and-morty-project';

	constructor(private service: InitService) { }

	ngOnInit(): void {
		this.service.getEpisodes().subscribe(res => { console.log(res)})
		this.service.getLocations().subscribe(res => { console.log(res)})
		this.service.getCharacters().subscribe(res => { console.log(res)})
	}

	
}
