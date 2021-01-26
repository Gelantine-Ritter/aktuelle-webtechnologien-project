<script>
import Card from '../components/Card.svelte';

export let deck;
let deckCards = [];

function titelandern(){
titel = prompt('Wie soll das Deck heißen?', '');
}

function AddCard(card){
    deckCards.push(card);
}

function karteentfernen(name){
    deckCards[deckCards.instanceOF(name)]="z";
    deckCards.sort();
    dedeckCardsck.pop();
}
</script>

<p>{deck.titel}</p>
