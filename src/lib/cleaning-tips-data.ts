export type CleaningTipGuide = {
  slug: string;
  title: string;
  category: string;
  summary: string;
  readingTime: string;
  difficulty: "Easy" | "Moderate" | "Detailed";
  bestFor: string;
  serviceHref: string;
  serviceLabel: string;
  tools: string[];
  steps: {
    title: string;
    body: string;
    checklist: string[];
  }[];
  proTips: string[];
  mistakesToAvoid: string[];
  maintenance: string[];
};

export const cleaningTipGuides: CleaningTipGuide[] = [
  {
    slug: "deep-cleaning-kitchen",
    title: "Deep Cleaning a Kitchen Without Missing the Hidden Grease",
    category: "Kitchens",
    summary:
      "A detailed kitchen reset for stovetops, cabinet fronts, appliance exteriors, sinks, counters, and the grime that collects around high-touch cooking zones.",
    readingTime: "9 min read",
    difficulty: "Detailed",
    bestFor: "Busy kitchens, first-time deep cleans, and homes with cooking buildup",
    serviceHref: "/services",
    serviceLabel: "Deep Cleaning",
    tools: [
      "Microfiber cloths",
      "Non-scratch scrub sponge",
      "Degreasing cleaner safe for your surfaces",
      "Dish soap and warm water",
      "Detail brush or old toothbrush",
      "Glass cleaner",
      "Trash bag",
      "Vacuum with crevice attachment",
    ],
    steps: [
      {
        title: "Clear counters and make zones",
        body:
          "Start by removing loose items instead of cleaning around them. Put dishes near the sink, food back in the pantry, mail in one pile, and appliances together. A clear surface helps you see crumbs, sticky rings, and backsplash splatter.",
        checklist: [
          "Move small appliances forward and wipe underneath them",
          "Throw away expired food, loose packaging, and old takeout items",
          "Place decorative items on a towel so they can be wiped before returning",
        ],
      },
      {
        title: "Work top to bottom",
        body:
          "Dust and crumbs fall as you clean, so start with upper cabinets, vent hood exteriors, open shelves, and backsplash corners. Finish lower cabinets and floors last.",
        checklist: [
          "Wipe upper cabinet fronts and handles",
          "Dust light fixtures and reachable vent edges",
          "Clean backsplash grout lines with a detail brush where buildup is visible",
        ],
      },
      {
        title: "Break down stovetop grease slowly",
        body:
          "Grease is easier to remove when cleaner has time to dwell. Spray or apply cleaner, let it sit according to product directions, then wipe with a microfiber cloth. Repeat light passes instead of using abrasive pressure that can scratch finishes.",
        checklist: [
          "Remove knobs only if your appliance manual says they are removable",
          "Clean around burner edges with a non-scratch pad",
          "Polish stainless in the direction of the grain",
        ],
      },
      {
        title: "Reset the sink and high-touch points",
        body:
          "The sink can make the whole kitchen feel clean or unfinished. Wash the basin, faucet base, sprayer, drain area, and soap dispenser. Then disinfect handles, switches, drawer pulls, and appliance grips.",
        checklist: [
          "Clean the faucet base where hard-water spots collect",
          "Buff the sink dry to reduce streaks",
          "Sanitize handles after greasy surfaces are already cleaned",
        ],
      },
    ],
    proTips: [
      "Keep two cloth colors: one for greasy kitchen surfaces and one for final polish.",
      "Use a dry microfiber cloth after cleaning stainless so fingerprints do not show immediately.",
      "Vacuum crumbs from drawers before wiping them; wet crumbs turn into paste.",
    ],
    mistakesToAvoid: [
      "Spraying cleaner directly into appliance controls or electrical seams.",
      "Using abrasive scrub pads on stainless, glass cooktops, or painted cabinets.",
      "Mopping before the counters and cabinet fronts are finished.",
    ],
    maintenance: [
      "Daily: wipe counters, sink, and stovetop splatters.",
      "Weekly: clean cabinet handles, microwave exterior, and appliance fronts.",
      "Monthly: detail backsplash, range hood exterior, baseboards, and drawer crumbs.",
    ],
  },
  {
    slug: "bathroom-reset",
    title: "Bathroom Cleaning Tutorial for Soap Scum, Mirrors, and Fresh Fixtures",
    category: "Bathrooms",
    summary:
      "A practical bathroom system for tubs, showers, toilets, vanities, mirrors, hard-water spots, and high-touch surfaces.",
    readingTime: "8 min read",
    difficulty: "Moderate",
    bestFor: "Weekly bathroom resets and deeper shower/tub refreshes",
    serviceHref: "/services",
    serviceLabel: "Detailed Clean",
    tools: [
      "Bathroom-safe disinfectant",
      "Tub and tile cleaner",
      "Toilet brush",
      "Glass cloth or lint-free towel",
      "Microfiber cloths",
      "Detail brush",
      "Disposable gloves",
      "Small trash bag",
    ],
    steps: [
      {
        title: "Remove products before you spray",
        body:
          "Take bottles, razors, bath toys, and countertop items out of the way. This prevents product rings from staying hidden and helps cleaning products reach the surfaces that need them.",
        checklist: [
          "Toss empty bottles and old toiletries",
          "Group daily-use items together before returning them",
          "Check behind the toilet and under the vanity edge",
        ],
      },
      {
        title: "Give shower cleaner time to work",
        body:
          "Soap scum and body oils need dwell time. Apply cleaner to the shower walls, tub ledge, faucet area, and glass. While it sits, clean the vanity and toilet exterior.",
        checklist: [
          "Scrub corners and ledges where water rests",
          "Use a detail brush around drains and faucet bases",
          "Rinse thoroughly so cleaner residue does not leave streaks",
        ],
      },
      {
        title: "Clean the toilet from cleanest to dirtiest",
        body:
          "Start with the handle, tank, lid, and outer bowl. Clean the seat top and underside next, then scrub inside the bowl last. Use separate cloths for toilet areas.",
        checklist: [
          "Disinfect the flush handle",
          "Wipe the floor around the toilet base",
          "Let bowl cleaner sit before scrubbing under the rim",
        ],
      },
      {
        title: "Finish with shine",
        body:
          "A bathroom feels finished when mirrors, faucets, and counters are dry and streak-free. Polish glass last, then remove trash and mop out of the room.",
        checklist: [
          "Dry faucet handles after cleaning",
          "Buff mirrors with a dry glass cloth",
          "Mop from the farthest corner toward the door",
        ],
      },
    ],
    proTips: [
      "Keep a small squeegee in the shower to reduce hard-water buildup between cleanings.",
      "Use separate cloths for mirrors, toilet surfaces, and general bathroom wiping.",
      "Drying fixtures after cleaning is what creates the polished look.",
    ],
    mistakesToAvoid: [
      "Mixing bathroom chemicals, especially bleach-based and ammonia-based products.",
      "Cleaning the mirror first, then splashing it while washing the sink.",
      "Using the same cloth on the toilet and vanity.",
    ],
    maintenance: [
      "Daily: quick wipe of sink splashes and mirror spots.",
      "Weekly: disinfect toilet, counters, shower/tub, and floors.",
      "Monthly: detail grout, vents, baseboards, and vanity storage.",
    ],
  },
  {
    slug: "move-in-move-out-cleaning-checklist",
    title: "Move-In and Move-Out Cleaning Checklist for a Fresh Handoff",
    category: "Moving",
    summary:
      "A room-by-room move cleaning tutorial for cabinets, appliances, bathrooms, floors, closets, and final walkthrough details.",
    readingTime: "10 min read",
    difficulty: "Detailed",
    bestFor: "Renters, homeowners, sellers, landlords, and families in transition",
    serviceHref: "/services",
    serviceLabel: "Move-In / Move-Out Cleaning",
    tools: [
      "Trash bags",
      "All-purpose cleaner",
      "Vacuum with attachments",
      "Mop and bucket or spray mop",
      "Microfiber cloths",
      "Non-scratch scrub pads",
      "Glass cleaner",
      "Step stool for safe reachable areas",
    ],
    steps: [
      {
        title: "Start empty whenever possible",
        body:
          "Move cleaning works best after belongings are out. If you must clean around boxes, group them in one finished room and complete the rest of the home in sections.",
        checklist: [
          "Remove trash before cleaning",
          "Open cabinets and closets for airflow and visibility",
          "Take before photos if this is a rental handoff",
        ],
      },
      {
        title: "Detail cabinets, drawers, and closets",
        body:
          "Empty storage spaces are one of the first things a new occupant notices. Vacuum crumbs first, then wipe shelves, drawer tracks, closet floors, and handles.",
        checklist: [
          "Vacuum drawer corners before using a damp cloth",
          "Wipe cabinet doors inside and out",
          "Clean closet shelves, rods, and baseboards",
        ],
      },
      {
        title: "Reset kitchen and bathrooms before floors",
        body:
          "Kitchens and bathrooms create the most drips and debris, so complete them before mopping. Focus on appliance fronts, sinks, fixtures, toilets, tubs, and mirrors.",
        checklist: [
          "Clean inside the microwave if it is staying with the property",
          "Polish sinks and faucets",
          "Disinfect high-touch switches and handles",
        ],
      },
      {
        title: "Do a slow final walkthrough",
        body:
          "Walk the property like a landlord, buyer, or guest. Look at corners, baseboards, door frames, window tracks, and entry areas. Final details are what make the space feel ready.",
        checklist: [
          "Check under sinks and behind doors",
          "Remove cobwebs from reachable corners",
          "Sweep garage entry or patio slider tracks where accessible",
        ],
      },
    ],
    proTips: [
      "Clean rooms farthest from the exit first so you do not track dirt back in.",
      "Keep a small final-walkthrough kit with cloths, glass cleaner, and trash bags.",
      "If a lease has a checklist, clean in that exact order and take photos afterward.",
    ],
    mistakesToAvoid: [
      "Leaving cabinets closed and forgetting interiors.",
      "Mopping before dusting baseboards and door frames.",
      "Skipping window tracks and slider tracks in main living areas.",
    ],
    maintenance: [
      "One week before moving: declutter and donate what you will not move.",
      "One day before cleaning: remove boxes from the rooms being cleaned.",
      "Final day: do touch-ups after movers leave.",
    ],
  },
  {
    slug: "home-organization-systems",
    title: "Home Organization Systems That Stay Easy After Cleanup Day",
    category: "Organization",
    summary:
      "A guide to organizing closets, pantries, drawers, bathrooms, and entry zones in a way that is simple to maintain.",
    readingTime: "7 min read",
    difficulty: "Moderate",
    bestFor: "Pantries, closets, high-use family zones, and cluttered daily spaces",
    serviceHref: "/services",
    serviceLabel: "Organization Services",
    tools: [
      "Donation bags",
      "Clear bins or baskets",
      "Painter's tape or temporary labels",
      "Marker",
      "Shelf wipes",
      "Vacuum",
      "Measuring tape",
      "Small drawer dividers",
    ],
    steps: [
      {
        title: "Sort before buying bins",
        body:
          "The best organizing systems start with what you actually own. Pull items out, group like with like, and remove expired, broken, duplicate, or never-used items before buying storage.",
        checklist: [
          "Make keep, donate, relocate, and trash piles",
          "Group items by use instead of by appearance",
          "Measure shelves after the sort is done",
        ],
      },
      {
        title: "Design zones around routines",
        body:
          "A system works when it matches real life. Put breakfast items together, cleaning refills together, school items near the door, and daily toiletries within easy reach.",
        checklist: [
          "Keep daily items between shoulder and waist height",
          "Place occasional items higher or farther back",
          "Use open bins for items kids need to put away quickly",
        ],
      },
      {
        title: "Label simply",
        body:
          "Labels help everyone maintain the system. Use broad labels at first, like snacks, baking, medicine, towels, returns, and donate. Too many narrow labels can make cleanup harder.",
        checklist: [
          "Use temporary labels for two weeks before making permanent labels",
          "Label shelves, not only bins",
          "Leave empty space so the system can breathe",
        ],
      },
      {
        title: "Reset weekly",
        body:
          "Organization fails when items pile up without a reset. A 15-minute weekly tidy keeps small messes from becoming a full project again.",
        checklist: [
          "Return misplaced items to zones",
          "Remove trash and packaging",
          "Add a donation item when you notice something unused",
        ],
      },
    ],
    proTips: [
      "Do one category at a time instead of emptying the whole house.",
      "Clear bins help with inventory, but baskets hide visual clutter better in living areas.",
      "The best system is the one the busiest person in the home can maintain.",
    ],
    mistakesToAvoid: [
      "Buying containers before decluttering.",
      "Creating categories so specific that nobody follows them.",
      "Filling every shelf completely with no room for new items.",
    ],
    maintenance: [
      "Weekly: reset entry zones, counters, and laundry drop spots.",
      "Monthly: check pantry dates and bathroom products.",
      "Seasonally: rotate clothing, linens, and donation items.",
    ],
  },
  {
    slug: "light-commercial-cleaning-routine",
    title: "Light Commercial Cleaning Routine for Offices, Studios, and Small Shops",
    category: "Light Commercial",
    summary:
      "A professional routine for small business spaces that keeps entry areas, desks, restrooms, break rooms, and floors client-ready.",
    readingTime: "8 min read",
    difficulty: "Moderate",
    bestFor: "Offices, boutiques, studios, and professional suites",
    serviceHref: "/services",
    serviceLabel: "Light Commercial Cleaning",
    tools: [
      "Disinfecting cleaner",
      "Microfiber cloths",
      "Glass cleaner",
      "Vacuum",
      "Mop",
      "Trash liners",
      "Restroom cleaner",
      "Duster with extension handle",
    ],
    steps: [
      {
        title: "Begin with public-facing areas",
        body:
          "Clients and employees notice the entry first. Reset reception seating, dust visible surfaces, clean fingerprints from glass, and remove trash before moving into private work areas.",
        checklist: [
          "Spot-clean entry glass and door handles",
          "Straighten chairs, rugs, and display items",
          "Dust reception counters and waiting tables",
        ],
      },
      {
        title: "Protect desks and electronics",
        body:
          "Workstations need a careful touch. Dust around electronics without moving papers unless instructed. Disinfect shared touchpoints like phones, conference tables, and light switches.",
        checklist: [
          "Do not disturb paperwork or personal items",
          "Use cloth-safe pressure around keyboards and monitors",
          "Disinfect shared handles, switches, and meeting surfaces",
        ],
      },
      {
        title: "Keep restrooms and break rooms consistent",
        body:
          "Small business restrooms and break rooms can affect trust quickly. Clean sinks, counters, mirrors, toilets, appliance exteriors, and trash. Restock if supplies are provided.",
        checklist: [
          "Wipe microwave and refrigerator handles",
          "Clean restroom mirrors and faucet bases",
          "Replace liners and check paper supplies",
        ],
      },
      {
        title: "Finish with floors and scent control",
        body:
          "Vacuum traffic lanes, edge corners, and mop hard floors last. Empty trash before the final walkthrough so the space feels fresh without relying on heavy fragrance.",
        checklist: [
          "Vacuum mats and traffic lanes",
          "Mop from the back of the space toward the exit",
          "Check for streaks near entrances after the floor dries",
        ],
      },
    ],
    proTips: [
      "Create a simple opening or closing checklist so cleaning supports the business routine.",
      "Use low-scent products in shared workplaces unless the owner requests otherwise.",
      "Keep restroom touchpoints on a more frequent schedule than decorative dusting.",
    ],
    mistakesToAvoid: [
      "Moving client paperwork or employee belongings without permission.",
      "Using strong scents in small offices.",
      "Forgetting entry glass, which shows fingerprints immediately.",
    ],
    maintenance: [
      "Daily: trash, restrooms, entry glass, and high-touch surfaces.",
      "Weekly: floors, dusting, break room reset, and conference areas.",
      "Monthly: baseboards, vents, corners, and deeper detail work.",
    ],
  },
  {
    slug: "rv-cleaning-tips",
    title: "RV Cleaning Tips for Compact Kitchens, Storage Cubbies, and Travel Dust",
    category: "RV Cleaning",
    summary:
      "A compact-space cleaning routine for campers, motorhomes, and travel trailers before or after a trip.",
    readingTime: "7 min read",
    difficulty: "Moderate",
    bestFor: "RV owners, weekend travelers, snowbirds, and rental campers",
    serviceHref: "/services",
    serviceLabel: "RV Cleaning",
    tools: [
      "Compact vacuum",
      "Microfiber cloths",
      "All-purpose cleaner safe for RV surfaces",
      "Small detail brush",
      "Glass cloth",
      "Trash bags",
      "Mop or washable floor pads",
      "Odor-neutralizing supplies approved for your RV",
    ],
    steps: [
      {
        title: "Open up and air out",
        body:
          "Before cleaning, open doors or windows when weather allows. Remove trip trash, laundry, food, and loose gear so you can clean tight spaces without shifting clutter around.",
        checklist: [
          "Empty trash and food first",
          "Remove linens and towels",
          "Open cabinets so hidden crumbs and dust are visible",
        ],
      },
      {
        title: "Clean small storage areas carefully",
        body:
          "RV cubbies collect dust, sand, crumbs, and travel debris. Vacuum first, then wipe storage bins, drawers, shelves, and cabinet fronts.",
        checklist: [
          "Vacuum cabinet corners with a crevice tool",
          "Wipe drawer pulls and latches",
          "Dry surfaces before closing storage areas",
        ],
      },
      {
        title: "Reset kitchenette and bath zones",
        body:
          "Compact kitchens and baths need careful product choices. Clean counters, sinks, appliance fronts, mirrors, toilets, and showers with products safe for RV surfaces and plumbing.",
        checklist: [
          "Wipe fridge and microwave when emptied",
          "Clean the sink and faucet base",
          "Avoid harsh products that are not RV-safe",
        ],
      },
      {
        title: "Finish floors and soft surfaces",
        body:
          "Dust and sand settle low after travel. Vacuum seats, floor edges, dinette cushions, and sleeping areas, then mop hard floors with minimal water.",
        checklist: [
          "Vacuum around seat tracks and under dinette edges",
          "Use light moisture on floors",
          "Let the RV dry before closing it up",
        ],
      },
    ],
    proTips: [
      "Keep a small cleaning tote in the RV so quick resets happen during trips.",
      "Use less water than you would in a house; RV floors and seams need a lighter touch.",
      "Clean after every trip so storage odors do not set in.",
    ],
    mistakesToAvoid: [
      "Using household cleaners that are not safe for RV plumbing or surfaces.",
      "Closing cabinets while shelves are still damp.",
      "Forgetting under dinette cushions and storage benches.",
    ],
    maintenance: [
      "After each trip: trash, floors, food storage, and bathroom reset.",
      "Monthly while in use: vents, windows, cubbies, and soft surfaces.",
      "Before storage: remove food, dry surfaces, and leave spaces fresh.",
    ],
  },
];

export const featuredCleaningTip = cleaningTipGuides[0];

export function getCleaningTipGuide(slug: string) {
  return cleaningTipGuides.find((guide) => guide.slug === slug);
}
