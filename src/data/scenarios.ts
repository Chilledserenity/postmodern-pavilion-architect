
import { ScenarioData } from '@/types/scenario';

export const scenarioData: ScenarioData = {
  title: "ArchHTC237 Postmodern Pavilion Design Challenge",
  description: "An immersive architectural design scenario for university students studying postmodernism",
  characters: [
    {
      id: "dr-chen",
      name: "Dr. Sarah Chen",
      title: "Architectural Historian",
      description: "Postmodern theory specialist with focus on semiotic analysis",
      personality: "Analytical and intellectually rigorous, values theoretical depth",
      avatar: "/api/placeholder/400/400"
    },
    {
      id: "james-mitchell",
      name: "James Mitchell",
      title: "Urban Planner",
      description: "Community representative and practical planning advocate",
      personality: "Pragmatic and people-focused, concerned with accessibility",
      avatar: "/api/placeholder/400/400"
    },
    {
      id: "maria-santos",
      name: "Maria Santos",
      title: "Community Advocate",
      description: "Local community representative focused on inclusive design",
      personality: "Passionate about community needs and genuine inclusivity",
      avatar: "/api/placeholder/400/400"
    },
    {
      id: "dr-patel",
      name: "Dr. Awhina Patel",
      title: "Cultural Heritage Representative",
      description: "Expert in cultural representation and diversity in architecture",
      personality: "Thoughtful about cultural sensitivity and meaningful engagement",
      avatar: "/api/placeholder/400/400"
    }
  ],
  scenes: [
    {
      id: 1,
      title: "Introduction and Project Brief",
      description: "Welcome to the concept design review meeting for the Wynyard Point community pavilion.",
      context: "Thank you for coming. As you know, Wynyard Quarter is a unique waterfront area with a rich history and a diverse community. We're looking for a pavilion design that can become a vibrant gathering place. In our brief we asked designers for a postmodern approach – something creative, symbolic, and tuned to context, in contrast to the bland modernist boxes we often see. We're excited to hear how you've tackled this challenge. Please walk us through your concept.",
      question: "Before we get into details, tell us about the design philosophy behind this pavilion. What is the concept or approach that guided your design?",
      options: [
        {
          id: "iconic-representation",
          title: "Iconic Representation Strategy",
          description: "Use recognizable forms that people connect with through visual similarity",
          approach: "Create pavilion profile echoing Auckland's volcanic cones, with entrance referencing harbour vessels",
          isCorrect: false,
          feedback: "Your reference to iconic representation shows understanding of Pierce's semiotic categories, and the connection to Jencks' work is appropriate. However, while this approach creates recognition, we're wondering about depth of engagement. Does the building have anything more to say after that initial recognition?",
          lectureReference: "This relates to Pierce's iconic signs, but consider Jencks' concept of multivalent architecture for deeper communication."
        },
        {
          id: "symbolic-encoding",
          title: "Symbolic Encoding Strategy", 
          description: "Embed symbolic content that reveals itself through interpretation",
          approach: "Integrate proportional systems from multiple traditions, with spaces representing past, present, and future",
          isCorrect: false,
          feedback: "Your symbolic approach demonstrates theoretical knowledge, but we're concerned about accessibility. If the symbolic content requires specialized knowledge to decode, are you creating architecture that speaks only to the initiated?",
          lectureReference: "While Barthes' cultural codes are relevant, consider Jencks' critique of architecture that excludes non-specialists."
        },
        {
          id: "direct-communicative",
          title: "Direct Communicative Strategy",
          description: "Focus on functional clarity and honest architectural expression",
          approach: "Use rectangular plan for clear meeting use, large glazed openings for transparency",
          isCorrect: false,
          feedback: "This describes classic modernist principles - Sullivan's functionalism and architectural honesty - but we specifically briefed for a postmodern approach. Jencks famously declared modernism 'dead' precisely because this reductive communication failed to engage with cultural complexity.",
          lectureReference: "Review Jencks' critique of modernist communication and Venturi's 'less is a bore' response to Mies."
        },
        {
          id: "multivalent-communication",
          title: "Multivalent Communication Strategy",
          description: "Create architecture that communicates on multiple levels simultaneously",
          approach: "Design elements readable differently by families, architects, and diverse community members",
          isCorrect: true,
          feedback: "Excellent! This demonstrates real understanding of postmodern communication theory. Your reference to multivalent architecture directly addresses Jencks' central insight that the best buildings speak to diverse audiences without talking down to any of them.",
          lectureReference: "This perfectly applies Jencks' concept of multivalent architecture and time-binding principles."
        }
      ],
      correctFeedback: "Outstanding understanding of multivalent communication principles!",
      incorrectFeedback: "Consider how postmodern theory challenges assumptions about architectural communication and audience."
    },
    {
      id: 2,
      title: "Design Communication Strategy",
      description: "The committee wants to understand how your pavilion will communicate with Wynyard Point's diverse audiences.",
      context: "Dr. Sarah Chen leans forward with genuine interest. 'Your opening remarks about contextual postmodernism have caught our attention. This pavilion will be encountered by thousands of people - families on weekend outings, tourists, office workers, architectural students. How exactly will your design communicate with this incredibly diverse audience? What's your strategy for making architecture that speaks meaningfully to people?'",
      question: "How will your design communicate effectively with Auckland's diverse community?",
      options: [
        {
          id: "iconic-forms",
          title: "Iconic Representation Strategy",
          description: "Use recognizable forms through visual similarity",
          approach: "Pavilion profile echoes volcanic cones, entrance references sailing vessels, weathering steel matches industrial context",
          isCorrect: false,
          feedback: "Your iconic approach shows understanding of Pierce's semiotic categories. The volcanic cone reference is clever - most Aucklanders would recognize that profile. However, while this creates recognition, what happens after that initial moment? Does the building have more to communicate?",
          lectureReference: "Pierce's iconic signs work through similarity, but consider Jencks' multivalent communication for deeper engagement."
        },
        {
          id: "symbolic-content",
          title: "Symbolic Encoding Strategy",
          description: "Embed symbolic content requiring interpretation",
          approach: "Structural grid combines European and Pacific proportional systems, three spaces represent temporal progression",
          isCorrect: false,
          feedback: "Your symbolic approach shows theoretical sophistication, but we're concerned about accessibility. If symbolic content requires specialized knowledge to decode, are you creating what Jencks criticized as architecture speaking only to the initiated?",
          lectureReference: "While Barthes' cultural codes are relevant, postmodernism aims to communicate with diverse audiences, not just cultural elites."
        },
        {
          id: "functional-clarity",
          title: "Direct Communicative Strategy", 
          description: "Emphasize functional clarity and honest expression",
          approach: "Rectangular plan indicates community use, glazed openings signal transparency, materials express structure",
          isCorrect: false,
          feedback: "You're describing classic modernist principles - Sullivan's functionalism and architectural honesty. But we specifically briefed for postmodern approach. Jencks declared modernism 'dead' because this reductive communication failed to engage cultural complexity.",
          lectureReference: "Review Jencks' critique of modernist universalism and Venturi's 'complexity and contradiction' principles."
        },
        {
          id: "multivalent-approach",
          title: "Multivalent Communication Strategy",
          description: "Create multiple communication levels simultaneously",
          approach: "Families see inviting community spaces, architects read sophisticated geometric systems, building practices time-binding",
          isCorrect: true,
          feedback: "Excellent! This demonstrates real understanding of multivalent architecture. Families see inviting spaces with playful forms, architects read sophisticated geometric systems, and the building connects to Wynyard's character without nostalgic copying. This is genuine inclusivity.",
          lectureReference: "Perfect application of Jencks' multivalent communication - buildings that speak to diverse audiences without condescension."
        }
      ],
      correctFeedback: "Your multivalent approach demonstrates sophisticated understanding of inclusive postmodern communication!",
      incorrectFeedback: "Consider how postmodern architecture can speak meaningfully to diverse audiences simultaneously."
    },
    {
      id: 3,
      title: "Pluralistic Design Approach",
      description: "The committee explores how your design will achieve genuine cultural pluralism in one of the world's most diverse cities.",
      context: "Maria Santos leans forward with intensity: 'Auckland has over 200 different ethnicities. We've seen too many projects that claim to be inclusive but speak mainly to educated middle-class audiences. Others try to represent diversity through superficial cultural symbols that feel tokenistic. We need to understand exactly how your design will achieve genuine pluralism.'",
      question: "How will your pavilion design achieve authentic pluralism for Auckland's diverse communities?",
      options: [
        {
          id: "spatial-pluralism",
          title: "Spatial Pluralism Strategy",
          description: "Create diverse spatial experiences within coherent whole",
          approach: "Include intimate alcoves, medium gathering areas, flexible hall with different acoustic and lighting conditions",
          isCorrect: true,
          feedback: "This demonstrates sophisticated understanding of how pluralism actually works in architecture. You're describing what Jencks meant by architectural variety - not just visual differences, but functional and experiential diversity that serves different community needs without tokenism.",
          lectureReference: "Excellent application of Jencks' architectural variety principle - functional diversity that serves authentic community differences."
        },
        {
          id: "cultural-symbols",
          title: "Cultural Symbols Integration",
          description: "Incorporate symbolic elements from major cultural communities",
          approach: "Entrance features Māori kowhaiwhai, Pacific navigation motifs, Asian garden elements, European proportions",
          isCorrect: false,
          feedback: "This approach reflects exactly the tokenistic multiculturalism that postmodern theorists warned against. You're describing cultural display rather than genuine pluralism. This makes communities feel their cultures are decoration rather than genuinely respected.",
          lectureReference: "Review Jencks' concept of pluralism vs. tokenism - genuine inclusion works through spatial flexibility, not symbolic decoration."
        },
        {
          id: "universal-accessibility",
          title: "Universal Accessibility Approach",
          description: "Create spaces that work equally well for everyone",
          approach: "Clean simple forms, excellent functionality, barrier-free access avoiding specific cultural references",
          isCorrect: false,
          feedback: "You're describing classic modernist universalism, not postmodern pluralism. Jencks criticized modernism's universalist claims as cultural imperialism that ignored local differences. Designing for 'everyone equally' often means designing for no one in particular.",
          lectureReference: "Review Jencks' critique of modernist universalism - postmodern pluralism embraces difference rather than avoiding it."
        },
        {
          id: "interpretive-flexibility",
          title: "Interpretive Flexibility Strategy",
          description: "Create neutral framework for community interpretation",
          approach: "Deliberately ambiguous forms with basic infrastructure, letting groups bring their own arrangements",
          isCorrect: false,
          feedback: "While community agency is important, this confuses architectural neutrality with postmodern pluralism. Jencks advocated for buildings with strong character that could still speak to diverse audiences, not blank slates that ask communities to do the architect's job.",
          lectureReference: "Postmodern pluralism works through architectural richness that accommodates different interpretations, not generic neutrality."
        }
      ],
      correctFeedback: "Your spatial pluralism approach demonstrates authentic understanding of inclusive design principles!",
      incorrectFeedback: "Consider how genuine pluralism works through spatial variety rather than symbolic representation or neutrality."
    },
    {
      id: 4,
      title: "Historical Context & Site Response",
      description: "The committee challenges you to address Wynyard Quarter's complex transformation from industrial port to mixed-use development.",
      context: "Dr. Patel gestures toward the window where construction cranes punctuate the skyline. 'Wynyard Quarter has undergone dramatic transformation - from working industrial port to upscale development. This raises fundamental questions about how new architecture should relate to place and history. The postmodern theorists criticized modernism's tabula rasa approach but also warned against nostalgic historicism.'",
      question: "How will your pavilion relate to Wynyard Quarter's layered history - both the industrial past and ongoing transformation?",
      options: [
        {
          id: "time-binding",
          title: "Time-binding Integration",
          description: "Create connections between past and present without nostalgic imitation",
          approach: "Incorporate weathered steel referencing industrial materiality, preserve existing foundations as landscape features",
          isCorrect: true,
          feedback: "This demonstrates excellent understanding of Jencks' time-binding concept. You're describing genuine historical connection without pastiche - using industrial materials in new ways rather than copying old forms. This creates temporal layering where different eras remain visible and interconnected.",
          lectureReference: "Perfect application of Jencks' time-binding - connecting past and present without nostalgic imitation or historical erasure."
        },
        {
          id: "radical-eclecticism",
          title: "Radical Eclecticism Approach",
          description: "Playfully mix architectural styles from different periods",
          approach: "Combine warehouse aesthetics, classical columns, maritime details, and glass curtain walls in ironic collage",
          isCorrect: false,
          feedback: "While you show awareness of postmodern attitudes toward history, you're misunderstanding key concepts. Jencks never advocated for arbitrary historical pastiche - he actually criticized mindless pastiche as postmodernism's weakness, not its strength.",
          lectureReference: "Review Jencks' distinction between meaningful historical engagement and superficial pastiche - time-binding differs from arbitrary mixing."
        },
        {
          id: "heritage-preservation",
          title: "Heritage Preservation Focus",
          description: "Prioritize authentic historical preservation and interpretation",
          approach: "Material matching with surviving structures, traditional construction methods, interpretive displays",
          isCorrect: false,
          feedback: "This approach misunderstands postmodern attitudes toward history. You're describing heritage preservation methodology, not contemporary architecture. The goal isn't to create a museum environment but to design for current needs while acknowledging historical context.",
          lectureReference: "Postmodern architecture creates new possibilities informed by history, not theme park recreations of the past."
        },
        {
          id: "future-oriented",
          title: "Future-oriented Transformation",
          description: "Embrace transformation toward high-tech urban district",
          approach: "Clean contemporary forms for young professionals and international visitors, complement corporate towers",
          isCorrect: false,
          feedback: "This describes exactly the modernist approach Jencks opposed. The tabula rasa mentality ignores historical context in favor of abstract future visions, disconnecting architecture from place and community while serving only a narrow demographic.",
          lectureReference: "Review postmodernism as critique of modernist future-oriented abstraction that ignores local context and community."
        }
      ],
      correctFeedback: "Your time-binding approach demonstrates sophisticated understanding of postmodern historical engagement!",
      incorrectFeedback: "Consider how postmodern architecture can engage meaningfully with history without copying or ignoring it."
    },
    {
      id: 5,
      title: "Balancing Popular & Architectural Appeal",
      description: "James Mitchell raises concerns about accessibility and public engagement with your sophisticated design approach.",
      context: "James Mitchell speaks earnestly: 'This pavilion needs to work for everyone—architecture students, families, tourists, local workers. How do you balance sophisticated design with broad appeal without talking down to anyone?'",
      question: "How will you balance architectural sophistication with popular accessibility?",
      options: [
        {
          id: "layered-appeal",
          title: "Layered Appeal Strategy",
          description: "Multiple levels of engagement for different audiences",
          approach: "Design elements readable at different levels of architectural literacy",
          isCorrect: true,
          feedback: "Perfect understanding of how architecture can communicate across knowledge levels! This reflects the layered design principle that creates inclusive sophistication without condescension.",
          lectureReference: "This exemplifies postmodern communication theory - architecture that works immediately while offering deeper engagement for those who seek it."
        },
        {
          id: "democratic-simplification",
          title: "Democratic Simplification",
          description: "Reduce complexity for broader understanding",
          approach: "Simplify design elements to ensure universal comprehension",
          isCorrect: false,
          feedback: "Oversimplification can condescend to public intelligence and reduce architectural richness. This approach risks 'dumbing down' design in a patronizing way.",
          lectureReference: "Postmodern theory advocates for complexity that serves diverse audiences, not simplification that assumes limited public capacity."
        },
        {
          id: "programming-focus",
          title: "Activity Programming",
          description: "Focus on popular activities and functions",
          approach: "Design around events, markets, and recreational activities",
          isCorrect: false,
          feedback: "Programming alone doesn't address architectural communication challenges. Good programming requires good spatial design to support it effectively.",
          lectureReference: "While programming is important, architecture should communicate through spatial experience, not just functional accommodation."
        },
        {
          id: "interpretive-education",
          title: "Interpretive Education",
          description: "Provide educational materials explaining design concepts",
          approach: "Add interpretive signage and guided tour programs",
          isCorrect: false,
          feedback: "External interpretation doesn't integrate architectural communication into the design itself. Architecture should communicate through experience, not just explanation.",
          lectureReference: "Postmodern architecture should be multivalent in its spatial design, not dependent on external educational materials."
        }
      ],
      correctFeedback: "Your layered approach demonstrates sophisticated understanding of inclusive design communication!",
      incorrectFeedback: "Consider how architecture can be both sophisticated and accessible through design strategy rather than simplification."
    },
    {
      id: 6,
      title: "Committee Decision & Design Reflection",
      description: "The committee reviews your comprehensive approach and asks for final reflection on postmodern precedents.",
      context: "Dr. Chen nods approvingly: 'Your approach shows sophisticated understanding of postmodern principles. Before we conclude, let's examine how your strategy compares to a key postmodern precedent - the Vanna Venturi House.'",
      question: "Reflecting on the Vanna Venturi House as a postmodern precedent, how does your pavilion embody similar principles?",
      options: [
        {
          id: "complexity-contradiction",
          title: "Complexity and Contradiction",
          description: "Embrace ambiguity and multiple readings in design",
          approach: "Create architectural elements that can be interpreted multiple ways, avoiding modernist clarity",
          isCorrect: true,
          feedback: "Excellent connection to Venturi's seminal postmodern principles! Your understanding of complexity over simplicity demonstrates deep grasp of how postmodern architecture challenges modernist assumptions.",
          lectureReference: "This directly applies Venturi's 'Complexity and Contradiction' principles - architecture that embraces ambiguity over false clarity."
        },
        {
          id: "historical-reference",
          title: "Historical Reference",
          description: "Include classical and vernacular architectural elements",
          approach: "Reference traditional architectural forms and details appropriately",
          isCorrect: false,
          feedback: "While Venturi used historical references, the key innovation was how he used them complexly and ambiguously, not simply referencing traditional forms.",
          lectureReference: "Venturi's historicism was critical and complex, not nostalgic - he transformed historical elements rather than copying them."
        },
        {
          id: "symbolic-communication",
          title: "Symbolic Communication",
          description: "Use clear architectural symbols and signs",
          approach: "Incorporate recognizable symbolic elements for public understanding",
          isCorrect: false,
          feedback: "Venturi was more interested in ambiguous symbols than clear ones. He preferred 'both/and' complexity to 'either/or' clarity.",
          lectureReference: "Remember Venturi's preference for ambiguous communication over modernist clarity - 'both/and' rather than 'either/or'."
        },
        {
          id: "material-honesty",
          title: "Material Honesty",
          description: "Express structural and material properties clearly",
          approach: "Show honest construction and material properties",
          isCorrect: false,
          feedback: "Material honesty was a modernist principle that Venturi questioned. He was more interested in architectural complexity than structural expression.",
          lectureReference: "Venturi challenged modernist orthodoxies including material expression - he valued architectural meaning over structural honesty."
        }
      ],
      correctFeedback: "Outstanding! You've successfully applied postmodern theory to contemporary design challenges with sophisticated understanding.",
      incorrectFeedback: "Consider how Venturi's key innovations challenged modernist assumptions about architectural clarity and communication."
    }
  ]
};
