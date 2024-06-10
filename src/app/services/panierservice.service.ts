import { Injectable } from '@angular/core';
import { ItemPanier } from '../models/item-panier';
import { Article } from '../models/article';

@Injectable({
  providedIn: 'root',
})
export class PanierService {
  private itemsPanier: ItemPanier[] = [];

  /**
   * Récupère tous les items du panier
   * @returns La liste des items dans le panier
   */
  getItems(): ItemPanier[] {
    return this.itemsPanier;
  }

  /**
   * Ajoute un article au panier
   * @param article L'article à ajouter
   * @returns = Ne pas ajouuoter l'article s'il n'a pas de prix
   */
  addArticle(article: Article) {
    if (article.prix === undefined || article.prix === null) {
      return;
    }

    let item = this.itemsPanier.find((item) => item.article.id === article.id);
    if (item) {
      item.addArticle();
    } else {
      this.itemsPanier.push(new ItemPanier(article));
    }
  }

  /**
   * Supprime un article du panier
   * @param article = article à supprimer
   */
  removeArticle(article: Article) {
    let item = this.itemsPanier.find(
      (item) => item.article.nom === article.nom
    );
    if (item) {
      item.removeArticle();
      if (item.nbarticles === 0) {
        this.itemsPanier = this.itemsPanier.filter((i) => i !== item);
      }
    }
  }

  /**
   * Récupère le nombre total d'articles dans le panier
   * @returns Le nombre total d'articles
   */
  getTotalItemsCount(): number {
    return this.itemsPanier.reduce((sum, item) => sum + item.nbarticles, 0);
  }

  /**
   * Récupère le prix total du panier
   * @returns Le prix total de tous les articles dans le panier
   */
  getPrixTotalPanier(): number {
    return this.itemsPanier.reduce(
      (sum, item) =>
        sum + (item.article.prix ? item.article.prix * item.nbarticles : 0),
      0
    );
  }
}
