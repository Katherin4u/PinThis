from app.models import db, Like, environment, SCHEMA

def seed_likes():
    User1_like16 =Like(
        user_id=1, post_id=16
    )
    User1_like17 =Like(
        user_id=1, post_id=17
    )
    User1_like18 =Like(
        user_id=1, post_id=18
    )
    User1_like19 =Like(
        user_id=1, post_id=19
    )
    User1_like20 =Like(
        user_id=1, post_id=20
    )
    User1_like21 =Like(
        user_id=1, post_id=21
    )
    User1_like22 =Like(
        user_id=1, post_id=22
    )
    User1_like23 =Like(
        user_id=1, post_id=23
    )
    User1_like24 =Like(
        user_id=1, post_id=24
    )
    User1_like25 =Like(
        user_id=1, post_id=25
    )
    User1_like26 =Like(
        user_id=1, post_id=26
    )
    User1_like27 =Like(
        user_id=1, post_id=27
    )


    User2_like1 = Like(
        user_id=2, post_id=1
    )
    User2_like2 = Like(
        user_id=2, post_id=2
    )
    User2_like3 = Like(
        user_id=2, post_id=3
    )
    User2_like4 = Like(
        user_id=2, post_id=4
    )
    User2_like5 = Like(
        user_id=2, post_id=5
    )
    User2_like6 = Like(
        user_id=2, post_id=6
    )
    User2_like7 = Like(
        user_id=2, post_id=7
    )
    User2_like8 = Like(
        user_id=2, post_id=8
    )
    User2_like9 = Like(
        user_id=2, post_id=9
    )
    User2_like10= Like(
        user_id=2, post_id=10
    )
    User2_like11= Like(
        user_id=2, post_id=11
    )
    User2_like12 = Like(
        user_id=2, post_id=12
    )


    User3_like1 = Like(
        user_id=3, post_id=1
    )
    User3_like2 = Like(
        user_id=3, post_id=2
    )
    User3_like3 = Like(
        user_id=3, post_id=3
    )
    User3_like4 = Like(
        user_id=3, post_id=4
    )
    User3_like5 = Like(
        user_id=3, post_id=5
    )
    User3_like6 = Like(
        user_id=3, post_id=6
    )
    User3_like7 = Like(
        user_id=3, post_id=7
    )
    User3_like8 = Like(
        user_id=3, post_id=8
    )
    User3_like9 = Like(
        user_id=3, post_id=9
    )
    User3_like10 = Like(
        user_id=3, post_id=10
    )
    User3_like11 = Like(
        user_id=3, post_id=11
    )
    User3_like12 = Like(
        user_id=3, post_id=12
    )



    User3_like15 = Like(
        user_id=3, post_id=15
    )
    User3_like16 = Like(
        user_id=3, post_id=16
    )
    User3_like17= Like(
        user_id=3, post_id=17
    )
    User3_like18= Like(
        user_id=3, post_id=18
    )
    User3_like19= Like(
        user_id=3, post_id=19
    )
    User3_like20= Like(
        user_id=3, post_id=20
    )
    User3_like21= Like(
        user_id=3, post_id=21
    )
    User3_like22= Like(
        user_id=3, post_id=22
    )
    User3_like23= Like(
        user_id=3, post_id=23
    )
    User3_like24= Like(
        user_id=3, post_id=24
    )
    User3_like25= Like(
        user_id=3, post_id=25
    )
    User3_like26= Like(
        user_id=3, post_id=26
    )

    likes =[
User1_like16,
User1_like17,
User1_like18,
User1_like19,
User1_like20,
User1_like21,
User1_like22,
User1_like23,
User1_like24,
User1_like25,
User1_like26,
User1_like27,
User2_like1,
User2_like2,
User2_like3,
User2_like4,
User2_like5,
User2_like6,
User2_like7,
User2_like8,
User2_like9,
User2_like10,
User2_like11,
User2_like12,
User3_like1,
User3_like2,
User3_like3,
User3_like4,
User3_like5,
User3_like6,
User3_like7,
User3_like8,
User3_like9,
User3_like10,
User3_like11,
User3_like12,
User3_like15,
User3_like16,
User3_like17,
User3_like18,
User3_like19,
User3_like20,
User3_like21,
User3_like22,
User3_like23,
User3_like24,
User3_like25,
User3_like26,
    ]

    for like in likes:
        db.session.add(like)
    db.session.commit()

def undo_likes():
    if environment == "production":
        db.session.execute(
            f"TRUNCATE table {SCHEMA}.likes RESTART IDENTITY CASCADE;")
    else:
        db.session.execute("DELETE FROM likes")

    db.session.commit()