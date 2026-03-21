import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-search-navigation',
  standalone: true,
  templateUrl: './search-navigation.component.html',
  styleUrls: ['./search-navigation.component.scss'],
  imports: [
    CommonModule,
    FormsModule,
    MatAutocompleteModule,
    MatInputModule
  ]
})
export class SearchNavigationComponent {
  @Input() searchQuery: string = '';
  @Output() searchQueryChange = new EventEmitter<string>();
  @Output() onNavigate = new EventEmitter<void>();
  filteredPages: any[] = [];

  private pages: any[] = [
    { path: '/home', title: 'Home' },
    { path: '/wings/service/NarayanaSeva', title: 'Narayana Seva' },
    { path: '/wings/service/TribalVillageProgramme', title: 'Tribal Village Programme' },
    { path: '/wings/service/JalaChhatraSeva', title: 'Jala Chhatra Seva' },
    { path: '/wings/service/AmrutaKalasam', title: 'Amruta Kalasam' },
    { path: '/wings/service/NityaNarayanaSeva', title: 'Nitya Narayana Seva' },
    { path: '/wings/service/HolisticHealthCare', title: 'Holistic Health Care' },
    { path: '/wings/service/SaiSwabalambi', title: 'Sai Swabalambi' },
    { path: '/wings/service/BloodDonation', title: 'Blood Donation' },
    { path: '/wings/service/rvtc', title: 'rvtc' },
    { path: '/wings/service/SwachhatwaRuDivyatwa', title: 'Swachhatwa Ru Divyatwa' },
    { path: '/wings/service/SanitationSeva', title: 'Sanitation Seva' },
    { path: '/wings/service/AgriCare', title: 'Agri Care' },
    { path: '/wings/service/SriSathyaSaiHousingProject', title: 'Sri Sathya SaiHousing Project' },
    { path: '/wings/service/SriSathyaSaiWaterProject', title: 'Sri Sathya Sai Water Project' },
    { path: '/wings/service/DisasterManagement', title: 'Disaster Management' },
    { path: '/wings/service/SriSathyaSaiSudarshan', title: 'Sri Sathya Sai Sudarshan' },
    { path: '/wings/service/PrasanthiSeva', title: 'Prasanthi Seva' },

    { path: '/wings/spiritual/bhajan', title: 'Bhajan' },
    { path: '/wings/spiritual/vedaPrabaham', title: 'Veda Prabaham' },
    { path: '/wings/spiritual/sadhanaShibir', title: 'Sadhana Shibir' },
    { path: '/wings/spiritual/seminars', title: 'Veda Prabaham' },
    { path: '/wings/spiritual/dhyanaVrukshya', title: 'Dhyana Vrukshya' },
    { path: '/wings/spiritual/parthiYatra', title: 'Parthi Yatra' },
    { path: '/wings/spiritual/jyothiYatra', title: 'Jyothi Yatra' },
    { path: '/wings/spiritual/jyothiYatra', title: 'Jyothi Yatra' },
    { path: '/wings/spiritual/celebrationOfFestivals', title: 'Celebration of Festivals' },
    { path: '/wings/spiritual/Lakshyarchana', title: 'Lakshyarchana' },
    { path: '/wings/spiritual/studyCircle', title: 'Study circle' },
    { path: '/wings/spiritual/saiSymphony', title: 'Study circle' },
    { path: '/wings/spiritual/swadhyaya', title: 'Swadhyaya' },
    { path: '/wings/spiritual/vahiniParayana', title: 'Vahini Parayana' },
    { path: '/wings/spiritual/devoteesMeet', title: 'Devotees meet' },
    { path: '/wings/youth/bhaktosavam', title: 'Bhaktosavam' },

    { path: '/wings/education/SriSathyaSaiBalVikas', title: 'Sri Sathya Sai BalVikas' },
    { path: '/wings/education/SriSathyaSaiVidyaJyothi', title: 'Sri Sathya Sai VidyaJyothi' },
    { path: '/wings/education/NityaSikshyaDana', title: 'Nitya Sikshya Dana' },
    { path: '/wings/education/VidyaVahini', title: 'Vidya Vahini' },
    { path: '/wings/education/FestivalsOfJoy', title: 'Festivals Of Joy' },
    { path: '/wings/education/SSSCHumanExcellence', title: 'SSSC Human Excellence' },
    { path: '/wings/education/AnandaUdyan', title: 'Ananda Udyan' },
    { path: '/wings/education/MadhuVadishyami', title: 'Madhu Vadishyami' },
    { path: '/wings/education/SaiVaatika', title: 'Sai Vaatika' },
    { path: '/wings/education/ManmanaaBhava', title: 'ManmanaaBhava' },
    { path: '/wings/education/FestivalsFlavours', title: 'Festivals Flavours' },

    { path: '/wings/ladies/SaktiSwaroopiniDiwas', title: 'Sakti Swaroopini Diwas' },
    { path: '/wings/ladies/SaiBratakalpa', title: 'Sai Bratakalpa' },
    { path: '/wings/ladies/LalitaSahasraNama', title: 'Lalita Sahasra Nama' },
    { path: '/wings/ladies/KumkumaPujaArchana', title: 'Kumkuma Puja Archana' },
    { path: '/wings/ladies/BaralaxmiBrata', title: 'Baralaxmi Brata' },
    { path: '/wings/ladies/SaiSanatani', title: 'Sai Sanatani' },
    { path: '/wings/ladies/SaiPremadhara', title: 'Sai Premadhara' },
    { path: '/wings/ladies/MahilaConvention', title: 'Mahila Convention' },
    { path: '/wings/ladies/MahilaBhajanSatsangStudyCircle', title: 'Mahila Bhajan Satsang Study Circle' },

    { path: '/wings/youth/NationalInitiatives', title: 'National Initiatives' },
    { path: '/wings/youth/PracticingCod', title: 'Practicing Cod' },
    { path: '/wings/youth/MaintainingOfSpiritualDairy', title: 'Maintaining Of Spiritual Dairy' },
    { path: '/wings/youth/YouthMeetYouthDayCelebration', title: 'Youth Meet Youth Day Celebration' },
    { path: '/wings/youth/YouthStudyCircle', title: 'Youth Study Circle' },
    { path: '/wings/youth/SaiSradha', title: 'Sai Sradha' },
    { path: '/wings/youth/SriSathyaSaiJagruti', title: 'Sri Sathya Sai Jagruti' },
    { path: '/wings/youth/SummerCourse', title: 'Summer Course' },

    { path: '/SevaInitiatives/holisticHealthCare', title: 'Holistic Health Care' },
    { path: '/SevaInitiatives/sssGramaSeva', title: 'Sri Sathya Sai Grama Seva' },
    { path: '/SevaInitiatives/sssDivyaPadukaYatra', title: 'Sri Sathya Sai Divya Paduka Yatra' },

    { path: '/sssBPTOdisha', title: 'sssBPTOdisha' },

    { path: '/sssTrustOdisha/centralTrust', title: 'Central Trust' },
    { path: '/sssTrustOdisha/SSSBPT', title: 'SSS Books And Publication Trust' },
    { path: '/sssTrustOdisha/teleMedicineCenter', title: 'Tele Medicine Center' },
    { path: '/sssTrustOdisha/sssPrematharu', title: 'Sri Sathya Sai Prematharu' },
    { path: '/sssTrustOdisha/sssNirmalaJhar', title: 'Sri Sathya Sai Nirmala Jhar' },
    { path: '/sssTrustOdisha/sssMobileHospital', title: 'Sri Sathya Sai Mobile Hospital' },
    { path: '/sssTrustOdisha/sssSkillDevelopmentProgram', title: 'sss Skill Development Program' },
    { path: '/sssTrustOdisha/TelemedicineCentreThalassemiaclinics', title: 'Telemedicine Centre Thalassemia clinics' },
    { path: '/sssTrustOdisha/CardioPulmonaryResuscitation', title: 'Cardio Pulmonary Resuscitation' },
    { path: '/sssTrustOdisha/SaiRehabilitationProgramClinics', title: 'Sai Rehabilitation Program Clinics' },
    { path: '/sssTrustOdisha/SSSNityaNarayanaSeva', title: 'SSS Nitya Narayana Seva' },

    { path: '/organization/sevaOrgOdisha', title: 'Seva Organisations' },
    { path: '/organization/messageFromStatePresident', title: 'Message From State President' },
    { path: '/organization/stateCoordinators', title: 'State Coordinators' },
    { path: '/organization/sic', title: 'State In-Charges' },
    { path: '/organization/districtPresidents', title: 'District Presidents' },
    { path: '/organization/districtCoordinator', title: 'District Coordinator' },
    { path: '/organization/samithiConvenors', title: 'Samithi Convenors' },
    { path: '/organization/samithis', title: 'Samithis' },
    { path: '/organization/BhajanMandalis', title: 'Bhajan Mandalis' },

    { path: '/institutions/sssSchool', title: 'Sri Sathya Sai School' },
    { path: '/institutions/sssCollege', title: 'Sri Sathya Sai College' },

    { path: '/resources/videos', title: 'Videos' },
    { path: '/resources/audio', title: 'Audio' },
    { path: '/resources/DigitalLibrary', title: 'Digital Library' },
    { path: '/resources/Wallpapers', title: 'Wallpapers' },
    { path: '/resources/Presentations', title: 'Presentations' },
    { path: '/resources/TeachingAid', title: 'Teaching Aid' },
    { path: '/resources/BannerDesign', title: 'Banner Design' },
    { path: '/resources/SathyaSaiSpeak', title: 'SathyaSaiSpeak' },
    { path: '/resources/SummerCourse', title: 'Summer Course' },

    { path: '/events', title: 'Events' },
    { path: '/report', title: 'Report' },
    { path: '/ContactUs', title: 'Contact Us' },
    { path: '/PrivacyPolicy', title: 'Privacy Policy' },
    { path: '/Trademarks', title: 'Trademarks' },
    { path: '/Disclaimer', title: 'Disclaimer' },

  ]

  constructor(private router: Router) {}

  onSearch() {
    const query = this.searchQuery.trim().toLowerCase();

    // The dropdown only populates if 3 or more characters are present
    if (query.length >= 3) {
      this.filteredPages = this.pages.filter(p =>
        p.title.toLowerCase().includes(query)
      );
    } else {
      // Keep list empty if query is too short
      this.filteredPages = [];
    }

    this.searchQueryChange.emit(this.searchQuery);
  }

  handleKeyDown(event: any) { // Changed from KeyboardEvent to any
    if (this.filteredPages.length > 0) {
      this.navigateTo(this.filteredPages[0].path);
    }
  }

  displayFn(page: any): string {
    // This handles how the object looks if it were selected in the input
    return page && page.title ? page.title : page;
  }

  // src/app/shared/components/search-navigation/search-navigation.component.ts

  navigateTo(path: string) {
    if (path) {
      // 1. Perform the navigation
      this.router.navigate([path]);

      // 2. Clear the input and the results list
      this.searchQuery = '';
      this.filteredPages = [];

      // 3. Notify the parent (Header) so it can close the mobile menu
      this.onNavigate.emit();

      // 4. Update the parent's searchQuery variable via the Output
      this.searchQueryChange.emit('');
    }
  }
}
