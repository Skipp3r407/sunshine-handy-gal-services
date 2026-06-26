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

type CleaningTipGuideInput = Omit<CleaningTipGuide, "readingTime"> & {
  readingTime?: string;
};

const WORDS_PER_MINUTE = 200;
const SHARED_TUTORIAL_PAGE_WORDS = 150;

const countWords = (value: unknown): number => {
  if (typeof value === "string") {
    return value.trim().split(/\s+/).filter(Boolean).length;
  }

  if (Array.isArray(value)) {
    return value.reduce<number>((total, item) => total + countWords(item), 0);
  }

  if (value && typeof value === "object") {
    return Object.values(value as Record<string, unknown>).reduce<number>(
      (total, item) => total + countWords(item),
      0,
    );
  }

  return 0;
};

const estimateReadingTime = (guide: CleaningTipGuideInput) => {
  const guideContent = { ...guide, readingTime: "" };
  const wordCount = countWords(guideContent) + SHARED_TUTORIAL_PAGE_WORDS;
  const minutes = Math.max(1, Math.ceil(wordCount / WORDS_PER_MINUTE));

  return `${minutes} min read`;
};

const cleaningTipGuideContent: CleaningTipGuideInput[] = [
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
  {
    slug: "weekly-home-cleaning-schedule",
    title: "Weekly Home Cleaning Schedule That Keeps Mess From Taking Over",
    category: "Schedules",
    summary:
      "A realistic weekly routine for busy households that separates daily touch-ups, weekly resets, and monthly detail tasks.",
    readingTime: "8 min read",
    difficulty: "Easy",
    bestFor: "Families, pet owners, work-from-home households, and recurring upkeep",
    serviceHref: "/services",
    serviceLabel: "Residential Cleaning",
    tools: [
      "Laundry basket for room resets",
      "Microfiber cloths",
      "All-purpose cleaner",
      "Vacuum",
      "Mop",
      "Bathroom cleaner",
      "Trash bags",
      "Timer",
    ],
    steps: [
      {
        title: "Make a daily 15-minute reset list",
        body:
          "Daily cleaning should prevent pileups, not become a full deep clean. Set a timer and focus on the messes that make tomorrow harder if ignored.",
        checklist: [
          "Clear kitchen counters and sink",
          "Collect dishes, cups, and trash from main rooms",
          "Wipe obvious spills and sticky spots",
        ],
      },
      {
        title: "Assign one weekly focus area per day",
        body:
          "Instead of trying to clean the whole home in one exhausting block, give each day a focus. Bathrooms one day, floors another, dusting another, and laundry catch-up another.",
        checklist: [
          "Monday: bathrooms and towels",
          "Wednesday: dusting and high-touch surfaces",
          "Friday: floors and trash reset",
        ],
      },
      {
        title: "Use a top-to-bottom order",
        body:
          "Whether you clean one room or the whole home, start with dusting and surfaces, then finish with floors. This prevents rework and makes the final result feel more polished.",
        checklist: [
          "Dust shelves, frames, and reachable vents first",
          "Clean counters, tables, and handles next",
          "Vacuum and mop last",
        ],
      },
      {
        title: "Save monthly details for one rotating checklist",
        body:
          "Baseboards, ceiling fans, vent covers, window tracks, cabinet fronts, and appliance edges do not all need the same frequency. Rotate them so detail work stays manageable.",
        checklist: [
          "Choose two detail tasks each week",
          "Write them on a calendar or notes app",
          "Repeat the rotation each month",
        ],
      },
    ],
    proTips: [
      "Keep supplies close to where they are used, such as bathroom cloths under the bathroom sink.",
      "Clean visible clutter before detail work; clutter makes every task feel slower.",
      "If the house feels overwhelming, start with trash, dishes, laundry, and floors.",
    ],
    mistakesToAvoid: [
      "Trying to deep clean every room every week.",
      "Starting floors before dusting and wiping surfaces.",
      "Skipping high-touch areas like handles, switches, remotes, and faucets.",
    ],
    maintenance: [
      "Daily: kitchen sink, counters, dishes, and trash.",
      "Weekly: bathrooms, floors, dusting, linens, and high-touch surfaces.",
      "Monthly: baseboards, vents, fans, cabinet fronts, and window tracks.",
    ],
  },
  {
    slug: "safe-cleaning-products-and-disinfecting",
    title: "Safe Cleaning Products, Disinfecting, and What Not to Mix",
    category: "Product Safety",
    summary:
      "A practical guide to choosing products, ventilating rooms, cleaning before disinfecting, and avoiding unsafe chemical combinations.",
    readingTime: "9 min read",
    difficulty: "Moderate",
    bestFor: "Homes with kids, pets, allergies, frequent guests, or shared spaces",
    serviceHref: "/cleaning-tips",
    serviceLabel: "More Cleaning Tips",
    tools: [
      "Product labels",
      "Gloves",
      "Microfiber cloths",
      "Soap or detergent-based cleaner",
      "EPA-registered disinfectant when needed",
      "Open windows or ventilation",
      "Separate bathroom and kitchen cloths",
      "Closed storage bin for chemicals",
    ],
    steps: [
      {
        title: "Clean first, disinfect only when needed",
        body:
          "Routine cleaning removes dirt, oils, and many germs. Disinfecting is a second step for high-risk situations, such as illness in the home or high-touch surfaces that need extra attention.",
        checklist: [
          "Wash visible dirt with soap or detergent first",
          "Disinfect after cleaning if someone is sick or high-risk",
          "Let disinfectant stay wet for the label contact time",
        ],
      },
      {
        title: "Read the label before using a product",
        body:
          "Labels tell you where the product can be used, how long it should sit, whether gloves are needed, and whether ventilation is required. The right product used incorrectly can still disappoint or damage a surface.",
        checklist: [
          "Check the surface type",
          "Check dwell or contact time",
          "Check first aid, storage, and ventilation instructions",
        ],
      },
      {
        title: "Never mix cleaning chemicals",
        body:
          "Mixing products can create dangerous fumes. Keep bleach separate from ammonia, vinegar, toilet bowl cleaners, and other cleaners unless a product label specifically says they are designed to be used together.",
        checklist: [
          "Use one product at a time",
          "Rinse when switching product types",
          "Store chemicals away from children and pets",
        ],
      },
      {
        title: "Choose lower-scent and surface-safe options when possible",
        body:
          "A clean home does not need to smell heavily perfumed. Lower-scent products, proper ventilation, and microfiber cloths can help spaces feel fresh without overwhelming sensitive noses.",
        checklist: [
          "Open windows or increase airflow when using stronger products",
          "Use non-aerosol products where practical",
          "Test new products in a hidden area first",
        ],
      },
    ],
    proTips: [
      "Keep disinfecting cloths separate from general dusting cloths.",
      "Use fragrance-free or low-scent options when clients, children, pets, or employees are sensitive to smells.",
      "Write the open date on products you use rarely so you know what has been sitting too long.",
    ],
    mistakesToAvoid: [
      "Disinfecting dirty surfaces without cleaning first.",
      "Ignoring label contact time and wiping disinfectant away too soon.",
      "Assuming natural, green, or scented products are automatically safe for every surface.",
    ],
    maintenance: [
      "After each use: close caps tightly and store products upright.",
      "Monthly: check labels and toss leaking or unlabeled containers.",
      "Seasonally: review supplies and replace worn brushes, sponges, and cloths.",
    ],
  },
  {
    slug: "floor-care-by-surface",
    title: "Floor Care by Surface: Tile, Vinyl, Laminate, Wood, and Rugs",
    category: "Floors",
    summary:
      "A surface-by-surface floor tutorial for reducing streaks, protecting finishes, and choosing the right cleaning rhythm.",
    readingTime: "9 min read",
    difficulty: "Moderate",
    bestFor: "Homes with mixed flooring, pets, kids, sand, and high-traffic entryways",
    serviceHref: "/services",
    serviceLabel: "Residential Cleaning",
    tools: [
      "Vacuum or broom",
      "Microfiber mop",
      "pH-neutral floor cleaner",
      "Dry microfiber towel",
      "Entry mats",
      "Soft brush attachment",
      "Spot-cleaning cloth",
      "Bucket or spray mop",
    ],
    steps: [
      {
        title: "Remove dry debris first",
        body:
          "Dust, sand, pet hair, and crumbs can scratch floors or turn into muddy streaks when mopped. Vacuum or sweep thoroughly before adding moisture.",
        checklist: [
          "Vacuum edges and under toe kicks",
          "Use a soft brush on hard floors",
          "Shake or vacuum entry mats",
        ],
      },
      {
        title: "Use less water than you think",
        body:
          "Most residential floors look better with a damp mop, not a soaking wet one. Too much water can leave streaks, seep into seams, or dull certain finishes.",
        checklist: [
          "Wring mop pads well",
          "Work in small sections",
          "Dry any puddles right away",
        ],
      },
      {
        title: "Match product to the surface",
        body:
          "Tile, vinyl, laminate, sealed wood, and stone can have different needs. When unsure, use a pH-neutral cleaner and avoid harsh products until the finish is confirmed.",
        checklist: [
          "Avoid abrasive powders on glossy floors",
          "Avoid steam on surfaces that warn against heat or moisture",
          "Test cleaners in a hidden area",
        ],
      },
      {
        title: "Control traffic and pet messes",
        body:
          "The easiest floor to clean is the one protected from grit. Entry mats, quick spot cleaning, and regular vacuuming extend the time between deeper floor resets.",
        checklist: [
          "Place mats at exterior doors",
          "Spot-clean spills as soon as possible",
          "Vacuum pet zones more often",
        ],
      },
    ],
    proTips: [
      "Use a dry microfiber towel after mopping glossy floors to reduce streaks.",
      "Change mop water or pads when they look dirty; otherwise you spread soil around.",
      "Clean baseboards before floors so dust does not fall onto freshly mopped areas.",
    ],
    mistakesToAvoid: [
      "Using too much cleaner, which can leave sticky residue.",
      "Skipping vacuuming before mopping.",
      "Assuming one product is safe for every floor in the home.",
    ],
    maintenance: [
      "Daily: spot-clean spills and entry dirt.",
      "Weekly: vacuum traffic lanes and mop hard floors as needed.",
      "Monthly: detail baseboards, corners, and under movable furniture.",
    ],
  },
  {
    slug: "airbnb-turnover-cleaning-checklist",
    title: "Airbnb Turnover Cleaning Checklist for Guest-Ready Rentals",
    category: "Vacation Rentals",
    summary:
      "A host-friendly turnover routine for beds, bathrooms, kitchens, restocking, guest-left items, and final photo-ready presentation.",
    readingTime: "10 min read",
    difficulty: "Detailed",
    bestFor: "Short-term rental hosts, property managers, and guest suites",
    serviceHref: "/services",
    serviceLabel: "Airbnb & Vacation Rental Cleaning",
    tools: [
      "Host checklist",
      "Fresh linens and towels",
      "Trash bags",
      "Bathroom cleaner",
      "Kitchen cleaner",
      "Vacuum",
      "Mop",
      "Restock supplies",
    ],
    steps: [
      {
        title: "Walk the property before cleaning",
        body:
          "A turnover starts with inspection. Look for damage, missing items, guest-left belongings, stains, trash, and maintenance issues before resetting the space.",
        checklist: [
          "Check under beds, sofa edges, drawers, and closets",
          "Photograph damage or maintenance concerns",
          "Collect laundry and trash first",
        ],
      },
      {
        title: "Reset beds and bathrooms with guest eyes",
        body:
          "Guests notice linens and bathrooms immediately. Make beds neatly, stage towels consistently, polish mirrors and fixtures, and make sure toilets, tubs, and sinks are fully sanitized.",
        checklist: [
          "Inspect sheets and towels for stains",
          "Stage towels according to the host checklist",
          "Restock toilet paper, soap, and amenities if provided",
        ],
      },
      {
        title: "Clean kitchen and dining areas thoroughly",
        body:
          "Even small food residue can affect reviews. Check dishes, appliances, counters, coffee stations, cabinet handles, fridge shelves when needed, and trash areas.",
        checklist: [
          "Check dishwasher and dish cabinets",
          "Wipe appliance handles and coffee station surfaces",
          "Remove crumbs from dining chairs and under tables",
        ],
      },
      {
        title: "Finish with a photo-ready walkthrough",
        body:
          "After floors are done, walk the rental like a new guest. Align pillows, fold throws, check lights, remove streaks, and make sure the first impression feels intentional.",
        checklist: [
          "Turn on lamps or set lighting as requested",
          "Straighten decor and remotes",
          "Message the host about low supplies or issues",
        ],
      },
    ],
    proTips: [
      "Use a host-approved photo checklist so every turnover is consistent.",
      "Keep spare batteries, lint rollers, and stain treatment in the owner supply area.",
      "Report maintenance problems quickly; communication protects reviews.",
    ],
    mistakesToAvoid: [
      "Assuming guests washed dishes properly.",
      "Skipping sofa cushions, under beds, or patio areas.",
      "Forgetting to check supply levels before the next arrival.",
    ],
    maintenance: [
      "Every turnover: bathrooms, linens, kitchen, floors, trash, and guest-left item check.",
      "Weekly or biweekly: appliance detail, patio touch-up, and upholstery edges.",
      "Monthly: inventory audit, baseboards, vents, and deeper dusting.",
    ],
  },
];

export const cleaningTipGuides: CleaningTipGuide[] = cleaningTipGuideContent.map(
  (guide) => ({
    ...guide,
    readingTime: estimateReadingTime(guide),
  }),
);

export const featuredCleaningTip = cleaningTipGuides[0];

export const cleaningSafetyBasics = [
  "Clean visible dirt first; disinfecting works best after soil and residue are removed.",
  "Focus routine cleaning on high-touch areas such as handles, switches, faucets, counters, remotes, and phones.",
  "Read labels for surface compatibility, contact time, gloves, ventilation, storage, and first aid.",
  "Never mix bleach with ammonia, vinegar, toilet bowl cleaner, or other chemicals.",
  "Use good airflow when cleaning with stronger products, especially in bathrooms and small rooms.",
  "Store cleaning products upright, labeled, closed, and out of reach of children and pets.",
];

export const cleaningQuickWins = [
  "Make the bed first so the bedroom instantly looks more organized.",
  "Clear counters before spraying cleaner so you do not clean around clutter.",
  "Use one laundry basket to collect misplaced items before detail cleaning.",
  "Dust before vacuuming so fallen debris is picked up at the end.",
  "Keep a dry microfiber cloth nearby for final shine on faucets and mirrors.",
  "Set a 20-minute timer when you feel stuck and focus only on trash, dishes, laundry, and floors.",
];

export const cleaningScheduleRows = [
  {
    rhythm: "Daily",
    tasks: "Kitchen counters, dishes, sink wipe-down, trash check, quick bathroom splash wipe, and clutter reset.",
  },
  {
    rhythm: "Weekly",
    tasks: "Bathrooms, floors, dusting, high-touch surfaces, linens, mirrors, and main trash bins.",
  },
  {
    rhythm: "Monthly",
    tasks: "Baseboards, vents, fans, cabinet fronts, appliance edges, window tracks, and under light furniture.",
  },
  {
    rhythm: "Seasonal",
    tasks: "Deep cleaning, pantry edits, closet rotation, grout detail, donation sorting, and full-home reset.",
  },
];

export function getCleaningTipGuide(slug: string) {
  return cleaningTipGuides.find((guide) => guide.slug === slug);
}
