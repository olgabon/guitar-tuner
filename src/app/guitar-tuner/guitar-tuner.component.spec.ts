/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/unbound-method */
import { ComponentFixture, fakeAsync, TestBed, tick, waitForAsync } from '@angular/core/testing';
import { GuitarTunerComponent } from './guitar-tuner.component';

describe('GuitarTunerComponent', () => {
  let component: GuitarTunerComponent;
  let fixture: ComponentFixture<GuitarTunerComponent>;

  beforeEach(waitForAsync(() => {
    void TestBed.configureTestingModule({
      declarations: [ GuitarTunerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GuitarTunerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create guitar-tuner component', () => {
    void expect(component).toBeTruthy();
  });

  it('should be falsy onCanvasHidden', fakeAsync(() => {
    void expect(component.onCanvasHidden).toBeFalsy();
  }));

  it('should call createCanvas method on start button click', fakeAsync(() => {
    spyOn(component, 'createCanvas');
    const button = fixture.debugElement.nativeElement.querySelector('button');
    button.click();
    tick();
    void expect(component.createCanvas).toHaveBeenCalled();
  }));

  it('should be truthy onCanvasHidden after createCanvas was called', fakeAsync(() => {
    const button = fixture.debugElement.nativeElement.querySelector('button');
    button.click();
    tick();
    void expect(component.onCanvasHidden).toBeTruthy();
  }));

});
