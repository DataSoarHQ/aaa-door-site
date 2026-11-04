// All business facts live here. Update this file and every page follows.
import { areas } from './areas';

export const business = {
  name: 'AAA Door',
  legalName: 'AAA Door LLC',
  phoneDisplay: '409-344-4505',
  phoneHref: 'tel:+14093444505',
  street: '6898 Lazy Lane',
  city: 'Orange',
  region: 'TX',
  zip: '77632',
  url: 'https://aaadoortx.com',
  rating: '5',
  reviewCount: 121,
  reviewsUrl: 'https://reviews.birdeye.com/aaa-door-llc-156201736488888',
  bbbUrl: 'https://www.bbb.org/us/tx/orange/profile/garage-doors/aaa-door-company-0845-90078848',
  since: 2014,
  social: {
    Facebook: 'https://www.facebook.com/people/AAA-DOOR-LLC/61550300001332/',
    Instagram: 'https://www.instagram.com/aaa_door_and_trim',
    Yelp: 'https://www.yelp.com/biz/aaa-door-company-orange',
  },
};

export const nav = [
  { href: '/residential/', label: 'Residential' },
  { href: '/commercial/', label: 'Commercial' },
  { href: '/service-areas/', label: 'Service areas' },
  { href: '/gallery/', label: 'Gallery' },
  { href: '/about-us/', label: 'About' },
  { href: '/faq/', label: 'FAQ' },
];

export const towns = {
  TX: areas.filter((a) => a.state === 'TX').map((a) => a.name),
  LA: areas.filter((a) => a.state === 'LA').map((a) => a.name),
};

export const residential = [
  { name: 'Spring repairs', text: 'Broken torsion and extension springs replaced and balanced. Springs hold serious tension, so this one is best left to us.' },
  { name: 'Motor operator repair and replacement', text: 'Opener not responding, running rough or just old? We repair what can be repaired and replace what can’t.' },
  { name: 'Garage door repair and replacement', text: 'Rollers, hinges, cables, track and panels fixed, or a whole new door when repair no longer makes sense.' },
  { name: 'Wind load door installation', text: 'Wind-rated doors for Gulf Coast homes. Tell us about your home and we’ll show you which doors fit.' },
  { name: 'Glass full view door installation', text: 'Full-view glass garage doors that bring in daylight and give the front of your home a modern look.' },
  { name: 'Interior door repair and replacement', text: 'Doors that stick, sag or won’t latch put right, or swapped for new ones.' },
  { name: 'Exterior door repair and replacement', text: 'Entry and side doors repaired or replaced so they close, seal and lock the way they should.' },
  { name: 'Annual and bi-annual maintenance contracts', text: 'Scheduled visits once or twice a year to catch worn parts before they leave you stuck.' },
  { name: 'Lifetime warranties', perk: true, text: 'Lifetime warranties are available. Your written quote spells out what’s covered.' },
  { name: '24/7 emergency service', perk: true, text: 'Car trapped in the garage or a door that won’t close at night? Call any hour.' },
];

export const commercial = [
  { name: 'Commercial roll-up doors', text: 'Repair and installation of rolling doors for shops, warehouses and storage.' },
  { name: 'Commercial sectional doors', text: 'Sectional overhead doors for loading areas and service bays, repaired or installed new.' },
  { name: 'Commercial motor operators', text: 'Operators repaired or replaced so your doors keep up with the workday.' },
  { name: 'Hollow metal doors', text: 'Durable hollow metal doors for entries, back-of-house and utility spaces.' },
  { name: 'Door closers', text: 'Closers adjusted, repaired or replaced so doors shut and latch without slamming.' },
  { name: 'Panic rim devices', text: 'Rim-style panic hardware repaired or installed so exits open with a push from inside.' },
  { name: 'Keyed entry devices', text: 'Keyed locks and entry hardware for offices, storefronts and back doors.' },
  { name: 'Annual and bi-annual maintenance contracts', text: 'Planned service once or twice a year, so door trouble doesn’t interrupt your business.' },
];

export const team = [
  { name: 'Nick Vitale', role: 'Owner' },
  { name: 'Kolby Vrana', role: 'Service technician' },
  { name: 'David Weeks', role: 'Lead installer' },
];

// Quoted word for word from public BBB reviews (shown on Birdeye).
export const reviews = [
  { quote: 'We called AAA after hours because we could not get our cars out of our garage and they were at our house at 8:00 am the next morning even though they had a full day ahead of them.', who: 'Vicki C.' },
  { quote: 'Great customer service and reasonable prices. They came out in a timely manner and were very professional while doing the job.', who: 'Amanda C.' },
  { quote: 'He showed up on time and had it repaired, adjusted, and working like a new one in less than an hour. EXCELLENT JOB!', who: 'Stephen B.' },
  { quote: 'Very reasonable and fast service. I highly recommend AAA Door Company for all your overhead garage door needs.', who: 'Claude S., Bridge City' },
  { quote: '…came out on a holiday weekend and replaced the springs on my door and did a great job. I would highly recommend them.', who: 'Del M.' },
];

export const faqs = [
  { q: 'Do you offer free quotes?', a: 'Yes. We’ll come out to you, and your estimate includes a detailed scope of the work and a written breakdown of the cost and products your project needs.' },
  { q: 'Are you really available 24/7?', a: 'For emergencies, yes. Regular hours are Monday through Friday, 7:00 AM to 5:00 PM. We’re closed on weekends and major holidays, but you can call 409-344-4505 any time for emergency service.' },
  { q: 'Can you bill my home insurance?', a: 'We can’t bill your insurance directly, but we’ll provide all the documentation you need to file for reimbursement.' },
  { q: 'How will you handle scheduling?', a: 'We keep you updated at every step. If we can see the work won’t be finished by the agreed time, we’ll reach out to set a new completion date.' },
  { q: 'Can you install an opener on my existing door?', a: 'Yes, on most existing doors. We’ll check your door and recommend an opener that suits its size and weight.' },
  { q: 'How often should my garage door be serviced?', a: 'At least once a year. Regular maintenance helps prevent costly repairs and keeps the door working properly. We offer annual and bi-annual maintenance contracts for homes and businesses.' },
  { q: 'What are the benefits of an insulated garage door?', a: 'An insulated door helps regulate the temperature in your garage, reduces noise and can improve your home’s energy efficiency.' },
  { q: 'Do you install wind-rated doors?', a: 'Yes. Not every style comes wind-rated, including some custom designs, so we’ll tell you what’s available for your home before you choose.' },
  { q: 'Do you work on commercial doors?', a: 'Yes. We service roll-up and sectional doors, motor operators, hollow metal doors, door closers, panic hardware and keyed entry devices.' },
];
