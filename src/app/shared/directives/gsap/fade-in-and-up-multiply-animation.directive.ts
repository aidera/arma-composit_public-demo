import { Directive, ElementRef, OnInit } from '@angular/core';
import { CoreAnimationDirective } from './core-animation.directive';

@Directive({
  selector: '[appFadeInAndUpMultiplyAnimation]',
})
export class FadeInAndUpMultiplyAnimationDirective
  extends CoreAnimationDirective
  implements OnInit {
  constructor(protected element: ElementRef) {
    super(element);
  }

  ngOnInit(): void {
    // perform animation
    this.animateIn();
  }

  protected animateIn(): void {
    this.timeline.from(
      this.element.nativeElement.children,
      {
        opacity: '0',
        y: 100,
        x: 20,
        ease: 'Expo.easeInOut',
        duration: this.duration,
        stagger: this.delay,
      },
      this.delay
    );
    super.animateIn();
  }
}
