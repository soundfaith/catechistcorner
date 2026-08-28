export type ParableAudience = 'grade3' | 'grade7' | 'adult'

export type Parable = {
  title: string
  image?: string
  scripture: string
  audience: ParableAudience[]
  summary: string
  themes: string[]
  meaning: string
  teachingNotes: string
  activities?: string[]
  prayer?: string
}

export const parables_batch1: Parable[] = [
  {
    title: 'The Good Samaritan',
    scripture: 'Luke 10:25–37',
    audience: ['grade3', 'grade7', 'adult'],
    summary:
      'A traveler is attacked and left on the road. Religious figures pass by, but a Samaritan—an outsider—stops, cares for him, and ensures his recovery. Jesus uses the story to redefine what it means to be a true neighbor.',
    themes: ['Compassion', 'Neighbor', 'Mercy'],
    meaning:
      'Jesus teaches that love of neighbor is shown through concrete mercy, not status or convenience. The Samaritan’s actions reveal that compassion often requires crossing boundaries and interrupting our plans. True holiness is measured by how we respond to suffering.',
    teachingNotes:
      'Read slowly and pause after each character. Kids: emphasize kindness. Teens: explore courage and peer pressure. Adults: unpack Jewish–Samaritan hostility and how Jesus exposes prejudice. Ask: Who is overlooked in our community? What excuses keep us from mercy? End with Jesus’ question: “Who was a neighbor?”',
    activities: [
      'Create a “path of mercy” and name one concrete way to help someone this week.',
      'Role-play the scene from different perspectives.',
    ],
    prayer: 'Lord Jesus, open our eyes to those who need mercy. Amen.',
  },

  {
    title: 'The Lost Sheep',
    scripture: 'Luke 15:3–7',
    audience: ['grade3', 'grade7', 'adult'],
    summary:
      'A shepherd leaves ninety-nine sheep to search for the one that wandered away. When he finds it, he carries it home with joy. Jesus reveals God’s personal concern for each person.',
    themes: ['Mercy', 'Seeking', 'Joy'],
    meaning:
      'God notices when we stray and actively seeks our return. The parable shows that no one is expendable or forgotten. Heaven rejoices over even one heart turning back to God.',
    teachingNotes:
      'Kids: highlight God’s joy. Teens: explore feeling overlooked or disconnected. Adults: discuss the cost of seeking the lost and how the Church mirrors the shepherd’s initiative. Ask: Who feels unseen in our parish? How do we embody God’s pursuit?',
    activities: ['Kids: Draw the shepherd carrying the sheep.', 'Teens: Write about a time you felt “found.”'],
    prayer: 'Lord, thank you for seeking me when I wander. Amen.',
  },

  {
    title: 'The Lost Coin',
    scripture: 'Luke 15:8–10',
    audience: ['grade3', 'grade7', 'adult'],
    summary:
      'A woman loses a coin and searches her home carefully until she finds it. She celebrates with her neighbors. Jesus compares this joy to heaven rejoicing over one sinner who returns.',
    themes: ['Joy', 'Value', 'Persistence'],
    meaning:
      'Every person is precious in God’s eyes. God searches for us with determination and celebrates our restoration. The parable highlights the personal joy of God’s mercy.',
    teachingNotes:
      'Kids: emphasize joy. Teens: explore self-worth. Adults: discuss God’s persistence and how communities reflect that persistence. Ask: Who feels “lost” in subtle ways—discouragement, isolation, doubt?',
    activities: ['Kids: Hide and find paper coins.'],
    prayer: 'Lord, help me see the value of every person. Amen.',
  },

  {
    title: 'The Prodigal Son',
    scripture: 'Luke 15:11–32',
    audience: ['grade3', 'grade7', 'adult'],
    summary:
      'A younger son wastes his inheritance and returns home in shame. His father welcomes him with joy, while the older son struggles with resentment. Jesus reveals the depth of God’s mercy and the challenge of forgiveness.',
    themes: ['Forgiveness', 'Repentance', 'Mercy'],
    meaning:
      'God welcomes us back even after serious failure. The older son shows how resentment can block grace. The parable invites us to examine our hearts—whether we resist mercy or struggle to forgive.',
    teachingNotes:
      'Kids: focus on the father’s love. Teens: explore identity, mistakes, and forgiveness. Adults: unpack shame, honor, resentment, and reconciliation. Ask: Which son do you resemble? How do communities welcome those returning after failure?',
    activities: ['Teens: Write from the elder son’s perspective.'],
    prayer: 'Father, welcome me into your mercy. Amen.',
  },

  {
    title: 'The Mustard Seed',
    scripture: 'Mark 4:30–32',
    audience: ['grade3', 'grade7', 'adult'],
    summary:
      'Jesus compares the kingdom to a tiny seed that grows into a large tree. Something small becomes unexpectedly great. The parable encourages trust in God’s hidden work.',
    themes: ['Faith', 'Growth', 'Kingdom'],
    meaning:
      'God often begins with small, unnoticed beginnings. Growth may be slow, but it becomes a blessing for many. The kingdom expands beyond what we can see or predict.',
    teachingNotes:
      'Kids: emphasize small beginnings. Teens: explore patience. Adults: discuss hidden growth and long-term transformation. Ask: Where is God working quietly in your life?',
    activities: ['Kids: Plant a seed.'],
    prayer: 'Lord, grow your kingdom in me. Amen.',
  },

  {
    title: 'The Sower',
    scripture: 'Matthew 13:1–9',
    audience: ['grade3', 'grade7', 'adult'],
    summary:
      'A sower scatters seeds on different types of soil—hard, shallow, thorny, and good. Only the good soil produces abundant fruit. Jesus uses this image to describe how hearts receive God’s word.',
    themes: ['Heart', 'Listening', 'Growth'],
    meaning:
      'Spiritual fruitfulness depends on openness and perseverance. Distractions, fear, and shallow commitment can choke growth. God generously offers His word, but we must cultivate receptive hearts.',
    teachingNotes:
      'Kids: simplify the soils. Teens: explore distractions like social media and pressure. Adults: discuss deeper obstacles—fear, fatigue, divided priorities. Ask: Which soil describes your heart today?',
    activities: ['Teens: Identify one “thorn” that chokes growth.'],
    prayer: 'Prepare my heart to receive your word. Amen.',
  },

  {
    title: 'The Wise and Foolish Builders',
    scripture: 'Matthew 7:24–27',
    audience: ['grade3', 'grade7', 'adult'],
    summary:
      'Two builders construct houses—one on rock, one on sand. When storms come, only the house on rock stands firm. Jesus teaches the importance of acting on His words.',
    themes: ['Foundation', 'Obedience', 'Strength'],
    meaning:
      'Faith must be lived, not just heard. A strong foundation prepares us for life’s storms. Obedience builds resilience and stability.',
    teachingNotes:
      'Kids: emphasize strong foundations. Teens: explore pressures that tempt them to build on “sand.” Adults: discuss resilience and spiritual habits. Ask: What storms have revealed your foundation?',
    activities: ['Kids: Build two small structures.'],
    prayer: 'Jesus, be my rock. Amen.',
  },

  {
    title: 'The Talents',
    scripture: 'Matthew 25:14–30',
    audience: ['grade7', 'adult'],
    summary:
      'A master entrusts talents to his servants. Two invest them and multiply their gifts; one hides his out of fear. Jesus teaches responsibility and courage.',
    themes: ['Stewardship', 'Responsibility', 'Courage'],
    meaning:
      'God entrusts each person with gifts meant to be used boldly. Fear can bury potential. Faithful stewardship brings joy to God.',
    teachingNotes:
      'Teens: explore fear of failure. Adults: discuss stewardship of time, vocation, relationships. Ask: What gift are you burying? What step of courage is needed?',
    activities: ['Teens: Identify one talent to use for good.'],
    prayer: 'Help me use the gifts you’ve given me. Amen.',
  },

  {
    title: 'The Workers in the Vineyard',
    scripture: 'Matthew 20:1–16',
    audience: ['grade7', 'adult'],
    summary:
      'Workers hired at different times receive the same wage. Those who worked longer feel cheated. Jesus challenges human ideas of fairness.',
    themes: ['Generosity', 'Justice', 'Envy'],
    meaning:
      'God’s generosity does not follow human fairness. Grace is gift, not entitlement. Envy distorts our ability to rejoice in God’s goodness.',
    teachingNotes:
      'Teens: explore comparison. Adults: discuss entitlement and resentment. Ask: Where does envy distort your view of God’s generosity?',
    activities: ['Adults: Reflect on envy in life.'],
    prayer: 'Free me from comparison. Amen.',
  },

  {
    title: 'The Pharisee and the Tax Collector',
    scripture: 'Luke 18:9–14',
    audience: ['grade7', 'adult'],
    summary:
      'A proud Pharisee and a humble tax collector pray in the temple. Only the humble man is justified. Jesus reveals the heart of authentic prayer.',
    themes: ['Humility', 'Prayer', 'Repentance'],
    meaning:
      'True prayer begins with humility and honest self-awareness. Pride blinds us to our need for mercy. God lifts the humble.',
    teachingNotes:
      'Teens: explore authenticity. Adults: discuss subtle pride and spiritual comparison. Ask: What posture do you bring to prayer?',
    activities: ['Teens: Write a humble prayer.'],
    prayer: 'Teach me humility in prayer. Amen.',
  },

  {
    title: 'The Rich Fool',
    scripture: 'Luke 12:13–21',
    audience: ['grade7', 'adult'],
    summary:
      'A wealthy man stores up goods believing he has secured his future. His sudden death exposes the emptiness of his plans. Jesus warns against misplaced security.',
    themes: ['Greed', 'Priorities', 'Wisdom'],
    meaning:
      'Life is not measured by possessions. Trust in wealth can blind us to spiritual reality. True richness comes from relationship with God.',
    teachingNotes:
      'Teens: explore pressure to succeed. Adults: discuss consumerism and misplaced security. Ask: Where do you seek control through possessions?',
    activities: ['Adults: Identify one area to simplify.'],
    prayer: 'Help me seek true richness. Amen.',
  },

  {
    title: 'The Persistent Widow',
    scripture: 'Luke 18:1–8',
    audience: ['grade7', 'adult'],
    summary:
      'A widow repeatedly approaches an unjust judge until he grants her justice. Jesus uses her persistence to teach about prayer.',
    themes: ['Perseverance', 'Justice', 'Prayer'],
    meaning:
      'Persistent prayer strengthens faith and reveals trust in God’s justice. God hears the cries of the vulnerable.',
    teachingNotes:
      'Teens: explore perseverance. Adults: discuss unanswered prayer. Ask: What prayer do you need to persist in?',
    activities: ['Teens: Write a persistent prayer.'],
    prayer: 'Strengthen my perseverance. Amen.',
  },

  {
    title: 'The Wedding Feast',
    scripture: 'Matthew 22:1–14',
    audience: ['adult'],
    summary:
      'Invited guests refuse the king’s feast, so the invitation is extended to unexpected people. One guest arrives unprepared and is cast out.',
    themes: ['Invitation', 'Judgment', 'Readiness'],
    meaning:
      'God’s invitation is generous, but entering the kingdom requires conversion and readiness. Grace is free but not passive.',
    teachingNotes:
      'Adults: explore spiritual apathy and excuses. Ask: How do you respond to God’s invitations? What “garment” of conversion is needed?',
    activities: ['Adults: Reflect on responding to God’s invitations.'],
    prayer: 'Help me respond with readiness. Amen.',
  },

  {
    title: 'The Sheep and the Goats',
    scripture: 'Matthew 25:31–46',
    audience: ['adult'],
    summary:
      'Jesus describes a final judgment where people are separated based on how they treated the least among them. Acts of compassion reveal love for Christ.',
    themes: ['Service', 'Compassion', 'Judgment'],
    meaning:
      'Love for Christ is shown through love for the vulnerable. Small acts of mercy carry eternal significance.',
    teachingNotes:
      'Adults: explore social responsibility and hidden opportunities for compassion. Ask: Who is the “least one” in your life?',
    activities: ['Adults: Serve one “least one” this week.'],
    prayer: 'Help me recognize you in the least. Amen.',
  },

  {
    title: 'The Two Sons',
    scripture: 'Matthew 21:28–32',
    audience: ['grade7', 'adult'],
    summary:
      'One son refuses but later obeys; the other agrees but never acts. Jesus teaches that actions matter more than words.',
    themes: ['Obedience', 'Integrity', 'Repentance'],
    meaning:
      'True obedience is revealed through action. Repentance is always possible and welcomed.',
    teachingNotes:
      'Teens: explore integrity. Adults: examine good intentions vs. action. Ask: Where do you say “yes” but fail to act?',
    activities: ['Teens: Identify one area needing follow-through.'],
    prayer: 'Help my actions match my words. Amen.',
  },

  {
    title: 'The Great Banquet',
    scripture: 'Luke 14:15–24',
    audience: ['grade7', 'adult'],
    summary:
      'Invited guests make excuses and refuse the banquet. The host invites the poor, crippled, blind, and lame instead.',
    themes: ['Invitation', 'Grace', 'Inclusion'],
    meaning:
      'God’s kingdom welcomes the overlooked. Excuses can block grace and spiritual growth.',
    teachingNotes:
      'Teens: explore excuses. Adults: examine spiritual avoidance. Ask: What excuses keep you from deeper relationship with God?',
    activities: ['Adults: Reflect on excuses blocking grace.'],
    prayer: 'Make my heart open to your invitation. Amen.',
  },

  {
    title: 'The Hidden Treasure',
    scripture: 'Matthew 13:44',
    audience: ['grade3', 'grade7', 'adult'],
    summary:
      'A man finds treasure in a field and joyfully sells everything to buy it. Jesus shows the surpassing value of the kingdom.',
    themes: ['Value', 'Kingdom', 'Commitment'],
    meaning:
      'The kingdom is worth giving everything for. Joy motivates sacrifice and commitment.',
    teachingNotes:
      'Kids: emphasize joy. Teens: explore values. Adults: examine competing priorities. Ask: What treasure shapes your choices?',
    activities: ['Kids: Draw a treasure chest of “kingdom values.”'],
    prayer: 'Help me treasure your kingdom. Amen.',
  },

  {
    title: 'The Pearl of Great Price',
    scripture: 'Matthew 13:45–46',
    audience: ['grade3', 'grade7', 'adult'],
    summary:
      'A merchant finds a pearl of great value and sells everything to obtain it. Jesus teaches wholehearted pursuit of what matters most.',
    themes: ['Value', 'Sacrifice', 'Kingdom'],
    meaning:
      'Following Christ is worth every sacrifice. Discernment helps us choose what truly matters.',
    teachingNotes:
      'Kids: simplify value. Teens: explore desires. Adults: discuss discernment. Ask: What “pearl” is God calling you to pursue?',
    activities: ['Teens: Identify one “pearl” worth pursuing.'],
    prayer: 'Help me choose what truly matters. Amen.',
  }
];

export const parables_batch2: Parable[] = [
  {
    title: 'The Net',
    scripture: 'Matthew 13:47–50',
    audience: ['adult'],
    summary:
      'Jesus describes a fishing net that gathers all kinds of fish. When full, the fish are sorted—good kept, bad thrown away. He uses this image to speak about final judgment.',
    themes: ['Judgment', 'Discernment', 'Kingdom'],
    meaning:
      'The kingdom gathers all people, but God alone discerns the heart. Choices shape our spiritual direction and destiny. The parable reminds us that accountability is real and not to be ignored.',
    teachingNotes:
      'Adults: explore the tension between inclusiveness and accountability. Discuss how daily choices form character. Ask: What areas of your life need purification or clearer direction? Encourage catechists to help learners understand judgment as truth, not fear.',
    activities: ['Adults: Reflect on areas needing purification.'],
    prayer: 'Purify my heart and make me faithful. Amen.',
  },

  {
    title: 'The Barren Fig Tree',
    scripture: 'Luke 13:6–9',
    audience: ['grade7', 'adult'],
    summary:
      'A fig tree produces no fruit for years. The owner wants to cut it down, but the gardener asks for more time to cultivate it. Jesus uses this to teach about repentance and growth.',
    themes: ['Patience', 'Repentance', 'Growth'],
    meaning:
      'God is patient but expects transformation. Spiritual fruit requires cultivation, not passivity. The parable invites honest examination of areas where growth has stalled.',
    teachingNotes:
      'Teens: explore frustration with slow growth. Adults: examine stagnation and resistance. Ask: What part of your life needs “cultivation”—prayer, virtue, forgiveness? Highlight God’s patience and the gardener’s intercession.',
    activities: ['Adults: Identify one area needing cultivation.'],
    prayer: 'Cultivate my heart to bear fruit. Amen.',
  },

  {
    title: 'The Narrow Door',
    scripture: 'Luke 13:22–30',
    audience: ['adult'],
    summary:
      'Jesus warns that entering the kingdom requires effort and sincerity. Some will assume they belong but find themselves outside because they never truly followed Him.',
    themes: ['Discipleship', 'Effort', 'Sincerity'],
    meaning:
      'Faith cannot be casual or merely cultural. Jesus calls for intentional discipleship shaped by conversion and perseverance. The parable challenges complacency and false security.',
    teachingNotes:
      'Adults: explore cultural vs. committed Christianity. Ask: Where is deeper effort needed—prayer, virtue, service, forgiveness? Encourage catechists to help learners see discipleship as relationship, not routine.',
    activities: ['Adults: Identify one area needing effort.'],
    prayer: 'Strengthen my commitment to your way. Amen.',
  },

  {
    title: 'The Shrewd Manager',
    scripture: 'Luke 16:1–13',
    audience: ['adult'],
    summary:
      'A manager facing dismissal acts shrewdly to secure his future. Jesus praises his foresight, not his dishonesty, and urges disciples to be wise with what they have.',
    themes: ['Wisdom', 'Stewardship', 'Priorities'],
    meaning:
      'Resources—time, influence, relationships—are temporary tools meant for eternal purposes. Jesus challenges disciples to use them intentionally. Spiritual wisdom should be at least as thoughtful as worldly planning.',
    teachingNotes:
      'Adults: explore stewardship of time, money, relationships. Ask: What resource can you use more intentionally for God’s purposes? Encourage catechists to highlight creativity and foresight in doing good.',
    activities: ['Adults: Identify one resource to use wisely.'],
    prayer: 'Guide my stewardship with wisdom. Amen.',
  },

  {
    title: 'The Rich Man and Lazarus',
    scripture: 'Luke 16:19–31',
    audience: ['adult'],
    summary:
      'A rich man lives in luxury while Lazarus, a poor beggar, suffers at his gate. After death, their situations reverse dramatically. Jesus warns against ignoring the suffering of others.',
    themes: ['Justice', 'Compassion', 'Accountability'],
    meaning:
      'Comfort can blind us to the needs of others. Neglecting the poor has spiritual consequences. Jesus calls for compassion rooted in awareness and responsibility.',
    teachingNotes:
      'Adults: explore privilege, blindness, and compassion. Ask: Who is “Lazarus” at your gate? Encourage catechists to help learners see mercy as both personal and social.',
    activities: ['Adults: Support someone in need this week.'],
    prayer: 'Help me see and serve those who suffer. Amen.',
  },

  {
    title: 'The Ten Virgins',
    scripture: 'Matthew 25:1–13',
    audience: ['grade7', 'adult'],
    summary:
      'Ten virgins wait for the bridegroom. Five bring extra oil and are ready; five do not and miss the feast. Jesus teaches vigilance and preparation.',
    themes: ['Readiness', 'Wisdom', 'Discipleship'],
    meaning:
      'Spiritual readiness cannot be borrowed or improvised. Faith requires habits that sustain us over time. Jesus calls for intentional preparation, not last-minute scrambling.',
    teachingNotes:
      'Teens: explore procrastination and preparation. Adults: examine habits that sustain faith—prayer, Scripture, sacraments. Ask: What “oil” do you need to replenish?',
    activities: ['Teens: Prepare your lamp this week.'],
    prayer: 'Keep my heart ready for your coming. Amen.',
  },

  {
    title: 'The Unforgiving Servant',
    scripture: 'Matthew 18:21–35',
    audience: ['grade7', 'adult'],
    summary:
      'A servant forgiven a massive debt refuses to forgive a small one. His lack of mercy leads to severe consequences. Jesus teaches the seriousness of forgiveness.',
    themes: ['Forgiveness', 'Mercy', 'Justice'],
    meaning:
      'Receiving mercy must lead to offering mercy. Grudges block grace and distort relationships. Jesus calls disciples to forgive as they have been forgiven.',
    teachingNotes:
      'Teens: explore forgiveness and emotional hurt. Adults: examine resentment and healing. Ask: Who do you need to forgive? Encourage catechists to help learners connect God’s mercy to their own relationships.',
    activities: ['Teens: Write a forgiveness intention.'],
    prayer: 'Teach me to forgive as you forgive me. Amen.',
  },

  {
    title: 'The Two Debtors',
    scripture: 'Luke 7:36–50',
    audience: ['adult'],
    summary:
      'Jesus tells of two debtors forgiven different amounts. The one forgiven more loves more. He uses this to explain the actions of a woman who shows Him great love.',
    themes: ['Love', 'Forgiveness', 'Gratitude'],
    meaning:
      'Awareness of mercy deepens love. Self-righteousness blocks compassion. Jesus invites gratitude rooted in humility.',
    teachingNotes:
      'Adults: explore gratitude and humility. Ask: How has mercy shaped your love? Encourage catechists to highlight the woman’s courage and vulnerability.',
    activities: ['Adults: Reflect on mercy received.'],
    prayer: 'Increase my love through your mercy. Amen.',
  },

  {
    title: 'The Growing Seed',
    scripture: 'Mark 4:26–29',
    audience: ['grade3', 'grade7', 'adult'],
    summary:
      'Jesus describes a seed that grows quietly and steadily, even when the farmer does not understand how. The harvest comes in due time.',
    themes: ['Growth', 'Patience', 'Kingdom'],
    meaning:
      'God works quietly and steadily in the heart. Spiritual growth often happens unseen. Patience and trust are essential to discipleship.',
    teachingNotes:
      'Kids: emphasize slow growth. Teens: explore frustration with slow progress. Adults: discuss seasons of waiting. Ask: Where is God working quietly in your life?',
    activities: ['Kids: Draw stages of growth.'],
    prayer: 'Grow your kingdom quietly in me. Amen.',
  },

  {
    title: 'The Wicked Tenants',
    scripture: 'Matthew 21:33–46',
    audience: ['adult'],
    summary:
      'Tenants entrusted with a vineyard reject the landowner’s servants and kill his son. Jesus uses this to expose rebellion against God’s messengers.',
    themes: ['Rejection', 'Judgment', 'Authority'],
    meaning:
      'Rejecting God’s call leads to spiritual ruin. The son’s death foreshadows Jesus’ own rejection. The parable invites humility and openness to God’s word.',
    teachingNotes:
      'Adults: explore resistance to God’s call—fear, pride, comfort. Ask: Where do you avoid conversion? Encourage catechists to highlight stewardship of God’s gifts.',
    activities: ['Adults: Reflect on areas of resistance.'],
    prayer: 'Help me welcome your word with humility. Amen.',
  },

  {
    title: 'The Unjust Judge',
    scripture: 'Luke 18:1–8',
    audience: ['grade7', 'adult'],
    summary:
      'A widow persistently seeks justice from an unjust judge. Her determination eventually moves him to act. Jesus teaches perseverance in prayer.',
    themes: ['Perseverance', 'Prayer', 'Justice'],
    meaning:
      'Persistent prayer reveals trust in God’s justice. God hears the cries of the vulnerable. Perseverance strengthens faith.',
    teachingNotes:
      'Teens: explore perseverance. Adults: discuss unanswered prayer. Ask: What prayer do you need to continue? Encourage catechists to highlight courage in persistence.',
    activities: ['Teens: Write a persistent prayer.'],
    prayer: 'Strengthen my perseverance in prayer. Amen.',
  },

  {
    title: 'The Vine and the Branches',
    scripture: 'John 15:1–8',
    audience: ['grade7', 'adult'],
    summary:
      'Jesus describes Himself as the vine and His disciples as branches. Fruitfulness depends on remaining connected to Him. Apart from Him, we can do nothing.',
    themes: ['Connection', 'Fruitfulness', 'Discipleship'],
    meaning:
      'Spiritual life flows from intimacy with Christ. Fruitfulness is the result of relationship, not effort alone. Pruning symbolizes growth through challenge.',
    teachingNotes:
      'Teens: explore connection and spiritual nourishment. Adults: examine prayer and sacramental life. Ask: What area needs pruning? Encourage catechists to highlight communal support among branches.',
    activities: ['Adults: Identify one habit that strengthens connection with Christ.'],
    prayer: 'Keep me rooted in you, Jesus. Amen.',
  },

  {
    title: 'The Good Shepherd',
    scripture: 'John 10:1–18',
    audience: ['grade3', 'grade7', 'adult'],
    summary:
      'Jesus describes Himself as the shepherd who knows His sheep, calls them by name, and lays down His life for them. He contrasts His care with hired hands who abandon the flock.',
    themes: ['Care', 'Sacrifice', 'Identity'],
    meaning:
      'Jesus reveals His personal, sacrificial love for each disciple. His voice guides, protects, and gathers. The parable invites trust in His leadership.',
    teachingNotes:
      'Kids: emphasize Jesus’ care. Teens: explore identity and belonging. Adults: discuss trust and spiritual listening. Ask: How do you recognize the Shepherd’s voice?',
    activities: ['Kids: Draw Jesus carrying a sheep.'],
    prayer: 'Shepherd me, Lord, and keep me close to you. Amen.',
  },

  {
    title: 'The Wise Steward',
    scripture: 'Luke 12:35–48',
    audience: ['adult'],
    summary:
      'Jesus describes servants waiting for their master’s return. Wise stewards remain vigilant and responsible; careless ones are caught unprepared.',
    themes: ['Readiness', 'Responsibility', 'Accountability'],
    meaning:
      'Discipleship involves faithful stewardship of what God entrusts. Readiness is shown through consistent action. Jesus calls for responsibility shaped by love.',
    teachingNotes:
      'Adults: explore vigilance and responsibility. Ask: What has God entrusted to you—relationships, gifts, time? Encourage catechists to highlight accountability as part of love.',
    activities: ['Adults: Identify one stewardship responsibility to strengthen.'],
    prayer: 'Make me a faithful steward, Lord. Amen.',
  },

  {
    title: 'The Lamp Under a Basket',
    scripture: 'Matthew 5:14–16',
    audience: ['grade3', 'grade7', 'adult'],
    summary:
      'Jesus says disciples are the light of the world. A lamp is meant to shine, not be hidden. He calls His followers to let their good works reveal God’s glory.',
    themes: ['Witness', 'Identity', 'Mission'],
    meaning:
      'Faith is meant to be visible and transformative. Our actions reveal God’s presence. Jesus invites disciples to live courageously and publicly.',
    teachingNotes:
      'Kids: emphasize shining for Jesus. Teens: explore courage and authenticity. Adults: discuss witness in daily life. Ask: Where is God calling you to shine?',
    activities: ['Kids: Draw a lamp shining brightly.'],
    prayer: 'Let your light shine through me, Lord. Amen.',
  },

  {
    title: 'The Wise Merchant',
    scripture: 'Matthew 13:45–46',
    audience: ['grade7', 'adult'],
    summary:
      'A merchant searches for fine pearls and sells everything to obtain the best one. Jesus teaches wholehearted pursuit of the kingdom.',
    themes: ['Discernment', 'Value', 'Commitment'],
    meaning:
      'The kingdom is worth total devotion. Discernment helps us choose what truly matters. Jesus calls for courageous commitment.',
    teachingNotes:
      'Teens: explore choices and values. Adults: examine discernment. Ask: What “pearl” is God calling you to pursue wholeheartedly?',
    activities: ['Teens: Identify one “pearl” worth pursuing.'],
    prayer: 'Help me pursue what matters most. Amen.',
  }
];

const parableImages: Record<string, string> = {
  'The Good Samaritan': 'the_good_samaritan.png',
  'The Lost Sheep': 'the_lost_sheep.jpg',
  'The Lost Coin': 'the_lost_coin.jpg',
  'The Prodigal Son': 'the_prodigal_son.jpg',
  'The Mustard Seed': 'the_mustard_seed.jpg',
  'The Sower': 'the_sower.jpg',
  'The Wise and Foolish Builders': 'the_wise_and_foolish_builder.jpg',
  'The Talents': 'the_talents.jpg',
  'The Workers in the Vineyard': 'the_workers_in_the_vineyard.jpg',
  'The Pharisee and the Tax Collector': 'the_pharisee_and_the_tax_collector.jpg',
  'The Rich Fool': 'the_rich_fool.jpg',
  'The Persistent Widow': 'the_persistent_widow.jpg',
  'The Wedding Feast': 'the_wedding_feast.jpg',
  'The Sheep and the Goats': 'the_sheep_and_the_goats.jpg',
  'The Two Sons': 'the_two_sons.jpg',
  'The Great Banquet': 'the_great_banquet.jpg',
  'The Hidden Treasure': 'the_hidden_treasure.jpg',
  'The Pearl of Great Price': 'the_pearl_of_great_price.jpg',
  'The Net': 'the_net.jpg',
  'The Barren Fig Tree': 'the_barren_fig_tree.jpg',
  'The Narrow Door': 'the_narrow_door.jpg',
  'The Shrewd Manager': 'the_shrewd_manager.jpg',
  'The Rich Man and Lazarus': 'the_rich_man_and_lazarus.jpg',
  'The Ten Virgins': 'the_ten_virgins.jpg',
  'The Unforgiving Servant': 'the_unforgiving_servant.png',
  'The Two Debtors': 'the_two_debtors.png',
  'The Growing Seed': 'the_growing_seed.png',
  'The Wicked Tenants': 'the_wicked_tenants.png',
  'The Unjust Judge': 'the_unjust_judge.png',
  'The Vine and the Branches': 'the_vine_and_the_branches.png',
  'The Good Shepherd': 'the_good_shepherd.png',
  'The Wise Steward': 'the_wise_steward.png',
  'The Lamp Under a Basket': 'the_lamp_under_a_basket.png',
  'The Wise Merchant': 'the_wise_merchant.png',
}

export const parables: Parable[] = [
  ...parables_batch1,
  ...parables_batch2,
].map((parable) => ({ ...parable, image: parableImages[parable.title] }))

