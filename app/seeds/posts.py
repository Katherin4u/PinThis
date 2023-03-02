from app.models import db, Post, environment, SCHEMA


def seed_posts():
    john_post1 = Post(
        user_id=1,
        name='Pin by Pinner on spider-verse. | Marvel phone wallpaper, Marvel wallpaper, Marvel spiderman art',
        description='''Spiderman holding a camera like the real G he is '''
    )
    john_post2 = Post(
        user_id=1,
        name='Follow if you ♥ Yamato │ One Piece',
        description='''Not the artist │ Tap on the Pin (Image) to know the artist │ Follow the artists on there social media ♥ │ #GGHimSELF #GGedit #GG #OTAKUGANG'''
    )
    john_post3 = Post(
        user_id=1,
        name='It could happen...',
        description='''/r/fountainpens - A community for fountain pen enthusiasts, from the novice to the collector.'''
    )
    john_post4 = Post(
        user_id=1,
        name='the front page of the internet',
        description='''Reddit gives you the best of the internet in one place. Get a constantly updating feed of breaking news, fun stories, pics, memes, and videos just for you.  '''
    )
    john_post5 = Post(
        user_id=1,
        name='Origamiaround | creating origami, paperart and tutorials | Patreon',
        description='''Become a patron of Origamiaround today: Get access to exclusive content and experiences on the world’s largest membership platform for artists and creators.'''
    )
    john_post6 = Post(
        user_id=1,
        name='Anime wallpaper, girl gaming',
        description='''A girl gaming and having fun'''
    )
    john_post7 = Post(
        user_id=1,
        name='Anime wallpaper',
        description='''cute anime profile picture'''
    )
    john_post8 = Post(
        user_id=1,
        name='Anime wallpaper, Mob Psycho',
        description='''Mob psycho, mob going crazy'''
    )
    john_post9 = Post(
        user_id=1,
        name='Anime wallpaper, jujustu kaisen',
        description='''Love brings joy and harmony'''
    )
    john_post10 = Post(
        user_id=1,
        name='Anime wallpaper, Naruto Shippuden',
        description='''Kindness spreads warmth and love'''
    )
    john_post11 = Post(
        user_id=1,
        name='Anime wallpaper, Ponyo',
        description='''Friendship enriches our lives'''
    )
    john_post12 = Post(
        user_id=1,
        name='Anime wallpaper, Demon Slayer',
        description='''Laughter heals the soul wounds'''
    )
    john_post13 = Post(
        user_id=1,
        name='Anime wallpaper',
        description='''Success comes with hard work'''
    )
    john_post14 = Post(
        user_id=1,
        name='Anime wallpaper, Chainsaw man',
        description='''Sunshine brightens up our day'''
    )
    john_post15 = Post(
        user_id=1,
        name='Anime wallpaper, Chainsaw man',
        description='''Family bonds last forever'''
    )

    sarah_post1 = Post(
        user_id=2,
        name='Sunset Sea Waves Coast Landscape - [720x1440]',
        description='''Sunset Sea Waves Coast Landscape - [720x1440] download and share beautiful image in best available resolution.'''
    )
    sarah_post2 = Post(
        user_id=2,
        name='Aprenda a desenhar seus personagens de animes favoritos passo a passo!',
        description='''Beautiful wallpaper'''
    )
    sarah_post3 = Post(
        user_id=2,
        name='moodyfae',
        description='''White aesthetic quotes'''
    )
    sarah_post4 = Post(
        user_id=2,
        name='aesthetic night wallpaper',
        description='''summertime and butterflies are all your creation'''
    )
    sarah_post5 = Post(
        user_id=2,
        name='Choopermon',
        description='''One piece'''
    )
    sarah_post6 = Post(
        user_id=2,
        name='Anime wallpaper',
        description='''Compassion brings us closer'''
    )
    sarah_post7 = Post(
        user_id=2,
        name='Anime wallpaper',
        description='''Gratitude fills our hearts'''
    )
    sarah_post8 = Post(
        user_id=2,
        name='Anime wallpaper, Blue Lock',
        description='''Happiness comes from within'''
    )
    sarah_post9 = Post(
        user_id=2,
        name='Anime wallpaper, My Hero Academia',
        description='''Dreams inspire us to greatness'''
    )
    sarah_post10 = Post(
        user_id=2,
        name='Anime wallpaper',
        description='''Adventure awaits around every corner'''
    )
    sarah_post11 = Post(
        user_id=2,
        name='Anime wallpaper, One piece Ace',
        description='''Courage overcomes fear and doubt'''
    )
    sarah_post12 = Post(
        user_id=2,
        name='Anime wallpaper, One piece',
        description='''Peace brings calm and tranquility'''
    )
    sarah_post13 = Post(
        user_id=2,
        name='Anime wallpaper, One piece',
        description='''Music touches our deepest emotions'''
    )
    sarah_post14 = Post(
        user_id=2,
        name='Anime wallpaper, One piece',
        description='''Creativity sparks innovation and growth'''
    )
    sarah_post15 = Post(
        user_id=2,
        name='Anime wallpaper, One piece Zoro',
        description='''Positivity breeds positivity'''
    )

    jack_post1 = Post(
        user_id=3,
        name='Howls moving castle',
        description='''Studio Ghibli is coming out of retirement!!! Huge Studio Ghibli Bombshell!! Click to check it out and comment your thoughts below'''
    )
    jack_post2 = Post(
        user_id=3,
        name='Pin by ＬＩＮＶＩＥＮＡ✿ on Landscape picture by Lin♡ ',
        description='''Aug 20, 2021 - This Pin was discovered by ＬＩＮＶＩＥＮＡ✿. Discover (and save!) your own Pins on Pinterest'''
    )
    jack_post3 = Post(
        user_id=3,
        name='Image about art in Colorful Anime by RIVER on We Heart It',
        description='''Discovered by Akella-sama. Find images and videos about art, anime and nature on We Heart It - the app to get lost in what you love.'''
    )
    jack_post4 = Post(
        user_id=3,
        name='cat',
        description='''cat by GuangYuan YU.'''
    )
    jack_post5 = Post(
        user_id=3,
        name="Indieground's Weekly Inspiration Dose",
        description='''The standing appointment of our design inspiration blog, so we can start better our creative week! '''
    )
    jack_post6 = Post(
        user_id=3,
        name="One piece, yamato",
        description='''Simplicity brings clarity and focus'''
    )
    jack_post7 = Post(
        user_id=3,
        name="One piece",
        description='''Beauty surrounds us everywhere'''
    )
    jack_post8 = Post(
        user_id=3,
        name="One piece",
        description='''Optimism attracts abundance'''
    )
    jack_post9 = Post(
        user_id=3,
        name="One piece, luffy",
        description='''Empathy connects us deeply'''
    )
    jack_post10 = Post(
        user_id=3,
        name="One piece, vivi",
        description='''Joy brings people together'''
    )
    jack_post11 = Post(
        user_id=3,
        name="One piece, luffy",
        description='''Hope ignites the human spirit'''
    )
    jack_post12 = Post(
        user_id=3,
        name="One piece, luffy",
        description='''Smiles spread happiness contagiously'''
    )
    jack_post13 = Post(
        user_id=3,
        name="One piece",
        description='''Progress empowers and uplifts'''
    )
    jack_post14 = Post(
        user_id=3,
        name="One piece",
        description='''Love conquers all obstacles'''
    )
    jack_post15 = Post(
        user_id=3,
        name="Demon Slayer",
        description='''Faith inspires belief in oneself'''
    )

    lisa_post1 = Post(
        user_id=4,
        name='Women Painters',
        description='''Antonietta Brandeis (Czech, 1848 - 1926): Canal in Venice (via Dorotheum)'''
    )
    lisa_post2 = Post(
        user_id=4,
        name='Somewhere, Beyond the Sea [Original]',
        description='''/r/Moescape is a place to post all of your favorite artworks and screen caps of cute Anime characters in their environment. The emphasis should...'''
    )
    lisa_post3 = Post(
        user_id=4,
        name='Aesthetic iPhone Wallpaper - WallpaperSafari',
        description='''Aesthetic Sky 398613 HD Wallpaper Download for Desktop, Mobile & Tablet. 53+ Aesthetic iPhone Wallpaper on WallpaperSafari'''
    )
    lisa_post4 = Post(
        user_id=4,
        name='I drew and illustration on Ponyo Sosuke and a lot of Devonian fish',
        description='''Studio Ghibli is a Japanese animation film studio founded in June 1985 by the director Hayao Miyazaki and Isao Takahata and the producer Toshio...'''

    )
    lisa_post5 = Post(
        user_id=4,
        name='Great Artists Share',
        description=''' View this post on Instagram A post shared by ˗ˏˋ 𝚊𝚗𝚐𝚒𝚎 ˊˎ˗ (@artbyangie.jpg) on Jul 12, 2020 at 6:21am PDT '''
    )
    lisa_post6 = Post(
        user_id=4,
        name='Demon Slayer',
        description='''Respect fosters mutual understanding'''
    )
    lisa_post7 = Post(
        user_id=4,
        name='Maid Sama',
        description='''Supportive community enhances life'''
    )
    lisa_post8 = Post(
        user_id=4,
        name='Maid Sama, Usui',
        description='''Nature provides healing and renewal'''
    )
    lisa_post9 = Post(
        user_id=4,
        name='Hajime no ippo, Ippo',
        description='''Appreciation enriches our experiences'''
    )
    lisa_post10 = Post(
        user_id=4,
        name='Hajime no Ippo',
        description='''Mindfulness promotes inner peace '''
    )
    lisa_post11 = Post(
        user_id=4,
        name='Code Geass',
        description='''Generosity creates a better world'''
    )
    lisa_post12 = Post(
        user_id=4,
        name='Attack on Titan',
        description='''Forgiveness frees us from pain'''
    )
    lisa_post13 = Post(
        user_id=4,
        name='Solo Leveling',
        description='''Sincerity strengthens relationships '''
    )
    lisa_post14 = Post(
        user_id=4,
        name='Cute wallpaper',
        description='''Perseverance leads to triumph'''
    )
    lisa_post15 = Post(
        user_id=4,
        name='Vinland Saga',
        description='''Knowledge expands horizons and empowers'''
    )

    posts = [john_post1, john_post2, john_post3, john_post4, john_post5, sarah_post1, sarah_post2, sarah_post3, sarah_post4, sarah_post5, jack_post1, jack_post2, jack_post3,
             jack_post4, jack_post5, lisa_post1, lisa_post2, lisa_post3, lisa_post4,
             lisa_post5, john_post6,
             john_post7,
             john_post8,
             john_post9,
             john_post10,
             john_post11,
             john_post12,
             john_post13,
             john_post14,
             john_post15,
             sarah_post6,
             sarah_post7,
             sarah_post8,
             sarah_post9,
             sarah_post10,
             sarah_post11,
             sarah_post12,
             sarah_post13,
             sarah_post14,
             sarah_post15,
             jack_post6,
             jack_post7,
             jack_post8,
             jack_post9,
             jack_post10,
             jack_post11,
             jack_post12,
             jack_post13,
             jack_post14,
             jack_post15,
             lisa_post6,
             lisa_post7,
             lisa_post8,
             lisa_post9,
             lisa_post10,
             lisa_post11,
             lisa_post12,
             lisa_post13,
             lisa_post14,
             lisa_post15]

    for post in posts:
        db.session.add(post)
    db.session.commit()


def undo_posts():
    if environment == "production":
        db.session.execute(
            f"TRUNCATE table {SCHEMA}.posts RESTART IDENTITY CASCADE;")
    else:
        db.session.execute("DELETE FROM posts")

    db.session.commit()
