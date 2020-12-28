import { async, ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { GuitarTunerComponent } from './guitar-tuner.component';

describe('GuitarTunerComponent', () => {
  let component: GuitarTunerComponent;
  let fixture: ComponentFixture<GuitarTunerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
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
    expect(component).toBeTruthy();
  });

  it('should be falsy onCanvasHidden', fakeAsync(() => {
    expect(component.onCanvasHidden).toBeFalsy();
  }));

  it('should call createCanvas method on start button click', fakeAsync(() => {
    spyOn(component, 'createCanvas');
    let button = fixture.debugElement.nativeElement.querySelector('button');
    button.click();
    tick();
    expect(component.createCanvas).toHaveBeenCalled();
  }));

  it('should be truthy onCanvasHidden after createCanvas was called', fakeAsync(() => {
    let button = fixture.debugElement.nativeElement.querySelector('button');
    button.click();
    tick();
    expect(component.onCanvasHidden).toBeTruthy();
  }));
})