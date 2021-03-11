import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-cursor',
  templateUrl: './cursor.component.html',
  styleUrls: ['./cursor.component.scss'],
})
export class CursorComponent implements AfterViewInit {
  @ViewChild('cursor') cursorRef: ElementRef;

  constructor() {}

  getParents(elem): HTMLElement[] {
    const parents = [];
    for (; elem && elem !== document; elem = elem.parentNode) {
      parents.push(elem);
    }
    return parents;
  }

  ngAfterViewInit(): void {
    if (this.cursorRef && this.cursorRef.nativeElement) {
      if (
        /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
          navigator.userAgent
        )
      ) {
        this.cursorRef.nativeElement.style.display = 'none';
      } else {
        this.cursorRef.nativeElement.style.display = 'block';
        window.addEventListener('mousemove', (e) => {
          const x = e.clientX;
          const y = e.clientY;
          this.cursorRef.nativeElement.style.top = y + 'px';
          this.cursorRef.nativeElement.style.left = x + 'px';

          const target = e.target as HTMLElement;
          if (
            target.tagName.toLowerCase() === 'a' ||
            target.tagName.toLowerCase() === 'button' ||
            target.tagName.toLowerCase() === 'input' ||
            target.tagName.toLowerCase() === 'textarea' ||
            target.classList.contains('pointer')
          ) {
            this.cursorRef.nativeElement.classList.add('cursor-pointer');
          } else {
            const parents = this.getParents(target);
            const isExist = !!parents.find((el) => {
              return (
                el.tagName.toLowerCase() === 'a' ||
                el.tagName.toLowerCase() === 'button' ||
                el.tagName.toLowerCase() === 'input' ||
                el.tagName.toLowerCase() === 'textarea' ||
                el.classList.contains('pointer')
              );
            });
            if (isExist) {
              this.cursorRef.nativeElement.classList.add('cursor-pointer');
            } else {
              this.cursorRef.nativeElement.classList.remove('cursor-pointer');
            }
          }
        });
      }
      document.body.addEventListener('mousedown', () => {
        this.cursorRef.nativeElement.classList.add('cursor-click');
      });
      document.body.addEventListener('mouseup', () => {
        this.cursorRef.nativeElement.classList.remove('cursor-click');
      });
    }
  }
}
