
import { Track, Module, Instructor, FAQ, Publication, Management } from '../types';

export const PROGRAM_NAME = "Specialized Bioinformatics Training Program (SBTP)";
export const ORGANIZATION = "DeepBio Ltd.";
export const PARTNERS = "Big Bioinformatics Lab & CHIRAL";

export const TRACKS: Track[] = [
  {
    id: "cancer",
    title: "Track 1: Cancer Genomics",
    shortTitle: "Cancer Biology",
    description: "Decoding molecular circuitry of cancer to identify biomarkers and precision therapeutic targets.",
    theoreticalAspects: "Cancer Biology, Immunology and Biomarkers",
    methods: "Meta analysis of bulk and single-cell RNA-Seq (publicly available data)",
    tools: ["R (Bulk RNA-Seq)", "Linux", "Python (scRNA-Seq)"],
    project: {
      name: "Tumor Microenvironment Heterogeneity in Triple-Negative Breast Cancer",
      focus: "Investigating novel therapeutic targets and understanding cellular mechanisms",
      startDate: "February 25, 2026",
      endDate: "February 28, 2026"
    },
    icon: "🔬",
    image: "/images/tracks/CancerGenomics.png",
    bgGradient: "from-rose-500/20 to-purple-600/20"
  },
  {
    id: "neuro",
    title: "Track 2: Neurogenomics",
    shortTitle: "Neuroscience",
    description: "Mapping how genetic and regulatory variants influence distinct brain cell types in disorders like Alzheimer's and Schizophrenia.",
    theoreticalAspects: "Neurobiology, Immunology, and Biomarkers",
    methods: "Meta analysis of bulk and single-cell RNA-Seq (publicly available data)",
    tools: ["R (Bulk RNA-Seq)", "Linux", "Python (scRNA-Seq)"],
    project: {
      name: "Exploring molecular pathways of brain function and identifying biomarkers",
      focus: "Exploring molecular pathways of brain function and identifying biomarkers",
      startDate: "February 25, 2026",
      endDate: "February 28, 2026"
    },
    icon: "🧠",
    image: "/images/tracks/Neurogenomics.png",
    bgGradient: "from-blue-500/20 to-indigo-600/20"
  },
  {
    id: "infectious",
    title: "Track 3: NGS for Infectious Diseases",
    shortTitle: "Infectious Diseases",
    description: "Studying host-pathogen interactions for diagnosis, treatment, and prevention using cutting-edge NGS techniques.",
    theoreticalAspects: "Molecular Biology, Transcriptomics",
    methods: "Proteomics, Molecular Dynamic Simulations, Molecular Docking",
    tools: ["RNA-Seq", "FastQC", "Trimmomatic", "Python", "Linux", "BLAST"],
    project: {
      name: "Dual Single-Cell Transcriptomics of Host-Pathogen Interactions in Bacterial Infections",
      focus: "Studying host-path pathogen interactions for diagnosis, treatment, and prevention",
      startDate: "February 25, 2026",
      endDate: "February 28, 2026"
    },
    icon: "🦠",
    image: "/images/tracks/NGSforInfectiousDiseases.png",
    bgGradient: "from-teal-500/20 to-emerald-600/20"
  },
  {
    id: "agri",
    title: "Track 4: AgriBioinformatics",
    shortTitle: "AgriBioinformatics",
    description: "Applying computational approaches to crop genomics for climate-resilient agriculture.",
    theoreticalAspects: "Plant Biology, Abiotic Stress, Multi-Omics",
    methods: "Integrative multi-omic meta-analysis",
    tools: ["Python Ecosystem", "R", "Linux"],
    project: {
      name: "Pan-Crop Abiotic Stress Response: Multi-Omic Meta-Analysis",
      focus: "Applying computational approaches to crop genomics and plant biology",
      startDate: "February 25, 2026",
      endDate: "February 28, 2026"
    },
    icon: "🌾",
    image: "/images/tracks/AgriBioinformatics.png",
    bgGradient: "from-amber-500/20 to-orange-600/20"
  }
];

export const MODULES: Module[] = [
  { id: 1, title: "NGS 101: Intro to Next-Generation Sequencing" },
  { id: 2, title: "360° Overview of Scientific Literature Review" },
  { id: 3, title: "Linux Command Line Fundamentals" },
  { id: 4, title: "Bulk RNA-seq: Reads to Count Matrix" },
  { id: 5, title: "Single-cell RNA-seq: Raw Reads to Count Matrix" },
  { id: 6, title: "Fundamentals of R: Part 1" },
  { id: 7, title: "Fundamentals of R: Part 2" },
  { id: 8, title: "Differential Expression Analysis with R: Part 1" },
  { id: 9, title: "Differential Expression Analysis with R: Part 2" },
  { id: 10, title: "Fundamentals of Python: Part 1" },
  { id: 11, title: "Fundamentals of Python: Part 2" },
  { id: 12, title: "Single-cell RNA-seq with Python: Part 1" },
  { id: 13, title: "Single-cell RNA-seq with Python: Part 2" },
  { id: 14, title: "Fundamentals of AI for Life Sciences: Part 1" },
  { id: 15, title: "Fundamentals of AI for Life Sciences: Part 2" },
  { id: 16, title: "Scientific Writing in Bioinformatics Research" },
];

export const INSTRUCTORS: Instructor[] = [
  {
    id: "inst-jubayer",
    name: "Md. Jubayer Hossain",
    role: "Founder & CEO, DeepBio Ltd.",
    specialization: "Bioinformatics Research",
    bio: "Md. Jubayer Hossain is the Founder & CEO of DeepBio Ltd. He serves as Faculty at the Center for Bioinformatics Learning Advancement and Systematics Training (cBLAST), University of Dhaka, and is a Visiting Researcher at Daffodil International University.",
    image: "/images/instructors/jubayer.png",
    tags: ["Founder", "CEO", "cBLAST", "Researcher"],
    linkedin: "https://www.linkedin.com/in/hossainmj/"
  },
  {
    id: "inst-muhib",
    name: "Muhibullah Shahjan",
    role: "Research Assistant, Big Bioinformatics Lab, CHIRAL",
    specialization: "Data Analysis",
    bio: "Mr. Shahjan is a Research Assistant at Big Bioinformatics Lab, focusing on bioinformatics research and data analysis to support healthcare innovations.",
    image: "/images/instructors/muhib.jpg",
    tags: ["Data Analysis", "Healthcare Innovation"],
    linkedin: "https://www.linkedin.com/in/muhibullah-shahjahan/"
  },
 
  {
    id: "inst-fuad",
    name: "Muntasim Fuad",
    role: "Research Assistant, Big Bioinformatics Lab, CHIRAL",
    specialization: "Pipeline Development",
    bio: "Mr. Fuad is a Research Assistant at Big Bioinformatics Lab, contributing to bioinformatics research and the development of pipeline applications in healthcare.",
    image: "/images/instructors/fuad.jpeg",
    tags: ["Pipelines", "HealthTech"],
    linkedin: "https://www.linkedin.com/in/muntasim-fuad/"
  },
  {
    id: "inst-billah",
    name: "Md. Mohtasim Billah",
    role: "Research Assistant, Big Bioinformatics Lab, CHIRAL",
    specialization: "Computational Tools",
    bio: "Mr. Billah is a Research Assistant at Big Bioinformatics Lab, contributing to bioinformatics research and the development of computational tools for healthcare.",
    image: "/images/instructors/rifat.png",
    tags: ["Computational Tools", "Healthcare"],
    linkedin: "https://www.linkedin.com/in/md-mohtasim-billah/"
  },
  {
    id: "inst-sajjad",
    name: "Sajjad Hossain",
    role: "Research Assistant, Big Bioinformatics Lab, CHIRAL",
    specialization: "Innovative Solutions",
    bio: "Mr. Hossain is a Research Assistant at Big Bioinformatics Lab, focusing on bioinformatics research and the development of innovative solutions in healthcare.",
    image: "/images/instructors/sajjad.jpg",
    tags: ["Innovation", "Healthcare Solutions"],
    linkedin: "https://www.linkedin.com/in/sajjad-hossen-50a34b2b6/"
  },
  {
    id: "inst-wahidul",
    name: "Md. Wahidul Islam",
    role: "Group Leader, Wet Lab, CHIRAL",
    specialization: "Microbial Genomics",
    bio: "Mr. Islam is a microbiologist at DeepBio Limited, specializing in microbial genomics and its applications in healthcare.",
    image: "/images/instructors/wahidul.jpg",
    tags: ["Microbiology", "Genomics", "Wet Lab"],
    linkedin: "https://www.linkedin.com/in/islammw/"
  }
];

export const MANAGEMENT: Management[] = [
  {
    id: "mgmt-nishat",
    name: "Nishat Mim",
    role: "Program Coordinator",
    image: "/images/management/nishat.jpg"
  },
  {
    id: "mgmt-tajrian",
    name: "Tajrian Rahma",
    role: "Finance Manager",
    image: "/images/management/tajrian.jpg"
  },
  {
    id: "mgmt-najnin",
    name: "Najnin Suktara",
    role: "Academic Operations Manager",
    image: "/images/management/suktara.jpg"
  }
];

export const BENEFITS = [
  "Research Assistantship Opportunity with Big Bioinformatics Lab",
  "Hands-on research experience in AI and Data-driven Biology",
  "Training in omics data analysis & manuscript preparation",
  "Opportunity for high-impact scientific publications",
  "Mentorship for Graduate School/International Fellowships",
  "Learn to use high-performance computing resources and cloud platforms"
];

export const KEY_STATS = [
  { label: "Duration", value: "60 Days" },
  { label: "Total Slots", value: "60 Seats" },
  { label: "Format", value: "Online Hands-on" },
  { label: "Time", value: "2-4 PM (BST)" }
];

export const APPLICATION_URL = "https://forms.gle/3TRAdJRZpV8kXPsn9";

export const FAQS: FAQ[] = [
  {
    id: 1,
    question: "Who is eligible to apply for SBTP?",
    answer: "The program is open to B.Sc. Honors or Master's students in Bio-sciences, Computer Science, Mathematics, or Public Health. You should have strong motivation for pursuing M.Sc./PhD in Computational Biology and be able to commit 15–20 hours per week for lab work."
  },
  {
    id: 2,
    question: "What are the prerequisites for joining this program?",
    answer: "No prior bioinformatics experience is required. However, basic computer skills and enthusiasm for learning programming (R, Python, Linux) are essential. We will teach everything from fundamentals to advanced concepts during the 60-day intensive training."
  },
  {
    id: 3,
    question: "What is the program duration and schedule?",
    answer: "SBTP is a 60-day intensive online program with live sessions from 2 PM to 4 PM (BST). The program includes 16 comprehensive modules covering NGS technology, data analysis, AI applications, and scientific writing."
  },
  {
    id: 4,
    question: "How much does the program cost?",
    answer: "The standard fee is 10,200 BDT (99 USD). Early bird discount of 30% is available for enrollment before February 18, 2026, bringing the cost down to 7,140 BDT (69 USD). Limited to 15 slots per track."
  },
  {
    id: 5,
    question: "What are the specialization tracks available?",
    answer: "We offer 4 specialized tracks: Cancer Genomics, Neurogenomics, NGS for Infectious Diseases, and AgriBioinformatics. Each track includes tailored projects and domain-specific training in addition to core bioinformatics modules."
  },
  {
    id: 6,
    question: "Will I receive a certificate after completion?",
    answer: "Yes, upon successful completion of the program and project work, you will receive a certificate from DeepBio Ltd. Additionally, high-performing students may get Research Assistantship opportunities with Big Bioinformatics Lab."
  },
  {
    id: 7,
    question: "What kind of projects will I work on?",
    answer: "You'll work on real-world research projects specific to your chosen track, such as analyzing tumor microenvironment in cancer, exploring brain cell types in neurological disorders, studying host-pathogen interactions, or crop genomics for climate resilience."
  },
  {
    id: 8,
    question: "What technical requirements do I need?",
    answer: "You need a PC/Laptop with at least 8-16 GB RAM (SSD storage preferred) and stable high-speed internet. Most computational work will be done on cloud platforms (Google Colab) and HPC resources, which we provide access to."
  },
  {
    id: 9,
    question: "Can I work with other research groups during the program?",
    answer: "During the project period (12-18 months post-training), students cannot engage with other research groups except for university thesis work. This exclusive policy ensures focused, high-quality research experience and timely project completion."
  },
  {
    id: 10,
    question: "What career opportunities will this program open up?",
    answer: "SBTP prepares you for M.Sc./PhD programs in Computational Biology, bioinformatics research positions, data analysis roles in biotech/pharma companies, and provides mentorship for international fellowships. You'll also gain experience in scientific publication."
  }
];
export const PUBLICATIONS = [
  {
    id: "pub-1",
    title: "Pan-cancer analysis reveals immunological and prognostic significance of CCT5 in human tumors",
    authors: "Ahmed, M. Z., Billah, M. M., Ferdous, J., & Hossain, M. J.",
    journal: "Scientific Reports",
    year: 2025,
    volume: "15",
    pages: "14405",
    doi: "10.1038/s41598-025-88339-z",
    link: "https://doi.org/10.1038/s41598-025-88339-z",
    image: "/images/papers/cct5.jpg",
  },
  {
    id: "pub-2",
    title: "Comprehensive bioinformatics analysis reveals prognostic significance and immunological roles of WNT gene family in breast cancer",
    authors: "Fariha, F. T. J., Fuad, M., Saha, C. S., Hossen, S., & Hossain, M. J.",
    journal: "Scientific Reports",
    year: 2025,
    volume: "15",
    pages: "34490",
    doi: "10.1038/s41598-025-13315-6",
    link: "https://doi.org/10.1038/s41598-025-13315-6",
    image: "/images/papers/wnt.jpg",
  },
  {
    id: "pub-3",
    title: "A meta-analysis of public RNA-Seq data identifies conserved stress responses in rainbow trout",
    authors: "Bari, S. M., Fuad, M., & Hossain, M. J.",
    journal: "BMC Genomics",
    year: 2025,
    volume: "26",
    pages: "999",
    doi: "10.1186/s12864-025-12127-2",
    link: "https://doi.org/10.1186/s12864-025-12127-2",
    image: "/images/papers/rnaseq-meta.jpg",
  }
];
