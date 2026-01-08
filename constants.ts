import { CoreCompetency, JobPosition, TimelineEvent, Stat } from './types';

export const GLOBAL_LOCATIONS = [
  "Guangzhou", "Dong Guan", "Seoul", "Dubai", "Los Angeles", "Massachusetts", "Vancouver"
];

export const CORE_COMPETENCIES: CoreCompetency[] = [
  {
    title: "Market Intelligence",
    description: "Proprietary algorithms that predict and adapt to consumer demand."
  },
  {
    title: "Global Operations",
    description: "A synchronized network across Asia, North America, and the Middle East."
  },
  {
    title: "Brand Leadership",
    description: "A portfolio of consumer brands engineered for quality and longevity."
  }
];

export const LOGISTICS_STATS: Stat[] = [
  { label: "Facility Size", value: "10,000 SQM" },
  { label: "Daily Throughput", value: "200,000 Orders" },
  { label: "Reach", value: "Global D2C" }
];

export const TIMELINE_EVENTS: TimelineEvent[] = [
  {
    year: "2023",
    title: "Inception",
    description: "Development of core technology and initial brand launches. Successful proof of concept established."
  },
  {
    year: "2024",
    title: "Infrastructure",
    description: "Strategic capital investment into physical assets. Construction and opening of the VerumLogistics facility in Dong Guan."
  },
  {
    year: "2025",
    title: "Expansion",
    description: "Launch of proprietary international shipping lines. Expansion of brand portfolio.",
    milestone: "Surpassed $100M+ in revenue within the first 3 years of operation."
  },
  {
    year: "2026",
    title: "Market Leadership",
    description: "Targeting top market share positions for all portfolio brands. Reaching full logistics capacity of 200,000 orders per day."
  },
  {
    year: "2027",
    title: "Global Outlook",
    description: "Expansion of the logistics network beyond China. Strategic acquisitions of external D2C brands.",
    target: "Revenue target: $500M"
  }
];

export const JOB_POSITIONS: JobPosition[] = [
  { title: "Machine Learning Engineer", department: "Technology", location: "Los Angeles / Remote" },
  { title: "Supply Chain Director", department: "Operations", location: "Dong Guan" },
  { title: "Brand Strategy Lead", department: "Marketing", location: "Seoul" },
  { title: "Content Production Specialist", department: "Creative", location: "Vancouver" }
];