
export const updatedScenarioData = {
  "title": "Postmodern Pavilion Design Challenge",
  "description": "Navigate a thesis defense meeting to secure approval for your community pavilion design using postmodern architectural principles.",
  "characters": [
    {
      "id": "dr-chen",
      "name": "Dr. Sarah Chen",
      "title": "Committee Chair - Architectural Theory",
      "description": "Leading expert in postmodern architectural theory and practice",
      "personality": "Intellectually rigorous, values theoretical depth and practical application",
      "avatar": "/avatars/dr_chen_avatar.png" // UPDATED
    },
    {
      "id": "maria-santos",
      "name": "Maria Santos",
      "title": "Community Planning Representative",
      "description": "Specialist in community engagement and inclusive design processes",
      "personality": "Pragmatic, focused on real-world community benefits and accessibility",
      "avatar": "/avatars/maria_santos_avatar.png" // UPDATED
    },
    {
      "id": "james-mitchell",
      "name": "James Mitchell",
      "title": "Design Review Board",
      "description": "Professional architect with extensive public project experience",
      "personality": "Practical, concerned with feasibility and implementation",
      "avatar": "/avatars/james_mitchell_avatar.png" // UPDATED
    },
    {
      "id": "dr-patel",
      "name": "Dr. Raj Patel",
      "title": "Urban Design Specialist",
      "description": "Expert in contemporary city planning and public space design",
      "personality": "Analytical, interested in broader urban implications",
      "avatar": "/avatars/dr_patel_avatar.jpg" // UPDATED
    }
  ],
  "scenes": [
    {
      "id": 1,
      "title": "Committee Introduction",
      "description": "Welcome to your thesis defense. You're presenting a community pavilion design for Auckland's Wynyard Quarter using postmodern architectural principles.",
      "context": "You enter the committee room where four distinguished faculty members await your presentation. The project brief calls for a small community pavilion (200-300 square meters) that will serve Auckland's diverse Wynyard Quarter neighborhood. Your design challenge: create architecture that demonstrates postmodern principles while genuinely serving community needs.\n\nYour thesis advisor has prepared you well. You understand that postmodern architecture, as theorized by Charles Jencks and practiced by architects like Robert Venturi, embraces complexity, cultural pluralism, and multiple meanings. Unlike modernist architecture's universal solutions, postmodern design acknowledges that different people experience buildings differently.\n\nThe committee will test your understanding through a series of design decisions. Each choice you make should demonstrate how postmodern strategies can create inclusive, community-serving architecture.",
      "question": "",
      "options": [],
      "correctFeedback": "",
      "incorrectFeedback": ""
    },
    {
      "id": 2,
      "title": "First Impressions & Community Context",
      "description": "The committee begins by exploring your understanding of the community context and design challenges.",
      "context": "Dr. Chen opens the session: \"Let's begin with community context. Wynyard Quarter serves a remarkably diverse population - families with young children, elderly residents, recent immigrants, young professionals, and established Auckland families. Your pavilion needs to work for all these groups simultaneously.\"\n\nMaria Santos adds: \"This is exactly why we're interested in postmodern approaches. Modernist pavilions often assume a universal user, but your community includes people with very different cultural backgrounds, economic situations, and spatial needs.\"\n\nJames Mitchell notes: \"The site gets heavy foot traffic but also needs quiet spaces. Some visitors want active social areas, others prefer contemplative spots. How does postmodern theory help you address these competing demands?\"\n\nDr. Patel concludes: \"Your design philosophy needs to demonstrate how architecture can serve multiple constituencies without compromising any single group's needs.\"",
      "question": "How should postmodern architecture approach this diversity of community needs?",
      "options": [
        {
          "id": "time-binding-spaces",
          "title": "Time-Binding Flexible Spaces",
          "description": "Design spaces that can transform throughout the day to serve different community needs and activities.",
          "approach": "The pavilion should feature adaptable spaces that can accommodate different activities throughout the day - morning tai chi, afternoon children's programs, evening community meetings. This approach recognizes that the same physical space can serve multiple communities if designed with temporal flexibility.\n\nKey strategies include:\n- Moveable partitions and furniture\n- Flexible lighting systems\n- Surfaces that can support different activities\n- Clear sight lines that can be subdivided\n- Weather protection that works for various group sizes\n\nThis responds to Charles Jencks' concept of 'time-binding' - architecture that works across different temporal contexts rather than freezing a single moment in time.",
          "isCorrect": true,
          "feedback": "Excellent approach! Time-binding spaces demonstrate sophisticated understanding of postmodern flexibility. By designing for temporal variation, you're acknowledging that the same community members have different needs throughout the day, and that different community groups use spaces at different times. This shows how postmodern architecture can serve diversity through temporal strategies rather than trying to create one space that does everything simultaneously.",
          "lectureReference": "This reflects Jencks' discussion of 'time-binding' in postmodern architecture - buildings that accommodate change over time rather than imposing static programs."
        },
        {
          "id": "universal-design-principles",
          "title": "Universal Design Principles", 
          "description": "Create a single, unified space that works efficiently for all users through careful planning and accessibility.",
          "approach": "The pavilion should be designed using universal design principles that create one optimal solution for all community members. Through careful attention to accessibility, circulation, and programming, we can create a single space that works well for everyone.\n\nKey strategies include:\n- ADA-compliant accessibility throughout\n- Optimal lighting and acoustic conditions\n- Efficient circulation patterns\n- Standardized furniture and equipment\n- Clear wayfinding and signage\n\nThis approach draws on modernist principles of rational design and universal solutions, ensuring the pavilion works efficiently for the greatest number of people.",
          "isCorrect": false,
          "feedback": "While universal design is important for accessibility, this approach reflects modernist rather than postmodern thinking. The idea of 'one optimal solution for all users' contradicts postmodern recognition that different communities have genuinely different spatial needs. Universal design should be incorporated into postmodern strategies, but shouldn't be the primary organizing principle.",
          "lectureReference": "Review the lecture discussion of how postmodern architecture differs from modernist universalism."
        },
        {
          "id": "separate-dedicated-zones",
          "title": "Separate Dedicated Zones",
          "description": "Divide the pavilion into distinct areas designed specifically for different demographic groups.",
          "approach": "The pavilion should be organized into dedicated zones for different community groups - a children's area with appropriate scale and materials, a seniors' area with comfortable seating and quiet atmosphere, a cultural space for immigrant communities, and a professional networking area for young workers.\n\nKey strategies include:\n- Age-appropriate design for different zones\n- Cultural sensitivity in material and spatial choices\n- Clear boundaries between different areas\n- Specialized equipment for different activities\n- Separate entrances where appropriate\n\nThis ensures each community group gets space designed specifically for their needs without compromise.",
          "isCorrect": false,
          "feedback": "This approach misunderstands both community dynamics and postmodern principles. Segregating community groups prevents the cross-cultural interaction that makes public spaces valuable. Postmodern architecture should embrace complexity and multiple meanings, not separate different communities into isolated zones.",
          "lectureReference": "Consider how postmodern 'both/and' thinking differs from 'either/or' spatial organization."
        },
        {
          "id": "rotating-programmatic-schedule",
          "title": "Rotating Programmatic Schedule",
          "description": "Assign different times and days for different community groups to use the pavilion exclusively.",
          "approach": "The pavilion should operate on a scheduled rotation system where different community groups have dedicated time slots for exclusive use. This ensures each group gets optimal conditions for their activities without interference from other users.\n\nKey strategies include:\n- Time-slot reservations for different groups\n- Specialized equipment that can be set up for specific activities\n- Cultural programming that rotates weekly or monthly\n- Community liaison coordination for scheduling\n- Clear communication about availability\n\nThis prevents conflicts between different user groups while ensuring equitable access for all community members.",
          "isCorrect": false,
          "feedback": "While scheduling can be useful for some activities, making it the primary strategy contradicts the goal of creating genuine community space. Public architecture should enable spontaneous encounter and cross-cultural interaction, not segregate communities into separate time slots.",
          "lectureReference": "Think about how postmodern architecture can enable multiple activities simultaneously rather than sequentially."
        }
      ],
      "correctFeedback": "Your understanding of time-binding spaces shows sophisticated grasp of postmodern flexibility.",
      "incorrectFeedback": "Consider how postmodern architecture differs from modernist universal solutions and how it can accommodate diversity without segregation."
    },
    {
      "id": 3,
      "title": "Spatial Strategy & Pluralistic Design",
      "description": "The committee explores your approach to creating spaces that work for multiple uses simultaneously.",
      "context": "Dr. Patel nods approvingly at your temporal flexibility approach: \"Good start. Now let's get more specific about spatial organization. One family might want to have a birthday party while another group holds a book club meeting, and elderly visitors want quiet spots to read. These aren't necessarily separate activities - they might all happen simultaneously.\"\n\nMaria Santos adds: \"This is where postmodern theory becomes practically useful. Charles Jencks wrote about 'pluralistic space' - architecture that can support multiple activities and meanings at the same time, rather than privileging one use over others.\"\n\nJames Mitchell notes: \"We're not talking about noise management or simple zoning. We're asking how architectural form itself can create spaces that work for different groups simultaneously without conflict.\"\n\nDr. Chen concludes: \"Your spatial strategy needs to demonstrate how postmodern design principles translate into built form that genuinely serves multiple constituencies.\"",
      "question": "How should the pavilion's spatial organization create 'pluralistic space' that serves multiple activities simultaneously?",
      "options": [
        {
          "id": "graduated-intimacy-zones",
          "title": "Graduated Intimacy Zones",
          "description": "Create a spectrum of spaces from public to intimate that naturally accommodate different group sizes and activities.",
          "approach": "The pavilion should be organized as a series of interconnected spaces that graduate from most public to most intimate, allowing different activities to find their appropriate level of privacy and social engagement.\n\nKey strategies include:\n- Large central gathering space for community events\n- Medium-scale alcoves for small group activities\n- Intimate nooks for individual reading or quiet conversation\n- Semi-private spaces that feel separate but remain visually connected\n- Transition zones that can accommodate overflow from busy areas\n\nThis creates what Christopher Alexander called 'gradient of privacy' while maintaining the visual and social connections that make public space vibrant.",
          "isCorrect": true,
          "feedback": "Excellent spatial thinking! Graduated intimacy zones demonstrate sophisticated understanding of how postmodern architecture can serve multiple constituencies simultaneously. By creating a range of spatial experiences within a single architectural framework, you're enabling choice without segregation. Different activities can occur at their preferred level of privacy while remaining part of the larger community experience.",
          "lectureReference": "This reflects Jencks' concept of 'pluralistic space' and Venturi's ideas about architectural complexity accommodating different needs."
        },
        {
          "id": "acoustic-separation-systems",
          "title": "Acoustic Separation Systems",
          "description": "Use advanced sound-dampening technology to create acoustically isolated zones within an open plan.",
          "approach": "The pavilion should use sophisticated acoustic engineering to create sound isolation between different activity areas while maintaining visual openness and spatial flow.\n\nKey strategies include:\n- Directional sound masking systems\n- Acoustic baffles and sound-absorbing materials\n- White noise generation for privacy\n- Frequency-specific sound dampening\n- Wireless headphone systems for individual activities\n\nThis technological approach ensures that different activities can occur simultaneously without acoustic interference, creating functional separation without physical barriers.",
          "isCorrect": false,
          "feedback": "While acoustic design is important, this approach relies too heavily on technological solutions rather than architectural spatial strategies. Postmodern architecture emphasizes how form and space themselves can create successful complexity, not just how technology can manage competing uses.",
          "lectureReference": "Focus on how architectural form can create pluralistic space rather than depending primarily on technological management."
        },
        {
          "id": "modular-partition-system",
          "title": "Modular Partition System",
          "description": "Install flexible wall systems that can be reconfigured to create different spatial arrangements as needed.",
          "approach": "The pavilion should feature a sophisticated modular partition system that allows users to reconfigure the space for different activities and group sizes throughout the day.\n\nKey strategies include:\n- Lightweight, moveable wall panels\n- Integrated storage for partition components\n- Quick-connect systems for easy reconfiguration\n- Various panel types (solid, transparent, semi-transparent)\n- User-friendly operation requiring no special tools\n\nThis gives community groups control over their spatial environment while maintaining maximum flexibility for different uses and events.",
          "isCorrect": false,
          "feedback": "While flexibility is valuable, this approach treats architecture as neutral container rather than active participant in creating community space. Postmodern architecture should use fixed architectural elements - form, light, materiality - to create spatial richness, not just provide blank space for users to subdivide.",
          "lectureReference": "Consider how permanent architectural features can create spatial variety rather than relying on user modification of neutral space."
        },
        {
          "id": "activity-specific-furniture",
          "title": "Activity-Specific Furniture",
          "description": "Provide specialized furniture and equipment for different activities while keeping the architecture neutral.",
          "approach": "The pavilion should maintain simple, open architecture while providing extensive specialized furniture that can be arranged to support different community activities and group configurations.\n\nKey strategies include:\n- Modular seating systems for different group sizes\n- Adjustable tables for various activities\n- Specialized equipment storage\n- Mobile technology stations\n- Flexible lighting on wheeled stands\n\nThis approach keeps the architectural envelope simple while providing the tools communities need to customize their space for specific activities and cultural practices.",
          "isCorrect": false,
          "feedback": "This approach makes architecture passive rather than actively contributing to community life. Postmodern design should use architectural form itself to create spatial richness and accommodate multiple uses, not just provide neutral space with moveable furniture.",
          "lectureReference": "Think about how architectural space itself can be 'multivalent' rather than relying on furniture to create spatial variety."
        }
      ],
      "correctFeedback": "Your graduated intimacy approach demonstrates excellent understanding of how architectural form can create genuine pluralistic space.",
      "incorrectFeedback": "Consider how architectural space itself, rather than technology or furniture, can create environments that accommodate multiple activities simultaneously."
    },
    {
      "id": 4,
      "title": "Multivalent Communication Strategy",
      "description": "The committee examines your understanding of how buildings can communicate with different audiences simultaneously.",
      "context": "James Mitchell leans forward with interest: \"Your spatial thinking shows promise. Now we want to explore communication - how your pavilion will 'speak' to different community members. Robert Venturi wrote about 'multivalent' architecture that can communicate simultaneously with popular and professional audiences.\"\n\nDr. Chen adds: \"This isn't about dumbing down architecture for popular appeal, or making it so sophisticated that ordinary users feel excluded. Multivalent communication means the building works for someone using it for the first time and also rewards deeper architectural engagement.\"\n\nMaria Santos explains: \"Think about it practically - a grandmother bringing her grandchildren to the pavilion should find it immediately welcoming and comprehensible, while an architecture student should discover layers of design sophistication. Both experiences should be authentic.\"\n\nDr. Patel concludes: \"Your communication strategy needs to demonstrate how postmodern architecture can be genuinely inclusive without being condescending or overly simplified.\"",
      "question": "How should your pavilion demonstrate multivalent architectural communication?",
      "options": [
        {
          "id": "familiar-forms-sophisticated-details",
          "title": "Familiar Forms with Sophisticated Details",
          "description": "Use immediately recognizable architectural elements while incorporating subtle design sophistication for those who look closer.",
          "approach": "The pavilion should employ architectural forms that read immediately as familiar and welcoming - perhaps evoking a large porch, market pavilion, or garden pergola - while incorporating sophisticated spatial and material strategies that reward closer examination.\n\nKey strategies include:\n- Recognizable roof forms that suggest shelter and gathering\n- Materials that reference local building traditions\n- Proportions that feel human-scaled and approachable\n- Subtle spatial complexities that emerge through use\n- Details that demonstrate contemporary design thinking\n- Integration with landscape that feels natural yet considered\n\nThis creates what Venturi called 'complexity and contradiction' - architecture that is both immediately accessible and intellectually engaging, speaking to different audiences through the same design moves.",
          "isCorrect": true,
          "feedback": "Outstanding approach! This demonstrates sophisticated understanding of multivalent communication. By using familiar architectural language while incorporating design sophistication, you're creating genuine inclusivity - not talking down to popular audiences or excluding them from architectural discourse. This shows how postmodern architecture can be both immediately welcoming and intellectually rewarding.",
          "lectureReference": "This exemplifies Venturi's 'both/and' approach and his ideas about complexity and contradiction in architecture."
        },
        {
          "id": "educational-architectural-displays",
          "title": "Educational Architectural Displays",
          "description": "Include interpretive signage and displays that explain the design principles and architectural strategies to educate visitors.",
          "approach": "The pavilion should incorporate comprehensive educational components that help community members understand and appreciate the architectural design strategies being employed.\n\nKey strategies include:\n- Interpretive panels explaining design decisions\n- QR codes linking to architectural information\n- Educational displays about postmodern theory\n- Guided tour materials for architecture students\n- Community workshops about design appreciation\n- Interactive exhibits about building systems\n\nThis ensures that all community members have access to architectural knowledge while allowing those less interested to simply enjoy the space without educational pressure.",
          "isCorrect": false,
          "feedback": "While education can be valuable, this approach treats multivalent communication as an add-on rather than integral to the architecture itself. Postmodern multivalent design should communicate through architectural form, not through explanatory text. The building should speak to different audiences through its spatial and formal qualities.",
          "lectureReference": "Consider how architectural form itself can be multivalent rather than requiring interpretation to make it accessible."
        },
        {
          "id": "simplified-public-sophisticated-private",
          "title": "Simplified Public, Sophisticated Private",
          "description": "Make public-facing areas architecturally simple and approachable while incorporating design complexity in less visible areas.",
          "approach": "The pavilion should present a simple, welcoming face to the public realm while reserving architectural sophistication for areas that will be discovered by more engaged users or architecture professionals.\n\nKey strategies include:\n- Clean, minimal exterior that feels immediately approachable\n- Simple materials and forms in high-traffic areas\n- Sophisticated details in quiet corners and transition spaces\n- Complex spatial relationships in areas for deeper exploration\n- Professional-level design thinking in service and utility areas\n\nThis allows popular audiences to feel comfortable while providing architectural depth for those seeking more sophisticated engagement.",
          "isCorrect": false,
          "feedback": "This approach creates hierarchy between different audiences rather than true multivalent communication. It suggests that sophisticated architecture might intimidate popular users, which contradicts postmodern goals of genuine inclusivity. Multivalent design should speak to all audiences simultaneously, not segregate different levels of architectural sophistication.",
          "lectureReference": "Review how Venturi's multivalent architecture speaks to different audiences through the same architectural elements, not separate ones."
        },
        {
          "id": "cultural-symbolism-integration",
          "title": "Cultural Symbolism Integration",
          "description": "Incorporate symbols and references from the diverse cultures represented in the community.",
          "approach": "The pavilion should integrate architectural elements, patterns, and spatial concepts from the various cultures represented in Wynyard Quarter's diverse community, creating a building that speaks to different cultural backgrounds.\n\nKey strategies include:\n- Architectural patterns from Pacific Island traditions\n- Spatial concepts from Asian design principles\n- Material choices reflecting European architectural heritage\n- Color palettes that reference community cultural backgrounds\n- Proportional systems from various architectural traditions\n\nThis creates architecture that different community members can recognize and connect with through their cultural architectural knowledge and spatial preferences.",
          "isCorrect": false,
          "feedback": "While cultural sensitivity is important, this approach risks creating architectural pastiche rather than genuine multivalent communication. Simply combining cultural symbols doesn't create meaningful communication and may result in superficial tokenism rather than deeper architectural engagement with community diversity.",
          "lectureReference": "Focus on how architectural space and form can be multivalent rather than relying primarily on cultural symbolism or decoration."
        }
      ],
      "correctFeedback": "Your understanding of familiar forms with sophisticated details shows excellent grasp of how architecture can speak to multiple audiences authentically.",
      "incorrectFeedback": "Consider how architectural form itself can communicate with different audiences simultaneously rather than requiring separate strategies for different groups."
    },
    {
      "id": 5,
      "title": "Material Strategy & Cultural Sensitivity",
      "description": "The committee explores how material choices can support inclusive community design.",
      "context": "Dr. Patel smiles approvingly: \"Your communication strategy shows real depth. Now let's discuss materiality. Wynyard Quarter's community includes families from Pacific Islands, Asia, Europe, and established New Zealand families. Each group brings different cultural relationships to materials, texture, and architectural expression.\"\n\nMaria Santos adds: \"Material choices can either welcome different cultural groups or inadvertently exclude them. Some communities value natural materials and tactile surfaces, others prefer clean contemporary finishes. Some associate certain materials with institutional authority, others with domestic comfort.\"\n\nJames Mitchell notes: \"This isn't about creating a materials 'sampler' from different cultures. We're asking how postmodern material strategies can acknowledge cultural diversity while creating coherent architectural expression.\"\n\nDr. Chen concludes: \"Your material approach should demonstrate how postmodern architecture can be culturally sensitive without resorting to superficial symbolism or visual clichés.\"",
      "question": "How should material choices support culturally inclusive postmodern design?",
      "options": [
        {
          "id": "tactile-material-variety",
          "title": "Tactile Material Variety",
          "description": "Provide diverse material experiences that invite different forms of physical and cultural engagement.",
          "approach": "The pavilion should incorporate a range of materials that invite different kinds of tactile and cultural engagement - warm wood for those who value natural materials, cool concrete for those who appreciate contemporary aesthetics, metal details for industrial texture, and soft landscape elements for those seeking organic comfort.\n\nKey strategies include:\n- Wood surfaces that invite touch and suggest craft traditions\n- Concrete elements that provide thermal mass and contemporary character\n- Metal details that add precision and reflect light\n- Textile elements that soften hard surfaces\n- Natural stone that connects to landscape and geological context\n- Water features that provide acoustic and tactile variety\n\nThis creates what might be called 'material pluralism' - diverse sensory experiences within a coherent architectural framework that different cultural backgrounds can engage with according to their preferences.",
          "isCorrect": true,
          "feedback": "Excellent material thinking! Tactile variety demonstrates sophisticated understanding of how different cultures engage with built environment through sensory experience. By providing diverse material experiences within a coherent design framework, you're enabling different cultural relationships to architecture without resorting to superficial symbolism. This shows genuine inclusivity through sensory accessibility.",
          "lectureReference": "This reflects postmodern interest in sensory richness and cultural pluralism through architectural experience rather than symbolic representation."
        },
        {
          "id": "locally-sourced-sustainable-materials",
          "title": "Locally-Sourced Sustainable Materials",
          "description": "Focus on environmentally responsible materials sourced from the Auckland region to create authentic local character.",
          "approach": "The pavilion should prioritize materials that demonstrate environmental responsibility while creating authentic connection to Auckland's natural and built context.\n\nKey strategies include:\n- Native timber from sustainable forestry operations\n- Local stone from Auckland's geological formations\n- Recycled materials from area demolition projects\n- Low-impact concrete with regional aggregates\n- Locally-manufactured metal components\n- Native plants and landscape materials\n\nThis creates architecture that expresses genuine connection to place while demonstrating contemporary environmental values that can appeal to community members regardless of cultural background.",
          "isCorrect": false,
          "feedback": "While environmental responsibility is important, this approach focuses on local authenticity rather than cultural inclusivity. A community with diverse cultural backgrounds needs materials that acknowledge different relationships to built environment, not just connection to Auckland's natural context.",
          "lectureReference": "Consider how material choices can acknowledge cultural diversity rather than primarily focusing on local environmental context."
        },
        {
          "id": "high-performance-contemporary-materials",
          "title": "High-Performance Contemporary Materials",
          "description": "Use cutting-edge materials that demonstrate technological sophistication and durability for heavy public use.",
          "approach": "The pavilion should incorporate advanced materials that demonstrate contemporary design sophistication while providing the durability and performance required for intensive community use.\n\nKey strategies include:\n- High-performance glass with thermal and acoustic properties\n- Advanced composite materials for weather resistance\n- Smart materials that respond to environmental conditions\n- Precision-manufactured components for clean detailing\n- Low-maintenance surfaces that age gracefully\n- Integrated technology systems within material assemblies\n\nThis creates architecture that expresses contemporary design values while providing practical performance for diverse community activities and Auckland's challenging climate.",
          "isCorrect": false,
          "feedback": "While performance is important, this approach privileges technological sophistication over cultural accessibility. Advanced materials may feel institutional or exclusionary to some community members. Postmodern design should balance performance requirements with cultural inclusivity.",
          "lectureReference": "Think about how material choices can be both contemporary and culturally welcoming rather than emphasizing technological advancement."
        },
        {
          "id": "cultural-material-references",
          "title": "Cultural Material References",
          "description": "Incorporate specific materials that reference the architectural traditions of different cultural communities.",
          "approach": "The pavilion should thoughtfully integrate materials that reference different cultural architectural traditions - bamboo elements referencing Asian building practices, natural fiber components suggesting Pacific Island construction, stone work referencing European masonry traditions, and contemporary materials representing New Zealand's architectural evolution.\n\nKey strategies include:\n- Bamboo screening and structural elements\n- Woven fiber panels and ceiling treatments\n- Traditional stone masonry details\n- Contemporary New Zealand timber techniques\n- Metal work referencing various cultural traditions\n\nThis creates architecture that different community members can recognize and connect with through familiar material experiences from their cultural architectural knowledge.",
          "isCorrect": false,
          "feedback": "This approach risks creating architectural pastiche and may inadvertently stereotype different cultural communities through material clichés. Postmodern cultural sensitivity should work through spatial and sensory experience rather than literal cultural references.",
          "lectureReference": "Consider how materials can create inclusive sensory experiences rather than relying on cultural symbolism or literal references."
        }
      ],
      "correctFeedback": "Your tactile material variety approach demonstrates sophisticated understanding of cultural inclusivity through sensory architectural experience.",
      "incorrectFeedback": "Think about how materials can create inclusive sensory experiences that welcome different cultural relationships to built environment."
    },
    {
      "id": "6a",
      "title": "Committee Decision & Design Precedents",
      "description": "The committee evaluates your understanding of postmodern theory through architectural precedent analysis.",
      "context": "The committee members exchange satisfied glances and begin gathering their notes. Dr. Chen looks up with a smile.\n\n\"Your understanding of multivalent architectural communication has been impressive throughout this presentation,\" she begins. \"You've demonstrated solid grasp of postmodern principles and their practical application to community design.\"\n\nMaria Santos nods enthusiastically: \"More importantly, you've shown how these theoretical concepts translate into architecture that will genuinely serve Auckland's diverse communities. That's exactly what we hoped to see.\"\n\nJames Mitchell adds: \"Your approach to time-binding, pluralistic space, and multivalent communication suggests this pavilion could become a genuine community asset rather than just an architectural object.\"\n\nDr. Patel smiles: \"We're prepared to recommend your proposal for development. However, before we conclude, we have one final request.\"\n\nDr. Chen leans forward with renewed focus: \"We'd like you to ground your theoretical approach in architectural precedent. Can you identify a specific postmodern building that exemplifies the design strategies you've been describing? We want to understand how your approach relates to successful built examples of postmodern architecture.\"\n\nJames Mitchell explains: \"This isn't just academic - precedent analysis helps us understand whether your strategies have been tested in practice and what we might learn from similar projects.\"\n\nDr. Patel concludes: \"So please identify a key postmodern building that demonstrates your design approach, and explain specifically what postmodern characteristics make it relevant to your pavilion strategy.\"",
      "question": "Which postmodern building best demonstrates the design strategies you've been describing?",
      "options": [
        {
          "id": "vanna-venturi-house",
          "title": "Vanna Venturi House by Robert Venturi (1964)",
          "description": "A seminal postmodern house that demonstrates complexity and contradiction while remaining approachable.",
          "approach": "I'd cite Robert Venturi's Vanna Venturi House in Philadelphia as a key precedent for our approach. This house demonstrates how postmodern architecture can embrace complexity and contradiction while remaining approachable and human-scaled. Like our pavilion, it combines familiar elements - the iconic American house form - with unexpected spatial and formal strategies that reward closer examination. The house works immediately as a recognizable home while offering architectural sophistication for those who engage more deeply with its design.",
          "isCorrect": true,
          "feedback": "Excellent choice. The Vanna Venturi House demonstrates exactly the multivalent communication and human-scaled complexity you've been describing for your pavilion, and why it's relevant to your approach.",
          "lectureReference": "Your observation about complexity and contradiction is particularly apt. Venturi's house demonstrates exactly the kind of multivalent communication you've been describing - immediately readable yet architecturally sophisticated.",
          "nextScene": "6b"
        },
        {
          "id": "seagram-building",
          "title": "Seagram Building by Mies van der Rohe (1958)",
          "description": "A modernist masterpiece that demonstrates refined minimalist principles and elegant urban presence.",
          "approach": "The Seagram Building in New York exemplifies the kind of refined modernist principles that inform our pavilion design. Its clean lines, honest material expression, and elegant proportions demonstrate how minimalist architecture can achieve both popular appeal and professional respect. The building's bronze and glass facade creates a sophisticated urban presence while its rational structural expression makes its architectural logic clear to any observer. This precedent shows how restraint and clarity can create lasting architectural significance.",
          "isCorrect": false,
          "feedback": "The Seagram Building is a classic example of International Style modernism, not postmodernism. Mies van der Rohe's work represents exactly the kind of minimalist universalism that postmodern architects like Jencks and Venturi criticized.",
          "lectureReference": "This choice suggests some confusion about the difference between modernist and postmodern approaches. The Seagram Building's 'honest material expression' and 'rational structural logic' are modernist principles, not postmodern strategies."
        },
        {
          "id": "att-building",
          "title": "AT&T Building by Philip Johnson (1984)",
          "description": "A postmodern skyscraper that challenges modernist orthodoxy through historical reference and architectural irony.",
          "approach": "Philip Johnson's AT&T Building in New York serves as an important postmodern precedent for our civic architecture approach. This building demonstrates how postmodern design can challenge modernist orthodoxy through historical reference - its famous Chippendale-inspired crown and classical base reject the modernist glass box. The building uses architectural irony and historical quotation to create a distinctive urban landmark that speaks to both popular recognition and architectural discourse.",
          "isCorrect": false,
          "feedback": "While the AT&T Building is indeed a significant postmodern work, it represents a very different approach from what you've been describing. Johnson's building is about corporate identity and urban monumentality, not community engagement and multivalent communication.",
          "lectureReference": "The AT&T Building works as architectural statement and urban landmark, but it doesn't demonstrate the kind of intimate, flexible community spaces you've been proposing. It's designed for visual impact from the street rather than human-scaled gathering experiences."
        },
        {
          "id": "sydney-opera-house",
          "title": "Sydney Opera House by Jørn Utzon (1973)",
          "description": "An iconic architectural landmark that demonstrates innovative structural strategies and site integration.",
          "approach": "Utzon's Sydney Opera House provides an excellent precedent for our approach to iconic architecture that serves diverse audiences. The building's distinctive shell forms create immediate popular recognition while demonstrating innovative structural and spatial strategies that architects worldwide have studied and admired. Its integration with the harbor setting shows how contemporary architecture can respond to specific place while achieving international significance, similar to our goals for the Wynyard pavilion.",
          "isCorrect": false,
          "feedback": "While the Sydney Opera House is certainly iconic and demonstrates innovative architecture, it's not typically classified as postmodern. Utzon's approach was more aligned with organic modernism and sculptural expressionism than with postmodern theoretical concerns.",
          "lectureReference": "The Opera House doesn't demonstrate the historical reference, irony, or cultural pluralism that characterize postmodern architecture. It's a masterpiece, but of a different architectural movement."
        }
      ],
      "correctFeedback": "Your precedent choice demonstrates solid understanding of postmodern principles and their relevance to community design.",
      "incorrectFeedback": "Please review the lecture content on postmodern characteristics and select a building that demonstrates specific postmodern strategies like historical reference, pluralism, or complexity and contradiction."
    },
    {
      "id": "6b",
      "title": "Characteristic Analysis",
      "description": "Following successful selection of the Vanna Venturi House, analyze its specific postmodern characteristics.",
      "context": "Excellent precedent choice. Now please explain specifically what postmodern characteristics the Vanna Venturi House demonstrates that relate to your pavilion design strategies. How does this house exemplify the approaches you've been describing?",
      "question": "What specific postmodern characteristics make the Vanna Venturi House relevant to your pavilion design approach?",
      "options": [
        {
          "id": "multivalent-communication",
          "title": "Multivalent Architectural Communication",
          "description": "The house demonstrates how buildings can speak to popular and professional audiences simultaneously.",
          "approach": "The Vanna Venturi House demonstrates exactly the kind of multivalent communication we're planning for our pavilion. The house reads immediately as a familiar American home - anyone can recognize the gable roof and front porch - but it also contains sophisticated architectural moves like the split pediment and complex interior spatial relationships. Families see a welcoming house; architects read Venturi's commentary on architectural convention. This shows how buildings can speak to popular and professional audiences simultaneously without compromising either message.",
          "isCorrect": true,
          "feedback": "Perfect analysis. You've identified exactly what makes the Vanna Venturi House relevant to your pavilion approach - its ability to communicate simultaneously with different audiences without talking down to anyone.",
          "lectureReference": "Your observation about the split pediment is particularly insightful. It's a perfect example of how one architectural element can work both as familiar house imagery and sophisticated architectural commentary. That's precisely the kind of multivalent strategy you need for community architecture."
        },
        {
          "id": "ornamental-systems",
          "title": "Postmodern Ornamental Systems",
          "description": "The house exemplifies neo-decorative architecture through elaborate surface treatments and ornamental complexity.",
          "approach": "This house exemplifies what Charles Jencks called 'neo-decorative architecture' through its elaborate surface treatments and ornamental complexity. Venturi uses multiple decorative systems - classical pediments, Gothic arches, and contemporary abstract patterns - to create what he termed 'maximum visual density.' The house demonstrates how postmodern architecture rejected modernist restraint in favour of ornamental abundance, showing how decoration can carry architectural meaning and cultural significance.",
          "isCorrect": false,
          "feedback": "I'm afraid you're mischaracterizing the Vanna Venturi House. It's actually quite restrained in its use of ornament - Jencks never described Venturi's work as 'neo-decorative architecture' or advocating for 'maximum visual density.'",
          "lectureReference": "The house is famous precisely because it achieves complexity through subtle formal moves rather than ornamental elaboration. You're describing a very different kind of postmodern approach - perhaps thinking of architects like Michael Graves or Ricardo Bofill."
        },
        {
          "id": "historical-pastiche",
          "title": "Historical Pastiche Methods",
          "description": "The house combines architectural elements from different historical periods in new synthetic arrangements.",
          "approach": "The Vanna Venturi House represents Venturi's approach to 'creative historicism' - combining architectural elements from different historical periods in new synthetic arrangements. The house mixes colonial American forms with European classical details and modernist spatial concepts to create what he called 'temporal collage.' This demonstrates how postmodern architects could freely combine historical references without concerns about stylistic purity or chronological accuracy.",
          "isCorrect": false,
          "feedback": "This analysis misunderstands Venturi's approach to history. The Vanna Venturi House doesn't combine 'elements from different historical periods' - it's quite specific in its references to American domestic architecture.",
          "lectureReference": "Venturi never advocated for 'creative historicism' or 'temporal collage' in the way you describe. His approach was much more subtle - using familiar architectural language in unexpected ways rather than mixing historical styles."
        },
        {
          "id": "contextual-integration",
          "title": "Contextual Integration Strategies",
          "description": "The house demonstrates environmental integration and neighborhood compatibility through contextual modernism.",
          "approach": "This house shows how postmodern architecture responds to suburban context through environmental integration and neighbourhood compatibility. Venturi designed the house to blend seamlessly with surrounding residential development while subtly elevating the architectural discourse of the neighbourhood. The house demonstrates what he termed 'contextual modernism' - contemporary architecture that respects existing urban fabric rather than disrupting it through formal contrast.",
          "isCorrect": false,
          "feedback": "Venturi never wrote about 'contextual modernism' - this isn't a concept from postmodern theory. The Vanna Venturi House actually stands out quite dramatically from its suburban neighbors rather than blending in.",
          "lectureReference": "The house's significance lies partly in how it challenges conventional suburban architecture, not in how it integrates with it. Venturi was critiquing typical suburban development, not trying to harmonize with it."
        }
      ],
      "correctFeedback": "Excellent analysis. You've demonstrated comprehensive understanding of postmodern architectural principles and their application to community design.",
      "incorrectFeedback": "Your analysis misidentifies the key characteristics of your chosen precedent. Review Venturi's actual design strategies in the house and how they relate to your pavilion approach, then try again."
    },
    {
      "id": 7,
      "title": "Challenge Complete",
      "description": "Congratulations! You have successfully demonstrated comprehensive understanding of postmodern architectural principles.",
      "context": "Congratulations! You have successfully demonstrated comprehensive understanding of postmodern architectural principles and their application to community design. Your proposal for a multivalent pavilion at Wynyard Quarter, grounded in solid theoretical precedent, has been unanimously approved by the committee.\n\nPlease proceed to complete your written reflection on this design process, focusing on how postmodern strategies can create genuinely inclusive public architecture.",
      "question": "",
      "options": [],
      "correctFeedback": "",
      "incorrectFeedback": ""
    }
  ]
};
