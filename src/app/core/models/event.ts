export interface EventItem {
  ID?: number;
  ActivityID?: number;
  OrgLevelID?: number;
  DistrictID?: number;
  SamithiID?: number;
  EventTitle?: string;
  EventVenue?: string;
  EventDescription?: string;
  EventDate?: string;
  IsToBeFeatured?: boolean;
  IsActive?: boolean;
  IsDeleted?: boolean;
  IsApproved?: boolean;
  RejectionComments?: string;
  EventBannerImageUrl?: string;
  EventAgendaImage1Url?: string;
  EventAgendaImage2Url?: string;
  EventAttendees?: string;
  KeyTakeaways?: string;
}