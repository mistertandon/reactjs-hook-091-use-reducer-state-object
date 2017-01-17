import {
    Directive,
    ElementRef,
    Input
} from '@angular/core';

@Directive({
    selector: "[cdHighLight]"
})
export class HighLightDirective {

    constructor(HtmlElementRef: ElementRef) {

        HtmlElementRef.nativeElement.style.backgroundColor = "yellow";
    }
}
