export type Audience = 'Grade 3' | 'Grade 7' | 'Adults'

export type CatechistGuidance = {
  talkingPoints: string[]
  tips: string[]
}

export type LessonPlan = {
  id: string
  title: string
  audience: Audience
  duration: string
  scripture: string
  summary: string
  doctrine: { label: string; passage: string; body: string }
  moral: { label: string; body: string; activity: string }
  worship: { label: string; body: string; prayer: string }
  catechist: CatechistGuidance
}

export const lessonPlans_grade3: LessonPlan[] = [
  {
    id: 'life-is-gods-gift',
    title: 'My Life Is a Gift from God',
    audience: 'Grade 3',
    duration: '45 min',
    scripture: 'Psalm 139:14',
    summary: 'Learn that our life comes from God and is precious to Him.',
    doctrine: {
      label: 'Gift of life',
      passage: 'Psalm 139:14',
      body: '“I praise you, for I am fearfully and wonderfully made.” God created each child with love and purpose.'
    },
    moral: {
      label: 'Your life matters',
      body: 'Children learn that their talents, feelings, and dreams are part of God’s gift.',
      activity: 'Draw yourself and write three things that make your life special and loved by God.'
    },
    worship: {
      label: 'Thanking God for life',
      body: 'Invite children to quietly thank God for creating them.',
      prayer: 'Lord, thank you for giving me life. Help me use it well. Amen.'
    },
    catechist: {
      talkingPoints: [
        'Begin with a short prayer thanking God for creating each child.',
        'Highlight that God knows them personally and lovingly.',
        'Read the verse slowly and emphasize “wonderfully made.”',
        'Ask: “What makes you feel special?”',
        'Connect the verse to real life: talents, family, personality.',
        'Encourage children to see their life as a gift to be cared for.'
      ],
      tips: [
        'Use gentle affirmations — Grade 3 students respond well to encouragement.',
        'Avoid abstract explanations; keep it concrete and personal.',
        'Let children share something they love about themselves.'
      ]
    }
  },

  {
    id: 'created-with-companions',
    title: 'God Created Me with Companions',
    audience: 'Grade 3',
    duration: '45 min',
    scripture: 'Genesis 2:18',
    summary: 'Discover that God made us to live with others, not alone.',
    doctrine: {
      label: 'Made for community',
      passage: 'Genesis 2:18',
      body: '“It is not good for the man to be alone.” God created us to love and be loved in families and friendships.'
    },
    moral: {
      label: 'Be a good companion',
      body: 'Children learn that kindness, sharing, and including others reflect God’s plan.',
      activity: 'Write the name of a friend or family member and one way you can help them this week.'
    },
    worship: {
      label: 'Together in God',
      body: 'Invite children to thank God for the people He placed in their lives.',
      prayer: 'God, thank you for giving me companions. Help me love them well. Amen.'
    },
    catechist: {
      talkingPoints: [
        'Start with a prayer thanking God for friends and family.',
        'Explain that God designed us to live with others.',
        'Ask: “Who helps you every day?”',
        'Connect the verse to school life — recess, group work, siblings.',
        'Highlight that being a good companion is part of God’s plan.'
      ],
      tips: [
        'Use real-life examples: sharing snacks, helping classmates.',
        'Encourage shy children by affirming their quiet ways of caring.',
        'Invite children to name someone they appreciate.'
      ]
    }
  },

  {
    id: 'new-life-in-baptism',
    title: 'New Life in Baptism',
    audience: 'Grade 3',
    duration: '45 min',
    scripture: 'Romans 6:4',
    summary: 'Learn that Baptism gives us new life in God and makes us part of His family.',
    doctrine: {
      label: 'Born anew',
      passage: 'Romans 6:4',
      body: '“We too might walk in newness of life.” Baptism gives us new life and welcomes us into God’s family.'
    },
    moral: {
      label: 'Live your new life',
      body: 'Children learn that kindness, honesty, and prayer show the new life of Jesus.',
      activity: 'Draw a water droplet and write one way you can live your Baptism this week.'
    },
    worship: {
      label: 'Baptismal grace',
      body: 'Invite children to touch water and remember God’s love.',
      prayer: 'Jesus, thank you for giving me new life in Baptism. Help me live like you. Amen.'
    },
    catechist: {
      talkingPoints: [
        'Begin with a prayer asking God to renew our hearts.',
        'Explain Baptism simply: water + God’s love + new life.',
        'Ask: “Have you seen a baby being baptized?”',
        'Connect Baptism to daily life: choosing good, loving others.',
        'Highlight that Baptism makes us part of a big family — the Church.'
      ],
      tips: [
        'Use a small bowl of water as a visual aid.',
        'Keep the explanation simple and joyful.',
        'Encourage children to remember their Baptism day.'
      ]
    }
  },

  {
    id: 'church-community-of-families',
    title: 'The Church: Community of Families',
    audience: 'Grade 3',
    duration: '45 min',
    scripture: 'Acts 2:44',
    summary: 'Discover that the Church is God’s family made of many families.',
    doctrine: {
      label: 'One family',
      passage: 'Acts 2:44',
      body: '“All who believed were together.” The Church gathers families to pray, learn, and care for one another.'
    },
    moral: {
      label: 'Belonging',
      body: 'Children learn how they help their parish family — listening, sharing, praying.',
      activity: 'Draw your family inside a big heart labeled “Church Family.”'
    },
    worship: {
      label: 'Family of God',
      body: 'Invite children to pray for families in the parish.',
      prayer: 'Lord, thank you for our Church family. Help us care for one another. Amen.'
    },
    catechist: {
      talkingPoints: [
        'Begin with a prayer for the parish community.',
        'Explain that the Church is more than a building — it’s people.',
        'Ask: “What do you see at Mass?”',
        'Highlight how families gather to worship and help each other.',
        'Connect the verse to parish life: singing, praying, serving.'
      ],
      tips: [
        'Use examples from your own parish.',
        'Encourage children to pray for someone in the parish.',
        'Let them share what they love about going to Mass.'
      ]
    }
  },

  {
    id: 'holy-spirit-prepares-us',
    title: 'The Holy Spirit Prepares Us to Receive Jesus',
    audience: 'Grade 3',
    duration: '45 min',
    scripture: 'John 14:26',
    summary: 'Learn that the Holy Spirit guides our hearts and helps us welcome Jesus.',
    doctrine: {
      label: 'Spirit of guidance',
      passage: 'John 14:26',
      body: '“The Holy Spirit… will teach you everything.” The Spirit helps us understand Jesus and prepares our hearts.'
    },
    moral: {
      label: 'Listen to the Spirit',
      body: 'Children learn that peace, kindness, and good choices show the Spirit’s guidance.',
      activity: 'Draw a flame and write one way the Holy Spirit helps you.'
    },
    worship: {
      label: 'Come, Holy Spirit',
      body: 'Invite children to imagine the Spirit filling their hearts with light.',
      prayer: 'Holy Spirit, prepare my heart to welcome Jesus. Amen.'
    },
    catechist: {
      talkingPoints: [
        'Begin with a prayer asking the Holy Spirit to guide the class.',
        'Explain the Spirit as God’s helper and teacher.',
        'Ask: “When do you feel peaceful or guided?”',
        'Connect the Spirit to real choices: sharing, calming down, praying.',
        'Highlight that the Spirit helps us understand Jesus.'
      ],
      tips: [
        'Use a candle or flame image as a symbol.',
        'Speak gently — the topic is spiritual and calming.',
        'Encourage children to notice moments of peace.'
      ]
    }
  },

  {
    id: 'jesus-is-merciful',
    title: 'Jesus Is Merciful and Forgiving',
    audience: 'Grade 3',
    duration: '45 min',
    scripture: 'Luke 6:36',
    summary: 'Discover that Jesus shows mercy and forgives us with love.',
    doctrine: {
      label: 'Merciful Savior',
      passage: 'Luke 6:36',
      body: '“Be merciful, just as your Father is merciful.” Jesus forgives us and invites us to forgive others.'
    },
    moral: {
      label: 'Show mercy',
      body: 'Children learn to forgive quickly and kindly, just as Jesus forgives them.',
      activity: 'Write a short prayer asking Jesus to help you forgive someone.'
    },
    worship: {
      label: 'Mercy moment',
      body: 'Invite children to imagine Jesus smiling at them with kindness.',
      prayer: 'Jesus, thank you for your mercy. Help me forgive like you. Amen.'
    },
    catechist: {
      talkingPoints: [
        'Begin with a prayer asking Jesus to soften our hearts.',
        'Explain mercy simply: kindness when someone makes a mistake.',
        'Ask: “When have you needed forgiveness?”',
        'Connect the verse to school life: accidents, arguments, sharing.',
        'Highlight that mercy makes friendships stronger.'
      ],
      tips: [
        'Use gentle examples — avoid heavy guilt themes.',
        'Encourage children to practice small acts of mercy.',
        'Affirm every child’s effort to forgive.'
      ]
    }
  },

  {
    id: 'power-to-forgive',
    title: 'Jesus Gives the Priest the Power to Forgive Sins',
    audience: 'Grade 3',
    duration: '45 min',
    scripture: 'John 20:22–23',
    summary: 'Learn that Jesus gave the Church the Sacrament of Reconciliation.',
    doctrine: {
      label: 'Gift of forgiveness',
      passage: 'John 20:22–23',
      body: '“Receive the Holy Spirit… If you forgive the sins of any, they are forgiven.” Jesus gave priests the authority to forgive sins.'
    },
    moral: {
      label: 'Say sorry with trust',
      body: 'Children learn to approach Reconciliation with honesty and peace.',
      activity: 'Draw a confessional and write one feeling you have when God forgives you.'
    },
    worship: {
      label: 'Peace of Jesus',
      body: 'Invite children to imagine Jesus placing His hand on their shoulder with love.',
      prayer: 'Jesus, thank you for forgiving me through your priests. Help me stay close to you. Amen.'
    },
    catechist: {
      talkingPoints: [
        'Begin with a prayer for peace and courage.',
        'Explain Reconciliation gently — it is a place of love, not fear.',
        'Ask: “What helps you feel calm when you’re nervous?”',
        'Highlight that priests forgive because Jesus asked them to.',
        'Connect the verse to the joy of being forgiven.'
      ],
      tips: [
        'Avoid heavy language about sin — focus on healing.',
        'Use simple examples: saying sorry to parents or friends.',
        'Affirm that God is always happy to forgive.'
      ]
    }
  },

  {
    id: 'jesus-my-savior',
    title: 'Jesus Is My Savior',
    audience: 'Grade 3',
    duration: '45 min',
    scripture: 'John 3:17',
    summary: 'Discover that Jesus saves us from sin and leads us to life with God.',
    doctrine: {
      label: 'Saved by Jesus',
      passage: 'John 3:17',
      body: '“God sent his Son… to save the world.” Jesus leads us to God’s love and eternal life.'
    },
    moral: {
      label: 'Trust Jesus',
      body: 'Children learn to trust Jesus when they are afraid, confused, or sad.',
      activity: 'Draw a cross and write one way Jesus helps you.'
    },
    worship: {
      label: 'Savior’s love',
      body: 'Invite children to imagine Jesus holding them close.',
      prayer: 'Jesus, thank you for saving me. Help me follow you always. Amen.'
    },
    catechist: {
      talkingPoints: [
        'Begin with a prayer thanking Jesus for His love.',
        'Explain “Savior” simply: Jesus helps us and leads us to God.',
        'Ask: “When do you need help?”',
        'Connect the verse to real fears: tests, friendships, mistakes.',
        'Highlight that Jesus is always with them.'
      ],
      tips: [
        'Use comforting language — Grade 3 students respond well to reassurance.',
        'Encourage children to name moments when Jesus helped them.',
        'Keep the tone hopeful and warm.'
      ]
    }
  },

  {
    id: 'jesus-established-eucharist',
    title: 'Jesus Established the Holy Eucharist',
    audience: 'Grade 3',
    duration: '45 min',
    scripture: 'Luke 22:19',
    summary: 'Learn that Jesus gave us the Eucharist as His lasting gift of love.',
    doctrine: {
      label: 'Gift of Himself',
      passage: 'Luke 22:19',
      body: '“Do this in remembrance of me.” Jesus gave us His Body and Blood so He could remain with us always.'
    },
    moral: {
      label: 'Remember Jesus’ love',
      body: 'Children learn to be thankful for Jesus’ gift of Himself.',
      activity: 'Draw a chalice and host and write one thank‑you to Jesus.'
    },
    worship: {
      label: 'Eucharistic love',
      body: 'Invite children to imagine Jesus offering them His love.',
      prayer: 'Jesus, thank you for giving us the Eucharist. Help me love you more. Amen.'
    },
    catechist: {
      talkingPoints: [
        'Begin with a prayer of thanksgiving.',
        'Explain the Last Supper simply: Jesus sharing bread and wine.',
        'Ask: “What do you remember from Mass?”',
        'Highlight that the Eucharist is Jesus staying close to us.',
        'Connect the verse to First Communion preparation.'
      ],
      tips: [
        'Use a picture of the Last Supper.',
        'Keep the tone joyful — this is a beautiful gift.',
        'Encourage children to express gratitude.'
      ]
    }
  },

  {
    id: 'jesus-word-of-life',
    title: 'Jesus, the Word Who Gives Life',
    audience: 'Grade 3',
    duration: '45 min',
    scripture: 'John 1:4',
    summary: 'Discover that Jesus is God’s Word who brings life and light.',
    doctrine: {
      label: 'Living Word',
      passage: 'John 1:4',
      body: '“In him was life, and the life was the light of all people.” Jesus brings life, hope, and direction.'
    },
    moral: {
      label: 'Listen to His Word',
      body: 'Children learn to listen to Scripture at Mass and at home.',
      activity: 'Write one short verse that helps you feel close to Jesus.'
    },
    worship: {
      label: 'Light of Jesus',
      body: 'Invite children to imagine Jesus’ light shining in their hearts.',
      prayer: 'Jesus, Word of Life, speak to my heart and guide me. Amen.'
    },
    catechist: {
      talkingPoints: [
        'Begin with a prayer asking Jesus to shine His light.',
        'Explain “Word” simply: Jesus shows us how to live.',
        'Ask: “What helps you feel hopeful?”',
        'Connect the verse to listening at Mass.',
        'Highlight that Jesus’ words bring life.'
      ],
      tips: [
        'Use a flashlight or candle as a symbol of light.',
        'Encourage children to memorize short verses.',
        'Keep the tone bright and uplifting.'
      ]
    }
  },

  {
    id: 'jesus-gives-his-life',
    title: 'Jesus Gives His Life in the Eucharist',
    audience: 'Grade 3',
    duration: '45 min',
    scripture: 'John 15:13',
    summary: 'Learn that Jesus offers His life for us and gives Himself in the Eucharist.',
    doctrine: {
      label: 'Greatest love',
      passage: 'John 15:13',
      body: '“No one has greater love than this.” Jesus gave His life for us and offers Himself in the Eucharist.'
    },
    moral: {
      label: 'Receive with love',
      body: 'Children learn to approach the Eucharist with reverence and gratitude.',
      activity: 'Practice a quiet moment imagining Jesus giving His love to you.'
    },
    worship: {
      label: 'Gift of Jesus',
      body: 'Invite children to thank Jesus silently for His sacrifice.',
      prayer: 'Jesus, thank you for giving your life for me. Help me love you deeply. Amen.'
    },
    catechist: {
      talkingPoints: [
        'Begin with a prayer of gratitude for Jesus’ sacrifice.',
        'Explain love as giving — Jesus gave everything.',
        'Ask: “When has someone done something kind for you?”',
        'Connect the verse to Communion.',
        'Highlight that Jesus’ love is personal.'
      ],
      tips: [
        'Use gentle language — avoid graphic descriptions.',
        'Encourage children to express gratitude.',
        'Keep the tone reverent and calm.'
      ]
    }
  },
  {
    id: 'united-with-jesus',
    title: 'We Are United with Jesus in the Eucharist',
    audience: 'Grade 3',
    duration: '45 min',
    scripture: 'John 6:56',
    summary: 'Discover that receiving the Eucharist brings us close to Jesus.',
    doctrine: {
      label: 'Communion with Christ',
      passage: 'John 6:56',
      body: '“Whoever eats my flesh and drinks my blood remains in me, and I in them.” In Communion, Jesus lives in us and we live in Him.'
    },
    moral: {
      label: 'Stay close to Jesus',
      body: 'Children learn that receiving Jesus helps them love others, be patient, and make good choices.',
      activity: 'Draw a heart and write one way Jesus helps you love others after receiving Communion.'
    },
    worship: {
      label: 'Union with Jesus',
      body: 'Invite children to imagine Jesus resting in their hearts after Communion.',
      prayer: 'Jesus, thank you for being with me in Communion. Stay with me always. Amen.'
    },
    catechist: {
      talkingPoints: [
        'Begin with a quiet prayer inviting Jesus into each child’s heart.',
        'Explain “Communion” simply: Jesus comes close and stays with us.',
        'Ask: “How do you feel after receiving Communion?”',
        'Highlight that Communion helps us love others like Jesus.',
        'Connect the verse to real-life moments: sharing, calming down, helping friends.',
        'Explain that being united with Jesus means we carry His love everywhere.'
      ],
      tips: [
        'Use gentle, warm language — this topic is deeply personal.',
        'Encourage children to describe how Jesus helps them.',
        'Remind them that Communion is not just a moment, but a relationship.',
        'Invite them to practice a “Jesus in my heart” quiet moment.'
      ]
    }
  },
  {
    id: 'keep-holy-the-lords-day',
    title: 'Keep Holy the Lord’s Day',
    audience: 'Grade 3',
    duration: '45 min',
    scripture: 'Exodus 20:8',
    summary: 'Learn why Sunday is special and how we celebrate the Eucharist together.',
    doctrine: {
      label: 'Day for God',
      passage: 'Exodus 20:8',
      body: '“Remember the sabbath day, and keep it holy.” God gives us Sunday as a day of rest, prayer, and worship.'
    },
    moral: {
      label: 'Make Sunday special',
      body: 'Children learn simple ways to honor Sunday—going to Mass, spending time with family, being kind and peaceful.',
      activity: 'Create a “Sunday plan” with three ways to make the Lord’s Day holy.'
    },
    worship: {
      label: 'Joyful worship',
      body: 'Invite children to thank God for the gift of Sunday and the chance to worship together.',
      prayer: 'Lord, thank you for the Lord’s Day. Help me celebrate it with joy. Amen.'
    },
    catechist: {
      talkingPoints: [
        'Begin with a prayer thanking God for Sundays.',
        'Explain that Sunday is a gift — a day to rest and be close to God.',
        'Ask: “What do you usually do on Sundays?”',
        'Highlight that Mass is the center of the Lord’s Day.',
        'Connect the verse to family routines: meals, rest, prayer.',
        'Explain that keeping Sunday holy helps us grow closer to God and each other.'
      ],
      tips: [
        'Use examples from your parish’s Sunday Mass.',
        'Encourage children to think of peaceful Sunday habits.',
        'Invite them to share something they enjoy doing with family on Sundays.',
        'Keep the tone joyful — Sunday is a celebration!'
      ]
    }
  }
];

export const lessonPlans_grade7: LessonPlan[] = [
  // 1 — Identity & Calling
  {
    id: 'created-for-purpose',
    title: 'Created for Purpose',
    audience: 'Grade 7',
    duration: '60 min',
    scripture: 'Jeremiah 1:5',
    summary: 'Discover that God created each person intentionally and calls us to meaningful lives.',
    doctrine: {
      label: 'Called by God',
      passage: 'Jeremiah 1:5',
      body: '“Before I formed you in the womb I knew you.” God created each of us with intention and purpose.'
    },
    moral: {
      label: 'Courage to begin',
      body: 'Grade 7 students often face fear of failure, embarrassment, or not fitting in. God’s purpose gives courage.',
      activity: 'Write one fear that holds you back and one gift God has given you to face it.'
    },
    worship: {
      label: 'Here I am',
      body: 'Invite a quiet moment to say: “Speak, Lord, your servant is listening.”',
      prayer: 'Lord, help me trust your purpose for my life. Give me courage to begin. Amen.'
    },
    catechist: {
      talkingPoints: [
        'Begin with a prayer focusing on God’s intentional love.',
        'Highlight that God knows each student personally.',
        'Explain that purpose is not only future career — it is daily faithfulness.',
        'Ask: “Where do you feel God calling you to grow?”',
        'Connect calling to Confirmation: God strengthens what He began in Baptism.'
      ],
      tips: [
        'Affirm shy or quiet students — purpose is not about personality.',
        'Use relatable examples: school choices, friendships, online behavior.',
        'Encourage journaling; Grade 7 responds well to reflection.'
      ]
    }
  },

  // 2 — Discipleship & Daily Choices
  {
    id: 'following-jesus-today',
    title: 'Following Jesus Today',
    audience: 'Grade 7',
    duration: '60 min',
    scripture: 'Luke 9:23',
    summary: 'Understand what discipleship means in daily life and how choices shape our path.',
    doctrine: {
      label: 'Take up your cross',
      passage: 'Luke 9:23',
      body: '“If any want to become my followers, let them deny themselves and take up their cross daily.” Discipleship is a daily choice.'
    },
    moral: {
      label: 'Real choices',
      body: 'Grade 7 students face peer pressure, popularity struggles, and online influence. Following Jesus often means choosing what is right over what is easy.',
      activity: 'Identify one situation where following Jesus might cost something—and write how you could respond.'
    },
    worship: {
      label: 'Lead me',
      body: 'Play a reflective worship song about following Christ.',
      prayer: 'Jesus, guide my steps and help me choose your way each day. Amen.'
    },
    catechist: {
      talkingPoints: [
        'Begin with a prayer asking Jesus to guide their choices.',
        'Explain “cross” as responsibility, not suffering.',
        'Ask: “What makes following Jesus hard today?”',
        'Connect discipleship to Confirmation: strengthened to choose Christ.',
        'Highlight small daily choices: kindness, honesty, courage.'
      ],
      tips: [
        'Use real examples: group chats, gossip, exclusion.',
        'Avoid moralizing; invite honest discussion.',
        'Encourage students to identify one “discipleship choice” for the week.'
      ]
    }
  },

  // 3 — Witness & Light
  {
    id: 'the-light-we-carry',
    title: 'The Light We Carry',
    audience: 'Grade 7',
    duration: '60 min',
    scripture: 'Matthew 5:14',
    summary: 'Learn what it means to live visibly and generously as people shaped by Christ’s light.',
    doctrine: {
      label: 'A city on a hill',
      passage: 'Matthew 5:14',
      body: '“You are the light of the world.” Jesus calls us to make His goodness visible through our lives.'
    },
    moral: {
      label: 'Small acts, real witness',
      body: 'Faith becomes credible when it becomes concrete — including others, speaking truth kindly, serving quietly.',
      activity: 'Choose one “light practice” for the week: include, speak truth kindly, serve unseen, or repair a relationship.'
    },
    worship: {
      label: 'Let it shine',
      body: 'Place a candle at the center and invite silent reflection.',
      prayer: 'God of light, make my life a reflection of your mercy. Amen.'
    },
    catechist: {
      talkingPoints: [
        'Begin with a prayer asking God to shine His light.',
        'Explain that light is influence — how we affect others.',
        'Ask: “Where do you see darkness in school or online?”',
        'Connect light to Confirmation: strengthened to witness.',
        'Highlight that small acts matter.'
      ],
      tips: [
        'Use a candle or phone flashlight as a symbol.',
        'Encourage students to share examples of “light moments.”',
        'Avoid shaming; focus on hope and courage.'
      ]
    }
  },

  // 4 — Staying Connected to Christ
  {
    id: 'jesus-the-true-vine',
    title: 'Jesus the True Vine',
    audience: 'Grade 7',
    duration: '60 min',
    scripture: 'John 15:5',
    summary: 'Learn how staying connected to Jesus shapes our character and choices.',
    doctrine: {
      label: 'Remain in me',
      passage: 'John 15:5',
      body: '“Apart from me you can do nothing.” Our strength and fruitfulness come from staying connected to Jesus.'
    },
    moral: {
      label: 'Healthy connections',
      body: 'Grade 7 students navigate friendships, influences, and habits. Some connections help growth; others drain it.',
      activity: 'Draw a “vine of influences” showing what helps you grow and what drains you.'
    },
    worship: {
      label: 'Stay rooted',
      body: 'Invite students to silently name one area where they need Jesus’ strength.',
      prayer: 'Jesus, keep me rooted in you. Help me grow in love and wisdom. Amen.'
    },
    catechist: {
      talkingPoints: [
        'Begin with a prayer asking Jesus to strengthen their hearts.',
        'Explain “vine” as connection — who shapes you?',
        'Ask: “What influences help you grow?”',
        'Connect staying rooted to Confirmation: deeper strength.',
        'Highlight healthy habits: prayer, Scripture, good friendships.'
      ],
      tips: [
        'Use a plant or vine image.',
        'Encourage honest reflection about harmful influences.',
        'Affirm positive habits students already practice.'
      ]
    }
  },

  // 5 — Who Is the Holy Spirit?
  {
    id: 'who-is-the-holy-spirit',
    title: 'Who Is the Holy Spirit?',
    audience: 'Grade 7',
    duration: '60 min',
    scripture: 'John 14:16–17',
    summary: 'Meet the Holy Spirit, the Advocate who strengthens, guides, and dwells within us.',
    doctrine: {
      label: 'The Advocate',
      passage: 'John 14:16–17',
      body: '“He will give you another Advocate.” The Holy Spirit is the third Person of the Trinity who dwells within us.'
    },
    moral: {
      label: 'Listening to the Spirit',
      body: 'The Spirit nudges us toward goodness, courage, and truth — especially in confusing moments.',
      activity: 'Write one area where you need the Spirit’s guidance this week.'
    },
    worship: {
      label: 'Come, Holy Spirit',
      body: 'Invite a quiet moment asking the Spirit to fill their hearts.',
      prayer: 'Come, Holy Spirit. Be my strength, my guide, and my helper. Amen.'
    },
    catechist: {
      talkingPoints: [
        'Begin with “Come, Holy Spirit.”',
        'Explain the Spirit simply: God’s presence within us.',
        'Ask: “When do you need guidance?”',
        'Connect the Spirit to Confirmation: sealed with the Spirit.',
        'Highlight the Spirit’s roles: guide, comforter, strength.'
      ],
      tips: [
        'Use gentle language — the Spirit is relational.',
        'Encourage students to notice “nudges” toward good.',
        'Avoid abstract theology; keep it practical.'
      ]
    }
  },

  // 6 — Pentecost & Mission
  {
    id: 'pentecost-and-mission',
    title: 'Pentecost and the Birth of the Church',
    audience: 'Grade 7',
    duration: '60 min',
    scripture: 'Acts 2:4',
    summary: 'Learn how the Holy Spirit empowered the apostles and continues to empower us today.',
    doctrine: {
      label: 'Filled with the Spirit',
      passage: 'Acts 2:4',
      body: '“All of them were filled with the Holy Spirit.” Pentecost gave the apostles courage and mission.'
    },
    moral: {
      label: 'Courage to witness',
      body: 'Grade 7 students learn that boldness can be quiet — standing up for others, resisting gossip, choosing kindness.',
      activity: 'Write one way you can be a witness for Christ this week.'
    },
    worship: {
      label: 'Spirit of courage',
      body: 'Invite students to pray for boldness like the apostles.',
      prayer: 'Holy Spirit, give me courage to live my faith with joy. Amen.'
    },
    catechist: {
      talkingPoints: [
        'Begin with a prayer for courage.',
        'Explain Pentecost as the “birthday of the Church.”',
        'Ask: “Where do you need courage?”',
        'Connect Pentecost to Confirmation: same Spirit, same mission.',
        'Highlight that witness can be gentle but strong.'
      ],
      tips: [
        'Use storytelling — Pentecost is dramatic and engaging.',
        'Encourage students to identify small acts of courage.',
        'Affirm every attempt at witness.'
      ]
    }
  },

  // 7 — Gifts of the Spirit
  {
    id: 'gifts-of-the-holy-spirit',
    title: 'The Gifts of the Holy Spirit',
    audience: 'Grade 7',
    duration: '60 min',
    scripture: 'Isaiah 11:2',
    summary: 'Explore the seven gifts of the Holy Spirit and how they help us grow in maturity and holiness.',
    doctrine: {
      label: 'Seven gifts',
      passage: 'Isaiah 11:2',
      body: '“The spirit of wisdom and understanding…” The Spirit strengthens us with seven gifts for mature discipleship.'
    },
    moral: {
      label: 'Growing in virtue',
      body: 'Grade 7 students learn real-life examples of each gift — wisdom in choices, fortitude in challenges, counsel in friendships.',
      activity: 'Choose one gift you want to grow in and write why.'
    },
    worship: {
      label: 'Spirit of wisdom',
      body: 'Invite students to ask for one gift personally.',
      prayer: 'Holy Spirit, strengthen me with your gifts so I may follow Christ faithfully. Amen.'
    },
    catechist: {
      talkingPoints: [
        'Begin with a prayer asking for wisdom.',
        'Explain each gift with simple examples.',
        'Ask: “Which gift do you need most right now?”',
        'Connect gifts to Confirmation: strengthened for mission.',
        'Highlight that gifts grow through practice.'
      ],
      tips: [
        'Use relatable examples: school stress, friendships, decisions.',
        'Encourage students to choose one gift to focus on.',
        'Avoid overwhelming them — keep explanations simple.'
      ]
    }
  },

  // 8 — Fruits of the Spirit
  {
    id: 'fruits-of-the-spirit',
    title: 'The Fruits of the Holy Spirit',
    audience: 'Grade 7',
    duration: '60 min',
    scripture: 'Galatians 5:22–23',
    summary: 'Learn how the Spirit produces visible goodness in our lives.',
    doctrine: {
      label: 'Spirit at work',
      passage: 'Galatians 5:22–23',
      body: '“The fruit of the Spirit is love, joy, peace…” These fruits show the Spirit’s presence in us.'
    },
    moral: {
      label: 'Visible faith',
      body: 'Grade 7 students learn that fruits appear in real actions — patience with siblings, kindness online, self-control in anger.',
      activity: 'Choose one fruit you want to grow in and write a real-life example.'
    },
    worship: {
      label: 'Grow in me',
      body: 'Invite students to pray for one fruit to grow in their hearts.',
      prayer: 'Holy Spirit, help your fruits grow in my life. Amen.'
    },
    catechist: {
      talkingPoints: [
        'Begin with a prayer asking the Spirit to grow goodness.',
        'Explain fruits as results — what the Spirit produces.',
        'Ask: “Which fruit is hardest for you?”',
        'Connect fruits to Confirmation: strengthened to bear fruit.',
        'Highlight real-life examples.'
      ],
      tips: [
        'Use concrete examples — avoid abstract language.',
        'Encourage students to share small victories.',
        'Affirm growth, not perfection.'
      ]
    }
  },

  // 9 — The Rite of Confirmation
  {
    id: 'the-rite-of-confirmation',
    title: 'The Rite of Confirmation',
    audience: 'Grade 7',
    duration: '60 min',
    scripture: 'Acts 8:17',
    summary: 'Learn what happens during Confirmation and how the sacrament completes Baptismal grace.',
    doctrine: {
      label: 'Sealed with the Spirit',
      passage: 'Acts 8:17',
      body: '“They laid hands on them, and they received the Holy Spirit.” Confirmation strengthens us with the fullness of the Spirit.'
    },
    moral: {
      label: 'Ready to respond',
      body: 'Grade 7 students prepare by choosing a saint, choosing a sponsor, and opening their hearts.',
      activity: 'Write the name of a saint you admire and one reason you might choose them.'
    },
    worship: {
      label: 'Prepare my heart',
      body: 'Invite a moment of silence asking God for readiness.',
      prayer: 'Holy Spirit, prepare my heart to be sealed with your grace. Amen.'
    },
    catechist: {
      talkingPoints: [
        'Begin with a prayer for readiness.',
        'Explain the symbols: chrism, laying on of hands.',
        'Ask: “What do you hope for in Confirmation?”',
        'Connect the rite to Baptism: completion of grace.',
        'Highlight the role of sponsor and saint.'
      ],
      tips: [
        'Use visuals: chrism, bishop’s role.',
        'Encourage thoughtful saint choices.',
        'Keep tone reverent and joyful.'
      ]
    }
  },

  // 10 — The Church as Community
  {
    id: 'the-church-and-community',
    title: 'The Church and Community',
    audience: 'Grade 7',
    duration: '60 min',
    scripture: '1 Corinthians 12:12',
    summary: 'Understand the Church as a living body where each person has a role.',
    doctrine: {
      label: 'One body',
      passage: '1 Corinthians 12:12',
      body: '“The body is one and has many members.” The Church is a community with different gifts but one mission.'
    },
    moral: {
      label: 'Your part matters',
      body: 'Grade 7 students learn teamwork, service, and belonging — each person contributes.',
      activity: 'Identify one gift you bring to your parish or school community.'
    },
    worship: {
      label: 'Unity',
      body: 'Pray for unity in the Church and in their families.',
      prayer: 'Holy Spirit, help us work together as one body in Christ. Amen.'
    },
    catechist: {
      talkingPoints: [
        'Begin with a prayer for unity.',
        'Explain the Church as a living body.',
        'Ask: “What gift do you bring?”',
        'Connect community to Confirmation: strengthened to serve.',
        'Highlight diversity of gifts.'
      ],
      tips: [
        'Use examples: choir, altar servers, kindness, leadership.',
        'Encourage students to see their value.',
        'Affirm every contribution.'
      ]
    }
  },

  // 11 — Mission & Service
  {
    id: 'mission-and-service',
    title: 'Mission and Service',
    audience: 'Grade 7',
    duration: '60 min',
    scripture: 'Matthew 28:19',
    summary: 'Learn how every Christian is called to serve, witness, and bring hope to others.',
    doctrine: {
      label: 'Go and make disciples',
      passage: 'Matthew 28:19',
      body: '“Go therefore and make disciples.” Jesus sends us to share the Gospel and serve others.'
    },
    moral: {
      label: 'Serve with purpose',
      body: 'Grade 7 students learn real ways to serve — helping at home, supporting classmates, volunteering, and choosing kindness even when unnoticed.',
      activity: 'Choose one act of service to do this week and write how you will carry it out.'
    },
    worship: {
      label: 'Send me',
      body: 'Invite students to pray for courage to serve where they are needed.',
      prayer: 'Lord, send me where I am needed. Help me bring your love to others. Amen.'
    },
    catechist: {
      talkingPoints: [
        'Begin with a prayer asking God to send them as His helpers.',
        'Explain that mission is not only for priests or missionaries — every baptized person is sent.',
        'Highlight that service begins with small acts: helping at home, encouraging a friend, standing up for someone.',
        'Ask: “Where do you see a need in your school or home?”',
        'Connect mission to Confirmation: strengthened by the Spirit to serve boldly.',
        'Explain that service is love in action — not just words.'
      ],
      tips: [
        'Use real examples from parish life or school service projects.',
        'Encourage students to choose realistic, simple acts of service.',
        'Affirm every effort — even small acts matter.',
        'Invite students to share next week how their service went.'
      ]
    }
  },

  // 12 — Christian Moral Decision-Making
  {
    id: 'moral-decision-making',
    title: 'Christian Moral Decision-Making',
    audience: 'Grade 7',
    duration: '60 min',
    scripture: 'Psalm 25:4–5',
    summary: 'Learn how the Holy Spirit guides our conscience and helps us make wise, loving decisions.',
    doctrine: {
      label: 'Teach me your ways',
      passage: 'Psalm 25:4–5',
      body: '“Make me to know your ways, O Lord; teach me your paths.” God guides our conscience through Scripture, prayer, and the Holy Spirit.'
    },
    moral: {
      label: 'Real-life choices',
      body: 'Grade 7 students face choices about honesty, friendships, online behavior, and peer pressure. The Spirit helps us choose what leads to love and truth.',
      activity: 'Write about a recent decision you made and how you think the Holy Spirit might guide you next time.'
    },
    worship: {
      label: 'Guide my heart',
      body: 'Invite students to place their hands over their hearts and ask God for wisdom.',
      prayer: 'Holy Spirit, guide my conscience. Help me choose what is good, loving, and true. Amen.'
    },
    catechist: {
      talkingPoints: [
        'Begin with a prayer asking God to teach His ways.',
        'Explain conscience as the inner voice formed by God, Scripture, and the Spirit.',
        'Ask: “What kinds of decisions feel hard at your age?”',
        'Highlight that moral decisions are not about fear — they are about choosing love.',
        'Connect moral decision-making to Confirmation: strengthened to choose what is right.',
        'Explain that mistakes happen; God guides us back with mercy.'
      ],
      tips: [
        'Use relatable examples: group chats, honesty with parents, standing up for someone.',
        'Avoid shaming; focus on growth and learning.',
        'Encourage students to pause and pray before big decisions.',
        'Invite them to reflect on how choices affect others.'
      ]
    }
  },

  // 13 — Living as Confirmed Disciples
  {
    id: 'life-after-confirmation',
    title: 'Living as Confirmed Disciples',
    audience: 'Grade 7',
    duration: '60 min',
    scripture: 'Galatians 5:25',
    summary: 'Understand how Confirmation strengthens us to live boldly as disciples in everyday life.',
    doctrine: {
      label: 'Walk by the Spirit',
      passage: 'Galatians 5:25',
      body: '“If we live by the Spirit, let us also walk by the Spirit.” Confirmation strengthens us to live our faith with courage and joy.'
    },
    moral: {
      label: 'Daily discipleship',
      body: 'Grade 7 students learn that being confirmed means living differently — choosing kindness, resisting negativity, serving others, and staying connected to God.',
      activity: 'Write a “Confirmed Disciple Plan” with three ways you want to live your faith after Confirmation.'
    },
    worship: {
      label: 'Spirit-led life',
      body: 'Invite students to pray for strength to live as Spirit-filled disciples.',
      prayer: 'Holy Spirit, help me walk with you every day. Strengthen me to live my faith with courage and joy. Amen.'
    },
    catechist: {
      talkingPoints: [
        'Begin with a prayer asking the Spirit to lead their lives.',
        'Explain that Confirmation is not graduation — it is empowerment.',
        'Ask: “What kind of person do you want to become with the Spirit’s help?”',
        'Highlight that discipleship is lived in school, home, friendships, and online.',
        'Connect this lesson to all previous ones: gifts, fruits, mission, courage.',
        'Explain that the Spirit stays with them always — they are never alone.'
      ],
      tips: [
        'Encourage students to set realistic discipleship goals.',
        'Affirm their strengths and potential.',
        'Invite them to share their “Confirmed Disciple Plan” with their sponsor.',
        'End with a blessing or laying on of hands gesture (without sacramental form).'
      ]
    }
  }
];

export const lessonPlans_adult: LessonPlan[] = [
  // 1 — The Call to Discipleship
  {
    id: 'the-call-to-discipleship',
    title: 'The Call to Discipleship',
    audience: 'Adults',
    duration: '75 min',
    scripture: 'Mark 1:17',
    summary: 'Reflect on Jesus’ invitation to follow Him with intention, maturity, and trust.',
    doctrine: {
      label: 'Come, follow me',
      passage: 'Mark 1:17',
      body: '“Follow me, and I will make you fishers of men.” Discipleship begins with a call and a response that reshapes priorities.'
    },
    moral: {
      label: 'A deliberate yes',
      body: 'Adult life—work, family, responsibilities—often competes with spiritual commitments. Discipleship requires intentional alignment.',
      activity: 'Write one area of life where Christ is inviting deeper alignment.'
    },
    worship: {
      label: 'Here I am, Lord',
      body: 'Sit in silence and repeat: “Speak, Lord, your servant is listening.”',
      prayer: 'Lord, strengthen my desire to follow you with maturity and courage. Amen.'
    },
    catechist: {
      talkingPoints: [
        'Begin with a quiet prayer inviting openness to God’s call.',
        'Highlight that discipleship is not accidental — it is chosen.',
        'Ask: “Where is Jesus calling you to grow or change?”',
        'Explain that adult discipleship often means reordering priorities.',
        'Connect discipleship to ongoing conversion and mission.'
      ],
      tips: [
        'Encourage honest reflection without pressure.',
        'Use real adult-life examples: career choices, parenting, time management.',
        'Invite sharing but allow silence for those who prefer private reflection.'
      ]
    }
  },

  // 2 — The Journey of Conversion
  {
    id: 'the-journey-of-conversion',
    title: 'The Journey of Conversion',
    audience: 'Adults',
    duration: '75 min',
    scripture: 'Ezekiel 36:26',
    summary: 'Understand conversion as a lifelong transformation of heart and mind.',
    doctrine: {
      label: 'A new heart',
      passage: 'Ezekiel 36:26',
      body: '“I will give you a new heart and a new spirit.” Conversion is continual turning toward God through grace.'
    },
    moral: {
      label: 'Daily turning',
      body: 'Adults face habits, attitudes, and patterns that need renewal—impatience, resentment, busyness, distraction.',
      activity: 'Identify one habit to surrender and one virtue to cultivate.'
    },
    worship: {
      label: 'Renew me',
      body: 'Invite a quiet prayer asking God to soften hardened places within.',
      prayer: 'Lord, give me a new heart and a new spirit. Amen.'
    },
    catechist: {
      talkingPoints: [
        'Begin with a prayer for inner renewal.',
        'Explain conversion as lifelong, not one-time.',
        'Ask: “What areas of life feel resistant to change?”',
        'Highlight grace as the engine of conversion, not willpower.',
        'Connect conversion to sacramental life, especially Reconciliation.'
      ],
      tips: [
        'Avoid guilt-based language; emphasize hope.',
        'Encourage gentle self-examination.',
        'Invite adults to see conversion as growth, not perfection.'
      ]
    }
  },

  // 3 — The Kingdom of God
  {
    id: 'the-kingdom-of-god',
    title: 'The Kingdom of God',
    audience: 'Adults',
    duration: '75 min',
    scripture: 'Luke 17:21',
    summary: 'Explore the meaning of the kingdom and how it reshapes our worldview.',
    doctrine: {
      label: 'Within and among us',
      passage: 'Luke 17:21',
      body: '“The kingdom of God is among you.” The kingdom is present wherever Christ reigns in hearts and communities.'
    },
    moral: {
      label: 'Kingdom vision',
      body: 'Kingdom values challenge consumerism, division, and self-centeredness. Adults learn to see life through Christ’s lens.',
      activity: 'Write one concrete way to make the kingdom visible in your home or workplace.'
    },
    worship: {
      label: 'Your kingdom come',
      body: 'Pray slowly through the petition “Thy kingdom come.”',
      prayer: 'Lord, establish your kingdom in my life and in the world. Amen.'
    },
    catechist: {
      talkingPoints: [
        'Begin with a prayer for God’s reign in our hearts.',
        'Explain the kingdom as God’s active presence, not a distant future.',
        'Ask: “Where do you see signs of the kingdom today?”',
        'Highlight kingdom values: mercy, justice, humility, peace.',
        'Connect kingdom living to evangelization and service.'
      ],
      tips: [
        'Use real examples: workplace ethics, family dynamics, community involvement.',
        'Encourage adults to identify “kingdom moments” in daily life.',
        'Avoid abstract theology; keep it practical.'
      ]
    }
  },

  // 4 — The Person of Christ
  {
    id: 'the-person-of-christ',
    title: 'The Person of Christ',
    audience: 'Adults',
    duration: '75 min',
    scripture: 'John 1:14',
    summary: 'Deepen understanding of Jesus as true God and true man, the center of Christian faith.',
    doctrine: {
      label: 'The Word made flesh',
      passage: 'John 1:14',
      body: '“The Word became flesh and lived among us.” Jesus reveals God’s heart in human form.'
    },
    moral: {
      label: 'Christ at the center',
      body: 'Adult responsibilities often distract from Christ-centered living. Faith becomes intentional when Christ is placed at the center.',
      activity: 'Name one way to place Christ more intentionally at the center of your week.'
    },
    worship: {
      label: 'Behold the Word',
      body: 'Read John 1:14 slowly and reflect on the mystery of the Incarnation.',
      prayer: 'Jesus, draw me into deeper knowledge of who you are. Amen.'
    },
    catechist: {
      talkingPoints: [
        'Begin with a prayer contemplating Christ’s presence.',
        'Explain Jesus’ divinity and humanity simply and clearly.',
        'Ask: “Who is Jesus to you today?”',
        'Highlight Christ as the center of prayer, morality, and mission.',
        'Connect Christology to Eucharist and Scripture.'
      ],
      tips: [
        'Use personal testimony if appropriate.',
        'Encourage adults to reflect on their relationship with Jesus.',
        'Avoid overly academic explanations; keep it relational.'
      ]
    }
  },

  // 5 — The Sacraments of the Church
  {
    id: 'the-sacraments-of-the-church',
    title: 'The Sacraments of the Church',
    audience: 'Adults',
    duration: '75 min',
    scripture: 'Acts 2:42',
    summary: 'Explore how the sacraments nourish, heal, and strengthen the Christian life.',
    doctrine: {
      label: 'Signs of grace',
      passage: 'Acts 2:42',
      body: '“They devoted themselves… to the breaking of bread.” The sacraments are visible signs of invisible grace.'
    },
    moral: {
      label: 'Living sacramentally',
      body: 'Sacramental life shapes decisions, relationships, and priorities—gratitude, forgiveness, commitment.',
      activity: 'Reflect on one sacrament that has deeply impacted your life.'
    },
    worship: {
      label: 'Grace received',
      body: 'Offer a prayer of thanksgiving for the sacraments.',
      prayer: 'Lord, thank you for the grace you give through your sacraments. Amen.'
    },
    catechist: {
      talkingPoints: [
        'Begin with a prayer thanking God for sacramental grace.',
        'Explain sacraments as encounters with Christ.',
        'Ask: “Which sacrament has shaped your life most?”',
        'Highlight how sacraments accompany every stage of life.',
        'Connect sacraments to community and mission.'
      ],
      tips: [
        'Use simple explanations of each sacrament.',
        'Encourage sharing of sacramental experiences.',
        'Avoid technical theological language.'
      ]
    }
  },

  // 6 — The Eucharist
  {
    id: 'the-eucharist',
    title: 'The Eucharist',
    audience: 'Adults',
    duration: '75 min',
    scripture: 'John 6:51',
    summary: 'Deepen understanding of the Eucharist as the real presence of Christ and the heart of Christian worship.',
    doctrine: {
      label: 'My flesh for the life of the world',
      passage: 'John 6:51',
      body: '“I am the living bread.” In the Eucharist, Jesus gives Himself fully—sacrifice, meal, and presence.'
    },
    moral: {
      label: 'Eucharistic living',
      body: 'Receiving Christ shapes daily actions—gratitude, unity, service, forgiveness.',
      activity: 'Write one way to live “Eucharistically” this week.'
    },
    worship: {
      label: 'Bread of life',
      body: 'Spend a moment in silent adoration or quiet reflection.',
      prayer: 'Jesus, Bread of Life, nourish my soul and strengthen my love. Amen.'
    },
    catechist: {
      talkingPoints: [
        'Begin with a moment of silence before Christ.',
        'Explain Eucharist as presence, sacrifice, and communion.',
        'Ask: “How does receiving Christ change your week?”',
        'Highlight Eucharist as the center of Christian life.',
        'Connect Eucharist to mission and unity.'
      ],
      tips: [
        'Encourage reverence and gratitude.',
        'Invite adults to share Eucharistic experiences.',
        'Use gentle, contemplative tone.'
      ]
    }
  },

  // 7 — The Holy Spirit
  {
    id: 'the-holy-spirit',
    title: 'The Holy Spirit',
    audience: 'Adults',
    duration: '75 min',
    scripture: 'Galatians 5:22–23',
    summary: 'Reflect on the Spirit’s role in guiding, empowering, and sanctifying believers.',
    doctrine: {
      label: 'Fruit of the Spirit',
      passage: 'Galatians 5:22–23',
      body: '“The fruit of the Spirit is love, joy, peace…” The Spirit produces virtue and guides believers.'
    },
    moral: {
      label: 'Walk by the Spirit',
      body: 'Adults learn to discern the Spirit’s guidance amid noise, stress, and busyness.',
      activity: 'Identify one fruit of the Spirit you want to grow in.'
    },
    worship: {
      label: 'Come, Holy Spirit',
      body: 'Invite a simple invocation of the Spirit.',
      prayer: 'Holy Spirit, guide my thoughts, words, and actions. Amen.'
    },
    catechist: {
      talkingPoints: [
        'Begin with “Come, Holy Spirit.”',
        'Explain the Spirit’s role in daily life.',
        'Ask: “Where do you need the Spirit’s help?”',
        'Highlight fruits as signs of spiritual maturity.',
        'Connect Spirit-led living to mission.'
      ],
      tips: [
        'Encourage practical examples of Spirit guidance.',
        'Avoid abstract explanations.',
        'Invite adults to pray for one fruit intentionally.'
      ]
    }
  },

  // 8 — Christian Morality
  {
    id: 'christian-morality',
    title: 'Christian Morality',
    audience: 'Adults',
    duration: '75 min',
    scripture: 'Romans 12:2',
    summary: 'Explore how moral life flows from relationship with Christ, not mere rule‑keeping.',
    doctrine: {
      label: 'Renew your mind',
      passage: 'Romans 12:2',
      body: '“Be transformed by the renewing of your mind.” Christian morality is transformation, not legalism.'
    },
    moral: {
      label: 'Mature choices',
      body: 'Adults face complex moral decisions—workplace ethics, family responsibilities, relationships. Faith shapes conscience.',
      activity: 'Reflect on one moral decision you face and how faith shapes it.'
    },
    worship: {
      label: 'Living sacrifice',
      body: 'Offer a prayer dedicating your daily life to God.',
      prayer: 'Lord, transform my mind and help me choose what is good and true. Amen.'
    },
    catechist: {
      talkingPoints: [
        'Begin with a prayer for wisdom.',
        'Explain morality as relationship-driven, not rule-driven.',
        'Ask: “What moral challenges do you face today?”',
        'Highlight conscience formation through Scripture and prayer.',
        'Connect morality to discipleship and witness.'
      ],
      tips: [
        'Use real adult-life examples.',
        'Avoid judgmental tone; emphasize growth.',
        'Encourage reflection and discussion.'
      ]
    }
  },

  // 9 — The Church Community
  {
    id: 'the-church-community',
    title: 'The Church Community',
    audience: 'Adults',
    duration: '75 min',
    scripture: '1 Peter 2:5',
    summary: 'Understand the Church as a spiritual home where believers grow, serve, and worship together.',
    doctrine: {
      label: 'Living stones',
      passage: '1 Peter 2:5',
      body: '“You are living stones.” The Church is a spiritual house built of believers with dignity and purpose.'
    },
    moral: {
      label: 'Belonging and service',
      body: 'Adults contribute to parish life through gifts, time, presence, and leadership.',
      activity: 'Identify one way you can strengthen your parish community.'
    },
    worship: {
      label: 'Chosen people',
      body: 'Pray for unity and renewal in the Church.',
      prayer: 'Lord, make our community a place of welcome, holiness, and mission. Amen.'
    },
    catechist: {
      talkingPoints: [
        'Begin with a prayer for unity and belonging.',
        'Explain the Church as a living community, not just an institution.',
        'Ask: “Where do you feel called to serve?”',
        'Highlight diversity of gifts and roles.',
        'Connect community to mission and evangelization.'
      ],
      tips: [
        'Encourage adults to identify their gifts.',
        'Use examples from parish ministries.',
        'Affirm every contribution, big or small.'
      ]
    }
  },

  // 10 — Mission and Evangelization
  {
    id: 'mission-and-evangelization',
    title: 'Mission and Evangelization',
    audience: 'Adults',
    duration: '75 min',
    scripture: 'Matthew 28:19–20',
    summary: 'Reflect on the call to share the Gospel through witness, compassion, and courage.',
    doctrine: {
      label: 'Go and proclaim',
      passage: 'Matthew 28:19–20',
      body: '“Go… make disciples.” Evangelization is joyful sharing of Christ’s love through word and witness.'
    },
    moral: {
      label: 'Witness in daily life',
      body: 'Adults evangelize through integrity, compassion, hospitality, and conversation.',
      activity: 'Write one person you feel called to pray for or accompany spiritually.'
    },
    worship: {
      label: 'Send me',
      body: 'Invite a moment of prayer asking for courage to witness.',
      prayer: 'Lord, send me where I am needed. Help me share your love with others. Amen.'
    },
    catechist: {
      talkingPoints: [
        'Begin with a prayer asking God to send us as witnesses.',
        'Explain evangelization as relational, not confrontational.',
        'Ask: “Who has God placed in your life to love and accompany?”',
        'Highlight witness through kindness, integrity, and presence.',
        'Connect evangelization to the mission of the Church.'
      ],
      tips: [
        'Encourage gentle, natural evangelization.',
        'Avoid pressure; emphasize love and accompaniment.',
        'Invite adults to pray for someone specific.'
      ]
    }
  }
];


export const lessonPlans: LessonPlan[] = [
  ...lessonPlans_grade3,
  ...lessonPlans_grade7,
  ...lessonPlans_adult
];
