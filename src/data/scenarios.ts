
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
          id: 2a,
          title: "Multivalent Communication Strategy",
          description: "Our approach recognizes that different groups read architectural elements differently, following Charles Jencks' concept of multivalent communication. The pavilion's design elements work on multiple levels—families will engage with welcoming forms and comfortable spaces, while those familiar with architectural history will recognize references to both classical proportions and contemporary design strategies. Local communities can interpret certain forms through their own cultural lenses, while visitors might read them differently. This layered approach means the building can communicate meaningfully with diverse audiences without requiring everyone to understand the same messages.",
          approach: "Pluralistic architectural meaning",
          isCorrect: true,
          feedback: "Dr. Chen responds with clear approval: 'This demonstrates excellent understanding of Jencks' multivalent architecture. You're showing how the same building can speak to different audiences through different interpretative frameworks, rather than trying to make everyone see the same thing.'\n\nMaria Santos adds enthusiastically: 'The key insight here is that you're not dumbing down the architecture for popular audiences or making it overly complex for professionals. You're creating genuine richness that people can engage with at their own level of interest and knowledge.'\n\nJames Mitchell nods: 'This approach acknowledges that communities bring their own interpretative abilities to architecture. You're respecting people's intelligence while creating multiple entry points for engagement.'\n\nDr. Patel concludes: 'You're demonstrating how postmodern architecture succeeds by embracing interpretative diversity rather than trying to control how people understand the building. That's sophisticated community engagement.'",
          lectureReference: "Perfect application of Jencks' multivalent communication theory",
          nextScene: 3
        },
        {
          id: 2b, 
          title: "Symbolic Encoding Strategy",
          description: "We're embedding symbolic content that reveals itself through interpretation. The structural grid combines proportional systems from both European and Pacific traditions, while the three main spaces represent past, present, and future. Materials work symbolically too—stone base for geological foundation, lighter structures above for human activity. This follows Roland Barthes' ideas about cultural codes operating beneath surface appearances, creating architecture that rewards deeper engagement and cultural knowledge.",
          approach: "Cultural code integration",
          isCorrect: false,
          feedback: "Dr. Patel responds with visible concern: 'I'm afraid this approach reflects exactly the kind of tokenistic multiculturalism that postmodern theorists warned against. You're describing what James Clifford called \"cultural display\" rather than genuine pluralism.'\n\nDr. Chen adds: 'Roland Barthes never wrote about architectural cultural codes in the way you've described. His approach was much more subtle—he advocated for understanding how meaning operates in everyday culture, not for embedding academic symbols that require specialized knowledge to decode.'\n\nMaria Santos looks frustrated: 'This kind of approach often makes communities feel like their cultures are being used as decoration rather than genuinely respected. It's what critics call \"diversity theater\"—visible symbols without meaningful inclusion.'\n\nJames Mitchell concludes: 'There's also a practical issue. Static cultural symbols can't accommodate the dynamic, evolving nature of how communities actually use spaces. You're designing a museum display, not a living community building.'",
          lectureReference: "Review the lecture section on 'Pluralism or Multivalence' where Jencks explains that pluralism works through architectural richness that can support diverse interpretations, not through symbolic decoration.",
          nextScene: 2
        },
        {
          id: 2c,
          title: "Direct Communicative Strategy",
          description: "We believe in functional clarity and honest expression. The rectangular plan clearly indicates community meeting use, while large glazed openings signal transparency. Following Louis Sullivan's 'form follows function,' every element has a clear purpose. We're avoiding what Charles Jencks called 'semantic confusion' by ensuring intuitive organization and appropriate materials that speak their structural language.",
          approach: "Functional transparency", 
          isCorrect: false,
          feedback: "Dr. Chen responds with barely concealed concern: 'I'm afraid there are significant misunderstandings in your approach. First, Charles Jencks never used the term \"semantic confusion\"—in fact, he advocated for what he called \"multivalent\" architecture that deliberately embraces multiple meanings rather than avoiding them.'\n\nJames Mitchell adds: 'More fundamentally, you're describing classic modernist principles—Sullivan's functionalism, honest material expression—but we specifically briefed for a postmodern approach. Jencks famously declared modernism \"dead\" precisely because this kind of reductive communication failed to engage with contemporary cultural complexity.'\n\nMaria Santos looks confused: 'Are you suggesting architectural communication should be limited to functional expression? What about the cultural, social, and symbolic dimensions that make buildings meaningful to communities?'\n\nDr. Patel concludes: 'Robert Venturi never advocated for meaningful simplicity—quite the opposite. His famous response to Mies van der Rohe's \"less is more\" was \"less is a bore.\" He argued for complexity and contradiction as essential to meaningful architecture.'",
          lectureReference: "Review the lecture section on 'Charles Jencks' where it explains that Jencks declared 'Modern architecture dies in St Luis, Missouri on July 15th, 1972 at 3:22 pm' because modernist approaches like Sullivan's functionalism failed to engage with community needs.",
          nextScene: 2
        },
        {
          id: 2d,
          title: "Community Interpretation Strategy", 
          description: "Our approach follows what Jencks calls 'user-generated meaning'—instead of prescribing how the space should be used, we're creating a neutral framework that communities can interpret and adapt according to their own needs. The building's forms are deliberately ambiguous to avoid imposing specific cultural readings. We'll provide basic infrastructure—power, water, flexible lighting—and let different community groups bring their own furniture, decorations, and spatial arrangements.",
          approach: "User-generated meaning",
          isCorrect: false,
          feedback: "Dr. Chen responds with mixed concern: 'While community agency is certainly important to postmodern theory, I'm not sure Jencks ever advocated for \"user-generated meaning\" in quite this way. There's a difference between multivalent architecture and architecturally neutral space.'\n\nMaria Santos looks puzzled: 'This sounds like you're asking communities to do the architect's job. If we wanted a generic rental hall, we wouldn't need a design competition. We're looking for architecture that actively supports diverse uses, not just gets out of the way.'\n\nJames Mitchell adds: 'There's also a practical concern. Different community groups have very different resources. Some can afford elaborate setups, others can't. Your approach might inadvertently create inequality in who can effectively use the space.'\n\nDr. Patel concludes: 'Postmodern pluralism isn't about architectural neutrality—it's about architectural richness that can accommodate different interpretations. Jencks advocated for buildings with strong character that could still speak to diverse audiences, not blank slates.'",
          lectureReference: "Review the lecture section on 'Pluralism or Multivalence' where it explains that Jencks believed 'form and function must be dissociated' but through architectural richness, not neutrality.",
          nextScene: 2
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
          id: 3a,
          title: "Spatial Pluralism Strategy",
          description: "Our pluralistic approach creates what Charles Jencks calls 'architectural variety' through diverse spatial experiences within a coherent whole. The pavilion includes intimate alcoves for quiet conversation, medium-scale gathering areas for community meetings, and a large flexible hall for major events. Each space has different acoustic properties, lighting conditions, and sight lines to support different activities and cultural practices. We've also designed transitional zones that allow people to move gradually between public and private experiences, respecting different cultural approaches to social interaction.",
          approach: "Architectural variety through space",
          isCorrect: true,
          feedback: "Dr. Chen responds with evident approval: 'This demonstrates sophisticated understanding of how pluralism actually works in architecture. You're describing what Jencks meant by architectural variety—not just visual differences, but functional and experiential diversity that serves different community needs.'\n\nMaria Santos adds enthusiastically: 'The transitional zones are particularly important. Different cultures have very different concepts of privacy and social interaction. Your spatial strategy acknowledges this without stereotyping any particular group.'\n\nJames Mitchell nods: 'This is practical pluralism. You're showing how theoretical concepts translate into livable spaces that can actually accommodate the diversity of activities we expect this pavilion to host.'\n\nDr. Patel concludes: 'Your approach respects cultural differences without tokenism. The variety of spatial experiences allows different communities to use the building in ways that feel appropriate to them, while maintaining architectural coherence.'",
          lectureReference: "Excellent application of Jencks' architectural variety principle - functional diversity that serves authentic community differences.",
          nextScene: 4
        },
        {
          id: 3b,
          title: "Cultural Symbols Integration", 
          description: "We're incorporating symbolic elements from Auckland's major cultural communities throughout the design. The entrance features geometric patterns inspired by Māori kowhaiwhai, while the main gathering space includes Pacific navigation motifs and Asian-influenced garden elements. European classical proportions provide the underlying organizational structure. This follows what Robert Venturi described as 'inclusive symbolism'—bringing together diverse cultural languages in one architectural composition that represents our multicultural society.",
          approach: "Multicultural representation",
          isCorrect: false,
          feedback: "Dr. Patel responds with visible concern: 'I'm afraid this approach reflects exactly the kind of tokenistic multiculturalism that postmodern theorists warned against. You're describing what James Clifford called \"cultural display\" rather than genuine pluralism.'\n\nDr. Chen adds: 'Robert Venturi never wrote about \"inclusive symbolism\" in the way you've described. His approach was much more subtle—he advocated for complexity and contradiction, not direct cultural representation through decorative symbols.'\n\nMaria Santos looks frustrated: 'This kind of approach often makes communities feel like their cultures are being used as decoration rather than genuinely respected. It's what critics call \"diversity theater\"—visible symbols without meaningful inclusion.'\n\nJames Mitchell concludes: 'There's also a practical issue. Static cultural symbols can't accommodate the dynamic, evolving nature of how communities actually use spaces. You're designing a museum display, not a living community building.'",
          lectureReference: "Review the lecture section on 'Pluralism or Multivalence' where it explains that genuine pluralism creates 'strength through unity (whilst also maintaining diverse identities)' through spatial and functional diversity, not symbolic decoration.",
          nextScene: 3
        },
        {
          id: 3c,
          title: "Universal Accessibility Approach",
          description: "Our strategy focuses on creating spaces that work equally well for everyone, regardless of cultural background or architectural knowledge. We're following what Jencks called 'democratic modernism'—clean, simple forms with excellent functionality and barrier-free access. The design avoids specific cultural references that might exclude some groups, instead emphasizing universal human needs like shelter, gathering, and social connection. High-quality materials and generous proportions ensure the space feels welcoming to all users.",
          approach: "Democratic design principles",
          isCorrect: false,
          feedback: "Dr. Chen responds with surprise: 'Charles Jencks never advocated for \"democratic modernism\"—quite the opposite. He famously criticized modernism's universalist claims as a form of cultural imperialism that ignored local differences and community specificities.'\n\nJames Mitchell adds: 'You're describing classic modernist principles, but we specifically briefed for a postmodern approach. Jencks argued that designing for \"everyone equally\" often means designing for no one in particular.'\n\nMaria Santos looks concerned: 'Universal design for disability access is crucial, but cultural universalism is problematic. The idea that we can avoid cultural references and create neutral spaces often privileges dominant cultural norms while appearing to be inclusive.'\n\nDr. Patel concludes: 'This approach reflects what postmodern critics identified as modernism's fundamental failure—the assumption that human needs are universal when they're actually deeply shaped by cultural, social, and historical contexts.'",
          lectureReference: "Review the lecture section on '5 causes of failure of M' where it explains that Modernist architecture failed because it 'could exclude important problems only at the risk of separating his architecture from the experience of life and the needs of society.'",
          nextScene: 3
        },
        {
          id: 3d,
          title: "Community Framework Strategy",
          description: "We're creating what we call an 'adaptable community framework'—basic architectural infrastructure that different groups can customize for their specific needs. The pavilion provides structural supports, utilities, and weather protection, but communities bring their own furniture arrangements, decorative elements, and activity programming. This approach recognizes that trying to design for all cultures simultaneously often satisfies none, so instead we're providing a neutral but high-quality foundation that can accommodate diverse cultural practices.",
          approach: "Flexible architectural framework",
          isCorrect: false,
          feedback: "James Mitchell responds thoughtfully: 'The adaptability concept has merit from a functional standpoint, and recognizing the limitations of trying to satisfy all cultures simultaneously shows practical awareness.'\n\nHowever, Dr. Chen raises concerns: 'While flexibility is valuable, postmodern pluralism isn't about architectural neutrality. Jencks advocated for buildings with character and meaning that could still accommodate diverse interpretations—not generic frameworks.'\n\nMaria Santos adds: 'There's also an equity issue. Different community groups have very different resources for customization. Some organizations can afford elaborate setups, others can't, which could create unequal access to quality space.'\n\nDr. Patel concludes: 'The challenge is creating architecture that has enough character to be meaningful while remaining flexible enough to serve diverse needs. Pure neutrality often becomes bland rather than pluralistic.'",
          lectureReference: "Review the lecture section on 'Antoni Gaudi and Ricardo Bofill' where Gaudi is described as creating 'recognisable style without being necessarily branded, and capable of producing highly bespoke works' that combine 'architectural richness' with functional flexibility.",
          nextScene: 3
        }
      ],
      correctFeedback: "Your spatial pluralism approach demonstrates authentic understanding of inclusive design principles!",
      incorrectFeedback: "Consider how genuine pluralism works through spatial variety rather than symbolic representation or neutrality."
    },
    {
      id: 4,
      title: "Historical Context & Site Response",
      description: "The committee challenges you to address Wynyard Quarter's complex transformation from industrial port to mixed-use development.",
      context: "The committee appears pleased with your spatial pluralism strategy. Dr. Patel makes a few notes before setting down her pen and looking directly at you.\n\n'Your understanding of pluralistic space is encouraging,' she begins, 'but now we need to address a more complex challenge. Wynyard Quarter has undergone dramatic transformation over the past two decades—from working industrial port to upscale mixed-use development. The old fuel storage silos, maritime infrastructure, and working wharves have largely disappeared, replaced by residential towers, corporate headquarters, and retail developments.'\n\nJames Mitchell gestures toward the window where construction cranes punctuate the skyline. 'This raises fundamental questions about how new architecture should relate to place and history. Some argue we should preserve every trace of industrial heritage. Others say we should embrace complete transformation and look forward, not backward.'\n\nDr. Chen leans forward with scholarly intensity: 'The postmodern theorists had strong opinions about this. They criticized modernism's \"tabula rasa\" approach—wiping the slate clean and starting over. But they also warned against nostalgic historicism that treats the past as a museum piece. We need to understand how your pavilion will navigate this tension.'\n\nMaria Santos adds: 'From a community perspective, people have complex relationships with this area's history. Some remember it as a gritty working port full of jobs and authentic character. Others see the old industrial landscape as polluted and exclusionary. Your design needs to acknowledge these different historical experiences.'\n\nDr. Patel concludes: 'So here's our question: How will your pavilion relate to Wynyard Quarter's layered history—both the industrial past and the ongoing transformation? What's your strategy for connecting architecture to place and time?'",
      question: "How will your pavilion relate to Wynyard Quarter's complex history while serving contemporary community needs?",
      options: [
        {
          id: 4a,
          title: "Time-Binding Integration",
          description: "Our approach follows what Charles Jencks calls 'time-binding'—creating connections between past and present without nostalgic imitation. We're incorporating weathered steel elements that reference the industrial silos' materiality while using them in contemporary structural applications. The pavilion's proportions echo the rhythm of the old wharf buildings but adapt these scales for modern community use. Existing concrete foundations from demolished structures will be preserved and integrated as landscape features, creating what Jencks describes as 'temporal layering' where different eras remain visible and interconnected.",
          approach: "Historical continuity without imitation",
          isCorrect: true,
          feedback: "Dr. Chen responds with clear approval: 'This demonstrates excellent understanding of Jencks' time-binding concept. You're describing genuine historical connection without pastiche—using industrial materials in new ways rather than copying old forms.'\n\nJames Mitchell nods enthusiastically: 'The concrete foundation preservation is particularly smart. You're creating what urban designers call \"palimpsest\"—layers of history remaining visible rather than erased. That temporal layering concept shows sophisticated thinking about how places accumulate meaning over time.'\n\nDr. Patel adds: 'This approach respects both the working-class history and the contemporary transformation. You're not privileging one era over another but showing how they can coexist productively.'\n\nMaria Santos concludes: 'Community members will be able to see connections to the area's industrial character while also recognizing that this is something new and relevant to current needs. That's exactly the kind of historical sensitivity we hoped for.'",
          lectureReference: "Perfect application of Jencks' time-binding - connecting past and present without nostalgic imitation or historical erasure.",
          nextScene: 5
        },
        {
          id: 4b,
          title: "Historical Pastiche Approach",
          description: "We're following what Charles Jencks called 'historical pastiche'—playfully mixing architectural styles from different periods without worrying about authentic historical accuracy. The pavilion combines industrial warehouse aesthetics with classical columns, maritime rope details, and contemporary glass curtain walls in an ironic collage. This follows Robert Venturi's principle of 'architectural camp'—deliberately exaggerated historical references that comment on the artificiality of historical preservation. The result acknowledges Wynyard Quarter's layered history through entertaining visual quotations rather than serious historical engagement.",
          approach: "Eclectic historical mixing",
          isCorrect: false,
          feedback: "Dr. Chen responds with concern: 'While you show some understanding of postmodern attitudes toward history, you're misunderstanding key concepts. Jencks never advocated for \"historical pastiche\" as a positive strategy—he actually criticized mindless pastiche as postmodernism's weakness, not its strength.'\n\nJames Mitchell adds: 'Robert Venturi never wrote about \"architectural camp\" in the way you describe. His approach to historical reference was much more sophisticated than deliberate exaggeration or entertainment value.'\n\nDr. Patel looks worried: 'Your approach treats history as superficial visual material rather than meaningful cultural context. Jencks emphasized that successful historical engagement requires understanding why historical elements matter, not just how they look.'\n\nMaria Santos concludes: 'This kind of ironic approach can be alienating to communities with genuine connections to the area's history. What seems playful to architects might feel dismissive to people whose lives and livelihoods were shaped by these historical contexts.'",
          lectureReference: "Review the lecture section on 'Time-Binding' where it explains that successful historical engagement creates 'new urban coherence, to complete city growth, and carry forward the past without enforcing uniformity.'",
          nextScene: 4
        },
        {
          id: 4c,
          title: "Heritage Preservation Focus",
          description: "Our strategy prioritizes authentic historical preservation and interpretation. We're designing the pavilion to complement and showcase the remaining industrial heritage through careful material matching and scaled relationships. Following what Jencks called 'contextual sensitivity,' we'll use traditional construction methods and historically appropriate details to ensure visual harmony with surviving wharf structures. The building will include interpretive displays about the area's maritime and industrial history, helping visitors understand the authentic character that once defined this place.",
          approach: "Authentic historical conservation",
          isCorrect: false,
          feedback: "Dr. Chen responds with visible concern: 'I'm afraid this approach misunderstands postmodern attitudes toward history. Jencks never advocated for \"contextual sensitivity\" through direct imitation—that's exactly the kind of nostalgic historicism he criticized.'\n\nJames Mitchell adds: 'You're describing heritage preservation methodology, not contemporary architecture. The goal isn't to create a museum environment but to design for current community needs while acknowledging historical context.'\n\nDr. Patel looks disappointed: 'This approach also raises equity questions. Whose version of \"authentic character\" are you preserving? The industrial landscape was often exclusionary—preserving its aesthetic without acknowledging its social limitations isn't genuine historical engagement.'\n\nMaria Santos concludes: 'Postmodern architecture isn't about recreating the past but about creating new possibilities informed by historical understanding. Your approach would produce a theme park version of industrial heritage rather than meaningful contemporary architecture.'",
          lectureReference: "Review the lecture section on 'Time-Binding' where it explains the goal is to 'create a new urban coherence, to complete city growth, and carry forward the past without enforcing uniformity.'",
          nextScene: 4
        },
        {
          id: 4d,
          title: "Future-Oriented Transformation",
          description: "We believe in embracing Wynyard Quarter's transformation toward a high-tech, internationally connected urban district. Our pavilion reflects what Jencks described as 'progressive modernism'—clean contemporary forms that embody innovation and forward-thinking. Rather than dwelling on industrial nostalgia, we're designing for the young professionals, international visitors, and technology companies that represent this area's future. The building's sleek materials and minimalist aesthetic will complement the adjacent corporate towers and luxury residential developments.",
          approach: "Progressive contemporary design",
          isCorrect: false,
          feedback: "Dr. Chen responds with alarm: 'Charles Jencks never wrote about \"progressive modernism\"—this contradicts his entire critique of modernist ideology. You're describing exactly the kind of approach he opposed through his concept of postmodernism.'\n\nJames Mitchell adds: 'The \"tabula rasa\" mentality you're advocating is precisely what postmodern theorists identified as modernism's fundamental failure. Ignoring historical context in favor of abstract future visions disconnects architecture from place and community.'\n\nMaria Santos looks frustrated: 'This approach would create architecture for a narrow demographic while ignoring the broader community's relationship to this place. It's exactly the kind of elitist modernism that generated the community resistance movements we discussed earlier.'\n\nDr. Patel concludes: 'You're also misunderstanding gentrification dynamics. Architecture that serves only \"young professionals and international visitors\" contributes to displacing existing communities rather than creating inclusive public space.'",
          lectureReference: "Review the lecture section on '5 causes of failure of M' where it explains that Modernist architecture failed partly due to 'the association with socialism and the totalitarian regimes' and 'a sense of inevitable progression and evolution.'",
          nextScene: 4
        }
      ],
      correctFeedback: "Your time-binding approach demonstrates sophisticated understanding of postmodern historical engagement!",
      incorrectFeedback: "Consider how postmodern architecture can engage meaningfully with history without copying or ignoring it."
    },
    {
      id: 5,
      title: "Balancing Popular & Architectural Appeal",
      description: "The committee addresses postmodernism's greatest challenge: speaking to both everyday users and the architectural profession.",
      context: "The committee members seem satisfied with your time-binding approach. Dr. Chen consults her notes before posing the next challenge.\n\n'Your historical strategy is sound,' she begins, 'but now we need to address what Charles Jencks identified as postmodernism's greatest challenge: creating architecture that works for both everyday users and the architectural community. Too many buildings either talk down to the public with oversimplified design, or speak only to architectural insiders with esoteric concepts.'\n\nMaria Santos adds: 'We've seen projects that try to be \"accessible\" by removing all architectural sophistication, and others that are so conceptually complex that regular users feel excluded. Neither approach creates lasting public architecture.'\n\nJames Mitchell nods: 'The most successful public buildings somehow manage to be immediately appealing to families and casual visitors while also offering the kind of architectural richness that design professionals can appreciate and learn from.'\n\nDr. Patel concludes: 'So here's our question: How will your pavilion achieve this balance? What will make it both genuinely popular with Auckland communities and architecturally significant for the design profession?'",
      question: "How will your pavilion achieve the postmodern goal of speaking to both popular culture and architectural sophistication simultaneously?",
      options: [
        {
          id: 5a,
          title: "Layered Architectural Appeal",
          description: "Our approach creates what Charles Jencks calls 'multivalent architecture' that operates on multiple levels simultaneously. Families will experience colorful, welcoming spaces with comfortable seating and clear organization—nothing intimidating or confusing. But these same spaces use sophisticated proportional systems, subtle material relationships, and complex spatial sequences that architects will recognize as carefully orchestrated design. The bright colors reference both popular culture and color theory; the playful forms suggest both fun and geometric precision. This layered approach means the building rewards both casual enjoyment and sustained architectural analysis.",
          approach: "Multivalent popular/professional communication",
          isCorrect: true,
          feedback: "Dr. Chen responds with clear approval: 'This perfectly captures Jencks' insight about multivalent architecture. You're showing how the same design elements can communicate different things to different audiences without compromising either message.'\n\nMaria Santos adds enthusiastically: 'The key is that families don't need to understand color theory to enjoy the bright colors—they work immediately. But the sophisticated color relationships give architects something substantive to engage with. That's genuine inclusivity.'\n\nJames Mitchell nods: 'This approach creates architecture that ages well because it works on multiple levels. As people spend more time in the space, they can discover additional layers of meaning and sophistication.'\n\nDr. Patel concludes: 'You're demonstrating how postmodern architecture succeeds by being genuinely popular and genuinely sophisticated simultaneously, rather than choosing one over the other.'",
          lectureReference: "This exemplifies postmodern communication theory - architecture that works immediately while offering deeper engagement for those who seek it.",
          nextScene: 6
        },
        {
          id: 5b,
          title: "Democratic Simplification",
          description: "We believe the best way to serve both audiences is through elegant simplicity that anyone can appreciate. The pavilion uses clean geometric forms, natural materials, and straightforward spatial organization that communicates universal values of harmony and proportion. Following what Jencks described as 'accessible modernism,' we're avoiding both populist gimmicks and architectural pretension in favor of timeless design principles that speak to fundamental human aesthetic preferences. This approach ensures broad appeal while maintaining the kind of refined quality that architectural professionals respect.",
          approach: "Universal aesthetic principles",
          isCorrect: false,
          feedback: "Dr. Chen responds with concern: 'Charles Jencks never advocated for \"accessible modernism\"—that's actually contradictory to postmodern principles. You're describing the kind of universalist approach that postmodernism explicitly rejected.'\n\nMaria Santos adds: 'While elegant simplicity can be appealing, research shows that overly simplified public spaces often fail to generate sustained community interest. People need architectural richness and variety to create emotional connections to places.'\n\nJames Mitchell notes: 'The \"timeless design principles\" approach often produces generic architecture that satisfies no one particularly well. What seems universal usually reflects specific cultural biases rather than genuine broad appeal.'\n\nDr. Patel concludes: 'This approach misses what makes postmodern architecture distinctive—its embrace of complexity, symbolism, and cultural specificity rather than abstract universal principles.'",
          lectureReference: "Review the lecture section on 'Search for inclusive arch' where Jencks argues that successful postmodern architecture 'can include ugliness, decay, banality, austerity, without becoming depressing' through complexity, not simplification.",
          nextScene: 5
        },
        {
          id: 5c,
          title: "Cultural Programming Integration",
          description: "Our strategy balances popular and professional appeal through flexible programming that can accommodate both community events and architectural discourse. The pavilion includes exhibition spaces where local schools can display student work alongside professional design exhibitions. We're planning lecture series that alternate between topics like 'Home Gardening Tips' and 'Contemporary Architecture Theory.' The building itself uses approachable materials like timber and brick combined with innovative structural systems that demonstrate technical sophistication to industry professionals.",
          approach: "Activity-based appeal",
          isCorrect: false,
          feedback: "Dr. Chen responds thoughtfully: 'Programming diversity is certainly valuable, and combining community and professional events shows some understanding of serving multiple audiences. However, you're focusing on activities rather than architectural strategies.'\n\nJames Mitchell adds: 'The material choices you mention—timber and brick with innovative structure—could work well, but you haven't explained how these create the kind of multivalent communication that Jencks advocated for.'\n\nMaria Santos notes: 'There's also a practical concern about programming sustainability. What happens when funding changes or institutional partnerships end? The architecture itself needs to work for diverse audiences, not just the events programmed within it.'\n\nDr. Patel concludes: 'You're thinking about functional diversity, which is important, but postmodern multivalence requires architectural elements that can be read differently by different audiences—not just different uses of the same space.'",
          lectureReference: "Review the lecture section on 'Pluralism or Multivalence' where it explains that successful postmodern architecture works through 'architectural elements that can be read differently by different audiences' through the design itself.",
          nextScene: 5
        },
        {
          id: 5d,
          title: "Interpretive Architecture Strategy",
          description: "We're creating what Jencks called 'pedagogical postmodernism'—architecture that teaches popular audiences about design sophistication through built-in interpretation. The pavilion includes explanatory plaques describing architectural features, QR codes linking to design process videos, and guided tour routes that help visitors understand the building's conceptual framework. This educational approach ensures that community members can appreciate the architectural sophistication while professionals can engage with the theoretical concepts embedded in the design.",
          approach: "Educational design approach",
          isCorrect: false,
          feedback: "Dr. Chen responds with clear disagreement: 'Jencks never wrote about \"pedagogical postmodernism\" in the way you describe. This approach assumes that popular audiences need education to appreciate architecture, which contradicts postmodern principles of immediate accessibility.'\n\nMaria Santos looks frustrated: 'Explanatory plaques and QR codes suggest that the architecture can't communicate on its own. If a building needs instruction manual to be understood, it's failing as popular architecture.'\n\nJames Mitchell adds: 'This approach also creates a hierarchy where architectural professionals understand the \"real\" building while community members get simplified explanations. That's exactly the kind of elitism postmodernism sought to overcome.'\n\nDr. Patel concludes: 'The goal isn't to educate popular audiences about architectural theory, but to create architecture that works immediately for everyone while offering additional layers for those who seek them.'",
          lectureReference: "Review the lecture section on 'Antoni Gaudi and Ricardo Bofill' where Gaudi's architecture is praised because 'the role of the architect \"is to articulate our environment, not only so we can comprehend it literally, but also so we can find it psychologically nourishing.\"'",
          nextScene: 5
        }
      ],
      correctFeedback: "Your layered approach demonstrates sophisticated understanding of inclusive design communication!",
      incorrectFeedback: "Consider how architecture can be both sophisticated and accessible through design strategy rather than simplification."
    },
    {
      id: 6,
      title: "Committee Decision & Design Precedents",
      description: "The committee reviews your comprehensive approach and asks for final reflection on postmodern precedents.",
      context: "The committee members exchange satisfied glances and begin gathering their notes. Dr. Chen looks up with a smile.\n\n'Your understanding of multivalent architectural communication has been impressive throughout this presentation,' she begins. 'You've demonstrated solid grasp of postmodern principles and their practical application to community design.'\n\nMaria Santos nods enthusiastically: 'More importantly, you've shown how these theoretical concepts translate into architecture that will genuinely serve Auckland's diverse communities. That's exactly what we hoped to see.'\n\nJames Mitchell adds: 'Your approach to time-binding, pluralistic space, and multivalent communication suggests this pavilion could become a genuine community asset rather than just an architectural object.'\n\nDr. Patel smiles: 'We're prepared to recommend your proposal for development. However, before we conclude, we have one final request.'\n\nDr. Chen leans forward with renewed focus: 'We'd like you to ground your theoretical approach in architectural precedent. Can you identify a specific postmodern building that exemplifies the design strategies you've been describing? We want to understand how your approach relates to successful built examples of postmodern architecture.'\n\nJames Mitchell explains: 'This isn't just academic—precedent analysis helps us understand whether your strategies have been tested in practice and what we might learn from similar projects.'\n\nDr. Patel concludes: 'So please identify a key postmodern building that demonstrates your design approach, and explain specifically what postmodern characteristics make it relevant to your pavilion strategy.'",
      question: "Which postmodern building best exemplifies the design strategies you've described, and what specific postmodern characteristics make it relevant to your pavilion approach?",
      options: [
        {
          id: 6a,
          title: "Vanna Venturi House by Robert Venturi (1964)",
          description: "I'd cite Robert Venturi's Vanna Venturi House in Philadelphia as a key precedent for our approach. This house demonstrates how postmodern architecture can embrace complexity and contradiction while remaining approachable and human-scaled. Like our pavilion, it combines familiar elements—the iconic American house form—with unexpected spatial and formal strategies that reward closer examination. The house works immediately as a recognizable home while offering architectural sophistication for those who engage more deeply with its design.",
          approach: "Complexity and contradiction in residential scale",
          isCorrect: true,
          feedback: "Dr. Chen responds with approval: 'Excellent choice. The Vanna Venturi House demonstrates exactly the multivalent communication and human-scaled complexity you've been describing for your pavilion, and why it's relevant to your approach.'\n\nDr. Patel adds: 'Your observation about complexity and contradiction is particularly apt. Venturi's house demonstrates exactly the kind of multivalent communication you've been describing—immediately readable yet architecturally sophisticated.'",
          lectureReference: "Perfect choice demonstrating Venturi's 'Complexity and Contradiction' principles",
          nextScene: 6b0
        },
        {
          id: 6b,
          title: "Seagram Building by Mies van der Rohe (1958)",
          description: "The Seagram Building in New York exemplifies the kind of refined modernist principles that inform our pavilion design. Its clean lines, honest material expression, and elegant proportions demonstrate how minimalist architecture can achieve both popular appeal and professional respect. The building's bronze and glass facade creates a sophisticated urban presence while its rational structural expression makes its architectural logic clear to any observer. This precedent shows how restraint and clarity can create lasting architectural significance.",
          approach: "Modernist refinement and clarity",
          isCorrect: false,
          feedback: "Dr. Chen responds with concern: 'The Seagram Building is a classic example of International Style modernism, not postmodernism. Mies van der Rohe's work represents exactly the kind of minimalist universalism that postmodern architects like Jencks and Venturi criticized.'\n\nMaria Santos adds: 'This choice suggests some confusion about the difference between modernist and postmodern approaches. The Seagram Building's \"honest material expression\" and \"rational structural logic\" are modernist principles, not postmodern strategies.'\n\nJames Mitchell concludes: 'Your pavilion strategies have been about multivalent communication and cultural pluralism—the opposite of the Seagram Building's universal minimalism.'",
          lectureReference: "Review the lecture sections on 'Charles Jencks' and 'Denice Scott-Brown and Robert Venturi' where the differences between modernist and postmodern approaches are explained.",
          nextScene: 6
        },
        {
          id: 6c,
          title: "AT&T Building by Philip Johnson (1984)",
          description: "Philip Johnson's AT&T Building in New York serves as an important postmodern precedent for our civic architecture approach. This building demonstrates how postmodern design can challenge modernist orthodoxy through historical reference—its famous Chippendale-inspired crown and classical base reject the modernist glass box. The building uses architectural irony and historical quotation to create a distinctive urban landmark that speaks to both popular recognition and architectural discourse.",
          approach: "Postmodern civic monumentality",
          isCorrect: false,
          feedback: "Dr. Chen responds with concern: 'While the AT&T Building is indeed a significant postmodern work, it represents a very different approach from what you've been describing. Johnson's building is about corporate identity and urban monumentality, not community engagement and multivalent communication.'\n\nMaria Santos adds: 'The AT&T Building works as architectural statement and urban landmark, but it doesn't demonstrate the kind of intimate, flexible community spaces you've been proposing. It's designed for visual impact from the street rather than human-scaled gathering experiences.'\n\nJames Mitchell concludes: 'There's also a scale issue. Your pavilion strategies focus on accommodating diverse community activities, while Johnson's approach emphasizes architectural monumentality and corporate presence. These are fundamentally different design problems.'",
          lectureReference: "While you've correctly identified a postmodern building, it doesn't align with the community-focused strategies you've been describing.",
          nextScene: 6
        },
        {
          id: 6d,
          title: "Sydney Opera House by Jørn Utzon (1973)",
          description: "Utzon's Sydney Opera House provides an excellent precedent for our approach to iconic architecture that serves diverse audiences. The building's distinctive shell forms create immediate popular recognition while demonstrating innovative structural and spatial strategies that architects worldwide have studied and admired. Its integration with the harbor setting shows how contemporary architecture can respond to specific place while achieving international significance, similar to our goals for the Wynyard pavilion.",
          approach: "Iconic architectural expression",
          isCorrect: false,
          feedback: "Dr. Chen responds thoughtfully: 'While the Sydney Opera House is certainly iconic and demonstrates innovative architecture, it's not typically classified as postmodern. Utzon's approach was more aligned with organic modernism and sculptural expressionism than with postmodern theoretical concerns.'\n\nDr. Patel adds: 'The Opera House doesn't demonstrate the historical reference, irony, or cultural pluralism that characterize postmodern architecture. It's a masterpiece, but of a different architectural movement.'\n\nJames Mitchell notes: 'More importantly for your pavilion, the Opera House is designed as a singular iconic object rather than the kind of flexible, multivalent community space you've been describing. The design approaches are fundamentally different.'\n\nMaria Santos concludes: 'Your pavilion strategies have been about community engagement and cultural diversity—the Opera House, while beautiful, doesn't provide relevant precedents for those goals.'",
          lectureReference: "Review the lecture content on postmodern characteristics and select a building that demonstrates specific postmodern strategies like historical reference, pluralism, or complexity and contradiction.",
          nextScene: 6
        }
      ],
      correctFeedback: "Outstanding! You've successfully applied postmodern theory to contemporary design challenges with sophisticated understanding.",
      incorrectFeedback: "Consider how Venturi's key innovations challenged modernist assumptions about architectural clarity and communication."
    },
    {
      id: 6b0,
      title: "Postmodern Characteristic Analysis",
      description: "The committee asks for specific analysis of postmodern characteristics in your chosen precedent.",
      context: "Dr. Chen nods approvingly at your precedent selection.\n\n'The Vanna Venturi House is indeed an excellent choice—a foundational work of postmodern architecture that demonstrates many of the principles you've been applying to your pavilion design.'\n\nDr. Patel adds: 'Your analysis of how it combines familiarity with sophistication aligns well with the multivalent communication strategies you've proposed.'\n\nJames Mitchell leans forward: 'Now we'd like you to be more specific. What particular postmodern characteristics does the Vanna Venturi House demonstrate that relate directly to your pavilion approach? This will help us understand how established postmodern precedents inform contemporary community design.'\n\nMaria Santos concludes: 'We want to see that you can identify the specific theoretical concepts that make this house a relevant model for your pavilion strategy.'",
      question: "What specific postmodern characteristics does the Vanna Venturi House demonstrate that relate to your pavilion design strategies?",
      options: [
        {
          id: 6b1,
          title: "Multivalent Architectural Communication",
          description: "The Vanna Venturi House demonstrates exactly the kind of multivalent communication we're planning for our pavilion. The house reads immediately as a familiar American home—anyone can recognize the gable roof and front porch—but it also contains sophisticated architectural moves like the split pediment and complex interior spatial relationships. Families see a welcoming house; architects read Venturi's commentary on architectural convention. This shows how buildings can speak to popular and professional audiences simultaneously without compromising either message.",
          approach: "Dual-audience appeal through layered meaning",
          isCorrect: true,
          feedback: "Dr. Chen responds with clear satisfaction: 'Perfect analysis. You've identified exactly what makes the Vanna Venturi House relevant to your pavilion approach—its ability to communicate simultaneously with different audiences without talking down to anyone.'\n\nMaria Santos adds enthusiastically: 'Your observation about the split pediment is particularly insightful. It's a perfect example of how one architectural element can work both as familiar house imagery and sophisticated architectural commentary. That's precisely the kind of multivalent strategy you need for community architecture.'\n\nJames Mitchell nods: 'This analysis shows you understand how postmodern architecture can be both immediately accessible and intellectually engaging. The house proves that complexity doesn't require excluding popular audiences.'\n\nDr. Patel concludes: 'You've demonstrated how successful postmodern precedents can inform contemporary community design. This gives us confidence that your pavilion approach is grounded in proven architectural strategies.'\n\nDr. Chen stands and extends her hand: 'Congratulations. The committee unanimously approves your postmodern pavilion proposal for further development. Your understanding of multivalent architecture, time-binding, and spatial pluralism, grounded in solid precedent analysis, convinces us that this pavilion will serve both Auckland's communities and architectural discourse. Well done.'",
          lectureReference: "Excellent analysis of Venturi's multivalent communication principles",
          nextScene: 7
        },
        {
          id: 6b2,
          title: "Postmodern Ornamental Systems",
          description: "This house exemplifies what Charles Jencks called 'neo-decorative architecture' through its elaborate surface treatments and ornamental complexity. Venturi uses multiple decorative systems—classical pediments, Gothic arches, and contemporary abstract patterns—to create what he termed 'maximum visual density.' The house demonstrates how postmodern architecture rejected modernist restraint in favor of ornamental abundance, showing how decoration can carry architectural meaning and cultural significance.",
          approach: "Decorative complexity and symbolism",
          isCorrect: false,
          feedback: "Dr. Chen responds with confusion: 'I'm afraid you're mischaracterizing the Vanna Venturi House. It's actually quite restrained in its use of ornament—Jencks never described Venturi's work as \"neo-decorative architecture\" or advocating for \"maximum visual density.\"'\n\nDr. Patel adds: 'The house is famous precisely because it achieves complexity through subtle formal moves rather than ornamental elaboration. You're describing a very different kind of postmodern approach—perhaps thinking of architects like Michael Graves or Ricardo Bofill.'\n\nMaria Santos notes: 'This analysis doesn't connect to your pavilion strategies either. You've been describing architecture that works through spatial variety and multivalent communication, not ornamental abundance.'\n\nJames Mitchell concludes: 'The Vanna Venturi House demonstrates complexity and contradiction through architectural form, not decorative systems. Please reconsider what makes this house a relevant precedent for your community-focused approach.'",
          lectureReference: "Review the lecture section on 'Denice Scott-Brown and Robert Venturi' where the Vanna Venturi House is described as achieving 'complexity and contradiction' through formal strategies, not ornamental decoration.",
          nextScene: 6b0
        },
        {
          id: 6b3,
          title: "Historical Pastiche Methods",
          description: "The Vanna Venturi House represents Venturi's approach to 'creative historicism'—combining architectural elements from different historical periods in new synthetic arrangements. The house mixes colonial American forms with European classical details and modernist spatial concepts to create what he called 'temporal collage.' This demonstrates how postmodern architects could freely combine historical references without concerns about stylistic purity or chronological accuracy.",
          approach: "Eclectic stylistic combination",
          isCorrect: false,
          feedback: "Dr. Chen responds with concern: 'This analysis misunderstands Venturi's approach to history. The Vanna Venturi House doesn't combine \"elements from different historical periods\"—it's quite specific in its references to American domestic architecture.'\n\nDr. Patel adds: 'Venturi never advocated for \"creative historicism\" or \"temporal collage\" in the way you describe. His approach was much more subtle—using familiar architectural language in unexpected ways rather than mixing historical styles.'\n\nJames Mitchell notes: 'The house's power comes from its careful manipulation of the single archetype of the American house, not from combining multiple historical references. You're describing a different kind of postmodern strategy entirely.'\n\nMaria Santos concludes: 'This analysis also doesn't connect to your pavilion approach, which focuses on multivalent communication and community engagement rather than historical pastiche methods.'",
          lectureReference: "Review the lecture section on 'Denice Scott-Brown and Robert Venturi' where the house is described as working with 'Iconic typical American Home: large gable, recessed porch, stability of symmetry' but 'Undermined by instability of asymmetry in the chimney and windows.'",
          nextScene: 6b0
        },
        {
          id: 6b4,
          title: "Contextual Integration Strategies",
          description: "This house shows how postmodern architecture responds to suburban context through environmental integration and neighborhood compatibility. Venturi designed the house to blend seamlessly with surrounding residential development while subtly elevating the architectural discourse of the neighborhood. The house demonstrates what he termed 'contextual modernism'—contemporary architecture that respects existing urban fabric rather than disrupting it through formal contrast.",
          approach: "Neighborhood harmony and compatibility",
          isCorrect: false,
          feedback: "Dr. Chen responds with disagreement: 'Venturi never wrote about \"contextual modernism\"—this isn't a concept from postmodern theory. The Vanna Venturi House actually stands out quite dramatically from its suburban neighbors rather than blending in.'\n\nMaria Santos adds: 'The house's significance lies partly in how it challenges conventional suburban architecture, not in how it integrates with it. Venturi was critiquing typical suburban development, not trying to harmonize with it.'\n\nJames Mitchell notes: 'Environmental integration and neighborhood compatibility weren't primary concerns for this house—it was designed as an architectural statement about complexity and contradiction in domestic architecture.'\n\nDr. Patel concludes: 'This analysis misses the house's actual contribution to postmodern theory and doesn't connect to your pavilion strategies of multivalent communication and community engagement.'",
          lectureReference: "Review the lecture section on 'Denice Scott-Brown and Robert Venturi' where the house is described as demonstrating 'complexity and contradiction' rather than contextual integration.",
          nextScene: 6b0
        }
      ],
      correctFeedback: "Excellent analysis demonstrating deep understanding of multivalent communication principles!",
      incorrectFeedback: "Consider how the Vanna Venturi House actually demonstrates postmodern principles through its formal strategies and communication approach."
    },
    {
      id: 7,
      title: "Conclusion and Reflection",
      description: "Congratulations on completing the design challenge! Time for final reflection.",
      context: "Congratulations on successfully completing the Wynyard Quarter Pavilion design challenge!\n\nYou have demonstrated solid understanding of postmodern architectural principles and their practical application to community design. The committee was impressed with your ability to integrate theoretical concepts with real-world design considerations.\n\nTo complete this learning module, please submit a brief written reflection that helps consolidate your understanding of the key concepts explored through this interactive scenario.",
      question: "Please reflect on your experience and learning from this interactive scenario.",
      options: [
        {
          id: "reflection",
          title: "Submit Written Reflection",
          description: "Your reflection should be 100-200 words and address: 1) Specific postmodern concepts that informed your successful design decisions, and 2) What you learned from completing this interactive scenario, including any insights from incorrect choices and committee feedback.",
          approach: "Complete the learning experience with thoughtful reflection",
          isCorrect: true,
          feedback: "Thank you for completing the ArchHTC237 Postmodern Pavilion Design Challenge! Your reflection will help consolidate your understanding of postmodern architectural principles and their application to community design. Please submit your 100-200 word reflection addressing the specific postmodern concepts you applied and your learning insights from this interactive experience.",
          lectureReference: "This reflection integrates all the postmodern concepts covered in the lecture: multivalent communication, time-binding, spatial pluralism, and complexity and contradiction.",
          nextScene: ""
        }
      ],
      correctFeedback: "Thank you for completing this comprehensive exploration of postmodern architectural theory and practice!",
      incorrectFeedback: ""
    }
  ]
};
