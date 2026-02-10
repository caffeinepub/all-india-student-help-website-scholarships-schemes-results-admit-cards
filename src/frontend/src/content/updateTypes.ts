export enum UpdateCategory {
  SCHOLARSHIPS = 'scholarships',
  SCHEMES = 'schemes',
  RESULTS = 'results',
  ADMIT_CARDS = 'admit-cards',
  EDUCATION_NEWS = 'education-news',
  SCHOOL_EDUCATION = 'school-education',
  COMPETITIVE_EXAMS = 'competitive-exams',
}

export interface UpdateItem {
  id: string;
  title: string;
  category: UpdateCategory;
  date: string;
  excerpt: string;
  stateTags?: string[];
  body: string;
  imageUrl?: string;
}

// Map internal categories to user-facing labels
export function getCategoryLabel(category: UpdateCategory): string {
  switch (category) {
    case UpdateCategory.SCHOLARSHIPS:
      return 'Scholarship';
    case UpdateCategory.SCHEMES:
      return 'Scheme';
    case UpdateCategory.RESULTS:
    case UpdateCategory.COMPETITIVE_EXAMS:
      return 'Exam';
    case UpdateCategory.ADMIT_CARDS:
      return 'Exam';
    case UpdateCategory.EDUCATION_NEWS:
      return 'News';
    case UpdateCategory.SCHOOL_EDUCATION:
      return 'School';
    default:
      return 'News';
  }
}
