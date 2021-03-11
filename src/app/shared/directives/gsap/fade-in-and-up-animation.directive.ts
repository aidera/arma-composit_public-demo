import { Directive, OnInit, ElementRef } from '@angular/core';
import { CoreAnimationDirective } from './core-animation.directive';

@Directive({
  selector: '[appFadeInAndUpAnimation]',
})
export class FadeInAndUpAnimationDirective
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
        y: 100,
        x: 20,
        ease: 'Expo.easeInOut',
        duration: this.duration,
      },
      this.delay
    );
    super.animateIn();
  }
}
