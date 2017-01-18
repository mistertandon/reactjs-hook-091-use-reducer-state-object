import {
    Directive,
    ElementRef,
    HostListener,
    Input
} from '@angular/core';

@Directive({
    selector: "[cdHighLight]"
})
export class HighLightDirective {

    constructor(private HtmlElementRef: ElementRef) {

    }

    @HostListener("mouseenter") OnMouseEnter() {

        this.highLightHDM('BurlyWood');
    }

    @HostListener("mouseleave") OnMouseLeave() {

        this.highLightHDM('DarkKhaki');
    }

    private highLightHDM(colorName: string): void {

        this.HtmlElementRef.nativeElement.style.backgroundColor = colorName;
    }
}
