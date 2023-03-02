from app.models import db, Comment, environment, SCHEMA


def seed_comments():
    User1_comment16 = Comment(
        user_id=1, post_id=16, comment='You have a beautiful smile that lights up the room!')
    User1_comment17 = Comment(
        user_id=1, post_id=17, comment=' Your positive attitude is infectious and always makes people feel better.')
    User1_comment18 = Comment(
        user_id=1, post_id=18, comment=" Your kindness and generosity towards others is truly inspiring.")
    User1_comment19 = Comment(
        user_id=1, post_id=19, comment="You have a natural talent for making people feel welcomed and appreciated. ")
    User1_comment20 = Comment(
        user_id=1, post_id=20, comment=" Your work ethic and dedication are truly impressive. ")
    User1_comment21 = Comment(
        user_id=1, post_id=21, comment="Your creativity and imagination are truly boundless. ")
    User1_comment22 = Comment(
        user_id=1, post_id=22, comment=" You have a unique and special way of looking at the world that is truly inspiring. ")
    User1_comment23 = Comment(
        user_id=1, post_id=23, comment="Your sense of humor is always on point and never fails to make people laugh. ")
    User1_comment24 = Comment(
        user_id=1, post_id=24, comment=" Your intelligence and insight are truly impressive.")
    User1_comment25 = Comment(
        user_id=1, post_id=25, comment=" Your passion for life and all it has to offer is truly inspiring.")
    User1_comment26 = Comment(
        user_id=1, post_id=26, comment=" You have a rare and valuable talent that sets you apart from others.")
    User1_comment27 = Comment(
        user_id=1, post_id=27, comment="Your ability to see the good in others is truly remarkable.")
    User1_comment28 = Comment(
        user_id=1, post_id=28, comment="You have a real talent for bringing people together and fostering a sense of community.")
    User1_comment29 = Comment(
        user_id=1, post_id=29, comment="Your dedication to your work and your goals is truly admirable.")
    User1_comment30 = Comment(
        user_id=1, post_id=30, comment="You have a beautiful smile")
    User1_comment31 = Comment(
        user_id=1, post_id=31, comment="Your kindness is inspiring")
    User1_comment32 = Comment(
        user_id=1, post_id=32, comment="You have a great sense of humor")
    User1_comment33 = Comment(
        user_id=1, post_id=33, comment="Your hard work is paying off")
    User1_comment34 = Comment(
        user_id=1, post_id=34, comment="You're a great listener"
    )
    User1_comment35 = Comment(
        user_id=1, post_id=35, comment="You always make me feel better"
    )
    User1_comment36 = Comment(
        user_id=1, post_id=36, comment="Your positivity is contagious"
    )
    User1_comment37 = Comment(
        user_id=1, post_id=37, comment="You have a unique perspective"
    )
    User1_comment38 = Comment(
        user_id=1, post_id=38, comment="Your creativity is impressive"
    )
    User1_comment39 = Comment(
        user_id=1, post_id=39, comment="You're doing a fantastic job")
    User1_comment40 = Comment(
        user_id=1, post_id=40, comment="You make the world a better place"
    )
    User1_comment41 = Comment(
        user_id=1, post_id=41, comment="Your intelligence is impressive"
    )
    User1_comment42 = Comment(
        user_id=1, post_id=42, comment="You have a big heart"
    )
    User1_comment43 = Comment(
        user_id=1, post_id=43, comment="Your compassion is inspiring"
    )
    User1_comment44 = Comment(
        user_id=1, post_id=44, comment="You're a great friend")
    User1_comment45 = Comment(
        user_id=1, post_id=45, comment="Your generosity is appreciated"
    )
    User1_comment46 = Comment(
        user_id=1, post_id=46, comment="You have a calming presence")
    User1_comment47 = Comment(
        user_id=1, post_id=47, comment="Your talent is remarkable"
    )
    User1_comment48 = Comment(
        user_id=1, post_id=48, comment="You have a strong character"
    )
    User1_comment49 = Comment(
        user_id=1, post_id=49, comment="Your courage is admirable"
    )
    User1_comment50 = Comment(
        user_id=1, post_id=50, comment="You have a contagious energy"
    )
    User1_comment51 = Comment(
        user_id=1, post_id=51, comment="Your dedication is admirable"
    )
    User1_comment52 = Comment(
        user_id=1, post_id=52, comment="You're a great team player"
    )
    User1_comment53 = Comment(
        user_id=1, post_id=53, comment="Your perseverance is inspiring"
    )
    User1_comment54 = Comment(
        user_id=1, post_id=54, comment="You have a magnetic personality"
    )
    User1_comment55 = Comment(
        user_id=1, post_id=55, comment="Your positivity brightens up my day"
    )
    User1_comment56 = Comment(
        user_id=1, post_id=56, comment="You're a great role model"
    )
    User1_comment57 = Comment(
        user_id=1, post_id=57, comment="Your support means a lot to me"
    )
    User1_comment58 = Comment(
        user_id=1, post_id=58, comment="You have a wonderful sense of humor"
    )
    User1_comment59 = Comment(
        user_id=1, post_id=59, comment="Your creativity knows no bounds"
    )
    User1_comment60 = Comment(
        user_id=1, post_id=60, comment="You always see the good in people"
    )

    User2_comment1 = Comment(
        user_id=2, post_id=1, comment="Your sense of style is so chic and on-trend.")
    User2_comment2 = Comment(
        user_id=2, post_id=2, comment='Your willingness to take risks and try new things is truly inspiring.')
    User2_comment3 = Comment(
        user_id=2, post_id=3, comment='Your attention to detail is impeccable and truly sets you apart.')
    User2_comment4 = Comment(
        user_id=2, post_id=4, comment='You have a natural talent for public speaking and inspiring others.')
    User2_comment5 = Comment(
        user_id=2, post_id=5, comment='Your commitment to your family and loved ones is truly admirable.')
    User2_comment6 = Comment(
        user_id=2, post_id=6, comment='Your positive attitude is infectious and always brightens my day.')
    User2_comment7 = Comment(
        user_id=2, post_id=7, comment='Your hard work and dedication are truly inspiring.')
    User2_comment8 = Comment(
        user_id=2, post_id=8, comment='You have a natural talent for making others feel appreciated.')
    User2_comment9 = Comment(
        user_id=2, post_id=9, comment='Your creativity never fails to impress me.')
    User2_comment10 = Comment(
        user_id=2, post_id=10, comment='I love how you always go above and beyond what is expected of you.')
    User2_comment11 = Comment(
        user_id=2, post_id=11, comment='You have a great sense of humor that always puts a smile on my face.')
    User2_comment12 = Comment(
        user_id=2, post_id=12, comment='Your intelligence and insight are truly remarkable.')
    User2_comment13 = Comment(
        user_id=2, post_id=13, comment='You have a unique and special talent that sets you apart from others.')
    User2_comment14 = Comment(
        user_id=2, post_id=14, comment='Your passion for your hobbies is truly inspiring.')
    User2_comment15 = Comment(
        user_id=2, post_id=15, comment='Your leadership skills are exceptional and greatly valued.')
    User2_comment30 = Comment(
        user_id=2, post_id=30, comment="You have a kind heart"
)
    User2_comment31 = Comment(
        user_id=2, post_id=31, comment="Your intelligence is impressive"
)
    User2_comment32 = Comment(
        user_id=2, post_id=32, comment="You have a great work ethic"
)
    User2_comment33 = Comment(
        user_id=2, post_id=33, comment="Your enthusiasm is contagious"
)
    User2_comment34 = Comment(
        user_id=2, post_id=34, comment="You have a unique talent"
)
    User2_comment35 = Comment(
        user_id=2, post_id=35, comment="Your generosity knows no limits"
)
    User2_comment36 = Comment(
        user_id=2, post_id=36, comment="You have a calming influence on others"
)
    User2_comment37 = Comment(
        user_id=2, post_id=37, comment="Your leadership skills are remarkable"
)
    User2_comment38 = Comment(
        user_id=2, post_id=38, comment="You have a way with words"
)
    User2_comment39 = Comment(
        user_id=2, post_id=39, comment="Your empathy is inspiring"
)
    User2_comment40 = Comment(
        user_id=2, post_id=40, comment="You have a great sense of style"
)
    User2_comment41 = Comment(
        user_id=2, post_id=41, comment="Your patience is a virtue"
)
    User2_comment42 = Comment(
        user_id=2, post_id=42, comment="You have a heart of gold"
)
    User2_comment43 = Comment(
        user_id=2, post_id=43, comment="Your thoughtfulness is appreciated"
)
    User2_comment44 = Comment(
        user_id=2, post_id=44, comment="You have a great attitude"
)
    User2_comment45 = Comment(
        user_id=2, post_id=45, comment="Your knowledge is impressive"
)
    User2_comment46 = Comment(
        user_id=2, post_id=46, comment="You have a great taste in music"
)
    User2_comment47 = Comment(
        user_id=2, post_id=47, comment="Your advice is always helpful"
)
    User2_comment48 = Comment(
        user_id=2, post_id=48, comment="You have a great work-life balance")
    User2_comment49 = Comment(
        user_id=2, post_id=49, comment="Your determination is admirable"
)
    User2_comment50 = Comment(
        user_id=2, post_id=50, comment="You have a great sense of direction"
)
    User2_comment51 = Comment(
        user_id=2, post_id=51, comment="Your smile lights up the room")
    User2_comment52 = Comment(
        user_id=2, post_id=52, comment="You have a unique perspective on things")
    User2_comment53 = Comment(
        user_id=2, post_id=53, comment="Your honesty is refreshing"
)
    User2_comment54 = Comment(
        user_id=2, post_id=54, comment="You have a great way with people")
    User2_comment55 = Comment(
        user_id=2, post_id=55, comment="Your passion is contagious"
)
    User2_comment56 = Comment(
        user_id=2, post_id=56, comment="You have a great sense of adventure"
)
    User2_comment57 = Comment(
        user_id=2, post_id=57, comment="Your sense of humor is infectious"
)
    User2_comment58 = Comment(
        user_id=2, post_id=58, comment="You have a great way with words"
)
    User2_comment59 = Comment(
        user_id=2, post_id=59, comment="Your confidence is inspiring"
)
    User2_comment60 = Comment(
        user_id=2, post_id=60, comment="You have a great sense of timing"
)

    User3_comment1 = Comment(
        user_id=3, post_id=1, comment='I appreciate your honesty and integrity.')
    User3_comment2 = Comment(
        user_id=3, post_id=2, comment='Your willingness to help others is truly admirable.')
    User3_comment3 = Comment(
        user_id=3, post_id=3, comment='Your kindness and generosity are deeply appreciated.')
    User3_comment4 = Comment(
        user_id=3, post_id=4, comment='Your positive impact on those around you is immeasurable.')
    User3_comment5 = Comment(
        user_id=3, post_id=5, comment='Your compassion and empathy towards others is a rare and valuable trait.')
    User3_comment6 = Comment(
        user_id=3, post_id=6, comment='Your attention to detail is impeccable.')
    User3_comment7 = Comment(
        user_id=3, post_id=7, comment='You have a great sense of style and always look amazing.')
    User3_comment8 = Comment(
        user_id=3, post_id=8, comment='Your support and encouragement mean the world to me.')
    User3_comment9 = Comment(
        user_id=3, post_id=9, comment='You are a true asset to your team.')
    User3_comment10 = Comment(
        user_id=3, post_id=10, comment='Your ability to think outside the box is truly impressive.')
    User3_comment16 = Comment(
        user_id=3, post_id=16, comment='You have a natural talent for problem-solving.')
    User3_comment17 = Comment(
        user_id=3, post_id=17, comment='Your dedication to your work is truly remarkable.')
    User3_comment18 = Comment(
        user_id=3, post_id=18, comment='Your patience and understanding are greatly appreciated.')
    User3_comment19 = Comment(
        user_id=3, post_id=19, comment='Your ability to adapt to new situations is truly admirable.')
    User3_comment20 = Comment(
        user_id=3, post_id=20, comment='You have a great sense of intuition and always know just what to say.')
    User3_comment21 = Comment(
        user_id=3, post_id=21, comment="Your charisma is undeniable"
)
    User3_comment22 = Comment(
        user_id=3, post_id=22, comment="You have a great sense of humor"
)
    User3_comment23 = Comment(
        user_id=3, post_id=23, comment="Your thoughtfulness is admirable"
)
    User3_comment24 = Comment(
        user_id=3, post_id=24, comment="You have a great sense of compassion")
    User3_comment25 = Comment(
        user_id=3, post_id=25, comment="Your knowledge is invaluable"
)
    User3_comment26 = Comment(
        user_id=3, post_id=26, comment="You have a great sense of humor"
)
    User3_comment27 = Comment(
        user_id=3, post_id=27, comment="Your positivity is infectious"
)
    User3_comment28 = Comment(
        user_id=3, post_id=28, comment="You have a great way with people"
)
    User3_comment29 = Comment(
        user_id=3, post_id=29, comment="Your perseverance is remarkable")
    User3_comment30 = Comment(
        user_id=3, post_id=30, comment="You have a great sense of intuition"
)
    User3_comment46 = Comment(
        user_id=3, post_id=46, comment="Your intelligence is impressive"
)
    User3_comment47 = Comment(
        user_id=3, post_id=47, comment="You have a great sense of humor")
    User3_comment48 = Comment(
        user_id=3, post_id=48, comment="Your generosity is inspiring"
)
    User3_comment49 = Comment(
        user_id=3, post_id=49, comment="You have a great way with words"
)
    User3_comment50 = Comment(
        user_id=3, post_id=50, comment="Your kindness is unmatched"
)
    User3_comment51 = Comment(
        user_id=3, post_id=51, comment="You have a great sense of humor")
    User3_comment52 = Comment(
        user_id=3, post_id=52, comment="Your creativity is unparalleled")
    User3_comment53 = Comment(
        user_id=3, post_id=53, comment="You have a great sense of adventure"
)
    User3_comment54 = Comment(
        user_id=3, post_id=54, comment="Your passion is contagious"
)
    User3_comment55 = Comment(
        user_id=3, post_id=55, comment="You have a great sense of humor"
)
    User3_comment56 = Comment(
        user_id=3, post_id=56, comment="Your thoughtfulness is appreciated"
)
    User3_comment57 = Comment(
        user_id=3, post_id=57, comment="You have a great sense of humor"
)
    User3_comment58 = Comment(
        user_id=3, post_id=58, comment="Your generosity is remarkable"
)
    User3_comment59 = Comment(
        user_id=3, post_id=59, comment="You have a great way with words"
)
    User3_comment60 = Comment(
        user_id=3, post_id=60, comment="Your patience is a virtue"
)

    User4_comment1 = Comment(
        user_id=4, post_id=1, comment='Your positive energy is contagious and always lifts my spirits.')
    User4_comment2 = Comment(
        user_id=4, post_id=2, comment='Your humility and willingness to learn is truly admirable.')
    User4_comment3 = Comment(
        user_id=4, post_id=3, comment='You are always willing to lend a helping hand when needed.')
    User4_comment4 = Comment(
        user_id=4, post_id=4, comment='Your hard work and determination will surely lead to great things.')
    User4_comment5 = Comment(
        user_id=4, post_id=5, comment='Your dedication to your goals is truly inspiring.')
    User4_comment6 = Comment(
        user_id=4, post_id=6, comment='Your ability to stay calm under pressure is truly impressive.')
    User4_comment7 = Comment(
        user_id=4, post_id=7, comment='Your expertise in your field is truly remarkable.')
    User4_comment8 = Comment(
        user_id=4, post_id=8, comment='Your ability to communicate effectively is truly valuable.')
    User4_comment9 = Comment(
        user_id=4, post_id=9, comment='Your commitment to excellence is truly admirable.')
    User4_comment10 = Comment(
        user_id=4, post_id=10, comment='Your sense of humor always makes my day a little brighter.')
    User4_comment11 = Comment(
        user_id=4, post_id=11, comment='Your willingness to try new things is truly inspiring.')
    User4_comment12 = Comment(
        user_id=4, post_id=12, comment='Your ability to see the best in people is truly a gift.')
    User4_comment13 = Comment(
        user_id=4, post_id=13, comment='Your enthusiasm for life is contagious and always inspiring.')
    User4_comment14 = Comment(
        user_id=4, post_id=14, comment='Your ability to inspire others is truly remarkable.')
    User4_comment15 = Comment(
        user_id=4, post_id=15, comment='Your determination to succeed is truly inspiring.')
    User4_comment16 = Comment(
        user_id=4, post_id=16, comment="You have a great work ethic"
)
    User4_comment17 = Comment(
        user_id=4, post_id=17, comment="Your sense of humor is infectious"
)
    User4_comment18 = Comment(
        user_id=4, post_id=18, comment="You have a great way with people"
)
    User4_comment19 = Comment(
        user_id=4, post_id=19, comment="Your confidence is inspiring"
)
    User4_comment20 = Comment(
        user_id=4, post_id=20, comment="You have a great sense of humor"
)
    User4_comment21 = Comment(
        user_id=4, post_id=21, comment="Your positivity is contagious"
)
    User4_comment22 = Comment(
        user_id=4, post_id=22, comment="You have a great way with words"
)
    User4_comment23 = Comment(
        user_id=4, post_id=23, comment="Your determination is admirable"
)
    User4_comment24 = Comment(
        user_id=4, post_id=24, comment="You have a great sense of adventure"
)
    User4_comment25 = Comment(
        user_id=4, post_id=25, comment="Your kindness is unmatched"
)
    User4_comment26 = Comment(
        user_id=4, post_id=26, comment="You have a great way with people"
)
    User4_comment27 = Comment(
        user_id=4, post_id=27, comment="Your creativity is unparalleled"
)
    User4_comment28 = Comment(
        user_id=4, post_id=28, comment="You have a great sense of humor"


)
    User4_comment29 = Comment(
        user_id=4, post_id=29, comment="You have a heart of gold"
)
    User4_comment30 = Comment(
        user_id=4, post_id=30, comment="Your positive attitude is infectious"
)
    User4_comment31 = Comment(
        user_id=4, post_id=31, comment="You have a great sense of empathy"
)
    User4_comment32 = Comment(
        user_id=4, post_id=32, comment="Your intelligence is impressive"
)
    User4_comment33 = Comment(
        user_id=4, post_id=33, comment="You have a great sense of humor"
)
    User4_comment34 = Comment(
        user_id=4, post_id=34, comment="Your support means a lot to me"
)
    User4_comment35 = Comment(
        user_id=4, post_id=35, comment="You have a great sense of direction"
)
    User4_comment36 = Comment(
        user_id=4, post_id=36, comment="Your hard work is paying off"
)
    User4_comment37 = Comment(
        user_id=4, post_id=37, comment="You have a unique talent"
)
    User4_comment38 = Comment(
        user_id=4, post_id=38, comment="Your kindness is inspiring"
)
    User4_comment39 = Comment(
        user_id=4, post_id=39, comment="You have a great way with people"
)
    User4_comment40 = Comment(
        user_id=4, post_id=40, comment="Your creativity knows no bounds"
)
    User4_comment41 = Comment(
        user_id=4, post_id=41, comment="You have a calming presence"
)
    User4_comment42 = Comment(
        user_id=4, post_id=42, comment="Your determination is remarkable"
)
    User4_comment43 = Comment(
        user_id=4, post_id=43, comment="You have a great sense of adventure"
)
    User4_comment44 = Comment(
        user_id=4, post_id=44, comment="Your positivity is refreshing"
)
    User4_comment45 = Comment(
        user_id=4, post_id=45, comment="You have a way with words"
)

    comments = [User1_comment16,
User1_comment17,
User1_comment18,
User1_comment19,
User1_comment20,
User1_comment21,
User1_comment22,
User1_comment23,
User1_comment24,
User1_comment25,
User1_comment26,
User1_comment27,
User1_comment28,
User1_comment29,
User1_comment30,
User1_comment31,
User1_comment32,
User1_comment33,
User1_comment34,
User1_comment35,
User1_comment36,
User1_comment37,
User1_comment38,
User1_comment39,
User1_comment40,
User1_comment41,
User1_comment42,
User1_comment43,
User1_comment44,
User1_comment45,
User1_comment46,
User1_comment47,
User1_comment48,
User1_comment49,
User1_comment50,
User1_comment51,
User1_comment52,
User1_comment53,
User1_comment54,
User1_comment55,
User1_comment56,
User1_comment57,
User1_comment58,
User1_comment59,
User1_comment60,
User2_comment1,
User2_comment2,
User2_comment3,
User2_comment4,
User2_comment5,
User2_comment6,
User2_comment7,
User2_comment8,
User2_comment9,
User2_comment10,
User2_comment11,
User2_comment12,
User2_comment13,
User2_comment14,
User2_comment15,
User2_comment30,
User2_comment31,
User2_comment32,
User2_comment33,
User2_comment34,
User2_comment35,
User2_comment36,
User2_comment37,
User2_comment38,
User2_comment39,
User2_comment40,
User2_comment41,
User2_comment42,
User2_comment43,
User2_comment44,
User2_comment45,
User2_comment46,
User2_comment47,
User2_comment48,
User2_comment49,
User2_comment50,
User2_comment51,
User2_comment52,
User2_comment53,
User2_comment54,
User2_comment55,
User2_comment56,
User2_comment57,
User2_comment58,
User2_comment59,
User2_comment60,
User3_comment1,
User3_comment2,
User3_comment3,
User3_comment4,
User3_comment5,
User3_comment6,
User3_comment7,
User3_comment8,
User3_comment9,
User3_comment10,
User3_comment16,
User3_comment17,
User3_comment18,
User3_comment19,
User3_comment20,
User3_comment21,
User3_comment22,
User3_comment23,
User3_comment24,
User3_comment25,
User3_comment26,
User3_comment27,
User3_comment28,
User3_comment29,
User3_comment30,
User3_comment46,
User3_comment47,
User3_comment48,
User3_comment49,
User3_comment50,
User3_comment51,
User3_comment52,
User3_comment53,
User3_comment54,
User3_comment55,
User3_comment56,
User3_comment57,
User3_comment58,
User3_comment59,
User3_comment60,
User4_comment1,
User4_comment2,
User4_comment3,
User4_comment4,
User4_comment5,
User4_comment6,
User4_comment7,
User4_comment8,
User4_comment9,
User4_comment10,
User4_comment11,
User4_comment12,
User4_comment13,
User4_comment14,
User4_comment15,
User4_comment16,
User4_comment17,
User4_comment18,
User4_comment19,
User4_comment20,
User4_comment21,
User4_comment22,
User4_comment23,
User4_comment24,
User4_comment25,
User4_comment26,
User4_comment27,
User4_comment28,
User4_comment29,
User4_comment30,
User4_comment31,
User4_comment32,
User4_comment33,
User4_comment34,
User4_comment35,
User4_comment36,
User4_comment37,
User4_comment38,
User4_comment39,
User4_comment40,
User4_comment41,
User4_comment42,
User4_comment43,
User4_comment44,
User4_comment45,
User2_comment43]

    for comment in comments:
        db.session.add(comment)
    db.session.commit()


def undo_comments():
    if environment == "production":
        db.session.execute(
            f"TRUNCATE table {SCHEMA}.comments RESTART IDENTITY CASCADE;")
    else:
        db.session.execute("DELETE FROM comments")

    db.session.commit()
