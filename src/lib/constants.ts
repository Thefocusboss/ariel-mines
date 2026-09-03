import { asset } from './utils';

export interface NavItem {
  label: string;
  href: string;
}

export const COMPANY_INFO = {
  name: 'Ariel Mines and Koncepts Ltd',
  shortName: 'Ariel',
  tagline: 'The Power Beneath Us',
  heroHeadline: "WE TURN EARTH'S RESOURCES INTO INDUSTRIAL VALUE.",
  brandNarrative: 'FROM THE EARTH. FOR THE WORLD.',
  summary: 'Purchase of mineral resources and production.',
  mission:
    'The company was founded to address core market needs around resource scarcity and unavailability by locating, extracting and processing raw geological materials from the earth and transforming them into usable commodities for society and industry.',
  vision:
    "To globally practice the purchasing and processing of raw earth materials for sustainable growth of the world's economy.",
  address: 'Plot 10247 Sabon Barki, Jos Bukuru Road, Plateau State, Nigeria',
  locationCity: 'Jos, Plateau State',
  phone: '+234 8139630807',
  phoneClean: '+2348139630807',
  email: 'arielbulus7@gmail.com',
  establishedContext: 'Plateau State Mineral Corridor, Nigeria',
  coreProblem: 'Resource scarcity and unavailability across manufacturing and industrial sectors.',
  differentiatingFactor:
    'A consistent approach to maintaining high-quality raw materials, rigorous beneficiation, and uncompromising integrity.',
};

export const NAV_LINKS: NavItem[] = [
  { label: 'ABOUT', href: '/about' },
  { label: 'WHAT WE DO', href: '/operations' },
  { label: 'OUR APPROACH', href: '/approach' },
  { label: 'RESOURCES', href: '/resources' },
  { label: 'SUPPLIERS', href: '/suppliers' },
  { label: 'INSIGHTS', href: '/insights' },
  { label: 'CONTACT', href: '/contact' },
];

export const PURPOSE_STAGES = [
  {
    step: '01',
    title: 'LOCATE',
    subtitle: 'Geological Discovery',
    description: 'Identifying geological resources and strategic mineral opportunities across mineral-rich deposits.',
    icon: 'MapPin',
  },
  {
    step: '02',
    title: 'SOURCE',
    subtitle: 'Strategic Procurement',
    description: 'Purchasing and securing consistent, high-grade raw geological materials through reliable supplier relationships.',
    icon: 'Layers',
  },
  {
    step: '03',
    title: 'PROCESS',
    subtitle: 'Industrial Beneficiation',
    description: 'Transforming raw geological materials into high-purity, usable commodities utilizing modern magnetic, gravity, and density classification.',
    icon: 'Cpu',
  },
  {
    step: '04',
    title: 'DELIVER',
    subtitle: 'Supply Chain Integration',
    description: 'Connecting refined mineral resources directly with industrial manufacturers, foundries, and global processing markets.',
    icon: 'Truck',
  },
];

export const OPERATIONS = [
  {
    id: '01',
    title: 'MINERAL SOURCING',
    subtitle: 'Raw Material Procurement',
    description: 'Strategic sourcing and direct procurement of raw geological materials from trusted extraction hubs and local mineral networks.',
    features: [
      'Direct purchase agreements with artisanal and commercial miners',
      'Assay assessment and raw mineral grading',
      'Continuous supply chain security',
      'Fair, transparent trade relationships'
    ],
    image: asset('images/facility-exterior.jpg'),
  },
  {
    id: '02',
    title: 'MINERAL PROCESSING',
    subtitle: 'Beneficiation & Classification',
    description: 'Advanced processing of raw minerals into usable industrial commodities through crushing, screening, magnetic separation, and gravity concentration.',
    features: [
      'High-gradient magnetic separation systems',
      'Multi-stage gravity classification & chute separation',
      'Shaking table density concentration',
      'Vibrating screen particle sizing'
    ],
    image: asset('images/magnetic-separator-unit.jpg'),
  },
  {
    id: '03',
    title: 'RESOURCE DEVELOPMENT',
    subtitle: 'Value Chain Optimization',
    description: 'Identifying and unlocking long-term opportunities within the geological resource value chain to bridge scarcity and industrial demand.',
    features: [
      'Geological resource assessment',
      'Yield improvement protocols',
      'Infrastructure modernization',
      'Responsible extraction stewardship'
    ],
    image: asset('images/vibrating-screen-deck.jpg'),
  },
  {
    id: '04',
    title: 'INDUSTRIAL SUPPLY',
    subtitle: 'Logistics & Market Integration',
    description: 'Supplying verified, high-specification mineral commodities to domestic and international industrial end-users.',
    features: [
      'Standardized industrial packaging and batch tagging',
      'Reliable dispatch and haulage coordination',
      'Consistent grade conformity across shipments',
      'Laboratory assay grade certification'
    ],
    image: asset('images/shaker-table-operation.jpg'),
  },
];

export const VALUE_PILLARS = [
  {
    number: '01',
    title: 'QUALITY',
    subtitle: 'Uncompromising Grade',
    description: 'Maintaining stringent quality controls across all sourced raw materials and processed mineral outputs.',
    highlight: 'Rigorous Physical & Laboratory Assay Standards',
    icon: 'ShieldCheck',
  },
  {
    number: '02',
    title: 'CONSISTENCY',
    subtitle: 'Predictable Supply',
    description: 'Delivering a steady, dependable flow of minerals that industrial partners can plan their production schedules around.',
    highlight: 'Dependable Stockpiling & Continuous Output',
    icon: 'Repeat',
  },
  {
    number: '03',
    title: 'INTEGRITY',
    subtitle: 'Transparent Partnerships',
    description: 'Building transparent, ethical, and long-lasting business relationships with suppliers, regulators, and buyers.',
    highlight: 'Fair Commercial Terms & Honest Valuations',
    icon: 'Compass',
  },
  {
    number: '04',
    title: 'RELIABILITY',
    subtitle: 'Execution Certainty',
    description: 'Creating dependable long-term value for suppliers and industrial off-takers through on-time fulfillment.',
    highlight: 'Dedicated Infrastructure & Operational Grounding',
    icon: 'Anchor',
  },
];

export const VALUE_CHAIN_STEPS = [
  {
    stage: '01',
    name: 'Geological Resources',
    desc: 'Untapped natural minerals embedded within the earth.',
    tag: 'Raw Deposits'
  },
  {
    stage: '02',
    name: 'Sourcing & Purchase',
    desc: 'Direct acquisition of raw ores from certified extraction points.',
    tag: 'Procurement'
  },
  {
    stage: '03',
    name: 'Beneficiation & Processing',
    desc: 'Crushing, screening, magnetic sorting, gravity classification, and density concentration.',
    tag: 'Refinement'
  },
  {
    stage: '04',
    name: 'Commodity Quality Assurance',
    desc: 'Laboratory assaying, density titration, and grading for industrial conformity.',
    tag: 'Standardization'
  },
  {
    stage: '05',
    name: 'Industrial Application',
    desc: 'Integration into manufacturing, metallurgy, energy, and precision fabrication.',
    tag: 'End-Use Value'
  },
  {
    stage: '06',
    name: 'Sustainable Economic Growth',
    desc: 'Driving wealth creation, industrial self-sufficiency, and global trade.',
    tag: 'Global Impact'
  },
];

export interface FacilityAsset {
  title: string;
  location: string;
  description: string;
  image: string;
  badge: string;
  category: 'Machinery' | 'Laboratory' | 'Facility';
}

export const FACILITY_ASSETS: FacilityAsset[] = [
  {
    title: 'Central Processing & Staging Grounds',
    location: 'Plot 10247 Sabon Barki, Jos Bukuru Road, Plateau State',
    description: 'Main operational hub and processing grounds for raw mineral intake, vehicle ramp staging, consignment loading, and operational administration.',
    image: asset('images/facility-exterior.jpg'),
    badge: 'Central Hub',
    category: 'Facility',
  },
  {
    title: 'Geological Assay & Quality Testing Station',
    location: 'Quality Control Laboratory',
    description: 'Laboratory testing workbench equipped with specific gravity titration apparatus, pycnometer calibration, and chemical purity assaying tools.',
    image: asset('images/laboratory-assay-bench.jpg'),
    badge: 'Assay Lab',
    category: 'Laboratory',
  },
  {
    title: 'Vibrating Screen & Particle Sizing Deck',
    location: 'Primary Screening Bay',
    description: 'Inclined vibrating screen classifier and overhead feed hopper for precise grain-size fractionation and particle separation before separation.',
    image: asset('images/vibrating-screen-deck.jpg'),
    badge: 'Particle Sizing',
    category: 'Machinery',
  },
  {
    title: 'High-Gradient Magnetic Separator Unit',
    location: 'Magnetic Separation Bay',
    description: 'Industrial electromagnetic separator separating magnetic fractions, paramagnetic ores, and non-magnetic tailings with automated control switchboards.',
    image: asset('images/magnetic-separator-unit.jpg'),
    badge: 'Magnetic Separation',
    category: 'Machinery',
  },
  {
    title: 'Shaking Table Density Concentrator',
    location: 'Concentration Facility',
    description: 'Precision mechanical shaker table separating high-density heavy minerals from light gangue minerals in real-time continuous operation.',
    image: asset('images/shaker-table-operation.jpg'),
    badge: 'Density Separation',
    category: 'Machinery',
  },
  {
    title: 'Multi-Stage Gravity Classification Chutes',
    location: 'Classification Bay',
    description: 'Cascading stainless chute system performing grain-size classification and hydraulic gravity separation with staged bagged mineral inventory.',
    image: asset('images/gravity-separation-system.jpg'),
    badge: 'Gravity Separation',
    category: 'Machinery',
  },
  {
    title: 'Magnetic Processing Core Mechanics',
    location: 'Technical Workshop',
    description: 'Internal multi-tier induction and rotor assembly engineered for precise magnetic field gradation and high-grade mineral recovery.',
    image: asset('images/magnetic-separator-open.jpg'),
    badge: 'Core Technology',
    category: 'Machinery',
  },
];
