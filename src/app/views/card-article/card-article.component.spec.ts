import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { PanierService } from '../../services/panierservice.service';
import { Article } from '../../models/article';

import { CardArticleComponent } from './card-article.component';

describe('CardArticleComponent', () => {
  let component: CardArticleComponent;
  let fixture: ComponentFixture<CardArticleComponent>;
  let panierService: PanierService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MatCardModule, CommonModule],
      providers: [PanierService] 
    }).compileComponents();
    
    fixture = TestBed.createComponent(CardArticleComponent);
    component = fixture.componentInstance;
    panierService = TestBed.inject(PanierService); 
    fixture.detectChanges();
  });

  it('devrait créer', () => {
    expect(component).toBeTruthy();
  });

  it('devrait ajouter l\'article au panier lors de l\'appel de addToPanier()', () => {
    const article = new Article(1, "Article Test");
    component.article = article; 

    spyOn(panierService, 'addArticle'); 

    component.addToPanier(); 

    expect(panierService.addArticle).toHaveBeenCalledWith(article);
  });
});
