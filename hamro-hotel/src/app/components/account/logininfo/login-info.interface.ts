export interface PersonalInfo {
    name: string;
    designation: string;
    phoneNumber: string;
    email: string;
    dateOfBirth: string;
    gender: string;
    address: string;
    nationality: string;
    occupation: string;
    emergencyContact: {
      name: string;
      phoneNumber: string;
    };
    socialMedia: {
      linkedin: string;
      twitter: string;
      website: string;
    };
    bio: string;
  }
  
  export interface Button {
    label: string;
    icon: string;
    path: string;
  }
  
  export interface ProfileData {
    profileImg: string;
    personalInfo: PersonalInfo;
    buttons: Button[];
  }
  