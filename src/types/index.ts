
export interface Track {
  id: string;
  title: string;
  shortTitle: string;
  description: string;
  theoreticalAspects: string;
  methods: string;
  tools: string[];
  project: {
    name: string;
    focus: string;
    startDate: string;
    endDate: string;
  };
  icon: string;
  image: string;
  bgGradient: string;
}

export interface Module {
  id: number;
  title: string;
}

export interface Instructor {
  id: string;
  name: string;
  role: string;
  specialization: string;
  bio: string;
  image: string;
  tags: string[];
  linkedin?: string;
}

export interface FAQ {
  id: number;
  question: string;
  answer: string;
}
