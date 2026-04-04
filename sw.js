var CACHE_NAME = 'SDA-Hymnal-cache-v2';

// include all the files for offline access
// do not include sw.js
const CACHE_FILES = [
  'index.html', 'manifest.json', 'styles.css', 'app.js', 'file_lists.js',
  'https://cdn.jsdelivr.net/npm/swiper@10/swiper-bundle.min.css',
  'https://cdn.jsdelivr.net/npm/swiper@10/swiper-bundle.min.js',
  
  'icons/icon-16.png',
  'icons/icon-32.png',
  'icons/icon-192.png',
  "icons/icon-512.png",
  'icons/ic_bookmark.png',
  'icons/ic_drag.png',
  'icons/ic_edit.png',
  'icons/ic_number.png',
  'icons/ic_pause.png',
  'icons/ic_play.png',
  'icons/ic_search.png',
  'icons/ic_settings.png',
  'icons/ic_stop.png',
  'icons/ic_title.png',
  'icons/ic_trash.png',
  
  'songsheets/about.png',
  'songsheets/1 Praise to the Lord.png',
  'songsheets/2 All Creatures of Our God and King.png',
  'songsheets/3 God Himself Is With Us.png',
  'songsheets/4 Praise, My Soul, the King of Heaven.png',
  'songsheets/4 Praise, My Soul, the King of Heaven2.png',
  'songsheets/5 All My Hope on God Is Founded.png',
  'songsheets/6 O Worship the Lord.png',
  'songsheets/7 The Lord in Zion Reigneth.png',
  'songsheets/8 We Gather Together.png',
  'songsheets/9 Let All the World in Every Corner Sing.png',
  'songsheets/10 Come, Christians, Join to Sing.png',
  'songsheets/11 The God of Abraham Praise.png',
  'songsheets/12 Joyful, Joyful, We Adore Thee.png',
  'songsheets/12 Joyful, Joyful, We Adore Thee2.png',
  // 'songsheets/13 New Songs of Celebration Render.png',
  // 'songsheets/14 Let Us Praise the Name of the Lord.png',
  // 'songsheets/15 My Maker and My King.png',
  // 'songsheets/16 All People That on Earth Do Dwell.png',
  // 'songsheets/17 Lord of All Being, Throned Afar.png',
  // 'songsheets/18 O Morning Star, How Fair and Bright.png',
  // 'songsheets/19 O Sing a New Song to the Lord.png',
  // 'songsheets/20 O Praise Ye the Lord.png',
  // 'songsheets/21 Immortal, Invisible, God Only Wise.png',
  // 'songsheets/22 God Is Our Song.png',
  // 'songsheets/23 Now the Joyful Bells A-Ringing.png',
  // 'songsheets/24 Every Star Shall Sing a Carol.png',
  // 'songsheets/25 Praise the Lord, His Glories Show.png',
  // 'songsheets/26 Praise the Lord! You Heavens Adore Him.png',
  // 'songsheets/27 Rejoice, Ye Pure in Heart!.png',
  // 'songsheets/27 Rejoice, Ye Pure in Heart!2.png',
  // 'songsheets/28 Praise We the Lord.png',
  // 'songsheets/29 Sing Praise to God.png',
  // 'songsheets/30 Holy God, We Praise Your Name.png',
  // 'songsheets/31 Tell Out, My Soul.png',
  // 'songsheets/32 When in Our Music God Is Glorified.png',
  // 'songsheets/33 Sing a New Song to the Lord.png',
  // 'songsheets/34 Wake the Song.png',
  // 'songsheets/35 With Songs and Honors.png',
  // 'songsheets/36 O Thou in Whose Presence.png',
  // 'songsheets/37 O Sing, My Soul, Your Maker\'s Praise.png',
  // 'songsheets/38 Arise, My Soul, Arise!.png',
  // 'songsheets/39 Lord, in the Morning.png',
  // 'songsheets/40 The Dawn of God\'s Dear Sabbath.png',
  // 'songsheets/41 O Splendor of God\'s Glory Bright.png',
  // 'songsheets/42 Now That the Daylight Fills the Sky.png',
  // 'songsheets/43 When Morning Gilds the Skies.png',
  // 'songsheets/44 Morning Has Broken.png',
  // 'songsheets/45 Open Now Thy Gates of Beauty.png',
  // 'songsheets/46 Abide With Me, \'Tis Eventide.png',
  // 'songsheets/47 God, Who Made the Earth and Heaven.png',
  // 'songsheets/48 Softly Now the Light of Day.png',
  // 'songsheets/49 Savior, Breathe an Evening Blessing.png',
  // 'songsheets/50 Abide With Me.png',
  // 'songsheets/51 Day Is Dying in the West.png',
  // 'songsheets/52 Now the Day Is Over.png',
  // 'songsheets/53 All Praise to Thee.png',
  // 'songsheets/54 O Gladsome Light.png',
  // 'songsheets/55 Jesus, Tender Shepherd, Hear Me.png',
  // 'songsheets/56 The Day Thou Gavest.png',
  // 'songsheets/57 Now All the Woods Are Sleeping.png',
  // 'songsheets/58 Hark, the Vesper Hymn Is Stealing.png',
  // 'songsheets/59 Great Our Joy as Now We Gather.png',
  // 'songsheets/60 Blessed Jesus, at Thy Word.png',
  // 'songsheets/61 God Is Here!.png',
  // 'songsheets/62 How Lovely Is Thy Dwelling Place.png',
  // 'songsheets/63 O Come, Let Us Sing to the Lord.png',
  // 'songsheets/64 Lord, Dismiss Us With Thy Blessing.png',
  // 'songsheets/65 God Be With You.png',
  // 'songsheets/66 God Be With You (Randolph).png',
  // 'songsheets/67 O Lord, Now Let Your Servant.png',
  // 'songsheets/68 On Our Way Rejoicing.png',
  // 'songsheets/69 Lord, Make Us More Holy.png',
  // 'songsheets/70 Praise Ye the Father.png',
  // 'songsheets/71 Come, Thou Almighty King.png',
  // 'songsheets/72 Creator of the Stars of Night.png',
  // 'songsheets/73 Holy, Holy, Holy.png',
  // 'songsheets/73 Holy, Holy, Holy2.png',
  // 'songsheets/74 Like a River Glorious.png',
  // 'songsheets/75 The Wonder of It All.png',
  // 'songsheets/76 O Love That Wilt Not Let Me Go.png',
  // 'songsheets/77 O Love of God Most Full.png',
  // 'songsheets/78 For God So Loved Us.png',
  // 'songsheets/79 O Love of God, How Strong and True!.png',
  // 'songsheets/80 O World of God.png',
  // 'songsheets/81 Though I Speak With Tongues.png',
  // 'songsheets/81 Though I Speak With Tongues2.png',
  // 'songsheets/82 Before Jehovah\'s Awful Throne.png',
  // 'songsheets/82 Before Jehovah\'s Awful Throne2.png',
  // 'songsheets/83 O Worship the King.png',
  // 'songsheets/84 God the Omnipotent.png',
  // 'songsheets/85 Eternal Father, Strong to Save.png',
  // 'songsheets/86 How Great Thou Art.png',
  // 'songsheets/86 How Great Thou Art2.png',
  // 'songsheets/87 God Who Spoke in the Beginning.png',
  // 'songsheets/88 I Sing the Mighty Power of God.png',
  // 'songsheets/89 Let All on Earth Their Voices Raise.png',
  // 'songsheets/90 Eternal God, Whose Power Upholds.png',
  // 'songsheets/91 Ye Watchers and Ye Holy Ones.png',
  // 'songsheets/92 This Is My Father\'s World.png',
  // 'songsheets/93 All Things Bright and Beautiful.png',
  // 'songsheets/94 Nature With Open Volume Stands.png',
  // 'songsheets/95 Spring Has Now Unwrapped the Flowers.png',
  // 'songsheets/96 The Spacious Firmament.png',
  // 'songsheets/97 Lord of the Boundless Curves of Space.png',
  // 'songsheets/98 Can You Count the Stars.png',
  // 'songsheets/99 God Will Take Care of You.png',
  // 'songsheets/100 Great Is Thy Faithfulness.png',
  // 'songsheets/101 Children of the Heavenly Father.png',
  // 'songsheets/102 Unto the Hills.png',
  // 'songsheets/103 O God, Our Help.png',
  // 'songsheets/104 My Shepherd Will Supply My Need.png',
  // 'songsheets/105 Sing to the Great Jehovah\'s Praise.png',
  // 'songsheets/106 Give to Our God Immortal Praise.png',
  // 'songsheets/107 God Moves in a Mysterious Way.png',
  // 'songsheets/108 Amazing Grace.png',
  // 'songsheets/109 Marvelous Grace.png',
  // 'songsheets/110 God\'s Free Mercy Streameth.png',
  // 'songsheets/111 It Took a Miracle.png',
  // 'songsheets/112 Let Us With a Gladsome Mind.png',
  // 'songsheets/113 As Pants the Hart.png',
  // 'songsheets/114 There\'s a Wideness.png',
  // 'songsheets/115 O Come, O Come, Immanuel.png',
  // 'songsheets/116 Of the Father\'s Love Begotten.png',
  // 'songsheets/117 The Advent of Our God.png',
  // 'songsheets/118 The First Noel.png',
  // 'songsheets/119 Angels From the Realms of Glory.png',
  // 'songsheets/120 There\'s a Song in the Air.png',
  // 'songsheets/121 Go, Tell It on the Mountain.png',
  // 'songsheets/122 Hark! the Herald Angels Sing.png',
  // 'songsheets/123 As With Gladness Men of Old.png',
  // 'songsheets/124 Away in a Manger (Cradle).png',
  // 'songsheets/125 Joy to the World.png',
  // 'songsheets/126 In the Bleak Midwinter.png',
  // 'songsheets/127 Infant Holy, Infant Lowly.png',
  // 'songsheets/128 Break Forth, O Beauteous Heavenly Light.png',
  // 'songsheets/129 As It Fell Upon a Night.png',
  // 'songsheets/130 It Came Upon the Midnight Clear.png',
  // 'songsheets/131 Lo, How a Rose E\'er Blooming.png',
  // 'songsheets/132 O Come, All Ye Faithful.png',
  // 'songsheets/133 Now Is Born the Divine Christ Child.png',
  // 'songsheets/134 O Jesus Sweet.png',
  // 'songsheets/135 O Little Town of Bethlehem.png',
  // 'songsheets/136 Good Christians, Now Rejoice.png',
  // 'songsheets/137 We Three Kings.png',
  // 'songsheets/138 Rise Up, Shepherd, and Follow.png',
  // 'songsheets/139 While Shepherds Watched Their Flocks.png',
  // 'songsheets/140 Thou Didst Leave Thy Throne.png',
  // 'songsheets/141 What Child Is This.png',
  // 'songsheets/142 Angels We Have Heard on High.png',
  // 'songsheets/143 Silent Night, Holy Night.png',
  // 'songsheets/144 O Sing a Song of Bethlehem.png',
  // 'songsheets/145 Songs of Thankfulness and Praise.png',
  // 'songsheets/146 I Think When I Read That Sweet Story.png',
  // 'songsheets/147 Christ Upon the Mountain Peak.png',
  // 'songsheets/148 O Love, How Deep, How Broad.png',
  // 'songsheets/149 Once in Royal David\'s City.png',
  // 'songsheets/150 Who Is He in Yonder Stall.png',
  // 'songsheets/151 Jesus Walked This Lonesome Valley.png',
  // 'songsheets/152 Tell Me the Story of Jesus.png',
  // 'songsheets/153 Prince of Peace, Control My Will.png',
  // 'songsheets/154 When I Survey the Wondrous Cross.png',
  // 'songsheets/155 When I Survey the Wondrous Cross (Miller).png',
  // 'songsheets/156 O Sacred Head Now Wounded.png',
  // 'songsheets/157 Go to Dark Gethsemane.png',
  // 'songsheets/158 Were You There.png',
  // 'songsheets/159 The Old Rugged Cross.png',
  // 'songsheets/160 Ride On in Majesty.png',
  // 'songsheets/161 Throned Upon the Awful Tree.png',
  // 'songsheets/162 Wondrous Love.png',
  // 'songsheets/163 At the Cross.png',
  // 'songsheets/164 There Is a Green Hill Far Away.png',
  // 'songsheets/165 Look, You Saints! the Sight Is Glorious.png',
  // 'songsheets/166 Christ the Lord Is Risen Today.png',
  // 'songsheets/167 Alleluia! Sing to Jesus!.png',
  // 'songsheets/168 And Have the Bright Immensities.png',
  // 'songsheets/169 Come, You Faithful (Sullivan).png',
  // 'songsheets/170 Come, You Faithful (Gesangbuch).png',
  // 'songsheets/171 Thine Is the Glory.png',
  // 'songsheets/172 The Strife Is O\'er.png',
  // 'songsheets/173 Good Christian Friends, Rejoice!.png',
  // 'songsheets/174 Star of Our Hope.png',
  // 'songsheets/175 Now the Green Blade Rises.png',
  // 'songsheets/176 Hail the Day That Sees Him Rise.png',
  // 'songsheets/177 Jesus, Your Blood and Righteousness.png',
  // 'songsheets/178 The Unveiled Christ.png',
  // 'songsheets/179 The Wonders of Redeeming Love.png',
  // 'songsheets/180 O Listen to Our Wondrous Story.png',
  // 'songsheets/181 Does Jesus Care.png',
  // 'songsheets/182 Christ Is Alive.png',
  // 'songsheets/183 I Will Sing of Jesus\' Love.png',
  // 'songsheets/184 Jesus Paid It All.png',
  // 'songsheets/185 Jesus Is All the World to Me.png',
  // 'songsheets/186 I\'ve Found a Friend.png',
  // 'songsheets/187 Jesus, What a Friend for Sinners.png',
  // 'songsheets/188 My Song Is Love Unknown.png',
  // 'songsheets/189 All That Thrills My Soul.png',
  // 'songsheets/190 Jesus Loves Me.png',
  // 'songsheets/191 Love Divine.png',
  // 'songsheets/192 O Shepherd Divine.png',
  // 'songsheets/193 Savior, Teach Me.png',
  // 'songsheets/194 Sing We of the Modern City.png',
  // 'songsheets/195 Showers of Blessing.png',
  // 'songsheets/196 Tell Me the Old, Old Story.png',
  // 'songsheets/197 The King of Love My Shepherd Is.png',
  // 'songsheets/198 And Can It Be.png',
  // 'songsheets/199 The Head That Once Was Crowned.png',
  // 'songsheets/200 The Lord Is Coming.png',
  // 'songsheets/201 Christ Is Coming.png',
  // 'songsheets/202 Hail Him the King of Glory.png',
  // 'songsheets/203 This Is the Threefold Truth.png',
  // 'songsheets/204 Come, Thou Long Expected Jesus.png',
  // 'songsheets/205 Gleams of the Golden Morning.png',
  // 'songsheets/206 Face to Face.png',
  // 'songsheets/207 It May Be at Morn.png',
  // 'songsheets/208 There\'ll Be No Dark Valley.png',
  // 'songsheets/209 That Glorious Day Is Coming.png',
  // 'songsheets/210 Wake, Awake, for Night Is Flying.png',
  // 'songsheets/211 Lo! He Comes.png',
  // 'songsheets/212 \'Tis Almost Time for the Lord to Come.png',
  // 'songsheets/213 Jesus Is Coming Again.png',
  // 'songsheets/214 We Have This Hope.png',
  // 'songsheets/214 We Have This Hope2.png',
  // 'songsheets/215 The King Shall Come.png',
  // 'songsheets/216 When the Roll Is Called Up Yonder.png',
  // 'songsheets/217 The Church Has Waited Long.png',
  // 'songsheets/218 When He Cometh.png',
  // 'songsheets/219 When Jesus Comes in Glory.png',
  // 'songsheets/220 When He Comes.png',
  // 'songsheets/220 When He Comes2.png',
  // 'songsheets/221 Rejoice, the Lord Is King.png',
  // 'songsheets/221 Rejoice, the Lord Is King2.png',
  // 'songsheets/222 Hark! Ten Thousand Harps and Voices.png',
  // 'songsheets/223 Crown Him With Many Crowns.png',
  // 'songsheets/224 Seek Ye First the Kingdom.png',
  // 'songsheets/225 God Is Working His Purpose Out.png',
  // 'songsheets/226 Lift Up Your Heads.png',
  // 'songsheets/227 Jesus Shall Reign.png',
  // 'songsheets/228 A Hymn of Glory Let Us Sing.png',
  // 'songsheets/229 All Hail the Power of Jesus\' Name.png',
  // 'songsheets/230 All Glory, Laud, and Honor.png',
  // 'songsheets/231 Blest Be the King.png',
  // 'songsheets/232 At the Name of Jesus.png',
  // 'songsheets/233 Christ, Whose Glory Fills the Skies.png',
  // 'songsheets/234 Christ Is the World\'s Light.png',
  // 'songsheets/235 Christ Is Made the Sure Foundation.png',
  // 'songsheets/236 I Love Thee.png',
  // 'songsheets/237 In the Cross of Christ I Glory.png',
  // 'songsheets/238 How Sweet the Name!.png',
  // 'songsheets/239 Jesus, Priceless Treasure.png',
  // 'songsheets/240 Fairest Lord Jesus.png',
  // 'songsheets/241 Jesus, the Very Thought of Thee.png',
  // 'songsheets/242 Jesus, Thou Joy of Loving Hearts.png',
  // 'songsheets/243 King of Glory, King of Peace.png',
  // 'songsheets/244 My Song Shall Be of Jesus.png',
  // 'songsheets/245 More About Jesus.png',
  // 'songsheets/246 Worthy, Worthy Is the Lamb.png',
  // 'songsheets/247 Come, My Way.png',
  // 'songsheets/248 O, How I Love Jesus.png',
  // 'songsheets/249 Praise Him! Praise Him!.png',
  // 'songsheets/250 O for a Thousand Tongues to Sing.png',
  // 'songsheets/251 He Lives.png',
  // 'songsheets/251 He Lives2.png',
  // 'songsheets/252 Come, Let Us Sing.png',
  // 'songsheets/253 There\'s No Other Name Like Jesus.png',
  // 'songsheets/254 The Great Physician Now Is Near.png',
  // 'songsheets/255 I Cannot Tell Why.png',
  // 'songsheets/255 I Cannot Tell Why2.png',
  // 'songsheets/256 Ye Servants of God.png',
  // 'songsheets/257 Come Down, O Love Divine.png',
  // 'songsheets/258 Baptize Us Anew.png',
  // 'songsheets/259 Draw Us in the Spirit\'s Tether.png',
  // 'songsheets/260 Hover O\'er Me, Holy Spirit.png',
  // 'songsheets/261 The Spirit of the Lord Revealed.png',
  // 'songsheets/262 Sweet, Sweet Spirit.png',
  // 'songsheets/263 Fire of God, Thou Sacred Flame.png',
  // 'songsheets/264 O for That Flame of Living Fire.png',
  // 'songsheets/265 Breathe on Me, Breath of God.png',
  // 'songsheets/266 Spirit of God.png',
  // 'songsheets/267 Spirit Divine.png',
  // 'songsheets/268 Holy Spirit, Light Divine.png',
  // 'songsheets/269 Come, Holy Spirit.png',
  // 'songsheets/270 O Holy Dove of God Descending.png',
  // 'songsheets/271 Break Thou the Bread of Life.png',
  // 'songsheets/272 Give Me the Bible.png',
  // 'songsheets/273 Lord, I Have Made Thy Word My Choice.png',
  // 'songsheets/274 O Word of God Incarnate.png',
  // 'songsheets/275 O God of Light.png',
  // 'songsheets/276 Thanks to God.png',
  // 'songsheets/277 For Your Holy Book We Thank You.png',
  // 'songsheets/278 Lord Jesus, Once You Spoke to Men.png',
  // 'songsheets/279 Only Trust Him.png',
  // 'songsheets/280 Come, Ye Sinners.png',
  // 'songsheets/281 I Gave My Life for Thee.png',
  // 'songsheets/282 I Hear Thy Welcome Voice.png',
  // 'songsheets/283 O Jesus, Thou Art Standing.png',
  // 'songsheets/284 For You I Am Praying.png',
  // 'songsheets/285 Jesus Calls Us.png',
  // 'songsheets/286 Wonderful Words of Life.png',
  // 'songsheets/287 Softly and Tenderly.png',
  // 'songsheets/288 I Am Going to Calvary.png',
  // 'songsheets/289 The Savior Is Waiting.png',
  // 'songsheets/290 Turn Your Eyes Upon Jesus.png',
  // 'songsheets/291 We Have Not Known Thee.png',
  // 'songsheets/292 Jesus, I Come.png',
  // 'songsheets/293 Heavenly Father, Bless Us Now.png',
  // 'songsheets/294 Power in the Blood.png',
  // 'songsheets/295 Chief of Sinners.png',
  // 'songsheets/296 Lord, I\'m Coming Home.png',
  // 'songsheets/297 God Be Merciful to Me.png',
  // 'songsheets/298 I Lay My Sins on Jesus.png',
  // 'songsheets/299 Forgive Our Sins as We Forgive.png',
  // 'songsheets/300 Rock of Ages.png',
  // 'songsheets/301 Nearer, Still Nearer.png',
  // 'songsheets/302 Deeper Yet.png',
  // 'songsheets/303 Beneath the Cross of Jesus.png',
  // 'songsheets/304 Faith of Our Fathers.png',
  // 'songsheets/305 Give Me Jesus.png',
  // 'songsheets/306 Draw Me Nearer.png',
  // 'songsheets/307 I Am Coming to the Cross.png',
  // 'songsheets/308 Wholly Thine.png',
  // 'songsheets/309 I Surrender All.png',
  // 'songsheets/310 I Would Draw Nearer to Jesus.png',
  // 'songsheets/311 I Would Be Like Jesus.png',
  // 'songsheets/312 Near the Cross.png',
  // 'songsheets/313 Just as I Am (Walden).png',
  // 'songsheets/314 Just as I Am.png',
  // 'songsheets/315 O for a Closer Walk!.png',
  // 'songsheets/316 Live Out Thy Life Within Me.png',
  // 'songsheets/317 Lead Me to Calvary.png',
  // 'songsheets/318 Whiter Than Snow.png',
  // 'songsheets/319 Lord, I Want to Be a Christian.png',
  // 'songsheets/320 Lord of Creation.png',
  // 'songsheets/321 My Jesus, I Love Thee.png',
  // 'songsheets/322 Nothing Between.png',
  // 'songsheets/323 O for a Heart to Praise My God!.png',
  // 'songsheets/324 Just as I Am, Thine Own to Be.png',
  // 'songsheets/325 Jesus, I My Cross Have Taken.png',
  // 'songsheets/326 Open My Eyes That I May See.png',
  // 'songsheets/327 I\'d Rather Have Jesus.png',
  // 'songsheets/328 Must Jesus Bear the Cross Alone.png',
  // 'songsheets/329 Take the World, but Give Me Jesus.png',
  // 'songsheets/330 Take My Life and Let It Be.png',
  // 'songsheets/331 O Jesus, I Have Promised.png',
  // 'songsheets/332 The Cleansing Wave.png',
  // 'songsheets/333 On Jordan\'s Banks the Baptist\'s Cry.png',
  // 'songsheets/334 Come, Thou Fount of Every Blessing.png',
  // 'songsheets/335 What a Wonderful Savior.png',
  // 'songsheets/336 There Is a Fountain.png',
  // 'songsheets/337 Redeemed! (Kirkpatrick).png',
  // 'songsheets/338 Redeemed! (Butler).png',
  // 'songsheets/339 God Is My Strong Salvation.png',
  // 'songsheets/340 Jesus Saves.png',
  // 'songsheets/341 To God Be the Glory.png',
  // 'songsheets/341 To God Be the Glory2.png',
  // 'songsheets/342 Is This a Day of New Beginnings.png',
  // 'songsheets/343 I Will Sing of My Redeemer.png',
  // 'songsheets/344 I Love Your Kingdom, Lord.png',
  // 'songsheets/345 Christ Is the World\'s True Light.png',
  // 'songsheets/346 Lord, Who Dost Give to Thy Church.png',
  // 'songsheets/347 Built on the Rock.png',
  // 'songsheets/348 The Church Has One Foundation.png',
  // 'songsheets/349 God Is Love.png',
  // 'songsheets/350 Blest Be the Tie That Binds.png',
  // 'songsheets/351 Thy Hand, O God Has Guided.png',
  // 'songsheets/352 This Is My Will.png',
  // 'songsheets/353 Father, Help Your People.png',
  // 'songsheets/354 Thy Love, O God.png',
  // 'songsheets/355 Where Cross the Crowded Ways of Life.png',
  // 'songsheets/356 All Who Love and Serve Your City.png',
  // 'songsheets/357 Come, Labor On.png',
  // 'songsheets/358 Far and Near the Fields Are Teeming.png',
  // 'songsheets/359 Hark! the Voice of Jesus Calling.png',
  // 'songsheets/360 From the Eastern Mountains.png',
  // 'songsheets/361 Hark! \'Tis the Shepherd\'s Voice I Hear.png',
  // 'songsheets/362 Lift High the Cross.png',
  // 'songsheets/363 Lord, Whose Love in Humble Service.png',
  // 'songsheets/364 O Jesus Christ, to You.png',
  // 'songsheets/365 O Zion, Haste.png',
  // 'songsheets/366 O Where Are the Reapers.png',
  // 'songsheets/367 Rescue the Perishing.png',
  // 'songsheets/368 Watchman, Blow the Gospel Trumpet.png',
  // 'songsheets/369 Bringing in the Sheaves.png',
  // 'songsheets/370 Christ for the World.png',
  // 'songsheets/371 Lift Him Up.png',
  // 'songsheets/371 Lift Him Up2.png',
  // 'songsheets/372 How Beauteous Are Their Feet.png',
  // 'songsheets/373 Seeking the Lost.png',
  // 'songsheets/374 Jesus, With Thy Church Abide.png',
  // 'songsheets/375 Work, for the Night Is Coming.png',
  // 'songsheets/376 All Things Are Thine.png',
  // 'songsheets/377 Go Forth, Go Forth With Christ.png',
  // 'songsheets/378 Go, Preach My Gospel.png',
  // 'songsheets/379 We Give This Child to You.png',
  // 'songsheets/380 Welcome, Day of Sweet Repose.png',
  // 'songsheets/381 Holy Sabbath Day of Rest.png',
  // 'songsheets/382 O Day of Rest and Gladness (Hofkapelle).png',
  // 'songsheets/383 O Day of Rest and Gladness (German).png',
  // 'songsheets/384 Safely Through Another Week.png',
  // 'songsheets/385 Crowning Jewel of Creation.png',
  // 'songsheets/386 The Sacred Anthem.png',
  // 'songsheets/387 Come, O Sabbath Day.png',
  // 'songsheets/388 Don\'t Forget the Sabbath.png',
  // 'songsheets/389 Light of Light, Enlighten Me.png',
  // 'songsheets/390 We Love Thy Sabbath, Lord.png',
  // 'songsheets/391 Welcome, Welcome, Day of Rest.png',
  // 'songsheets/392 Dear Lord, We Come at Set of Sun.png',
  // 'songsheets/393 Lord of the Sabbath.png',
  // 'songsheets/394 Far From All Care.png',
  // 'songsheets/395 As Birds Unto the Genial Homeland.png',
  // 'songsheets/396 Lord God, Your Love Has Called Us Here.png',
  // 'songsheets/397 An Upper Room.png',
  // 'songsheets/398 Bread of the World.png',
  // 'songsheets/399 Beneath the Forms of Outward Rite.png',
  // 'songsheets/400 I Come With Joy.png',
  // 'songsheets/401 In Imitation, Lord of Thee.png',
  // 'songsheets/402 By Christ Redeemed.png',
  // 'songsheets/403 Let Us Break Bread Together.png',
  // 'songsheets/404 Now Let Us From This Table Rise.png',
  // 'songsheets/405 O God, Unseen, Yet Ever Near.png',
  // 'songsheets/406 Love Consecrates the Humblest Act.png',
  // 'songsheets/407 Sent Forth by God\'s Blessing.png',
  // 'songsheets/407 Sent Forth by God\'s Blessing2.png',
  // 'songsheets/408 Lord, Enthroned in Heavenly Splendor.png',
  // 'songsheets/409 Jesus Invites His Saints.png',
  // 'songsheets/410 Thy Broken Body, Gracious Lord.png',
  // 'songsheets/411 The Son of God Proclaim.png',
  // 'songsheets/412 Cover With His Life.png',
  // 'songsheets/413 God Has Spoken by His Prophets.png',
  // 'songsheets/414 Fruitful Trees, the Spirit\'s Sowing.png',
  // 'songsheets/415 Christ the Lord, All Power Possessing.png',
  // 'songsheets/416 The Judgment Has Set.png',
  // 'songsheets/417 O Solemn Thought.png',
  // 'songsheets/418 Day of Judgment, Day of Wonders!.png',
  // 'songsheets/419 Soon Shall the Trump of God.png',
  // 'songsheets/420 Jerusalem, My Happy Home.png',
  // 'songsheets/421 For All the Saints.png',
  // 'songsheets/422 Marching to Zion.png',
  // 'songsheets/423 Glorious Things of Thee Are Spoken.png',
  // 'songsheets/424 For Thee, O Dear, Dear Country.png',
  // 'songsheets/425 Holy, Holy, Is What the Angels Sing.png',
  // 'songsheets/425 Holy, Holy, Is What the Angels Sing2.png',
  // 'songsheets/426 I Shall See the King.png',
  // 'songsheets/427 No Night There.png',
  // 'songsheets/428 Sweet By and By.png',
  // 'songsheets/429 Jerusalem the Golden.png',
  // 'songsheets/430 Joy By and By.png',
  // 'songsheets/431 Over Yonder.png',
  // 'songsheets/432 Shall We Gather at the River.png',
  // 'songsheets/433 Ten Thousand Times Ten Thousand.png',
  // 'songsheets/434 We Speak of the Realms.png',
  // 'songsheets/435 The Glory Song.png',
  // 'songsheets/436 The Homeland.png',
  // 'songsheets/437 I\'m Going Home.png',
  // 'songsheets/438 You Will See Your Lord A-Coming.png',
  // 'songsheets/439 How Far From Home.png',
  // 'songsheets/440 How Cheering Is the Christian\'s Hope.png',
  // 'songsheets/441 I Saw One Weary.png',
  // 'songsheets/442 How Sweet Are the Tidings.png',
  // 'songsheets/443 There\'ll Be No Sorrow There.png',
  // 'songsheets/444 I\'m a Pilgrim.png',
  // 'songsheets/445 I\'m But a Stranger Here.png',
  // 'songsheets/446 Lo, What a Glorious Sight Appears.png',
  // 'songsheets/446 Lo, What a Glorious Sight Appears2.png',
  // 'songsheets/447 Long Upon the Mountains.png',
  // 'songsheets/448 O, When Shall I See Jesus.png',
  // 'songsheets/449 Never Part Again.png',
  // 'songsheets/450 Beautiful Zion.png',
  // 'songsheets/451 Together Let Us Sweetly Live.png',
  // 'songsheets/452 What Heavenly Music.png',
  // 'songsheets/453 We Have Heard.png',
  // 'songsheets/454 Don\'t You See My Jesus Coming.png',
  // 'songsheets/455 Immortal Love, Forever Full.png',
  // 'songsheets/456 My Lord and I.png',
  // 'songsheets/457 I Love to Tell the Story.png',
  // 'songsheets/458 More Love to Thee.png',
  // 'songsheets/459 As the Bridegroom to His Chosen.png',
  // 'songsheets/460 As Water to the Thirsty.png',
  // 'songsheets/460 As Water to the Thirsty2.png',
  // 'songsheets/461 Be Still, My Soul.png',
  // 'songsheets/462 Blessed Assurance, Jesus Is Mine!.png',
  // 'songsheets/463 Peace, Perfect Peace.png',
  // 'songsheets/464 When I Can Read My Title Clear.png',
  // 'songsheets/465 I Heard the Voice of Jesus.png',
  // 'songsheets/466 Wonderful Peace.png',
  // 'songsheets/467 Life Is Great! So Sing About It.png',
  // 'songsheets/468 A Child of the King.png',
  // 'songsheets/469 Leaning on the Everlasting Arms.png',
  // 'songsheets/470 There\'s Sunshine in My Soul Today.png',
  // 'songsheets/471 Grant Us Your Peace.png',
  // 'songsheets/472 A Song of Heaven and Homeland.png',
  // 'songsheets/473 Nearer My God, to Thee.png',
  // 'songsheets/474 Take the Name of Jesus With You.png',
  // 'songsheets/475 Balm in Gilead.png',
  // 'songsheets/476 Burdens Are Lifted at Calvary.png',
  // 'songsheets/477 Come, Ye Disconsolate.png',
  // 'songsheets/478 Sweet Hour of Prayer.png',
  // 'songsheets/479 Tread Softly.png',
  // 'songsheets/480 Dear Lord and Father (Repton).png',
  // 'songsheets/481 Dear Lord and Father (Rest).png',
  // 'songsheets/482 Father, Lead Me Day by Day.png',
  // 'songsheets/483 I Need Thee Every Hour.png',
  // 'songsheets/484 I Need Thee, Precious Jesus.png',
  // 'songsheets/485 I Must Tell Jesus.png',
  // 'songsheets/486 I Do Believe.png',
  // 'songsheets/487 In the Garden.png',
  // 'songsheets/488 At First I Prayed for Light.png',
  // 'songsheets/489 Jesus, Lover of My Soul.png',
  // 'songsheets/490 Jesus, Lover of My Soul (Dykes).png',
  // 'songsheets/491 In the Hour of Trial.png',
  // 'songsheets/492 Like Jesus.png',
  // 'songsheets/493 Fill My Cup, Lord.png',
  // 'songsheets/494 We Would See Jesus.png',
  // 'songsheets/495 Near to the Heart of God.png',
  // 'songsheets/496 Eternal Love, We Have No Good.png',
  // 'songsheets/497 O Gracious Father of Mankind.png',
  // 'songsheets/498 Still, Still With Thee.png',
  // 'songsheets/499 What a Friend We Have in Jesus.png',
  // 'songsheets/500 Take Time to Be Holy.png',
  // 'songsheets/501 \'Tis the Blessed Hour of Prayer.png',
  // 'songsheets/502 Sun of My Soul.png',
  // 'songsheets/503 A Quiet Place.png',
  // 'songsheets/504 Lord Jesus, Think on Me.png',
  // 'songsheets/505 I Need the Prayers.png',
  // 'songsheets/506 A Mighty Fortress.png',
  // 'songsheets/507 Moment by Moment.png',
  // 'songsheets/508 Anywhere With Jesus.png',
  // 'songsheets/509 How Firm a Foundation.png',
  // 'songsheets/510 If You But Trust in God to Guide You.png',
  // 'songsheets/511 I Know Whom I Have Believed.png',
  // 'songsheets/512 Just When I Need Him Most.png',
  // 'songsheets/513 In Heavenly Love Abiding.png',
  // 'songsheets/514 Lord of Our Life.png',
  // 'songsheets/515 The Lord Is My Light.png',
  // 'songsheets/515 The Lord Is My Light2.png',
  // 'songsheets/516 All the Way.png',
  // 'songsheets/517 My Faith Looks Up to Thee.png',
  // 'songsheets/518 Standing on the Promises.png',
  // 'songsheets/519 Give to the Winds Your Fears.png',
  // 'songsheets/520 He Hideth My Soul.png',
  // 'songsheets/521 Depth of Mercy.png',
  // 'songsheets/522 My Hope Is Built on Nothing Less.png',
  // 'songsheets/523 My Faith Has Found a Resting Place.png',
  // 'songsheets/524 \'Tis So Sweet to Trust in Jesus.png',
  // 'songsheets/525 Hiding in Thee.png',
  // 'songsheets/526 Because He Lives.png',
  // 'songsheets/527 From Every Stormy Wind.png',
  // 'songsheets/528 A Shelter in the Time of Storm.png',
  // 'songsheets/529 Under His Wings.png',
  // 'songsheets/530 It Is Well With My Soul.png',
  // 'songsheets/530 It Is Well With My Soul2.png',
  // 'songsheets/531 We\'ll Build on the Rock.png',
  // 'songsheets/532 Day by Day.png',
  // 'songsheets/533 O for a Faith.png',
  // 'songsheets/534 Will Your Anchor Hold.png',
  // 'songsheets/535 I Am Trusting Thee, Lord Jesus.png',
  // 'songsheets/536 God, Who Stretched the Spangled Heavens.png',
  // 'songsheets/537 He Leadeth Me.png',
  // 'songsheets/538 Guide Me, O Thou Great Jehovah.png',
  // 'songsheets/539 I Will Early Seek the Savior.png',
  // 'songsheets/540 Gentle Jesus, Meek and Mild.png',
  // 'songsheets/541 Lord, Speak to Me.png',
  // 'songsheets/542 Jesus, Friend So Kind.png',
  // 'songsheets/543 Jesus, Friend of Little Children.png',
  // 'songsheets/544 Jesus, Son of Blessed Mary.png',
  // 'songsheets/545 Savior, Like a Shepherd.png',
  // 'songsheets/546 The Lord\'s My Shepherd (James Air).png',
  // 'songsheets/547 Be Thou My Vision.png',
  // 'songsheets/548 Now Praise the Hidden God of Love.png',
  // 'songsheets/549 Loving Shepherd of Thy Sheep.png',

  // 'songsheets/550 Every Flower That Grows.png',
  // 'songsheets/551 Jesus, Savior, Pilot Me.png',
  // 'songsheets/552 The Lord\'s My Shepherd (Irvine).png',
  // 'songsheets/553 Jesus, Guide Our Way.png',
  // 'songsheets/554 O Let Me Walk With Thee.png',
  // 'songsheets/555 Shepherd of Tender Youth.png',
  // 'songsheets/556 As Saints of Old.png',
  // 'songsheets/557 Come, Ye Thankful People.png',
  // 'songsheets/558 For the Fruits of His Creation.png',
  // 'songsheets/559 Now Thank We All Our God.png',
  // 'songsheets/560 Let All Things Now Living.png',
  // 'songsheets/561 We Plow the Fields.png',
  // 'songsheets/562 Come, Sing a Song of Harvest.png',
  // 'songsheets/563 Praise and Thanksgiving.png',
  // 'songsheets/564 For Sunrise Hope and Sunset Calm.png',
  // 'songsheets/565 For the Beauty of the Earth.png',
  // 'songsheets/566 Father, We Thank You.png',
  // 'songsheets/567 Have Thine Own Way, Lord.png',
  // 'songsheets/568 Make Me a Captive, Lord.png',
  // 'songsheets/569 Pass Me Not, O Gentle Savior.png',
  // 'songsheets/570 Not I, but Christ.png',
  // 'songsheets/571 What Does the Lord Require.png',
  // 'songsheets/572 Give of Your Best to the Master.png',
  // 'songsheets/573 I\'ll Go Where You Want Me to Go.png',
  // 'songsheets/573 I\'ll Go Where You Want Me to Go2.png',
  // 'songsheets/574 O Master, Let Me Walk With Thee.png',
  // 'songsheets/575 Let Your Heart Be Broken.png',
  // 'songsheets/576 Awake, Awake to Love and Work.png',
  // 'songsheets/577 In the Heart of Jesus.png',
  // 'songsheets/578 So Send I You.png',
  // 'songsheets/579 \'Tis Love That Makes Us Happy.png',
  // 'songsheets/580 This Little Light of Mine.png',
  // 'songsheets/581 When the Church of Jesus.png',
  // 'songsheets/582 Working, O Christ, With Thee.png',
  // 'songsheets/583 You That Know the Lord.png',
  // 'songsheets/584 There\'s a Spirit in the Air.png',
  // 'songsheets/585 When Christ Was Lifted From the Earth.png',
  // 'songsheets/586 What Joy It Is to Worship Here.png',
  // 'songsheets/587 In Christ There Is No East nor West.png',
  // 'songsheets/588 Lord of All Nations.png',
  // 'songsheets/589 Holy Spirit, Gracious Guest.png',
  // 'songsheets/590 Trust and Obey.png',
  // 'songsheets/591 In Our Work and in Our Play.png',
  // 'songsheets/592 Watchman, Tell Us of the Night.png',
  // 'songsheets/593 In Times Like These.png',
  // 'songsheets/594 Heir of the Kingdom.png',
  // 'songsheets/595 Let Every Lamp Be Burning.png',
  // 'songsheets/596 Look for the Waymarks.png',
  // 'songsheets/597 Ye Servants of the Lord.png',
  // 'songsheets/598 Watch, Ye Saints.png',
  // 'songsheets/599 Rejoice, Rejoice, Believers.png',
  // 'songsheets/600 Hold Fast Till I Come.png',
  // 'songsheets/601 Watchmen, on the Walls of Zion.png',
  // 'songsheets/602 O Brother, Be Faithful.png',
  // 'songsheets/603 Christian, Seek Not Repose.png',
  // 'songsheets/604 We Know Not the Hour.png',
  // 'songsheets/605 My Soul, Be on Thy Guard.png',
  // 'songsheets/606 Once to Every Man and Nation.png',
  // 'songsheets/607 God of Grace and God of Glory.png',
  // 'songsheets/608 Faith Is the Victory.png',
  // 'songsheets/609 Am I a Soldier of the Cross.png',
  // 'songsheets/610 Stand Like the Brave.png',
  // 'songsheets/611 Awake, My Soul!.png',
  // 'songsheets/612 Onward, Christian Soldiers!.png',
  // 'songsheets/613 Fight the Good Fight.png',
  // 'songsheets/614 Sound the Battle Cry.png',
  // 'songsheets/615 Rise Up, O Church of God.png',
  // 'songsheets/616 Soldiers of Christ, Arise.png',
  // 'songsheets/617 We Are Living, We Are Dwelling.png',
  // 'songsheets/618 Stand Up! Stand Up for Jesus!.png',
  // 'songsheets/619 Lead On, O King Eternal.png',
  // 'songsheets/619 Lead On, O King Eternal2.png',
  // 'songsheets/620 On Jordan\'s Stormy Banks.png',
  // 'songsheets/621 Gracious Father, Guard Thy Children.png',
  // 'songsheets/622 Come, Come, Ye Saints.png',
  // 'songsheets/623 I Will Follow Thee.png',
  // 'songsheets/624 I Want Jesus to Walk With Me.png',
  // 'songsheets/625 Higher Ground.png',
  // 'songsheets/626 In a Little While We\'re Going Home.png',
  // 'songsheets/627 Jacob\'s Ladder.png',
  // 'songsheets/628 As Jacob With Travel Was Weary.png',
  // 'songsheets/629 O Happy Band of Pilgrims.png',

  // 'songsheets/630 Rise, My Soul, and Stretch Thy Wings.png',
  // 'songsheets/631 When on Life a Darkness Falls.png',
  // 'songsheets/632 Until Then.png',
  // 'songsheets/633 When We All Get to Heaven.png',
  // 'songsheets/634 Come, All Christians, Be Committed.png',
  // 'songsheets/635 Lord of All Good.png',
  // 'songsheets/636 God, Whose Giving Knows No Ending.png',
  // 'songsheets/637 Son of God, Eternal Savior.png',
  // 'songsheets/638 The Wise May Bring Their Learning.png',
  // 'songsheets/639 A Diligent and Grateful Heart.png',
  // 'songsheets/640 For Beauty of Meadows.png',
  // 'songsheets/641 God in His Love for Us.png',
  // 'songsheets/642 We Praise Thee With Our Minds.png',
  // 'songsheets/643 Father, Who on Us Do Shower.png',
  // 'songsheets/644 O God, Whose Will Is Life and Good.png',
  // 'songsheets/645 God of Our Fathers.png',
  // 'songsheets/646 To the Name That Brings Salvation.png',
  // 'songsheets/647 Mine Eyes Have Seen the Glory.png',
  // 'songsheets/648 I Vow to Thee, My Country.png',
  // 'songsheets/649 Lord, While for All Mankind.png',

  // 'songsheets/650 Our Father, by Whose Name.png',
  // 'songsheets/651 Happy the Home That Welcomes You.png',
  // 'songsheets/652 Love at Home.png',
  // 'songsheets/653 Lead Them, My God, to Thee.png',
  // 'songsheets/654 Lord, Bless Our Homes.png',
  // 'songsheets/655 Happy the Home.png',
  // 'songsheets/656 O Perfect Love.png',
  // 'songsheets/657 O God, From Whom Mankind.png',
  // 'songsheets/658 Heavenly Father, Hear Our Prayer.png',
  // 'songsheets/659 May the Grace of Christ Our Savior.png',
  // 'songsheets/660 Glory Be to the Father.png',
  // 'songsheets/661 Holy, Holy, Holy (Schubert).png',
  // 'songsheets/662 Let All Mortal Flesh Keep Silence.png',
  // 'songsheets/663 Amens (A).png',
  // 'songsheets/663 Amens (B).png',
  // 'songsheets/663 Amens (C).png',
  // 'songsheets/663 Amens (D).png',
  // 'songsheets/663 Amens (E).png',
  // 'songsheets/663 Amens (F).png',
  // 'songsheets/664 Sevenfold Amens.png',
  // 'songsheets/665 All Things Come of Thee.png',
  // 'songsheets/666 Cast Thy Burden Upon the Lord.png',
  // 'songsheets/667 Lord, Bless Thy Word to Every Heart.png',
  // 'songsheets/668 O Thou Who Hearest.png',
  // 'songsheets/669 The Lord Bless You and Keep You.png',
  // 'songsheets/669 The Lord Bless You and Keep You2.png',
  // 'songsheets/670 We Give Thee But Thine Own.png',
  // 'songsheets/671 As We Come to You in Prayer.png',
  // 'songsheets/672 Spirit of the Living God.png',
  // 'songsheets/673 May God Be With You.png',
  // 'songsheets/674 Shalom.png',
  // 'songsheets/675 May the Lord Bless and Keep You.png',
  // 'songsheets/676 Thy Word Is a Lantern.png',
  // 'songsheets/677 Heavenly Father, to Thee We Pray.png',
  // 'songsheets/678 God Be in My Head (Davies).png',
  // 'songsheets/679 God Be in My Head (Coombs).png',
  // 'songsheets/680 Holy Spirit, Hear Us.png',
  // 'songsheets/681 This Is the Day the Lord Hath Made.png',
  // 'songsheets/682 As You Have Promised, Lord.png',
  // 'songsheets/683 Jesus, Stand Among Us.png',
  // 'songsheets/684 Hear Our Prayer, O Lord.png',
  // 'songsheets/685 Cause Me to Hear.png',
  // 'songsheets/686 Bless Thou the Gifts.png',
  // 'songsheets/687 The Lord Is in His Holy Temple (Beltz).png',
  // 'songsheets/688 Surely, Surely.png',
  // 'songsheets/689 Day by Day, Dear Lord.png',
  // 'songsheets/690 Dismiss Us, Lord, With Blessing.png',
  // 'songsheets/691 Lead Me, Lord.png',
  // 'songsheets/692 The Lord Is in His Holy Temple.png',
  // 'songsheets/693 Almighty Father.png',
  // 'songsheets/694 Praise God, From Whom All Blessings.png',
  // 'songsheets/695 Praise God, From Whom All Blessings (alternate).png',
  
  // 'songsheets/America, the Beautiful.png',
  // 'songsheets/As the Deer.png',
  // 'songsheets/Away in a Manger (Murray).png',
  // 'songsheets/Beyond the Sunset.png',
  // 'songsheets/Brighten the Corner Where You Are.png',
  // 'songsheets/Cares Chorus.png',
  // 'songsheets/Count Your Blessings.png',
  // 'songsheets/For God So Loved the World.png',
  // 'songsheets/From Greenland\'s Icy Mountains.png',
  // 'songsheets/Give Thanks.png',
  // 'songsheets/God\'s Way Is the Best Way.png',
  // 'songsheets/He Looked Beyond My Fault.png',
  // 'songsheets/His Eye Is On the Sparrow.png',
  // 'songsheets/I Am So Glad That Our Father.png',
  // 'songsheets/Will There Be Any Stars In My Crown.png',
  // 'songsheets/Just a Closer Walk with Thee.png',
  // 'songsheets/I Know Who Holds Tomorrow.png',
  // 'songsheets/I Know Who Holds Tomorrow2.png',
  // 'songsheets/I Love You, Lord.png',
  // 'songsheets/Love Lifted Me.png',
  // 'songsheets/The Family of God.png',
  // 'songsheets/Pass It On.png',
  // 'songsheets/I\'ve Got Peace Like a River.png',
  // 'songsheets/Jesus Is Calling.png',
  // 'songsheets/Just Over the Mountains.png',
  // 'songsheets/Just Over the Mountains2.png',
  // 'songsheets/Lead Me Gently Home, Father.png',
  // 'songsheets/Let There Be Peace on Earth.png',
  // 'songsheets/Let There Be Peace on Earth2.png',
  // 'songsheets/Master, the Tempest Is Raging.png',
  // 'songsheets/Master, the Tempest Is Raging2.png',
  // 'songsheets/My God and I.png',
  // 'songsheets/My God, Loves, Me!.png',
  // 'songsheets/Never Give Up.png',
  // 'songsheets/Now I Belong to Jesus.png',
  // 'songsheets/Sweeter As The Years Go By.png',
  // 'songsheets/Oh, We Are the Pathfinders Strong.png',
  // 'songsheets/Proclaim His Grace.png',
  // 'songsheets/Safe in the Arms of Jesus.png',
  // 'songsheets/Saved by Grace.png',
  // 'songsheets/Send the Light.png',
  // 'songsheets/Side by Side.png',
  // 'songsheets/Side by Side2.png',
  // 'songsheets/The Love of God.png',
  // 'songsheets/The Love of God2.png',  
  // 'songsheets/There\'s Within My Heart a Melody.png',
  // 'songsheets/We\'ve a Story to Tell to the Nations.png',
  // 'songsheets/Will Jesus Find Us Watching.png',
  // 'songsheets/Yield Not to Temptation.png',
 
 
  'audios/1 Praise to the Lord.mp3',
  // 'audios/2 All Creatures of Our God and King.mp3',
  // 'audios/3 God Himself Is With Us.mp3',
  // 'audios/4 Praise, My Soul, the King of Heaven.mp3',
  // 'audios/5 All My Hope on God Is Founded.mp3',
  'audios/6 O Worship the Lord.mp3',
  // 'audios/7 The Lord in Zion Reigneth.mp3',
  // 'audios/8 We Gather Together.mp3',
  // 'audios/10 Come, Christians, Join to Sing.mp3',
  // 'audios/11 The God of Abraham Praise.mp3',
  'audios/12 Joyful, Joyful, We Adore Thee.mp3',
  // 'audios/13 New Songs of Celebration Render.mp3',
  // 'audios/14 Let Us Praise the Name of the Lord.mp3',
  // 'audios/15 My Maker and My King.mp3',
  // 'audios/16 All People That on Earth Do Dwell.mp3',
  // 'audios/17 Lord of All Being, Throned Afar.mp3',
  // 'audios/19 O Sing a New Song to the Lord.mp3',
  // 'audios/20 O Praise Ye the Lord.mp3',
  // 'audios/21 Immortal, Invisible, God Only Wise.mp3',
  // 'audios/22 God Is Our Song.mp3',
  // 'audios/23 Now the Joyful Bells A-Ringing.mp3',
  // 'audios/24 Every Star Shall Sing a Carol.mp3',
  // 'audios/25 Praise the Lord, His Glories Show.mp3',
  // 'audios/26 Praise the Lord! You Heavens Adore Him.mp3',
  // 'audios/27 Rejoice, Ye Pure in Heart!.mp3',
  // 'audios/28 Praise We the Lord.mp3',
  // 'audios/29 Sing Praise to God.mp3',
  // 'audios/30 Holy God, We Praise Your Name.mp3',
  // 'audios/31 Tell Out, My Soul.mp3',
  // 'audios/33 Sing a New Song to the Lord.mp3',
  // 'audios/34 Wake the Song.mp3',
  // 'audios/35 With Songs and Honors.mp3',
  // 'audios/36 O Thou in Whose Presence.mp3',
  // 'audios/37 O Sing, My Soul, Your Maker\'s Praise.mp3',
  // 'audios/38 Arise, My Soul, Arise!.mp3',
  // 'audios/39 Lord, in the Morning.mp3',
  // 'audios/40 The Dawn of God\'s Dear Sabbath.mp3',
  // 'audios/43 When Morning Gilds the Skies.mp3',
  // 'audios/44 Morning Has Broken.mp3',
  // 'audios/45 Open Now Thy Gates of Beauty.mp3',
  // 'audios/46 Abide With Me, \'Tis Eventide.mp3',
  // 'audios/50 Abide With Me.mp3',
  // 'audios/51 Day Is Dying in the West.mp3',
  // 'audios/52 Now the Day Is Over.mp3',
  // 'audios/53 All Praise to Thee.mp3',
  // 'audios/54 O Gladsome Light.mp3',
  // 'audios/55 Jesus, Tender Shepherd, Hear Me.mp3',
  // 'audios/56 The Day Thou Gavest.mp3',
  // 'audios/57 Now All the Woods Are Sleeping.mp3',
  // 'audios/58 Hark, the Vesper Hymn Is Stealing.mp3',
  // 'audios/59 Great Our Joy as Now We Gather.mp3',
  // 'audios/60 Blessed Jesus, at Thy Word.mp3',
  // 'audios/61 God Is Here!.mp3',
  // 'audios/62 How Lovely Is Thy Dwelling Place.mp3',
  // 'audios/63 O Come, Let Us Sing to the Lord.mp3',
  // 'audios/64 Lord, Dismiss Us With Thy Blessing.mp3',
  // 'audios/65 God Be With You.mp3',
  // 'audios/66 God Be With You (Randolph).mp3',
  // 'audios/70 Praise Ye the Father.mp3',
  // 'audios/71 Come, Thou Almighty King.mp3',
  // 'audios/72 Creator of the Stars of Night.mp3',
  // 'audios/73 Holy, Holy, Holy.mp3',
  // 'audios/74 Like a River Glorious.mp3',
  // 'audios/75 The Wonder of It All.mp3',
  // 'audios/76 O Love That Wilt Not Let Me Go.mp3',
  // 'audios/77 O Love of God Most Full.mp3',
  // 'audios/78 For God So Loved Us.mp3',
  // 'audios/79 O Love of God, How Strong and True!.mp3',
  // 'audios/82 Before Jehovah\'s Awful Throne.mp3',
  // 'audios/83 O Worship the King.mp3',
  // 'audios/84 God the Omnipotent.mp3',
  // 'audios/85 Eternal Father, Strong to Save.mp3',
  // 'audios/86 How Great Thou Art.mp3',
  // 'audios/87 God Who Spoke in the Beginning.mp3',
  // 'audios/88 I Sing the Mighty Power of God.mp3',
  // 'audios/89 Let All on Earth Their Voices Raise.mp3',
  // 'audios/90 Eternal God, Whose Power Upholds.mp3',
  // 'audios/91 Ye Watchers and Ye Holy Ones.mp3',
  // 'audios/92 This Is My Father\'s World.mp3',
  // 'audios/93 All Things Bright and Beautiful.mp3',
  // 'audios/94 Nature With Open Volume Stands.mp3',
  // 'audios/95 Spring Has Now Unwrapped the Flowers.mp3',
  // 'audios/96 The Spacious Firmament.mp3',
  // 'audios/98 Can You Count the Stars.mp3',
  // 'audios/99 God Will Take Care of You.mp3',
  // 'audios/100 Great Is Thy Faithfulness.mp3',
  // 'audios/101 Children of the Heavenly Father.mp3',
  // 'audios/103 O God, Our Help.mp3',
  // 'audios/106 Give to Our God Immortal Praise.mp3',
  // 'audios/107 God Moves in a Mysterious Way.mp3',
  // 'audios/108 Amazing Grace.mp3',
  // 'audios/109 Marvelous Grace.mp3',
  // 'audios/110 God\'s Free Mercy Streameth.mp3',
  'audios/111 It Took a Miracle.mp3'
  
  ];
  

// Install the Service Worker
/*
// original
self.addEventListener("install", (event) => {
  // Tell the browser not to finish the install until this promise resolves
  event.waitUntil((async () => {
    try {
      const cache = await caches.open(CACHE_NAME);
      // this might still load files from the browser's cache instead of from server
      await cache.addAll(CACHE_FILES);
      
      // if don't want to use the new SW immediately then don't do the skipWaiting here but in the addEventListener('message'
      // self.skipWaiting(); // forces the waiting service worker (i.e. with the new updates) to become the active one immediately
    } catch (error) {
      console.error("Service Worker installation failed:", error);
    }
  })());
});
*/

self.addEventListener("install", (event) => {
  console.log("SW: Install started");
  event.waitUntil((async () => {
    try {
      const cache = await caches.open(CACHE_NAME);
      
      // Manual fetch with 'cache: reload' to bypass HTTP cache
      const cachePromises = CACHE_FILES.map(async (url) => {
        try {
          // fetch(url, { cache: 'reload' }) forces the browser to go to the server
          const response = await fetch(new Request(url, { cache: 'reload' }));
          if (!response.ok) throw new Error(`Network response was not ok for ${url}`);
          return await cache.put(url, response);
        } catch (err) {
          console.error(`Failed to fetch and cache ${url}:`, err);
        }
      });

      await Promise.all(cachePromises);
      console.log("SW: All files cached fresh from server");

    } catch (error) {
      console.error("Service Worker installation failed:", error);
    }
  })());
});

// this is executed when the 'update' message is sent by user clicking on an update button
self.addEventListener('message', function (event) {
  console.log("SW 5:User acknowledged new updates");
  if (event.data.action === 'update') {
    self.skipWaiting(); // forces the waiting service worker (i.e. with the new updates) to become the active one immediately
  }
});

// delete old cache after updating files
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cache => {
          if (cache !== CACHE_NAME) {
            console.log("SW 7:Deleting old cache", cache);
            return caches.delete(cache);
          }
        })
      );
    }).then(() => {
      // Claim clients AFTER the old cache is purged
      console.log("SW 8:Claiming clients after old cache is purged");
      return self.clients.claim();
    })
  );
});

// Fetch resources from cache first then from server if not in cache
/*
// original
self.addEventListener("fetch", (event) => {
  event.respondWith(
    (async () => {
      const cache = await caches.open(CACHE_NAME);
      const url = new URL(event.request.url);
      //const fileName = decodeURI(url.pathname.split('/').pop()) || 'index.html';  // this is only needed for debugging

      try {
        //console.log(`%cSW Fetching: ${fileName}`, "color: gray;");

        // 1. Try a Strict Match first
        let cachedResponse = await cache.match(event.request);

        // 2. If no strict match, try matching by URL String ignoring search params
        // This is crucial for audio and the ?refetch= logic
        if (!cachedResponse) {
          cachedResponse = await cache.match(event.request.url, { 
            ignoreSearch: true,
            ignoreVary: true 
          });
          if (cachedResponse) {
             //console.log(`%c[Cache Hit] ${fileName} (via URL String match)`, "color: green; font-weight: bold;");
          }
        } else {
          //console.log(`%c[Cache Hit] ${fileName} (via Request match)`, "color: green; font-weight: bold;");
        }

        if (cachedResponse) return cachedResponse;

        // 3. Not in cache so do a Network Fetch
        //console.log(`%c[Network Request] ${fileName}`, "color: orange;");
        const fetchResponse = await fetch(event.request);

        // 4. Handle Partial Content (Audio Stream)
        if (fetchResponse.status === 206) {
          const cleanUrl = event.request.url.split('?')[0]; // Strip timestamps for saving
          fetch(cleanUrl)
            .then((fullResponse) => {
              if (fullResponse.status === 200) {
                cache.put(cleanUrl, fullResponse); // Save under clean URL
                //console.log(`%c[Audio Saved] ${fileName}`, "color: blue;");
              }
            });
          return fetchResponse;
        }

        // 5. Regular files (Status 200)
        if (fetchResponse.ok) {
          const cleanUrl = event.request.url.split('?')[0];
          await cache.put(cleanUrl, fetchResponse.clone());
          //console.log(`%c[Saved to Cache] ${fileName}`, "color: #28a745;");
        }
        
        return fetchResponse;

      } catch (error) {
        // If offline and not in cache, fallback
        //console.log(`%c[Offline Error] ${fileName}`, "color: red;");
        if (event.request.mode === 'navigate') {  // Check if the request is for a web page (navigation)
          const fallback = await cache.match("index.html");
          return fallback || new Response("Offline", { status: 503 });
        }
        // It's an image or audio that failed offline, just return a 404.
        return new Response(null, { status: 404, statusText: "Offline" });
      }
    })()
  );
});
*/

self.addEventListener("fetch", (event) => {
  event.respondWith(
    (async () => {
      const cache = await caches.open(CACHE_NAME);
      const url = new URL(event.request.url);
      //const fileName = decodeURI(url.pathname.split('/').pop()) || 'index.html';  // this is only needed for debugging

      try {
        //console.log(`%cSW Fetching: ${fileName}`, "color: gray;");

        // 1. Try a Strict Match first
        let cachedResponse = await cache.match(event.request);

        // 2. If no strict match, try matching by URL String ignoring search params
        // This is crucial for audio and the ?refetch= logic
        if (!cachedResponse) {
          cachedResponse = await cache.match(event.request.url, { 
            ignoreSearch: true,
            ignoreVary: true 
          });
          if (cachedResponse) {
             //console.log(`%c[Cache Hit] ${fileName} (via URL String match)`, "color: green; font-weight: bold;");
          }
        } else {
          //console.log(`%c[Cache Hit] ${fileName} (via Request match)`, "color: green; font-weight: bold;");
        }

        if (cachedResponse) return cachedResponse;

        // 3. Not in cache so do a Network Fetch
        //console.log(`%c[Network Request] ${fileName}`, "color: orange;");
        const fetchResponse = await fetch(event.request);

        // 4. Handle Partial Content (206) for Audio Stream (url has mp3)
        if (fetchResponse.status === 206 && event.request.url.match(/\.(mp3|wav|m4a)$/i)) {
          const cleanUrl = event.request.url.split('?')[0]; // Strip timestamps for saving
          return fetch(cleanUrl).then(fullResponse => {
            if (fullResponse.ok) {
              const copy = fullResponse.clone();
              cache.put(cleanUrl, copy); // Save the full version
              return fullResponse;      // Play the full version
            }
            return fetchResponse; // Fallback to original if full fetch fails
          });
          
        }

        // 5. Regular files (Status 200)
        if (fetchResponse.ok) {
          const cleanUrl = event.request.url.split('?')[0];
          await cache.put(cleanUrl, fetchResponse.clone());
          //console.log(`%c[Saved to Cache] ${fileName}`, "color: #28a745;");
        }
        
        return fetchResponse;

      } catch (error) {
        // If offline and not in cache, fallback
        //console.log(`%c[Offline Error] ${fileName}`, "color: red;");
        if (event.request.mode === 'navigate') {  // Check if the request is for a web page (navigation)
          const fallback = await cache.match("index.html");
          return fallback || new Response("Offline", { status: 503 });
        }
        // It's an image or audio that failed offline, just return a 404.
        return new Response(null, { status: 404, statusText: "Offline" });
      }
    })()
  );
});

