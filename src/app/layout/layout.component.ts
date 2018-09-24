import { Router } from '@angular/router';
import { ChangeDetectorRef, Component, NgZone, OnDestroy, ViewChild, HostListener, Directive, AfterViewInit } from '@angular/core';
/** @title Responsive sidenav */
@Component({
  selector: 'app-layout',
  templateUrl: 'layout.component.html',
  styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent implements OnDestroy, AfterViewInit {

  constructor(changeDetectorRef: ChangeDetectorRef) {
  }

  ngOnDestroy(): void {
  }
 ngAfterViewInit() {

 }

}
