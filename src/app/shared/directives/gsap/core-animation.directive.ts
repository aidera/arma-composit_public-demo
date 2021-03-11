import {
  Directive,
  ElementRef,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { gsap, TimelineMax } from 'gsap';
import { CSSPlugin } from 'gsap/CSSPlugin';

@Directive({
  selector: '[appCoreAnimation]',
})
export class CoreAnimationDirective {
  @Input() duration = 1;
  @Input() delay = 0;

  @Output() completeAnimation: EventEmitter<null> = new EventEmitter();
  @Output() reverseCompleteAnimation: EventEmitter<null> = new EventEmitter();
  protected timeline: TimelineMax;

  constructor(protected element: ElementRef) {
    gsap.registerPlugin(CSSPlugin);
    this.timeline = new TimelineMax({
      onComplete: (_) => this.completeAnimation.emit(),
      onReverseComplete: (_) => this.reverseCompleteAnimation.emit(),
      paused: true,
      reversed: true,
    });
  }

  protected animateIn(): void {
    if (this.timeline.isActive()) {
      this.timeline.kill();
    }
    this.timeline.play();
  }
}
