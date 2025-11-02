import {Card} from 'primereact/card';
import {Divider} from 'primereact/divider';
import {storiesContent, eventCards} from "../models/contents.ts";

export const InfoSection = () => {
    return (
        <section id="info" className="py-8 px-3 md:px-6">
            <style>{`
                @media (min-width: 768px) {
                    .event-row-image-left .event-image { order: 1; }
                    .event-row-image-left .event-text { order: 2; }
                    .event-row-image-right .event-image { order: 2; }
                    .event-row-image-right .event-text { order: 1; }
                }
            `}</style>

            <div className="mt-6">
                {storiesContent.map((event) => (
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
                                    height: '30rem'
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
                                    height: '350px',
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
