export interface ActivityItem {
  ID?: number;
  ActivityType?: string;
  ActivityFrequency?: string;
  Activity: string;
}

export interface DigitalArchiveToAdd {
  ID?: number;
  ActivityName: string;
  ActivityImage?: File | null;
}