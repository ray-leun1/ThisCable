# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require 'open-uri'

img1 = open('https://this-cable-seeds.s3-us-west-1.amazonaws.com/kirakira.png')
img2 = open('https://this-cable-seeds.s3-us-west-1.amazonaws.com/occhan.png')
img3 = open('https://this-cable-seeds.s3-us-west-1.amazonaws.com/chococornets.png')
img4 = open('https://this-cable-seeds.s3-us-west-1.amazonaws.com/scrunchie.png')
img5 = open('https://this-cable-seeds.s3-us-west-1.amazonaws.com/bonsai.png')
img6 = open('https://this-cable-seeds.s3-us-west-1.amazonaws.com/catwind.png')
img7 = open('https://this-cable-seeds.s3-us-west-1.amazonaws.com/fries.png')
img8 = open('https://this-cable-seeds.s3-us-west-1.amazonaws.com/anguish.png')
img9 = open('https://this-cable-seeds.s3-us-west-1.amazonaws.com/akatbox.png')
img10 = open('https://this-cable-seeds.s3-us-west-1.amazonaws.com/chest.png')
img11 = open('https://this-cable-seeds.s3-us-west-1.amazonaws.com/flowers.png')
img12 = open('https://this-cable-seeds.s3-us-west-1.amazonaws.com/mocabread.png')
img13 = open('https://this-cable-seeds.s3-us-west-1.amazonaws.com/AGcharm.png')
img14 = open('https://this-cable-seeds.s3-us-west-1.amazonaws.com/taiko.png')
img15 = open('https://this-cable-seeds.s3-us-west-1.amazonaws.com/tea.png')
img16 = open('https://this-cable-seeds.s3-us-west-1.amazonaws.com/potatokro.png')
img17 = open('https://this-cable-seeds.s3-us-west-1.amazonaws.com/phantomfleet.png')
img18 = open('https://this-cable-seeds.s3-us-west-1.amazonaws.com/maryantoinette.png')
img19 = open('https://this-cable-seeds.s3-us-west-1.amazonaws.com/jellyfishplate.png')
img20 = open('https://this-cable-seeds.s3-us-west-1.amazonaws.com/michburger.png')
img21 = open('https://this-cable-seeds.s3-us-west-1.amazonaws.com/michellefish.png')
img22 = open('https://this-cable-seeds.s3-us-west-1.amazonaws.com/maruyamasignature.png')
img23 = open('https://this-cable-seeds.s3-us-west-1.amazonaws.com/hinamole.png')
img24 = open('https://this-cable-seeds.s3-us-west-1.amazonaws.com/leon.png')
img25 = open('https://this-cable-seeds.s3-us-west-1.amazonaws.com/bangershirt.png')
img26 = open('https://this-cable-seeds.s3-us-west-1.amazonaws.com/bushido.png')

User.create([
  {email: 'kasumitoyama@cable.com', username: 'Kasumi!', password: 'password'},
  {email: 'taehanazono@cable.com', username: 'Usagi', password: 'Oddeye'},
  {email: 'rimiushigome@cable.com', username: 'ChocoCornetLove', password: 'YamabukiBakery'},
  {email: 'saayayamabuki@cable.com', username: 'Saaya', password: 'BreadforDin'},
  {email: 'arisaichigaya@cable.com', username: 'Arisa Ichigaya', password: 'thisisdumb'},
  {email: 'yukinaminato@cable.com', username: 'Lonewolf', password: 'LOUDER'},
  {email: 'sayohikawa@cable.com', username: 'Sayo Hikawa', password: 'friesfordays'},
  {email: 'lisaimai@cable.com', username: 'Lisa', password: 'mysongforyou'},
  {email: 'akoudagawa@cable.com', username: 'Demonic Drummer', password: 'TomoeIsTheCoolest'},
  {email: 'rinkoshirokane@cable.com', username: 'Rinrin', password: 'sevennotestogo'},
  {email: 'ranmitake@cable.com', username: 'AG Ran', password: 'sameasalways'},
  {email: 'mocaaoba@cable.com', username: 'Breadwinner', password: 'breadgoesin'},
  {email: 'himariuehara@cable.com', username: 'The Leader', password: 'heyheyhoh'},
  {email: 'tomoeudagawa@cable.com', username: 'BeatTheRain', password: 'SOOIIIYAAAA'},
  {email: 'tsugumihazawa@cable.com', username: 'A Cup of Stars', password: 'driftinginthesky'},
  {email: 'kokorotsurumaki@cable.com', username: 'Have You Smile!', password: 'hellohappyhellohappyhelloha'},
  {email: 'kaoruseta@cable.com', username: 'Hakanai', password: 'howfleeting'},
  {email: 'hagumikitazawa@cable.com', username: 'Croquette Dealah', password: 'meatmeinthemorning'},
  {email: 'kanonmatsubara@cable.com', username: 'Jellyfish Blob', password: 'fueefueejelly'},
  {email: 'misakiokusawa@cable.com', username: 'Misaki', password: 'crochetkeyboard'},
  {email: 'michelle@cable.com', username: 'DJ Bearbear', password: 'smiletoomisaki'},
  {email: 'ayamaruyama@cable.com', username: 'Undercover Idol', password: 'selfiestick'},
  {email: 'hinahikawa@cable.com', username: 'Boppin!', password: 'iloveyouoneechan'},
  {email: 'chisatoshirasagi@cable.com', username: 'C.Shirasagi', password: 'leonsundays'},
  {email: 'mayayamato@cable.com', username: 'Huhehe', password: 'technicdream'},
  {email: 'evewakamiya@cable.com', username: 'SakuraSamurai', password: 'bushibushido'}
])

User.find(1).profile_img.attach(io: img1, filename: 'kirakira.png')
User.find(2).profile_img.attach(io: img2, filename: 'occhan.png')
User.find(3).profile_img.attach(io: img3, filename: 'chococornets.png')
User.find(4).profile_img.attach(io: img4, filename: 'scrunchie.png')
User.find(5).profile_img.attach(io: img5, filename: 'bonsai.png')
User.find(6).profile_img.attach(io: img6, filename: 'catwind.png')
User.find(7).profile_img.attach(io: img7, filename: 'fries.png')
User.find(8).profile_img.attach(io: img8, filename: 'anguish.png')
User.find(9).profile_img.attach(io: img9, filename: 'akatbox.png')
User.find(10).profile_img.attach(io: img10, filename: 'chest.png')
User.find(11).profile_img.attach(io: img11, filename: 'flowers.png')
User.find(12).profile_img.attach(io: img12, filename: 'mocabread.png')
User.find(13).profile_img.attach(io: img13, filename: 'AGcharm.png')
User.find(14).profile_img.attach(io: img14, filename: 'taiko.png')
User.find(15).profile_img.attach(io: img15, filename: 'tea.png')
User.find(16).profile_img.attach(io: img16, filename: 'potatokro.png')
User.find(17).profile_img.attach(io: img17, filename: 'phantomfleet.png')
User.find(18).profile_img.attach(io: img18, filename: 'maryantoinette.png')
User.find(19).profile_img.attach(io: img19, filename: 'jellyfishplate.png')
User.find(20).profile_img.attach(io: img20, filename: 'michburger.png')
User.find(21).profile_img.attach(io: img21, filename: 'michellefish.png')
User.find(22).profile_img.attach(io: img22, filename: 'maruyamasignature.png')
User.find(23).profile_img.attach(io: img23, filename: 'hinamole.png')
User.find(24).profile_img.attach(io: img24, filename: 'leon.png')
User.find(25).profile_img.attach(io: img25, filename: 'bangershirt.png')
User.find(26).profile_img.attach(io: img26, filename: 'bushido.png')

Server.create([
  {name: 'Ryuseido', admin_id: 5},
  {name: 'Hanasakigawa Academy', admin_id: 7},
  {name: 'Haneoka Academy', admin_id: 23},
  {name: 'Yamabuki Bakery', admin_id: 4},
  {name: 'Kitazawa Croquettes', admin_id: 18},
  {name: 'CiRCLE', admin_id: 2}
])

Membership.create([
  {user_id: 1, server_id: 1},
  {user_id: 2, server_id: 1},
  {user_id: 3, server_id: 1},
  {user_id: 4, server_id: 1},
  {user_id: 5, server_id: 1},
  {user_id: 1, server_id: 2},
  {user_id: 2, server_id: 2},
  {user_id: 3, server_id: 2},
  {user_id: 4, server_id: 2},
  {user_id: 5, server_id: 2},
  {user_id: 7, server_id: 2},
  {user_id: 10, server_id: 2},
  {user_id: 16, server_id: 2},
  {user_id: 18, server_id: 2},
  {user_id: 19, server_id: 2},
  {user_id: 20, server_id: 2},
  {user_id: 22, server_id: 2},
  {user_id: 24, server_id: 2},
  {user_id: 26, server_id: 2},
  {user_id: 6, server_id: 3},
  {user_id: 8, server_id: 3},
  {user_id: 9, server_id: 3},
  {user_id: 11, server_id: 3},
  {user_id: 12, server_id: 3},
  {user_id: 13, server_id: 3},
  {user_id: 14, server_id: 3},
  {user_id: 15, server_id: 3},
  {user_id: 17, server_id: 3},
  {user_id: 23, server_id: 3},
  {user_id: 25, server_id: 3},
  {user_id: 4, server_id: 4},
  {user_id: 1, server_id: 4},
  {user_id: 2, server_id: 4},
  {user_id: 3, server_id: 4},
  {user_id: 5, server_id: 4},
  {user_id: 12, server_id: 4},
  {user_id: 18, server_id: 4},
  {user_id: 18, server_id: 5},
  {user_id: 1, server_id: 5},
  {user_id: 4, server_id: 5},
  {user_id: 16, server_id: 5},
  {user_id: 17, server_id: 5},
  {user_id: 19, server_id: 5},
  {user_id: 20, server_id: 5},
  {user_id: 21, server_id: 5},
  {user_id: 1, server_id: 6},
  {user_id: 2, server_id: 6},
  {user_id: 3, server_id: 6},
  {user_id: 4, server_id: 6},
  {user_id: 5, server_id: 6},
  {user_id: 6, server_id: 6},
  {user_id: 7, server_id: 6},
  {user_id: 8, server_id: 6},
  {user_id: 9, server_id: 6},
  {user_id: 10, server_id: 6},
  {user_id: 11, server_id: 6},
  {user_id: 12, server_id: 6},
  {user_id: 13, server_id: 6},
  {user_id: 14, server_id: 6},
  {user_id: 15, server_id: 6},
  {user_id: 16, server_id: 6},
  {user_id: 17, server_id: 6},
  {user_id: 18, server_id: 6},
  {user_id: 19, server_id: 6},
  {user_id: 20, server_id: 6},
  {user_id: 21, server_id: 6},
  {user_id: 22, server_id: 6},
  {user_id: 23, server_id: 6},
  {user_id: 24, server_id: 6},
  {user_id: 25, server_id: 6},
  {user_id: 26, server_id: 6},
])

Channel.create([
  {name: 'antique-shop', server_id: 1},
  {name: 'basement', server_id: 1},
  {name: 'bedroom', server_id: 1},
  {name: 'garden', server_id: 1},
  {name: 'classroom', server_id: 2},
  {name: 'restroom', server_id: 2},
  {name: 'gym', server_id: 2},
  {name: 'entry', server_id: 2},
  {name: 'council-room', server_id: 2},
  {name: 'classroom', server_id: 3},
  {name: 'restroom', server_id: 3},
  {name: 'gym', server_id: 3},
  {name: 'entry', server_id: 3},
  {name: 'council-room', server_id: 3},
  {name: 'bakery', server_id: 4},
  {name: 'bedroom', server_id: 4},
  {name: 'meat-shop', server_id: 5},
  {name: 'bedroom', server_id: 5},
  {name: 'cafeteria', server_id: 6},
  {name: 'stage', server_id: 6},
  {name: 'studio', server_id: 6},
  {name: 'store', server_id: 6}
])

Message.create([
  {body: 'Ariiiisaaaa!', author_id: 1, channel_id: 1},
  {body: 'AriiiisaaaaaAAAAA??!', author_id: 1, channel_id: 2},
  {body: 'Ariisa!', author_id: 1, channel_id: 3},
  {body: 'Arisa.', author_id: 1, channel_id: 4},
  {body: 'WHAT?!!', author_id: 5, channel_id: 4},
  {body: 'Ariisaaa, I was looking for you!', author_id: 1, channel_id: 4},
  {body: 'Do you not have a PHONE?', author_id: 5, channel_id: 4},
  {body: 'I do! I\'m using it to talk to you right now!', author_id: 1, channel_id: 4},
  {body: 'Hi!', author_id: 2, channel_id: 4},
  {body: 'Ohmygod.', author_id: 5, channel_id: 4},
  {body: 'O-Taeee!', author_id: 1, channel_id: 4},
  {body: 'I\'m going to bed.', author_id: 2, channel_id: 4},
  {body: 'O-Kaee, good night!!', author_id: 1, channel_id: 4},
  {body: 'I\'m in bed.', author_id: 2, channel_id: 3},
  {body: 'You don\'t have to say that, just go to sleep!', author_id: 2, channel_id: 3},
  {body: 'Oh my, are we having a sleepover?', author_id: 4, channel_id: 3},
  {body: 'I never said anything about that!', author_id: 5, channel_id: 3},
  {body: 'Arisa, what\'s up??', author_id: 1, channel_id: 4},
  {body: 'We haven\'t had a sleepover in a while!', author_id: 3, channel_id: 3},
  {body: 'This isn\'t a sleepover, it\'s a chatroom!', author_id: 5, channel_id: 3},
  {body: 'Ariisaa, stop ignoring me!', author_id: 1, channel_id: 4},
  {body: 'Yeah, let\'s do it again!', author_id: 2, channel_id: 3},
  {body: 'I\'m not ignoring you! Apparently everyone\'s sleeping in the #bedroom now..', author_id: 5, channel_id: 4},
  {body: 'Oh, so this is a sleepover!', author_id: 1, channel_id: 3},
  {body: 'This isn\'t a sleepover, it\'s a chatroom!', author_id: 5, channel_id: 3},
  {body: 'Where should we have the sleepover?', author_id: 4, channel_id: 3},
  {body: 'At Arisa\'s, of course! Just like always!!', author_id: 1, channel_id: 3},
  {body: 'Don\'t just go deciding that on your own!', author_id: 5, channel_id: 3},
  {body: 'Arisa, would you be okay with us spending a night? O-Tae, what do you think?', author_id: 4, channel_id: 3},
  {body: 'I\'m sleeping.', author_id: 2, channel_id: 3},
  {body: 'You\'re not sleeping! Go to actual sleep!', author_id: 5, channel_id: 3},
  {body: 'I just called your grandma, and she says it\'s okay to sleepover.', author_id: 2, channel_id: 3},
  {body: 'Ohh, thank you O-Taee!', author_id: 1, channel_id: 3},
  {body: 'Why do you have my grandma\'s number?!', author_id: 5, channel_id: 3},
  {body: 'Hooray! Thank you O-Tae!!', author_id: 3, channel_id: 3},
  {body: 'Good call, O-Tae!', author_id: 4, channel_id: 3},
  {body: 'Ugh, I\'m so done with all of you.', author_id: 5, channel_id: 3},
])

Role.create([
  {name: 'admin', server_id: 1},
  {name: 'user', server_id: 1},
  {name: 'admin', server_id: 2},
  {name: 'user', server_id: 2},
  {name: 'admin', server_id: 3},
  {name: 'user', server_id: 3},
  {name: 'admin', server_id: 4},
  {name: 'user', server_id: 4},
  {name: 'admin', server_id: 5},
  {name: 'user', server_id: 5},
  {name: 'admin', server_id: 6},
  {name: 'user', server_id: 6}
])

Permission.create([
  {role_id: 1, channel_id: 1},
  {role_id: 1, channel_id: 2},
  {role_id: 1, channel_id: 3},
  {role_id: 1, channel_id: 4},
  {role_id: 2, channel_id: 1},
  {role_id: 2, channel_id: 2},
  {role_id: 2, channel_id: 3},
  {role_id: 2, channel_id: 4},
  {role_id: 3, channel_id: 5},
  {role_id: 3, channel_id: 6},
  {role_id: 3, channel_id: 7},
  {role_id: 3, channel_id: 8},
  {role_id: 3, channel_id: 9},
  {role_id: 4, channel_id: 5},
  {role_id: 4, channel_id: 6},
  {role_id: 4, channel_id: 7},
  {role_id: 4, channel_id: 8},
  {role_id: 4, channel_id: 9},
  {role_id: 5, channel_id: 10},
  {role_id: 5, channel_id: 11},
  {role_id: 5, channel_id: 12},
  {role_id: 5, channel_id: 13},
  {role_id: 5, channel_id: 14},
  {role_id: 6, channel_id: 10},
  {role_id: 6, channel_id: 11},
  {role_id: 6, channel_id: 12},
  {role_id: 6, channel_id: 13},
  {role_id: 6, channel_id: 14},
  {role_id: 7, channel_id: 15},
  {role_id: 7, channel_id: 16},
  {role_id: 8, channel_id: 15},
  {role_id: 8, channel_id: 16},
  {role_id: 9, channel_id: 17},
  {role_id: 9, channel_id: 18},
  {role_id: 10, channel_id: 17},
  {role_id: 10, channel_id: 18},
  {role_id: 11, channel_id: 19},
  {role_id: 11, channel_id: 20},
  {role_id: 11, channel_id: 21},
  {role_id: 11, channel_id: 22},
  {role_id: 12, channel_id: 19},
  {role_id: 12, channel_id: 20},
  {role_id: 12, channel_id: 21},
  {role_id: 12, channel_id: 22}
])

UserRole.create([
  {user_id: 5, role_id: 1},
  {user_id: 1, role_id: 2},
  {user_id: 2, role_id: 2},
  {user_id: 3, role_id: 2},
  {user_id: 4, role_id: 2},
  {user_id: 7, role_id: 3},
  {user_id: 1, role_id: 4},
  {user_id: 2, role_id: 4},
  {user_id: 3, role_id: 4},
  {user_id: 4, role_id: 4},
  {user_id: 5, role_id: 4},
  {user_id: 10, role_id: 4},
  {user_id: 16, role_id: 4},
  {user_id: 18, role_id: 4},
  {user_id: 19, role_id: 4},
  {user_id: 20, role_id: 4},
  {user_id: 22, role_id: 4},
  {user_id: 24, role_id: 4},
  {user_id: 26, role_id: 4},
  {user_id: 23, role_id: 5},
  {user_id: 6, role_id: 6},
  {user_id: 8, role_id: 6},
  {user_id: 9, role_id: 6},
  {user_id: 11, role_id: 6},
  {user_id: 12, role_id: 6},
  {user_id: 13, role_id: 6},
  {user_id: 14, role_id: 6},
  {user_id: 15, role_id: 6},
  {user_id: 17, role_id: 6},
  {user_id: 25, role_id: 6},
  {user_id: 4, role_id: 7},
  {user_id: 1, role_id: 8},
  {user_id: 2, role_id: 8},
  {user_id: 3, role_id: 8},
  {user_id: 5, role_id: 8},
  {user_id: 12, role_id: 8},
  {user_id: 18, role_id: 8},
  {user_id: 18, role_id: 9},
  {user_id: 18, role_id: 10},
  {user_id: 1, role_id: 10},
  {user_id: 4, role_id: 10},
  {user_id: 16, role_id: 10},
  {user_id: 17, role_id: 10},
  {user_id: 19, role_id: 10},
  {user_id: 20, role_id: 10},
  {user_id: 21, role_id: 10},
  {user_id: 2, role_id: 11},
  {user_id: 1, role_id: 12},
  {user_id: 3, role_id: 12},
  {user_id: 4, role_id: 12},
  {user_id: 5, role_id: 12},
  {user_id: 6, role_id: 12},
  {user_id: 7, role_id: 12},
  {user_id: 8, role_id: 12},
  {user_id: 9, role_id: 12},
  {user_id: 10, role_id: 12},
  {user_id: 11, role_id: 12},
  {user_id: 12, role_id: 12},
  {user_id: 13, role_id: 12},
  {user_id: 14, role_id: 12},
  {user_id: 15, role_id: 12},
  {user_id: 16, role_id: 12},
  {user_id: 17, role_id: 12},
  {user_id: 18, role_id: 12},
  {user_id: 19, role_id: 12},
  {user_id: 20, role_id: 12},
  {user_id: 21, role_id: 12},
  {user_id: 22, role_id: 12},
  {user_id: 23, role_id: 12},
  {user_id: 24, role_id: 12},
  {user_id: 25, role_id: 12},
  {user_id: 26, role_id: 12},
])