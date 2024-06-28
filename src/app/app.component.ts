// app.component.ts
import { Component, computed, signal } from '@angular/core';
import { CommonModule, NgComponentOutlet } from '@angular/common';

import { Dynamic1Component } from './dynamic-cmp-1/dynamic-cmp-1.component';
import { Dynamic2Component } from './dynamic-cmp-2/dynamic-cmp-2.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Dynamic1Component, Dynamic2Component, NgComponentOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  cmpsArrObj = signal<any[]>([
    {
      order: 2,
      cmp: Dynamic1Component,
      name: "cmp1",
      props: {
        text: "Hello World"
      }
    },
    {
      order: 1,
      cmp: Dynamic2Component,
      name: "cmp2"
    }
  ]);

  cmpsArrObjSorted = computed(() => {
    return this.cmpsArrObj().sort((a, b) => a.order - b.order)
  })
}
