exports.seed = (knex) => {
  // Deletes ALL existing entries
  return knex('Cards')
    .del()
    .then(() => {
      // Inserts seed entries
      return knex('Cards').insert([
        {
          id: 100,
          name: 'The Fool',
          suit: 'none',
          value: '0',
          image: '/images/tarot-fool.jpg',
          type: 'Major',
          upright: 'innocence, new beginnings, free spirit',
          reversed: 'recklessness, taken advantage of, inconsideration',
        },
        {
          id: 101,
          name: 'The Magician',
          suit: 'none',
          value: '1',
          image: '/images/tarot-magician.jpg',
          type: 'Major',
          upright: 'willpower, desire, creation, manifestation',
          reversed: 'trickery, illusions, out of touch',
        },
        {
          id: 102,
          name: 'The High Priestess',
          suit: 'none',
          value: '2',
          image: '/images/tarot-highpriestess.jpg',
          type: 'Major',
          upright: 'intuitive, unconscious, inner voice',
          reversed: 'lack of center, lost inner voice, repressed feelings',
        },
        {
          id: 103,
          name: 'The Empress',
          suit: 'none',
          value: '3',
          image: '/images/tarot-empress.jpg',
          type: 'Major',
          upright: 'motherhood, fertility, nature',
          reversed: 'dependence, smothering, emptiness, nosiness',
        },
        {
          id: 104,
          name: 'The Emperor',
          suit: 'none',
          value: '4',
          image: '/images/tarot-emperor.jpg',
          type: 'Major',
          upright: 'authority, structure, control, fatherhood',
          reversed: 'tyranny, rigidity, coldness',
        },
        {
          id: 105,
          name: 'The Hierophant',
          suit: 'none',
          value: '5',
          image: '/images/tarot-hierophant.jpg',
          type: 'Major',
          upright: 'tradition, conformity, morality, ethics',
          reversed: 'rebellion, subversiveness, new approaches',
        },
        {
          id: 106,
          name: 'The Lovers',
          suit: 'none',
          value: '6',
          image: '/images/tarot-lovers.jpg',
          type: 'Major',
          upright: 'partnerships, duality, union',
          reversed: 'loss of balance, one-sidedness, disharmony',
        },
        {
          id: 107,
          name: 'The Chariot',
          suit: 'none',
          value: '7',
          image: '/images/tarot-chariot.jpg',
          type: 'Major',
          upright: 'direction, control, willpower',
          reversed: 'lack of control, lack of direction, aggression',
        },
        {
          id: 108,
          name: 'Strength',
          suit: 'none',
          value: '8',
          image: '/images/tarot-strength.jpg',
          type: 'Major',
          upright: 'inner strength, bravery, compassion, focus',
          reversed: 'self doubt, weakness, insecurity',
        },
        {
          id: 109,
          name: 'The Hermit',
          suit: 'none',
          value: '9',
          image: '/images/tarot-hermit.jpg',
          type: 'Major',
          upright: 'contemplation, search for truth, inner guidance',
          reversed: 'loneliness, isolation, lost your way',
        },
        {
          id: 110,
          name: 'The Wheel of Fortune',
          suit: 'none',
          value: '10',
          image: '/images/tarot-wheeloffortune.jpg',
          type: 'Major',
          upright: 'change, cycles, inevitable fate',
          reversed: 'no control, clinging to control, bad luck',
        },
        {
          id: 111,
          name: 'Justice',
          suit: 'none',
          value: '11',
          image: '/images/tarot-justice.jpg',
          type: 'Major',
          upright: 'cause and effect, clarity, truth',
          reversed: 'dishonesty, unaccountability, unfairness',
        },
        {
          id: 112,
          name: 'The Hanged Man',
          suit: 'none',
          value: '12',
          image: '/images/tarot-hangedman.jpg',
          type: 'Major',
          upright: 'sacrifice, release, martyrdom',
          reversed: 'stalling, needless sacrifice, fear of sacrifice',
        },
        {
          id: 113,
          name: 'Death',
          suit: 'none',
          value: '13',
          image: '/images/tarot-death.jpg',
          type: 'Major',
          upright: 'end of cycle, beginnings, change, metamorphosis',
          reversed: 'fear of change, holding on, stagnation, decay',
        },
        {
          id: 114,
          name: 'Temperance',
          suit: 'none',
          value: '14',
          image: '/images/tarot-temperance.jpg',
          type: 'Major',
          upright: 'middle path, patience, finding meaning',
          reversed: 'extremes, excess, lack of balance',
        },
        {
          id: 115,
          name: 'The Devil',
          suit: 'none',
          value: '15',
          image: '/images/tarot-devil.jpg',
          type: 'Major',
          upright: 'addiction, materialism, playfulness',
          reversed: 'freedom, release, restoring control',
        },
        {
          id: 116,
          name: 'The Tower',
          suit: 'none',
          value: '16',
          image: '/images/tarot-tower.jpg',
          type: 'Major',
          upright: 'sudden upheaval, broken pride, disaster',
          reversed: 'disaster avoided, delayed disaster, fear of suffering',
        },
        {
          id: 117,
          name: 'The Star',
          suit: 'none',
          value: '17',
          image: '/images/tarot-star.jpg',
          type: 'Major',
          upright: 'hope, faith, rejuvenation',
          reversed: 'faithlessness, discouragement, insecurity',
        },
        {
          id: 118,
          name: 'The Moon',
          suit: 'none',
          value: '18',
          image: '/images/tarot-moon.jpg',
          type: 'Major',
          upright: 'unconscious, illusions, intuition',
          reversed: 'confusion, fear, misinterpretation',
        },
        {
          id: 119,
          name: 'The Sun',
          suit: 'none',
          value: '19',
          image: '/images/tarot-sun.jpg',
          type: 'Major',
          upright: 'joy, success, celebration, positivity',
          reversed: 'negativity, depression, sadness',
        },
        {
          id: 120,
          name: 'Judgement',
          suit: 'none',
          value: '20',
          image: '/images/tarot-judgement.jpg',
          type: 'Major',
          upright: 'reflection, reckoning, awakening',
          reversed: 'lack of self awareness, doubt, self loathing',
        },
        {
          id: 121,
          name: 'The World',
          suit: 'none',
          value: '21',
          image: '/images/tarot-world.jpg',
          type: 'Major',
          upright: 'fulfillment, harmony, completion',
          reversed: 'incompletion, no closure',
        },
        {
          id: 201,
          name: 'Ace of Cups',
          suit: 'cups',
          value: 'ace',
          image: '/images/cups/tarot-cups-01.jpg',
          type: 'Minor',
          upright: 'new feelings, spirituality, intuition',
          reversed: 'emotional loss, blocked creativity, emptiness',
        },
        {
          id: 202,
          name: 'Two of Cups',
          suit: 'cups',
          value: 'two',
          image: '/images/cups/tarot-cups-02.jpg',
          type: 'Minor',
          upright: 'unity, partnership, connection',
          reversed: 'imbalance, broken communication, tension',
        },
        {
          id: 203,
          name: 'Three of Cups',
          suit: 'cups',
          value: 'three',
          image: '/images/cups/tarot-cups-03.jpg',
          type: 'Minor',
          upright: 'friendship, community, happiness',
          reversed: 'overindulgence, gossip, isolation',
        },
        {
          id: 204,
          name: 'Four of Cups',
          suit: 'cups',
          value: 'four',
          image: '/images/cups/tarot-cups-04.jpg',
          type: 'Minor',
          upright: 'apathy, contemplation, disconnectedness',
          reversed: 'sudden awareness, choosing happiness, acceptance',
        },
        {
          id: 205,
          name: 'Five of Cups',
          suit: 'cups',
          value: 'five',
          image: '/images/cups/tarot-cups-05.jpg',
          type: 'Minor',
          upright: 'loss, grief, self-pity',
          reversed: 'acceptance, moving on, finding peace',
        },
        {
          id: 206,
          name: 'Six of Cups',
          suit: 'cups',
          value: 'six',
          image: '/images/cups/tarot-cups-06.jpg',
          type: 'Minor',
          upright: 'familiarity, happy memories, healing',
          reversed: 'moving forward, leaving home, independence',
        },
        {
          id: 207,
          name: 'Seven of Cups',
          suit: 'cups',
          value: 'seven',
          image: '/images/cups/tarot-cups-07.jpg',
          type: 'Minor',
          upright: 'searching for purpose, choices, daydreaming',
          reversed: 'lack of purpose, diversion, confusion',
        },
        {
          id: 208,
          name: 'Eight of Cups',
          suit: 'cups',
          value: 'eight',
          image: '/images/cups/tarot-cups-08.jpg',
          type: 'Minor',
          upright: 'walking away, disillusionment, leaving behind',
          reversed: 'avoidance, fear of change, fear of loss',
        },
        {
          id: 209,
          name: 'Nine of Cups',
          suit: 'cups',
          value: 'nine',
          image: '/images/cups/tarot-cups-09.jpg',
          type: 'Minor',
          upright: 'satisfaction, emotional stability, luxury',
          reversed: 'lack of inner joy, smugness, dissatisfaction',
        },
        {
          id: 210,
          name: 'Ten of Cups',
          suit: 'cups',
          value: 'ten',
          image: '/images/cups/tarot-cups-10.jpg',
          type: 'Minor',
          upright: 'inner happiness, fulfillment, dreams coming true',
          reversed: 'shattered dreams, broken family, domestic disharmony',
        },
        {
          id: 211,
          name: 'Page of Cups',
          suit: 'cups',
          value: 'page',
          image: '/images/cups/tarot-cups-11.jpg',
          type: 'Minor',
          upright: 'happy surprise, dreamer, sensitivity',
          reversed: 'emotional immaturity, insecurity, disappointment',
        },
        {
          id: 212,
          name: 'Knight of Cups',
          suit: 'cups',
          value: 'knight',
          image: '/images/cups/tarot-cups-12.jpg',
          type: 'Minor',
          upright: 'following the heart, idealist, romantic',
          reversed: 'moodiness, disappointment',
        },
        {
          id: 213,
          name: 'Queen of Cups',
          suit: 'cups',
          value: 'queen',
          image: '/images/cups/tarot-cups-13.jpg',
          type: 'Minor',
          upright: 'compassion, calm, comfort',
          reversed: 'martyrdom, insecurity, dependence',
        },
        {
          id: 214,
          name: 'King of Cups',
          suit: 'cups',
          value: 'king',
          image: '/images/cups/tarot-cups-14.jpg',
          type: 'Minor',
          upright: 'compassion, control, balance',
          reversed: 'coldness, moodiness, bad advice',
        },
        {
          id: 301,
          name: 'Ace of Pentacles',
          suit: 'pentacles',
          value: 'ace',
          image: '/images/pentacles/tarot-pentacles-01.jpg',
          type: 'Minor',
          upright: 'opportunity, prosperity, new venture',
          reversed: 'lost opportunity, missed chance, bad investment',
        },
        {
          id: 302,
          name: 'Two of Pentacles',
          suit: 'pentacles',
          value: 'two',
          image: '/images/pentacles/tarot-pentacles-02.jpg',
          type: 'Minor',
          upright: 'balancing decisions, priorities, adapting to change',
          reversed: 'loss of balance, disorganized, overwhelmed',
        },
        {
          id: 303,
          name: 'Three of Pentacles',
          suit: 'pentacles',
          value: 'three',
          image: '/images/pentacles/tarot-pentacles-03.jpg',
          type: 'Minor',
          upright: 'teamwork, collaboration, building',
          reversed: 'lack of teamwork, disorganized, group conflict',
        },
        {
          id: 304,
          name: 'Four of Pentacles',
          suit: 'pentacles',
          value: 'four',
          image: '/images/pentacles/tarot-pentacles-04.jpg',
          type: 'Minor',
          upright: 'conservation, frugality, security',
          reversed: 'greediness, stinginess, possessiveness',
        },
        {
          id: 305,
          name: 'Five of Pentacles',
          suit: 'pentacles',
          value: 'five',
          image: '/images/pentacles/tarot-pentacles-05.jpg',
          type: 'Minor',
          upright: 'need, poverty, insecurity',
          reversed: 'recovery, charity, improvement',
        },
        {
          id: 306,
          name: 'Six of Pentacles',
          suit: 'pentacles',
          value: 'six',
          image: '/images/pentacles/tarot-pentacles-06.jpg',
          type: 'Minor',
          upright: 'charity, generosity, sharing',
          reversed: 'strings attached, stinginess, power and domination',
        },
        {
          id: 307,
          name: 'Seven of Pentacles',
          suit: 'pentacles',
          value: 'seven',
          image: '/images/pentacles/tarot-pentacles-07.jpg',
          type: 'Minor',
          upright: 'hard work, perseverance, diligence',
          reversed: 'work without results, distractions, lack of rewards',
        },
        {
          id: 308,
          name: 'Eight of Pentacles',
          suit: 'pentacles',
          value: 'eight',
          image: '/images/pentacles/tarot-pentacles-08.jpg',
          type: 'Minor',
          upright: 'apprenticeship, passion, high standards',
          reversed: 'lack of passion, uninspired, no motivation',
        },
        {
          id: 309,
          name: 'Nine of Pentacles',
          suit: 'pentacles',
          value: 'nine',
          image: '/images/pentacles/tarot-pentacles-09.jpg',
          type: 'Minor',
          upright: 'fruits of labor, rewards, luxury',
          reversed: 'reckless spending, living beyond means, false success',
        },
        {
          id: 310,
          name: 'Ten of Pentacles',
          suit: 'pentacles',
          value: 'ten',
          image: '/images/pentacles/tarot-pentacles-10.jpg',
          type: 'Minor',
          upright: 'legacy, culmination, inheritance',
          reversed: 'fleeting success, lack of stability, lack of resources',
        },
        {
          id: 311,
          name: 'Page of Pentacles',
          suit: 'pentacles',
          value: 'page',
          image: '/images/pentacles/tarot-pentacles-11.jpg',
          type: 'Minor',
          upright: 'ambition, desire, diligence',
          reversed: 'lack of commitment, greediness, laziness',
        },
        {
          id: 312,
          name: 'Knight of Pentacles',
          suit: 'pentacles',
          value: 'knight',
          image: '/images/pentacles/tarot-pentacles-12.jpg',
          type: 'Minor',
          upright: 'efficiency, hard work, responsibility',
          reversed: 'laziness, obsessiveness, work without reward',
        },
        {
          id: 313,
          name: 'Queen of Pentacles',
          suit: 'pentacles',
          value: 'queen',
          image: '/images/pentacles/tarot-pentacles-13.jpg',
          type: 'Minor',
          upright: 'practicality, creature comforts, financial security',
          reversed: 'self-centeredness, jealousy, smothering',
        },
        {
          id: 314,
          name: 'King of Pentacles',
          suit: 'pentacles',
          value: 'king',
          image: '/images/pentacles/tarot-pentacles-14.jpg',
          type: 'Minor',
          upright: 'abundance, prosperity, security',
          reversed: 'greed, indulgence, sensuality',
        },
        {
          id: 401,
          name: 'Ace of Swords',
          suit: 'swords',
          value: 'ace',
          image: '/images/swords/tarot-swords-01.jpg',
          type: 'Minor',
          upright: 'breakthrough, clarity, sharp mind',
          reversed: 'confusion, brutality, chaos',
        },
        {
          id: 402,
          name: 'Two of Swords',
          suit: 'swords',
          value: 'two',
          image: '/images/swords/tarot-swords-02.jpg',
          type: 'Minor',
          upright: 'difficult choices, indecision, stalemate',
          reversed: 'lesser of two evils, no right choice, confusion',
        },
        {
          id: 403,
          name: 'Three of Swords',
          suit: 'swords',
          value: 'three',
          image: '/images/swords/tarot-swords-03.jpg',
          type: 'Minor',
          upright: 'heartbreak, suffering, grief',
          reversed: 'recovery, forgiveness, moving on',
        },
        {
          id: 404,
          name: 'Four of Swords',
          suit: 'swords',
          value: 'four',
          image: '/images/swords/tarot-swords-04.jpg',
          type: 'Minor',
          upright: 'rest, restoration, contemplation',
          reversed: 'restlessness, burnout, stress',
        },
        {
          id: 405,
          name: 'Five of Swords',
          suit: 'swords',
          value: 'five',
          image: '/images/swords/tarot-swords-05.jpg',
          type: 'Minor',
          upright: 'unbridled ambition, win at all costs, sneakiness',
          reversed: 'lingering resentment, desire to reconcile, forgiveness',
        },
        {
          id: 406,
          name: 'Six of Swords',
          suit: 'swords',
          value: 'six',
          image: '/images/swords/tarot-swords-06.jpg',
          type: 'Minor',
          upright: 'transition, leaving behind, moving on',
          reversed:
            'emotional baggage, unresolved issues, resisting transition',
        },
        {
          id: 407,
          name: 'Seven of Swords',
          suit: 'swords',
          value: 'seven',
          image: '/images/swords/tarot-swords-07.jpg',
          type: 'Minor',
          upright: 'deception, trickery, tactics and strategy',
          reversed: 'coming clean, rethinking approach, deception',
        },
        {
          id: 408,
          name: 'Eight of Swords',
          suit: 'swords',
          value: 'eight',
          image: '/images/swords/tarot-swords-08.jpg',
          type: 'Minor',
          upright: 'imprisonment, entrapment, self-victimization',
          reversed: 'self acceptance, new perspective, freedom',
        },
        {
          id: 409,
          name: 'Nine of Swords',
          suit: 'swords',
          value: 'nine',
          image: '/images/swords/tarot-swords-09.jpg',
          type: 'Minor',
          upright: 'anxiety, hopelessness, trauma',
          reversed: 'hope, reaching out, despair',
        },
        {
          id: 410,
          name: 'Ten of Swords',
          suit: 'swords',
          value: 'ten',
          image: '/images/swords/tarot-swords-10.jpg',
          type: 'Minor',
          upright: 'failure, collapse, defeat',
          reversed: `can't get worse, only upwards, inevitable end`,
        },
        {
          id: 411,
          name: 'Page of Swords',
          suit: 'swords',
          value: 'page',
          image: '/images/swords/tarot-swords-11.jpg',
          type: 'Minor',
          upright: 'curiosity, restlessness, mental energy',
          reversed: 'deception, manipulation, all talk',
        },
        {
          id: 412,
          name: 'Knight of Swords',
          suit: 'swords',
          value: 'knight',
          image: '/images/swords/tarot-swords-12.jpg',
          type: 'Minor',
          upright: 'action, impulsiveness, defending beliefs',
          reversed:
            'no direction, disregard for consequences, unpredictability',
        },
        {
          id: 413,
          name: 'Queen of Swords',
          suit: 'swords',
          value: 'queen',
          image: '/images/swords/tarot-swords-13.jpg',
          type: 'Minor',
          upright: 'complexity, perceptiveness, clear mindedness',
          reversed: 'cold hearted, cruel, bitterness',
        },
        {
          id: 414,
          name: 'King of Swords',
          suit: 'swords',
          value: 'king',
          image: '/images/swords/tarot-swords-14.jpg',
          type: 'Minor',
          upright: 'head over heart, discipline, truth',
          reversed: 'manipulative, cruel, weakness',
        },
        {
          id: 501,
          name: 'Ace of Wands',
          suit: 'wands',
          value: 'ace',
          image: '/images/wands/tarot-wands-01.jpg',
          type: 'Minor',
          upright: 'creation, willpower, inspiration, desire',
          reversed: 'lack of energy, lack of passion, boredom',
        },
        {
          id: 502,
          name: 'Two of Wands',
          suit: 'wands',
          value: 'two',
          image: '/images/wands/tarot-wands-02.jpg',
          type: 'Minor',
          upright: 'planning, making decisions, leaving home',
          reversed: 'fear of change, playing safe, bad planning',
        },
        {
          id: 503,
          name: 'Three of Wands',
          suit: 'wands',
          value: 'three',
          image: '/images/wands/tarot-wands-03.jpg',
          type: 'Minor',
          upright: 'looking ahead, expansion, rapid growth',
          reversed: 'obstacles, delays, frustration',
        },
        {
          id: 504,
          name: 'Four of Wands',
          suit: 'wands',
          value: 'four',
          image: '/images/wands/tarot-wands-04.jpg',
          type: 'Minor',
          upright: 'community, home, celebration',
          reversed: 'lack of support, transience, home conflicts',
        },
        {
          id: 505,
          name: 'Five of Wands',
          suit: 'wands',
          value: 'five',
          image: '/images/wands/tarot-wands-05.jpg',
          type: 'Minor',
          upright: 'competition, rivalry, conflict',
          reversed: 'avoiding conflict, respecting differences',
        },
        {
          id: 506,
          name: 'Six of Wands',
          suit: 'wands',
          value: 'six',
          image: '/images/wands/tarot-wands-06.jpg',
          type: 'Minor',
          upright: 'victory, success, public reward',
          reversed: 'excess pride, lack of recognition, punishment',
        },
        {
          id: 507,
          name: 'Seven of Wands',
          suit: 'wands',
          value: 'seven',
          image: '/images/wands/tarot-wands-07.jpg',
          type: 'Minor',
          upright: 'perseverance, defensive, maintaining control',
          reversed: 'give up, destroyed confidence, overwhelmed',
        },
        {
          id: 508,
          name: 'Eight of Wands',
          suit: 'wands',
          value: 'eight',
          image: '/images/wands/tarot-wands-08.jpg',
          type: 'Minor',
          upright: 'rapid action, movement, quick decisions',
          reversed: 'panic, waiting, slowdown',
        },
        {
          id: 509,
          name: 'Nine of Wands',
          suit: 'wands',
          value: 'nine',
          image: '/images/wands/tarot-wands-09.jpg',
          type: 'Minor',
          upright: 'resilience, grit, last stand',
          reversed: 'exhaustion, fatigue, questioning motivations',
        },
        {
          id: 510,
          name: 'Ten of Wands',
          suit: 'wands',
          value: 'ten',
          image: '/images/wands/tarot-wands-10.jpg',
          type: 'Minor',
          upright: 'accomplishment, responsibility, burden',
          reversed: 'inability to delegate, overstressed, burnt out',
        },
        {
          id: 511,
          name: 'Page of Wands',
          suit: 'wands',
          value: 'page',
          image: '/images/wands/tarot-wands-11.jpg',
          type: 'Minor',
          upright: 'exploration, excitement, freedom',
          reversed: 'lack of direction, procrastination, creating conflict',
        },
        {
          id: 512,
          name: 'Knight of Wands',
          suit: 'wands',
          value: 'knight',
          image: '/images/wands/tarot-wands-12.jpg',
          type: 'Minor',
          upright: 'action, adventure, fearlessness',
          reversed: 'anger, impulsiveness, recklessness',
        },
        {
          id: 513,
          name: 'Queen of Wands',
          suit: 'wands',
          value: 'queen',
          image: '/images/wands/tarot-wands-13.jpg',
          type: 'Minor',
          upright: 'courage, determination, joy',
          reversed: 'selfishness, jealousy, insecurities',
        },
        {
          id: 514,
          name: 'King of Wands',
          suit: 'wands',
          value: 'king',
          image: '/images/wands/tarot-wands-14.jpg',
          type: 'Minor',
          upright: 'big picture, leader, overcoming challenges',
          reversed: 'impulsive, overbearing, unachievable expectations',
        },
      ])
    })
}
