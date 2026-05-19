import { Component, input, output } from '@angular/core';

@Component({
  selector: '[icon-button]',
  template: ` 
  <button 
    class="relative h-10 max-h-[40px] w-10 max-w-[40px] select-none rounded-lg text-center align-middle font-sans text-xs font-medium uppercase text-slate-900 transition-all hover:bg-slate-900/10 active:bg-slate-900/20 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
    type="button"
    (click)="emitEvent()">
                  <span class="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
    <ng-content></ng-content>
       </span>
  </button>`,
})
export class IconButton {
  readonly item = input.required<string>();
  eventEmitted = output<string>();

  emitEvent() {
    this.eventEmitted.emit(this.item());
  }

}
