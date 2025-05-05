import postgres from 'postgres';
import { eventStatus, events, ticketStatus, ticket } from '../lib/quentryData';

const sql = postgres(process.env.POSTGRES_URL!, { ssl: 'require' });

const seedEventStatus = async () => {

  await sql`
    CREATE TABLE IF NOT EXISTS "cEventStatus" (
      "idEventStatus" SERIAL PRIMARY KEY,
      "eventStatusName" VARCHAR(255) NOT NULL DEFAULT 'New Event'
    );
  `;

  const insertedStatus = await Promise.all(
    eventStatus.map(
      (status) => sql`
        INSERT INTO "cEventStatus" ("eventStatusName")
        VALUES (${status.eventStatusName})
        ON CONFLICT ("idEventStatus") DO NOTHING;
      `,
    )
  );

  return insertedStatus;

};

const seedEvents = async () => {

  await sql`
    CREATE TABLE IF NOT EXISTS "tEvents" (
      "idEvent" SERIAL PRIMARY KEY,
      "eventName" VARCHAR(255) NOT NULL,
      "eventDate" TIMESTAMP NOT NULL,
      "eventStatus" INT REFERENCES "cEventStatus" ("idEventStatus")
    );
  `;

  const insertedEvents = await Promise.all(
    events.map(
      (event) => sql`
        INSERT INTO "tEvents" ("eventName", "eventDate", "eventStatus")
        VALUES (${event.eventName}, ${event.eventDate}, ${event.eventStatus})
        ON CONFLICT ("idEvent") DO NOTHING;
      `,
    )
  );

  return insertedEvents;
};

const seedTicketStatus = async () => {
  await sql`
    CREATE TABLE IF NOT EXISTS "cTicketStatus" (
      "idTicketStatus" SERIAL PRIMARY KEY,
      "ticketStatusName" VARCHAR(255) NOT NULL DEFAULT 'New Ticket'
    );
  `;

  const insertedStatus = await Promise.all(
    ticketStatus.map(
      (status) => sql`
        INSERT INTO "cTicketStatus" ("ticketStatusName")
        VALUES (${status.ticketStatusName})
        ON CONFLICT ("idTicketStatus") DO NOTHING;
      `,
    )
  );

  return insertedStatus;
};

const seedTickets = async () => {
  await sql`
    CREATE TABLE IF NOT EXISTS "tTickets" (
      "idTicket" SERIAL PRIMARY KEY,
      "idEvent" INT REFERENCES "tEvents" ("idEvent"),
      "ticketStatus" INT REFERENCES "cTicketStatus" ("idTicketStatus"),
      "ticketType" VARCHAR(255) NOT NULL,
      "ticketPrice" DECIMAL(10,2) NOT NULL
    );
  `;

  let tickets = [];

  for (let i = 0; i < 150; i++) {
    tickets.push({
      idEvent: 1,
      ticketStatus: 1,
      ticketType: `Bolto General | No. ${i+1}`,
      ticketPrice: 250.00,
    });
  }

  const insertedTickets = await Promise.all(
    tickets.map(
      (tkt) => sql`
        INSERT INTO "tTickets" ("idEvent", "ticketStatus", "ticketType", "ticketPrice")
        VALUES (${tkt.idEvent}, ${tkt.ticketStatus}, ${tkt.ticketType}, ${tkt.ticketPrice})
        ON CONFLICT ("idTicket") DO NOTHING;
      `,
    )
  );

  return insertedTickets;
};

const createBuyersAndRelations = async () => {
  try{

    await sql`
      CREATE TABLE IF NOT EXISTS "tBuyers" (
        "idBuyer" SERIAL PRIMARY KEY,
        "buyerName" VARCHAR(100) NOT NULL,
        "buyerLastName" VARCHAR(200) NOT NULL,
        "buyerEmail" VARCHAR(100) NOT NULL
      );
    `;

    await sql`
      CREATE TABLE IF NOT EXISTS "rBuyersTickets" (
        "idBuyerTicket" SERIAL PRIMARY KEY,
        "idBuyer" INT REFERENCES "tBuyers" ("idBuyer"),
        "idTicket" INT REFERENCES "tTickets" ("idTicket"),
        "purchaseDate" TIMESTAMP NOT NULL DEFAULT NOW(),
        "totalAmount" DECIMAL(10,2) NOT NULL,
        "purchaseReference" VARCHAR(200) NOT NULL,
        "metaData" JSONB NOT NULL DEFAULT '{}'
      );
    `;

  } catch (error) {
    return error;
  }

  return true;
};

export async function GET() {
  try {
    const result = await sql.begin((sql) => [
      // seedEventStatus(),
      // seedEvents(),
      // seedTicketStatus(),
      // seedTickets(),
      // createBuyersAndRelations(),
    ]);

    return Response.json({ message: 'Database seeded successfully', result });
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}
