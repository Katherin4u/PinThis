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
        description='''Reddit gives you the best of the internet in one place. Get a constantly updating feed of breaking news, fun stories, pics, memes, and videos just for you. Passionate about something niche? Reddit has thousands of vibrant communities with people that share your interests. Alternatively, find out what’s trending across all of Reddit on r/popular. Reddit is also anonymous so you can be yourself, with your Reddit profile and persona disconnected from your real-world identity.'''
    )
    john_post5 = Post(
        user_id=1,
        name='Origamiaround | creating origami, paperart and tutorials | Patreon',
        description='''Become a patron of Origamiaround today: Get access to exclusive content and experiences on the world’s largest membership platform for artists and creators.'''
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

    jack_post1 = Post(
        user_id=3,
        name='Howls moving castle',
        description='''Studio Ghibli is coming out of retirement!!! Huge Studio Ghibli Bombshell!! Click to check it out and comment your thoughts below'''
    )
    jack_post2 = Post(
        user_id=3,
        name='Pin by ＬＩＮＶＩＥＮＡ✿ on Landscape picture by Lin♡ | Beautiful landscape wallpaper, Aesthetic pastel wallpaper, Landscape wallpaper',
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
        description='''The standing appointment of our design inspiration blog, so we can start better our creative week! This series of posts contains a mix of graphic design and all other design fields artworks, therefore you'll find only the best pieces from designers all over the world. Check out this week's roundup of inspiration!'''
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

    posts = [john_post1, john_post2, john_post3, john_post4, john_post5, sarah_post1, sarah_post2, sarah_post3, sarah_post4, sarah_post5, jack_post1, jack_post2, jack_post3,
             jack_post4, jack_post5, lisa_post1, lisa_post2, lisa_post3, lisa_post4,
             lisa_post5,]

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
