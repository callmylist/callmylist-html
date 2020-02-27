import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

	constructor(private router: Router) { }

	ngOnInit() {
	}

	onNavigate()
	{
		const dom: any = document.querySelector('body');
        dom.classList.add('push-right');
	}
}
