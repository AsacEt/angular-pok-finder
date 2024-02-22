import { Component, OnInit } from '@angular/core';
import { PokemonData } from 'src/app/models/pokemonData';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  pokemon: PokemonData;
  searchName: string = '';

  constructor(private service: PokemonService) {
    this.pokemon = { id: 0, name: '', sprites: { front_default: '' }, types: [] };
  }

  ngOnInit(): void {
    this.getPokemon(); // Chamada para getPokemon() no ngOnInit()
  }

  getPokemon() {
    let defaultPokemonName = 'bulbasaur'; // Pokémon padrão
    if (this.searchName) {
      defaultPokemonName = this.searchName; // Se houver um termo de pesquisa, use-o como padrão
    }

    this.service.getPokemon(defaultPokemonName).subscribe(
      {
        next: (res) => {
          this.pokemon = {
            id: res.id,
            name: res.name,
            sprites: res.sprites,
            types: res.types
          };
        },
        error: (error) => console.log(error)
      }
    );
  }

  getBackgroundColor(type: string):string {
    // para mapear o nome do tipo para uma cor correspondente
    switch (type) {
      case 'normal':
        return '#A8A77A';
      case 'fire':
        return '#EE8130';
      case 'water':
        return '#6390F0';
      case 'electric':
        return '#F7D02C';
      case 'grass':
        return '#7AC74C';
      case 'ice':
        return '#96D9D6';
      case 'fighting':
        return '#C22E28';
      case 'poison':
        return '#A33EA1';
      case 'ground':
        return '#E2BF65';
      case 'flying':
        return '#A98FF3';
      case 'psychic':
        return '#F95587';
      case 'bug':
        return '#A6B91A';
      case 'rock':
        return '#B6A136';
      case 'ghost':
        return '#735797';
      case 'dragon':
        return '#6F35FC';
      case 'dark':
        return '#705746';
      case 'steel':
        return '#B7B7CE';
      case 'fairy':
        return '#D685AD';
      // adicionar mais cases conforme necessário
      default:
        return '#B8B8D0'; // Cor padrão para tipos desconhecidos
    }
  }
}
