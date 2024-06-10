import { Component, Input, OnInit } from '@angular/core';
import { ListItemPanierViewComponent } from '../list-item-panier-view/list-item-panier-view.component';
import { CommonModule } from '@angular/common';
import { ItemPanier } from '../../models/item-panier';
import { PanierService } from '../../services/panierservice.service';
import { MatCardModule } from '@angular/material/card';
import { CardArticleComponent } from '../card-article/card-article.component';

@Component({
  selector: 'app-panier-view',
  standalone: true,
  imports: [ListItemPanierViewComponent, CommonModule, CardArticleComponent, MatCardModule],
  templateUrl: './panier-view.component.html',
  styleUrl: './panier-view.component.scss'
})
export class PanierViewComponent implements OnInit {
  @Input() itemsPanier: ItemPanier[] | undefined;
  
  constructor(private panierService: PanierService) {}

  /**
   * On initialise le composant en récupérant les items du panier
   */
  ngOnInit(): void {
    this.itemsPanier = this.panierService.getItems();
  }

  /**
   * Récupère le nombre total d'articles dans le panier
   * @returns Le nombre total d'articles
   */
  get nbrTotalItem(): number {
    const totalItems = this.panierService.getTotalItemsCount();
    console.log('Nombre total d\'articles:', totalItems);
    return totalItems;
  }

  /**
   * Récupère le prix total de tous les articles dans le panier
   * @returns Le prix total du panier
   */
  get prixTotalPanier(): number {
    const totalPrixPanier = this.panierService.getPrixTotalPanier();
    console.log('Prix total du panier:', totalPrixPanier);
    return totalPrixPanier;
  }
}
