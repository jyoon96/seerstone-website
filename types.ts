export interface TimelineEvent {
  year: string;
  title: string;
  description: string;
  milestone?: string;
  target?: string;
}

export interface JobPosition {
  title: string;
  department: string;
  location: string;
}

export interface CoreCompetency {
  title: string;
  description: string;
}

export interface Stat {
  label: string;
  value: string;
}