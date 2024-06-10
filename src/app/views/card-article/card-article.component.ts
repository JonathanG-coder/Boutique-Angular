import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Article } from '../../models/article';
import { MatCardModule } from '@angular/material/card';
import { PanierService } from '../../services/panierservice.service';

@Component({
  selector: 'app-card-article',
  standalone: true,
  imports: [MatCardModule, CommonModule],
  templateUrl: './card-article.component.html',
  styleUrls: ['./card-article.component.scss']
})
export class CardArticleComponent {
  @Input() article!: Article;

  constructor(private panierService: PanierService) {}

  /**
   * Ajoute l'article au panier en utilisant le service PanierService
   */
  addToPanier() {
    this.panierService.addArticle(this.article);
  }
}
