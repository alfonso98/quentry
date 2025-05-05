// cEventStatus
// idEventStatus: Serial
// eventStatusName: varchar(255)
const eventStatus = [
    { eventStatusName: 'Active' },
    { eventStatusName: 'Inactive' },
    { eventStatusName: 'Completed' },
    { eventStatusName: 'Cancelled' },
];

// tEvents 
// idEvent: Serial
// eventName: varchcar(255)
// eventDate: timeStamp
// eventStatus: int References cEventStatus
const events = [
    {
        eventName: 'Tech Conference 2023',
        eventDate: '2025-05-17T12:00:00Z',
        eventStatus: 1
    },
    {
        eventName: 'Festival del Embudo 2025',
        eventDate: '2025-05-17T12:00:00Z',
        eventStatus: 2
    },
];

// cTicketStatus
// idTicketStatus: Serial
// ticketStatusName: varchar(255)
const ticketStatus = [
    { ticketStatusName: 'Available' },
    { ticketStatusName: 'Pending' },
    { ticketStatusName: 'Sold Out' },
    { ticketStatusName: 'Cancelled' },
];

// tTickets
// idTicket: Serial
// idEvent: Int References tEvents
// ticketStatus: int References cTicketStatus
// ticketType: varchar(255)
// ticketPrice: decimal(10,2)
const ticket = [
    {
        idEvent: 1,
        ticketStatus: 1,
        ticketType: 'Bolto General | 001',
        ticketPrice: 250.00
    },
    {
        idEvent: 1,
        ticketStatus: 1,
        ticketType: 'Bolto General | 002',
        ticketPrice: 250.00
    },
    {
        idEvent: 1,
        ticketStatus: 1,
        ticketType: 'Bolto General | 003',
        ticketPrice: 250.00
    }
];

export { eventStatus, events, ticketStatus, ticket };

// tAttendees
// idAttendee: Serial
// attendeeFirstName: varchar(255)
// attendeeLastName: varchar(255)
// attendeeEmail: varchar(255)
// attendePhone: varchar(255)

// rAttendeTickets
// idAttendeeTicket: Serial
// idAttendee: Int References tAttendees
// idTicket: Int References tTickets
// purchaseDate: timeStamp
// totalAmount: decimal(10,2)
// purchaseReference: varchar(255)
