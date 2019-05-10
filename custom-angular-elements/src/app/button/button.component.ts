import { Component, ViewEncapsulation, AfterViewInit, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  template: `
    <button>{{label}}</button>`,
  styles: [],
  encapsulation: ViewEncapsulation.None
})
export class ButtonComponent implements AfterViewInit {

  @Input() name: string;
  @Input() label: string;
  @Input() color: string;

  constructor() { }

  public ngAfterViewInit(): void {

    console.log(`name property - ngAfterViewInit: ${this.name}`);
    console.log(`label property - ngAfterViewInit: ${this.label}`);
    console.log(`color property - ngAfterViewInit: ${this.color}`);

  }

}
