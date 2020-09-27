
// import { Directive, ElementRef, Renderer2 } from '@angular/core';

// @Directive({
//   selector: '[appPractice]'
// })
// export class PracticeDirective {

//   constructor(private ele:ElementRef,private render:Renderer2) {
//     render.setStyle(ele.nativeElement,style:'box-shadow',value:'2px 2px 2px #000000')
//    }

// }

import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({ 
     selector: '[appPractice]' 
})
export class PracticeDirective {
    constructor(private elRef: ElementRef) {
       elRef.nativeElement.style.color = '#00cc66';
       elRef.nativeElement.style.backgroundColor = '#ccccff';
       elRef.nativeElement.style.fontSize = '20px';
       elRef.nativeElement.style.width='300px'
    }

    @HostListener('mouseover') hi(){
      this.sabrish('red')
    };
    @HostListener('mouseleave') hii(){
      this.sabrish('');
    }

    public sabrish(color:string){
      this.elRef.nativeElement.style.backgroundColor=color;
    }
} 