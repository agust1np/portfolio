export interface Project {
  name: string;
  description: string;
  technologies: string[];
}

export const projects: Project[] = [
  {
    name: 'Che-Entende',
    description: 'A real-time Bolivian Sign Language translation system using LSTM.',
    technologies: ['Python', 'TensorFlow', 'OpenCV', 'Mediapipe', 'Matplotlib']
  },
  {
    name: 'Smells Fishy',
    description: 'A URL phishing detection system utilizing machine learning algorithms for classification.',
    technologies: ['Django', 'Python', 'Scikit-learn', 'Pandas', 'NumPy']
  },
  {
    name: 'Fierros & Bids',
    description: 'A full-stack auction system for automobiles featuring AWS object recognition for automation.',
    technologies: ['Bootstrap', 'JavaScript', 'Django', 'Amazon Rekognition']
  }
];