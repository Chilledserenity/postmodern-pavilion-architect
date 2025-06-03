
import { Character, Scene } from '@/types/scenario';

export const updatedScenarioData = {
  characters: [
    {
      id: 1,
      name: "Dr. Maria Santos",
      title: "Cultural Heritage Specialist",
      avatar: "/avatars/maria_santos_avatar.png"
    },
    {
      id: 2,
      name: "James Mitchell",
      title: "Community Representative",
      avatar: "/avatars/james_mitchell_avatar.png"
    },
    {
      id: 3,
      name: "Dr. Priya Patel",
      title: "Urban Planning Expert",
      avatar: "/avatars/dr_patel_avatar.png"
    },
    {
      id: 4,
      name: "Dr. Robert Chen",
      title: "Postmodern Architecture Theorist",
      avatar: "/avatars/dr_chen_avatar.png"
    }
  ] as Character[],

  scenes: [
    {
      id: 1,
      title: "Welcome to the Design Review",
      description: "You enter the modernist meeting room at Wynyard Point, Auckland. The committee is assembled to review your postmodern pavilion design proposal. Your challenge is to present a design that demonstrates sophisticated understanding of postmodern theory while being sensitive to Auckland's diverse cultural context.",
      backgroundImage: "/backgrounds/wynyard_meeting_room_bg.jpg",
      speaker: "Dr. Robert Chen",
      speakerText: "Welcome to the design review. We're here to evaluate your postmodern pavilion proposal for Wynyard Point. This is an important public space that needs to serve Auckland's diverse communities while demonstrating architectural innovation. Please begin by presenting your overall design approach.",
      options: []
    },
    {
      id: 2,
      title: "Design Approach Presentation",
      description: "The committee is ready to hear your design approach. You need to present a strategy that demonstrates your understanding of postmodern theory while addressing the cultural and contextual needs of the site.",
      backgroundImage: "/backgrounds/wynyard_meeting_room_bg.jpg",
      speaker: "Dr. Robert Chen",
      speakerText: "Now, please present your overall design approach. How does your pavilion engage with postmodern architectural theory while responding to Auckland's multicultural context?",
      options: [
        {
          id: "historicist-approach",
          title: "Historicist Pastiche Approach",
          description: "Create a design that samples and recombines historical architectural styles from Auckland's colonial past, European settlement, and Māori traditional structures.",
          approach: "We're taking a historicist approach that samples and recombines architectural elements from Auckland's layered past. The pavilion will feature classical European colonnade elements alongside traditional Māori structural forms and Victorian-era decorative details. This creates what Jencks would call a 'radical eclecticism' - different architectural languages coexisting in one structure. The entrance portico uses simplified classical columns but tops them with traditional Māori carved elements. The main gathering space incorporates the spatial principles of a traditional wharenui but uses contemporary materials. Victorian-era fretwork patterns are reinterpreted in modern steel and glass installations.",
          feedback: "Dr. Chen: 'This approach shows understanding of postmodern historicism, but I'm concerned about the pastiche method. While Jencks celebrated radical eclecticism, simply combining historical elements can become superficial quotation rather than meaningful architectural communication.' Dr. Santos: 'I appreciate the attempt to include Māori elements, but using traditional structural forms as decorative elements could be seen as cultural appropriation rather than genuine cultural integration. We need to consider whether this approach truly honors the cultures it references or merely uses them as aesthetic resources.' James Mitchell: 'As someone from the community, I'm worried this might feel like a theme park rather than a genuine gathering space. Will people actually want to use this space, or will it feel like a museum exhibit?' Dr. Patel: 'The urban planning concern is whether this eclectic mix will create a coherent public space that serves diverse communities effectively, or whether it might inadvertently exclude groups through its heavy historical referencing.'",
          isCorrect: false,
          lectureReference: "Remember Jencks' warning about the difference between meaningful pluralism and mere stylistic pastiche. Consider how postmodern architecture can engage with cultural diversity without appropriating or superficially combining cultural elements."
        },
        {
          id: "cultural-symbols-integration",
          title: "Cultural Symbols Integration",
          description: "Incorporate symbolic elements from Auckland's major cultural communities throughout the design, using geometric patterns and cultural motifs as architectural features.",
          approach: "We're incorporating symbolic elements from Auckland's major cultural communities throughout the design. The entrance features geometric patterns inspired by Māori kowhaiwhai, while the main gathering space includes Pacific navigation motifs and Asian-influenced garden elements. European classical proportions provide the underlying organizational structure. This follows what Robert Venturi described as 'inclusive symbolism' - bringing together diverse cultural languages in one architectural composition that represents our multicultural society.",
          feedback: "Dr. Santos: 'I appreciate the intention to be inclusive, but using cultural symbols as decorative elements can be problematic. Māori kowhaiwhai patterns have deep spiritual and genealogical meanings - they're not simply decorative motifs to be applied to buildings. Similarly, Pacific navigation symbols carry profound cultural significance that goes far beyond their visual appeal.' Dr. Chen: 'While Venturi did advocate for symbolic richness in architecture, he was primarily concerned with how buildings communicate through signs and symbols in their broader urban context. Simply applying cultural symbols as surface decoration doesn't necessarily create meaningful architectural communication.' James Mitchell: 'This feels like it might check diversity boxes without actually creating a space that feels welcoming to all these communities. Will people from these cultures actually recognize their traditions in these symbolic applications, or might they feel their heritage has been reduced to patterns?' Dr. Patel: 'From a planning perspective, we need to consider whether symbolic representation actually translates into functional space that serves these communities' real needs.'",
          isCorrect: false,
          lectureReference: "Review Venturi's distinction between symbolic communication and mere applied decoration. Consider how postmodern architecture can engage with cultural meaning without reducing cultures to visual symbols."
        },
        {
          id: "universal-accessibility",
          title: "Universal Accessibility Approach",
          description: "Focus on creating spaces that work equally well for everyone, using clean, simple forms with excellent functionality and barrier-free access.",
          approach: "Our strategy focuses on creating spaces that work equally well for everyone, regardless of cultural background or architectural knowledge. We're following what Jencks called 'democratic modernism' - clean, simple forms with excellent functionality and barrier-free access. The design avoids specific cultural references that might exclude some groups, instead emphasizing universal human needs like shelter, gathering, and social connection. High-quality materials and generous proportions ensure the space feels welcoming to all users.",
          feedback: "Dr. Chen: 'I'm concerned this approach misunderstands both postmodernism and universalism. What you're describing sounds more like late modernist universal design principles than postmodern architecture. Jencks' democratic modernism wasn't about avoiding cultural content - it was about making architecture that could communicate on multiple levels simultaneously.' Dr. Santos: 'While accessibility is crucial, the idea that we can create truly 'neutral' or 'universal' spaces ignores the reality that all design decisions carry cultural assumptions. The notion that avoiding cultural references creates inclusivity can actually reinforce dominant cultural norms while appearing to be inclusive.' Dr. Patel: 'This approach reflects what postmodern critics identified as modernism's fundamental failure - the assumption that human needs are universal when they're actually deeply shaped by cultural, social, and historical contexts.' Outcome: This response confuses universal design principles with postmodern pluralism and misattributes concepts to Jencks. Please review the lecture content on modernism vs. postmodernism and Jencks' critique of universalist approaches. Consider how postmodern pluralism differs from modernist universalism, then try again.",
          isCorrect: false,
          lectureReference: "This approach reflects what postmodern critics identified as modernism's fundamental failure - the assumption that human needs are universal when they're actually deeply shaped by cultural, social, and historical contexts."
        },
        {
          id: "multivalent-communication",
          title: "Multivalent Communication Strategy",
          description: "Design architecture that communicates on multiple levels simultaneously, allowing different users to read and understand the building in different ways based on their cultural background and architectural knowledge.",
          approach: "Our design employs what Charles Jencks called 'multivalent communication' - architecture that speaks on multiple levels simultaneously. The pavilion uses a layered communication strategy where the same architectural elements can be read differently by users with different cultural backgrounds and levels of architectural knowledge. For example, the main structural system uses a post-and-beam framework that can be read as contemporary engineering by some users, as reminiscent of traditional Pacific construction by others, and as a postmodern commentary on classical structural systems by those familiar with architectural history. The spatial organization follows what we might call 'loose programming' - spaces that can accommodate different cultural approaches to gathering and social interaction. Rather than prescribing specific cultural meanings, the design provides what Venturi called 'both-and' solutions - spaces that can simultaneously serve multiple functions and cultural practices. The material palette uses local Auckland volcanic stone in ways that reference both contemporary construction techniques and traditional building methods, allowing the building to communicate differently to different viewers based on their cultural and technical knowledge.",
          feedback: "Dr. Chen: 'Excellent! This demonstrates sophisticated understanding of Jencks' key insight that the best postmodern architecture communicates on multiple levels simultaneously. You're showing how the same architectural elements can carry different meanings for different users, which is exactly what Jencks meant by multivalent communication.' Dr. Santos: 'I appreciate that this approach respects cultural difference without appropriating specific cultural symbols. By creating spaces that can accommodate different cultural practices rather than prescribing them, you're showing genuine sensitivity to Auckland's diversity.' James Mitchell: 'This sounds like a space that could actually work for our community - flexible enough for different groups to use in ways that make sense for them, but thoughtful enough to feel intentionally designed rather than just generic.' Dr. Patel: 'The loose programming concept is particularly strong from an urban planning perspective. This kind of flexible, multi-use space is exactly what successful public spaces need in diverse urban contexts.'",
          isCorrect: true,
          lectureReference: "This reflects Jencks' core argument that the best postmodern architecture communicates on multiple levels simultaneously, allowing different users to understand and engage with buildings in different ways based on their knowledge and cultural background."
        }
      ],
      incorrectFeedback: "The most effective approach would be to design architecture that communicates on multiple levels simultaneously, allowing different users to read and understand the building in different ways based on their cultural background and architectural knowledge. This reflects Jencks' concept of multivalent communication - the key insight of postmodern architecture."
    }
  ] as Scene[]
};
