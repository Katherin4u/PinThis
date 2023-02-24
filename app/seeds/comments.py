from app.models import db, Comment, environment, SCHEMA


def seed_comments():
    User1_comment6 = Comment(
        user_id=1, post_id=6, comment='You have a beautiful smile that lights up the room!')
    User1_comment7 = Comment(
        user_id=1, post_id=7, comment=' Your positive attitude is infectious and always makes people feel better.')
    User1_comment8 = Comment(
        user_id=1, post_id=8, comment=" Your kindness and generosity towards others is truly inspiring.")
    User1_comment9 = Comment(
        user_id=1, post_id=9, comment="You have a natural talent for making people feel welcomed and appreciated. ")
    User1_comment10 = Comment(
        user_id=1, post_id=10, comment=" Your work ethic and dedication are truly impressive. ")
    User1_comment11 = Comment(
        user_id=1, post_id=11, comment="Your creativity and imagination are truly boundless. ")
    User1_comment12 = Comment(
        user_id=1, post_id=12, comment=" You have a unique and special way of looking at the world that is truly inspiring. ")
    User1_comment13 = Comment(
        user_id=1, post_id=13, comment="Your sense of humor is always on point and never fails to make people laugh. ")
    User1_comment14 = Comment(
        user_id=1, post_id=14, comment=" Your intelligence and insight are truly impressive.")
    User1_comment15 = Comment(
        user_id=1, post_id=15, comment=" Your passion for life and all it has to offer is truly inspiring.")
    User1_comment16 = Comment(
        user_id=1, post_id=16, comment=" You have a rare and valuable talent that sets you apart from others.")
    User1_comment17 = Comment(
        user_id=1, post_id=17, comment="Your ability to see the good in others is truly remarkable.")
    User1_comment18 = Comment(
        user_id=1, post_id=18, comment="You have a real talent for bringing people together and fostering a sense of community.")
    User1_comment19 = Comment(
        user_id=1, post_id=19, comment="Your dedication to your work and your goals is truly admirable.")
    User1_comment20 = Comment(
        user_id=1, post_id=20, comment="Your ability to stay calm under pressure is truly remarkable.")

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
    User2_comment11 = Comment(
        user_id=2, post_id=11, comment='Your positive attitude is infectious and always brightens my day.')
    User2_comment12 = Comment(
        user_id=2, post_id=12, comment='Your hard work and dedication are truly inspiring.')
    User2_comment13 = Comment(
        user_id=2, post_id=13, comment='You have a natural talent for making others feel appreciated.')
    User2_comment14 = Comment(
        user_id=2, post_id=14, comment='Your creativity never fails to impress me.')
    User2_comment15 = Comment(
        user_id=2, post_id=15, comment='I love how you always go above and beyond what is expected of you.')
    User2_comment16 = Comment(
        user_id=2, post_id=16, comment='You have a great sense of humor that always puts a smile on my face.')
    User2_comment17 = Comment(
        user_id=2, post_id=17, comment='Your intelligence and insight are truly remarkable.')
    User2_comment18 = Comment(
        user_id=2, post_id=18, comment='You have a unique and special talent that sets you apart from others.')
    User2_comment19 = Comment(
        user_id=2, post_id=19, comment='Your passion for your hobbies is truly inspiring.')
    User2_comment20 = Comment(
        user_id=2, post_id=20, comment='Your leadership skills are exceptional and greatly valued.')

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

    comments = [ User1_comment6, User1_comment7, User1_comment8,
                User1_comment9, User1_comment10, User1_comment11, User1_comment12, User1_comment13, User1_comment14, User1_comment15, User1_comment16,
                User1_comment17, User1_comment18, User1_comment19, User1_comment20, User2_comment1, User2_comment2, User2_comment3, User2_comment4 , User2_comment5,User2_comment11, User2_comment12, User2_comment13, User2_comment14,
                User2_comment15,User2_comment16, User2_comment17, User2_comment18,User2_comment19,User2_comment20,User3_comment1,User3_comment2,
                User3_comment3,User3_comment4, User3_comment5, User3_comment6,User3_comment7,User3_comment8,
                User3_comment9,
                User3_comment10,
                User3_comment16,
                User3_comment17,
                User3_comment18,
                User3_comment19,
                User3_comment20,
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
                ]
    
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


