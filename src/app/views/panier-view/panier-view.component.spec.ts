import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PanierViewComponent } from './panier-view.component';
import { PanierService } from '../../services/panierservice.service';
import { ItemPanier } from '../../models/item-panier';
import { Article } from '../../models/article';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card'; 
import { ListItemPanierViewComponent } from '../list-item-panier-view/list-item-panier-view.component'; // Importer le composant ListItemPanierViewComponent

describe('PanierViewComponent', () => {
  let component: PanierViewComponent;
  let fixture: ComponentFixture<PanierViewComponent>;
  let panierService: PanierService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CommonModule, MatCardModule],
      declarations: [], 
      providers: [PanierService]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PanierViewComponent);
    component = fixture.componentInstance;
    panierService = TestBed.inject(PanierService);

    
    const article1: Article = new Article(1, 'Article 1');
    article1.prix = 100;

    const article2: Article = new Article(2, 'Article 2');
    article2.prix = 50;

    const item1 = new ItemPanier(article1);
    item1.nbarticles = 2; 
    const item2 = new ItemPanier(article2);
    item2.nbarticles = 1; 
    panierService['itemsPanier'] = [item1, item2];
    
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('devrait retourner le nombre total d\'articles dans le panier', () => {
    expect(component.nbrTotalItem).toBe(3); 
  });

  it('devrait retourner le prix total du panier', () => {
    expect(component.prixTotalPanier).toBe(250); 
  });
});
