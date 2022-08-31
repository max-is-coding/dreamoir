exports.seed = (knex) => {
  return knex('Dreams')
    .del()
    .then(() => {
      // Inserts seed entries
      return knex('Dreams').insert([
        {
          id: 1,
          keyword: `aardvark`,
          meaning: `To see an aardvark in your dream indicates that you are being very secretive and cautious about your business.  `,
        },
        {
          id: 2,
          keyword: `abacus`,
          meaning: `To see or use an abacus in your dream refers to your outdated views. You  have an old fashion perspective on certain issues.`,
        },
        {
          id: 3,
          keyword: `abalone`,
          meaning: `To see or eat abalone in your dream indicates a transitional period in your life. The symbol may also be a play on words to indicate feelings of "loneliness".`,
        },
        {
          id: 4,
          keyword: `abandonment`,
          meaning: `To dream that you are abandoned suggests that it is time to leave behind past feelings and characteristics that are hindering your growth. Let go of your old attitudes. A more direct and literal interpretation of this dream indicates you have a fear of being deserted, abandoned, or even betrayed. It may stem from a  recent loss or a fear of losing a loved one. The fear of abandonment may manifest itself into your dream as part of the healing process and dealing with losing a loved one. It may also stem from unresolved feelings or problems from childhood. Alternatively, the dream indicates that you are feeling neglected or that your feelings are being overlooked. Perhaps the dream is a metaphor that you need to approach life with "reckless abandon" and live more freely. 

          To abandon others in your dream suggests that you are overwhelmed by the problems and decisions in your life.`,
        },
        {
          id: 5,
          keyword: `abbey`,
          meaning: `To see an abbey in your dream signifies spirituality, peace of mind and freedom from anxiety. You are in a state of contentment and satisfaction. Help for you is always around the corner. 

          To see an abbey in ruins indicates feelings of hopelessness. You have a tendency to not finish what you started.`,
        },
        {
          id: 6,
          keyword: `abbot`,
          meaning: `To see an abbot in your dream suggests that someone has power over you and are making you do things that you do not necessarily want to do. You are feeling confined or restricted. The dream indicates that you will experience many obstacles and setback before achieving success and prestige.`,
        },
        {
          id: 7,
          keyword: `abbreviation`,
          meaning: `To see abbreviations in your dream may represent the initials of someone in your life. The abbreviations could stand for an organization or a common acronym or it may spell out some hidden message or advice. The dreaming mind likes to make use of puns, as well as shorthand messages. For example, "CD" could be a pun on a "seedy" situation. "AA" could stand for Alcoholics Anonymous and thus point to the dangers or your excesses and negative behaviors. "Inc" may represent an "inkling", hunch or suspicious you have about a situation. The initails DM may refer to a direct message or perhaps that you need to check Dream Moqds for your dream anaylsis.`,
        },
        {
          id: 8,
          keyword: `abdomen`,
          meaning: `To see your abdomen in a dream refers to your natural instincts and repressed emotions. There is something in your real life that you "cannot stomach" or have difficulties accepting. You need to get it out of your system. Alternatively, the dream symbol may be strictly physiological and you may just be experiencing constipation or indigestion. 

          To dream that your abdomen is exposed represents issues you have with trust and feelings of vulnerability. You are expressing your primal emotions and instincts.
          
          To dream that your abdomen is swollen indicates that some new project is in the works.`,
        },
        {
          id: 9,
          keyword: `abduction`,
          meaning: `To dream of being abducted indicates that you are being manipulated by your circumstances or by someone. You lack control of your own life.

          To witness an abduction in your dream signifies feelings of helplessness.   
          
          To dream that you are abducting someone implies that you are holding on to something that you need to let go. You may be forcing your views and opinions on others.`,
        },
        {
          id: 10,
          keyword: `abhorrence`,
          meaning: `To dream that you abhor a person represents your waking dislike for that person. You are harboring feelings of resentment or aggression and feel that this person has acted in a less than honorable way.

          To dream that you are abhorred by others suggests that you may be forcing your views and opinions on others. You are rubbing others the wrong way.`,
        },
        {
          id: 11,
          keyword: `abnormal`,
          meaning: `To dream of some abnormality or of abnormal objects indicate that the problems that have been preoccupying your mind will soon be resolved. Note that anything appearing abnormal draws attention to that particular aspect. Something in your life may not be consistent with how you feel things should be.`,
        },
        {
          id: 12,
          keyword: `abortion`,
          meaning: `To dream that you have an abortion suggests that you are hindering and blocking your own growth. You may be hesitant in pursuing a new direction in your life due to fear, pressure, personal conflict or moral obligation. The dream may also be a reflection of your own real-life abortion and thus serves as  a way of healing from the trauma and working towards self-acceptance. Alternatively, this dream may also be a message for you to take care and look after your health.

          To dream that someone has an abortion refers to an aspect of your relationship with this person is not growing or maturing. If you do not know this person, then the dream may be about your own personal views on abortion.
          
          To dream that you or someone has an illegal or unsafe abortion indicates that you are desperate to keep things the exact same way. You hate change. If the abortion results in death, then it means that your approach to a problem is all wrong.`,
        },
        {
          id: 13,
          keyword: `above`,
          meaning: `To see something above you in your dream suggests that you need to set your goals higher. Aim high! Alternatively, the dream indicates that you are feeling inferior or inadequate.`,
        },
        {
          id: 14,
          keyword: `Abraham Lincoln`,
          meaning: `To see Abraham Lincoln in your dream refers to your solid character and leadership ability. Known as "Honest Abe", the dream may also be telling you to be truthful or to come clean about something.`,
        },
        {
          id: 15,
          keyword: `abroad`,
          meaning: `To dream of being or going abroad  indicates unbalance and chaos in your current situation and condition. Consequently, your dream may represent your need for a change in scenery or a desire to escape from a current situation. You need to make some drastic changes in your life. Alternatively,  the dream may suggest that you need to expand your horizons or experience a new sense of spirituality.`,
        },
        {
          id: 16,
          keyword: `absence`,
          meaning: `To dream that someone is absent, especially if you expect to find them, suggests that you are looking for something that is already lost to you. Alternatively, you may be looking to fill a void in your life. Something is missing from your life.`,
        },
        {
          id: 17,
          keyword: `abscess`,
          meaning: `To dream that you have an abscess suggests that there is something that you need to express and get out into the open.`,
        },
        {
          id: 18,
          keyword: `abscess`,
          meaning: `To dream that you have an abscess suggests that there is something that you need to express and get out into the open.`,
        },
        {
          id: 19,
          keyword: `abscond`,
          meaning: `To dream that you have absconded with something indicates your failed accomplishments. You may also be feeling insecure about your achievements. You feel that you are never good enough. Consider the significance or value of what you have absconded.`,
        },
        {
          id: 20,
          keyword: `absorb`,
          meaning: `To be absorbed in whatever you are doing suggests that you may be too focused on your own thing and risk alienating others around you. The dream may also be a metaphor that you need to integrate and adapt to your various surroundings.`,
        },
        {
          id: 21,
          keyword: `abstinence`,
          meaning: `To dream that you practice abstinence from drinking, sex  or any other sort of sensual temptation is a warning against being over confidant.  You need to take things more slowly.`,
        },
        {
          id: 22,
          keyword: `abundance`,
          meaning: `To dream of having an abundance of a certain item indicates that you need to conserve your resources and energies. This dream may be a compensatory dream for something that you are lacking in life.  More directly, abundance signifies happiness.`,
        },
        {
          id: 23,
          keyword: `abuse`,
          meaning: `To dream you are abusing someone suggests that your past actions will come back to haunt you. You may be expressing some regret or remorse over your actions.

          To dream you are being verbally or physically abused suggests that you are feeling victimized in  a waking situation. You are being taking advantage of.  
          
          Dreaming of animals being abused indicates that your own primal desires are being suppressed. You are unable to fully express an important part of who you are. Alternatively, the dream represents your helplessness in a situation.
          
          To see children being abused in your dream implies that you are lacking a voice for your own inner child. You feel that a part of your own childhood is lost.`,
        },
        {
          id: 24,
          keyword: `abyss`,
          meaning: `To dream of an abyss signifies an obstacle that is creating much anxiety for you. You need to work through the difficulty and overcome this obstacle in your life.  Perhaps you are afraid of  "taking the plunge".

          To dream that you are falling into an abyss symbolizes the depths of your subconscious.  You are afraid and/or uncertain as to what you will discover about yourself and about your hidden feelings and fears. The abyss may also represent your primal fears and feelings of "falling into a pit of despair". Perhaps you are in a state of depression or wallowing in your negative feelings. Alternatively, the dream could denote your lack of spirituality.`,
        },
        {
          id: 25,
          keyword: `acacia`,
          meaning: `To see an acacia tree in your dream symbolizes your attitudes with death and your sense of mortality.`,
        },
        {
          id: 26,
          keyword: `academy`,
          meaning: `To dream of an academy signifies new friendships and opportunities.`,
        },
        {
          id: 27,
          keyword: `Academy Awards`,
          meaning: `To dream that you at the Academy Awards indicates that you need to add some glamour into your life. If you win an Oscar, then it implies that you are looking for some sort of acknowledgment in your waking life.`,
        },
        {
          id: 28,
          keyword: `accelerator`,
          meaning: `To see an accelerator in your dream indicates that you will achieve your goals through your own efforts. The dream may also be telling you to slow down.

          To dream that the accelerator is jammed or broken indicates a loss of control in some aspect of your life. You maybe trying to rush through things.`,
        },
        {
          id: 29,
          keyword: `accent`,
          meaning: `To speak with an accent in your dream suggests that you are having difficulties conveying your thoughts. Consider how you feel about the accent. If you feel the accent makes you stand out in a negative way, then it signifies feelings of insecurities. If the accent makes you stand out in a positive way, then it symbolizes an air of confidence. 

          To hear someone speaking with an accent in your dream represents something familiar yet different. You are getting the gist of a message, but you still do not completely understand all of it.`,
        },
        {
          id: 30,
          keyword: `acceptance`,
          meaning: `To dream about acceptance indicates issues of self-esteem and measuring up to the expectations of others. There is a waking situation where you are seeking acceptance and wanting to be a part of.`,
        },
        {
          id: 31,
          keyword: `accessory`,
          meaning: `To dream of accessorizing yourself suggests that you are feeling incomplete. Something is missing in your life.`,
        },
        {
          id: 32,
          keyword: `accident`,
          meaning: `To dream that you are in an accident signifies pent-up guilt in which you are subconsciously punishing yourself over. Perhaps you are not proud of something you have done. Alternatively, the accident may symbolize an error or mistake you have made. Accident dreams also represent your fears of being in an actual, physical accident. You may simply be nervous about getting behind the wheel. Or the dream is trying to warn you of some accident.

          To dream of a car accident symbolizes your emotional state. You may be harboring deep anxieties and fears. Are you "driving" yourself too hard? Perhaps you need to slow down before you hit disaster. You need to rethink or re-plan your course of actions and set yourself on a better path. Dreaming that someone is injured in a car accident means that you cannot control the action of others. They have to live with the consequences of their own decisions.
          
          To dream that a loved one dies in an accident indicates that something within your own Self is no longer functional and is "dead". It is also symbolic of your own relationship with that person. Perhaps you need to let go of this relationship. If you dream that you die from the car accident and actually see the reactions of your loved ones, then it suggests that your reckless activity is affecting those around you. This dream is a wake-up call.`,
        },
        {
          id: 33,
          keyword: `accomplice`,
          meaning: `To dream that you are an accomplice to a crime suggests that someone in your waking life is having a negative influence on you. You may be experiencing feelings of guilt with something that you have done.   

          To dream that you have an accomplice implies that others are enabling your negative habits or behavior.`,
        },
        {
          id: 34,
          keyword: `accordion`,
          meaning: `To hear the music of an accordion signifies some saddening and depressing matter. You need to focus on more joyous moments.

          To dream that you play the accordion denotes intense emotions that are causing physical strain to your body. You are feeling weary. Alternatively, the dream suggests that you need to work hard to achieve your goals.`,
        },
        {
          id: 35,
          keyword: `accountant`,
          meaning: `To see or dream that you are an accountant represents your objectivity toward some situation. You are taking a step back and looking carefully at the facts.`,
        },
        {
          id: 36,
          keyword: `account`,
          meaning: `To dream about your bank accounts indicates financial worries.`,
        },
        {
          id: 37,
          keyword: `accuse`,
          meaning: `To dream that you are being accused of something indicates overwhelming feelings of guilt.  It may also mean that you are having some doubts about yourself and the choices you are making.

          To dream that you accuse others signifies disagreements and dissension with those around you.`,
        },
        {
          id: 38,
          keyword: `ace`,
          meaning: `To see the ace in a deck of cards suggests ambiguity in your life. You need some clarity. In particular, the ace of hearts means that you are involved in some love affair. If you see the ace of spades in your dream, then it means that you are involved in a scandal. If you see the ace of diamonds, then it symbolizes your legacy or reputation. And if you see the ace of clubs, then it indicates that you will be involved in some legal matter.

          Alternatively, the dream may be a metaphor that you are an "ace". Or the dream is a pun on "acing" a test.`,
        },
        {
          id: 39,
          keyword: `ache`,
          meaning: `To dream that you have aches indicate some hesitation and reluctance in the pursuit of your goals. If you wait too long, then the opportunity may escape.`,
        },
        {
          id: 40,
          keyword: `achievement`,
          meaning: `To dream of an achievement denotes that you will be greatly satisfied with the outcome of a situation or project. The bigger the achievement, the greater the satisfaction.`,
        },
        {
          id: 41,
          keyword: `acid`,
          meaning: `To see acid in your dream represents feelings of hatred, rage, and/or revenge. Your integrity may be compromised or called into question.  Alternatively, seeing acid in your dream indicates that you are being manipulated by a situation or by someone. The dream may also be a metaphor to symbolize a negative influence in your life. Something or someone is eating away at you. 

          To dream that you drink acid indicates that you are emotionally paralyzed and need to learn how to express yourself.   
          
          Dreaming of acid rain indicates that you have been mislead. You are letting hatred and revenge take over and define you.`,
        },
        {
          id: 42,
          keyword: `acne`,
          meaning: `To dream that you have a pimple relates to issues about your self-esteem and self-image. You are feeling awkward or out of place in some situation or relationship. 

          To dream that you are popping a pimple indicates that some negative emotion needs to be expressed and acknowledge. These emotions that you are holding back are on the verge of erupting.`,
        },
        {
          id: 43,
          keyword: `acorn`,
          meaning: `To see an acorn in your dream symbolizes strength and durability. Seemingly small beginnings will have the greatest potential for growth. Don't underestimate your minor goals. Alternatively, the dream means that you are about to enter a new phase in your life. 

          To dream that you are eating acorns or picking them from the ground suggests that you will enjoy the benefits of your success after long and hard work.
          
          To dream that you are shaking acorns from a tree indicates that you have significant influence on others.`,
        },
        {
          id: 44,
          keyword: `acquaintance`,
          meaning: `To see an acquaintance in your dream represents aspects of yourself that you are still trying to get to know.

          To dream that you are disputing with an acquaintance represents aspects of yourself that you are rejecting. You are refusing to accept certain things about yourself.`,
        },
        {
          id: 45,
          keyword: `acquit`,
          meaning: `To dream that you are acquitted of a crime represents a valuable lesson to be learned.

          To see others acquitted in your dream indicates that you need to balance your hard work with fun and pleasure.`,
        },
        {
          id: 46,
          keyword: `acrobat`,
          meaning: `To see or do acrobats in your dream suggest that you need to better balance aspects of your life. It could also mean that fears will prevent you from achieving your goals.`,
        },
        {
          id: 47,
          keyword: `acrylic nails`,
          meaning: `If you are wearing fake fingernails in your dream then it suggest that you are reaching out to others, but do not have their best interest in mind. You may be acting in a disingenuous way.`,
        },
        {
          id: 48,
          keyword: `acting`,
          meaning: `To dream that you are acting indicates that you are putting up a front and pretending to be someone you are not in some waking situation.`,
        },
        {
          id: 49,
          keyword: `action figure`,
          meaning: `To see or dream that you are playing with an action figure suggests that you are being manipulated in some way. Or you tend to do what other people expect of you. Also consider the significance of the way that the action figure is dressed.`,
        },
        {
          id: 50,
          keyword: `actor`,
          meaning: `To see an actor or actress in your dream represents your pursuit for pleasure. Your admiration of a particular celebrity may lead to a desire to have some of their physical or personality traits. Consider also who this actor/actress is and what characteristics you associate with her or him. These may be the same characteristics that you need to acknowledge or incorporate into yourself. The dream may also be a pun on her or his name. 

          To dream that you are an actor denotes that your hard work and labor will be well worth it in the end. It also indicates your strong desires to be recognized and acknowledged. Perhaps you are putting too much emphasis on your outward appearances. Alternatively, the dream may be analogous to the role that you are playing in your real life, whether it be the role of a parent, sibling, co-worker, etc.  Or perhaps you are putting on an act or a facade.
          
          More specifically, if you dream that you are a supporting actor or supporting actress implies that you need to be supportive to those around you. It may seem that your presence doesn't matter, but you play an important part to someone's life. To dream that you are an extra in a movie means that you feel unimportant and unnoticed. Sometimes you feel you are blending in with the background. 
          
          To see a particular actor or actress in your dream look at the role they are playing. Even though you may not know them on a personal level, how you perceive them or the characters they play can provide understanding in how it relates to you.`,
        },
        {
          id: 51,
          keyword: `actress`,
          meaning: `To see an actor or actress in your dream represents your pursuit for pleasure. Your admiration of a particular celebrity may lead to a desire to have some of their physical or personality traits. Consider also who this actor/actress is and what characteristics you associate with her or him. These may be the same characteristics that you need to acknowledge or incorporate into yourself. The dream may also be a pun on her or his name. 

          To dream that you are an actor denotes that your hard work and labor will be well worth it in the end. It also indicates your strong desires to be recognized and acknowledged. Perhaps you are putting too much emphasis on your outward appearances. Alternatively, the dream may be analogous to the role that you are playing in your real life, whether it be the role of a parent, sibling, co-worker, etc.  Or perhaps you are putting on an act or a facade.
          
          More specifically, if you dream that you are a supporting actor or supporting actress implies that you need to be supportive to those around you. It may seem that your presence doesn't matter, but you play an important part to someone's life. To dream that you are an extra in a movie means that you feel unimportant and unnoticed. Sometimes you feel you are blending in with the background. 
          
          To see a particular actor or actress in your dream look at the role they are playing. Even though you may not know them on a personal level, how you perceive them or the characters they play can provide understanding in how it relates to you.`,
        },
        {
          id: 52,
          keyword: `acupuncture`,
          meaning: `To dream that you are getting acupuncture suggests that you are in need of healing. You may need to divert your energies to different pursuits. Alternatively, the dream may be a metaphor for a problem or issue that you need to pinpoint.`,
        },
        {
          id: 53,
          keyword: `Adam And Eve`,
          meaning: `To see Adam and Eve in your dream,  suggests that you are ignoring the masculine aspect of yourself (if you are female) or the feminine aspect of yourself (if you are male). Adam and Eve are classic symbols of the animus and anima. Alternatively, the dream indicates an occurrence in your life that will cause you to lose your hopes and chances of success.`,
        },
        {
          id: 54,
          keyword: `adamant`,
          meaning: `To dream that you are adamant signifies that you will be thwarted in some desire that you held ever so highly in your life.`,
        },
        {
          id: 55,
          keyword: `adder`,
          meaning: `To see an adder in your dream symbolizes a sly or cunning person. This person cannot be trusted.  It may also represent something or someone who has slipped out of your hands. The dream may also be a pun on something that you need to add to your life.`,
        },
        {
          id: 56,
          keyword: `addict`,
          meaning: `To dream that you are an addict indicates that you are no longer in control of a situation. You have surrendered your power and denied responsibility for your actions. The dream is also representative of fear, low self-esteem issues, and insecurities.`,
        },
        {
          id: 57,
          keyword: `addiction`,
          meaning: `To dream that you have an addiction or become addicted represents an obsessive behavior.  A situation or a person may be trying to take over your sense of control. The dream also suggests that you have difficulty relating to the world around you.`,
        },
        {
          id: 58,
          keyword: `address`,
          meaning: `To dream of your old address suggests that you need to take a look back at the past and learn from it. To dream of a new address indicates the need for change.

          To dream that you are addressing an envelope represents your need to explore more possibilities. Weigh your options carefully before making a final decision. Alternatively, the dream suggests that you have found your direction in life and are ready to pursue your goals.`,
        },
        {
          id: 59,
          keyword: `admiral`,
          meaning: `To see or dream that you are an admiral represents your ability to tackle life's issues and problems with confidence and decisiveness. The admiral may also symbolize a father figure or authoritative person.`,
        },
        {
          id: 60,
          keyword: `admire`,
          meaning: `To dream that you are admiring someone indicates that you need to incorporate the qualities of that person into your Self. 

          To dream that you are admiring yourself suggests that you are in need of approval and affirmation from others. Alternatively, it may mean that you have a large ego or think overly highly of yourself.`,
        },
        {
          id: 61,
          keyword: `adobe`,
          meaning: `To see an adobe structure in your dream symbolizes protection. It also implies that you are well insulated from life's problems. Perhaps you are being too sheltered and are lacking experience in certain areas of your life. Alternatively, an adobe building represents tradition, hard work and a simple way of life. Maybe you need to incorporate these qualities into your waking life.`,
        },
        {
          id: 62,
          keyword: `adopt`,
          meaning: `To dream that you or others are adopting a child indicates that you are taking on something new and different. Ask yourself what is missing in your life that would make you happy.

          To dream that you are adopted suggests that you are longing for the child within you. 
          
          Dreaming of adopting a dog symbolizes your desire for a loyal relationship.  If you are adopting a cat, then it means that you are embracing a newfound independence.`,
        },
        {
          id: 63,
          keyword: `adulation`,
          meaning: `To dream that you seek adulation signifies that you will arrogantly step up to undeserved position of honor.  

          To dream that you are offering adulation denotes that you are willing to part with something near and dear to you in the hopes of material advancement.`,
        },
        {
          id: 64,
          keyword: `adult`,
          meaning: `If you are a child or teenager and dream that you are an adult, then it implies that you need to be more mature about some situation. Perhaps you have some growing up that you need to do. Alternatively, the dream may be reinforcing your sense of responsibility.`,
        },
        {
          id: 65,
          keyword: `advancement`,
          meaning: `To dream that you are advancing in some situation signifies your rapid rise to success and honor.  Affairs of the heart will also be in your favor.

          To see others advancing ahead of you denotes that others have more important and favorable positions. You need to stop constantly comparing yourself to others.`,
        },
        {
          id: 66,
          keyword: `adventurer`,
          meaning: `To dream that you are an adventurer indicates that you are lacking adventure in your waking life. You need some excitement and variety. Alternatively, the dream suggests that you are too absorbed with your ambition that you do not take the time to acknowledge those who have helped you along the way.`,
        },
        {
          id: 67,
          keyword: `adversary`,
          meaning: `To dream that you are confronted by an adversary represents a conflict or a fear that you are facing in your waking life. You are in denial or are rejecting an aspect of yourself.

          To dream that you overcome an adversary indicates a resolution to some inner conflict or waking life problem.`,
        },
        {
          id: 68,
          keyword: `adversity`,
          meaning: `To dream that you are met with adversity represents the obstacles that you are facing in your waking life. You feel that you have failed. 

          To dream that others are in adversity signifies your pessimistic outlook in life. You need to learn to see the brighter side of things.`,
        },
        {
          id: 69,
          keyword: `advertisement`,
          meaning: `To dream that you are looking through advertisements represents a message conveyed to you via your subconscious. You need to act on some problem, decision or opportunity. Consider the content of the ads to determine what area of your life needs to be recognized or acknowledged. If someone you know is advertising themselves, then it suggests that this person can help you in your current situation. You may need to learn to ask for help when you need it.

          To dream that you are putting out an advertisement indicates hard work is needed to achieve your goals.`,
        },
        {
          id: 70,
          keyword: `advice`,
          meaning: `To dream that you are receiving advice suggests that you need to listen to your instinct and gut. 

          To dream that you are giving advice indicates that you have the knowledge and information to help others.`,
        },
        {
          id: 71,
          keyword: `advice`,
          meaning: `To dream that you are receiving advice suggests that you need to listen to your instinct and gut. 

          To dream that you are giving advice indicates that you have the knowledge and information to help others.`,
        },
        {
          id: 72,
          keyword: `advocate`,
          meaning: `To dream that you are an advocate for a cause signifies your faithfulness and conviction towards your interest and your loyalty to your friends.`,
        },
        {
          id: 73,
          keyword: `aerobics`,
          meaning: `To dream that you are doing aerobics suggests that you need to get out there and be more active. You need to exercise more.`,
        },
        {
          id: 74,
          keyword: `aerosol`,
          meaning: `To see an aerosol can in your dream indicates that you may be feeling under pressure. You need a release.`,
        },
        {
          id: 75,
          keyword: `affection`,
          meaning: `To dream that you are showing your affections for someone represents your satisfaction and happiness with a current relationship. It may also indicate your need to be more affectionate to the ones you love and care about. Alternatively, dreaming about affection may be an indicator that you are lacking affection in your waking life.`,
        },
        {
          id: 76,
          keyword: `afraid`,
          meaning: `To dream that you are scared indicates that you are experiencing feelings of self-doubt, incompetence, and lack of control in your waking life. Perhaps you are having second thoughts about a decision you have made. Anger often masquerades as fear, so also consider issues about which you are angry about in your waking life.`,
        },
        {
          id: 77,
          keyword: `afterlife`,
          meaning: `To dream of an afterlife refers to your desire of escaping from your own reality. You are feeling disconnected from life and society and want to make a fresh start.`,
        },
        {
          id: 78,
          keyword: `afternoon`,
          meaning: `To dream of the afternoon time suggest that it is time to put your energies to good use. Draw and learn from your past experiences and lessons. Alternatively, it symbolizes clarity to a situation.`,
        },
        {
          id: 79,
          keyword: `affliction`,
          meaning: `To dream that you have an affliction signifies bad news and possible disaster.

          To dream others afflicted in your dream denotes that you will find yourself surrounded by grief and misfortune.`,
        },
        {
          id: 80,
          keyword: `affluence`,
          meaning: `To dream that you are affluent represents your achievements and the rewards you reap for your hard work. The dream may be a metaphor for your enriching and fulfilling life.`,
        },
        {
          id: 81,
          keyword: `affront`,
          meaning: `To dream that you are affronted suggests that someone is working against you and taking advantage of your ignorance or naiveté. You may find yourself in a compromising situation.`,
        },
        {
          id: 82,
          keyword: `Africa`,
          meaning: `To dream about or that you in Africa reflects your desires to return to your roots. You want to find out more about your heritage. If you are traveling to Africa or thinking about visiting Africa, then your dream may indicate your anticipation of such a trip. Or if you have lived in Africa or been there, then the dream reflects your personal feelings and memories about the continent.`,
        },
        {
          id: 83,
          keyword: `afro`,
          meaning: `To dream that you have an afro signifies creative freedom. You need to be more expressive with your ideas.`,
        },
        {
          id: 84,
          keyword: `agate`,
          meaning: `To see a black agate in your dream symbolizes wealth, vigor, and courage. 

          To see a red agate in your dream represents peace, longevity, and health.`,
        },
        {
          id: 85,
          keyword: `age`,
          meaning: `To dream of your age signifies you anxiety and concern of growing older. It may also represent some regret or failure in your endeavors.

          To dream that you are older than you really are signifies wisdom. Perhaps you need to be more sensible. Negatively, it may mean your unyielding ways and rigid thinking.
          
          To dream that you are younger than you really are suggests that you need to be more carefree and be young at heart. Live a little!
          
          If you are a parent and dream that your child is younger than he or she really is, then it means that you are longing for the past. Perhaps you feel that you are no longer important and wish to regress back to a period where you were more needed. Time is passing you by.`,
        },
        {
          id: 86,
          keyword: `aggression`,
          meaning: `To dream that you exhibit aggression in your dream denotes repressed sexual needs. It is also a reflection of conflict in your waking life.`,
        },
        {
          id: 87,
          keyword: `agony`,
          meaning: `To dream that you exhibit aggression in your dream denotes repressed sexual needs. It is also a reflection of conflict in your waking life.`,
        },
        {
          id: 88,
          keyword: `agoraphobia`,
          meaning: `To dream that you have agoraphobia signifies a fear of being exposed or seen. You don't like being the center of attention or being the focus. The dream may symbolize a real life phobia or highlight feelings of anxiety.`,
        },
        {
          id: 89,
          keyword: `agreement`,
          meaning: `To dream of an agreement indicates resolution to a conflict or problem. Your subconscious is working in accordance with your conscious.`,
        },
        {
          id: 90,
          keyword: `ague`,
          meaning: `To dream that you are shivering with an ague forewarns that you will suffer from a physical disorder.

          To see others affected with ague in your dream suggests that others are offended by your indifference or lack of compassion in some situation.`,
        },
        {
          id: 91,
          keyword: `aim`,
          meaning: `To dream that you are aiming for something indicates that you need to direct your energies better. Keep your sight on the main goal. If you are aiming a gun or weapon, then it represents feelings of anger or pent up sexuality.`,
        },
        {
          id: 92,
          keyword: `air`,
          meaning: `To dream about the air symbolizes creativity and intelligence. If the air is foggy or polluted, then it suggests that your thought process or mind is clouded.

          To feel cold air in your dream signifies discordance in your domestic relations and setbacks in your business affairs. You may be in danger of losing touch with reality.
          
          To dream that you are breathing hot air signifies the influence of evil around you.
          
          To dream that you are walking on air refers to your carefree and upbeat attitude. It also signifies confidence; you feel almost invincible. You achieve your goals with relative ease. This dream is a variant of a flying dream. Alternatively, the dream may be telling you that you have lost grasped of reality.  
          
          To dream that you can bend air refers to your ability to control and watch what you say. You are careful in how you choose your words.`,
        },
        {
          id: 93,
          keyword: `air conditioner`,
          meaning: `To dream that the air conditioner is not working suggests that you are not able to relax and breathe freely. You may be overly worried about a situation.

          To see or feel the air conditioner in your dream represents purification and relief. You have cooled off from some heated argument.`,
        },
        {
          id: 93,
          keyword: `air duct`,
          meaning: `To see an air duct in your dream represents an outlet to express your feelings. There is something that you want to get off your chest. If your dream involves seeing a lot of ducts, then it  means that you are in control of your emotions. You channel your emotions and are cautious in how you express them.`,
        },
        {
          id: 94,
          keyword: `air gun`,
          meaning: `To see or use an air gun in your dream symbolizes an unperceived threat. You are letting your guard down in some situation where you need to be vigilant.`,
        },
        {
          id: 95,
          keyword: `air freshener`,
          meaning: `To smell air freshener in your dream suggests that you are enjoying life's little pleasure. The dream may bring about the past or certain memories. If the air freshener is too overpowering, then it indicates that your mind is not clear. You are exhibiting a lack of judgment.`,
        },
        {
          id: 96,
          keyword: `air force`,
          meaning: `To dream that you are in the air force suggests that you need to be more spiritually disciplined.`,
        },
        {
          id: 97,
          keyword: `air hockey`,
          meaning: `To see or play air hockey in your dream refers to something that you need to act quickly on or someone else will.`,
        },
        {
          id: 98,
          keyword: `air horn`,
          meaning: `To hear or sound an air horn in your dream suggests that you are not taking a matter seriously enough. It is time to focus. Alternatively, an air horn is way for your subconscious to get you to pay attention to an important aspect of the dream.`,
        },
        {
          id: 99,
          keyword: `air raid`,
          meaning: `To dream that you are caught in an air raid indicates that you are feeling overwhelmed by things that are seemingly coming out of the blue. You feel a lack of control in your life.`,
        },
        {
          id: 100,
          keyword: `air show`,
          meaning: `To dream that you are in an air show implies that you are showing off your accomplishments to others. You have achieved your goals and want everyone to know it.`,
        },
        {
          id: 101,
          keyword: `airbag`,
          meaning: `To see the airbag in a vehicle deploy in your dream forewarns that you will run into a major setback if you keep the pace of your current life path. You need to slow down and take your time. Alternatively, the air bag is symbolic of your support system in your time of need.`,
        },
        {
          id: 102,
          keyword: `aircraft carrier`,
          meaning: `To see an aircraft carrier in your dream suggests that you are preparing to confront your emotions. You are addressing feelings that you have been ignoring or suppressing for too long.`,
        },
        {
          id: 103,
          keyword: `airdancer`,
          meaning: `To see an airdancer in your dream represents someone who wants your full attention. Alternatively, dreaming of an airdancer indicates that you are too yielding in a situation. Stand up for yourself.`,
        },
        {
          id: 104,
          keyword: `airplane`,
          meaning: `To see or dream that you are on an airplane indicates that you will overcome your obstacles and rise to a new level of prominence and status. You may experience a higher consciousness, new-found freedom and greater awareness. Perhaps you need to gain a better perspective or wider view on something. If the airplane is taking off, then it suggests that an idea or plan is about to "take off" and be put into action. It may also represent your need to get away and escape from your daily life. Dreaming that the airplane sits on the runway and never takes off refers to a real life project or idea that has failed to get off the ground. You are having difficulties getting started on a project.

          To dream that you are flying an airplane suggests that you are in complete control of your destination in life. You are confident and self-assured in your decisions and accomplishments.
          
          To dream that you transfer planes implies an important transitional phase in your life which will take you away from your intended path. These changes will take you to new directions and new heights of status and recognition. 
          
          To dream that you miss your connection flight indicates that you are feeling helpless and trapped by some situation. You feel that you are being held back, either physically or mentally. Alternatively, the dream may also suggest that you are feeling disconnected in some aspect of your life - work, relationship or home life. 
          
          To dream that a plane crashes suggests that you have set overly high and unrealistic goals for yourself.  Your goals may be too high and are impossible to realize. You are in danger of having it come crashing down. Alternatively, your lack of confidence, self-defeating attitude and self-doubt toward the goals you have set for yourself is represented by the crashing airplane; you do not believe in your ability to attain those goals. Loss of power and uncertainty in achieving your goals are also signified.
          
          To dream that an airplane is hijacked signifies disturbing feelings and past emotions in your subconscious mind. 
          
          Dreaming of airplanes flying in formation represents working together toward a common goal.
          
          To see an airplane landing in your dream signifies completion of a journey or some task. Some issues that were previously out of control have been resolved.`,
        },
        {
          id: 105,
          keyword: `airport`,
          meaning: `To see an airport in your dream symbolizes birth (arrivals) and death (departures). If the airport is busy, then it signifies the desire for freedom, high ideals, ambition, and hopes. It is an indication that you are approaching a new departure in your life. Some new idea is taking off or is ready to take off. You may be experiencing a new relationship, new career path or new adventure. 

          To dream of a deserted airport indicates that your plans or goals will be changed or delayed. You are having to put some aspect of your life on hold.`,
        },
        {
          id: 106,
          keyword: `aisle`,
          meaning: `To dream that you are walking down or through an aisle represents your ability to move forward in life with confidence. There is balance in your life. Alternatively, the dream indicates dissension and disagreements. You are stuck in the middle between two diverging viewpoints.`,
        },
        {
          id: 107,
          keyword: `alabaster`,
          meaning: `To see alabaster in your dream represents success in your love life. You have healthy personal relationships.

          To dream that you break an alabaster figurine signifies grief, sorrow, and regrets.`,
        },
      ])
    })
}
