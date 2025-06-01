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
    },
    {
      id: 4,
      title: "Site Context and Planning",
      description: "Responding to Wynyard Quarter's unique history and urban requirements.",
      context: "Dr. Chen nods approvingly at your spatial pluralism strategy before James Mitchell takes the lead. 'Your approach to cultural accommodation is well-considered,' he begins, 'but now we need to address the specific challenges of your chosen site. Wynyard Quarter isn't just any location—it has a complex industrial heritage and sits within Auckland's rapidly evolving waterfront district.'\n\nDr. Patel adds context: 'This area was formerly industrial—cement works, tank farms, rail yards. There's a tension between honoring that working-class heritage while serving the increasingly gentrified community that's moving in.'\n\nMaria Santos looks concerned: 'We've seen too many waterfront developments that erase working-class history in favor of sanitized recreational spaces. Your pavilion needs to acknowledge the site's industrial past while serving contemporary community needs.'\n\nJames Mitchell presents the challenge: 'Charles Jencks wrote about \"time-binding\" in architecture—how buildings can connect past, present, and future. Given Wynyard Quarter's industrial heritage and its current transformation, how will your design respond to this layered temporal context while meeting current planning requirements for density, connectivity, and environmental performance?'",
      question: "How will your design practice 'time-binding' to connect Wynyard Quarter's industrial past with its present transformation and future community needs?",
      options: [
        {
          id: "4a",
          title: "Temporal Layering Strategy",
          description: "Our design employs what Charles Jencks calls 'time-binding' through architectural palimpsest—visible layers that tell the site's story across different eras. We're retaining and reinterpreting existing industrial elements: concrete foundations become integrated seating, the industrial grid informs our structural rhythm, and materials like weathering steel reference the area's manufacturing heritage. Contemporary additions use glass and timber to distinguish new from old while creating visual dialogue. This creates what Jencks described as 'radical eclecticism'—different temporal layers coexisting in productive tension rather than false harmony.",
          approach: "Architectural palimpsest",
          isCorrect: true,
          feedback: "James Mitchell responds with clear enthusiasm: 'This is exactly the kind of sophisticated historical engagement that postmodern theory advocates. You're not trying to recreate the past or ignore it—you're creating what Jencks called \"radical eclecticism\" where different temporal layers can coexist and inform each other.'\n\nDr. Chen adds: 'The palimpsest concept is particularly appropriate here. Like a manuscript where earlier text shows through, your building allows the industrial past to remain visible while supporting new community functions. This is genuine time-binding.'\n\nDr. Patel nods: 'This approach respects the working-class heritage of the site without romanticizing it. You're acknowledging that places have multiple histories and that contemporary architecture can honor that complexity.'\n\nMaria Santos concludes: 'Most importantly, you're creating architecture that tells the story of change itself—how industrial sites can evolve to serve community needs while maintaining their identity and character.'",
          lectureReference: "Excellent application of Jencks' time-binding and radical eclecticism concepts.",
          nextScene: "5"
        },
        {
          id: "4b",
          title: "Industrial Heritage Preservation",
          description: "We're taking a conservation-first approach that preserves the site's authentic industrial character. Original concrete structures will be restored to their historical condition, while new pavilion elements are designed as clearly contemporary insertions that don't compete with the heritage fabric. This follows William Morris's preservation philosophy and Ruskin's principles of architectural authenticity. We're avoiding what Fredric Jameson called 'pastiche'—superficial historical imitation—in favor of genuine respect for the site's working-class origins and industrial authenticity.",
          approach: "Conservation authenticity",
          isCorrect: false,
          feedback: "Dr. Chen responds with concern: 'I'm afraid you're conflating several different theoretical approaches here. William Morris and John Ruskin were 19th-century preservationists, not postmodern theorists. Their ideas about architectural authenticity actually contradict postmodern principles about cultural change and adaptation.'\n\nJames Mitchell adds: 'More problematically, strict preservation often serves gentrification by creating \"authentic\" industrial aesthetics for affluent consumers rather than serving working-class communities. This is exactly what Fredric Jameson warned about—nostalgia that obscures real social change.'\n\nMaria Santos looks frustrated: 'Conservation-first approaches often freeze places in time rather than allowing them to evolve with community needs. We need architecture that honors the past while serving present and future residents.'\n\nDr. Patel concludes: 'Postmodern time-binding isn't about preserving the past unchanged—it's about creating productive dialogue between different temporal layers. Your approach sounds more like heritage tourism than community architecture.'",
          lectureReference: "Review the lecture section on 'Time-binding' where Jencks explains that postmodern architecture should create dialogue between past and present, not preserve one at the expense of the other.",
          nextScene: "4"
        },
        {
          id: "4c",
          title: "Contemporary Transformation Strategy",
          description: "Our approach prioritizes contemporary community needs over historical preservation. The industrial past represents an outdated economic model, and we're designing for Auckland's future as a knowledge economy and cultural hub. Clean lines, sustainable materials, and flexible programming reflect contemporary values of environmental responsibility and social inclusion. This follows what Daniel Bell called 'post-industrial society'—moving beyond manufacturing toward information and service-based community functions that serve today's diverse, educated, globally-connected residents.",
          approach: "Post-industrial transformation",
          isCorrect: false,
          feedback: "Maria Santos responds with visible frustration: 'This approach embodies exactly the kind of cultural erasure that displacement activists warn about. You're suggesting that working-class history is \"outdated\" and should be replaced by spaces for \"educated, globally-connected residents.\" This is textbook gentrification logic.'\n\nDr. Patel adds: 'Daniel Bell's post-industrial society theory has been heavily criticized for assuming that everyone benefits equally from economic transition. In reality, deindustrialization often displaced working-class communities without providing equivalent opportunities.'\n\nJames Mitchell looks concerned: 'From a planning perspective, this approach ignores the social displacement that accompanies waterfront redevelopment. Charles Jencks advocated for architecture that could accommodate multiple constituencies, not replace one group with another.'\n\nDr. Chen concludes: 'Postmodern theory specifically rejected this kind of modernist erasure of the past. Time-binding means creating connections across temporal and social differences, not eliminating them in favor of a single vision of progress.'",
          lectureReference: "Review the lecture section on 'Pluralism' where it explains that postmodern architecture should serve diverse communities simultaneously, not privilege one group over another.",
          nextScene: "4"
        },
        {
          id: "4d",
          title: "Contextual Integration Strategy",
          description: "We're using what Kenneth Frampton calls 'critical regionalism' to respond to Auckland's specific climate, topography, and urban context. The pavilion's orientation optimizes harbor views and prevailing winds, while materials reflect local geological conditions. Planning integration follows Kevin Lynch's 'image of the city' principles—creating clear wayfinding, memorable landmarks, and strong connections to the waterfront promenade. This approach transcends the industrial/post-industrial divide by focusing on enduring environmental and urban relationships.",
          approach: "Critical regionalism",
          isCorrect: false,
          feedback: "Dr. Chen responds with mixed assessment: 'Kenneth Frampton's critical regionalism is certainly relevant to contemporary practice, but it's not specifically a postmodern approach to time-binding. Frampton was actually quite critical of postmodern historicism, preferring to focus on climate and topography rather than cultural and temporal dialogue.'\n\nJames Mitchell adds: 'While environmental response is important, you're avoiding the central challenge we posed about temporal layering and social change. Critical regionalism tends to treat context as natural rather than historically constructed.'\n\nDr. Patel looks puzzled: 'Kevin Lynch's urban design principles are valuable, but they don't address the cultural and historical complexity of postcolonial Auckland. His approach was developed for American cities and may not translate directly to our context.'\n\nMaria Santos concludes: 'Most concerning, this approach seems to sidestep questions about social equity and community displacement by focusing on technical design solutions. Environmental response is important, but it's not sufficient for addressing the social dimensions of urban change.'",
          lectureReference: "Review the lecture section on 'Time-binding' where Jencks explains that postmodern architecture should engage with cultural and historical complexity, not just environmental factors.",
          nextScene: "4"
        }
      ],
      correctFeedback: "Excellent understanding of how architecture can bind different temporal layers together.",
      incorrectFeedback: "Consider how postmodern time-binding creates dialogue between past, present, and future rather than privileging one over others."
    },
    {
      id: 5,
      title: "Community Appeal and Usage",
      description: "Ensuring the design engages the public and supports diverse community activities.",
      context: "The committee exchanges impressed glances after your time-binding explanation. Maria Santos takes the lead for this next challenge with evident enthusiasm.\n\n'Your historical approach shows real sophistication,' Maria begins, 'but now I want to address the human dimension. We've seen many architecturally sophisticated projects that fail because they don't actually work for the communities they're supposed to serve.'\n\nDr. Patel nods: 'There's often a gap between architectural theory and everyday use. A building might successfully communicate postmodern principles to design professionals while being unwelcoming or confusing for families trying to hold a birthday party.'\n\nJames Mitchell adds: 'Robert Venturi wrote about \"both/and\" architecture that could work simultaneously for popular culture and high culture. Your pavilion needs to demonstrate this principle in practice.'\n\nMaria Santos presents the challenge: 'So here's our key question: How will your design ensure broad community appeal and support diverse activities—from children's art classes to cultural celebrations to informal social gatherings—while maintaining the architectural sophistication we've been discussing?'",
      question: "How will your design achieve Venturi's 'both/and' principle by appealing to popular culture and architectural sophistication simultaneously?",
      options: [
        {
          id: "5a",
          title: "Popular-Professional Integration",
          description: "Our design embodies Venturi's 'both/and' philosophy through what we call 'layered accessibility.' At the popular level, the pavilion offers immediately recognizable elements: a welcoming entrance with clear sightlines, comfortable seating areas, and intuitive wayfinding. Children can safely play while parents supervise from nearby cafes seating. At the professional level, these same elements demonstrate sophisticated design thinking: the entrance employs complex geometric relationships, seating integrates structural and social functions, and wayfinding creates sequential spatial experiences. Both audiences get what they need from the same architectural elements, but through different modes of engagement.",
          approach: "Layered accessibility",
          isCorrect: true,
          feedback: "Dr. Chen responds with clear approval: 'This demonstrates excellent understanding of Venturi's \"both/and\" principle. You're not creating separate spaces for different audiences—you're creating architectural richness that can be appreciated at multiple levels simultaneously.'\n\nMaria Santos adds enthusiastically: 'The key insight here is that you're respecting both popular and professional intelligence. Families don't need simplified architecture, and architecture professionals can appreciate spaces that work well for everyday activities.'\n\nJames Mitchell nods: 'This is exactly what Venturi meant by complexity and contradiction. Your building is both simple and sophisticated, both popular and professional, both functional and symbolic—all at the same time.'\n\nDr. Patel concludes: 'You're demonstrating that accessible design doesn't mean dumbed-down design. True architectural sophistication enhances rather than excludes everyday community use.'",
          lectureReference: "Perfect application of Venturi's 'both/and' philosophy and architectural complexity.",
          nextScene: "6a"
        },
        {
          id: "5b",
          title: "Programming Segregation Strategy",
          description: "We're creating distinct zones for different types of activities and users. The main hall serves large community events and can accommodate popular activities like markets, festivals, and sports viewing. A separate gallery wing provides contemplative space for art exhibitions and cultural programs that require quiet appreciation. Professional meeting rooms offer business-grade facilities for corporate events and academic conferences. This zoning approach follows Christopher Alexander's pattern language by matching architectural character to specific functional requirements.",
          approach: "Functional zoning",
          isCorrect: false,
          feedback: "Maria Santos responds with concern: 'This approach contradicts everything we've been discussing about pluralism and multivalent communication. You're segregating different communities rather than creating spaces where they can interact and learn from each other.'\n\nDr. Chen adds: 'Christopher Alexander's pattern language was about identifying universal human spatial needs, not about separating different cultural or economic groups. Your interpretation misses his emphasis on community integration.'\n\nJames Mitchell looks troubled: 'Venturi's \"both/and\" principle specifically rejected this kind of zoning approach. He argued that the best architecture could serve multiple functions and audiences simultaneously, not sequentially or separately.'\n\nDr. Patel concludes: 'Spatial segregation often reinforces social segregation. Instead of creating opportunities for cross-cultural exchange, you're potentially limiting community interaction to people who already share similar backgrounds and interests.'",
          lectureReference: "Review the lecture section on 'Both/And Architecture' where Venturi argues for architectural complexity that serves multiple purposes simultaneously, not spatial separation.",
          nextScene: "5"
        },
        {
          id: "5c",
          title: "Universal Design Strategy",
          description: "Our approach prioritizes accessibility and ease of use for all community members. Wide circulation paths accommodate wheelchairs and strollers, while clear signage in multiple languages ensures navigation for diverse populations. Flexible furniture systems allow spaces to be reconfigured for different cultural practices and group sizes. This follows the Americans with Disabilities Act guidelines and universal design principles developed by Ron Mace, creating architecture that works equally well for everyone regardless of age, ability, or cultural background.",
          approach: "Universal accessibility",
          isCorrect: false,
          feedback: "Dr. Chen responds with mixed concern: 'While accessibility is certainly important, universal design principles don't directly address Venturi's \"both/and\" philosophy about popular and professional architectural appreciation. You're focusing on functional accommodation rather than cultural complexity.'\n\nMaria Santos adds: 'There's also a subtle issue here. \"Universal\" design often means design based on dominant cultural norms presented as neutral. Different communities have different spatial practices that might not be served by standardized solutions.'\n\nJames Mitchell nods: 'The Americans with Disabilities Act provides important legal standards, but it doesn't address the architectural sophistication question we posed. Compliance with accessibility standards doesn't automatically create engaging or meaningful community space.'\n\nDr. Patel concludes: 'While Ron Mace's universal design principles are valuable, they don't engage with postmodern concerns about cultural difference and architectural meaning. You're describing barrier-free design, not culturally responsive architecture.'",
          lectureReference: "Review the lecture section on 'Complexity and Contradiction' where Venturi argues that architecture should embrace cultural richness rather than seek universal solutions.",
          nextScene: "5"
        },
        {
          id: "5d",
          title: "Popular Culture Integration",
          description: "We're embracing what Andy Warhol called 'pop architecture' by incorporating elements from popular culture and commercial design. The pavilion's exterior references familiar typologies like shopping centers and entertainment venues to ensure immediate recognition and comfort. Interior spaces use color schemes and materials drawn from successful retail and hospitality design. This approach follows Tom Wolfe's analysis of 'vernacular architecture'—learning from everyday commercial buildings that successfully attract and serve diverse populations rather than imposing academic architectural languages.",
          approach: "Commercial vernacular",
          isCorrect: false,
          feedback: "Dr. Chen responds with significant concern: 'I'm afraid you're confusing several different concepts here. Andy Warhol was a visual artist, not an architect, and he never wrote about \"pop architecture.\" Tom Wolfe was a journalist who was actually quite critical of modernist architecture, but he didn't advocate for commercial vernacular approaches.'\n\nJames Mitchell adds: 'More fundamentally, you're describing what Venturi warned against—reducing architecture to the lowest common denominator. \"Both/and\" doesn't mean abandoning architectural sophistication in favor of commercial familiarity.'\n\nMaria Santos looks frustrated: 'This approach treats communities as consumers rather than citizens. Shopping center design is optimized for retail consumption, not for the kind of cultural exchange and community building we need in a civic pavilion.'\n\nDr. Patel concludes: 'Postmodern architecture should certainly learn from vernacular and popular culture, but uncritically copying commercial design strategies misses the point. Venturi advocated for architectural complexity that could engage with popular culture while maintaining cultural and civic aspirations.'",
          lectureReference: "Review how postmodern architecture can incorporate environmental concerns while maintaining focus on cultural complexity and community engagement.",
          nextScene: "5"
        }
      ],
      correctFeedback: "Strong demonstration of how architecture can serve multiple audiences simultaneously.",
      incorrectFeedback: "Consider how postmodern architecture can be both popular and sophisticated without compromise."
    },
    {
      id: "6a",
      title: "Design Precedents",
      description: "Identifying and analyzing relevant architectural precedents that inform your approach.",
      context: "The committee appears increasingly confident in your approach. Dr. Chen takes the lead for this penultimate challenge with scholarly precision.\n\n'Your integration of popular and professional appeal demonstrates real maturity,' Dr. Chen begins, 'but now we need to understand how your thinking connects to the broader architectural discourse. No design exists in isolation—every significant project builds on, responds to, or challenges existing precedents.'\n\nJames Mitchell nods: 'The best postmodern projects demonstrate what Charles Jencks called \"double coding\"—they work as contemporary architecture while also engaging in dialogue with architectural history and theory.'\n\nDr. Patel adds: 'For a pavilion serving Auckland's diverse communities, you need precedents that address similar challenges of cultural pluralism, community engagement, and architectural sophistication in comparable urban contexts.'\n\nDr. Chen presents the challenge: 'So here's our question: Which architectural precedents most directly inform your approach, and how do they demonstrate the postmodern principles we've been discussing? We're looking for sophisticated analysis that shows how your design builds on existing knowledge while addressing Auckland's specific context.'",
      question: "Which architectural precedents best inform your postmodern community pavilion approach, and how do they demonstrate relevant design principles?",
      options: [
        {
          id: "6a1",
          title: "Postmodern Community Architecture",
          description: "Our primary precedents include Charles Moore's Piazza d'Italia in New Orleans, which demonstrates multivalent communication through classical references that speak to both popular culture and architectural history. Aldo Rossi's Cemetery of San Cataldo shows how architecture can bind different temporal layers together. More recently, Giancarlo De Carlo's student housing projects in Italy demonstrate participatory design processes that honor community input while maintaining architectural sophistication. These precedents show how postmodern principles can create meaningful public architecture that serves diverse communities.",
          approach: "Postmodern community precedents",
          isCorrect: true,
          feedback: "Dr. Chen responds with evident satisfaction: 'This demonstrates excellent understanding of how postmodern theory translates into built projects. Moore's Piazza d'Italia is indeed a paradigmatic example of multivalent communication—it works both as popular entertainment and as sophisticated architectural commentary.'\n\nJames Mitchell adds: 'Aldo Rossi's approach to temporal layering is particularly relevant to your Wynyard Quarter context. His Cemetery shows how new architecture can honor historical complexity without literal reproduction.'\n\nDr. Patel nods: 'Giancarlo De Carlo's participatory approach bridges the gap between architectural sophistication and community agency. His projects show that involving communities in design processes can enhance rather than compromise architectural quality.'\n\nMaria Santos concludes: 'These precedents all demonstrate that postmodern architecture can be both intellectually rigorous and socially responsive. They provide a strong foundation for your Auckland pavilion proposal.'",
          lectureReference: "Excellent selection of precedents that demonstrate core postmodern principles in community architecture.",
          nextScene: "6b"
        },
        {
          id: "6a2",
          title: "Multicultural Architecture Precedents",
          description: "Our key precedents include Hassan Fathy's New Gourna village in Egypt, which demonstrates respectful integration of local building traditions. Charles Correa's housing projects in India show how modern architecture can accommodate diverse cultural practices. Louis Kahn's Salk Institute proves that monumental concrete architecture can create contemplative community spaces. These precedents demonstrate successful integration of cultural diversity, community function, and architectural excellence in developing world contexts that parallel Auckland's multicultural challenges.",
          approach: "Developing world modernism",
          isCorrect: false,
          feedback: "Dr. Patel responds with concern: 'While these are certainly important architects, they don't represent postmodern approaches to community architecture. Hassan Fathy, Charles Correa, and Louis Kahn were all modernist architects working in very different cultural and economic contexts than contemporary Auckland.'\n\nDr. Chen adds: 'More problematically, you're conflating \"multicultural\" with \"developing world\" architecture. Auckland's cultural diversity doesn't make it analogous to 1960s Egypt or India. This kind of comparison can perpetuate colonial assumptions about cultural difference.'\n\nJames Mitchell looks troubled: 'These precedents don't address the specific postmodern principles we've been discussing—multivalent communication, time-binding, radical eclecticism. They represent earlier modernist approaches to community and culture.'\n\nMaria Santos concludes: 'While these architects certainly addressed important social questions, their approaches don't provide guidance for the pluralistic, historically-conscious architecture we're seeking for Wynyard Quarter.'",
          lectureReference: "Review the lecture sections on postmodern theory to understand how it differs from modernist approaches to cultural context, even progressive ones.",
          nextScene: "6a"
        },
        {
          id: "6a3",
          title: "Contemporary Pavilion Precedents",
          description: "Our precedents focus on recent pavilion projects that demonstrate technical and formal innovation. Zaha Hadid's serpentine pavilions show how parametric design can create dynamic community spaces. BIG's Via 57 West demonstrates efficient programming within distinctive architectural forms. Foster + Partners' Apple Park visitor center proves that corporate architecture can serve community functions. These precedents show how contemporary digital design tools and global architectural practice can create iconic buildings that attract diverse audiences through formal sophistication.",
          approach: "Contemporary iconic architecture",
          isCorrect: false,
          feedback: "Dr. Chen responds with clear concern: 'These precedents represent exactly the kind of \"starchitecture\" that postmodern theorists warned against. Zaha Hadid, BIG, and Foster + Partners are all committed to modernist formal innovation rather than the cultural complexity and community engagement we've been discussing.'\n\nMaria Santos looks frustrated: 'Corporate architecture like Apple Park is designed to serve brand identity and consumer experience, not genuine community needs. These precedents suggest priorities that contradict everything we've discussed about pluralism and cultural responsiveness.'\n\nJames Mitchell adds: 'Parametric design and iconic form-making don't address the postmodern principles of multivalent communication and time-binding. These precedents focus on formal spectacle rather than cultural meaning.'\n\nDr. Patel concludes: 'While these buildings might attract attention, they don't demonstrate the kind of community-centered, historically-conscious architecture that postmodern theory advocates. They represent the continuation of modernist approaches under contemporary technical conditions.'",
          lectureReference: "Review how postmodern architecture can incorporate environmental concerns while maintaining focus on cultural complexity and community engagement.",
          nextScene: "6a"
        },
        {
          id: "6a4",
          title: "Sustainable Community Architecture",
          description: "Our precedents emphasize environmental responsibility and community resilience. Diébédo Francis Kéré's Gando School Library demonstrates how local materials and climate-responsive design can create inspiring community architecture. Rural Studio's $20K House shows how affordable construction can maintain architectural quality. The Living Building Challenge projects prove that sustainable architecture can meet the highest environmental standards while serving diverse communities. These precedents show how ecological design principles can guide community-centered architecture in the climate change era.",
          approach: "Sustainable community design",
          isCorrect: false,
          feedback: "James Mitchell responds with mixed assessment: 'While environmental sustainability is certainly important for contemporary practice, these precedents don't directly address the postmodern theoretical frameworks we've been discussing throughout this review.'\n\nDr. Chen adds: 'Francis Kéré's work is admirable, but it represents a different approach to community and culture than what postmodern theory advocates. His focus on local materials and climate response is more aligned with critical regionalism than with multivalent communication or time-binding.'\n\nDr. Patel nods: 'The Living Building Challenge provides important technical standards, but environmental performance metrics don't address questions about cultural pluralism, historical complexity, or architectural meaning that are central to your pavilion brief.'\n\nMaria Santos concludes: 'While we certainly support sustainable design, these precedents suggest that environmental concerns should take priority over the cultural and social dimensions we've been exploring. For a community pavilion in a culturally diverse urban context, we need precedents that address both sustainability and social complexity.'",
          lectureReference: "Review how postmodern architecture can incorporate environmental concerns while maintaining focus on cultural complexity and community engagement.",
          nextScene: "6a"
        }
      ],
      correctFeedback: "Excellent selection and analysis of relevant postmodern community architecture precedents.",
      incorrectFeedback: "Consider precedents that specifically demonstrate postmodern principles in community architecture contexts."
    },
    {
      id: "6b",
      title: "Design Precedents Justification",
      description: "Explaining how your selected precedents translate into specific design strategies.",
      context: "Dr. Chen nods approvingly at your precedent analysis before continuing with increased intensity.\n\n'Your precedent selection demonstrates solid theoretical grounding,' Dr. Chen continues, 'but now comes the critical test: how do these precedents actually inform your specific design decisions? We've seen many presentations where architects cite impressive precedents but fail to demonstrate how that knowledge translates into their own project.'\n\nJames Mitchell leans forward: 'Charles Jencks warned against what he called \"precedent shopping\"—superficially referencing important projects without genuinely learning from their design strategies. We need to understand how Moore's multivalent communication, Rossi's temporal layering, and De Carlo's participatory approach specifically inform your pavilion design.'\n\nDr. Patel adds: 'The test of good precedent analysis is whether it leads to design innovations that are both theoretically informed and contextually appropriate. Your Auckland pavilion should advance postmodern thinking, not just repeat existing solutions.'\n\nDr. Chen presents the final design challenge: 'So here's our concluding question: How do your precedents translate into specific design strategies for your Wynyard Quarter pavilion? We want to understand the direct connections between theoretical knowledge and design innovation.'",
      question: "How do your postmodern precedents translate into specific, innovative design strategies for your Wynyard Quarter pavilion?",
      options: [
        {
          id: "6b1",
          title: "Integrated Design Strategy",
          description: "From Moore's Piazza d'Italia, we're adopting layered referential systems—our structural grid references both Auckland's colonial planning and Pacific navigation patterns, readable differently by different communities. From Rossi's temporal approach, we're creating what we call 'industrial palimpsest'—existing concrete foundations become integrated community seating while new timber structures create dialogue between past and present. From De Carlo's participatory model, we're designing 'community completion zones'—spaces deliberately left flexible for communities to finish according to their own cultural practices and changing needs.",
          approach: "Synthesized precedent application",
          isCorrect: true,
          feedback: "Dr. Chen responds with clear satisfaction: 'This demonstrates exactly the kind of sophisticated precedent application we were hoping to see. You're not copying these projects—you're extracting their design principles and applying them to your specific context and program.'\n\nJames Mitchell adds enthusiastically: 'The \"industrial palimpsest\" concept shows genuine innovation. You're using Rossi's temporal layering principle but adapting it to Auckland's specific industrial heritage and contemporary community needs.'\n\nDr. Patel nods: 'The \"community completion zones\" idea is particularly clever. It takes De Carlo's participatory approach but translates it into architectural language—creating spaces that invite community agency without abdicating the architect's responsibility for overall design quality.'\n\nMaria Santos concludes: 'Your layered referential system shows real understanding of how multivalent communication can work in practice. Different communities can read the same architectural elements through different cultural lenses while sharing the same spaces. This is exactly what we hoped to see from a sophisticated postmodern proposal.'",
          lectureReference: "Excellent demonstration of how theoretical precedents can inform innovative design strategies.",
          nextScene: "7"
        },
        {
          id: "6b2",
          title: "Stylistic Adaptation Strategy",
          description: "We're incorporating visual elements from each precedent into our design vocabulary. The entrance colonnade references Moore's classical orders but uses New Zealand timber instead of stone. The main hall's proportional system follows Rossi's geometric approach but adapts his European measurements to Pacific spatial concepts. Community workshop areas use De Carlo's modular construction techniques but employ local materials and building methods. This creates a distinctive Auckland architectural language that honors international precedents while expressing local identity.",
          approach: "Stylistic synthesis",
          isCorrect: false,
          feedback: "Dr. Chen responds with disappointment: 'I'm afraid this represents exactly the kind of superficial precedent application that Jencks warned against. You're treating these projects as style sources rather than learning from their design thinking.'\n\nJames Mitchell adds: 'Moore's Piazza d'Italia works because of its complex relationship to both popular culture and architectural history, not because of its classical details. Copying his colonnade misses the point entirely.'\n\nDr. Patel looks concerned: 'This approach treats precedents like a catalog of formal elements to be mixed and matched. It doesn't demonstrate understanding of how these architects actually solved design problems or engaged with their communities.'\n\nMaria Santos concludes: 'Stylistic adaptation often leads to architecture that looks sophisticated but doesn't actually function well for community needs. We're looking for design strategies, not visual references.'",
          lectureReference: "Review the lecture section on 'Precedent Analysis' to understand the difference between learning from design strategies versus copying stylistic elements.",
          nextScene: "6b"
        },
        {
          id: "6b3",
          title: "Programmatic Translation Strategy",
          description: "We're adapting the functional strategies from our precedents to Auckland's specific community needs. Moore's mixed-use approach becomes our integration of cultural programming with commercial activities like cafes and markets. Rossi's institutional typology informs our approach to creating civic dignity while maintaining community accessibility. De Carlo's student housing strategies translate into flexible live-work spaces that can accommodate Auckland's creative communities and startup culture. This ensures our pavilion serves contemporary economic and social patterns rather than just architectural theory.",
          approach: "Functional adaptation",
          isCorrect: false,
          feedback: "Dr. Chen responds with concern: 'You're focusing on programmatic adaptation rather than design strategy. Moore's Piazza d'Italia isn't significant because of its mixed-use programming—it's important because of how it communicates with multiple audiences simultaneously.'\n\nJames Mitchell adds: 'Rossi's Cemetery isn't about \"institutional typology\"—it's about how architecture can bind different temporal layers together. You're missing the theoretical content that makes these precedents relevant to postmodern practice.'\n\nDr. Patel looks puzzled: 'De Carlo's student housing projects aren't about flexible live-work spaces—they're about participatory design processes that respect community input while maintaining architectural sophistication.'\n\nMaria Santos concludes: 'While program adaptation is certainly important, it doesn't address the deeper questions about architectural meaning, cultural communication, and temporal complexity that these precedents actually explore. You're treating architecture as functional accommodation rather than cultural communication.'",
          lectureReference: "Review how postmodern precedents address questions of architectural meaning and cultural communication, not just functional programming.",
          nextScene: "6b"
        },
        {
          id: "6b4",
          title: "Technical Innovation Strategy",
          description: "We're using contemporary construction technologies to advance the design strategies pioneered by our precedents. Digital fabrication allows us to create complex geometries that extend Moore's layered referential systems. Parametric design tools enable more sophisticated temporal layering than Rossi could achieve with traditional construction. Online collaboration platforms expand De Carlo's participatory design process to include virtual community input and real-time design feedback. This shows how emerging technologies can enhance postmodern design principles for 21st-century practice.",
          approach: "Technological advancement",
          isCorrect: false,
          feedback: "Dr. Chen responds with clear concern: 'This approach fundamentally misunderstands what made these precedents significant. Moore's multivalent communication worked through cultural references and spatial relationships, not through complex geometries. Digital fabrication doesn't automatically create better architecture.'\n\nJames Mitchell adds: 'Rossi's temporal layering was about conceptual and cultural relationships between past and present, not about constructing complex forms. Parametric design tools don't address the fundamental questions about meaning and memory that his work explored.'\n\nDr. Patel looks troubled: 'De Carlo's participatory approach was about respecting community knowledge and cultural practices, not about using digital platforms for design input. Virtual collaboration can't replace the kind of deep community engagement his projects achieved.'\n\nMaria Santos concludes: 'Technology can certainly support good design, but it's not a substitute for the cultural understanding and community engagement that postmodern architecture requires. These precedents succeeded because of their social and cultural sophistication, not their technical innovation.'",
          lectureReference: "Review how postmodern architecture prioritizes cultural meaning and social engagement over technical innovation for its own sake.",
          nextScene: "6b"
        }
      ],
      correctFeedback: "Outstanding demonstration of how precedent analysis translates into innovative design strategies.",
      incorrectFeedback: "Consider how precedents provide design strategies and principles, not just stylistic or technical approaches."
    },
    {
      id: 7,
      title: "Final Committee Assessment",
      description: "The committee delivers their verdict and invites your reflection on the design process.",
      context: "The committee exchanges significant glances as you complete your precedent justification. The energy in the room has clearly shifted—from initial skepticism through growing engagement to what now feels like genuine respect for your postmodern approach.\n\nDr. Chen speaks first: 'This has been an impressive presentation that demonstrates sophisticated understanding of postmodern architectural principles and their practical application to community design challenges.'\n\nJames Mitchell nods: 'Your pavilion proposal successfully addresses the complex requirements we outlined—multivalent communication, cultural pluralism, temporal layering, community engagement, and theoretical sophistication. You've shown how postmodern principles can guide contemporary practice.'\n\nMaria Santos adds warmly: 'Most importantly, you've demonstrated that architectural sophistication and community responsiveness aren't competing goals—they can enhance each other when guided by thoughtful theoretical understanding.'\n\nDr. Patel concludes: 'Your design for Wynyard Quarter shows genuine promise for creating architecture that honors Auckland's industrial heritage while serving its evolving communities. This represents exactly the kind of culturally-conscious, theoretically-informed practice we hope to see from emerging architects.'\n\nDr. Chen addresses you directly: 'Before we conclude, we'd like you to reflect briefly on this design process. What insights about postmodern architecture and community engagement will you carry forward into your future practice?'",
      question: "Reflecting on this design challenge, what key insights about postmodern architecture and community engagement will guide your future practice?",
      options: [],
      correctFeedback: "Congratulations on completing the ArchHTC237 Postmodern Pavilion Design Challenge! Your thoughtful engagement with postmodern principles demonstrates readiness for advanced architectural practice.",
      incorrectFeedback: ""
    }
  ]
};
