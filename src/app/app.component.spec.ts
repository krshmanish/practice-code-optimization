import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { Component } from '@angular/core';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [AppComponent]
    }).compileComponents();
  }));
  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
  });

  it('should create the app', () => {
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'unitTesting'`, () => {
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('unitTesting');
  });

  it('should render title in a h1 tag', () => {
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain(
      'Welcome to unitTesting!'
    );
  });

  it('should return sum of two numbers', () => {
    const result = component.getSum(-4, 5);
    expect(result).toBeGreaterThan(0);
  });

  it('should toggle the state of button', () => {
    component.isToggle = false;
    component.toggleState();
    expect(component.isToggle).toBeTruthy();
  });
});
