
import { ScenarioData } from '@/types/scenario';

export const updatedScenarioData: ScenarioData = {
  title: "Postmodern Pavilion Design Challenge",
  description: "An immersive architectural design experience for university students studying postmodernism.",
  characters: [
    {
      id: "dr-chen",
      name: "Dr. Sarah Chen",
      title: "Architectural Historian",
      description: "Leading expert in postmodern architectural theory and practice.",
      personality: "Intellectually rigorous, values theoretical depth and practical application.",
      avatar: "/avatars/dr_chen_avatar.png"
    },
    {
      id: "maria-santos",
      name: "Maria Santos",
      title: "Community Advocate",
      description: "Specialist in community engagement and inclusive design processes.",
      personality: "Passionate and inclusive, represents community interests.",
      avatar: "/avatars/maria_santos_avatar.png"
    },
    {
      id: "james-mitchell",
      name: "James Mitchell",
      title: "Urban Planner",
      description: "Professional architect with extensive public project experience.",
      personality: "Practical and collaborative, focuses on real-world application.",
      avatar: "/avatars/james_mitchell_avatar.png"
    },
    {
      id: "dr-awhina-patel",
      name: "Dr. Awhina Patel", // Updated name
      title: "Cultural Heritage Representative", // Updated role
      description: "Expert in multicultural design and historical context expert.",
      personality: "Thoughtful and sensitive, bridges culture and design.",
      avatar: "/avatars/dr_patel_avatar.png" // Assuming this is the intended avatar for Dr. Awhina Patel
    }
  ],
  scenes: [
    // Scene 1: Introduction and Briefing
    {
      id: 1,
      title: "Introduction and Briefing",
      description: "The design review meeting begins. The committee outlines the project brief and expectations for a postmodern approach.",
      context: `The scenario opens with the student (as a junior architect or designer) arriving at a concept design review meeting for a proposed community pavilion at Wynyard Point. The review committee is introduced: it includes an Urban Planner (James Mitchell), an Architectural Historian (Dr. Sarah Chen), a Community Advocate (Maria Santos), and a Cultural Heritage Representative (Dr. Awhina Patel) from the local community. Each has a stake in the project’s outcome. The chair of the committee (James Mitchell, as Urban Planner) outlines the context:

“Thank you for coming. As you know, Wynyard Quarter is a unique waterfront area with a rich history and a diverse community. We’re looking for a pavilion design that can become a vibrant gathering place. In our brief we asked designers for a postmodern approach – something creative, symbolic, and tuned to context, in contrast to the bland modernist boxes we often see. We’re excited to hear how you’ve tackled this challenge. Please walk us through your concept.”

The student is thus reminded that a Postmodern design ethos is expected. The atmosphere is polite but professional. The committee signals that they will be asking questions focusing on different aspects: the overall design concept, how it reflects local culture, how it fits the site and practical needs, and how it will appeal to everyday people. The student has a chance to mentally prepare as the first question comes from the Architectural Historian, who is curious about the philosophical direction of the design.`,
      question: `“Before we get into details, tell us about the design philosophy behind this pavilion. What is the concept or approach that guided your design?”`, // Moved from Scene 2: Decision Point 1 per user text flow
      options: [], // Scene 1 is introductory as per previous app structure; decision point starts with Scene 2 options.
                  // If Scene 1 should have options based on "Design Philosophy/Concept", that would be a structural change.
                  // For now, keeping Scene 1 as pass-through. The question above will appear on Scene 1 screen,
                  // but options will be presented with Scene 2.
      correctFeedback: "",
      incorrectFeedback: ""
    },
    // Scene 2: Design Communication Strategy
    {
      id: 2,
      title: "Design Communication Strategy",
      description: "How will your design communicate meaningfully with Wynyard Quarter's diverse audiences—from local families to architecture professionals—without excluding anyone?",
      context: `The committee settles back in their chairs, their initial impressions of your contextual postmodern approach clearly positive. The afternoon light streams through the floor-to-ceiling windows of the Wynyard Quarter meeting room, illuminating the harbour beyond where old industrial cranes stand as silent monuments to the area's maritime past.

Dr. Sarah Chen, the Architectural Historian, leans forward with genuine interest. "Your opening remarks about contextual postmodernism have certainly caught our attention. But now we need to understand the specifics." She gestures toward the presentation screen. "This pavilion will be encountered by thousands of people - families on weekend outings, tourists discovering Auckland, office workers grabbing lunch, architectural students on field trips. How exactly will your design communicate with this incredibly diverse audience? What's your strategy for making architecture that speaks meaningfully to people?"

The Urban Planner, James Mitchell, adds with a slight smile, "And please, help us understand this in concrete terms. We've sat through too many presentations where architects speak in abstract generalities about 'creating dialogue' without explaining how a building actually does that."

The Community Advocate, Maria Santos, nods emphatically. "Exactly. We need to know that this isn't just architecture for architects. How will regular Aucklanders - people who've never studied design theory - actually connect with this building?"

The Cultural Heritage Representative, Dr. Awhina Patel, concludes the committee's challenge: "Communication in architecture isn't neutral. Every design choice sends messages, whether intentional or not. We want to understand what messages your pavilion will send, and to whom."`,
      question: "Your response:",
      options: [
        {
          id: "s2-opA-iconic-representation",
          title: "Iconic Representation Strategy",
          description: `Our strategy uses iconic forms that people recognize through visual similarity. The pavilion's profile echoes Auckland's volcanic cones, while the entrance references harbour sailing vessels. We're using weathering steel to match the industrial structures around Wynyard, creating visual continuity. This follows Charles Jencks' approach to architectural iconography - familiar elements recomposed in new ways that create both recognition and interest.`,
          approach: `Our strategy uses iconic forms that people recognize through visual similarity. The pavilion's profile echoes Auckland's volcanic cones, while the entrance references harbour sailing vessels. We're using weathering steel to match the industrial structures around Wynyard, creating visual continuity. This follows Charles Jencks' approach to architectural iconography - familiar elements recomposed in new ways that create both recognition and interest.`,
          isCorrect: true, // "partially correct", Outcome: "The scenario continues..."
          feedback: `Dr. Chen nods thoughtfully. "Your reference to iconic representation shows you understand Pierce's semiotic categories, and the connection to Jencks' work is appropriate. The volcanic cone reference is particularly clever - most Aucklanders would recognize that profile even if they couldn't articulate why."

James Mitchell seems impressed by the practical application: "The weathering steel detail demonstrates real understanding of how architectural communication works over time - the building will literally develop a visual conversation with its industrial context."

However, Maria Santos raises a concern: "While this approach will certainly create recognition, I'm wondering about depth of engagement. Pierce's iconic signs work through similarity, but what happens after that initial recognition? Does the building have anything more to say?"

Dr. Awhina Patel adds: "There's also the question of whose visual vocabulary you're drawing from. Auckland's volcanic landscape is certainly recognizable, but it represents just one layer of this place's identity. Your approach seems to prioritize geological and maritime references - what about the cultural and social layers?"

Scenario Outcome: This is a solid postmodern approach that demonstrates understanding of iconic communication, but the committee wants to explore whether your strategy has sufficient depth and inclusivity. The scenario continues, but they'll be looking for more sophisticated responses in subsequent decisions.`,
          lectureReference: ""
        },
        {
          id: "s2-opB-symbolic-encoding",
          title: "Symbolic Encoding Strategy",
          description: `We're embedding symbolic content that reveals itself through interpretation. The structural grid combines proportional systems from both European and Pacific traditions, while the three main spaces represent past, present, and future. Materials work symbolically too - stone base for geological foundation, lighter structures above for human activity. This follows Roland Barthes' ideas about cultural codes operating beneath surface appearances.`,
          approach: `We're embedding symbolic content that reveals itself through interpretation. The structural grid combines proportional systems from both European and Pacific traditions, while the three main spaces represent past, present, and future. Materials work symbolically too - stone base for geological foundation, lighter structures above for human activity. This follows Roland Barthes' ideas about cultural codes operating beneath surface appearances.`,
          isCorrect: false,
          feedback: `Dr. Awhina Patel responds with interest: "Your reference to symbolic communication shows sophisticated understanding of how meaning operates in architecture. The proportional system integration is particularly thoughtful - it suggests genuine engagement with cultural plurality rather than superficial decoration."

However, Dr. Chen raises a critical concern: "While I appreciate the theoretical sophistication, I'm worried about accessibility. Barthes' cultural codes work for those who already possess the cultural knowledge to decode them. What about visitors who don't have background in architectural history or cultural symbolism? Are you creating what Jencks criticized as architecture that speaks only to the initiated?"

James Mitchell adds: "There's also a practical issue. If the symbolic content requires interpretation to be meaningful, how do you ensure that interpretation actually happens? Are you planning interpretive materials, or do you expect the architecture to communicate these meanings independently?"

Maria Santos voices the community perspective: "This sounds intellectually rich, but I'm concerned it might create barriers rather than bridges. If someone needs specialized knowledge to 'get' the building, does that make it exclusive rather than inclusive?"

Scenario Outcome: Your symbolic approach demonstrates theoretical knowledge, but the committee has significant concerns about accessibility and inclusivity. This path leads to critical feedback about postmodernism's goal of speaking to diverse audiences, not just cultural elites. You'll need to address these concerns in subsequent decisions to avoid scenario failure.`,
          lectureReference: ""
        },
        {
          id: "s2-opC-direct-communicative",
          title: "Direct Communicative Strategy",
          description: `We believe in functional clarity and honest expression. The rectangular plan clearly indicates community meeting use, while large glazed openings signal transparency. Following Louis Sullivan's 'form follows function,' every element has a clear purpose. We're avoiding what Charles Jencks called 'semantic confusion' by ensuring intuitive organization and appropriate materials that speak their structural language.`,
          approach: `We believe in functional clarity and honest expression. The rectangular plan clearly indicates community meeting use, while large glazed openings signal transparency. Following Louis Sullivan's 'form follows function,' every element has a clear purpose. We're avoiding what Charles Jencks called 'semantic confusion' by ensuring intuitive organization and appropriate materials that speak their structural language.`,
          isCorrect: false,
          feedback: `The committee exchanges glances, and Dr. Chen responds with barely concealed concern: "I'm afraid there are some significant misunderstandings in your approach. First, Charles Jencks never used the term 'semantic confusion' - in fact, he advocated for what he called 'multivalent' architecture that deliberately embraces multiple meanings rather than avoiding them."

James Mitchell adds: "More fundamentally, you're describing classic modernist principles - Sullivan's functionalism, Loos's architectural honesty - but we specifically briefed for a postmodern approach. Jencks famously declared modernism 'dead' precisely because this kind of reductive communication failed to engage with the complexity of contemporary culture."

Maria Santos looks confused: "Are you suggesting that architectural communication should be limited to functional expression? What about the cultural, social, and symbolic dimensions that make buildings meaningful to communities?"

Dr. Awhina Patel concludes: "Robert Venturi never advocated for 'meaningful simplicity' - quite the opposite. His famous response to Mies van der Rohe's 'less is more' was 'less is a bore.' He argued for complexity and contradiction as essential to meaningful architecture."

Scenario Outcome: This response demonstrates fundamental misunderstanding of postmodern principles and misattributes concepts to theorists who opposed them. The committee is deeply concerned about your grasp of the brief. The scenario ends here with strong feedback about the difference between modernist and postmodern communication strategies, and you're encouraged to restart with a clearer understanding of postmodern theory.`,
          lectureReference: ""
        },
        {
          id: "s2-opD-multivalent-communication",
          title: "Multivalent Communication Strategy",
          description: `Our approach creates what Charles Jencks calls 'multivalent' architecture - buildings that communicate on multiple levels simultaneously. Families see inviting community spaces with playful forms and welcoming scales. Architects read the same elements as sophisticated geometric systems and spatial complexity. The building practices 'time-binding' by connecting to Wynyard's character without nostalgic copying.`,
          approach: `Our approach creates what Charles Jencks calls 'multivalent' architecture - buildings that communicate on multiple levels simultaneously. Families see inviting community spaces with playful forms and welcoming scales. Architects read the same elements as sophisticated geometric systems and spatial complexity. The building practices 'time-binding' by connecting to Wynyard's character without nostalgic copying.`,
          isCorrect": true,
          feedback: `Dr. Chen smiles with genuine approval: "Now this demonstrates real understanding of postmodern communication theory. Your reference to multivalent architecture directly addresses Jencks' central insight that the best buildings speak to diverse audiences without talking down to any of them."

Maria Santos responds enthusiastically: "This is exactly what we hoped to hear. You're describing architecture that works immediately for everyone while also offering more to those who want to engage more deeply. That's genuine inclusivity."

James Mitchell nods: "The practical applications you've described - the variety of spatial types, the intuitive organization - show you understand that multivalent communication isn't just theoretical. It has to work in real spatial and social terms."

Dr. Awhina Patel adds: "Your understanding of time-binding is particularly sophisticated. You're describing how buildings can honour context without copying it, which is exactly what successful postmodern architecture achieves."

Dr. Chen concludes: "This response suggests you have the theoretical foundation to develop a truly successful postmodern pavilion. We're eager to see how you apply these communication principles to the specific challenges ahead."

Scenario Outcome: Excellent response that demonstrates deep understanding of multivalent communication and postmodern theory. The committee is convinced of your conceptual approach and ready to explore more specific design decisions. The scenario continues with positive momentum, and your subsequent choices will build on this strong foundation.`,
          lectureReference: ""
        }
      ],
      correctFeedback: "",
      incorrectFeedback: ""
    },
    // Scene 3: Pluralistic Design Approach
    {
      id: 3,
      title: "Pluralistic Design Approach",
      description: "The committee explores how your design will achieve genuine cultural pluralism beyond visuals or symbols.",
      context: `The committee members exchange satisfied glances after your multivalent communication strategy response. Dr. Chen makes a quick note before looking up with renewed focus.

"Your understanding of multivalent architecture is promising," she begins, "but now we need to get more specific about implementation. Auckland is one of the world's most ethnically diverse cities - over 200 different ethnicities call this place home. Add to that the full spectrum of socioeconomic backgrounds, ages, architectural literacy levels, and cultural experiences."

Maria Santos leans forward with intensity: "We've seen too many projects that claim to be 'inclusive' but end up speaking mainly to educated middle-class audiences. Others try to represent diversity through superficial cultural symbols that feel tokenistic. We need to understand exactly how your design will achieve genuine pluralism."

James Mitchell adds: "There's also the practical dimension. This pavilion will host everything from children's birthday parties to business networking events, from cultural celebrations to quiet individual reflection. How does pluralistic design actually work in spatial and functional terms?"

Dr. Awhina Patel concludes the challenge: "The postmodern theorists wrote extensively about pluralism, but they often focused on theoretical concepts rather than lived reality. We want to know how you'll translate pluralistic principles into architecture that actually serves this diverse community."

The room falls quiet as all eyes turn to you. This is clearly a critical moment in your presentation.`,
      question: "Your response:",
      options: [
        {
          id: "s3-opA-spatial-pluralism",
          title: "Spatial Pluralism Strategy",
          description: `Our pluralistic approach creates what Charles Jencks calls 'architectural variety' through diverse spatial experiences within a coherent whole. The pavilion includes intimate alcoves for quiet conversation, medium-scale gathering areas for community meetings, and a large flexible hall for major events. Each space has different acoustic properties, lighting conditions, and sight lines to support different activities and cultural practices. We've also designed transitional zones that allow people to move gradually between public and private experiences, respecting different cultural approaches to social interaction.`,
          approach: `Our pluralistic approach creates what Charles Jencks calls 'architectural variety' through diverse spatial experiences within a coherent whole. The pavilion includes intimate alcoves for quiet conversation, medium-scale gathering areas for community meetings, and a large flexible hall for major events. Each space has different acoustic properties, lighting conditions, and sight lines to support different activities and cultural practices. We've also designed transitional zones that allow people to move gradually between public and private experiences, respecting different cultural approaches to social interaction.`,
          isCorrect: true,
          feedback: `Dr. Chen responds with evident approval: "This demonstrates sophisticated understanding of how pluralism actually works in architecture. You're describing what Jencks meant by architectural variety - not just visual differences, but functional and experiential diversity that serves different community needs."

Maria Santos adds enthusiastically: "The transitional zones are particularly important. Different cultures have very different concepts of privacy and social interaction. Your spatial strategy acknowledges this without stereotyping any particular group."

James Mitchell nods: "This is practical pluralism. You're showing how theoretical concepts translate into liveable spaces that can actually accommodate the diversity of activities we expect this pavilion to host."

Dr. Awhina Patel concludes: "Your approach respects cultural differences without tokenism. The variety of spatial experiences allows different communities to use the building in ways that feel appropriate to them."

Outcome: Excellent response. Continue to next scene.`,
          lectureReference": ""
        },
        {
          id: "s3-opB-cultural-symbols",
          title: "Cultural Symbols Integration",
          description: `We're incorporating symbolic elements from Auckland's major cultural communities throughout the design. The entrance features geometric patterns inspired by Māori kowhaiwhai, while the main gathering space includes Pacific navigation motifs and Asian-influenced garden elements. European classical proportions provide the underlying organizational structure. This follows what Robert Venturi described as 'inclusive symbolism' - bringing together diverse cultural languages in one architectural composition that represents our multicultural society.`,
          approach: `We're incorporating symbolic elements from Auckland's major cultural communities throughout the design. The entrance features geometric patterns inspired by Māori kowhaiwhai, while the main gathering space includes Pacific navigation motifs and Asian-influenced garden elements. European classical proportions provide the underlying organizational structure. This follows what Robert Venturi described as 'inclusive symbolism' - bringing together diverse cultural languages in one architectural composition that represents our multicultural society.`,
          isCorrect: false,
          feedback: `Dr. Awhina Patel responds with visible concern: "I'm afraid this approach reflects exactly the kind of tokenistic multiculturalism that postmodern theorists warned against. You're describing what James Clifford called 'cultural display' rather than genuine pluralism."

Dr. Chen adds: "Robert Venturi never wrote about 'inclusive symbolism' in the way you've described. His approach was much more subtle - he advocated for complexity and contradiction, not direct cultural representation through decorative symbols."

Maria Santos looks frustrated: "This kind of approach often makes communities feel like their cultures are being used as decoration rather than genuinely respected. It's what critics call 'diversity theatre' - visible symbols without meaningful inclusion."

James Mitchell concludes: "There's also a practical issue. Static cultural symbols can't accommodate the dynamic, evolving nature of how communities actually use spaces. You're designing a museum display, not a living community building."

Outcome: This response demonstrates misunderstanding of pluralism vs. tokenism. Please review the lecture content on Jencks' concept of pluralism and Venturi's ideas about complexity and contradiction. Consider how genuine pluralism might work through spatial flexibility rather than symbolic representation, then try again.`,
          lectureReference": ""
        },
        {
          id: "s3-opC-universal-accessibility",
          title: "Universal Accessibility Approach",
          description: `Our strategy focuses on creating spaces that work equally well for everyone, regardless of cultural background or architectural knowledge. We're following what Jencks called 'democratic modernism' - clean, simple forms with excellent functionality and barrier-free access. The design avoids specific cultural references that might exclude some groups, instead emphasizing universal human needs like shelter, gathering, and social connection. High-quality materials and generous proportions ensure the space feels welcoming to all users.`,
          approach: `Our strategy focuses on creating spaces that work equally well for everyone, regardless of cultural background or architectural knowledge. We're following what Jencks called 'democratic modernism' - clean, simple forms with excellent functionality and barrier-free access. The design avoids specific cultural references that might exclude some groups, instead emphasizing universal human needs like shelter, gathering, and social connection. High-quality materials and generous proportions ensure the space feels welcoming to all users.`,
          isCorrect: false,
          feedback: `Dr. Chen responds with surprise: "Charles Jencks never advocated for 'democratic modernism' - quite the opposite. He famously criticized modernism's universalist claims as a form of cultural imperialism that ignored local differences and community specificities."

James Mitchell adds: "You're describing classic modernist principles, but we specifically briefed for a postmodern approach. Jencks argued that designing for 'everyone equally' often means designing for no one in particular."

Maria Santos looks concerned: "Universal design for disability access is crucial, but cultural universalism is problematic. The idea that we can avoid cultural references and create neutral spaces often privileges dominant cultural norms while appearing to be inclusive."

Dr. Awhina Patel concludes: "This approach reflects what postmodern critics identified as modernism's fundamental failure - the assumption that human needs are universal when they're actually deeply shaped by cultural, social, and historical contexts."

Outcome: This response confuses universal design principles with postmodern pluralism and misattributes concepts to Jencks. Please review the lecture content on modernism vs. postmodernism and Jencks' critique of universalist approaches. Consider how postmodern pluralism differs from modernist universalism, then try again.`,
          lectureReference": ""
        },
        {
          id: "s3-opD-interpretive-flexibility",
          title: "Interpretive Flexibility Strategy",
          description: `Our approach follows what Jencks calls 'user-generated meaning' - instead of prescribing how the space should be used, we're creating a neutral framework that communities can interpret and adapt according to their own needs. The building's forms are deliberately ambiguous to avoid imposing specific cultural readings. We'll provide basic infrastructure - power, water, flexible lighting - and let different community groups bring their own furniture, decorations, and spatial arrangements to make the space their own for each event or gathering.`,
          approach: `Our approach follows what Jencks calls 'user-generated meaning' - instead of prescribing how the space should be used, we're creating a neutral framework that communities can interpret and adapt according to their own needs. The building's forms are deliberately ambiguous to avoid imposing specific cultural readings. We'll provide basic infrastructure - power, water, flexible lighting - and let different community groups bring their own furniture, decorations, and spatial arrangements to make the space their own for each event or gathering.`,
          isCorrect": false, 
          feedback: `Dr. Chen responds with mixed concern: "While community agency is certainly important to postmodern theory, I'm not sure Jencks ever advocated for 'user-generated meaning' in quite this way. There's a difference between multivalent architecture and architecturally neutral space."

Maria Santos looks puzzled: "This sounds like you're asking communities to do the architect's job. If we wanted a generic rental hall, we wouldn't need a design competition. We're looking for architecture that actively supports diverse uses, not just gets out of the way."

James Mitchell adds: "There's also a practical concern. Different community groups have very different resources. Some can afford to bring elaborate setups, others can't. Your approach might inadvertently create inequality in who can effectively use the space."

Dr. Awhina Patel concludes: "Postmodern pluralism isn't about architectural neutrality - it's about architectural richness that can accommodate different interpretations. Jencks advocated for buildings with strong character that could still speak to diverse audiences, not blank slates."

Outcome: Your response shows some understanding of community agency but confuses architectural neutrality with postmodern pluralism. Review the lecture content on how pluralism works through architectural richness rather than generic flexibility. Consider how buildings can have strong character while still serving diverse communities. Please try again.`,
          lectureReference": ""
        }
      ],
      correctFeedback: "",
      incorrectFeedback: ""
    },
    // Scene 4: Historical Context & Site Response
    {
      id: 4,
      title: "Historical Context & Site Response",
      description: "The committee asks how your pavilion will relate to Wynyard Quarter's layered history and ongoing transformation.",
      context: `The committee appears pleased with your spatial pluralism strategy. Dr. Awhina Patel makes a few notes before setting down her pen and looking directly at you.

"Your understanding of pluralistic space is encouraging," she begins, "but now we need to address a more complex challenge. Wynyard Quarter has undergone dramatic transformation over the past two decades - from working industrial port to upscale mixed-use development. The old fuel storage silos, maritime infrastructure, and working wharves have largely disappeared, replaced by residential towers, corporate headquarters, and retail developments."

James Mitchell gestures toward the window where construction cranes punctuate the skyline. "This raises fundamental questions about how new architecture should relate to place and history. Some argue we should preserve every trace of industrial heritage. Others say we should embrace complete transformation and look forward, not backward."

Dr. Chen leans forward with scholarly intensity: "The postmodern theorists had strong opinions about this. They criticized modernism's 'tabula rasa' approach - wiping the slate clean and starting over. But they also warned against nostalgic historicism that treats the past as a museum piece. We need to understand how your pavilion will navigate this tension."

Maria Santos adds: "From a community perspective, people have complex relationships with this area's history. Some remember it as a gritty working port full of jobs and authentic character. Others see the old industrial landscape as polluted and exclusionary. Your design needs to acknowledge these different historical experiences."

Dr. Awhina Patel concludes: "So here's our question: How will your pavilion relate to Wynyard Quarter's layered history - both the industrial past and the ongoing transformation? What's your strategy for connecting architecture to place and time?"`,
      question: "Your response:",
      options: [
        {
          id: "s4-opA-time-binding",
          title: "Time-Binding Integration",
          description: `Our approach follows what Charles Jencks calls 'time-binding' - creating connections between past and present without nostalgic imitation. We're incorporating weathered steel elements that reference the industrial silos' materiality while using them in contemporary structural applications. The pavilion's proportions echo the rhythm of the old wharf buildings but adapt these scales for modern community use. Existing concrete foundations from demolished structures will be preserved and integrated as landscape features, creating what Jencks describes as 'temporal layering' where different eras remain visible and interconnected.`,
          approach: `Our approach follows what Charles Jencks calls 'time-binding' - creating connections between past and present without nostalgic imitation. We're incorporating weathered steel elements that reference the industrial silos' materiality while using them in contemporary structural applications. The pavilion's proportions echo the rhythm of the old wharf buildings but adapt these scales for modern community use. Existing concrete foundations from demolished structures will be preserved and integrated as landscape features, creating what Jencks describes as 'temporal layering' where different eras remain visible and interconnected.`,
          isCorrect": true,
          feedback: `Dr. Chen responds with clear approval: "This demonstrates excellent understanding of Jencks' time-binding concept. You're describing genuine historical connection without pastiche - using industrial materials in new ways rather than copying old forms."

James Mitchell nods enthusiastically: "The concrete foundation preservation is particularly smart. You're creating what urban designers call 'palimpsest' - layers of history remaining visible rather than erased. That temporal layering concept shows sophisticated thinking about how places accumulate meaning over time."

Dr. Awhina Patel adds: "This approach respects both the working-class history and the contemporary transformation. You're not privileging one era over another but showing how they can coexist productively."

Maria Santos concludes: "Community members will be able to see connections to the area's industrial character while also recognizing that this is something new and relevant to current needs. That's exactly the kind of historical sensitivity we hoped for."

Outcome: Excellent response demonstrating deep understanding of time-binding principles. Continue to next scene.`,
          lectureReference": ""
        },
        {
          id: "s4-opB-radical-eclecticism",
          title: "Radical Eclecticism Approach",
          description: `We're following what Charles Jencks called 'historical pastiche' - playfully mixing architectural styles from different periods without worrying about authentic historical accuracy. The pavilion combines industrial warehouse aesthetics with classical columns, maritime rope details, and contemporary glass curtain walls in an ironic collage. This follows Robert Venturi's principle of 'architectural camp' - deliberately exaggerated historical references that comment on the artificiality of historical preservation. The result acknowledges Wynyard Quarter's layered history through entertaining visual quotations rather than serious historical engagement.`,
          approach: `We're following what Charles Jencks called 'historical pastiche' - playfully mixing architectural styles from different periods without worrying about authentic historical accuracy. The pavilion combines industrial warehouse aesthetics with classical columns, maritime rope details, and contemporary glass curtain walls in an ironic collage. This follows Robert Venturi's principle of 'architectural camp' - deliberately exaggerated historical references that comment on the artificiality of historical preservation. The result acknowledges Wynyard Quarter's layered history through entertaining visual quotations rather than serious historical engagement.`,
          isCorrect": false, 
          feedback: `Dr. Chen responds with concern: "While you show some understanding of postmodern attitudes toward history, you're misunderstanding key concepts. Jencks never advocated for 'historical pastiche' as a positive strategy - he actually criticized mindless pastiche as postmodernism's weakness, not its strength."

James Mitchell adds: "Robert Venturi never wrote about 'architectural camp' in the way you describe. His approach to historical reference was much more sophisticated than deliberate exaggeration or entertainment value."

Dr. Awhina Patel looks worried: "Your approach treats history as superficial visual material rather than meaningful cultural context. Jencks emphasized that successful historical engagement requires understanding why historical elements matter, not just how they look."

Maria Santos concludes: "This kind of ironic approach can be alienating to communities with genuine connections to the area's history. What seems playful to architects might feel dismissive to people whose lives and livelihoods were shaped by these historical contexts."

Outcome: Your response shows awareness of postmodern historical strategies but misunderstands key concepts and misattributes ideas to theorists. Review the lecture content on Jencks' distinction between meaningful historical engagement and superficial pastiche. Consider how time-binding differs from arbitrary historical mixing. Please try again.`,
          lectureReference": ""
        },
        {
          id: "s4-opC-heritage-preservation",
          title: "Heritage Preservation Focus",
          description: `Our strategy prioritizes authentic historical preservation and interpretation. We're designing the pavilion to complement and showcase the remaining industrial heritage through careful material matching and scaled relationships. Following what Jencks called 'contextual sensitivity,' we'll use traditional construction methods and historically appropriate details to ensure visual harmony with surviving wharf structures. The building will include interpretive displays about the area's maritime and industrial history, helping visitors understand the authentic character that once defined this place.`,
          approach: `Our strategy prioritizes authentic historical preservation and interpretation. We're designing the pavilion to complement and showcase the remaining industrial heritage through careful material matching and scaled relationships. Following what Jencks called 'contextual sensitivity,' we'll use traditional construction methods and historically appropriate details to ensure visual harmony with surviving wharf structures. The building will include interpretive displays about the area's maritime and industrial history, helping visitors understand the authentic character that once defined this place.`,
          isCorrect": false,
          feedback: `Dr. Chen responds with visible concern: "I'm afraid this approach misunderstands postmodern attitudes toward history. Jencks never advocated for 'contextual sensitivity' through direct imitation - that's exactly the kind of nostalgic historicism he criticized."

James Mitchell adds: "You're describing heritage preservation methodology, not contemporary architecture. The goal isn't to create a museum environment but to design for current community needs while acknowledging historical context."

Dr. Awhina Patel looks disappointed: "This approach also raises equity questions. Whose version of 'authentic character' are you preserving? The industrial landscape was often exclusionary - preserving its aesthetic without acknowledging its social limitations isn't genuine historical engagement."

Maria Santos concludes: "Postmodern architecture isn't about recreating the past but about creating new possibilities informed by historical understanding. Your approach would produce a theme park version of industrial heritage rather than meaningful contemporary architecture."

Outcome: This response confuses historic preservation with postmodern historical engagement. Review the lecture content on Jencks' critique of nostalgic historicism and his concept of time-binding as alternative to both preservation and erasure. Consider how contemporary architecture can acknowledge history without imitating it, then try again.`,
          lectureReference": ""
        },
        {
          id: "s4-opD-future-oriented",
          title: "Future-Oriented Transformation",
          description: `We believe in embracing Wynyard Quarter's transformation toward a high-tech, internationally connected urban district. Our pavilion reflects what Jencks described as 'progressive modernism' - clean contemporary forms that embody innovation and forward-thinking. Rather than dwelling on industrial nostalgia, we're designing for the young professionals, international visitors, and technology companies that represent this area's future. The building's sleek materials and minimalist aesthetic will complement the adjacent corporate towers and luxury residential developments.`,
          approach: `We believe in embracing Wynyard Quarter's transformation toward a high-tech, internationally connected urban district. Our pavilion reflects what Jencks described as 'progressive modernism' - clean contemporary forms that embody innovation and forward-thinking. Rather than dwelling on industrial nostalgia, we're designing for the young professionals, international visitors, and technology companies that represent this area's future. The building's sleek materials and minimalist aesthetic will complement the adjacent corporate towers and luxury residential developments.`,
          isCorrect": false,
          feedback: `Dr. Chen responds with alarm: "Charles Jencks never wrote about 'progressive modernism' - this contradicts his entire critique of modernist ideology. You're describing exactly the kind of approach he opposed through his concept of postmodernism."

James Mitchell adds: "The 'tabula rasa' mentality you're advocating is precisely what postmodern theorists identified as modernism's fundamental failure. Ignoring historical context in favor of abstract future visions disconnects architecture from place and community."

Maria Santos looks frustrated: "This approach would create architecture for a narrow demographic while ignoring the broader community's relationship to this place. It's exactly the kind of elitist modernism that generated the community resistance movements we discussed earlier."

Dr. Awhina Patel concludes: "You're also misunderstanding gentrification dynamics. Architecture that serves only 'young professionals and international visitors' contributes to displacing existing communities rather than creating inclusive public space."

Outcome: This response demonstrates fundamental misunderstanding of postmodern principles and misattributes concepts to Jencks. Review the lecture content on postmodernism as critique of modernist universalism and future-oriented abstraction. Consider how postmodern architecture engages with historical context rather than ignoring it, then try again.`,
          lectureReference": ""
        }
      ],
      correctFeedback: "",
      incorrectFeedback: ""
    },
    // Scene 5: Balancing Popular & Architectural Appeal
    {
      id: 5,
      title: "Balancing Popular & Architectural Appeal",
      description: "The committee asks how your pavilion will achieve a balance between popular appeal and architectural significance.",
      context": `The committee members seem satisfied with your time-binding approach. Dr. Chen consults her notes before posing the next challenge.

"Your historical strategy is sound," she begins, "but now we need to address what Charles Jencks identified as postmodernism's greatest challenge: creating architecture that works for both everyday users and the architectural community. Too many buildings either talk down to the public with oversimplified design, or speak only to architectural insiders with esoteric concepts."

Maria Santos adds: "We've seen projects that try to be 'accessible' by removing all architectural sophistication, and others that are so conceptually complex that regular users feel excluded. Neither approach creates lasting public architecture."

James Mitchell nods: "The most successful public buildings somehow manage to be immediately appealing to families and casual visitors while also offering the kind of architectural richness that design professionals can appreciate and learn from."

Dr. Awhina Patel concludes: "So here's our question: How will your pavilion achieve this balance? What will make it both genuinely popular with Auckland communities and architecturally significant for the design profession?"`,
      question: "Your response:",
      options: [
        {
          id: "s5-opA-multiple-audience",
          title: "Multiple Audience Strategy",
          description: `Our approach recognizes that different groups read architectural elements differently, following Charles Jencks' concept of multivalent communication. The pavilion's design elements work on multiple levels - families will engage with welcoming forms and comfortable spaces, while those familiar with architectural history will recognize references to both classical proportions and contemporary design strategies. Local communities can interpret certain forms through their own cultural lenses, while visitors might read them differently. This layered approach means the building can communicate meaningfully with diverse audiences without requiring everyone to understand the same messages.`,
          approach: `Our approach recognizes that different groups read architectural elements differently, following Charles Jencks' concept of multivalent communication. The pavilion's design elements work on multiple levels - families will engage with welcoming forms and comfortable spaces, while those familiar with architectural history will recognize references to both classical proportions and contemporary design strategies. Local communities can interpret certain forms through their own cultural lenses, while visitors might read them differently. This layered approach means the building can communicate meaningfully with diverse audiences without requiring everyone to understand the same messages.`,
          isCorrect": true,
          feedback": `Dr. Chen responds with clear approval: "This demonstrates excellent understanding of Jencks' multivalent architecture. You're showing how the same building can speak to different audiences through different interpretative frameworks, rather than trying to make everyone see the same thing."

Maria Santos adds enthusiastically: "The key insight here is that you're not dumbing down the architecture for popular audiences or making it overly complex for professionals. You're creating genuine richness that people can engage with at their own level of interest and knowledge."

James Mitchell nods: "This approach acknowledges that communities bring their own interpretative abilities to architecture. You're respecting people's intelligence while creating multiple entry points for engagement."

Dr. Awhina Patel concludes: "You're demonstrating how postmodern architecture succeeds by embracing interpretative diversity rather than trying to control how people understand the building. That's sophisticated community engagement."

Outcome: Excellent response. Continue to final scene.`,
          lectureReference": ""
        },
        {
          id: "s5-opB-essential-design",
          title: "Essential Design Principles",
          description": `We believe the most effective approach combines fundamental design principles that transcend cultural differences with local Auckland references. The pavilion uses geometric forms based on mathematical ratios that Jencks recognized as universally appealing, combined with materials and colors drawn from the local environment. This approach avoids both populist superficiality and elitist complexity by focusing on what Jencks called 'architectural essentials' - proportions, light, and spatial relationships that work across different cultural backgrounds while remaining grounded in this specific place.`,
          approach": `We believe the most effective approach combines fundamental design principles that transcend cultural differences with local Auckland references. The pavilion uses geometric forms based on mathematical ratios that Jencks recognized as universally appealing, combined with materials and colors drawn from the local environment. This approach avoids both populist superficiality and elitist complexity by focusing on what Jencks called 'architectural essentials' - proportions, light, and spatial relationships that work across different cultural backgrounds while remaining grounded in this specific place.`,
          isCorrect": false,
          feedback": `Dr. Chen responds with concern: "Jencks never wrote about 'architectural essentials' in the way you describe. This sounds more like modernist universalism - the idea that certain design principles work the same way for everyone regardless of cultural context."

Maria Santos adds: "The assumption that mathematical ratios are 'universally appealing' ignores how different cultures have very different aesthetic preferences and spatial traditions. What seems essential to one group might feel alien to another."

James Mitchell notes: "This approach risks creating the kind of generic public architecture that satisfies no community particularly well. When you aim for universal appeal through 'essential principles,' you often end up with bland compromises."

Dr. Awhina Patel concludes: "Postmodern architecture specifically rejected this kind of universalist thinking. Jencks argued that meaningful architecture emerges from engaging with specific cultural contexts, not from abstract universal principles."

Outcome: This response confuses modernist universalism with postmodern multivalence. Review how Jencks criticized simplified approaches that attempt universal appeal. Try again.`,
          lectureReference": ""
        },
        {
          id: "s5-opC-cultural-programming",
          title: "Cultural Programming Integration",
          description": `Our strategy balances popular and professional appeal through flexible programming that can accommodate both community events and architectural discourse. The pavilion includes exhibition spaces where local schools can display student work alongside professional design exhibitions. We're planning lecture series that alternate between topics like 'Home Gardening Tips' and 'Contemporary Architecture Theory.' The building itself uses approachable materials like timber and brick combined with innovative structural systems that demonstrate technical sophistication to industry professionals.`,
          approach": `Our strategy balances popular and professional appeal through flexible programming that can accommodate both community events and architectural discourse. The pavilion includes exhibition spaces where local schools can display student work alongside professional design exhibitions. We're planning lecture series that alternate between topics like 'Home Gardening Tips' and 'Contemporary Architecture Theory.' The building itself uses approachable materials like timber and brick combined with innovative structural systems that demonstrate technical sophistication to industry professionals.`,
          isCorrect": false,
          feedback": `Dr. Chen responds thoughtfully: "Programming diversity is certainly valuable, and combining community and professional events shows some understanding of serving multiple audiences. However, you're focusing on activities rather than architectural strategies."

James Mitchell adds: "The material choices you mention - timber and brick with innovative structure - could work well, but you haven't explained how these create the kind of multivalent communication that Jencks advocated for."

Maria Santos notes: "There's also a practical concern about programming sustainability. What happens when funding changes or institutional partnerships end? The architecture itself needs to work for diverse audiences, not just the events programmed within it."

Dr. Awhina Patel concludes: "You're thinking about functional diversity, which is important, but postmodern multivalence requires architectural elements that can be read differently by different audiences - not just different uses of the same space."

Outcome: Shows some understanding but focuses on programming rather than architectural multivalence. Review how postmodern architecture achieves popular and professional appeal through design rather than events. Try again.`,
          lectureReference": ""
        },
        {
          id: "s5-opD-interpretive-architecture",
          title: "Interpretive Architecture Strategy",
          description": `We're creating what Jencks called 'pedagogical postmodernism' - architecture that teaches popular audiences about design sophistication through built-in interpretation. The pavilion includes explanatory plaques describing architectural features, QR codes linking to design process videos, and guided tour routes that help visitors understand the building's conceptual framework. This educational approach ensures that community members can appreciate the architectural sophistication while professionals can engage with the theoretical concepts embedded in the design.`,
          approach": `We're creating what Jencks called 'pedagogical postmodernism' - architecture that teaches popular audiences about design sophistication through built-in interpretation. The pavilion includes explanatory plaques describing architectural features, QR codes linking to design process videos, and guided tour routes that help visitors understand the building's conceptual framework. This educational approach ensures that community members can appreciate the architectural sophistication while professionals can engage with the theoretical concepts embedded in the design.`,
          isCorrect": false,
          feedback": `Dr. Chen responds with clear disagreement: "Jencks never wrote about 'pedagogical postmodernism' in the way you describe. This approach assumes that popular audiences need education to appreciate architecture, which contradicts postmodern principles of immediate accessibility."

Maria Santos looks frustrated: "Explanatory plaques and QR codes suggest that the architecture can't communicate on its own. If a building needs instruction manual to be understood, it's failing as popular architecture."

James Mitchell adds: "This approach also creates a hierarchy where architectural professionals understand the 'real' building while community members get simplified explanations. That's exactly the kind of elitism postmodernism sought to overcome."

Dr. Awhina Patel concludes: "The goal isn't to educate popular audiences about architectural theory, but to create architecture that works immediately for everyone while offering additional layers for those who seek them."

Outcome: This response misunderstands how postmodern architecture achieves multivalent appeal. Review how Jencks' concept works through design rather than interpretation. Try again.`,
          lectureReference": ""
        }
      ],
      correctFeedback: "",
      incorrectFeedback: ""
    },
    // Scene 6: Committee Decision & Design Precedents
    {
      id: 6,
      title: "Committee Decision & Design Precedents",
      description": "The committee is largely satisfied and asks for an architectural precedent to ground your approach.",
      context": `The committee members exchange satisfied glances and begin gathering their notes. Dr. Chen looks up with a smile.

"Your understanding of multivalent architectural communication has been impressive throughout this presentation," she begins. "You've demonstrated solid grasp of postmodern principles and their practical application to community design."

Maria Santos nods enthusiastically: "More importantly, you've shown how these theoretical concepts translate into architecture that will genuinely serve Auckland's diverse communities. That's exactly what we hoped to see."

James Mitchell adds: "Your approach to time-binding, pluralistic space, and multivalent communication suggests this pavilion could become a genuine community asset rather than just an architectural object."

Dr. Awhina Patel smiles: "We're prepared to recommend your proposal for development. However, before we conclude, we have one final request."

Dr. Chen leans forward with renewed focus: "We'd like you to ground your theoretical approach in architectural precedent. Can you identify a specific postmodern building that exemplifies the design strategies you've been describing? We want to understand how your approach relates to successful built examples of postmodern architecture."

James Mitchell explains: "This isn't just academic - precedent analysis helps us understand whether your strategies have been tested in practice and what we might learn from similar projects."

Dr. Awhina Patel concludes: "So please identify a key postmodern building that demonstrates your design approach, and explain specifically what postmodern characteristics make it relevant to your pavilion strategy."`,
      question": "Your response:",
      options": [
        {
          id: "s6-opA-vanna-venturi",
          title: "Vanna Venturi House by Robert Venturi (1964)",
          description": `I'd cite Robert Venturi's Vanna Venturi House in Philadelphia as a key precedent for our approach. This house demonstrates how postmodern architecture can embrace complexity and contradiction while remaining approachable and human-scaled. Like our pavilion, it combines familiar elements - the iconic American house form - with unexpected spatial and formal strategies that reward closer examination. The house works immediately as a recognizable home while offering architectural sophistication for those who engage more deeply with its design.`,
          approach": `I'd cite Robert Venturi's Vanna Venturi House in Philadelphia as a key precedent for our approach. This house demonstrates how postmodern architecture can embrace complexity and contradiction while remaining approachable and human-scaled. Like our pavilion, it combines familiar elements - the iconic American house form - with unexpected spatial and formal strategies that reward closer examination. The house works immediately as a recognizable home while offering architectural sophistication for those who engage more deeply with its design.`,
          isCorrect": true,
          feedback": `Dr. Chen responds with approval: " Excellent choice. The Vanna Venturi House demonstrates exactly the multivalent communication and human-scaled complexity you've been describing for your pavilion, and why it's relevant to your approach."

Dr. Awhina Patel adds: "Your observation about complexity and contradiction is particularly apt. Venturi's house demonstrates exactly the kind of multivalent communication you've been describing - immediately readable yet architecturally sophisticated."`,
          lectureReference": "",
          nextScene": "6b"
        },
        {
          id: "s6-opB-seagram-building",
          title: "Seagram Building by Mies van der Rohe (1958)",
          description": `The Seagram Building in New York exemplifies the kind of refined modernist principles that inform our pavilion design. Its clean lines, honest material expression, and elegant proportions demonstrate how minimalist architecture can achieve both popular appeal and professional respect. The building's bronze and glass facade creates a sophisticated urban presence while its rational structural expression makes its architectural logic clear to any observer. This precedent shows how restraint and clarity can create lasting architectural significance.`,
          approach": `The Seagram Building in New York exemplifies the kind of refined modernist principles that inform our pavilion design. Its clean lines, honest material expression, and elegant proportions demonstrate how minimalist architecture can achieve both popular appeal and professional respect. The building's bronze and glass facade creates a sophisticated urban presence while its rational structural expression makes its architectural logic clear to any observer. This precedent shows how restraint and clarity can create lasting architectural significance.`,
          isCorrect": false,
          feedback": `Dr. Chen responds with concern: "The Seagram Building is a classic example of International Style modernism, not postmodernism. Mies van der Rohe's work represents exactly the kind of minimalist universalism that postmodern architects like Jencks and Venturi criticized."

Maria Santos adds: "This choice suggests some confusion about the difference between modernist and postmodern approaches. The Seagram Building's 'honest material expression' and 'rational structural logic' are modernist principles, not postmodern strategies."

Outcome: Please review the lecture content on the differences between modernist and postmodern architecture. Consider how postmodern buildings differ from International Style modernism, then select a different precedent.`,
          lectureReference": ""
        },
        {
          id: "s6-opC-att-building",
          title: "AT&T Building by Philip Johnson (1984)",
          description": `Philip Johnson's AT&T Building in New York serves as an important postmodern precedent for our civic architecture approach. This building demonstrates how postmodern design can challenge modernist orthodoxy through historical reference - its famous Chippendale-inspired crown and classical base reject the modernist glass box. The building uses architectural irony and historical quotation to create a distinctive urban landmark that speaks to both popular recognition and architectural discourse.`,
          approach": `Philip Johnson's AT&T Building in New York serves as an important postmodern precedent for our civic architecture approach. This building demonstrates how postmodern design can challenge modernist orthodoxy through historical reference - its famous Chippendale-inspired crown and classical base reject the modernist glass box. The building uses architectural irony and historical quotation to create a distinctive urban landmark that speaks to both popular recognition and architectural discourse.`,
          isCorrect": false,
          feedback": `Dr. Chen responds with concern: "While the AT&T Building is indeed a significant postmodern work, it represents a very different approach from what you've been describing. Johnson's building is about corporate identity and urban monumentality, not community engagement and multivalent communication."

Maria Santos adds: "The AT&T Building works as architectural statement and urban landmark, but it doesn't demonstrate the kind of intimate, flexible community spaces you've been proposing. It's designed for visual impact from the street rather than human-scaled gathering experiences."

James Mitchell concludes: "There's also a scale issue. Your pavilion strategies focus on accommodating diverse community activities, while Johnson's approach emphasizes architectural monumentality and corporate presence. These are fundamentally different design problems."

Outcome: While you've correctly identified a postmodern building, it doesn't align with the community-focused strategies you've been describing. Please select a precedent that demonstrates multivalent communication and human-scaled complexity rather than corporate monumentality.`,
          lectureReference": ""
        },
        {
          id: "s6-opD-sydney-opera",
          title: "Sydney Opera House by Jørn Utzon (1973)",
          description": `Utzon's Sydney Opera House provides an excellent precedent for our approach to iconic architecture that serves diverse audiences. The building's distinctive shell forms create immediate popular recognition while demonstrating innovative structural and spatial strategies that architects worldwide have studied and admired. Its integration with the harbor setting shows how contemporary architecture can respond to specific place while achieving international significance, similar to our goals for the Wynyard pavilion.`,
          approach": `Utzon's Sydney Opera House provides an excellent precedent for our approach to iconic architecture that serves diverse audiences. The building's distinctive shell forms create immediate popular recognition while demonstrating innovative structural and spatial strategies that architects worldwide have studied and admired. Its integration with the harbor setting shows how contemporary architecture can respond to specific place while achieving international significance, similar to our goals for the Wynyard pavilion.`,
          isCorrect": false,
          feedback": `Dr. Chen responds thoughtfully: "While the Sydney Opera House is certainly iconic and demonstrates innovative architecture, it's not typically classified as postmodern. Utzon's approach was more aligned with organic modernism and sculptural expressionism than with postmodern theoretical concerns."

Dr. Awhina Patel adds: "The Opera House doesn't demonstrate the historical reference, irony, or cultural pluralism that characterize postmodern architecture. It's a masterpiece, but of a different architectural movement."

Outcome: Please review the lecture content on postmodern characteristics and select a building that demonstrates specific postmodern strategies like historical reference, pluralism, or complexity and contradiction.`,
          lectureReference": ""
        }
      ],
      correctFeedback: "",
      incorrectFeedback: ""
    },
    // Scene 6b: Characteristic Analysis
    {
      id: "6b",
      title: "Characteristic Analysis: Vanna Venturi House",
      description": "Explain the specific postmodern characteristics of the Vanna Venturi House that relate to your pavilion design.",
      context": `Dr. Chen responds with approval: "Excellent choice. The Vanna Venturi House demonstrates exactly the multivalent communication and human-scaled complexity you've been describing for your pavilion, and why it's relevant to your approach."

Dr. Awhina Patel adds: "Your observation about complexity and contradiction is particularly apt. Venturi's house demonstrates exactly the kind of multivalent communication you've been describing - immediately readable yet architecturally sophisticated."`,
      question": `Committee Question: "Excellent precedent choice. Now please explain specifically what postmodern characteristics the Vanna Venturi House demonstrates that relate to your pavilion design strategies. How does this house exemplify the approaches you've been describing?"`,
      options": [
        {
          id: "s6b-opA-multivalent",
          title: "Multivalent Architectural Communication",
          description": `The Vanna Venturi House demonstrates exactly the kind of multivalent communication we're planning for our pavilion. The house reads immediately as a familiar American home - anyone can recognize the gable roof and front porch - but it also contains sophisticated architectural moves like the split pediment and complex interior spatial relationships. Families see a welcoming house; architects read Venturi's commentary on architectural convention. This shows how buildings can speak to popular and professional audiences simultaneously without compromising either message.`,
          approach": `The Vanna Venturi House demonstrates exactly the kind of multivalent communication we're planning for our pavilion. The house reads immediately as a familiar American home - anyone can recognize the gable roof and front porch - but it also contains sophisticated architectural moves like the split pediment and complex interior spatial relationships. Families see a welcoming house; architects read Venturi's commentary on architectural convention. This shows how buildings can speak to popular and professional audiences simultaneously without compromising either message.`,
          isCorrect": true,
          feedback": `Dr. Chen responds with clear satisfaction: "Perfect analysis. You've identified exactly what makes the Vanna Venturi House relevant to your pavilion approach - its ability to communicate simultaneously with different audiences without talking down to anyone."

Maria Santos adds enthusiastically: "Your observation about the split pediment is particularly insightful. It's a perfect example of how one architectural element can work both as familiar house imagery and sophisticated architectural commentary. That's precisely the kind of multivalent strategy you need for community architecture."

James Mitchell nods: "This analysis shows you understand how postmodern architecture can be both immediately accessible and intellectually engaging. The house proves that complexity doesn't require excluding popular audiences."

Dr. Awhina Patel concludes: "You've demonstrated how successful postmodern precedents can inform contemporary community design. This gives us confidence that your pavilion approach is grounded in proven architectural strategies."

Outcome: Excellent analysis. Scenario Complete - Full Success!`,
          lectureReference": "",
          nextScene": "7" 
        },
        {
          id: "s6b-opB-ornamental",
          title: "Postmodern Ornamental Systems",
          description": `This house exemplifies what Charles Jencks called 'neo-decorative architecture' through its elaborate surface treatments and ornamental complexity. Venturi uses multiple decorative systems - classical pediments, Gothic arches, and contemporary abstract patterns - to create what he termed 'maximum visual density.' The house demonstrates how postmodern architecture rejected modernist restraint in favour of ornamental abundance, showing how decoration can carry architectural meaning and cultural significance.`,
          approach": `This house exemplifies what Charles Jencks called 'neo-decorative architecture' through its elaborate surface treatments and ornamental complexity. Venturi uses multiple decorative systems - classical pediments, Gothic arches, and contemporary abstract patterns - to create what he termed 'maximum visual density.' The house demonstrates how postmodern architecture rejected modernist restraint in favour of ornamental abundance, showing how decoration can carry architectural meaning and cultural significance.`,
          isCorrect": false,
          feedback": `Dr. Chen responds with confusion: "I'm afraid you're mischaracterizing the Vanna Venturi House. It's actually quite restrained in its use of ornament - Jencks never described Venturi's work as 'neo-decorative architecture' or advocating for 'maximum visual density.'"

Dr. Awhina Patel adds: "The house is famous precisely because it achieves complexity through subtle formal moves rather than ornamental elaboration. You're describing a very different kind of postmodern approach - perhaps thinking of architects like Michael Graves or Ricardo Bofill."

Maria Santos notes: "This analysis doesn't connect to your pavilion strategies either. You've been describing architecture that works through spatial variety and multivalent communication, not ornamental abundance."

James Mitchell concludes: "The Vanna Venturi House demonstrates complexity and contradiction through architectural form, not decorative systems. Please reconsider what makes this house a relevant precedent for your community-focused approach."

Outcome: Your analysis misidentifies the key characteristics of your chosen precedent. Review Venturi's actual design strategies in the house and how they relate to your pavilion approach, then try again.`,
          lectureReference": ""
        },
        {
          id: "s6b-opC-pastiche",
          title: "Historical Pastiche Methods",
          description": `The Vanna Venturi House represents Venturi's approach to 'creative historicism' - combining architectural elements from different historical periods in new synthetic arrangements. The house mixes colonial American forms with European classical details and modernist spatial concepts to create what he called 'temporal collage.' This demonstrates how postmodern architects could freely combine historical references without concerns about stylistic purity or chronological accuracy.`,
          approach": `The Vanna Venturi House represents Venturi's approach to 'creative historicism' - combining architectural elements from different historical periods in new synthetic arrangements. The house mixes colonial American forms with European classical details and modernist spatial concepts to create what he called 'temporal collage.' This demonstrates how postmodern architects could freely combine historical references without concerns about stylistic purity or chronological accuracy.`,
          isCorrect": false,
          feedback": `Dr. Chen responds with concern: "This analysis misunderstands Venturi's approach to history. The Vanna Venturi House doesn't combine 'elements from different historical periods' - it's quite specific in its references to American domestic architecture."

Dr. Awhina Patel adds: "Venturi never advocated for 'creative historicism' or 'temporal collage' in the way you describe. His approach was much more subtle - using familiar architectural language in unexpected ways rather than mixing historical styles."

James Mitchell notes: "The house's power comes from its careful manipulation of the single archetype of the American house, not from combining multiple historical references. You're describing a different kind of postmodern strategy entirely."

Maria Santos concludes: "This analysis also doesn't connect to your pavilion approach, which focuses on multivalent communication and community engagement rather than historical pastiche methods."

Outcome: Your analysis conflates different postmodern strategies and mischaracterizes Venturi's design approach. Review how the house actually engages with architectural history and its relevance to community-focused design, then try again.`,
          lectureReference": ""
        },
        {
          id: "s6b-opD-contextual",
          title: "Contextual Integration Strategies",
          description": `This house shows how postmodern architecture responds to suburban context through environmental integration and neighbourhood compatibility. Venturi designed the house to blend seamlessly with surrounding residential development while subtly elevating the architectural discourse of the neighbourhood. The house demonstrates what he termed 'contextual modernism' - contemporary architecture that respects existing urban fabric rather than disrupting it through formal contrast.`,
          approach": `This house shows how postmodern architecture responds to suburban context through environmental integration and neighbourhood compatibility. Venturi designed the house to blend seamlessly with surrounding residential development while subtly elevating the architectural discourse of the neighbourhood. The house demonstrates what he termed 'contextual modernism' - contemporary architecture that respects existing urban fabric rather than disrupting it through formal contrast.`,
          isCorrect": false,
          feedback": `Dr. Chen responds with disagreement: "Venturi never wrote about 'contextual modernism' - this isn't a concept from postmodern theory. The Vanna Venturi House actually stands out quite dramatically from its suburban neighbors rather than blending in."

Maria Santos adds: "The house's significance lies partly in how it challenges conventional suburban architecture, not in how it integrates with it. Venturi was critiquing typical suburban development, not trying to harmonize with it."

James Mitchell notes: "Environmental integration and neighborhood compatibility weren't primary concerns for this house - it was designed as an architectural statement about complexity and contradiction in domestic architecture."

Dr. Awhina Patel concludes: "This analysis misses the house's actual contribution to postmodern theory and doesn't connect to your pavilion strategies of multivalent communication and community engagement."

Outcome: Your analysis uses concepts not associated with Venturi's work and mischaracterizes the house's relationship to its context. Consider how the house actually demonstrates postmodern principles relevant to your community pavilion approach, then try again.`,
          lectureReference": ""
        }
      ],
      correctFeedback: "",
      incorrectFeedback: ""
    },
    // Scene 7: Conclusion and Reflection
    {
      id: 7,
      title: "Conclusion & Reflection",
      description": "Successfully complete the design challenge and prepare for your written reflection.",
      context": `Congratulations! You have successfully demonstrated comprehensive understanding of postmodern architectural principles and their application to community design. Your proposal for a multivalent pavilion at Wynyard Quarter, grounded in solid theoretical precedent, has been unanimously approved by the committee.

Please proceed to complete your written reflection on this design process, focusing on how postmodern strategies can create genuinely inclusive public architecture.


REFLECTION PROMPT:
Your reflection should be 100-200 words and address the following questions:
1. Postmodern Principles Applied
Identify the specific postmodern concepts that informed your successful design decisions. Reference at least two of the following theoretical approaches covered in the lecture:
  - Multivalent/pluralistic architecture (Jencks)
  - Complexity and contradiction (Venturi)
  - Time-binding and historical engagement
  - Semiotics and architectural communication
  - Radical eclecticism and cultural synthesis
Explain why these particular postmodern strategies made your proposal successful for this community pavilion project.

2. Learning Insights
Reflect on what you learned from completing this interactive scenario. If you made any incorrect choices, what did the committee's feedback teach you about postmodern principles? How did the experience of navigating different design decisions deepen your understanding of postmodern architecture's approach to community engagement?


SUBMISSION GUIDELINES:
- Length: 100-200 words
- Format: Submit as text entry in Canvas
- Assessment: This reflection is worth 2 marks based on:
  - Accurate identification and application of postmodern concepts (1 mark)
  - Evidence of genuine reflection on the learning process (1 mark)

Remember: This is about demonstrating your understanding of postmodern theory through the design scenario you just completed. Focus on connecting the architectural concepts from the lecture to the design decisions you made in the interactive experience.


EXAMPLES OF STRONG REFLECTION ELEMENTS:
✓ "My pavilion used Jencks' concept of multivalent architecture by creating spaces that families could enjoy as comfortable gathering areas while architects could appreciate the sophisticated spatial relationships..."
✓ "The time-binding approach allowed the design to acknowledge Wynyard's industrial heritage without nostalgic imitation, following postmodern principles of historical engagement..."
✓ "When I initially chose the heritage preservation approach, the committee's feedback helped me understand the difference between postmodern historical engagement and traditional conservation..."

Submit your reflection to complete the ArchHTC237 Postmodern Pavilion learning module.`,
      question: "",
      options": [],
      correctFeedback: "",
      incorrectFeedback: ""
    }
  ]
};
