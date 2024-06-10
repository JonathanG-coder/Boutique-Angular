import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemPanier } from '../../models/item-panier';
import { CardArticleComponent } from '../card-article/card-article.component';
import { MatCardModule } from '@angular/material/card';
import { PanierService } from '../../services/panierservice.service';
import { Article } from '../../models/article';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-list-item-panier-view',
  standalone: true,
  imports: [CommonModule, CardArticleComponent, MatCardModule, MatIconModule],
  templateUrl: './list-item-panier-view.component.html',
  styleUrls: ['./list-item-panier-view.component.scss'],
})
export class ListItemPanierViewComponent implements OnInit {
  @Input() itemsPanier: ItemPanier[] | undefined;

  constructor(private panierService: PanierService) {}

  /**
   * On initialise le composant en récupérant les items du panier
   */
  ngOnInit(): void {
    this.itemsPanier = this.panierService.getItems();
  }

  /**
   * Ajoute un article au panier en utilisant le service PanierService
   * @param article = L'article à ajouter
   */
  addArticle(article: Article): void {
    console.log('Ajout de l\'article au panier:', article);
    this.panierService.addArticle(article);
    this.itemsPanier = this.panierService.getItems();
  }

  /**
   * Supprime un article du panier en utilisant le service PanierService
   * @param article = L'article à supprimer
   */
  removeArticle(article: Article): void {
    console.log('Suppression de l\'article du panier:', article);
    this.panierService.removeArticle(article);
    this.itemsPanier = this.panierService.getItems();
  }
}
