import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http'; 
import { AchatsViewComponent } from './achats-view.component';

describe('AchatsViewComponent', () => {
  let component: AchatsViewComponent;
  let fixture: ComponentFixture<AchatsViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientModule],
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AchatsViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
