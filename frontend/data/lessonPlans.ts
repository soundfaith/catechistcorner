export type Audience = 'Grade 3' | 'Grade 7' | 'Adults'

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
}

export const lessonPlans_grade3: LessonPlan[] = [
  {
    id: 'god-calls-us-by-name',
    title: 'God Calls Us by Name',
    audience: 'Grade 3',
    duration: '45 min',
    scripture: 'Isaiah 43:1',
    summary: 'Learn that God knows each of us personally and invites us into a loving friendship.',
    doctrine: {
      label: 'Known and loved',
      passage: 'Isaiah 43:1',
      body: 'God calls each child by name and promises, “You are mine.” Our relationship with Him begins with His loving initiative.'
    },
    moral: {
      label: 'You matter',
      body: 'Help children see that their name and life have meaning because God knows them.',
      activity: 'Write your name on a card and decorate it. Add one word that describes a gift God has given you.'
    },
    worship: {
      label: 'Called by God',
      body: 'Sing a simple song about God’s love, or hum quietly together.',
      prayer: 'Lord, thank you for calling me by name. Help me hear your voice and follow you. Amen.'
    }
  },

  {
    id: 'meeting-jesus-in-the-gospels',
    title: 'Meeting Jesus in the Gospels',
    audience: 'Grade 3',
    duration: '45 min',
    scripture: 'Mark 10:13–16',
    summary: 'Discover that Jesus welcomes children and wants them close to Him.',
    doctrine: {
      label: 'Jesus welcomes',
      passage: 'Mark 10:13–16',
      body: 'Jesus blesses children and shows that they belong in His kingdom. He wants them near His heart.'
    },
    moral: {
      label: 'Come close to Jesus',
      body: 'Talk about ways children can come close to Jesus daily—kindness, prayer, listening.',
      activity: 'Draw Jesus with children around Him. Add yourself in the picture.'
    },
    worship: {
      label: 'Blessing',
      body: 'Invite a moment of quiet while imagining Jesus placing His hand on each child’s head.',
      prayer: 'Jesus, thank you for welcoming me. Help me stay close to you. Amen.'
    }
  },

  {
    id: 'jesus-is-my-friend',
    title: 'Jesus is my friend',
    audience: 'Grade 3',
    duration: '45 min',
    scripture: 'John 15:12–17',
    summary: 'Discover the joy of a friendship with Jesus that is close, steady, and full of love.',
    doctrine: {
      label: 'The greatest love',
      passage: 'John 15:12–17',
      body: 'Jesus calls us friends, not servants. He knows us fully and chooses to stay close. His friendship is a gift we can receive and share with others.'
    },
    moral: {
      label: 'Make room for friendship',
      body: 'A friend notices, listens, and makes space. Invite the children to think of someone who might feel left out this week.',
      activity: 'Draw a “friendship invitation” for someone who needs encouragement. Write one kind thing you can do together.'
    },
    worship: {
      label: 'Stay close',
      body: 'Sing “What a Friend We Have in Jesus” or a familiar song about God’s love.',
      prayer: 'Jesus, thank you for calling me your friend. Help me to notice others and love them as you love me. Amen.'
    }
  },

  {
    id: 'the-good-shepherd',
    title: 'The Good Shepherd',
    audience: 'Grade 3',
    duration: '45 min',
    scripture: 'John 10:11–14',
    summary: 'Understand that Jesus guides, protects, and leads us gently like a shepherd.',
    doctrine: {
      label: 'Jesus cares for us',
      passage: 'John 10:11–14',
      body: 'Jesus is the Good Shepherd who knows His sheep and lays down His life for them.'
    },
    moral: {
      label: 'Follow His voice',
      body: 'Talk about how we can listen to Jesus—through parents, teachers, Scripture, and prayer.',
      activity: 'Make a small paper sheep and write one way you can follow Jesus this week.'
    },
    worship: {
      label: 'Shepherd’s care',
      body: 'Play or sing a gentle song like “The Lord is My Shepherd.”',
      prayer: 'Jesus, guide me and keep me safe. Help me follow your voice. Amen.'
    }
  },

  {
    id: 'the-last-supper',
    title: 'The Last Supper',
    audience: 'Grade 3',
    duration: '45 min',
    scripture: 'Luke 22:14–20',
    summary: 'Learn how Jesus shared bread and wine and gave us the gift of the Eucharist.',
    doctrine: {
      label: 'Do this in memory of me',
      passage: 'Luke 22:14–20',
      body: 'At the Last Supper, Jesus gave His Body and Blood under the signs of bread and wine. This is the beginning of the Eucharist.'
    },
    moral: {
      label: 'Remember Jesus',
      body: 'Talk about how we remember Jesus by being thankful and loving others.',
      activity: 'Draw the Last Supper table and write one thing you are thankful for.'
    },
    worship: {
      label: 'Thanksgiving',
      body: 'Invite children to say one short thank‑you to Jesus.',
      prayer: 'Jesus, thank you for giving yourself to us. Help me remember your love. Amen.'
    }
  },

  {
    id: 'the-gift-of-the-eucharist',
    title: 'The Gift of the Eucharist',
    audience: 'Grade 3',
    duration: '45 min',
    scripture: 'John 6:35',
    summary: 'Discover that Jesus is truly present in the Eucharist and nourishes our hearts.',
    doctrine: {
      label: 'Bread of life',
      passage: 'John 6:35',
      body: 'Jesus says, “I am the bread of life.” In the Eucharist, He feeds our souls and strengthens us.'
    },
    moral: {
      label: 'Receive with love',
      body: 'Talk about preparing our hearts—being calm, respectful, and thankful.',
      activity: 'Practice a “quiet heart moment”: sit still, breathe, and think of Jesus loving you.'
    },
    worship: {
      label: 'Come to the table',
      body: 'Hum a simple Eucharistic hymn together.',
      prayer: 'Jesus, Bread of Life, prepare my heart to receive you with love. Amen.'
    }
  },

  {
    id: 'forgiveness-and-reconciliation',
    title: 'Forgiveness and Reconciliation',
    audience: 'Grade 3',
    duration: '45 min',
    scripture: 'Luke 15:11–32',
    summary: 'Learn that God forgives us joyfully and welcomes us back with love.',
    doctrine: {
      label: 'The Father’s mercy',
      passage: 'Luke 15:11–32',
      body: 'The Prodigal Son shows God’s heart: He runs to forgive us and restore us.'
    },
    moral: {
      label: 'Say sorry, forgive freely',
      body: 'Discuss simple ways to apologize and forgive at home and school.',
      activity: 'Write a short “I’m sorry” note to someone you hurt or a “I forgive you” note to someone who hurt you.'
    },
    worship: {
      label: 'Mercy',
      body: 'Invite a quiet moment to imagine God hugging us like the father in the story.',
      prayer: 'Father, thank you for forgiving me. Help me forgive others with love. Amen.'
    }
  },

  {
    id: 'living-like-jesus',
    title: 'Living Like Jesus',
    audience: 'Grade 3',
    duration: '45 min',
    scripture: 'John 13:34',
    summary: 'Learn that following Jesus means loving others as He loves us.',
    doctrine: {
      label: 'A new commandment',
      passage: 'John 13:34',
      body: 'Jesus teaches us to love one another as He has loved us—kindly, patiently, and generously.'
    },
    moral: {
      label: 'Love in action',
      body: 'Talk about small acts of kindness that show Jesus’ love.',
      activity: 'Choose one “love action” for the week: help, share, include, or encourage.'
    },
    worship: {
      label: 'Love like Jesus',
      body: 'Sing a simple song about love or kindness.',
      prayer: 'Jesus, help me love others the way you love me. Amen.'
    }
  },

  {
    id: 'the-mass',
    title: 'The Mass',
    audience: 'Grade 3',
    duration: '45 min',
    scripture: 'Acts 2:42',
    summary: 'Understand the Mass as a gathering of God’s family to listen, pray, and receive Jesus.',
    doctrine: {
      label: 'Gathered as one',
      passage: 'Acts 2:42',
      body: 'The early Christians gathered for teaching, fellowship, and the breaking of bread—just like we do at Mass.'
    },
    moral: {
      label: 'Participate with heart',
      body: 'Talk about listening, singing, praying, and being reverent.',
      activity: 'Create a “Mass participation card” with checkboxes: listen, pray, sing, be thankful.'
    },
    worship: {
      label: 'God’s family',
      body: 'Invite children to pray for their parish community.',
      prayer: 'Lord, thank you for our parish family. Help us worship you with joyful hearts. Amen.'
    }
  },

  {
    id: 'receiving-jesus',
    title: 'Receiving Jesus',
    audience: 'Grade 3',
    duration: '45 min',
    scripture: 'John 6:51',
    summary: 'Prepare children to receive Jesus in their First Communion with reverence and joy.',
    doctrine: {
      label: 'My heart is ready',
      passage: 'John 6:51',
      body: 'Jesus gives Himself to us in the Eucharist. Receiving Him is a moment of deep love and grace.'
    },
    moral: {
      label: 'A thankful heart',
      body: 'Talk about approaching Communion slowly, respectfully, and gratefully.',
      activity: 'Practice the gesture of receiving: hands open like a throne for Jesus.'
    },
    worship: {
      label: 'Come, Lord Jesus',
      body: 'Invite a quiet moment imagining Jesus entering their hearts.',
      prayer: 'Jesus, I am ready to receive you. Stay with me always. Amen.'
    }
  },
];

export const lessonPlans_grade7: LessonPlan[] = [
  {
    id: 'created-for-purpose',
    title: 'Created for Purpose',
    audience: 'Grade 7',
    duration: '60 min',
    scripture: 'Jeremiah 1:4–8',
    summary: 'Explore how God calls each person with intention and equips us to live courageously.',
    doctrine: {
      label: 'Called by God',
      passage: 'Jeremiah 1:4–8',
      body: 'God knows us before we are born and calls us to a life of meaning. His plans are rooted in love, not fear.'
    },
    moral: {
      label: 'Courage to begin',
      body: 'Discuss how fear often stops us from trying new things or living our values.',
      activity: 'Write one fear that holds you back and one gift God has given you to face it.'
    },
    worship: {
      label: 'Here I am',
      body: 'Invite a quiet moment to say “Speak, Lord, your servant is listening.”',
      prayer: 'Lord, help me trust your purpose for my life. Give me courage to begin. Amen.'
    }
  },

  {
    id: 'following-jesus-today',
    title: 'Following Jesus Today',
    audience: 'Grade 7',
    duration: '60 min',
    scripture: 'Luke 9:23–25',
    summary: 'Understand what discipleship means in daily life and how choices shape our path.',
    doctrine: {
      label: 'Take up your cross',
      passage: 'Luke 9:23–25',
      body: 'Jesus invites us to follow Him with commitment, even when it is difficult. Discipleship is a daily choice.'
    },
    moral: {
      label: 'Real choices',
      body: 'Talk about peer pressure, popularity, and choosing what is right over what is easy.',
      activity: 'Identify one situation where following Jesus might cost something—and write how you could respond.'
    },
    worship: {
      label: 'Lead me',
      body: 'Play a reflective worship song about following Christ.',
      prayer: 'Jesus, guide my steps and help me choose your way each day. Amen.'
    }
  },

  {
    id: 'the-light-we-carry',
    title: 'The light we carry',
    audience: 'Grade 7',
    duration: '60 min',
    scripture: 'Matthew 5:14–16',
    summary: 'Explore what it means to live visibly and generously as people shaped by Christ’s light.',
    doctrine: {
      label: 'A city on a hill',
      passage: 'Matthew 5:14–16',
      body: 'Jesus does not ask us to hide the light we have received. Our ordinary choices can make God’s goodness visible to a world that needs hope.'
    },
    moral: {
      label: 'Small acts, real witness',
      body: 'Faith becomes credible when it becomes concrete. Talk about the difference between being noticed and being a quiet source of courage.',
      activity: 'Choose one “light practice” for the week: include, speak truth kindly, serve unseen, or repair a relationship. Journal what happens.'
    },
    worship: {
      label: 'Let it shine',
      body: 'Play “The Summons” or invite a moment of silence with a candle at the center.',
      prayer: 'God of light, make my life a clear reflection of your mercy. Give me courage to bring hope into the places I enter. Amen.'
    }
  },

  {
    id: 'jesus-the-true-vine',
    title: 'Jesus the True Vine',
    audience: 'Grade 7',
    duration: '60 min',
    scripture: 'John 15:1–8',
    summary: 'Learn how staying connected to Jesus shapes our character and choices.',
    doctrine: {
      label: 'Remain in me',
      passage: 'John 15:1–8',
      body: 'Jesus teaches that our strength and fruitfulness come from staying connected to Him. Without Him, we lose direction.'
    },
    moral: {
      label: 'Healthy connections',
      body: 'Discuss friendships, influences, and habits that help or harm our growth.',
      activity: 'Draw a “vine of influences” showing what helps you grow and what drains you.'
    },
    worship: {
      label: 'Stay rooted',
      body: 'Invite students to silently name one area where they need Jesus’ strength.',
      prayer: 'Jesus, keep me rooted in you. Help me grow in love and wisdom. Amen.'
    }
  },

  {
    id: 'the-beatitudes',
    title: 'The Beatitudes',
    audience: 'Grade 7',
    duration: '60 min',
    scripture: 'Matthew 5:1–12',
    summary: 'Discover the surprising values of the kingdom and how they challenge our usual priorities.',
    doctrine: {
      label: 'Blessed are…',
      passage: 'Matthew 5:1–12',
      body: 'The Beatitudes reveal God’s upside‑down kingdom: humility, mercy, purity, and peace are the true path to happiness.'
    },
    moral: {
      label: 'Kingdom values',
      body: 'Discuss how the Beatitudes contrast with social media culture, competition, and comparison.',
      activity: 'Choose one Beatitude and write how it could change your week.'
    },
    worship: {
      label: 'Blessed',
      body: 'Read one Beatitude slowly and let students reflect on it.',
      prayer: 'Lord, shape my heart with the values of your kingdom. Amen.'
    }
  },

  {
    id: 'forgiveness-and-mercy',
    title: 'Forgiveness and Mercy',
    audience: 'Grade 7',
    duration: '60 min',
    scripture: 'Matthew 18:21–35',
    summary: 'Learn why forgiveness is essential for freedom and how mercy transforms relationships.',
    doctrine: {
      label: 'Seventy times seven',
      passage: 'Matthew 18:21–35',
      body: 'Jesus teaches that forgiveness is not optional. We forgive because we have been forgiven first.'
    },
    moral: {
      label: 'Letting go',
      body: 'Discuss grudges, conflict, and the difficulty of forgiving when hurt.',
      activity: 'Write a private “release note” about something you need to let go of. Tear it up afterward.'
    },
    worship: {
      label: 'Merciful heart',
      body: 'Invite a quiet moment asking God for the grace to forgive.',
      prayer: 'Lord, soften my heart and help me forgive as you forgive me. Amen.'
    }
  },

  {
    id: 'identity-in-christ',
    title: 'Identity in Christ',
    audience: 'Grade 7',
    duration: '60 min',
    scripture: 'Galatians 2:20',
    summary: 'Reflect on how faith shapes who we are and how we see ourselves.',
    doctrine: {
      label: 'A new life',
      passage: 'Galatians 2:20',
      body: 'Our identity is rooted in Christ. His life shapes our choices, relationships, and sense of worth.'
    },
    moral: {
      label: 'True self',
      body: 'Discuss insecurity, comparison, and the pressure to perform.',
      activity: 'Write three truths about who you are in Christ.'
    },
    worship: {
      label: 'Beloved',
      body: 'Invite students to repeat silently: “I am loved by God.”',
      prayer: 'Jesus, help me see myself the way you see me. Amen.'
    }
  },

  {
    id: 'the-power-of-prayer',
    title: 'The Power of Prayer',
    audience: 'Grade 7',
    duration: '60 min',
    scripture: 'Philippians 4:6–7',
    summary: 'Learn how prayer brings peace, clarity, and strength in daily challenges.',
    doctrine: {
      label: 'Do not be anxious',
      passage: 'Philippians 4:6–7',
      body: 'Prayer opens our hearts to God’s peace. It is a relationship, not a ritual.'
    },
    moral: {
      label: 'Talk to God',
      body: 'Discuss stress, anxiety, and how prayer can help.',
      activity: 'Write a short prayer about something weighing on your mind.'
    },
    worship: {
      label: 'Peace',
      body: 'Invite a breathing prayer: inhale “Come, Holy Spirit,” exhale “Give me peace.”',
      prayer: 'Lord, calm my heart and help me trust you. Amen.'
    }
  },

  {
    id: 'the-church-and-community',
    title: 'The Church and Community',
    audience: 'Grade 7',
    duration: '60 min',
    scripture: '1 Corinthians 12:12–27',
    summary: 'Understand the Church as a living body where each person has a role.',
    doctrine: {
      label: 'One body',
      passage: '1 Corinthians 12:12–27',
      body: 'The Church is a community of believers with different gifts but one mission. We belong to each other.'
    },
    moral: {
      label: 'Your part matters',
      body: 'Discuss teamwork, service, and how each person contributes.',
      activity: 'Identify one gift you bring to your parish or school community.'
    },
    worship: {
      label: 'Unity',
      body: 'Pray for unity in the Church and in their families.',
      prayer: 'Holy Spirit, help us work together as one body in Christ. Amen.'
    }
  },

  {
    id: 'mission-and-service',
    title: 'Mission and Service',
    audience: 'Grade 7',
    duration: '60 min',
    scripture: 'Matthew 28:18–20',
    summary: 'Learn how every Christian is called to serve, witness, and bring hope to others.',
    doctrine: {
      label: 'Go and make disciples',
      passage: 'Matthew 28:18–20',
      body: 'Jesus sends His followers to share the Gospel and serve others. Mission begins with small acts of love.'
    },
    moral: {
      label: 'Serve with purpose',
      body: 'Discuss real ways to serve at home, school, and parish.',
      activity: 'Choose one act of service to do this week and write how you will carry it out.'
    },
    worship: {
      label: 'Send me',
      body: 'Invite students to pray for courage to serve.',
      prayer: 'Lord, send me where I am needed. Help me bring your love to others. Amen.'
    }
  }
];

export const lessonPlans_adult: LessonPlan[] = [
  {
    id: 'the-call-to-discipleship',
    title: 'The Call to Discipleship',
    audience: 'Adults',
    duration: '75 min',
    scripture: 'Mark 1:16–20',
    summary: 'Reflect on Jesus’ invitation to follow Him with intention, maturity, and trust.',
    doctrine: {
      label: 'Come, follow me',
      passage: 'Mark 1:16–20',
      body: 'Discipleship begins with a call and a response. Jesus invites adults to reorder their priorities and walk in His way.'
    },
    moral: {
      label: 'A deliberate yes',
      body: 'Explore how adult life—work, family, commitments—shapes the way we respond to Christ’s call.',
      activity: 'Write one area of life where Christ is inviting deeper alignment.'
    },
    worship: {
      label: 'Here I am, Lord',
      body: 'Sit in silence and repeat, “Speak, Lord, your servant is listening.”',
      prayer: 'Lord, strengthen my desire to follow you with maturity and courage. Amen.'
    }
  },

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
      body: 'Conversion is not a single moment but a continual turning toward God. It is the work of grace within us.'
    },
    moral: {
      label: 'Daily turning',
      body: 'Discuss habits, attitudes, and patterns that need renewal.',
      activity: 'Identify one habit to surrender and one virtue to cultivate.'
    },
    worship: {
      label: 'Renew me',
      body: 'Invite a quiet prayer asking God to soften hardened places within.',
      prayer: 'Lord, give me a new heart and a new spirit. Amen.'
    }
  },

  {
    id: 'the-kingdom-of-god',
    title: 'The Kingdom of God',
    audience: 'Adults',
    duration: '75 min',
    scripture: 'Luke 17:20–21',
    summary: 'Explore the meaning of the kingdom and how it reshapes our worldview.',
    doctrine: {
      label: 'Within and among us',
      passage: 'Luke 17:20–21',
      body: 'The kingdom of God is not merely future—it is present wherever Christ reigns in hearts and communities.'
    },
    moral: {
      label: 'Kingdom vision',
      body: 'Reflect on how kingdom values challenge consumerism, division, and self‑centeredness.',
      activity: 'Write one concrete way to make the kingdom visible in your home or workplace.'
    },
    worship: {
      label: 'Your kingdom come',
      body: 'Pray slowly through the petition “Thy kingdom come” from the Lord’s Prayer.',
      prayer: 'Lord, establish your kingdom in my life and in the world. Amen.'
    }
  },

  {
    id: 'the-person-of-christ',
    title: 'The Person of Christ',
    audience: 'Adults',
    duration: '75 min',
    scripture: 'John 1:1–14',
    summary: 'Deepen understanding of Jesus as true God and true man, the center of Christian faith.',
    doctrine: {
      label: 'The Word made flesh',
      passage: 'John 1:1–14',
      body: 'Jesus is fully divine and fully human. In Him, God enters our world and reveals His heart.'
    },
    moral: {
      label: 'Christ at the center',
      body: 'Discuss how adult responsibilities can distract from Christ-centered living.',
      activity: 'Name one way to place Christ more intentionally at the center of your week.'
    },
    worship: {
      label: 'Behold the Word',
      body: 'Read John 1:14 slowly and reflect on the mystery of the Incarnation.',
      prayer: 'Jesus, draw me into deeper knowledge of who you are. Amen.'
    }
  },

  {
    id: 'the-sacraments-of-the-church',
    title: 'The Sacraments of the Church',
    audience: 'Adults',
    duration: '75 min',
    scripture: 'Acts 2:38–42',
    summary: 'Explore how the sacraments nourish, heal, and strengthen the Christian life.',
    doctrine: {
      label: 'Signs of grace',
      passage: 'Acts 2:38–42',
      body: 'The sacraments are visible signs of invisible grace. They accompany us through every stage of life.'
    },
    moral: {
      label: 'Living sacramentally',
      body: 'Discuss how sacramental life shapes decisions, relationships, and priorities.',
      activity: 'Reflect on one sacrament that has deeply impacted your life.'
    },
    worship: {
      label: 'Grace received',
      body: 'Offer a prayer of thanksgiving for the sacraments.',
      prayer: 'Lord, thank you for the grace you give through your sacraments. Amen.'
    }
  },

  {
    id: 'the-eucharist',
    title: 'The Eucharist',
    audience: 'Adults',
    duration: '75 min',
    scripture: 'John 6:51–58',
    summary: 'Deepen understanding of the Eucharist as the real presence of Christ and the heart of Christian worship.',
    doctrine: {
      label: 'My flesh for the life of the world',
      passage: 'John 6:51–58',
      body: 'In the Eucharist, Jesus gives Himself fully. It is sacrifice, meal, and presence.'
    },
    moral: {
      label: 'Eucharistic living',
      body: 'Discuss how receiving Christ shapes our daily actions—gratitude, service, and unity.',
      activity: 'Write one way to live “Eucharistically” this week.'
    },
    worship: {
      label: 'Bread of life',
      body: 'Spend a moment in silent adoration or quiet reflection.',
      prayer: 'Jesus, Bread of Life, nourish my soul and strengthen my love. Amen.'
    }
  },

  {
    id: 'the-holy-spirit',
    title: 'The Holy Spirit',
    audience: 'Adults',
    duration: '75 min',
    scripture: 'Galatians 5:22–25',
    summary: 'Reflect on the Spirit’s role in guiding, empowering, and sanctifying believers.',
    doctrine: {
      label: 'Fruit of the Spirit',
      passage: 'Galatians 5:22–25',
      body: 'The Holy Spirit produces love, joy, peace, patience, and other virtues in the life of believers.'
    },
    moral: {
      label: 'Walk by the Spirit',
      body: 'Discuss how adults can discern the Spirit’s guidance amid noise and busyness.',
      activity: 'Identify one fruit of the Spirit you want to grow in.'
    },
    worship: {
      label: 'Come, Holy Spirit',
      body: 'Invite a simple invocation of the Spirit.',
      prayer: 'Holy Spirit, guide my thoughts, words, and actions. Amen.'
    }
  },

  {
    id: 'christian-morality',
    title: 'Christian Morality',
    audience: 'Adults',
    duration: '75 min',
    scripture: 'Romans 12:1–2',
    summary: 'Explore how moral life flows from relationship with Christ, not mere rule‑keeping.',
    doctrine: {
      label: 'Renew your mind',
      passage: 'Romans 12:1–2',
      body: 'Christian morality is transformation of mind and heart, aligning our lives with God’s will.'
    },
    moral: {
      label: 'Mature choices',
      body: 'Discuss conscience, virtue, and moral decision‑making in adult life.',
      activity: 'Reflect on one moral decision you face and how faith shapes it.'
    },
    worship: {
      label: 'Living sacrifice',
      body: 'Offer a prayer dedicating your daily life to God.',
      prayer: 'Lord, transform my mind and help me choose what is good and true. Amen.'
    }
  },

  {
    id: 'the-church-community',
    title: 'The Church Community',
    audience: 'Adults',
    duration: '75 min',
    scripture: '1 Peter 2:4–10',
    summary: 'Understand the Church as a spiritual home where believers grow, serve, and worship together.',
    doctrine: {
      label: 'Living stones',
      passage: '1 Peter 2:4–10',
      body: 'The Church is a spiritual house built of living stones—each believer has a role and dignity.'
    },
    moral: {
      label: 'Belonging and service',
      body: 'Discuss how adults contribute to parish life through gifts, time, and presence.',
      activity: 'Identify one way you can strengthen your parish community.'
    },
    worship: {
      label: 'Chosen people',
      body: 'Pray for unity and renewal in the Church.',
      prayer: 'Lord, make our community a place of welcome, holiness, and mission. Amen.'
    }
  },

  {
    id: 'mission-and-evangelization',
    title: 'Mission and Evangelization',
    audience: 'Adults',
    duration: '75 min',
    scripture: 'Matthew 28:18–20',
    summary: 'Reflect on the call to share the Gospel through witness, compassion, and courage.',
    doctrine: {
      label: 'Go and proclaim',
      passage: 'Matthew 28:18–20',
      body: 'Evangelization is the joyful sharing of Christ’s love. Every believer participates in the Church’s mission.'
    },
    moral: {
      label: 'Witness in daily life',
      body: 'Discuss how adults can evangelize through integrity, compassion, and conversation.',
      activity: 'Write one person you feel called to pray for or accompany spiritually.'
    },
    worship: {
      label: 'Send me',
      body: 'Invite a moment of prayer asking for courage to witness.',
      prayer: 'Lord, send me where I am needed. Help me share your love with others. Amen.'
    }
  }
];

export const lessonPlans: LessonPlan[] = [
  ...lessonPlans_grade3,
  ...lessonPlans_grade7,
  ...lessonPlans_adult
];
