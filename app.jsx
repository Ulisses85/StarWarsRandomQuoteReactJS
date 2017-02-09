
const App = React.createClass({
	// set initial state
  getInitialState: function () {
		return {
			quoteIndex: 1,
			quoteList: this.props.qlist
		}
	},

	quote: function () {
		return	this.state.quoteList[this.state.quoteIndex]
	},

			// handle click
	handleClick: function () {
		 var number = this.randomNum(this.state.quoteList.length)

		this.setState({quoteIndex: number},function () {
			console.log(this.state.quoteIndex)
		})
	},

	// randomizer
	randomNum: function (len) {
		return Math.floor(Math.random () * len);
	},

	//render
	render: function () {
		return (
			<div>
				<h1>{this.props.appName}</h1>
				{<Input handleClick={this.handleClick}/>}
				<h2>{this.quote()}</h2>
			</div>
		)
	}


})

const Input = React.createClass ({
	// render
	render: function () {
		return (
			<button onClick={this.props.handleClick} name='get quote button'>Draw The Force</button>
		)
	}
})

const QUOTEARRAY = [
  "Never tell me the odds!",
  "- Well, you said you wanted to be around when I made a mistake.<br>- I take it back!",
  "You do have your moments. Not many, but you have them.",
  "Ben! I can be a Jedi. Ben, tell him I'm ready!",
  "- I'm not afraid.<br>- You will be.",
  "Now, witness the power of this fully operational battle station.", "I have a bad feeling about this.",
  "Who's the more foolish; the fool, or the fool who follows him?",
  "That… is why you fail.",
  "That's no moon.",
  "Sorry about the mess.",
  "Ready are you? What know you of ready? For eight hundred years have I trained Jedi. My own counsel will I keep on who is to be trained. A Jedi must have the deepest commitment, the most serious mind. This one, a long time have I watched. All his life has he looked away… to the future, to the horizon. Never his mind on where he was. …Hmm? On what he was doing.",
  "If they follow standard Imperial procedure, they'll dump their garbage before they go to light-speed. Then we just… float away. ...with the rest of the garbage.",
  "Laugh it up, fuzzball!",
  "I never doubted you! Wonderful!",
  "You will never find a more wretched hive of scum and villainy. …We must be cautious.",
  "Would somebody get this big walking carpet out of my way?!",
  "No reward is worth this.",
  "I happen to like… nice men.",
  "We would be honored if you would join us.",
  "- So what I told you was true… from a certain point of view.<br>-…A certain point of view?!",
  "Your weapon… you will not need it.",
  "…Boring conversation anyway. Luke! We're gonna have company!",
  "Search your feelings.",
  "I'll never join you.",
  "- He certainly has courage.<br>-...Yeah, but what good is that if he gets himself killed?",
  "-…You've failed, your highness. I am a Jedi, as my father was before me.<br>-…So be it, Jedi.",
  "Only at the end do you realize the power of the Dark Side.",
  "It's not impossible. I used to bullseye womp rats in my T-16 back home, they're not much bigger than two meters.",
  "But how could they be jamming us if they don't know… that we're… coming?",
  "He is as clumsy as he is stupid!",
  "Strike me down, and I will become more powerful than you could possibly imagine.",
  "…It's not fair! They promised me they fixed it! It's not my fault!",
  "- You know, that little droid is going to cause me a lot of trouble.<br>-…Oh, he excels at that, sir.",
  "If you're saying that coming here was a bad idea, I'm starting to agree with you.",
  "For over a thousand generations, the Jedi were the guardians of peace and justice in the Old Republic — before the dark times. Before the Empire.",
  "Shut him up or shut him down.",
  "Give yourself to the Dark Side. It is the only way you can save your friends. Yes; your thoughts betray you. Your feelings for them are strong. Especially for your… sister. So, you have a twin sister. Your feelings have now betrayed her too. Obi-Wan was wise to hide her from me. Now, his failure is complete. If you will not turn to the Dark Side… then perhaps she will…",
  "I find your lack of faith disturbing.",
  "- Uh, we had a slight weapons malfunction, but uh… everything's perfectly all right now. We're fine. We’re all fine here now, thank you.<br>-Uh, how are you?",
  "You are a member of the rebel alliance, and a traitor.",
  "The circle is now complete.",
  "- Hey, I think my eyes are getting better. Instead of a big dark blur, I see a big bright blur.<br>-…There’s nothing to see. I used to live here, you know.<br>-…You’re gonna die here, you know. Convenient.",
  "Ungh. And I thought they smelled bad on the outside.",
  "- Would it help if I got out and pushed?!!<br>-...It might!",
  "You don't have to do this to impress me.",
  "Try not. Do… or do not. There is no try.",
  "Luminous beings are we, not this crude matter.",
  "All too easy.",
  "How you doin', Chewbecca? Still hanging around with this loser?",
  "- I assure you, Lord Vader. My men are working as fast as they can.<br>-…Perhaps I can find new ways to motivate them.",
  "Apology accepted, Captain Needa.",
  "You’ll find I’m full of surprises!",
  "Yeah… you’re a real hero.",
  "A Jedi Knight? Jeez, I’m out of it for a little while, everyone gets delusions of grandeur!",
  "- I’m Luke Skywalker? I’m here to rescue you!<br>-…You’re who?",
  "Keep your distance, Chewie, but don’t, y’know, look like you’re keeping your distance....I don’t know. Fly casual.",
  "What have you done?! I’m BACKWARDS.",
  "You will find that it is you who are mistaken… about a great many things.",
  "Only a master of evil, Darth.",
  "We seem to be made to suffer. It’s our lot in life.",
  "It’s against my programming to impersonate a deity.",
  "These aren’t the droids you’re looking for.",
  "Aren’t you a little short for a Stormtrooper?",
  "Wait. I know that laugh…",
  "This is some rescue!",
  "He’s the brains, sweetheart!",
  "You are unwise to lower your defenses!",
  "Boy, it’s lucky you have these compartments!",
  "Travelling through hyperspace ain’t like dustin’ crops, boy!",
  "You would prefer another target? A military target? Then name the system!",
  "R2-D2, you know better than to trust a strange computer!",
  "- Luke, you switched off your targeting computer — what’s wrong?<br>-…Nothing! I’m all right.",
  "So, what do you think? You think a princess and a guy like me?",
  "I want them alive — no disintegrations!",
  "I’ve just made a deal that will keep the Empire out of here forever.",
  "I have you now!",
  "I saw… a city in the clouds.",
  "Told you I did. Reckless is he. …Now, matters are worse.",
  "- That boy is our last hope.<br>- No. There is another.",
  "So, who talks first? Do you talk first?",
  "I know all about waiting. For my family. They’ll be back. Some day.",
  "I am with the Resistance. This is what we look like. Some of us look different.",
  "That one’s garbage!",
  "The garbage will do.",
  "Chewie. We’re home.",
  "It’s true. All of it. The Dark Side. The Jedi. They’re real.",
  "If you live long enough, you see the same eyes in different people.",
  "Luke is a Jedi. You’re his father.",
  "You will remove these restraints and leave this cell with the door open.",
  "That’s not how The Force works!",
  "Is there a garbage chute? Trash compactor?"
];

ReactDOM.render(
	<App qlist={QUOTEARRAY} appName ='Star Wars Quote Generator'/>,
	document.getElementById('app')
);
