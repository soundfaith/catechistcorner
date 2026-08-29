export const saintCategories = [
    'Apostles',
    'Doctors',
    'Martyrs',
    'Missionaries',
    'Founders',
    'Confessors',
    'Mystics',
    'Mothers',
    'Virgins',
    'Popes',
] as const

export type SaintCategory = (typeof saintCategories)[number]

export type Saint = {
    id: string
    name: string
    category: SaintCategory
    feastDay: string
    patronage: string[]
    tagline: string
    biography: string | string[]
    virtue: string
    quote?: string
    image?: string
}

export const saints: Saint[] = [
    {
        id: 'saint-peter',
        name: 'Saint Peter',
        category: 'Apostles',
        feastDay: 'June 29',
        patronage: ['the Church', 'fishermen', 'popes'],
        tagline: 'Rock of the Church',
        biography: [
            "Simon Peter began life as a fisherman on the Sea of Galilee, working alongside his brother Andrew. His encounter with Jesus changed everything: called to leave his nets, Peter stepped into a mission he did not fully understand but embraced with bold faith. He witnessed miracles, professed Jesus as the Christ, and even walked on water for a few trembling steps. Though he denied Jesus during the Passion, the risen Lord restored him with mercy, asking three times, 'Do you love me?' and entrusting him with the care of His flock.",

            "After Pentecost, Peter became a courageous leader of the early Church. Filled with the Holy Spirit, he preached openly, healed the sick, and guided the Christian community through persecution and difficult decisions. Tradition holds that he traveled to Rome, where he continued to strengthen the Church until his martyrdom, choosing to be crucified upside down out of humility. Peter’s life shows how God transforms ordinary people into extraordinary witnesses, turning human weakness into a foundation of grace."
        ],
        virtue: 'Faith and courage',
        quote: '“Lord, to whom shall we go?”',
    },
    {
        id: 'saint-paul',
        name: 'Saint Paul',
        category: 'Apostles',
        feastDay: 'June 29',
        patronage: ['missionaries', 'writers', 'theologians'],
        tagline: 'Apostle to the Gentiles',
        biography: [
            "Paul, originally known as Saul of Tarsus, was a zealous Pharisee who fiercely persecuted the early Christians. Everything changed on the road to Damascus, where a blinding encounter with the risen Christ shattered his certainty and opened his heart to grace. From that moment, Paul devoted himself entirely to the Gospel he once tried to destroy. He spent years in prayer, study, and preaching, forming communities across the Roman world and teaching that salvation comes through faith in Christ, not through the old law.",

            "Paul became one of the Church’s greatest missionaries, traveling thousands of miles to proclaim Christ to Jews and Gentiles alike. His letters—written to guide, correct, and encourage the early Christian communities—form a major part of the New Testament and continue to shape Christian theology today. Despite beatings, imprisonment, shipwrecks, and constant opposition, Paul remained steadfast in his mission until his martyrdom in Rome. His life is a witness to the power of conversion and the unstoppable zeal that comes from encountering the living Christ."
        ],
        virtue: 'Conversion and missionary zeal',
        quote: '“I can do all things through Christ who strengthens me.”',
    },

    {
        id: 'saint-john',
        name: 'Saint John',
        category: 'Apostles',
        feastDay: 'December 27',
        patronage: ['love', 'writers', 'the Church'],
        tagline: 'Beloved disciple',
        biography: [
            "John, the son of Zebedee, was one of Jesus’ closest companions and is remembered as the disciple whom Jesus loved. He witnessed key moments in the life of Christ, including the Last Supper, the Crucifixion, and the Resurrection. At the foot of the Cross, Jesus entrusted His mother Mary to John’s care, a sign of deep trust and spiritual closeness. John’s Gospel reflects this intimacy, emphasizing the mystery of Christ’s divinity, the call to believe, and the centrality of love in the Christian life.",

            "After the Resurrection, John devoted himself to guiding the early Church and proclaiming the message of Christ with gentleness and clarity. Tradition holds that he spent his later years in Ephesus, where he wrote the Gospel of John, three epistles, and the Book of Revelation. His writings highlight themes of truth, light, and the transforming power of divine love. John is honored as a model of fidelity and contemplation, showing that the heart of discipleship is to remain close to Jesus and to live the love He taught."
        ],
        virtue: 'Love and fidelity',
        quote: '“God is love.”',
    },

    {
        id: 'saint-matthew',
        name: 'Saint Matthew',
        category: 'Apostles',
        feastDay: 'September 21',
        patronage: ['tax collectors', 'accountants', 'bookkeepers'],
        tagline: 'Evangelist of mercy',
        biography: [
            "Matthew, also known as Levi, worked as a tax collector—an occupation often associated with corruption and betrayal of the Jewish people. When Jesus called him, Matthew left his booth immediately, choosing mercy over money and discipleship over comfort. His conversion became a powerful sign that no one is beyond the reach of God's grace. Matthew welcomed Jesus into his home, hosting a meal with other tax collectors and sinners, showing that the Gospel begins with hospitality and openness to transformation.",

            "As an apostle, Matthew proclaimed the Good News with clarity and compassion. He is traditionally recognized as the author of the Gospel of Matthew, which emphasizes Jesus as the fulfillment of the Scriptures and highlights themes of forgiveness, mercy, and the Kingdom of Heaven. Through his writing and witness, Matthew helped shape the early Christian community and continues to guide believers today. His life reminds the Church that Christ calls people from every background and that true conversion leads to a generous heart and a mission to share God's mercy."
        ],
        virtue: 'Conversion and hospitality',
        quote: '“Follow me.”',
    },

    {
        id: 'saint-andrew',
        name: 'Saint Andrew',
        category: 'Apostles',
        feastDay: 'November 30',
        patronage: ['fishermen', 'Scotland', 'Greece'],
        tagline: 'First to follow',
        biography: [
            "Andrew, the brother of Simon Peter, was a fisherman on the Sea of Galilee and one of the very first to follow Jesus. After hearing John the Baptist proclaim Jesus as the Lamb of God, Andrew immediately sought out Christ and spent time with Him. His excitement was so great that he ran to tell Peter, saying, 'We have found the Messiah.' Andrew’s readiness to respond and his desire to bring others to Jesus made him a model of joyful evangelization and humble discipleship.",

            "Throughout Jesus’ ministry, Andrew quietly guided people toward the Lord, including the boy with the loaves and fish at the feeding of the five thousand. Tradition holds that after Pentecost, Andrew preached the Gospel in Greece and surrounding regions, eventually giving his life in martyrdom. He is said to have been crucified on an X‑shaped cross, choosing it out of humility. Andrew’s witness reminds the Church that true discipleship begins with a simple invitation—'Come and see'—and grows through generosity, courage, and a heart eager to share Christ with others."
        ],
        virtue: 'Evangelization and generosity',
        quote: '“Come and see.”',
    },

    {
        id: 'saint-james-greater',
        name: 'Saint James the Greater',
        category: 'Apostles',
        feastDay: 'July 25',
        patronage: ['pilgrims', 'Spain', 'fishermen'],
        tagline: 'Missionary of courage',
        biography: [
            "James, the son of Zebedee and brother of John, was among the first disciples called by Jesus as he worked by the Sea of Galilee. Known for his bold and fiery spirit, James witnessed key moments in Christ’s ministry, including the Transfiguration. His closeness to Jesus shaped him into a courageous apostle who embraced the demands of discipleship with zeal. Tradition holds that James preached the Gospel in distant lands, sowing the seeds of faith with strength and conviction.",

            "James was the first of the apostles to give his life for Christ, martyred in Jerusalem under King Herod. His death became a powerful testimony to the depth of his love and loyalty. Over time, devotion to James grew throughout the Christian world, especially in Spain, where the famous pilgrimage route to Santiago de Compostela honors his memory. His life reminds believers that following Christ often requires sacrifice, but it leads to a courage that transforms hearts and builds the Church."
        ],
        virtue: 'Courage and sacrificial love',
    },

    {
        id: 'saint-philip',
        name: 'Saint Philip',
        category: 'Apostles',
        feastDay: 'May 3',
        patronage: ['Rome', 'artists', 'the poor'],
        tagline: 'Bringing people to Christ',
        biography: [
            "Philip was one of the first disciples called by Jesus and is remembered for his eagerness to bring others to the Lord. When he encountered Christ, Philip immediately shared the news with Nathanael, inviting him with the simple and powerful words, 'Come and see.' He also played a key role in the feeding of the five thousand, guiding the crowd to Jesus and showing that faith often begins with small acts of trust and openness.",

            "After Pentecost, Philip continued to preach the Gospel with humility and courage. Tradition holds that he traveled through Greece and Asia Minor, spreading the message of Christ and strengthening the early Christian communities. His life teaches the Church the importance of making space for others to encounter Jesus—through welcome, invitation, and a heart ready to serve. Philip’s witness reminds believers that evangelization begins with genuine concern for others and a desire to lead them toward the truth.",
        ],
        virtue: 'Mission and invitation',
    },

    {
        id: 'saint-thomas',
        name: 'Saint Thomas',
        category: 'Apostles',
        feastDay: 'December 21',
        patronage: ['architects', 'theologians', 'India'],
        tagline: 'Doubter made witness',
        biography: [
            "Thomas, one of the Twelve, is best remembered for his honest doubt after hearing that Jesus had risen. He refused to believe until he could see and touch the wounds himself, a moment that revealed both his sincerity and his struggle to understand the mystery of the Resurrection. When Jesus appeared and invited Thomas to place his hand in His side, Thomas responded with one of the most profound confessions of faith in Scripture: 'My Lord and my God.' His journey shows that sincere questioning can lead to deeper trust and a more personal encounter with Christ.",

            "Tradition holds that Thomas traveled far beyond the borders of the Roman Empire, bringing the Gospel to India, where many Christian communities trace their origins to his preaching. His missionary work was marked by courage, perseverance, and a desire to share the truth he had come to believe so deeply. Thomas’s witness reminds the Church that faith is not the absence of doubt, but the willingness to seek, to ask, and ultimately to surrender to the truth when it is revealed.",
        ],
        virtue: 'Honest faith',
        quote: '“My Lord and my God!”',
    },

    {
        id: 'saint-james-lesser',
        name: 'Saint James the Less',
        category: 'Apostles',
        feastDay: 'May 3',
        patronage: ['pharmacists', 'the poor'],
        tagline: 'Witness of humility',
        biography: [
            "James the Less, traditionally identified as the son of Alphaeus, was a quiet but steady presence among the Twelve. He witnessed the Resurrection and became a respected leader in the early Church, known for his humility, prayerfulness, and deep commitment to living the teachings of Christ. His role was not marked by dramatic moments but by faithful perseverance, showing that holiness often grows in silence and consistency rather than public acclaim.",

            "As bishop of Jerusalem, James guided the Christian community through its earliest challenges, helping unify believers from different backgrounds and strengthening their trust in Christ. Tradition holds that he lived a life of simplicity and devotion, earning the admiration of both Christians and non‑Christians. His martyrdom sealed his witness, reminding the Church that quiet fidelity is a powerful form of love. James teaches that discipleship is measured not by prominence, but by steadfastness and a heart anchored in God.",
        ],
        virtue: 'Humility and steadfastness',
    },

    {
        id: 'saint-jude',
        name: 'Saint Jude',
        category: 'Apostles',
        feastDay: 'October 28',
        patronage: ['desperate cases', 'hopeless causes', 'missionaries'],
        tagline: 'Hope in desperate times',
        biography: [
            "Saint Jude, also called Thaddeus, was one of the Twelve and a faithful companion of Jesus throughout His ministry. He is remembered for his tender heart, his loyalty, and his desire to bring Christ’s hope to those who felt forgotten or discouraged. In the Gospels, Jude asks Jesus how He will reveal Himself to the world, showing his concern for those who struggle to believe and his desire that all people encounter the truth of God’s love.",

            "After Pentecost, Jude traveled widely to preach the Gospel, strengthening communities facing hardship and persecution. His courage and compassion made him a beacon of hope, especially for those in desperate or seemingly hopeless situations. Tradition holds that he suffered martyrdom for the faith he proclaimed so boldly. Today, Jude is honored as the patron of impossible causes, reminding the Church that no situation is beyond God’s mercy and that trust in Christ can bring light even into the darkest moments.",
        ],
        virtue: 'Hope and trust',
    },

    {
        id: 'saint-bartholomew',
        name: 'Saint Bartholomew',
        category: 'Apostles',
        feastDay: 'August 24',
        patronage: ['dressmakers', 'cheesemakers', 'Armenia'],
        tagline: 'Apostle of truth',
        biography: [
            "Bartholomew, traditionally identified with Nathanael, was known for his sincerity and openness of heart. When first told about Jesus, he questioned whether anything good could come from Nazareth, yet he went to meet Christ with honesty and curiosity. Jesus praised him as a man without deceit, revealing the depth of his integrity. Bartholomew’s encounter with Christ transformed him into a devoted disciple who proclaimed the Gospel with clarity and conviction.",

            "After the Resurrection, Bartholomew carried the message of Christ to distant lands, including Armenia, where he is honored as one of the first to bring the faith. His preaching was marked by courage and a commitment to truth, even in the face of persecution. Tradition holds that he suffered a brutal martyrdom, sealing his witness with steadfast love. Bartholomew’s life invites believers to speak the truth with charity and to follow Christ with a sincere and fearless heart.",
        ],
        virtue: 'Truth and courage',
    },

    {
        id: 'saint-simon-zealot',
        name: 'Saint Simon the Zealot',
        category: 'Apostles',
        feastDay: 'October 28',
        patronage: ['tanners', 'curriers', 'the poor'],
        tagline: 'Zeal for the Kingdom',
        biography: [
            "Simon, called the Zealot, likely belonged to a movement known for its intense passion for God’s law and Israel’s freedom. When Jesus called him, Simon redirected that fierce energy toward the Gospel, learning to channel zeal not into conflict but into love and service. His transformation shows how Christ can take even strong human impulses and reshape them into instruments of peace, mission, and fidelity.",

            "After Pentecost, Simon traveled widely to proclaim the Kingdom of God, preaching with conviction and courage. Tradition holds that he worked alongside Jude in spreading the Gospel and strengthening communities facing hardship. His martyrdom sealed a life of passionate devotion to Christ. Simon’s witness reminds the Church that zeal, when purified by grace, becomes a powerful force for charity, perseverance, and the building of God’s Kingdom.",
        ],
        virtue: 'Zeal and service',
    },

    {
        id: 'saint-matthias',
        name: 'Saint Matthias',
        category: 'Apostles',
        feastDay: 'February 24',
        patronage: ['diocesan priests', 'the Church'],
        tagline: 'Chosen for apostolic mission',
        biography: [
            "Matthias was chosen by the early Christian community to take the place of Judas, selected after prayer and discernment to restore the number of the Twelve. His quiet presence among the disciples before his election shows that he had followed Jesus faithfully from the beginning, witnessing His ministry, death, and Resurrection. Matthias reminds the Church that God often calls ordinary, unseen disciples into extraordinary roles when their hearts are ready and willing.",

            "After being numbered among the apostles, Matthias devoted himself to preaching the Gospel and strengthening the early Church. Tradition holds that he traveled to distant regions to proclaim Christ and eventually gave his life in martyrdom. His witness highlights the importance of availability to God—being ready to serve whenever and however the Lord chooses. Matthias teaches that true greatness in the Kingdom comes from fidelity, humility, and a readiness to embrace the mission entrusted by God.",
        ],
        virtue: 'Availability to God',
    },

    {
        id: 'saint-stephen',
        name: 'Saint Stephen',
        category: 'Martyrs',
        feastDay: 'December 26',
        patronage: ['deacons', 'stewards', 'prisoners'],
        tagline: 'First martyr',
        biography: [
            "Stephen was one of the first deacons chosen by the apostles, known for his wisdom, charity, and deep faith. Filled with the Holy Spirit, he preached boldly about Christ and cared for the poor with generosity. His courage drew opposition, and he was brought before the Sanhedrin, where he proclaimed the truth of the Gospel with clarity and peace. Even as stones were raised against him, Stephen’s face shone like an angel, revealing his closeness to God.",

            "As he was stoned, Stephen entrusted his spirit to the Lord and prayed for his persecutors, becoming the first Christian martyr. His final words—asking God not to hold the sin against those killing him—echoed the mercy of Christ Himself. Stephen’s witness reminds the Church that true charity and courage flow from a heart rooted in prayer, and that forgiveness is the greatest sign of Christian love. His life continues to inspire all who serve with humility and steadfast faith.",
        ],
        virtue: 'Charity and courage',
        quote: '“Lord, do not hold this sin against them.”',
    },

    {
        id: 'saint-lawrence',
        name: 'Saint Lawrence',
        category: 'Martyrs',
        feastDay: 'August 10',
        patronage: ['archdeacons', 'the poor', 'cooks'],
        tagline: 'The cheerful martyr',
        biography: [
            "Lawrence was a deacon who served the poor with generosity and courage, making charity one of the clearest signs of his faith. He was entrusted with the care of the Church’s resources and used that responsibility to feed the hungry and support the needy with zeal and compassion.",

            "During the persecution of the Roman Empire, Lawrence was arrested and ordered to surrender the Church’s treasures. He refused to betray the faithful and instead offered himself in witness to Christ, even as he was tortured for the faith. His cheerful courage and fearless love for the poor make him a powerful model of discipleship and generosity, even in the face of death."
        ],
        virtue: 'Generosity and joy',
        quote: '“Turn me over; I am roasted enough.”',
    },
    {
        id: 'saint-maximilian-kolbe',
        name: 'Saint Maximilian Kolbe',
        category: 'Martyrs',
        feastDay: 'August 14',
        patronage: ['families', 'journalists', 'drug addicts'],
        tagline: 'Love in sacrifice',
        biography: [
            "Maximilian Kolbe was a Franciscan priest whose life was marked by prayer, apostolic zeal, and a deep love for the Blessed Virgin Mary. He founded the Militia Immaculatae and devoted himself to spreading the message of Christ through preaching, media, and missionary outreach. His ministry showed that love for God and neighbor can become a powerful witness in a world marked by suffering and confusion.",

            "During the Second World War, Kolbe was imprisoned in Auschwitz, where he offered himself in place of a fellow prisoner condemned to death. In the face of unspeakable suffering, he remained calm, compassionate, and courageous, bringing hope to those around him even in the final moments of his life. His sacrifice became a striking sign of Christ’s own self-giving love and a lasting reminder that charity is strongest at the very edge of death."
        ],
        virtue: 'Sacrifice and love',
    },
    {
        id: 'saint-john-paul-ii',
        name: 'Saint John Paul II',
        category: 'Popes',
        feastDay: 'October 22',
        patronage: 'families, youth, world youth day'.split(', '),
        tagline: 'A pilgrim of hope',
        biography: [
            "Karol Wojtyła became Pope John Paul II and carried the faith across the world with a deep conviction that every person is called to encounter Christ. He traveled as a pilgrim of hope, speaking to families, young people, workers, and nations with warmth, courage, and pastoral wisdom.",

            "His pontificate was marked by a renewed emphasis on human dignity, the sanctity of life, and the missionary call of the Church. Through his preaching, his prayers, and his personal witness, John Paul II helped countless people rediscover the beauty of truth, the meaning of suffering, and the joy of a life rooted in Christ."
        ],
        virtue: 'Hope and evangelization',
    },
    {
        id: 'saint-john-xxiii',
        name: 'Saint John XXIII',
        category: 'Popes',
        feastDay: 'October 11',
        patronage: ['council fathers', 'peace', 'families'],
        tagline: 'The good shepherd',
        biography: [
            "John XXIII was a pastor of simplicity and generosity, known for his open heart, his gentle humor, and his deep love for the faithful. He was chosen to lead the Church at a time of great change, and his first response was not fear but pastoral concern. He saw the Church as a mother who must walk with God’s people in every age.",

            "His most lasting legacy was the Second Vatican Council, which he convened with the goal of renewal and openness to the Spirit. He believed the Church should speak with clarity and charity in the modern world, helping believers encounter Christ more fully while remaining rooted in the richness of the tradition. His papal witness remains one of pastoral compassion and courageous trust in God’s providence."
        ],
        virtue: 'Pastoral charity',
    },
    {
        id: 'saint-paul-vi',
        name: 'Saint Paul VI',
        category: 'Popes',
        feastDay: 'September 26',
        patronage: ['the Gospel', 'ecumenism', 'peace'],
        tagline: 'Pilgrim of peace',
        biography: [
            "Paul VI guided the Church through a period of profound cultural and spiritual change, carrying the faith with wisdom and steadiness. He was a pastor who wanted the Church to remain faithful to the Gospel while engaging the world with charity, dialogue, and hope. His leadership was shaped by a deep sense of mission and the conviction that Christ is the center of history.",

            "During his pontificate, he continued the work of Vatican II and set the Church on a path of renewal, evangelization, and ecumenical openness. He traveled widely, spoke with courage, and sought to build bridges of peace among nations and among believers. Paul VI’s witness reminds the Church that truth can be announced with tenderness and that peace is born from fidelity to Christ and to the dignity of every person."
        ],
        virtue: 'Wisdom and peace',
    },
    {
        id: 'saint-joseph',
        name: 'Saint Joseph',
        category: 'Confessors',
        feastDay: 'March 19',
        patronage: ['workers', 'families', 'the universal Church'],
        tagline: 'Guardian of the Holy Family',
        biography: [
            "Joseph was the earthly father of Jesus and a quiet model of faith, obedience, and tenderness. He accepted the call of God without fanfare, taking Mary into his home and guarding the Child entrusted to him with courage and humility. His life teaches that holiness is often lived in hidden acts of care, duty, and trust.",

            "As protector of the Holy Family, Joseph stands as a patron of workers, families, and all who seek to live with faithfulness in ordinary life. He reminds the Church that love is not only expressed in grand gestures but in the steady commitment to protect, provide, and guide those entrusted to us. His witness is a gentle but powerful example of what it means to say yes to God in daily life."
        ],
        virtue: 'Obedience and fatherhood',
        quote: '“Do whatever he tells you.”',
    },
    {
        id: 'saint-augustine',
        name: 'Saint Augustine',
        category: 'Doctors',
        feastDay: 'August 28',
        patronage: ['theologians', 'printers', 'brewers'],
        tagline: 'Doctor of Grace',
        biography: [
            "Augustine was a brilliant bishop, teacher, and convert whose life was marked by search, struggle, and grace. Before his conversion, he wrestled with ambition, desire, and the restless longing of the human heart. In the midst of that searching, he encountered the truth of God and discovered that only God could satisfy the deepest hunger of the soul.",

            "As a bishop and writer, Augustine shaped the heart of Western Christian thought with profound reflections on sin, grace, memory, and the interior life. His works remain essential in theology, prayer, and spiritual formation, inviting believers to see that conversion is not the end of struggle but the beginning of a life shaped by mercy. His witness teaches that even the most broken lives can be healed by God’s grace."
        ],
        virtue: 'Humility and conversion',
        quote: '“Our hearts are restless until they rest in you.”',
    },
    {
        id: 'saint-thomas-aquinas',
        name: 'Saint Thomas Aquinas',
        category: 'Doctors',
        feastDay: 'January 28',
        patronage: ['students', 'theologians', 'schools'],
        tagline: 'Doctor of the Church',
        biography: [
            "Thomas Aquinas was a Dominican friar whose intellect was shaped by deep prayer and a profound love of truth. He studied the writings of Aristotle and the wisdom of the Church, seeking to show that faith and reason are not enemies but companions. His work helped build a theology that could speak clearly to the intellectual questions of the world.",

            "His great writings, especially the Summa Theologiae, continue to guide theologians, students, and believers in understanding the mystery of God, the dignity of the human person, and the moral life. Aquinas teaches that truth is never merely abstract; it leads to wisdom, holiness, and a life ordered toward God. His life remains a model of disciplined study, prayer, and charity in service of the Church."
        ],
        virtue: 'Wisdom and clarity',
        quote: '“To one who has faith, no explanation is necessary. To one without faith, no explanation is possible.”',
    },
    {
        id: 'saint-john-chrysostom',
        name: 'Saint John Chrysostom',
        category: 'Doctors',
        feastDay: 'September 13',
        patronage: ['preachers', 'speakers', 'the poor'],
        tagline: 'Golden mouth',
        biography: [
            "John Chrysostom was a brilliant bishop and preacher whose sermons drew people toward repentance, charity, and a deeper life of prayer. He was fearless in calling the faithful to conversion, yet he did so with a pastor’s heart, urging Christians to live the Gospel with sincerity and humility.",

            "His eloquence made him one of the great voices of the early Church, but his real strength came from his moral seriousness and his compassion for the poor. He reminded the faithful that discipleship is not only about doctrine but also about how we live, pray, and serve. His witness still inspires preachers and believers to speak the truth with courage and love."
        ],
        virtue: 'Truth and preaching',
    },
    {
        id: 'saint-bonaventure',
        name: 'Saint Bonaventure',
        category: 'Doctors',
        feastDay: 'July 15',
        patronage: ['theologians', 'educators', 'Franciscans'],
        tagline: 'Doctor of mystical theology',
        biography: [
            "Bonaventure was a Franciscan scholar and mystic whose writings opened the mind and heart to the love of God. He combined intellectual clarity with contemplative depth, showing that a life of study can become a path of prayer when it is guided by love and humility.",

            "His reflections on the soul’s journey toward God remain a lasting treasure of Christian spirituality. He helped believers see that theology is not cold reasoning but a way of entering more deeply into the mystery of divine love. Bonaventure’s example teaches that wisdom and contemplation belong together, especially when they lead us to union with Christ."
        ],
        virtue: 'Contemplation and wisdom',
    },
    {
        id: 'saint-anthony-padua',
        name: 'Saint Anthony of Padua',
        category: 'Doctors',
        feastDay: 'June 13',
        patronage: ['finders of lost things', 'the poor', 'travelers'],
        tagline: 'Hammer of the heretics',
        biography: [
            "Anthony of Padua was a Franciscan preacher whose sermons attracted crowds because he spoke with clarity, charity, and deep conviction. He had a remarkable ability to explain the Gospel in ways that drew people toward Christ, especially those who felt far from God. His teaching was rooted in prayer and in a love for the truth of the faith.",

            "He is remembered not only for his preaching but also for his compassion toward the poor and his faithfulness to the life of the Church. Anthony shows that holiness is not found in prestige but in humble service, prayerful obedience, and a heart ready to proclaim the mercy of God. His witness continues to inspire catechists, preachers, and ordinary believers to speak with confidence and tenderness."
        ],
        virtue: 'Zeal and charity',
    },
    {
        id: 'saint-catherine-siena',
        name: 'Saint Catherine of Siena',
        category: 'Doctors',
        feastDay: 'April 29',
        patronage: ['Italy', 'nurses', 'writers'],
        tagline: 'Doctor of the Church',
        biography: [
            "Catherine of Siena was a mystic, reformer, and spiritual writer whose life was marked by prayer, courage, and a passionate love for Christ and His Church. She lived in a time of conflict and confusion, but she trusted in God and spoke with wisdom when many around her were afraid. Her letters and guidance helped call the Church back to holiness and conversion.",

            "Her life teaches that grace can transform an ordinary person into a powerful instrument of reform and charity. Catherine’s witness shows the strength that comes from prayer, interior life, and a willingness to serve the Church even when the task is difficult. She remains a model for those who seek to bring truth, peace, and renewal to a world in need of healing."
        ],
        virtue: 'Wisdom and reform',
    },
    {
        id: 'saint-therese-lisieux',
        name: 'Saint Thérèse of Lisieux',
        category: 'Doctors',
        feastDay: 'October 1',
        patronage: ['florists', 'missionaries', 'children'],
        tagline: 'Little way',
        biography: [
            "Thérèse of Lisieux entered the Carmelite life as a young woman and discovered that holiness did not require extraordinary achievements but a heart deeply united to God. Her 'little way' taught that ordinary acts of love, done with faith and trust, can become powerful signs of grace. She saw everyday life as a place where God is present and where love can be offered simply and continually.",

            "Her writings and prayers have touched countless people because they speak with tenderness and realism about the Christian life. Thérèse shows that spiritual growth is often quiet, patient, and hidden, yet it is no less fruitful for being unseen. Her life remains a luminous example of humility, trust, and love, especially for those who feel small or unnoticed in the Church."
        ],
        virtue: 'Humility and trusting love',
        quote: '“For me, prayer is a surge of the heart.”',
    },
    {
        id: 'saint-teresa-avila',
        name: 'Saint Teresa of Ávila',
        category: 'Doctors',
        feastDay: 'October 15',
        patronage: ['writers', 'travelers', 'illness'],
        tagline: 'Doctor of prayer',
        biography: [
            "Teresa of Ávila was a Spanish mystic and reformer whose writings on prayer have shaped Christian spirituality for centuries. She described the soul’s journey toward God with honesty, depth, and courage, showing that prayer is often a path through darkness, confusion, and purification before arriving at peace and union with the Lord.",

            "She also worked energetically to reform religious life, bringing greater fidelity and charity to the Church of her time. Teresa’s witness shows that prayer is not a private luxury but a foundation for service, discernment, and holiness. She remains a guide for those who long for a deeper interior life and a more courageous love of Christ."
        ],
        virtue: 'Prayer and perseverance',
        quote: '“Let nothing disturb you.”',
    },
    {
        id: 'saint-francis-assisi',
        name: 'Saint Francis of Assisi',
        category: 'Founders',
        feastDay: 'October 4',
        patronage: ['animals', 'ecology', 'Italy'],
        tagline: 'Poor man of Assisi',
        biography: [
            "Francis left a life of comfort to embrace poverty, peace, and the Gospel. He recognized the beauty of creation as a gift from God and loved the poor, the sick, and the forgotten with a tenderness that reflected the heart of Christ. His conversion was radical, but it was rooted in a deep joy that made his simplicity radiant.",

            "He founded a religious order marked by prayer, evangelical poverty, and service to the Church and the world. Francis shows that sanctity is not found in status or wealth but in a life fully given to God and to his brothers and sisters. His love for creation and for the poor still inspires believers to live with simplicity, peace, and gratitude."
        ],
        virtue: 'Poverty and peace',
        quote: '“Preach the Gospel at all times; use words if necessary.”',
    },
    {
        id: 'saint-clare-assisi',
        name: 'Saint Clare of Assisi',
        category: 'Founders',
        feastDay: 'August 11',
        patronage: ['eyesight', 'television', 'poor'],
        tagline: 'Bride of Christ',
        biography: [
            "Clare was a companion of Francis and a woman of deep prayer, humility, and obedience. She embraced the call to a life of simplicity and left behind the comforts of her family to live for God in community with the Poor Clares. Her holiness was quiet but strong, rooted in contemplative love and fidelity to the Gospel.",

            "She became an example of how contemplative life can bear fruit in the Church through charity, silence, and trust in God’s providence. Clare’s witness reminds believers that a life of prayer can be a powerful source of strength for the whole body of Christ. Her deep love for Jesus shaped her into a model of faithful love and hidden holiness."
        ],
        virtue: 'Simplicity and prayer',
    },
    {
        id: 'saint-ignatius-loyola',
        name: 'Saint Ignatius of Loyola',
        category: 'Founders',
        feastDay: 'July 31',
        patronage: ['spiritual retreats', 'Jesuits', 'students'],
        tagline: 'Discernment and mission',
        biography: [
            "Ignatius of Loyola was a soldier turned spiritual teacher whose conversion took place through prayer, suffering, and a deep desire to serve God. After recovering from injury, he began to study the spiritual life and discern the movement of grace in ordinary circumstances. His experiences led him to develop a method of prayer and discernment that helps people listen for God’s will.",

            "He founded the Jesuit order and sent his companions into mission, education, and pastoral service with a strong sense of purpose and obedience. Ignatius teaches that God is active in daily life and that holiness grows through discernment, prayer, and generous service. His spirituality remains a source of strength for catechists, leaders, and anyone seeking to live with intentional faith."
        ],
        virtue: 'Discernment and service',
    },
    {
        id: 'saint-dominic',
        name: 'Saint Dominic',
        category: 'Founders',
        feastDay: 'August 8',
        patronage: ['astronomers', 'the Dominican Order', 'preachers'],
        tagline: 'Light through study',
        biography: [
            "Dominic was a priest and preacher whose life was shaped by prayer, learning, and a burning desire to bring people to Christ. He saw the need for a new form of preaching that would combine deep faith with careful study and a generous love for souls. He wanted the Church to proclaim the truth of the Gospel with clarity and charity.",

            "He founded the Dominican Order to serve the Church through preaching, teaching, and a life of contemplation. Dominic’s witness shows that study and prayer are not opposed to holiness but are part of a life wholly given to God. His legacy continues in communities dedicated to truth, charity, and the mission of evangelization."
        ],
        virtue: 'Study and preaching',
    },
    {
        id: 'saint-vincent-de-paul',
        name: 'Saint Vincent de Paul',
        category: 'Founders',
        feastDay: 'September 27',
        patronage: ['Charity', 'social workers', 'the poor'],
        tagline: 'Servant of the poor',
        biography: [
            "Vincent de Paul devoted his life to the poor, the sick, and the suffering, organizing charity in practical and lasting ways. He saw service to the vulnerable as an essential expression of the Gospel and worked to build institutions that would care for people with dignity and compassion. His approach to charity was both personal and systematic.",

            "His life shows that mercy is not only a feeling but a concrete commitment to relieve suffering and restore hope. Vincent’s witness inspires believers to live faith in service, especially by accompanying those who are forgotten, abandoned, or in need. He remains a model of practical charity shaped by prayer, patience, and love for the least among us."
        ],
        virtue: 'Compassion and service',
    },
    {
        id: 'saint-mother-teresa',
        name: 'Mother Teresa',
        category: 'Missionaries',
        feastDay: 'September 5',
        patronage: ['the poor', 'missionaries', 'charity'],
        tagline: 'Serving Jesus in the poor',
        biography: [
            "Mother Teresa founded the Missionaries of Charity and devoted herself to serving the poorest of the poor in Kolkata and beyond. She saw Christ present in every suffering person and treated each encounter as a sacred call to love. Her life was marked by simplicity, humility, and a deep trust in God’s loving providence.",

            "Her witness taught the Church that charity is not measured by grand gestures alone but by a steady willingness to serve with love. Mother Teresa’s example continues to inspire countless people to see the poor as brothers and sisters, not as strangers. Her life remains a vivid sign that love becomes visible when it is offered without condition and without hesitation."
        ],
        virtue: 'Mercy and self-giving love',
        quote: '“Love begins at home.”',
    },
    {
        id: 'saint-francis-xavier',
        name: 'Saint Francis Xavier',
        category: 'Missionaries',
        feastDay: 'December 3',
        patronage: ['missionaries', 'foreign missions', 'India'],
        tagline: 'Apostle of the East',
        biography: [
            "Francis Xavier was a Jesuit missionary whose zeal for the Gospel led him across oceans and cultures to bring Christ to Asia. He traveled with great determination, preaching, catechizing, and serving with a generosity that often cost him immense personal sacrifice. His missionary heart was shaped by prayer and an unwavering hope in the power of God.",

            "His life shows that evangelization is not limited by geography, language, or difficulty. Francis Xavier’s witness teaches that the Church must go forth with courage, humility, and tenderness, trusting that the Spirit is active even where the soil seems difficult. He remains a model for missionaries who seek to share the faith with boldness and compassion."
        ],
        virtue: 'Mission and courage',
    },
    {
        id: 'saint-patrick',
        name: 'Saint Patrick',
        category: 'Missionaries',
        feastDay: 'March 17',
        patronage: ['Ireland', 'missionaries', 'the poor'],
        tagline: 'Light in Ireland',
        biography: [
            "Patrick was a missionary to Ireland whose life was transformed by grace after a period of captivity and exile. He returned to the island with the Gospel, proclaiming Christ openly and courageously in a land that had not yet known the faith. He became a shepherd of a people whose faith would one day deepen through the witness of saints and communities of prayer.",

            "His mission was not only to teach doctrine but to help a people discover the love of God. Patrick’s life reminds the Church that evangelization often begins with trust, perseverance, and a willingness to be used by God in unexpected ways. He remains a symbol of hope, missionary courage, and the power of grace to transform a culture."
        ],
        virtue: 'Evangelization and perseverance',
    },
    {
        id: 'saint-joachim',
        name: 'Saint Joachim',
        category: 'Mothers',
        feastDay: 'July 26',
        patronage: ['fathers', 'grandparents', 'families'],
        tagline: 'Father of Mary',
        biography: [
            "Joachim was the father of Mary and a model of faithful parenthood, living quietly but steadily in the service of his family and God. He teaches that holiness is often formed in the ordinary rhythms of work, prayer, and care for loved ones. His life reminds us that discipleship begins at home and grows through steady faithfulness.",

            "The Church honors Joachim as a father who prepared the way for the greatest gift of all: the mother of Jesus. His witness teaches that parents and grandparents are called to form the hearts of their children in faith, prayer, and love. In this way, his life becomes a blessing for families who seek to live as a domestic church."
        ],
        virtue: 'Family faith',
    },
    {
        id: 'saint-anne',
        name: 'Saint Anne',
        category: 'Mothers',
        feastDay: 'July 26',
        patronage: ['mothers', 'grandmothers', 'housewives'],
        tagline: 'Mother of Mary',
        biography: [
            "Anne was the mother of Mary and a joyful example of maternal faith and care. She lived in the ordinary circumstances of family life, showing that holiness is often formed in daily tasks, prayer, and love for one’s children. Her life speaks to the dignity of motherhood as a vocation shaped by God’s grace.",

            "She is remembered not for public fame but for the quiet strength of a faithful heart. Anne’s witness teaches that mothers and grandmothers can become bearers of grace through patient love, trust in God, and a home rooted in prayer. Her example remains a blessing for families who seek to nurture faith in the midst of daily life."
        ],
        virtue: 'Maternal love and prayer',
    },
    {
        id: 'saint-brigid-kildare',
        name: 'Saint Brigid of Kildare',
        category: 'Mothers',
        feastDay: 'February 1',
        patronage: ['Ireland', 'midwives', 'new mothers'],
        tagline: 'Light of Ireland',
        biography: [
            "Brigid of Kildare was a holy woman of charity, wisdom, and practical generosity. She served the poor with compassion and founded a monastic community that became a place of prayer, hospitality, and service. Her life showed that holiness is lived not only in contemplation but in caring for the needs of others with love.",

            "She is venerated for her generous heart and for the way she brought Christ’s mercy into everyday life. Brigid reminds the Church that faith is not meant to be hidden but to shine through hospitality, kindness, and a willingness to serve. Her witness continues to inspire women and families to live with open hands and generous hearts."
        ],
        virtue: 'Charity and hospitality',
    },
    {
        id: 'saint-agnes',
        name: 'Saint Agnes',
        category: 'Virgins',
        feastDay: 'January 21',
        patronage: ['young girls', 'victims of violence', 'the poor'],
        tagline: 'Pure and courageous',
        biography: [
            "Agnes was a young Christian martyr whose courage flowed from a deep love for Christ and a refusal to compromise her faith. At a young age, she chose purity and fidelity over earthly security, showing that the call to holiness can be lived with remarkable strength even in the midst of danger. Her witness left a powerful impression on the Christian community.",

            "The Church honors her as a model of chastity, courage, and joyful witness. Agnes teaches that purity is not simply the absence of sin but a heart fully given to God. Her life shows that holiness can shine in a young person whose love for Christ is stronger than fear."
        ],
        virtue: 'Purity and courage',
    },
    {
        id: 'saint-catherine-alexandria',
        name: 'Saint Catherine of Alexandria',
        category: 'Virgins',
        feastDay: 'November 25',
        patronage: ['philosophers', 'students', 'scholars'],
        tagline: 'Defender of the faith',
        biography: [
            "Catherine of Alexandria was a learned and courageous young woman whose faith was strong enough to withstand intellectual and political pressure. She defended the Christian message before pagan authorities with wisdom, clarity, and conviction, refusing to be intimidated by power or ridicule. Her life reveals the beauty of faith informed by reason and rooted in truth.",

            "She remains a model for students and scholars who seek to live their intellect in service of God and the truth. Catherine’s witness shows that wisdom is not only about learning but about courageously standing for what is just and true. Her life continues to inspire those who seek to defend faith with both intelligence and charity."
        ],
        virtue: 'Wisdom and courage',
    },
    {
        id: 'saint-rose-lima',
        name: 'Saint Rose of Lima',
        category: 'Virgins',
        feastDay: 'August 23',
        patronage: ['Peru', 'florists', 'the sick'],
        tagline: 'Bloom of holiness',
        biography: [
            "Rose of Lima lived a life of prayer, restraint, and hidden service in Peru, offering her daily suffering to God with profound humility. She became known for her quiet holiness, her love for the poor, and her willingness to endure discomfort in order to draw closer to Christ. Her life shows that sanctity often grows in ordinary acts of obedience and self-giving.",

            "She became a sign that God can work through hidden, ordinary lives with extraordinary grace. Rose’s witness teaches that holiness is not measured by public recognition but by a heart fully offered to God. Her example invites believers to value simplicity, charity, and quiet faithfulness in everyday life."
        ],
        virtue: 'Humility and service',
    },
    {
        id: 'saint-maria-goretti',
        name: 'Saint Maria Goretti',
        category: 'Martyrs',
        feastDay: 'July 6',
        patronage: ['young people', 'victims of violence', 'purity'],
        tagline: 'Martyr of purity',
        biography: [
            "Maria Goretti was a young girl whose life was cut short when she refused to surrender her purity and trust in God. Her witness became a powerful sign that innocence and courage can shine even in the midst of great violence and fear. She offered her life in faithfulness to Christ rather than compromise.",

            "Her martyrdom has inspired countless people to see purity as a treasure of the heart and a witness to God’s love. Maria Goretti’s example teaches that faithfulness to the truth is often costly, but it reveals the strength of grace. Her life remains a source of encouragement for young people and for those who seek to live with integrity and courage."
        ],
        virtue: 'Purity and forgiveness',
    },
    {
        id: 'saint-rita-cascia',
        name: 'Saint Rita of Cascia',
        category: 'Confessors',
        feastDay: 'May 22',
        patronage: ['impossible causes', 'married women', 'suffering'],
        tagline: 'Woman of patience',
        biography: [
            "Rita of Cascia endured suffering with a remarkable faith that was tested by family pain, illness, and loss. Rather than turning away from God, she embraced her crosses with patience and prayer, discovering that every wound can become a place where grace enters and transforms the heart.",

            "Her life was marked by forgiveness, perseverance, and a deep trust in Divine Providence. Rita shows that the path of holiness is not always easy, but it becomes luminous when it is united to Christ’s suffering and love. She remains a patron of those who carry burdens that seem impossible to bear."
        ],
        virtue: 'Patience and forgiveness',
    },
    {
        id: 'saint-charles-borromeo',
        name: 'Saint Charles Borromeo',
        category: 'Confessors',
        feastDay: 'November 4',
        patronage: ['seminarians', 'bishops', 'catechists'],
        tagline: 'Pastor of reform',
        biography: [
            "Charles Borromeo was a bishop whose leadership and charity strengthened the Church in a time of crisis and confusion. He was deeply committed to catechesis, pastoral care, and the spiritual formation of clergy and lay people. His life shows how a leader can serve faith and reform with humility, diligence, and love.",

            "He worked to renew the Church in practical ways, especially by supporting formation, preaching, and the care of the poor. Charles reminds the Church that true reform is rooted in prayer, pastoral attention, and a genuine desire to lead people closer to Christ. His witness continues to inspire bishops, catechists, and all who serve the faith with zeal."
        ],
        virtue: 'Leadership and charity',
    },
    {
        id: 'saint-nicholas',
        name: 'Saint Nicholas',
        category: 'Confessors',
        feastDay: 'December 6',
        patronage: ['children', 'sailors', 'merchants'],
        tagline: 'Giver of mercy',
        biography: [
            "Nicholas was a bishop known for his generosity, especially toward children, the poor, and those in urgent need. He is remembered for acts of mercy that revealed the heart of Christian charity—quiet, practical, and loving. His kindness did not seek recognition, but it left a lasting mark on those who received his help.",

            "His life offers a beautiful witness that mercy is often lived in small, concrete acts of care. Nicholas reminds the Church that generosity is a Christian duty and that love of neighbor is a visible sign of love for God. His example continues to inspire acts of kindness, especially toward those who are vulnerable or overlooked."
        ],
        virtue: 'Generosity and kindness',
    },
    {
        id: 'saint-faustina-kowalska',
        name: 'Saint Faustina Kowalska',
        category: 'Mystics',
        feastDay: 'October 5',
        patronage: ['Divine Mercy', 'the sick', 'the poor'],
        tagline: 'Messenger of Divine Mercy',
        biography: [
            "Faustina Kowalska was a Polish nun whose life was shaped by prayer, suffering, and the mercy of God. She received private revelations about the Divine Mercy and was called to share the message that God’s love is greater than sin, fear, and despair. Her trust in Christ became a living testimony to the merciful heart of the Lord.",

            "Her mission was simple but profound: to invite the faithful to trust in God and to respond with love and mercy toward others. Faustina’s witness teaches that holiness is not distant from human weakness but can be lived in trust, repentance, and daily surrender to the Lord. Her life remains a powerful reminder that the mercy of God is always available to the repentant heart."
        ],
        virtue: 'Trust and mercy',
        quote: '“Jesus, I trust in you.”',
    },
    {
        id: 'saint-padre-pio',
        name: 'Saint Padre Pio',
        category: 'Mystics',
        feastDay: 'September 23',
        patronage: ['the sick', 'families', 'pilgrims'],
        tagline: 'Stigmata and prayer',
        biography: [
            "Padre Pio was a Capuchin friar whose life was marked by deep prayer, sacrifice, and a remarkable union with the suffering Christ. He bore the stigmata and became known for a pastoral presence that drew many people to confession, prayer, and trust in God’s mercy. His witness showed that holiness can be lived in a life of hidden suffering and constant prayer.",

            "He encouraged the faithful to take seriously the gift of the sacraments, the power of prayer, and the need to offer suffering with love. Padre Pio’s example teaches that even the hidden burdens of life can become fruitful when they are united to Christ’s redemptive love. His spiritual fatherhood continues to inspire many to trust God in every trial."
        ],
        virtue: 'Prayer and suffering united to Christ',
    },
    {
        id: 'saint-gemma-galgani',
        name: 'Saint Gemma Galgani',
        category: 'Mystics',
        feastDay: 'April 11',
        patronage: ['students', 'the sick', 'children'],
        tagline: 'Hidden suffering, radiant grace',
        biography: [
            "Gemma Galgani was a young mystic whose life was marked by prayer, humility, and a deep love for Christ. She suffered physically and spiritually, yet she offered each trial with a serene faith and a tenderness that spoke of profound union with God. Her life reveals that sanctity can flourish even in hidden and painful circumstances.",

            "She remained simple, obedient, and deeply devoted to the will of God, showing that holiness is not built on public recognition but on fidelity and trust. Gemma’s witness invites the faithful to see hidden suffering as a place where grace can become visible and where love can grow quietly. Her example continues to encourage those who seek peace in the midst of trials."
        ],
        virtue: 'Humility and silent prayer',
    },
    {
        id: 'saint-hildegard-bingen',
        name: 'Saint Hildegard of Bingen',
        category: 'Mystics',
        feastDay: 'September 17',
        patronage: ['music', 'nature', 'writers'],
        tagline: 'Visionary woman of wisdom',
        biography: [
            "Hildegard of Bingen was a Benedictine abbess, composer, writer, and visionary whose life was full of creativity and spiritual insight. She listened deeply to God and expressed her wisdom through music, writings, and spiritual guidance. Her life shows that contemplation and creativity can be united in service of the Church and the world.",

            "She remains one of the great women of medieval Christianity, known for her ability to combine practical wisdom with profound spiritual vision. Hildegard teaches that the soul is called to recognize God’s presence in nature, in prayer, and in the ordinary course of life. Her example continues to inspire people who desire to live with both intellectual depth and spiritual openness."
        ],
        virtue: 'Wisdom and creativity',
    },
    {
        id: 'saint-francis-de-sales',
        name: 'Saint Francis de Sales',
        category: 'Doctors',
        feastDay: 'January 24',
        patronage: ['writers', 'journalists', 'speakers'],
        tagline: 'Gentle teacher of the heart',
        biography: [
            "Francis de Sales was a bishop and writer who taught that holiness grows through love, gentleness, and a patient relationship with God. He believed that the Christian life is not built through harshness but through trust, charity, and a heart open to God’s grace. His writings became a source of comfort and guidance for many.",

            "He was known for his pastoral wisdom and his ability to attract people to Christ without fear or intimidation. Francis de Sales reminds the Church that truth is most powerful when it is spoken with charity and clarity. His witness remains a model for catechists, pastors, and all who seek to lead others gently toward the faith."
        ],
        virtue: 'Gentleness and charity',
    },
    {
        id: 'saint-mary-magdalene',
        name: 'Saint Mary Magdalene',
        category: 'Confessors',
        feastDay: 'July 22',
        patronage: ['penitents', 'women', 'the faithful'],
        tagline: 'Transformed by mercy',
        biography: [
            "Mary Magdalene was a devoted follower of Jesus who was healed and transformed by his mercy. She remained faithful in the midst of confusion and sorrow, and she was among the first to witness the Resurrection. Her life shows that no one is beyond the reach of God’s love, no matter how broken or burdened they may feel.",

            "She became a powerful sign of repentance, gratitude, and love. Mary Magdalene teaches that conversion is not a loss of dignity but the beginning of a deeper intimacy with Christ. Her witness continues to encourage people to trust in the mercy of God and to respond with love, devotion, and hope."
        ],
        virtue: 'Repentance and love',
    },
    {
        id: 'saint-joan-arc',
        name: 'Saint Joan of Arc',
        category: 'Confessors',
        feastDay: 'May 30',
        patronage: ['France', 'soldiers', 'the faithful'],
        tagline: 'Courage in faith',
        biography: [
            "Joan of Arc responded to a call from God with a courageous and unwavering faith, even in the midst of war, fear, and uncertainty. She trusted the voice of God and stepped forward to serve her country and her faith with remarkable conviction. Her life reveals that discernment and courage are often inseparable when one is obedient to God.",

            "Her witness was not simply about military action but about a deep interior conviction that God was guiding her. Joan teaches that courage is not the absence of fear but the willingness to act faithfully in the light of God’s call. Her story remains a powerful reminder that faith can shape a life even in times of conflict and confusion."
        ],
        virtue: 'Courage and discernment',
    },
    {
        id: 'saint-louis-ix',
        name: 'Saint Louis IX',
        category: 'Confessors',
        feastDay: 'August 25',
        patronage: ['France', 'kings', 'the poor'],
        tagline: 'King in justice',
        biography: [
            "Louis IX was a Christian king whose reign was marked by justice, humility, and a serious concern for the poor. He sought to govern with wisdom and charity, recognizing that authority is meant to serve the common good and protect the vulnerable. His life shows that leadership can be a vocation of service rather than power.",

            "He was known for his faithfulness to prayer and for his commitment to works of mercy, especially in times of crisis. Louis reminds believers that public responsibility is an opportunity to serve the dignity of every person and to act with justice, peace, and charity. His example continues to inspire leaders who seek to govern with moral conviction and compassion."
        ],
        virtue: 'Justice and charity',
    },
    {
        id: 'saint-elizabeth-ann-seton',
        name: 'Saint Elizabeth Ann Seton',
        category: 'Founders',
        feastDay: 'January 4',
        patronage: ['school teachers', 'Catholic schools', 'families'],
        tagline: 'Education in faith',
        biography: [
            "Elizabeth Ann Seton was the first American-born saint and the founder of the Sisters of Charity. She brought faith, education, and service together in a way that shaped Catholic life in the United States. Her witness shows that ordinary family life and the mission of the Church can be deeply united through loving commitment and trust in God.",

            "Her work in education and charity helped create a spirit of service that continues to shape Catholic schools and communities. Seton’s life teaches that holiness can be lived in the midst of family responsibilities, spiritual struggle, and practical mission. She remains an inspiration for those who seek to nurture faith through education, compassion, and steady devotion."
        ],
        virtue: 'Trust and service',
    },
    {
        id: 'saint-josemaria-escriva',
        name: 'Saint Josemaría Escrivá',
        category: 'Founders',
        feastDay: 'June 26',
        patronage: ['workers', 'the laity', 'Christian life'],
        tagline: 'Ordinary life, holy work',
        biography: [
            "Josemaría Escrivá encouraged the faithful to discover holiness in ordinary work, family life, and daily responsibilities. He taught that the secular world is not outside the sphere of grace but a place where Christians can live out their vocation with faith, hope, and charity. His message was simple and profound: every honest task can become an act of love.",

            "His pastoral ministry emphasized the dignity of the laity and the need to sanctify everyday life through prayer, duty, and service. Josemaría’s example continues to inspire people to see their work and relationships as opportunities for God’s presence. His life remains a witness to the beauty of sanctifying ordinary life with radical love."
        ],
        virtue: 'Sanctification of daily life',
    },
    {
        id: 'saint-pio-of-pietrelcina',
        name: 'Saint Pio of Pietrelcina',
        category: 'Mystics',
        feastDay: 'September 23',
        patronage: ['the sick', 'conscience', 'families'],
        tagline: 'Mystic of the cross',
        biography: [
            "Padre Pio of Pietrelcina was a beloved Franciscan priest whose life was marked by prayer, suffering, and a deep pastoral presence. He inspired people to trust in God through the sacraments, especially confession, and his spiritual fatherhood drew many to conversion. His life embodied a profound union with Christ in the midst of human weakness.",

            "He accepted the burdens of suffering with serenity and offered them as a participation in the cross of Christ. Pio’s witness teaches that prayer and sacrifice are not separate from the Christian life but are central to it. His memory remains a source of comfort for the sick, the suffering, and all who seek strength in God."
        ],
        virtue: 'Prayer and sacrifice',
    },
    {
        id: 'saint-john-baptist',
        name: 'Saint John the Baptist',
        category: 'Confessors',
        feastDay: 'June 24',
        patronage: ['baptism', 'preachers', 'mothers'],
        tagline: 'Voice in the wilderness',
        biography: [
            "John the Baptist prepared the way for Jesus by calling people to repentance and urging them to turn toward the Lord with sincerity. He lived in the wilderness, speaking clearly and boldly in a culture that had grown spiritually complacent. His witness reminds the Church that truth is often proclaimed with urgency and courage.",

            "He is a model of honesty, humility, and unwavering faithfulness to God’s mission. John teaches that conversion is not only a personal act but a way of preparing the heart to receive Christ. His life remains a powerful sign that God raises up voices to call the world back to repentance and hope."
        ],
        virtue: 'Repentance and courage',
    },
    {
        id: 'saint-david',
        name: 'Saint David',
        category: 'Confessors',
        feastDay: 'December 29',
        patronage: ['Wales', 'poets', 'musicians'],
        tagline: 'A heart after God',
        biography: [
            "David was a king, songwriter, and man of deep prayer whose life reveals both human weakness and divine mercy. He was a musician of the heart, expressing his joys, fears, and repentance in psalms that still guide the Church in prayer. His faith was tested in times of triumph and failure, yet he repeatedly returned to God with honesty and trust.",

            "His life teaches that repentance is not a sign of failure but a path to grace. David remains a rich model for prayer, humility, and the willingness to be restored by God. His psalms continue to shape the spiritual life of believers, calling them to worship, lament, gratitude, and hope."
        ],
        virtue: 'Prayer and repentance',
    },
    {
        id: 'saint-michael-archangel',
        name: 'Saint Michael the Archangel',
        category: 'Confessors',
        feastDay: 'September 29',
        patronage: ['police', 'soldiers', 'the sick'],
        tagline: 'Defender of the Church',
        biography: [
            "Saint Michael the Archangel is honored as the protector of God’s people and a symbol of spiritual strength. In Scripture and tradition, he stands as a defender of the faithful, resisting evil and guarding the Church from forces that oppose God’s will. His witness calls believers to vigilance, courage, and trust in divine protection.",

            "His image is a reminder that the spiritual life is not fought only in words but in prayer, discernment, and perseverance. Michael teaches the faithful to stand firm in truth, reject fear, and rely on God’s strength. He remains a powerful patron for those who serve, defend, and protect others in the name of justice and charity."
        ],
        virtue: 'Courage and vigilance',
    },
    {
        id: 'saint-joseph-calasanctius',
        name: 'Saint Joseph Calasanctius',
        category: 'Founders',
        feastDay: 'August 25',
        patronage: ['schoolchildren', 'teachers', 'youth'],
        tagline: 'Teacher of the poor',
        biography: [
            "Joseph Calasanctius founded a school system for poor children and entrusted his work to God’s providence. He believed education was a means of restoring dignity and opening the door to a fuller life. His service was rooted in charity and a deep trust that every child is worthy of care, opportunity, and hope.",

            "His life bears witness to the power of education and compassion to transform lives. Calasanctius teaches that caring for children is not only a social task but a spiritual vocation. Through his work, the Church is reminded that every effort to form young people with faith and dignity is a work of love."
        ],
        virtue: 'Education and charity',
    },
    {
        id: 'saint-louis-gonzaga',
        name: 'Saint Louis Gonzaga',
        category: 'Confessors',
        feastDay: 'June 21',
        patronage: ['students', 'youth', 'Jesuit novices'],
        tagline: 'Holy youth',
        biography: [
            "Louis Gonzaga was a young Jesuit known for his holiness, discipline, and humility. Even in his short life, he showed that grace can bear great fruit when a person is fully united to God. His devotion, obedience, and quiet charity made him a model of youthful faith and purity.",

            "His witness reminds the Church that youth is not a time of delay but a season of grace. Louis teaches that a life of prayer, sacrifice, and devotion can shape a person for mission even from a young age. His example continues to inspire students and young people who long to live with integrity, obedience, and love for Christ."
        ],
        virtue: 'Purity and obedience',
    },
]
