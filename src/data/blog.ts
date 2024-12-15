export interface BlogPost {
  id: string;
  title: string;
  project: string;
  content: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: 'che-entende',
    title: 'Breaking Communication Barriers',
    project: 'Che-Entende',
    content: `Imagine a world where technology bridges the gap between silence and sound. 
    This vision drove us to create Che-Entende, a project that transcends mere technical 
    innovation. Before diving into code, we took an extraordinary journey into Bolivia's 
    deaf community, where we discovered that sign language is a beautiful tapestry of 
    expression, culture, and identity. As someone deeply fascinated by the intersection of technology and social impact, 
    Che-Entende represents more than just a technical achievement. The project emerged from 
    our immersion in Bolivia's deaf community, where we spent valuable time with teachers and 
    students at the local deaf school.

    <img src="/blog media/escuela de sordos.jpg" alt="School Visit" style="width:100%;margin:1rem 0;"/>

    Working closely with the deaf community transformed our perspective entirely. We learned 
    that effective communication isn't just about translation - it's about understanding, 
    respect, and inclusion. Using Python and TensorFlow's powerful capabilities combined with 
    MediaPipe's precise hand tracking, we began translating basic greetings. Each successful 
    translation wasn't just a technical victory; it was a moment of connection, a bridge being built.

    <img src="/blog media/traduccion saludos.jpg" alt="Translation Demo" style="width:100%;margin:1rem 0;"/>

    As we explored the possibilities of our system, we expanded it to include translations for 
    Bolivia's departments. Despite hardware limitations that prevented further expansion, each 
    feature we implemented represented another step toward breaking communication barriers.

    <img src="/blog media/departamentos.jpg" alt="Departments Translation" style="width:100%;margin:1rem 0;"/>

    The project's impact resonated beyond our expectations, earning first place at TecnoUPSA 2024. 
    But the real victory wasn't in the award - it was in the smiles of students and teachers 
    who could now communicate more freely, in the possibilities we opened for future innovations, 
    and in the reminder that technology is at its best when it serves humanity.

    <img src="/blog media/premiacion.jpg" alt="Award Ceremony" style="width:100%;margin:1rem 0;"/>`
  },
  {
    id: 'smells-fishy',
    title: 'Securing the Digital Frontier',
    project: 'Smells Fishy',
    content: `Phishing remains an evolving challenge in cybersecurity, one that's particularly 
    difficult to completely eliminate as attackers constantly develop new methods. This reality 
    sparked my curiosity to explore how machine learning could help identify potential threats, 
    leading to the development of Smells Fishy.

    <img src="/blog media/phishing.png" alt="Phishing Detection" style="width:100%;margin:1rem 0;"/>

    The project served as my valuable introduction to Python libraries and machine learning concepts. 
    Using Django and Scikit-learn, I built a system that attempts to identify suspicious URLs. 
    While no solution can guarantee perfect protection, this experience enhanced my understanding 
    of both cybersecurity challenges and the practical implementation of machine learning solutions.`
  },
  {
    id: 'fierros-bids',
    title: 'Revolutionizing Auto Commerce',
    project: 'Fierros & Bids',
    content: `In collaboration with a local auto dealership, I developed a prototype for an online 
    vehicle auction platform to bring traditional car auctions into the digital age. The project 
    started with a clear focus: implementing a reliable real-time bidding system for vehicle 
    auctions in Bolivia.

    <img src="/blog media/cars home.png" alt="Platform Home" style="width:100%;margin:1rem 0;"/>

    Using Daphne and WebSockets, I built the core live bidding functionality, ensuring that 
    bids update instantly for all participants. The backend, powered by Django and Redis, 
    handles user authentication and maintains bid synchronization across all active sessions. 

    <img src="/blog media/cars auctions.jpg" alt="Auction Interface" style="width:100%;margin:1rem 0;"/>

    While the platform successfully demonstrates the core auction functionality, future 
    implementation plans include integrating a payment gateway. This feature is currently 
    pending due to the strict requirements and regulations that payment processors have 
    for auction platforms in Bolivia.`
  }
];
