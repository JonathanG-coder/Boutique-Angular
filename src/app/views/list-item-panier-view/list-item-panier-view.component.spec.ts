import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListItemPanierViewComponent } from './list-item-panier-view.component';

describe('ListItemPanierViewComponent', () => {
  let component: ListItemPanierViewComponent;
  let fixture: ComponentFixture<ListItemPanierViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListItemPanierViewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListItemPanierViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
