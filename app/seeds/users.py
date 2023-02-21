from app.models import db, User, environment, SCHEMA


# Adds a demo user, you can add other users here if you want
def seed_users():
    john = User(
        username='johndoe123', first_name='John', last_name='Doe', email='johndoe123@gmail.com', password='password'
    )
    sarah = User(
        username='sarahsmith456', first_name='Sarah', last_name='Smith', email='sarahsmith456@hotmail.com', password='password'
    )
    jack = User(
        username='jackjones789', first_name='jack', last_name='Jones', email='jackjones789@yahoo.com', password='password'
    )
    lisa = User(
        username='lisalopez101', first_name='Lisa', last_name='Lopez', email='lisalopez101@gmail.com', password='password'
    )
    demo = User(
        first_name='demo', last_name='demo', username='Demo', email='demo@aa.io', password='password')
    marnie = User(
        first_name='marnie', last_name='marn', username='marnie', email='marnie@aa.io', password='password')
    bobbie = User(
        first_name='bobbie', last_name='brown', username='bobbie', email='bobbie@aa.io', password='password')

    db.session.add(demo)
    db.session.add(marnie)
    db.session.add(bobbie)
    db.session.add(john)
    db.session.add(sarah)
    db.session.add(jack)
    db.session.add(lisa)
    db.session.commit()


# Uses a raw SQL query to TRUNCATE or DELETE the users table. SQLAlchemy doesn't
# have a built in function to do this. With postgres in production TRUNCATE
# removes all the data from the table, and RESET IDENTITY resets the auto
# incrementing primary key, CASCADE deletes any dependent entities.  With
# sqlite3 in development you need to instead use DELETE to remove all data and
# it will reset the primary keys for you as well.
def undo_users():
    if environment == "production":
        db.session.execute(
            f"TRUNCATE table {SCHEMA}.users RESTART IDENTITY CASCADE;")
    else:
        db.session.execute("DELETE FROM users")

    db.session.commit()
