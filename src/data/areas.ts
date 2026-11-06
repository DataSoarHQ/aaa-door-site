// One entry per service area page. Local text sticks to geography and services.
// Don't add claims about specific local jobs unless the company supplies them.
type Region = 'coast' | 'inland' | 'louisiana';

export type Area = {
  name: string;
  state: 'TX' | 'LA';
  county: string;
  region: Region;
  intro: string;
  nearby: string[];
  review?: { quote: string; who: string };
};

export const regionNotes: Record<Region, string> = {
  coast: 'Living this close to the Gulf, it’s worth asking about wind load doors when you replace a garage door. Not every style comes wind-rated, including some custom designs, so we’ll tell you what’s available for your home before you choose.',
  inland: 'If you have a shop or outbuilding as well as a house, mention it when you call. We work on residential garage doors and commercial roll-up and sectional doors, so one crew can look at both.',
  louisiana: 'State lines don’t change how we work. You get the same free estimate with a written breakdown of cost and products, and the same 24/7 emergency line, as our customers in Texas.',
};

export const areas: Area[] = [
  {
    name: 'Orange', state: 'TX', county: 'Orange County', region: 'coast',
    intro: 'Orange is home base for AAA Door LLC. Our office is on Lazy Lane, so when a spring snaps or a door won’t close in town or out toward the Sabine River, we’re working from close by.',
    nearby: ['Bridge City', 'Vinton', 'Deweyville', 'Starks'],
  },
  {
    name: 'Beaumont', state: 'TX', county: 'Jefferson County', region: 'coast',
    intro: 'Beaumont is the largest city in the Golden Triangle, with everything from older neighborhoods to newer subdivisions and busy commercial properties. We handle home garage doors and business doors across town, from a single broken spring to a full door replacement.',
    nearby: ['Lumberton', 'Nederland', 'Fannett', 'Sour Lake'],
  },
  {
    name: 'Nederland', state: 'TX', county: 'Jefferson County', region: 'coast',
    intro: 'Nederland sits in Mid-County, between Beaumont and Port Arthur. We repair and replace garage doors and motor operators for homeowners here, and service doors for local shops and offices.',
    nearby: ['Port Neches', 'Groves', 'Beaumont', 'Port Arthur'],
  },
  {
    name: 'Bridge City', state: 'TX', county: 'Orange County', region: 'coast',
    intro: 'Bridge City is a short drive south of our Orange office, between the Neches River and Cow Bayou. We look after garage doors, openers and entry doors for homes here, along with doors for local businesses.',
    nearby: ['Orange', 'Port Arthur', 'Groves', 'Port Neches'],
    review: { quote: 'Very reasonable and fast service. I highly recommend AAA Door Company for all your overhead garage door needs.', who: 'Claude S., Bridge City' },
  },
  {
    name: 'Port Neches', state: 'TX', county: 'Jefferson County', region: 'coast',
    intro: 'Port Neches is a Mid-County town on the Neches River. Whether your opener has quit or you’re ready for a new door on the front of your house, we can repair it or give you a free written quote to replace it.',
    nearby: ['Nederland', 'Groves', 'Port Arthur', 'Bridge City'],
  },
  {
    name: 'Lumberton', state: 'TX', county: 'Hardin County', region: 'inland',
    intro: 'Lumberton is just north of Beaumont along US 69, and it’s full of family homes that use the garage door every day. We fix springs, cables and openers here, and install new doors when a repair no longer makes sense.',
    nearby: ['Beaumont', 'Silsbee', 'Kountze', 'Sour Lake'],
  },
  {
    name: 'Port Arthur', state: 'TX', county: 'Jefferson County', region: 'coast',
    intro: 'Port Arthur sits on Sabine Lake, about as close to the Gulf as our service area gets. We work on homes here and on commercial sites, including roll-up doors, sectional doors, hollow metal doors and motor operators.',
    nearby: ['Groves', 'Port Neches', 'Nederland', 'Bridge City'],
  },
  {
    name: 'Groves', state: 'TX', county: 'Jefferson County', region: 'coast',
    intro: 'Groves is a Mid-County neighbor of Port Arthur and Port Neches. If your garage door is noisy, off track or stuck, call us and we’ll explain what’s wrong before any work starts.',
    nearby: ['Port Arthur', 'Port Neches', 'Nederland', 'Bridge City'],
  },
  {
    name: 'Silsbee', state: 'TX', county: 'Hardin County', region: 'inland',
    intro: 'Silsbee is up US 96 in Hardin County, on the edge of the Big Thicket. We make the trip for garage door repairs, new door installs and interior or exterior door work, and for emergencies any time of day.',
    nearby: ['Lumberton', 'Kountze', 'Evadale', 'Buna'],
  },
  {
    name: 'Winnie', state: 'TX', county: 'Chambers and Jefferson Counties', region: 'coast',
    intro: 'Winnie is west of Beaumont, where I-10 meets Highway 124, with homes, farms and roadside businesses around it. We service home garage doors and commercial doors here, and our annual and bi-annual maintenance contracts help avoid surprise breakdowns.',
    nearby: ['Hampshire', 'Fannett', 'Beaumont', 'Sour Lake'],
  },
  {
    name: 'Sour Lake', state: 'TX', county: 'Hardin County', region: 'inland',
    intro: 'Sour Lake is west of Beaumont on Highway 105. If your door is stuck and your car is trapped inside, or you’re planning a replacement, call us for repairs, new garage doors and free written quotes.',
    nearby: ['Beaumont', 'Lumberton', 'Kountze', 'Winnie'],
  },
  {
    name: 'Kountze', state: 'TX', county: 'Hardin County', region: 'inland',
    intro: 'Kountze is the Hardin County seat, surrounded by the Big Thicket. We serve homes and businesses here with spring repairs, motor operators, new doors and door hardware.',
    nearby: ['Silsbee', 'Lumberton', 'Sour Lake', 'Evadale'],
  },
  {
    name: 'Deweyville', state: 'TX', county: 'Newton County', region: 'inland',
    intro: 'Deweyville is north of Orange on Highway 87, along the Sabine River. It’s one of the closest towns to us in Newton County, and we’re available for garage door repairs, replacements and 24/7 emergency calls.',
    nearby: ['Orange', 'Buna', 'Starks', 'Evadale'],
  },
  {
    name: 'Buna', state: 'TX', county: 'Jasper County', region: 'inland',
    intro: 'Buna is in southern Jasper County on US 96. We repair garage doors and openers here, replace interior and exterior doors, and can set you up with a maintenance visit once or twice a year.',
    nearby: ['Evadale', 'Jasper', 'Deweyville', 'Silsbee'],
  },
  {
    name: 'Evadale', state: 'TX', county: 'Jasper County', region: 'inland',
    intro: 'Evadale sits on the Neches River in the southwest corner of Jasper County, across from Silsbee. We handle garage door springs, openers and full door replacements for homes here, as well as commercial door service.',
    nearby: ['Silsbee', 'Buna', 'Kountze', 'Lumberton'],
  },
  {
    name: 'Jasper', state: 'TX', county: 'Jasper County', region: 'inland',
    intro: 'Jasper is the county seat and the northern edge of our regular service area, near Sam Rayburn Reservoir. Homes and businesses here can call us for door repairs, new installs and maintenance contracts.',
    nearby: ['Buna', 'Evadale', 'Silsbee', 'Kountze'],
  },
  {
    name: 'Fannett', state: 'TX', county: 'Jefferson County', region: 'coast',
    intro: 'Fannett is southwest of Beaumont on Highway 124. Whether it’s a broken spring on the house or a door on a shop, we can come out, explain your options and put the price in writing.',
    nearby: ['Hampshire', 'Beaumont', 'Winnie', 'Nederland'],
  },
  {
    name: 'Hampshire', state: 'TX', county: 'Jefferson County', region: 'coast',
    intro: 'Hampshire is a small community in southwest Jefferson County, near Fannett. Being out of town doesn’t put you out of reach. We come out for garage door repairs, new doors and emergency calls.',
    nearby: ['Fannett', 'Winnie', 'Beaumont', 'Port Arthur'],
  },
  {
    name: 'Vinton', state: 'LA', county: 'Calcasieu Parish', region: 'louisiana',
    intro: 'Vinton is just across the Sabine River on I-10, a short trip from our Orange office. We repair and install garage doors for homes in town and handle commercial doors for local businesses.',
    nearby: ['Orange', 'Starks', 'Sulphur', 'Deweyville'],
  },
  {
    name: 'Sulphur', state: 'LA', county: 'Calcasieu Parish', region: 'louisiana',
    intro: 'Sulphur is on I-10 just west of Lake Charles, the farthest east our regular service area reaches. We work on home garage doors here as well as commercial roll-up and sectional doors, motor operators and door hardware.',
    nearby: ['Vinton', 'Starks', 'Orange', 'Bridge City'],
  },
  {
    name: 'Starks', state: 'LA', county: 'Calcasieu Parish', region: 'louisiana',
    intro: 'Starks is a small community near the Sabine River in western Calcasieu Parish, north of Vinton. We come out for broken springs, stuck doors, opener trouble and new garage door installs.',
    nearby: ['Vinton', 'Deweyville', 'Orange', 'Sulphur'],
  },
];

export const areaSlug = (a: Area) => `${a.name.toLowerCase().replace(/\s+/g, '-')}-${a.state.toLowerCase()}`;
export const areaHref = (a: Area) => `/service-areas/${areaSlug(a)}/`;
