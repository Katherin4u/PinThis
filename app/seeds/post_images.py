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
    john_post6_image = PostImage(
        user_id=1,
        post_id=6,
        url="https://i.pinimg.com/236x/bf/34/10/bf3410cb7a5c7af07ed6e83ba9bf3dc5.jpg"
    )
    john_post7_image = PostImage(
        user_id=1,
        post_id=7,
        url="https://i.pinimg.com/236x/9b/49/98/9b499864f29e443aca43c89509e9cde5.jpg"
    )
    john_post8_image = PostImage(
        user_id=1,
        post_id=8,
        url="https://i.pinimg.com/236x/9a/fd/37/9afd37371d59311f9b8bb243219e4ef5.jpg"
    )
    john_post9_image = PostImage(
        user_id=1,
        post_id=9,
        url="https://i.pinimg.com/236x/20/ec/ba/20ecbaf03057bc7edb2b2623f76fbe87.jpg"
    )
    john_post10_image = PostImage(
        user_id=1,
        post_id=10,
        url="https://i.pinimg.com/236x/bc/0e/d7/bc0ed7daca3f258335c8ed727716b8ed.jpg"
    )
    john_post11_image = PostImage(
        user_id=1,
        post_id=11,
        url="https://i.pinimg.com/236x/13/32/5b/13325b139e6895631c35c2c25d069f3c.jpg"
    )
    john_post12_image = PostImage(
        user_id=1,
        post_id=12,
        url="https://i.pinimg.com/236x/bc/6b/b9/bc6bb9d714ed6f2d1d4a3f1b8a7d2ce4.jpg"
    )
    john_post13_image = PostImage(
        user_id=1,
        post_id=13,
        url="https://i.pinimg.com/236x/37/ff/f6/37fff6210e4f360778131f6cab61d007.jpg"
    )
    john_post14_image = PostImage(
        user_id=1,
        post_id=14,
        url="https://i.pinimg.com/564x/75/4e/75/754e75d6dc0f6135240fffd0c51088a3.jpg"
    )
    john_post15_image = PostImage(
        user_id=1,
        post_id=15,
        url="https://i.pinimg.com/236x/44/b9/e1/44b9e136feea52facfbe7b198660ac0c.jpg"
    )

    sarah_post1_image = PostImage(
        user_id=2,
        post_id=16,
        url="https://i.pinimg.com/236x/44/b9/e1/44b9e136feea52facfbe7b198660ac0c.jpg"
    )
    sarah_post2_image = PostImage(
        user_id=2,
        post_id=17,
        url='https://i.pinimg.com/564x/c1/bc/e4/c1bce4234cad2e593dd172f6c53b4e90.jpg'
    )
    sarah_post3_image = PostImage(
        user_id=2,
        post_id=18,
        url='https://i.pinimg.com/564x/6a/47/a2/6a47a260995f587444bee555e1053019.jpg'
    )
    sarah_post4_image = PostImage(
        user_id=2,
        post_id=19,
        url='https://i.pinimg.com/564x/13/46/3a/13463af93e0b39147f2aa78e837bb249.jpg'
    )
    sarah_post5_image = PostImage(
        user_id=2,
        post_id=20,
        url='https://i.pinimg.com/564x/6f/7d/81/6f7d818ad322027e59b11be633a2f843.jpg'
    )
    sarah_post6_image = PostImage(
        user_id=2,
        post_id=21,
        url="https://i.pinimg.com/236x/ba/db/35/badb35dea7c5cb2522b36b7d50348c5e.jpg"
    )
    sarah_post7_image = PostImage(
        user_id=2,
        post_id=22,
        url="https://i.pinimg.com/236x/8e/91/a9/8e91a9a35524c358adae9a1daa765622.jpg"
    )
    sarah_post8_image = PostImage(
        user_id=2,
        post_id=23,
        url="https://i.pinimg.com/236x/d0/8c/aa/d08caabd2a6cc0c6074b4872a3265f91.jpg"
    )
    sarah_post9_image = PostImage(
        user_id=2,
        post_id=24,
        url="https://i.pinimg.com/236x/2d/96/79/2d9679f5d96a413c41f8a81151cb5b4c.jpg"
    )
    sarah_post10_image = PostImage(
        user_id=2,
        post_id=25,
        url="https://i.pinimg.com/236x/85/42/8d/85428d6d5737580b85717ba71993d332.jpg"
    )
    sarah_post11_image = PostImage(
        user_id=2,
        post_id=26,
        url="https://i.pinimg.com/236x/eb/91/55/eb9155f2ab7c91cc94ffcdc964a53946.jpg"
    )
    sarah_post12_image = PostImage(
        user_id=2,
        post_id=27,
        url="https://i.pinimg.com/236x/e3/71/d3/e371d3c564d5ce0c73bba66f662cc803.jpg"
    )
    sarah_post13_image = PostImage(
        user_id=2,
        post_id=28,
        url="https://i.pinimg.com/236x/a0/4a/1f/a04a1f80ebaf6a442ff2ce244fec7068.jpg"
    )
    sarah_post14_image = PostImage(
        user_id=2,
        post_id=29,
        url="https://i.pinimg.com/236x/7b/f8/75/7bf8756a42ede61162ace4d3c48ce114.jpg"
    )
    sarah_post15_image = PostImage(
        user_id=2,
        post_id=30,
        url="https://i.pinimg.com/236x/e4/78/48/e47848c7180615194ed80c161d14a1ce.jpg"
    )

    jack_post1_image = PostImage(
        user_id=3,
        post_id=31,
        url='https://i.pinimg.com/564x/ff/1a/ae/ff1aae61d5e6eaf5cc1f69804c72d6ea.jpg'
    )
    jack_post2_image = PostImage(
        user_id=3,
        post_id=32,
        url='https://i.pinimg.com/564x/fd/c8/e1/fdc8e12b0f3a8a970495215f1368fa7c.jpg'
    )
    jack_post3_image = PostImage(
        user_id=3,
        post_id=33,
        url='https://i.pinimg.com/564x/42/92/af/4292af4e9272791132c9f55174559322.jpg'
    )
    jack_post4_image = PostImage(
        user_id=3,
        post_id=34,
        url='https://i.pinimg.com/564x/09/66/4f/09664f3441de659f26bf604a2f1f8f43.jpg'
    )
    jack_post5_image = PostImage(
        user_id=3,
        post_id=35,
        url='https://i.pinimg.com/564x/9b/39/61/9b396126f1ffb749dba41fee7dd7c992.jpg'
    )
    jack_post6_image = PostImage(
        user_id=3,
        post_id=36,
        url="https://i.pinimg.com/236x/f6/14/c6/f614c607130b4e15511af03be43e5aec.jpg"
    )
    jack_post7_image = PostImage(
        user_id=3,
        post_id=37,
        url="https://i.pinimg.com/236x/8b/2c/7b/8b2c7b49e8ac4c86cb02282c64d3e558.jpg"
    )
    jack_post8_image = PostImage(
        user_id=3,
        post_id=38,
        url="https://i.pinimg.com/236x/41/20/2c/41202c1e9adec3c56ba2ea1f41f80772.jpg"
    )
    jack_post9_image = PostImage(
        user_id=3,
        post_id=39,
        url="https://i.pinimg.com/236x/4b/76/01/4b76013e8e22f7b8a860dccf9a9f01a1.jpg"
    )
    jack_post10_image = PostImage(
        user_id=3,
        post_id=40,
        url="https://i.pinimg.com/236x/44/5b/90/445b909f62a20428ea79a90366174df9.jpg"
    )
    jack_post11_image = PostImage(
        user_id=3,
        post_id=41,
        url="https://i.pinimg.com/236x/d6/04/0e/d6040e8c54fbd80cf41534bb07f0e9ed.jpg"
    )
    jack_post12_image = PostImage(
        user_id=3,
        post_id=42,
        url="https://i.pinimg.com/236x/a5/dc/a2/a5dca26c877dca333cfdc22ed6dc86fb.jpg"
    )
    jack_post13_image = PostImage(
        user_id=3,
        post_id=43,
        url="https://i.pinimg.com/236x/43/48/48/4348487723e9c57d5c15266b9ffd7727.jpg"
    )
    jack_post14_image = PostImage(
        user_id=3,
        post_id=44,
        url="https://i.pinimg.com/236x/e6/3c/03/e63c039e32d22654b05a81e3e927334f.jpg"
    )
    jack_post15_image = PostImage(
        user_id=3,
        post_id=45,
        url="https://i.pinimg.com/564x/f3/28/44/f3284487500ffafaf23420fae00d0e18.jpg"
    )

    lisa_post1_image = PostImage(
        user_id=4,
        post_id=46,
        url='https://i.pinimg.com/564x/0b/a8/66/0ba866dada300d51eeac8a64088e557c.jpg'
    )
    lisa_post2_image = PostImage(
        user_id=4,
        post_id=47,
        url='https://i.pinimg.com/564x/91/69/2e/91692eb256e69614bbacf1b03685f6ab.jpg'
    )
    lisa_post3_image = PostImage(
        user_id=4,
        post_id=48,
        url='https://i.pinimg.com/564x/98/31/34/983134546d8739b4d79d83b58dec9c3b.jpg'
    )
    lisa_post4_image = PostImage(
        user_id=4,
        post_id=49,
        url='https://i.pinimg.com/564x/d6/d8/be/d6d8be5eae85fef8776e5d2e99712cc4.jpg'
    )
    lisa_post5_image = PostImage(
        user_id=4,
        post_id=50,
        url='https://i.pinimg.com/564x/8a/8d/f7/8a8df7f99289e8abf64e895bb98b3172.jpg'
    )
    lisa_post6_image = PostImage(
        user_id=4,
        post_id=51,
        url='https://i.pinimg.com/564x/45/6e/29/456e29cada3c0de5945aba944baacb89.jpg'
    )
    lisa_post7_image = PostImage(
        user_id=4,
        post_id=52,
        url='https://i.pinimg.com/564x/16/61/eb/1661eb687add16b9487ca0122d8161c7.jpg'
    )
    lisa_post8_image = PostImage(
        user_id=4,
        post_id=53,
        url='https://i.pinimg.com/564x/3e/58/b8/3e58b85bb74133665e7a6bd7053fb823.jpg'
    )
    lisa_post9_image = PostImage(
        user_id=4,
        post_id=54,
        url='https://i.pinimg.com/564x/56/d8/3e/56d83e70577f58f84890fe1aea673c9b.jpg'
    )
    lisa_post10_image = PostImage(
        user_id=4,
        post_id=55,
        url='https://i.pinimg.com/564x/9b/10/d0/9b10d0707b575b02641473ca2de62969.jpg'
    )
    lisa_post11_image = PostImage(
        user_id=4,
        post_id=56,
        url='https://i.pinimg.com/736x/bb/af/51/bbaf51c50461833d876033497d4a6231.jpg'
    )
    lisa_post12_image = PostImage(
        user_id=4,
        post_id=57,
        url='https://i.pinimg.com/564x/f1/eb/2a/f1eb2a616e7c0da161a2b0b173e772c7.jpg'
    )
    lisa_post13_image = PostImage(
        user_id=4,
        post_id=58,
        url='https://i.pinimg.com/564x/64/f8/bf/64f8bfaabdb07888c11d02a6e508a0c8.jpg'
    )
    lisa_post14_image = PostImage(
        user_id=4,
        post_id=59,
        url='https://i.pinimg.com/564x/19/5a/b5/195ab55e7838e0145c0f1b04219a3601.jpg'
    )
    lisa_post15_image = PostImage(
        user_id=4,
        post_id=60,
        url='https://i.pinimg.com/564x/cf/9c/c3/cf9cc3caff901569e12b47fa0a2bcedd.jpg'
    )

    images = [john_post1_image,
              john_post2_image,
              john_post3_image,
              john_post4_image,
              john_post5_image,
              john_post6_image,
              john_post7_image,
              john_post8_image,
              john_post9_image,
              john_post10_image,
              john_post11_image,
              john_post12_image,
              john_post13_image,
              john_post14_image,
              john_post15_image,
              sarah_post1_image,
              sarah_post2_image,
              sarah_post3_image,
              sarah_post4_image,
              sarah_post5_image,
              sarah_post6_image,
              sarah_post7_image,
              sarah_post8_image,
              sarah_post9_image,
              sarah_post10_image,
              sarah_post11_image,
              sarah_post12_image,
              sarah_post13_image,
              sarah_post14_image,
              sarah_post15_image,
              sarah_post15_image,
              jack_post6_image,
              jack_post7_image,
              jack_post8_image,
              jack_post9_image,
              jack_post10_image,
              jack_post11_image,
              jack_post12_image,
              jack_post13_image,
              jack_post14_image,
              jack_post15_image,
              jack_post1_image,
              jack_post2_image,
              jack_post3_image,
              jack_post4_image,
              jack_post5_image,
              lisa_post1_image,
              lisa_post2_image,
              lisa_post3_image,
              lisa_post4_image,
              lisa_post5_image,
              lisa_post6_image,
              lisa_post7_image,
              lisa_post8_image,
              lisa_post9_image,
              lisa_post10_image,
              lisa_post11_image,
              lisa_post12_image,
              lisa_post13_image,
              lisa_post14_image,
              lisa_post15_image,
              jack_post15_image,]

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
