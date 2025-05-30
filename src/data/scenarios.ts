
import { ScenarioData } from '@/types/scenario';

export const scenarioData: ScenarioData = {
  title: "ArchHTC237 Postmodern Pavilion Design Challenge",
  description: "An interactive architectural design scenario exploring postmodern principles",
  characters: [
    {
      id: "dr-chen",
      name: "Dr. Chen",
      title: "Architectural Historian", 
      description: "Postmodern theory and semiotics specialist",
      personality: "Analytical and theoretical, values conceptual rigor",
      avatar: "/api/placeholder/400/400"
    },
    {
      id: "james-mitchell",
      name: "James Mitchell",
      title: "Urban Planning Consultant",
      description: "Community engagement and site context expert", 
      personality: "Practical and collaborative, focuses on real-world application",
      avatar: "/api/placeholder/400/400"
    },
    {
      id: "maria-santos", 
      name: "Maria Santos",
      title: "Community Advocate",
      description: "Cultural diversity and public engagement specialist",
      personality: "Passionate and inclusive, represents community interests",
      avatar: "/api/placeholder/400/400"
    },
    {
      id: "dr-patel",
      name: "Dr. Patel", 
      title: "Cultural Heritage Specialist",
      description: "Multicultural design and historical context expert",
      personality: "Thoughtful and sensitive, bridges culture and design",
      avatar: "/api/placeholder/400/400"
    }
  ],
  scenes: [
    {
      id: 1,
      title: "Welcome to the Design Review",
      description: "Introduction to the committee and project context",
      context: "Welcome to the ArchHTC237 Postmodern Pavilion Design Challenge. You are a young architect presenting your proposal for a community pavilion at Wynyard Point, Auckland.\n\nThe review committee consists of four distinguished professionals, each bringing their own expertise and perspective to evaluate your design. Your challenge is to demonstrate understanding of postmodern architectural principles while creating a design that serves Auckland's diverse communities.\n\nThis is not about creating detailed drawings or technical specifications—it's about showing how postmodern theory translates into thoughtful design decisions that address real community needs.\n\nYour success will be measured by how well you apply concepts like multivalent communication, time-binding, and spatial pluralism to create architecture that speaks to both popular culture and architectural sophistication.\n\nRemember: Charles Jencks argued that the best postmodern architecture communicates on multiple levels simultaneously. Your pavilion should do the same.",
      question: "",
      options: [],
      correctFeedback: "",
      incorrectFeedback: ""
    },
    {
      id: 2,
      title: "Architectural Communication Strategy", 
      description: "How will your design communicate with diverse audiences?",
      context: "The committee settles back in their chairs, their initial impressions clearly positive. You've just finished outlining your basic pavilion concept—a flexible community space that can accommodate everything from small cultural gatherings to large public events.\n\nDr. Chen adjusts her glasses and leans forward with scholarly intensity. 'Your functional program sounds comprehensive,' she begins, 'but I'm particularly interested in your communication strategy. Wynyard Quarter attracts an incredibly diverse range of people—local families, international tourists, architecture students, business professionals, elderly residents, young children.'\n\nMaria Santos nods enthusiastically: 'That's exactly right. We need architecture that doesn't talk down to anyone or exclude anyone. Some buildings seem designed only for people with architecture degrees, while others are so simplified they become bland.'\n\nJames Mitchell adds: 'Charles Jencks wrote extensively about this challenge—how can architecture speak meaningfully to both popular culture and professional architectural discourse? It's one of postmodernism's central concerns.'\n\nDr. Patel concludes with a direct challenge: 'So here's our first substantive question: How exactly will your design communicate with this incredibly diverse audience? What's your strategy for ensuring the pavilion speaks meaningfully to different groups without excluding anyone?'",
      question: "How will your pavilion communicate meaningfully with Wynyard Quarter's diverse audiences—from local families to architecture professionals—without excluding anyone?",
      options: [
        {
          id: "2a",
          title: "Multivalent Communication Strategy",
          description: "Our approach recognizes that different groups read architectural elements differently, following Charles Jencks' concept of multivalent communication. The pavilion's design elements work on multiple levels—families will engage with welcoming forms and comfortable spaces, while those familiar with architectural history will recognize references to both classical proportions and contemporary design strategies. Local communities can interpret certain forms through their own cultural lenses, while visitors might read them differently. This layered approach means the building can communicate meaningfully with diverse audiences without requiring everyone to understand the same messages.",
          approach: "Pluralistic architectural meaning",
          isCorrect: true,
          feedback: "Dr. Chen responds with clear approval: 'This demonstrates excellent understanding of Jencks' multivalent architecture. You're showing how the same building can speak to different audiences through different interpretative frameworks, rather than trying to make everyone see the same thing.'\n\nMaria Santos adds enthusiastically: 'The key insight here is that you're not dumbing down the architecture for popular audiences or making it overly complex for professionals. You're creating genuine richness that people can engage with at their own level of interest and knowledge.'\n\nJames Mitchell nods: 'This approach acknowledges that communities bring their own interpretative abilities to architecture. You're respecting people's intelligence while creating multiple entry points for engagement.'\n\nDr. Patel concludes: 'You're demonstrating how postmodern architecture succeeds by embracing interpretative diversity rather than trying to control how people understand the building. That's sophisticated community engagement.'",
          lectureReference: "Perfect application of Jencks' multivalent communication theory",
          nextScene: "3"
        },
        {
          id: "2b", 
          title: "Symbolic Encoding Strategy",
          description: "We're embedding symbolic content that reveals itself through interpretation. The structural grid combines proportional systems from both European and Pacific traditions, while the three main spaces represent past, present, and future. Materials work symbolically too—stone base for geological foundation, lighter structures above for human activity. This follows Roland Barthes' ideas about cultural codes operating beneath surface appearances, creating architecture that rewards deeper engagement and cultural knowledge.",
          approach: "Cultural code integration",
          isCorrect: false,
          feedback: "Dr. Patel responds with visible concern: 'I'm afraid this approach reflects exactly the kind of tokenistic multiculturalism that postmodern theorists warned against. You're describing what James Clifford called \"cultural display\" rather than genuine pluralism.'\n\nDr. Chen adds: 'Roland Barthes never wrote about architectural cultural codes in the way you've described. His approach was much more subtle—he advocated for understanding how meaning operates in everyday culture, not for embedding academic symbols that require specialized knowledge to decode.'\n\nMaria Santos looks frustrated: 'This kind of approach often makes communities feel like their cultures are being used as decoration rather than genuinely respected. It's what critics call \"diversity theater\"—visible symbols without meaningful inclusion.'\n\nJames Mitchell concludes: 'There's also a practical issue. Static cultural symbols can't accommodate the dynamic, evolving nature of how communities actually use spaces. You're designing a museum display, not a living community building.'",
          lectureReference: "Review the lecture section on 'Pluralism or Multivalence' where Jencks explains that pluralism works through architectural richness that can support diverse interpretations, not through symbolic decoration.",
          nextScene: "2"
        },
        {
          id: "2c",
          title: "Direct Communicative Strategy",
          description: "We believe in functional clarity and honest expression. The rectangular plan clearly indicates community meeting use, while large glazed openings signal transparency. Following Louis Sullivan's 'form follows function,' every element has a clear purpose. We're avoiding what Charles Jencks called 'semantic confusion' by ensuring intuitive organization and appropriate materials that speak their structural language.",
          approach: "Functional transparency", 
          isCorrect: false,
          feedback: "Dr. Chen responds with barely concealed concern: 'I'm afraid there are significant misunderstandings in your approach. First, Charles Jencks never used the term \"semantic confusion\"—in fact, he advocated for what he called \"multivalent\" architecture that deliberately embraces multiple meanings rather than avoiding them.'\n\nJames Mitchell adds: 'More fundamentally, you're describing classic modernist principles—Sullivan's functionalism, honest material expression—but we specifically briefed for a postmodern approach. Jencks famously declared modernism \"dead\" precisely because this kind of reductive communication failed to engage with contemporary cultural complexity.'\n\nMaria Santos looks confused: 'Are you suggesting architectural communication should be limited to functional expression? What about the cultural, social, and symbolic dimensions that make buildings meaningful to communities?'\n\nDr. Patel concludes: 'Robert Venturi never advocated for meaningful simplicity—quite the opposite. His famous response to Mies van der Rohe's \"less is more\" was \"less is a bore.\" He argued for complexity and contradiction as essential to meaningful architecture.'",
          lectureReference: "Review the lecture section on 'Charles Jencks' where it explains that Jencks declared 'Modern architecture dies in St Luis, Missouri on July 15th, 1972 at 3:22 pm' because modernist approaches like Sullivan's functionalism failed to engage with community needs.",
          nextScene: "2"
        },
        {
          id: "2d",
          title: "Community Interpretation Strategy", 
          description: "Our approach follows what Jencks calls 'user-generated meaning'—instead of prescribing how the space should be used, we're creating a neutral framework that communities can interpret and adapt according to their own needs. The building's forms are deliberately ambiguous to avoid imposing specific cultural readings. We'll provide basic infrastructure—power, water, flexible lighting—and let different community groups bring their own furniture, decorations, and spatial arrangements.",
          approach: "User-generated meaning",
          isCorrect: false,
          feedback: "Dr. Chen responds with mixed concern: 'While community agency is certainly important to postmodern theory, I'm not sure Jencks ever advocated for \"user-generated meaning\" in quite this way. There's a difference between multivalent architecture and architecturally neutral space.'\n\nMaria Santos looks puzzled: 'This sounds like you're asking communities to do the architect's job. If we wanted a generic rental hall, we wouldn't need a design competition. We're looking for architecture that actively supports diverse uses, not just gets out of the way.'\n\nJames Mitchell adds: 'There's also a practical concern. Different community groups have very different resources. Some can afford elaborate setups, others can't. Your approach might inadvertently create inequality in who can effectively use the space.'\n\nDr. Patel concludes: 'Postmodern pluralism isn't about architectural neutrality—it's about architectural richness that can accommodate different interpretations. Jencks advocated for buildings with strong character that could still speak to diverse audiences, not blank slates.'",
          lectureReference: "Review the lecture section on 'Pluralism or Multivalence' where it explains that Jencks believed 'form and function must be dissociated' but through architectural richness, not neutrality.",
          nextScene: "2"
        }
      ],
      correctFeedback: "Excellent response demonstrating deep understanding of multivalent communication and postmodern theory.",
      incorrectFeedback: "Consider how postmodern architecture can communicate meaningfully with diverse audiences without exclusion or tokenism."
    },
    {
      id: 3,
      title: "Pluralistic Design Approach",
      description: "The committee explores how your design will achieve genuine cultural pluralism.",
      context: "The committee appears pleased with your multivalent communication strategy. Dr. Chen makes a few notes before Maria Santos takes the lead on the next challenge.\n\n'Your communication approach sounds promising,' Maria begins, 'but now I want to understand how this translates into actual design decisions. We've seen many projects that talk about pluralism in theory but don't deliver it in practice.'\n\nDr. Patel nods: 'True pluralism in architecture is quite rare. Most projects either ignore cultural diversity entirely, or try to represent it through superficial symbolic gestures that end up feeling tokenistic.'\n\nJames Mitchell adds: 'The challenge is creating genuine spatial and functional diversity that allows different communities to use the pavilion in ways that feel authentic to their own practices and needs.'\n\nMaria Santos leans forward with intensity: 'So here's our question: How will your design achieve genuine pluralism—not just visual variety or symbolic representation, but actual spatial and functional diversity that serves different community needs and cultural practices?'",
      question: "How will your design achieve genuine spatial and functional pluralism that serves different community needs and cultural practices?",
      options: [
        {
          id: "3a",
          title: "Spatial Pluralism Strategy",
          description: "Our pluralistic approach creates what Charles Jencks calls 'architectural variety' through diverse spatial experiences within a coherent whole. The pavilion includes intimate alcoves for quiet conversation, medium-scale gathering areas for community meetings, and a large flexible hall for major events. Each space has different acoustic properties, lighting conditions, and sight lines to support different activities and cultural practices. We've also designed transitional zones that allow people to move gradually between public and private experiences, respecting different cultural approaches to social interaction.",
          approach: "Architectural variety through space",
          isCorrect: true,
          feedback: "Dr. Chen responds with evident approval: 'This demonstrates sophisticated understanding of how pluralism actually works in architecture. You're describing what Jencks meant by architectural variety—not just visual differences, but functional and experiential diversity that serves different community needs.'\n\nMaria Santos adds enthusiastically: 'The transitional zones are particularly important. Different cultures have very different concepts of privacy and social interaction. Your spatial strategy acknowledges this without stereotyping any particular group.'\n\nJames Mitchell nods: 'This is practical pluralism. You're showing how theoretical concepts translate into livable spaces that can actually accommodate the diversity of activities we expect this pavilion to host.'\n\nDr. Patel concludes: 'Your approach respects cultural differences without tokenism. The variety of spatial experiences allows different communities to use the building in ways that feel appropriate to them, while maintaining architectural coherence.'",
          lectureReference: "Excellent application of Jencks' architectural variety principle - functional diversity that serves authentic community differences.",
          nextScene: "4"
        },
        {
          id: "3b",
          title: "Cultural Symbols Integration", 
          description: "We're incorporating symbolic elements from Auckland's major cultural communities throughout the design. The entrance features geometric patterns inspired by Māori kowhaiwhai, while the main gathering space includes Pacific navigation motifs and Asian-influenced garden elements. European classical proportions provide the underlying organizational structure. This follows what Robert Venturi described as 'inclusive symbolism'—bringing together diverse cultural languages in one architectural composition that represents our multicultural society.",
          approach: "Multicultural representation",
          isCorrect: false,
          feedback: "Dr. Patel responds with visible concern: 'I'm afraid this approach reflects exactly the kind of tokenistic multiculturalism that postmodern theorists warned against. You're describing what James Clifford called \"cultural display\" rather than genuine pluralism.'\n\nDr. Chen adds: 'Robert Venturi never wrote about \"inclusive symbolism\" in the way you've described. His approach to symbols was much more nuanced—he was interested in how popular culture and high culture could coexist, not in creating cultural inventory displays.'\n\nMaria Santos looks frustrated: 'This kind of approach often makes communities feel like their cultures are being used as decoration rather than genuinely respected. It's what critics call \"diversity theater\"—visible symbols without meaningful inclusion.'\n\nJames Mitchell concludes: 'There's also a practical issue. Static cultural symbols can't accommodate the dynamic, evolving nature of how communities actually use spaces. You're designing a museum display, not a living community building.'",
          lectureReference: "Review the lecture section on 'Robert Venturi' where it explains that Venturi was interested in 'both/and' architecture that could accommodate high and popular culture simultaneously, not multicultural symbolism.",
          nextScene: "3"
        },
        {
          id: "3c",
          title: "Flexible Infrastructure Strategy",
          description: "Our approach provides maximum functional flexibility through modular design systems. The main hall features moveable partition walls, adjustable lighting systems, and multiple power/data access points. Different cultural groups can reconfigure the space according to their specific needs—circular arrangements for Pacific Island community meetings, linear setups for formal presentations, or open floor arrangements for cultural performances. This follows what Christopher Alexander calls 'pattern language'—providing architectural infrastructure that supports diverse cultural patterns of use.",
          approach: "Modular functional flexibility",
          isCorrect: false,
          feedback: "James Mitchell responds with concern: 'While flexibility is certainly valuable, I'm not sure this addresses the deeper challenge of cultural pluralism. Christopher Alexander's pattern language was about identifying universal human spatial needs, not about accommodating cultural differences.'\n\nDr. Chen adds: 'There's also a theoretical issue. Postmodern pluralism isn't just about functional accommodation—it's about architectural meaning and cultural communication. Your approach sounds more like modernist functionalism with adjustable components.'\n\nMaria Santos looks puzzled: 'This approach assumes that cultural differences are just about how people arrange furniture, but cultural identity goes much deeper than that. Different communities have different relationships to privacy, hierarchy, sacred space, community gathering.'\n\nDr. Patel concludes: 'True architectural pluralism isn't achieved through technical flexibility alone. It requires design that understands and responds to different cultural approaches to space, not just different ways of using generic space.'",
          lectureReference: "Review the lecture section on 'Pluralism or Multivalence' where it explains that architectural pluralism works through design richness that acknowledges cultural difference, not just functional adaptability.",
          nextScene: "3"
        },
        {
          id: "3d",
          title: "Democratic Architecture Strategy",
          description: "Our design follows Hassan Fathy's principles of 'architecture for the poor'—creating spaces that don't privilege any particular cultural or economic group. The pavilion uses simple, honest materials like concrete and timber that speak a universal architectural language. All spaces are equally accessible and equally appointed, avoiding hierarchical arrangements that might favor certain groups over others. This creates what we call 'neutral pluralism'—space that belongs equally to everyone by not favoring anyone specifically.",
          approach: "Egalitarian neutrality",
          isCorrect: false,
          feedback: "Dr. Patel responds with significant concern: 'I'm afraid this misunderstands both Hassan Fathy's work and the nature of architectural pluralism. Fathy was specifically concerned with Egyptian vernacular architecture and local building traditions, not with creating \"neutral\" spaces.'\n\nDr. Chen adds: 'More fundamentally, the idea of \"universal architectural language\" contradicts everything we know about how different cultures understand and use space. There's no such thing as culturally neutral architecture—all design decisions carry cultural assumptions.'\n\nMaria Santos looks frustrated: 'This \"equal treatment\" approach often means that dominant cultural norms end up defining what counts as \"neutral.\" It's a way of avoiding the hard work of actually understanding and accommodating cultural differences.'\n\nJames Mitchell concludes: 'Postmodern pluralism isn't about avoiding cultural content—it's about architectural richness that can accommodate and celebrate cultural diversity. Your approach sounds more like modernist universalism, which is exactly what postmodernism was responding against.'",
          lectureReference: "Review the lecture section on 'Charles Jencks' where it explains that modernist universalism failed because it ignored cultural specificity and local context.",
          nextScene: "3"
        }
      ],
      correctFeedback: "Strong understanding of how spatial design can achieve genuine pluralism.",
      incorrectFeedback: "Consider how architectural design itself, not just programming, can serve diverse cultural needs."
    }
  ]
};
