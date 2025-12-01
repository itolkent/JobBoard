import React from 'react';

const TicketInfo = ({ result, image, children }) => {
    return (
        // <div className="info-ticket">

            <div className={`ticket-info ${result}`}>
                <img src={image} alt={`${result} status`} className="ticket-image" />
                <div className="ticket-details">
                    {children}
                </div>
            </div>
        // </div>
    );
};

export default TicketInfo;
