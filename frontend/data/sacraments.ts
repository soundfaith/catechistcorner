export const sacramentCategories = ['Initiation', 'Healing', 'Service'] as const

export type SacramentCategory = (typeof sacramentCategories)[number]

export type Sacrament = {
  id: string
  name: string
  category: SacramentCategory
  summary: string
  whatItIs: string
  form: string
  matter: string
  rite: string[]
  sacramentals: string[]
  notes: string[]
  image?: string
}

export const sacraments: Sacrament[] = [
  {
    id: 'baptism',
    name: 'Baptism',
    category: 'Initiation',
    summary: 'The gateway into the Christian life, cleansing us of original sin and incorporating us into the Church.',
    whatItIs: 'Baptism is the sacrament of regeneration and incorporation into the Church. It marks the beginning of the Christian life and gives us the grace to be adopted as children of God.',
    form: 'The celebrant says, “I baptize you in the name of the Father, and of the Son, and of the Holy Spirit.”',
    matter: 'The matter is water, poured or sprinkled over the person’s head or body.',
    image: 'baptism.png',
    rite: [
      'The priest or deacon invokes the Holy Trinity and asks the parents and godparents to profess faith in Christ.',
      'The child is signed with the cross, reminding us that Christ has claimed the person for Himself.',
      'Water is poured or sprinkled while the baptismal formula is spoken.',
      'The baptized person is anointed with chrism and given a white garment and a candle, symbols of new life and the light of Christ.',
    ],
    sacramentals: ['Holy water', 'baptismal candle', 'white garment', 'blessed oil'],
    notes: [
      'Baptism removes original sin and all personal sins when received in the proper disposition.',
      'It is the foundation of Christian identity, opening the way to the other sacraments.',
    ],
  },
  {
    id: 'confirmation',
    name: 'Confirmation',
    category: 'Initiation',
    summary: 'The sacrament that strengthens the gifts of the Holy Spirit and calls us to live our faith more boldly.',
    whatItIs: 'Confirmation completes the grace of Baptism by sealing the baptized with the gift of the Holy Spirit and deepening their union with Christ.',
    form: 'The bishop lays his hand on the person’s head and anoints them with chrism while saying, “Be sealed with the gift of the Holy Spirit.”',
    matter: 'The matter is sacred chrism and the imposition of the bishop’s hand.',
    image: 'confirmation.png',
    rite: [
      'The candidate is presented to the bishop and renounces sin and professes faith.',
      'The bishop extends his hand in prayer over the candidates, invoking the Holy Spirit.',
      'Chrism is applied on the forehead with the sign of the cross.',
      'The newly confirmed Christian is sent forth to live as a fearless witness of Christ.',
    ],
    sacramentals: ['chrism', 'basilica or parish church blessing', 'special prayers for courage and fidelity'],
    notes: [
      'Confirmation strengthens the gifts of the Holy Spirit received at Baptism.',
      'It is a sacrament of mission, calling the confirmed to defend the faith and live apostolic witness.',
    ],
  },
  {
    id: 'eucharist',
    name: 'Eucharist',
    category: 'Initiation',
    summary: 'The sacrament of Christ’s real presence, nourishing the Church with His Body and Blood.',
    whatItIs: 'The Eucharist is the sacrament of the Body and Blood of Christ, celebrated in the Mass and received as spiritual food for the journey of faith.',
    form: 'The priest repeats Jesus’ words of institution: “This is My Body... This is the chalice of My Blood...”',
    matter: 'The matter is bread and wine, which are changed into the Body and Blood of Christ through the power of the Holy Spirit and the priest’s words of consecration.',
    image: 'eucharist.png',
    rite: [
      'The gifts of bread and wine are brought to the altar.',
      'The priest prays the Eucharistic Prayer, giving thanks to the Father and recalling Christ’s Passion, Resurrection, and Ascension.',
      'The bread and wine are consecrated and lifted in worship.',
      'The faithful receive Holy Communion, nourished by Christ Himself.',
    ],
    sacramentals: ['candles at the altar', 'incense', 'the liturgy of the word', 'holy communion as a frequent sacramental practice'],
    notes: [
      'The Eucharist unites the Church with Christ and with one another in the one Body of Christ.',
      'It is both the greatest sacrifice and the greatest gift given to the faithful.',
    ],
  },
  {
    id: 'reconciliation',
    name: 'Penance and Reconciliation',
    category: 'Healing',
    summary: 'The sacrament of mercy that restores us to friendship with God through sorrow, confession, and absolution.',
    whatItIs: 'This sacrament offers forgiveness for sins committed after Baptism and renews grace, peace, and reconciliation with God and the Church.',
    form: 'The priest pronounces the words of absolution: “God, the Father of mercies, through the death and resurrection of his Son ... has reconciled you to Himself and sent the Holy Spirit among you.”',
    matter: 'The matter includes the penitent’s contrition, confession of sins, and the priest’s absolution.',
    image: 'reconciliation.png',
    rite: [
      'The penitent begins with prayer and an examination of conscience.',
      'They confess sins to the priest and express sorrow for them.',
      'The priest gives counsel, a penance, and absolution.',
      'The penitent leaves reconciled with God and strengthened to live a renewed life.',
    ],
    sacramentals: ['act of contrition', 'prayer of sorrow', 'a daily examination of conscience', 'the rosary for healing and conversion'],
    notes: [
      'The sacrament is both a remedy for sin and spiritual medicine for the soul.',
      'It restores the grace lost by mortal sin and strengthens the faithful against temptation.',
    ],
  },
  {
    id: 'anointing-of-the-sick',
    name: 'Anointing of the Sick',
    category: 'Healing',
    summary: 'The sacrament of comfort and grace for those who are seriously ill, frail, or near death.',
    whatItIs: 'This sacrament gives spiritual strength, peace, courage, and sometimes physical healing when it is God’s will, and it unites suffering with Christ’s passion.',
    form: 'The priest anoints the forehead and hands of the sick person with holy oil while praying for the grace of the Holy Spirit.',
    matter: 'The matter is holy oil blessed by the bishop, used in the rite of anointing.',
    image: 'anointing_of_the_sick.png',
    rite: [
      'The sick person, or family, calls for the priest and invites the sacrament.',
      'The priest offers prayers for healing, forgiveness, and strength.',
      'He anoints the sick person with oil on the forehead and hands.',
      'The person is spiritually supported and entrusted to the Lord’s mercy and love.',
    ],
    sacramentals: ['holy oil', 'prayers of the Church', 'the presence of family and parish community', 'the anointing itself as a sign of hope'],
    notes: [
      'The sacrament is especially powerful in times of fear, suffering, and uncertainty.',
      'It brings Christ’s healing presence and reminds the faithful that God is near in every trial.',
    ],
  },
  {
    id: 'holy-orders',
    name: 'Holy Orders',
    category: 'Service',
    summary: 'The sacrament through which Christ calls men to serve the Church as bishops, priests, and deacons.',
    whatItIs: 'Holy Orders is the sacrament by which the Church confers the authority and grace to lead, teach, and sanctify the faithful in Christ’s name.',
    form: 'The bishop lays his hands on the candidate and prays the words of consecration, giving the gifts proper to the order being received.',
    matter: 'The matter is the imposition of hands by the bishop and the prayer of consecration.',
    image: 'holy_orders.png',
    rite: [
      'The candidate is presented to the bishop by the Church and is examined for readiness to serve.',
      'The bishop lays his hands on the man and invokes the Holy Spirit for the office to be received.',
      'The newly ordained is given the appropriate vestments and ministries for the service of the Church.',
      'The man is then sent to teach, preach, shepherd, and celebrate the sacraments.',
    ],
    sacramentals: ['the stole', 'the chasuble', 'the Book of the Gospels', 'prayerful support of the parish community'],
    notes: [
      'The sacrament configures the ordained to Christ the Head and Shepherd of the Church.',
      'It is a call to service, not to domination or personal prestige.',
    ],
  },
  {
    id: 'matrimony',
    name: 'Matrimony',
    category: 'Service',
    summary: 'The sacrament of covenant love in which a man and woman become a permanent, faithful, and fruitful partnership.',
    whatItIs: 'Matrimony is the sacrament by which a baptized man and woman covenant to love each other faithfully and to be open to children, reflecting Christ’s love for the Church.',
    form: 'The couple exchange their vows before God and the Church.',
    matter: 'The matter is the mutual consent of the spouses, expressed through their vows and covenantal commitment.',
    image: 'matrimony.png',
    rite: [
      'The couple publicly expresses their consent in the presence of the priest, witnesses, and the Christian community.',
      'The priest blesses the union and prays for God’s grace upon the marriage.',
      'The couple receives the ring or other symbol of mutual fidelity and commitment.',
      'The marriage is witnessed and celebrated as a living sign of Christ’s covenant with His people.',
    ],
    sacramentals: ['rings', 'the wedding candle', 'the nuptial blessing', 'prayers for a fruitful and faithful household'],
    notes: [
      'Marriage is a covenant of love, fidelity, and fruitfulness in the service of family and Church.',
      'The sacrament forms a domestic church where faith is lived, prayed, and handed on to children.',
    ],
  },
]
