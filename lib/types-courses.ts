export type CourseLevel = "Beginner" | "Intermediate" | "Advanced" | "Professional";

export type CourseType = "featured" | "self-directed" | "accredited";

export interface Course {
  id: string;
  code: string;
  titleEn: string;
  titleKm: string;
  descriptionEn: string;
  descriptionKm: string;
  categoryEn: string;
  categoryKm: string;
  providerId: string;
  providerNameEn: string;
  providerNameKm: string;
  durationHours: number;
  totalModules: number;
  level: CourseLevel;
  type: CourseType;
  isAccredited: boolean;
  accreditationBody?: string;
  enrollmentStatus: "Open" | "Enrolling" | "Completed";
  ratingScore: number;
  enrolledStudentsCount: number;
  tags: string[];
}

export interface TrainingProvider {
  id: string;
  code: string;
  nameEn: string;
  nameKm: string;
  institutionTypeEn: string;
  institutionTypeKm: string;
  accreditationStatus: string;
  totalCoursesOffered: number;
  location: string;
  descriptionEn: string;
  descriptionKm: string;
  establishedYear: number;
  contactEmail: string;
}

export interface CourseCategoryItem {
  id: string;
  nameEn: string;
  nameKm: string;
  code: string;
  coursesCount: number;
}
