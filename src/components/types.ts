export interface Contribution {
  date: string;
  count: number;
  level: 0 | 1 | 2 | 3 | 4;
}

export interface ApiResponse {
  total: {
    [year: number]: number;
    [year: string]: number; // 'lastYear'
  };
  contributions: Array<Contribution>;
}

export interface ApiErrorResponse {
  error: string;
}
