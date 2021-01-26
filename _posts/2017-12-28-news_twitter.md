---
layout: post
title: Analysing Times Now and Republic TV twitter feeds.
categories: [main]
tags: [Data, News]
---

<h2>Or how I scraped the web and did some amateur analysis.</h2>

As I have said in the past, I am no pro. I do all this for fun, and my methodologies can definitely questionable. Please question them by commenting below.
<h3>Step 1: Getting the data.</h3>
I quite obviously got this data of the official Twitter handles of <a href="https://twitter.com/republic?lang=en">RepublicTV</a> and <a href="https://twitter.com/timesnow?lang=en">Times Now</a>. I was actually kind of surprised that Republic TV got the handle @republic. Heavy investments.

All in all, I was able to scrape 13000 to 14000 tweets off each of their feeds. This corpus, I thought was enough. Also, this process was kind of time consuming, and I got bored.

Each tweet object contained the following data:
<ol>
 	<li>A timestamp for when the tweet took fruition.</li>
 	<li>The number of retweets.</li>
 	<li>The number of likes.</li>
 	<li>The actual text of the tweet (Obviously).</li>
 	<li>And a few other details I did not use.</li>
</ol>
I used python for this. There a lot of libraries that you can scrape twitter with. I usually use tweepy. For this project I tried something called <a href="https://github.com/taspinar/twitterscraper">twitterscraper.</a> It is a very good library. You can read their readme to know more about the library.

The data I have ranges from week 40ish of this calendar year to week 51. There are 13819 tweets from Republic TV and 11503 tweets from Times Now.
<h3>Step 2: Mucking around.</h3>
<h3><strong>Hashtags and wordclouds.</strong></h3>
<img class="" src="https://i1.wp.com/www.republicnewsindia.in/wp-content/uploads/2017/08/Exclusive-Col-Purohit-Speaks-To-Republic-TV.jpg?resize=350%2C200&amp;ssl=1" width="577" height="330" />

<img class="alignnone" src="http://cloudfront.timesnow.tv/debate/1489601697-nhrdebate1first.jpg" alt="" width="548" height="412" />

Indian news is obsessed with hashtags. Atleast these two channels are, with these hashtags flying around the screen like there is no tomorrow.

So, I thought looking at these would be a good start. I started by extracting the hashtags from the tweets. This was done easily by the power of regular expressions.

At first glance, I noticed that Republic tends to keep using one hashtag multiple times, whereas, Times Now uses a more varied array of hashtags. A good way to visualise this, I thought would be using a wordcloud. In a wordcloud, the size of each word is proportional to its frequency in a corpus. These are the results I got:

&nbsp;
<h4 style="text-align: center;">Times Now wordcloud <img class="aligncenter" src="https://i.imgur.com/rXpns6K.jpg" width="901" height="525" /></h4>
It is very clear from the wordcloud of Times Now that they do use a lot of varied hashtags. #Dec18WithTimesNow is one that stands out. Another one that stands out is #ModiUnstoppable.

These were their most used hastags:
<ol>
 	<li>Dec18WithTimesNow, 869</li>
 	<li>BREAKING, 446</li>
 	<li>ModiUnstoppable, 333</li>
 	<li>UPANotGuilty, 247</li>
 	<li>TNExclusive, 207</li>
 	<li>ModiInvincible, 153</li>
 	<li>CongPFIBhakt, 112</li>
 	<li>TamilNaduDiaryGate, 112</li>
 	<li>StandWithAnthem, 109</li>
 	<li>VadraJawaabDo, 103</li>
</ol>
For those interested, the next 30. Unformatted because lazy.

('<strong>ModiMidTermPoll</strong>', 103), ('<strong>AarushiWantsJustice</strong>', 99), ('<strong>RahulNeechPolitics</strong>', 96), ('<strong>VadraTape</strong>', 87), ('<strong>NDABacksDialogue</strong>', 84), ('<strong>SriSriMandirMove</strong>', 84), ('<strong>HafizSaeedConfessions</strong>', 83), ('<strong>TarmacTerrorTape</strong>', 83), ('<strong>WATCH</strong>', 81), ('<strong>StandForAnthem</strong>', 81), ('<strong>RahulEraDawns</strong>', 80), ('<strong>GujaratModiVerdict</strong>', 79), ('<strong>AAPKiAag</strong>', 79), ('<strong>CongBetrayedRam</strong>', 77), ('<strong>RahulSeparatistBhakt</strong>', 77), ('<strong>RaGaSomnathSelfGoal</strong>', 77), ('<strong>AreYouSeriousRahul</strong>', 76), ('<strong>MersalVendetta</strong>', 75), ('<strong>HadiyaConversionTwist</strong>', 74), ('<strong>HumanityTowedAway</strong>', 73), ('<strong>DeepikaThreatened</strong>', 72), ('<strong>CongVsMandir</strong>', 71), ('<strong>KoiBaatNahiCops</strong>',69), ('<strong>RagaRiggedPollTape</strong>', 67), ('<strong>SoniaTejpalQuidProQuo</strong>', 65), ('<strong>DeepikaVsSena</strong>', 63), ('<strong>VadraTicketGate</strong>', 62), ('<strong>ZakirBackOnTV</strong>', 61), ('<strong>RaGaShortCircuit</strong>', 61), ('<strong>ShahDaresLeft</strong>', 60), ('<strong>SabkaSardar</strong>', 59), ('<strong>CondomCurfew</strong>', 59), ('<strong>DeMoTaxRats</strong>', 59), ('<strong>Modinomics</strong>', 58), ('<strong>CMOnlyForMuslims</strong>', 58), ('<strong>RKNagarCashForVotes</strong>', 57), ('<strong>TripleTalaqBill</strong>', 57), ('<strong>CowSlaughterCruelty</strong>', 57), ('<strong>HeadScarfDebate</strong>', 57), ('<strong>KnowYourCandidates</strong>', 57)

Clearly, unlike Republic, they have not tried creating a cult around their main anchor. After Arnab left Times Now, they probably learnt that a brand is bigger than a person. Also the clear tilt towards our glorious leader Modi is apparent with the frequent appearances of hastags like ModiInvincible, Modinomics and ModiUnstoppable. Also they are clearly not huge fans of Rahul Gandhi and congress too, with the use of hastags like CongBetrayedRam and RahulNeechPolitics and PappuCensored. Keen readers would also notice disproportiante appearances of Congress as a party in the hastags. We will quantify this later in the article. Frankly, this is a great wordcloud, and I recommend everyone to take a magnifying glass and observe it.
<h4 style="text-align: center;">Republic TV wordcloud</h4>
<img class="aligncenter" src="https://i.imgur.com/u8gGJeR.jpg" width="913" height="532" />

Republic TV, the new kid on the block. The "<a href="https://en.wikipedia.org/wiki/Rajeev_Chandrasekhar">Independent</a>" media we have all dreamt of and yearned for. The true messiah saving us from the clutches of the "Lutyens" circles.

Their hashtags are way less varied than Times Now. Arnab is very prominent in their most tweeted hashtag (Not surprising considering the fact that the whole channel is where it is because of his popularity.)

When Republic starts using a hashtags, they truly beat it to death. These are their top 10 most used hastags with their frequency:
<ol>
 	<li>BREAKING, 820</li>
 	<li>Dec18WithArnab, 506</li>
 	<li>RepublicAppLaunch, 223</li>
 	<li>ScamOfScams, 211</li>
 	<li>CorruptionHighOrLow, 191</li>
 	<li>AreHindusSoftTarget, 186</li>
 	<li>WontForgetScams, 185</li>
 	<li>MallyaTicketgate, 180</li>
 	<li>ChurchVsNationalists, 176</li>
 	<li>CongNeechPolitics, 161</li>
</ol>
These are next 30 for those who are interested. I was too lazy to format.

('<strong>PadmavatiFight</strong>', 157), ('<strong>NetasForVIPs</strong>', 157), ('<strong>Shocker2GVerdict</strong>', 156), ('<strong>RamMandirDebate</strong>', 154), ('<strong>ModiBigChanges</strong>', 143), ('<strong>AnthemFirstNoCompromise</strong>', 140), ('<strong>GujaratVotes</strong>', 132), ('<strong>AmitShahSpeaksToArnab</strong>', 130), ('<strong>SoniaLetterLeaked</strong>', 130), ('<strong>JaitleySpeaksToArnab</strong>', 129), ('<strong>CongChaiwalaAttack</strong>', 126), ('<strong>LutyensAyodhyaFormula</strong>', 120), ('<strong>ClericsBackChildMarriage</strong>', 120), ('<strong>WhoKilledAarushi</strong>', 119), ('<strong>GujaratHinduCard</strong>', 118), ('<strong>AreHindusTargeted</strong>', 117), ('<strong>WhoCommunalisedPolitics</strong>', 117), ('<strong>OneNationOnePoll</strong>', 117), ('<strong>WhoDumpedVikas</strong>', 116), ('<strong>IndiaWillGetSaeed</strong>', 114), ('<strong>BiggestBoforsInterview</strong>', 112), ('<strong>HrithikSpeaksToArnab</strong>', 112), ('<strong>SmritiVsRahul</strong>', 107), ('<strong>BoforsPakistanLink</strong>', 106), ('<strong>SunandaMailTrail</strong>', 103), ('<strong>NationalAnthemDebate</strong>', 100), ('<strong>CashForJustice</strong>', 100), ('<strong>NewIndiaPlan</strong>', 99), ('<strong>IndiaAgainstVVIPNetas</strong>', 99), ('<strong>MallyaNamesPawar</strong>', 97), ('<strong>PoliticsOverVeterans</strong>', 94), ('<strong>IndiaBacksVinodRai</strong>', 94), ('<strong>FringeVsPadmavati</strong>', 92), ('<strong>PiyushSpeaksToArnab</strong>', 88), ('<strong>SackSangeetSom</strong>', 88), ('<strong>ModiFaithAttacked</strong>', 86), ('<strong>RahulBotAttack</strong>', 85), ('<strong>RahulMughalEmperor</strong>', 84), ('<strong>SriSriMandirMeet</strong>', 83), ('<strong>BoforsOpened</strong>', 83)

Republic shoehorns BREAKING into a lot of their tweets, hence the top spot. Here also the tilt against Congress and Rahul is very apparent. There absolutely no negative hashtags about Modi in the top 50. Also, when it comes to the nation, our man does not muck about one bit.
<h3>Who is more popular a topic, Modi or Rahul?</h3>
Honestly, with all this coverage, it seems that these new channels are the ones keeping Rahul Gandhi and the Congress relevant. I made these graphs that support my findings.

<img class="shrinkToFit transparent" src="https://i.imgur.com/2s9jvyR.png" alt="https://i.imgur.com/2s9jvyR.png" width="677" height="724" /> <img class="transparent" src="https://i.imgur.com/eUeUUP9.png" alt="https://i.imgur.com/eUeUUP9.png" width="752" height="604" />

From these charts it is clear that Rahul is way more of person of interest as compared to Modi.

Week 42 and Week 46 are clear anomalies as Modi far outshine Rahul in those weeks. This can be justified by looking at what happened during those weeks.

<strong>Week 42: </strong>That was when PM Modi visited his home state of Gujarat and made some charectristically fiery speeches that captured quite a few headlines.

<strong>Week 46: </strong> This was when Moody bumped up our scores, which was widely covered. A lot of credit was given to Modi, hence he trended.

I was not able to figure out why week 45 was also a light spot. Week 47 owards was the election hype, with Rahul Gandhi given way more coverage. Republic practically used no Modi hastags during that period.

Overall, some mildly interesting facts were unearthed.
<h3>Common words and phrases.</h3>
N-grams are just sets of n continuous words. So, in "My name is Advait", the bigrams would be "My name", "name is", "is Advait". That's what they basically are.

I figure that finding the most common unigrams (ie., the most common words) and the most common bigrams in the data would be interesting. I went one step ahead and plotted them for viewing pleasure of y'all folk. Please not that I removed all stop words (words like 'is', 'a'. 'an' etc. They don't convey much meaning.) and punctuations to make the data more clear.
<p style="text-align: center;"><strong>Times Now - Most common words</strong></p>
<img class="aligncenter" src="https://i.imgur.com/tSUmoZC.png" width="1406" height="736" />
<p style="text-align: center;"><strong>Times Now most common bigrams.</strong></p>
<img class="aligncenter" src="https://i.imgur.com/9WPVUd6.png" width="1414" height="740" />

As far as most common singular word goes, BJP scores high with them, blazing past the likes of Congress and PM. Honestly, I did not find the unigrams to interesting as a single word does not convey too much meaning.

The bigrams are far more interesting. It is not very surprising that their most popular phrase is 'TIMES NOW', since everyone self promotes. Now here is the interesting bit, a close runners up is held by 'Rahul Gandhi', which is much much more than PM Modi. This just backs the fact that it is the new channels that give way too much attention to him.

Now lets replicate this for Republic TV.
<p style="text-align: center;"><strong>Republic</strong> <strong>TV most common words</strong></p>
<img class="aligncenter" src="https://i.imgur.com/5jBQvCk.png" width="1131" height="1210" />

Here again, I think the unigrams don't convey much, but I put it up anyway to fill in the pages. Here is the good stuff:

<img class="alignnone" src="https://i.imgur.com/hVlGN7N.png" alt="" width="1390" height="728" />

This is quite a bit more interesting than the previous graph. We can see many variations of 'send us your views', with the most popular one being "fire views"?

Also Sambit Patra seems to be super popular with this channel. Not surprising since he is a panel regular at the debates, and he and Arnab seem to know each other from his Times Now days.

Also unsurprising is the fact that Rahul Gandhi is the first non-promotional bigram that appears on the list. From all this it is easy to conclude that Rahul generates many clicks and TRP. In hindsight, I should have put his name in the title of this blog for more views.
<h3>F-scores and Stunning charts.</h3>
This is an interesting corpus. It would be nice to see what words make this corpus truly what it is, or more simply put what words and phrases are more characteristic of a category than others.

For finding terms of importance, a<a href="https://github.com/JasonKessler/scattertext#understanding-scaled-f-score"> scaled F-score</a> is being utilised. It basically is a method of finding out terms that are statistically significant as compared to other terms. After attaining all the F-scores, and finding term freequencies, this can be plotted:

<a href="https://i.imgur.com/SVTrz5Y.png"><img class="alignnone " src="https://i.imgur.com/fhD9Qly.png" width="1376" height="678" /></a>

Don't be intimidated by the beauty of this chart. It is very interesting, and not too hard to understand. At first glance though, I do admit it looks like one of those fancy meaningless ones you'd find in the annals of r/dataisbeautiful.

The y-axis is the frequency of a term as used by Times Now, and in the x-axis lies the term frequency of Republic TV.

For Republic TV, the most frequent, <em>but characteristic </em>term would be arnab. Wow, what a surprise. For more of these terms look at the bottom right of the chart to find other such terms.

On the flip side, we can see such terms used by Times Now on the top left corner of the chart. Here the theme of not deifying an anchor continues with the use of tnexlcusive over the name of a primetime anchor.

The top right of the chart is very interesting. These are the terms that are characteristic to both the Times Now dataset and the Republic TV data set. The most prominent terms in that region are debate (duh, because who does not like a good shout fest.) , Rahul (that theme continues) and bjp.

You can find more such interesting tidbits by actually interacting with the chart. I do have an interactive version, where you can find term occurences and search terms right<a href="https://ufile.io/ftem0"> here</a>.

On the right side, we find characteristic terms listed out for both Times Now and Republic TV.

We can see which new anchors are given priority over the other here in the Times Now list. Also, Dr Sambit is high on the characteristic-city of Republic, featuring prominently everywhere.

The "Characteristic" list are the characteristic terms of the both the datasets combined. There more Republic related terms here because of the simple fact that Republic tweets way more that Times Now. Also, they repeat themselves a lot. The usuals, 'rahul', 'modi', 'mallya' and 'patra' feature on this list. This is a fun graph, and if you actually download it from the link, note that it can take some time to load on your browser as it is a relatively large file (4.9 MB).
<h3>Retweets and Likes.</h3>
In this section I could not figure out how to present the data in any fancy way. Honestly, there isn't much in the data either. Here are some boring facts:
<h4>Republic TV</h4>
Total likes : 704150
Average likes : 50.955206599609234

Total retweets : 283275
Average retweets : 20.498950720023156

Tweets analyzed : 13819

<strong>Times Now</strong>

Total likes : 765255
Average likes : 66.52655828914196

Total retweets : 318855
Average retweets : 27.719290619838304

Tweets analyzed : 11503

From this it is evident that the social media outreach on twitter far exceeds that of Republic TV. Despite having over 2000 fewer tweets, Times now have many more likes <em>and </em>retweets than Republic TV. But we should not forget the fact that Times Now have many more followers on twitter as compared to Republic. There is quite the follower burn that is to be expected of an account that tweets so often. Also, most of their likes and retweets come from their top 150ish tweets. This is evident in these completely unecessary charts:

<img class="alignnone " src="https://i.imgur.com/VspSt1J.png" width="993" height="520" />

<img class="alignnone " src="https://i.imgur.com/PiDhPQH.png" width="917" height="480" />

<strong>Times Now</strong>

Let us have a look at their top five most like tweets:
<ol>
 	<li><strong>Rahul Gandhi could not even win municipal elections in his own constituency Amethi, says BJP president @AmitShah speaking with @navikakumar #FranklySpeakingWithShah </strong>3293 likes</li>
 	<li>"<strong>This protocol that PM cannot sit with a foreign pilot but can have a foreign wife, this, I don't understand: Sambit Patra, Spokesperson, BJP #Dec18WithTimesNow</strong>", 3086 likes</li>
 	<li>'<strong>6 hours after Gujarat loss, Rahul Gandhi was watching ‘Star Wars’ at a cinema hall in Delhi. #AreYouSeriousRahul Watch @thenewshour with @navikakumar</strong>, 2506 likes</li>
 	<li>"<strong>HARD FACT: 87% Christians in Mizoram have been given minority status despite Hindu's being at 2.75% #HinduRightsBoost</strong>", 2245 likes</li>
 	<li>'<strong>I would like PM to take lesson from this and set up a warlike council for fighting corruption: @Swamy39, BJP #UPANotGuilty</strong>', 2192 likes</li>
</ol>
3 out of the 5 tweets have a very clear anti-congress tilt, which makes sense as they are not a particularly popular party and have countless flaws. But we as a people are huge fans of whatboutisms.

These are their most retweeted tweets:
<ol>
 	<li> <strong>"HARD FACT: 87% Christians in Mizoram have been given minority status despite Hindu's being at 2.75% #HinduRightsBoost"</strong>, 2463</li>
 	<li><strong>'Big step to conflict resolution. ‘Positive of outcome soon’ #SriSriMandirMove, </strong> 1604</li>
 	<li>"<strong>This is how AAP responded to TIMES NOW's expose on #AAPHallOfShame</strong>", 1583</li>
 	<li>"<strong>Congress ally Jignesh Mewani tries wooing Muslim voters, asks crowd to chant Allah-Uh-Akbar but the crowd hits back with Modi Chants #AllahRamRaGa</strong>', 1334</li>
 	<li>'<strong>Hard Facts: 19:00 PM Modi conducted post-mortem on Gujarat election results; at 19:40, Rahul Gandhi watched Star Wars at a cinema hall #AreYouSeriousRahul'</strong>, 1210</li>
</ol>
I don't know what to make of this. Very pro incumbent government.

<strong>Republic TV</strong>

Most liked :
<ol>
 	<li><strong>"#AmitShahSpeaksToArnab | A significant portion of Gujarat was a dark zone. Now, it isn't. Narmada's waters are reaching many parts: Amit Shah</strong>", 2835</li>
 	<li>"<strong>#AmitShahSpeaksToArnab |I don't dismiss anybody. Every politician has their own standing in an election. But our track record speaks for itself and the Gujarat public will vote for us based on the work we have done: Amit Shah</strong>", 2812</li>
 	<li>"<strong>#AmitShahSpeaksToArnab | WATCH: Amit Shah on the Congress' 'Chaiwala' meme attack at the Prime Minister</strong> ", 2344</li>
 	<li><strong>'#CongNeechPolitics | Arnab: I want Rahul Gandhi to see this video and comment on it right now. How proud does this make you? @OfficeOfRG'</strong>, 2336</li>
 	<li>'<strong>WATCH the full #AmitShahSpeaksToArnab here</strong> [link]', 2134</li>
</ol>
Most Retweeted:
<ol>
 	<li><strong>'#CongNeechPolitics | Arnab: I want Rahul Gandhi to see this video and comment on it right now. How proud does this make you? @OfficeOfRG',</strong> 1660</li>
 	<li>'<strong>Where do you stand on the #FirecrackerDebate?</strong>', 1289</li>
 	<li><strong>"#RepublicWatchesPadmavati | We've watched Padmavati. Get the real story here"</strong>, 1229</li>
 	<li><strong>'#SoniaLetterLeaked | Proven: Sonia Gandhi interfered directly in the Tehelka investigation [link]'</strong>, 1119</li>
 	<li><strong>'#BiggestBoforsInterview | Watch how GujaratCongress Chief Bharatsinh Solanki manhandled Republic TV crew for asking questions on Bofors'</strong>, 1088</li>
</ol>
I always was of the opinion that the duty of the media was to keep the incumbent government on its toes, and bring to the forefront important stories that would bring a positive change to the citizens. These media houses don't seem to share my opinion.
<h3>Tweet frequencies and heatmaps</h3>
These are a few heatmaps I generated to find tweeting patterns of these channels.

First, I wanted to look at what days they tweeted the most. Here is a heatmap of their tweet frequencies over the days of the week for all twelve weeks of data:

<img class="alignnone size-medium" src="https://i.imgur.com/GDKmfPJ.png" width="960" height="1027" />

Week 51 Monday and Thursday were on fire for obvious reasons - Gujarat Elections. Other than that, it can be seen that on an average, their tweet frequency reduces as the week passes by.

Here are individual heatmaps. <strong>Note that week</strong> <strong>40 Mon and Tue data is missing for republic.</strong>

<img class="alignnone " src="https://i.imgur.com/amZ1dYt.png" width="608" height="650" />

<img class="alignnone " src="https://i.imgur.com/GDKmfPJ.png" width="743" height="795" />

We can notice that Republic TV tries to keep its tweet frequency constant (Also, they just tweet more), but the waning of tweet frequency is very evident in the Times now heat map. What would you do with this information? Nothing. This is very, I repeat very, useless information.

A nicer heatmap would be their distribution throughout the day over the week. Here is what I got:

<img class="alignnone size-medium" src="https://i.imgur.com/DPnhzXu.png" width="1366" height="715" />

They really up their tweet game in the 8PM to 12AM slot, because my man Arnab is on screen. There is a very steady increase in the number of tweets throughout the day. Their sunday afternoon slot is also pretty loaded because of their strong weekend programming game (like that Anupam Kher show).

<img class="alignnone size-medium" src="https://i.imgur.com/XkwEEMk.png" width="1366" height="715" />

&nbsp;

Their tweeting pattern is also extremely similar to that of Republic TV. Their lack of debates at weekend primetime slots is also evident. They do have a bright spot during the 12-2 slot on saturday which I am guessing is because they want to promote their show India Upfront.
<h2>The Grand Conclusion.</h2>
<strong>So what? What is so surprising?</strong>

Frankly, there is not much new here. The graphs look nice. I did try some sentiment analyses, but it was quite inaccurate and I had to toss that.

<strong>Why did I select Times Now and Republic?</strong>

They are loud channels who claim to be the best. They are what I would call the pioneers of the new age of crass journalism. Very peurile debates and little to no subtlety. Honestly, I hate these channels and their brand of journalism, so please do consider my biases in the article. Maybe I will do NDTV in the future.
<h1>If you liked what you read, please share this. Also, if you disliked or disagree with what you read, feel free to tell me why. I invite all sorts of constructive criticism.</h1>
&nbsp;

&nbsp;
