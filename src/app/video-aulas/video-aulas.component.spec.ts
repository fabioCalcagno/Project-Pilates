import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoAulasComponent } from './video-aulas.component';

describe('VideoAulasComponent', () => {
  let component: VideoAulasComponent;
  let fixture: ComponentFixture<VideoAulasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VideoAulasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VideoAulasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
