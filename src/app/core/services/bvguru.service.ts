import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface BVGuruItem {
  ID?: number;
  DistrictID?: number;
  SamithiID?: number;
  BhajanMandaliID?: number;
  BalVikasCentreID: number;
  BalVikasCentreName: string;
  GuruName: string,
  DateOfBirth: string,
  AddressLine1: string,
  AddressLine2: string,
  AddressLine3: string,
  PIN: string,
  ContactNo1: string,
  ContactNo2: string,
  Email: string,
  Gender: string,
  HighestEducationalDegreeID: number,
  GraduationMajorSubjectID: number,
  OccupationID: number,
  AlumnusOf: string,
  Photo: string,
  TargetGroupsOfStudents: string,
  isEditing?: boolean;
}

export interface BVCentreItem {
  ID?: number;
  DistrictID?: number;
  SamithiID?: number;
  BhajanMandaliID?: number;
  BalVikasCentreCode?: string;
  BalVikasCentreName: string;
  isEditing?: boolean;
}

export interface BhajanmandaliItem {
  ID?: number;
  DistrictID?: number;
  SamithiID?: number;
  BhajanMandaliCode?: string;
  BhajanMandaliName: string;
  BhajanMandaliRegNo?: string;
  isEditing?: boolean;
}

export interface SamithiItem {
  ID?: number;
  DistrictID?: number;
  SamithiCode?: string;
  SamithiName: string;
  SamithiRegNo?: string;
  isEditing?: boolean;
}

export interface DistItem {
  ID?: number;
  DistrictName: string;
}

export interface EduDegreeItem {
  ID?: number;
  QualificationName : string;
}

export interface GraduationMajorSubjectItem {
  ID?: number;
  GraduationMajorSubject: string;
}

export interface OccupationItem {
  ID?: number;
  OccupationName: string;
}

@Injectable({
  providedIn: 'root'
})
export class BvguruService {

  private apiBaseUrl = 'http://172.93.223.88:8080';
  private byDistApiUrl = 'http://172.93.223.88:8080/district';
  private samithiApiUrl = 'http://172.93.223.88:8080/samithis'; 
  private distApiUrl = 'http://172.93.223.88:8080/saidistricts';
  private bySamithiApiUrl = 'http://172.93.223.88:8080/samithi';
  private byBMApiUrl = 'http://172.93.223.88:8080/bhajanmandali';
  private bvguruApiUrl = 'http://172.93.223.88:8080/bvgurus';
  private fileUploadApiUrl = 'http://172.93.223.88:8080/uploadguruphoto';

  constructor(private http: HttpClient) { }

    geItems(): Observable<BVGuruItem[]> {
        return this.http.get<BVGuruItem[]>(this.bvguruApiUrl);
      }

    getBhajanMandaisBySamithi(samithiID: number): Observable<BhajanmandaliItem[]> {
        return this.http.get<BhajanmandaliItem[]>(`${this.bySamithiApiUrl}/${samithiID}/bhajanmandalis`);
      }
  
    getSamithis(): Observable<SamithiItem[]> {
        return this.http.get<SamithiItem[]>(this.samithiApiUrl);
      }
  
    getDists(): Observable<DistItem[]> {
        return this.http.get<DistItem[]>(this.distApiUrl);
      }
  
    getSamithisbyDistrict(districtID: number): Observable<SamithiItem[]> {
        return this.http.get<SamithiItem[]>(`${this.byDistApiUrl}/${districtID}/samithis`);
      }
  
    getBhajanMandalisbyDistrict(districtID: number): Observable<BhajanmandaliItem[]> {
        return this.http.get<BhajanmandaliItem[]>(`${this.byDistApiUrl}/${districtID}/bhajanmandalis`);
      }

    getBVCentresbyBM(bhajanMandaliID: number): Observable<BVCentreItem[]> {
        return this.http.get<BVCentreItem[]>(`${this.byBMApiUrl}/${bhajanMandaliID}/balvikascentres`);
      }

    getGuruQualifications(): Observable<EduDegreeItem[]> {
        return this.http.get<EduDegreeItem[]>(`${this.apiBaseUrl}/bvguruqualifications`);
      }

    getGuruGraduationMajors(): Observable<GraduationMajorSubjectItem[]> {
        return this.http.get<GraduationMajorSubjectItem[]>(`${this.apiBaseUrl}/bvgurumajorsubjects`);
      }

    getGuruOccupations(): Observable<OccupationItem[]> {
        return this.http.get<OccupationItem[]>(`${this.apiBaseUrl}/bvguruoccupations`);
      }

    uploadFile(fileToUpload: File): Observable<any> {
      
      // let fileUploadJson = {
      //   file: fileToUpload
      // }

      const formData = new FormData();
      formData.append('file', fileToUpload);
      return this.http.post<any>(`${this.fileUploadApiUrl}`, formData,
        {
          observe: 'events',
          reportProgress: true
        }
      );
    }

  
    createItem(itemrow: BVGuruItem): Observable<any> {
      let itemRowJson = {
          districtID: itemrow.DistrictID,
          samithiID: itemrow.SamithiID,
          bmID: itemrow.BhajanMandaliID,
          bvCentreID: itemrow.BalVikasCentreID,
          guruName: itemrow.GuruName,
          dateOfBirth: itemrow.DateOfBirth,
          addressLine1: itemrow.AddressLine1,
          addressLine2: itemrow.AddressLine2,
          addressLine3: itemrow.AddressLine3,
          pinCode: itemrow.PIN,
          contactNo1: itemrow.ContactNo1,
          contactNo2: itemrow.ContactNo2,
          eMail: itemrow.Email,
          gender: itemrow.Gender,
          highestEduDegreeID: itemrow.HighestEducationalDegreeID,
          gradMajorSubID: itemrow.GraduationMajorSubjectID,
          occupationID: itemrow.OccupationID,
          alumnusOf: itemrow.AlumnusOf,
          photo: itemrow.Photo,
          targetGroups: itemrow.TargetGroupsOfStudents,
          createdBy: "PortalUser"
      }

      return this.http.post(`${this.bvguruApiUrl}/add`, itemRowJson);
    }
  
    /*updateItem(itemrow: BhajanmandaliItem): Observable<any> {
        let itemRowjson = {
          bmRegNo: itemrow.BhajanMandaliRegNo,
          bmName: itemrow.BhajanMandaliName,
          updatedBy: "PortalUser"
        }
        return this.http.put(`${this.apiUrl}/update/${itemrow.ID}`, itemRowjson);
      }
  
    deleteItem(itemID: number): Observable<any> {
        return this.http.delete(`${this.apiUrl}/delete/${itemID}`);
      }*/
}
