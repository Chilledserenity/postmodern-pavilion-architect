
import { ScenarioData } from '@/types/scenario';

export const scenarioData: ScenarioData = {
  title: "ArchHTC237 Postmodern Pavilion Design Challenge",
  description: "An immersive architectural design scenario for university students studying postmodernism",
  characters: [
    {
      id: "dr-chen",
      name: "Dr. Sarah Chen",
      title: "Lead Design Critic",
      description: "Postmodern theory specialist with focus on semiotic analysis",
      personality: "Analytical and intellectually rigorous, values theoretical depth",
      avatar: "/api/placeholder/400/400"
    },
    {
      id: "james-mitchell",
      name: "James Mitchell",
      title: "Community Representative",
      description: "Local community advocate representing public interests",
      personality: "Pragmatic and people-focused, concerned with accessibility",
      avatar: "/api/placeholder/400/400"
    },
    {
      id: "maria-santos",
      name: "Maria Santos",
      title: "Cultural Heritage Advisor",
      description: "Expert in Māori culture and Pacific Island architectural traditions",
      personality: "Diplomatic yet firm about cultural sensitivity and representation",
      avatar: "/api/placeholder/400/400"
    },
    {
      id: "dr-patel",
      name: "Dr. Raj Patel",
      title: "Sustainability Consultant",
      description: "Environmental design specialist and postmodern critique scholar",
      personality: "Detail-oriented and environmentally conscious, questions assumptions",
      avatar: "/api/placeholder/400/400"
    }
  ],
  scenes: [
    {
      id: 1,
      title: "Architectural Communication Strategy",
      description: "Your first challenge is developing a communication approach for your pavilion design.",
      context: "Dr. Chen leans forward: 'The committee needs to understand how you'll communicate your design's meaning to diverse audiences. Postmodern architecture rejects the modernist assumption of universal symbolic understanding.'",
      question: "What communication strategy will you employ for your pavilion?",
      options: [
        {
          id: "multivalent",
          title: "Multivalent Communication",
          description: "Multiple meaning layers allowing different interpretations",
          approach: "Design elements that can be read differently by various audiences",
          isCorrect: true,
          feedback: "Excellent! This demonstrates understanding of postmodern semiotic theory.",
          lectureReference: "As discussed in Lecture 3: 'Multivalent strategies acknowledge that architecture communicates differently to different people.'"
        },
        {
          id: "symbolic",
          title: "Symbolic Communication",
          description: "Clear symbolic references with intended meanings",
          approach: "Use universally recognized symbols and forms",
          isCorrect: false,
          feedback: "This approach risks modernist assumptions about universal understanding.",
          lectureReference: "Remember from Lecture 2: 'Postmodernism questions the modernist belief in universal symbols.'"
        },
        {
          id: "direct",
          title: "Direct Communication",
          description: "Explicit signage and educational materials",
          approach: "Rely primarily on text and explanatory elements",
          isCorrect: false,
          feedback: "While clear, this doesn't engage with architectural communication theory.",
          lectureReference: "Consider Lecture 3's discussion of architecture as a communicative medium beyond text."
        },
        {
          id: "neutral",
          title: "Neutral Communication",
          description: "Minimize symbolic content for broad appeal",
          approach: "Create forms that avoid specific cultural references",
          isCorrect: false,
          feedback: "Neutrality itself carries cultural assumptions that postmodernism challenges.",
          lectureReference: "Lecture 4 emphasized: 'There is no culturally neutral architecture.'"
        }
      ],
      correctFeedback: "Your multivalent approach shows sophisticated understanding of postmodern communication theory!",
      incorrectFeedback: "Consider how postmodern theory challenges assumptions about architectural communication."
    },
    {
      id: 2,
      title: "Pluralistic Design Approach",
      description: "Maria Santos asks about your approach to cultural representation and spatial diversity.",
      context: "Maria Santos speaks thoughtfully: 'Wynyard Point sits at the intersection of Māori, Pacific, and European histories. How will your pavilion acknowledge this complexity without tokenism?'",
      question: "How will you approach cultural pluralism in your design?",
      options: [
        {
          id: "spatial-pluralism",
          title: "Spatial Pluralism",
          description: "Different spaces reflecting different cultural approaches",
          approach: "Create varied spatial experiences honoring multiple traditions",
          isCorrect: true,
          feedback: "Excellent understanding of how space can embody cultural diversity!",
          lectureReference: "This reflects Lecture 5's concept: 'Spatial pluralism creates authentic cultural dialogue.'"
        },
        {
          id: "cultural-tokenism",
          title: "Cultural Tokenism",
          description: "Surface-level decorative elements from various cultures",
          approach: "Add cultural motifs and patterns as aesthetic features",
          isCorrect: false,
          feedback: "This superficial approach doesn't engage meaningfully with cultural complexity.",
          lectureReference: "Lecture 5 warned against 'tokenistic gestures that commodify culture.'"
        },
        {
          id: "universalism",
          title: "Cultural Universalism",
          description: "Focus on universal human experiences and needs",
          approach: "Design for shared human activities and emotions",
          isCorrect: false,
          feedback: "Universalism can erase important cultural differences and histories.",
          lectureReference: "Remember Lecture 4: 'Universal solutions often reflect dominant cultural perspectives.'"
        },
        {
          id: "framework",
          title: "Cultural Framework",
          description: "Establish guidelines for appropriate cultural engagement",
          approach: "Create protocols for cultural consultation and representation",
          isCorrect: false,
          feedback: "While important, frameworks alone don't constitute architectural design strategy.",
          lectureReference: "Lecture 5 emphasized that 'process must translate into spatial experience.'"
        }
      ],
      correctFeedback: "Your spatial pluralism approach demonstrates sophisticated cultural sensitivity!",
      incorrectFeedback: "Consider how architectural space itself can embody cultural respect and dialogue."
    },
    {
      id: 3,
      title: "Historical Context & Site Response",
      description: "Dr. Patel questions your approach to the site's industrial heritage and future development.",
      context: "Dr. Patel adjusts his glasses: 'Wynyard Point transforms from industrial port to public space. How will your pavilion engage with this temporal complexity—past, present, and future layers?'",
      question: "How will you address the site's historical complexity?",
      options: [
        {
          id: "time-binding",
          title: "Time-binding Integration",
          description: "Layer different temporal references in design elements",
          approach: "Weave industrial heritage, current use, and future aspirations together",
          isCorrect: true,
          feedback: "Excellent application of time-binding principles!",
          lectureReference: "This embodies Lecture 6's concept: 'Time-binding creates meaningful historical dialogue.'"
        },
        {
          id: "pastiche",
          title: "Historical Pastiche",
          description: "Combine nostalgic references to different historical periods",
          approach: "Mix architectural styles from various eras for visual interest",
          isCorrect: false,
          feedback: "Pastiche risks superficial historicism without meaningful engagement.",
          lectureReference: "Lecture 6 distinguished between 'nostalgic pastiche and critical historical engagement.'"
        },
        {
          id: "preservation",
          title: "Heritage Preservation",
          description: "Maintain and restore existing industrial structures",
          approach: "Focus on conserving authentic historical elements",
          isCorrect: false,
          feedback: "Pure preservation doesn't address contemporary needs and future possibilities.",
          lectureReference: "Lecture 6 noted: 'Static preservation can museumify living spaces.'"
        },
        {
          id: "futuristic",
          title: "Futuristic Vision",
          description: "Design for future technological and social possibilities",
          approach: "Create forward-looking spaces that anticipate change",
          isCorrect: false,
          feedback: "Future-focus alone disconnects from site history and current context.",
          lectureReference: "Remember Lecture 6: 'Disconnected futurism repeats modernist errors.'"
        }
      ],
      correctFeedback: "Your time-binding approach shows sophisticated temporal thinking!",
      incorrectFeedback: "Consider how architecture can meaningfully engage multiple time periods simultaneously."
    },
    {
      id: 4,
      title: "Balancing Popular & Architectural Appeal",
      description: "James Mitchell raises concerns about accessibility and public engagement with your design.",
      context: "James Mitchell speaks earnestly: 'This pavilion needs to work for everyone—architecture students, families, tourists, local workers. How do you balance sophisticated design with broad appeal?'",
      question: "How will you balance architectural sophistication with popular accessibility?",
      options: [
        {
          id: "layered-appeal",
          title: "Layered Appeal Strategy",
          description: "Multiple levels of engagement for different audiences",
          approach: "Design elements readable at different levels of architectural literacy",
          isCorrect: true,
          feedback: "Perfect understanding of how architecture can communicate across knowledge levels!",
          lectureReference: "This reflects Lecture 7's principle: 'Layered design creates inclusive sophistication.'"
        },
        {
          id: "democratic-simplification",
          title: "Democratic Simplification",
          description: "Reduce complexity for broader understanding",
          approach: "Simplify design elements to ensure universal comprehension",
          isCorrect: false,
          feedback: "Oversimplification can condescend to public intelligence and reduce architectural richness.",
          lectureReference: "Lecture 7 warned against 'dumbing down design' as patronizing."
        },
        {
          id: "programming",
          title: "Activity Programming",
          description: "Focus on popular activities and functions",
          approach: "Design around events, markets, and recreational activities",
          isCorrect: false,
          feedback: "Programming alone doesn't address architectural communication challenges.",
          lectureReference: "Lecture 7 emphasized that 'good programming requires good spatial design.'"
        },
        {
          id: "interpretive",
          title: "Interpretive Education",
          description: "Provide educational materials explaining design concepts",
          approach: "Add interpretive signage and guided tour programs",
          isCorrect: false,
          feedback: "External interpretation doesn't integrate architectural communication into the design itself.",
          lectureReference: "Remember Lecture 7: 'Architecture should communicate through experience, not just explanation.'"
        }
      ],
      correctFeedback: "Your layered approach demonstrates sophisticated understanding of inclusive design!",
      incorrectFeedback: "Consider how architecture can be both sophisticated and accessible without compromise."
    },
    {
      id: 5,
      title: "Committee Decision & Design Reflection",
      description: "The committee reviews your comprehensive approach and asks for final reflection.",
      context: "Dr. Chen nods approvingly: 'Your approach shows sophisticated understanding of postmodern principles. Before we conclude, let's examine how your strategy compares to a key postmodern precedent.'",
      question: "Reflecting on the Vanna Venturi House as a postmodern precedent, how does your pavilion embody similar principles?",
      options: [
        {
          id: "complexity-contradiction",
          title: "Complexity and Contradiction",
          description: "Embrace ambiguity and multiple readings in design",
          approach: "Create architectural elements that can be interpreted multiple ways",
          isCorrect: true,
          feedback: "Excellent connection to Venturi's seminal postmodern principles!",
          lectureReference: "This directly applies Lecture 8's analysis: 'Venturi championed complexity over simplicity.'"
        },
        {
          id: "historical-reference",
          title: "Historical Reference",
          description: "Include classical and vernacular architectural elements",
          approach: "Reference traditional architectural forms and details",
          isCorrect: false,
          feedback: "While Venturi used historical references, the key innovation was how he used them complexly.",
          lectureReference: "Lecture 8 noted: 'Venturi's historicism was critical, not nostalgic.'"
        },
        {
          id: "symbolic-communication",
          title: "Symbolic Communication",
          description: "Use clear architectural symbols and signs",
          approach: "Incorporate recognizable symbolic elements",
          isCorrect: false,
          feedback: "Venturi was more interested in ambiguous symbols than clear ones.",
          lectureReference: "Remember Lecture 8: 'Venturi preferred 'both/and' to 'either/or' thinking.'"
        },
        {
          id: "material-honesty",
          title: "Material Honesty",
          description: "Express structural and material properties clearly",
          approach: "Show how the building is constructed and what it's made from",
          isCorrect: false,
          feedback: "Material honesty was more of a modernist principle that Venturi questioned.",
          lectureReference: "Lecture 8 explained how 'Venturi challenged modernist orthodoxies including material expression.'"
        }
      ],
      correctFeedback: "Outstanding! You've successfully applied postmodern theory to contemporary design challenges.",
      incorrectFeedback: "Consider how Venturi's key innovations challenge modernist assumptions about architectural clarity."
    }
  ]
};
