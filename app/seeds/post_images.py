from app.models import db, PostImage, environment, SCHEMA


def seed_post_images():
    john_post1_image = PostImage(
        user_id=1,
        post_id=1,
        url='https://i.pinimg.com/564x/2f/46/4e/2f464e92b8e79b7cc38ecf0a77f2f177.jpg'
    )
    john_post2_image = PostImage(
        user_id=1,
        post_id=2,
        url='https://i.pinimg.com/564x/4f/75/84/4f75847f9214fa0e8587969605801a39.jpg'
    )
    john_post3_image = PostImage(
        user_id=1,
        post_id=3,
        url='https://i.pinimg.com/564x/17/9c/06/179c06b396d6abcb136e707e5bbc4f35.jpg'
    )
    john_post4_image = PostImage(
        user_id=1,
        post_id=4,
        url='https://i.pinimg.com/564x/3c/73/b7/3c73b7fb31a4208f72884102afb3e95a.jpg'
    )
    john_post5_image = PostImage(
        user_id=1,
        post_id=5,
        url='https://i.pinimg.com/564x/47/a3/fe/47a3fe120b21451eb0df20b70fb7052b.jpg'
    )

    sarah_post1_image = PostImage(
        user_id=2,
        post_id=6,
        url='https://i.pinimg.com/564x/8a/94/07/8a9407e9d581fb735469e030d8cb5606.jpg'
    )
    sarah_post2_image = PostImage(
        user_id=2,
        post_id=7,
        url='https://i.pinimg.com/564x/c1/bc/e4/c1bce4234cad2e593dd172f6c53b4e90.jpg'
    )
    sarah_post3_image = PostImage(
        user_id=2,
        post_id=8,
        url='https://i.pinimg.com/564x/6a/47/a2/6a47a260995f587444bee555e1053019.jpg'
    )
    sarah_post4_image = PostImage(
        user_id=2,
        post_id=9,
        url='https://i.pinimg.com/564x/13/46/3a/13463af93e0b39147f2aa78e837bb249.jpg'
    )
    sarah_post5_image = PostImage(
        user_id=2,
        post_id=10,
        url='https://i.pinimg.com/564x/6f/7d/81/6f7d818ad322027e59b11be633a2f843.jpg'
    )

    jack_post1_image = PostImage(
        user_id=3,
        post_id=11,
        url='https://i.pinimg.com/564x/ff/1a/ae/ff1aae61d5e6eaf5cc1f69804c72d6ea.jpg'
    )
    jack_post2_image = PostImage(
        user_id=3,
        post_id=12,
        url='https://i.pinimg.com/564x/fd/c8/e1/fdc8e12b0f3a8a970495215f1368fa7c.jpg'
    )
    jack_post3_image = PostImage(
        user_id=3,
        post_id=13,
        url='https://i.pinimg.com/564x/42/92/af/4292af4e9272791132c9f55174559322.jpg'
    )
    jack_post4_image = PostImage(
        user_id=3,
        post_id=14,
        url='https://i.pinimg.com/564x/09/66/4f/09664f3441de659f26bf604a2f1f8f43.jpg'
    )
    jack_post5_image = PostImage(
        user_id=3,
        post_id=15,
        url='https://i.pinimg.com/564x/9b/39/61/9b396126f1ffb749dba41fee7dd7c992.jpg'
    )

    lisa_post1_image = PostImage(
        user_id=4,
        post_id=16,
        url='https://i.pinimg.com/564x/0b/a8/66/0ba866dada300d51eeac8a64088e557c.jpg'
    )
    lisa_post2_image = PostImage(
        user_id=4,
        post_id=17,
        url='https://i.pinimg.com/564x/91/69/2e/91692eb256e69614bbacf1b03685f6ab.jpg'
    )
    lisa_post3_image = PostImage(
        user_id=4,
        post_id=18,
        url='https://i.pinimg.com/564x/98/31/34/983134546d8739b4d79d83b58dec9c3b.jpg'
    )
    lisa_post4_image = PostImage(
        user_id=4,
        post_id=19,
        url='https://i.pinimg.com/564x/d6/d8/be/d6d8be5eae85fef8776e5d2e99712cc4.jpg'
    )
    lisa_post5_image = PostImage(
        user_id=4,
        post_id=20,
        url='https://i.pinimg.com/564x/8a/8d/f7/8a8df7f99289e8abf64e895bb98b3172.jpg'
    )

    images = [john_post1_image,
              john_post2_image,
              john_post3_image,
              john_post4_image,
              john_post5_image,
              sarah_post1_image,
              sarah_post2_image,
              sarah_post3_image,
              sarah_post4_image,
              sarah_post5_image,
              jack_post1_image,
              jack_post2_image,
              jack_post3_image,
              jack_post4_image,
              jack_post5_image,
              lisa_post1_image,
              lisa_post2_image,
              lisa_post3_image,
              lisa_post4_image,
              lisa_post5_image]
    
    for image in images:
        db.session.add(image)
    db.session.commit()

def undo_post_images():
    if environment == "production":
        db.session.execute(
            f"TRUNCATE table {SCHEMA}.post_images RESTART IDENTITY CASCADE;")
    else:
        db.session.execute("DELETE FROM post_images")

    db.session.commit()
