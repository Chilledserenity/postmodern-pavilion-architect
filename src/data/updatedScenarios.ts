
import { Character, Scene } from '@/types/scenario';

export const updatedScenarioData = {
  characters: [
    {
      id: "1",
      name: "Dr. Maria Santos",
      title: "Cultural Heritage Specialist",
      description: "Expert in cultural preservation",
      personality: "Thoughtful and respectful",
      avatar: "/avatars/maria_santos_avatar.png"
    },
    {
      id: "2", 
      name: "James Mitchell",
      title: "Community Representative",
      description: "Local community advocate",
      personality: "Practical and community-focused",
      avatar: "/avatars/james_mitchell_avatar.png"
    },
    {
      id: "3",
      name: "Awhina Patel",
      title: "Urban Planning Expert", 
      description: "Urban planning specialist",
      personality: "Strategic and analytical",
      avatar: "/avatars/dr_patel_avatar.png"
    },
    {
      id: "4",
      name: "Dr. Sarah Chen",
      title: "Postmodern Architecture Theorist",
      description: "Leading architectural theorist",
      personality: "Academic and precise",
      avatar: "/avatars/dr_chen_avatar.png"
    }
  ] as Character[],

  scenes: [
    {
      id: 1,
      title: "Welcome to the Design Review",
      description: "You enter the modernist meeting room at Wynyard Point, Auckland. The committee is assembled to review your postmodern pavilion design proposal. Your challenge is to present a design that demonstrates sophisticated understanding of postmodern theory while being sensitive to Auckland's diverse cultural context.",
      context: "Initial committee meeting",
      question: "How do you begin the presentation?",
      speaker: "Dr. Sarah Chen",
      speakerText: "Welcome to the design review. We're here to evaluate your postmodern pavilion proposal for Wynyard Point. This is an important public space that needs to serve Auckland's diverse communities while demonstrating architectural innovation. Please begin by presenting your overall design approach.",
      options: [],
      correctFeedback: "",
      incorrectFeedback: ""
    },
    {
      id: 2,
      title: "Design Approach Presentation",
      description: "The committee is ready to hear your design approach. You need to present a strategy that demonstrates your understanding of postmodern theory while addressing the cultural and contextual needs of the site.",
      context: "Presenting design strategy",
      question: "How does your pavilion engage with postmodern architectural theory while responding to Auckland's multicultural context?",
      speaker: "Dr. Sarah Chen",
      speakerText: "Now, please present your overall design approach. How does your pavilion engage with postmodern architectural theory while responding to Auckland's multicultural context?",
      options: [
        {
          id: "historicist-approach",
          title: "Historicist Pastiche Approach",
          description: "Create a design that samples and recombines historical architectural styles from Auckland's colonial past, European settlement, and Māori traditional structures.",
          approach: "We're taking a historicist approach that samples and recombines architectural elements from Auckland's layered past.",
          feedback: "Dr. Sarah Chen: 'This approach shows understanding of postmodern historicism, but I'm concerned about the pastiche method. While Jencks celebrated radical eclecticism, simply combining historical elements can become superficial quotation rather than meaningful architectural communication.' Dr. Santos: 'I appreciate the attempt to include Māori elements, but using traditional structural forms as decorative elements could be seen as cultural appropriation rather than genuine cultural integration.' James Mitchell: 'As someone from the community, I'm worried this might feel like a theme park rather than a genuine gathering space.' Awhina Patel: 'The urban planning concern is whether this eclectic mix will create a coherent public space that serves diverse communities effectively.'",
          isCorrect: false,
          lectureReference: "Remember Jencks' warning about the difference between meaningful pluralism and mere stylistic pastiche."
        },
        {
          id: "cultural-symbols-integration",
          title: "Cultural Symbols Integration", 
          description: "Incorporate symbolic elements from Auckland's major cultural communities throughout the design, using geometric patterns and cultural motifs as architectural features.",
          approach: "We're incorporating symbolic elements from Auckland's major cultural communities throughout the design.",
          feedback: "Dr. Santos: 'I appreciate the intention to be inclusive, but using cultural symbols as decorative elements can be problematic. Māori kowhaiwhai patterns have deep spiritual meanings - they're not simply decorative motifs.' Dr. Sarah Chen: 'While Venturi did advocate for symbolic richness, simply applying cultural symbols as surface decoration doesn't create meaningful architectural communication.' James Mitchell: 'This feels like it might check diversity boxes without actually creating a welcoming space.' Awhina Patel: 'We need to consider whether symbolic representation translates into functional space that serves these communities' real needs.'",
          isCorrect: false,
          lectureReference: "Review Venturi's distinction between symbolic communication and mere applied decoration."
        },
        {
          id: "universal-accessibility",
          title: "Universal Accessibility Approach",
          description: "Focus on creating spaces that work equally well for everyone, using clean, simple forms with excellent functionality and barrier-free access.",
          approach: "Our strategy focuses on creating spaces that work equally well for everyone, regardless of cultural background.",
          feedback: "Dr. Sarah Chen: 'This approach misunderstands both postmodernism and universalism. What you're describing sounds more like late modernist universal design than postmodern architecture.' Dr. Santos: 'The idea that we can create truly neutral spaces ignores that all design decisions carry cultural assumptions.' Awhina Patel: 'This reflects what postmodern critics identified as modernism's fundamental failure - assuming human needs are universal when they're culturally shaped.'",
          isCorrect: false,
          lectureReference: "This approach reflects modernism's assumption that human needs are universal when they're actually culturally shaped."
        },
        {
          id: "multivalent-communication",
          title: "Multivalent Communication Strategy",
          description: "Design architecture that communicates on multiple levels simultaneously, allowing different users to read and understand the building in different ways based on their cultural background and architectural knowledge.",
          approach: "Our design employs what Charles Jencks called 'multivalent communication' - architecture that speaks on multiple levels simultaneously.",
          feedback: "Dr. Sarah Chen: 'Excellent! This demonstrates sophisticated understanding of Jencks' key insight that the best postmodern architecture communicates on multiple levels simultaneously.' Dr. Santos: 'I appreciate that this approach respects cultural difference without appropriating specific cultural symbols.' James Mitchell: 'This sounds like a space that could actually work for our community - flexible enough for different groups to use appropriately.' Awhina Patel: 'The loose programming concept is particularly strong from an urban planning perspective.'",
          isCorrect: true,
          lectureReference: "This reflects Jencks' core argument that the best postmodern architecture communicates on multiple levels simultaneously."
        }
      ],
      correctFeedback: "Excellent approach to multivalent communication!",
      incorrectFeedback: "The most effective approach would be to design architecture that communicates on multiple levels simultaneously, allowing different users to read and understand the building in different ways based on their cultural background and architectural knowledge. This reflects Jencks' concept of multivalent communication - the key insight of postmodern architecture."
    }
  ] as Scene[]
};
