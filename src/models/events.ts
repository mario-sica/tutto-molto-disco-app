import type {EventCard, EventRow} from "./interfaces.ts";
import image1 from '../assets/images/image00001.jpeg';
import image3 from '../assets/images/image00003.jpeg';
import image4 from '../assets/images/image00004.jpeg';
import image5 from '../assets/images/image00007.jpeg';
import image6 from '../assets/images/image00006.jpeg';



export const eventRows: EventRow[] = [
    {
        id: 1,
        image: image1,
        title: 'La nostra storia',
        description: 'Bacon ipsum dolor amet meatloaf beef short loin ham brisket boudin jerky spare ribs shank kielbasa tail. Alcatra kevin meatball ribeye burgdoggen landjaeger short ribs bresaola brisket prosciutto kielbasa capicola.',
        imagePosition: 'left'
    },
    {
        id: 2,
        image: image3,
        title: 'La nostra missione',
        description: 'Riportare il divertimento alla sua forma più vera. Crediamo nella libertà di esprimersi e nella forza della comunità che nasce dal ballare insieme. TUTTO MOLTO DISCO vive per trasformare ogni notte in un momento che resta.',
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
        image: image6,
        title: 'Tutto Molto Disco risponde!',
        description: 'TUTTO MOLTO DISCO è la risposta a un bisogno semplice: tornare a sentirsi parte di qualcosa. È la nostra idea di bellezza: spontanea, imperfetta, contagiosa.'
    }
];