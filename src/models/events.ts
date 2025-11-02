import type {EventCard, EventRow} from "./interfaces.ts";
import image1 from '../assets/images/image00001.jpeg';
import image2 from '../assets/images/image00002.jpeg';
import image3 from '../assets/images/image00003.jpeg';
import image4 from '../assets/images/image00004.jpeg';
import image5 from '../assets/images/image00007.jpeg';
import image6 from '../assets/images/image00006.jpeg';



export const eventRows: EventRow[] = [
    {
        id: 1,
        image: image1,
        title: 'Va bene dai',
        description: 'Bacon ipsum dolor amet meatloaf beef short loin ham brisket boudin jerky spare ribs shank kielbasa tail. Alcatra kevin meatball ribeye burgdoggen landjaeger short ribs bresaola brisket prosciutto kielbasa capicola.',
        imagePosition: 'left'
    },
    {
        id: 2,
        image: image2,
        title: 'E come mai',
        description: 'Bacon ipsum dolor amet meatloaf beef short loin ham brisket boudin jerky spare ribs shank kielbasa tail. Alcatra kevin meatball ribeye burgdoggen landjaeger short ribs bresaola brisket prosciutto kielbasa capicola.',
        imagePosition: 'right'
    },
    {
        id: 3,
        image: image3,
        title: 'Ti piace assai',
        description: 'Bacon ipsum dolor amet meatloaf beef short loin ham brisket boudin jerky spare ribs shank kielbasa tail. Alcatra kevin meatball ribeye burgdoggen landjaeger short ribs bresaola brisket prosciutto kielbasa capicola.',
        imagePosition: 'left'
    }
];

export const eventCards: EventCard[] = [
    {
        id: 1,
        image: image4,
        title: 'Casper è un bravo cane',
        description: 'Bacon ipsum dolor amet meatloaf beef short loin ham brisket boudin jerky spare ribs shank kielbasa tail.'
    },
    {
        id: 2,
        image: image5,
        title: 'Das Damore è stato qui',
        description: 'Bacon ipsum dolor amet meatloaf beef short loin ham brisket boudin jerky spare ribs shank kielbasa tail.'
    },
    {
        id: 3,
        image: image6,
        title: 'Chi legge è scemo',
        description: 'Bacon ipsum dolor amet meatloaf beef short loin ham brisket boudin jerky spare ribs shank kielbasa tail.'
    }
];