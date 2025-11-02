import {Card} from 'primereact/card';
import {Divider} from 'primereact/divider';
import {eventRows, eventCards} from "../models/events.ts";

export const Eventi = () => {
    return (
        <section id="eventi" className="py-8 px-3 md:px-6">
            <style>{`
                @media (min-width: 768px) {
                    .event-row-image-left .event-image { order: 1; }
                    .event-row-image-left .event-text { order: 2; }
                    .event-row-image-right .event-image { order: 2; }
                    .event-row-image-right .event-text { order: 1; }
                }
            `}</style>

            <div className="text-center mb-6">
                <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{color: '#0043af'}}>
                    Eventi
                </h2>
                <p className="text-xl text-600 max-w-3 mx-auto">
                    Scopri i nostri eventi più esclusivi e le esperienze indimenticabili che abbiamo organizzato.
                </p>
            </div>
            <div className="mt-6">
                {eventRows.map((event) => (
                    <div
                        key={event.id}
                        className={`flex flex-column md:flex-row align-items-center gap-4 mb-6 event-row-image-${event.imagePosition}`}
                    >
                        <div className="w-full md:w-6 event-image">
                            <img
                                src={event.image}
                                alt={event.title}
                                loading="lazy"
                                className="w-full border-round-lg shadow-3"
                                style={{
                                    objectFit: 'cover',
                                    height: '400px'
                                }}
                            />
                        </div>
                        <div className="w-full md:w-6 p-4 event-text">
                            <h3 className="text-2xl md:text-3xl font-bold mb-3" style={{color: '#0043af'}}>
                                {event.title}
                            </h3>
                            <p className="text-600 text-lg line-height-3">
                                {event.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>

            <Divider className="my-6"/>

            <div className="flex flex-column md:flex-row gap-4 justify-content-center">
                {eventCards.map((card) => (
                    <Card
                        key={card.id}
                        className="w-full md:w-4 shadow-3"
                        header={
                            <img
                                src={card.image}
                                alt={card.title}
                                loading="lazy"
                                style={{
                                    width: '100%',
                                    height: '250px',
                                    objectFit: 'cover',
                                    borderRadius: '6px 6px 0 0'
                                }}
                            />
                        }
                    >
                        <h4 className="text-xl font-bold mb-2" style={{color: '#0043af'}}>
                            {card.title}
                        </h4>
                        <p className="text-600 line-height-3 m-0">
                            {card.description}
                        </p>
                    </Card>
                ))}
            </div>
        </section>
    );
};
