import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SideBarComponent } from './side-bar.component';
import { SessionGuard } from '@core/guards/session.guard';
import { RouterModule } from '@angular/router';

describe('SideBarComponent', () => {
  let component: SideBarComponent;
  let fixture: ComponentFixture<SideBarComponent>;
  let guard: SessionGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterModule.forRoot([]),
      ],
      declarations: [
        SideBarComponent
      ]
    });
    fixture = TestBed.createComponent(SideBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    guard = TestBed.inject(SessionGuard);
  });

  it('should create', () => {
    expect(guard).toBeTruthy();
  });
});
