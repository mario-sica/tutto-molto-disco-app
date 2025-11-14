import type {EventCard, StoriesContent} from "./interfaces.ts";
import image1 from '../assets/images/image00019.jpeg';
import image3 from '../assets/images/image00015.jpeg';
import image4 from '../assets/images/image00004.jpeg';
import image5 from '../assets/images/image00007.jpeg';
import image6 from '../assets/images/image00018.jpeg';



export const storiesContent: StoriesContent[] = [
    {
        id: 1,
        image: image1,
        title: 'La nostra storia',
        description: 'Tutto Molto Disco nasce da un’idea semplice: creare eventi che non siamo solo serate, ma vere e proprie esperienze. La voglia di portare le persone nello stesso posto, con la stessa vibrazione, e farle andare a casa con la sensazione di aver vissuto un momento unico. Da lì siamo cresciuti, passo dopo passo. Abbiamo portato musica, idee e sorrisi in ville private, terrazze, secret location, sempre con un obiettivo: divertirci e far divertire. Abbiamo iniziato a creare contenuti, a raccontare le serate attraverso dei video, a costruire una community che ha deciso di seguirci perché senti che ogni evento ha un’identità diversa. Tutto Molto Disco non è solo un’organizzazione di eventi. È un modo di stare insieme.',
        imagePosition: 'left'
    },
    {
        id: 2,
        image: image6,
        title: 'La nostra missione',
        description: 'La nostra missione è trasformare ogni evento in un ricordo che vale la pena custodire. Siamo qui per creare spazi lontani dalle serate tutte uguali. Un posto dove tutti possano sentirsi liberi di viveri momenti veri e pieni di vibrazioni positive. Il nostro obiettivo è diventare un punto di riferimento per i giovani e non solo. Portando un nuovo modo di fare serata, dove stile, energia e persone si fondono per creare qualcosa di unico.',
        imagePosition: 'right'
    }
];

export const eventCards: EventCard[] = [
    {
        id: 1,
        image: image4,
        title: 'Piú di un semplice evento',
        description: 'TUTTO MOLTO DISCO, un gruppo di amici, una terrazza e la sensazione che la notte potesse essere diversa, più vera, più libera, più nostra.'
    },
    {
        id: 2,
        image: image5,
        title: 'Good Vibes chiamano...',
        description: 'TUTTO MOLTO DISCO non è un brand: è un movimento leggero, fatto di persone che sanno ancora godersi il momento.'
    },
    {
        id: 3,
        image: image3,
        title: 'Tutto Molto Disco risponde!',
        description: 'TUTTO MOLTO DISCO è la risposta a un bisogno semplice: tornare a sentirsi parte di qualcosa. È la nostra idea di bellezza: spontanea, imperfetta, contagiosa.'
    }
];