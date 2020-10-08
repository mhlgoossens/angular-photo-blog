import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.css']
})
export class AppComponent {
    letters = ['a', 'b', 'c', 'd'];
    activeLetter: string = 'a';
    changeLetter() {
        this.activeLetter = this.letters[Math.floor(Math.random() * this.letters.length)];
    }
}