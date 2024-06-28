import { Component, input } from "@angular/core";

@Component({
    selector: "dynamic-cmp-1",
    standalone: true,
    template: `
    <div style="background-color: red;">
        <span style="padding: 15px; font-size: 16px; color: white">This is Dynamic Component 1 : {{ text() }}</span>
    </div>`
})
export class Dynamic1Component {
    text = input<string>("")
}