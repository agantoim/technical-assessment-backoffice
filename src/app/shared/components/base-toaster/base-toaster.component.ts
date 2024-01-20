import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
	selector: 'app-base-toaster',
	templateUrl: './base-toaster.component.html',
	styleUrls: ['./base-toaster.component.scss']
})
export class BaseToasterComponent implements OnInit {

	@Input()
	public message: string = '';

	@Input()
	public type: 'success' | 'warning' = 'success';

	@Output()
	public onClose: EventEmitter<void> = new EventEmitter<void>();

	constructor() { }

	ngOnInit(): void {
		this.scheduleToClose();
	}

	private scheduleToClose(): void {
		setTimeout(() => {
			this.onClose.emit();
		}, 3000);
	}

}
