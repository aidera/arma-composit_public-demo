import { Directive, OnInit, ElementRef } from '@angular/core';
import { CoreAnimationDirective } from './core-animation.directive';

@Directive({
  selector: '[appFadeInAnimation]',
})
export class FadeInAnimationDirective
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
      this.element.nativeElement,
      {
        opacity: '0',
        ease: 'Expo.easeInOut',
        duration: this.duration,
      },
      this.delay
    );
    super.animateIn();
  }
}
