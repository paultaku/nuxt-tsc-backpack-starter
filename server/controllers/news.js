const news = {
    content : `ISLE OF MAN – Microgaming presents Fortunium, created by Stormcraft Studios, a new independent game studio that will be supplying exclusive content to Microgaming.

    Made up of industry pioneers with decades of experience and a legacy of commercial success, Stormcraft Studios is dedicated to crafting epic gaming content which will be available exclusively to Microgaming operators.
    
    Microgaming proudly presents Fortunium, a five by five reel, steampunk themed slot, and the first official release under the new Stormcraft Studios brand. Loaded with thrilling features brought to life by stunning artwork, the thriving metropolis of Fortunium is the ultimate destination for innovators and entrepreneurs seeking acclaim and fortune.
    
    Welcoming players to the city are its famous founders, Victoria, expert navigator and acclaimed explorer, and Maximillian, industrious inventor of mechanical marvels. Both characters can appear as super stacked symbols in the game, vividly portrayed in portrait mode with incredible graphics that have been finely tuned to give players a premium mobile experience.
    
    Opulence and opportunity await in base game, where super stacked Mystery Symbols can reveal a random wild, low or high symbol, granting players the chance to win big across multiple lines.
    
    Daring explorers can upgrade Mystery Symbols with the Win Booster™ device. When activated, the feature will increase the player’s wager by 50% and turn the Mystery Symbols into only high and wild symbols. Boosted Mystery Symbols will carry over into free spins, where they will remain boosted throughout the round.
    
    Fortunium’s soaring skyline provides the backdrop in free spins, which can contain up to three Mystery Reels™. These special reels are loaded with never-ending stacks of Mystery Symbols that can appear on every spin. Landing scatters during the feature will extend the free spins experience, giving players the opportunity to supercharge their rewards.
    
    Hidden fortunes await in the golden city of Fortunium, which is now live on all platforms`,
    title : `Full steam ahead for Fortunium!`,
    date : `2018 Jun. 20`,
    comments : [{
        content : `“It is a very exciting time for us, with the release of our first official Stormcraft Studios game. Microgaming did an amazing job of launching Fortunium at ICE Totally Gaming in London earlier this year, which has created quite a buzz of expectation
    in the industry. There has been a very positive response to our prioritising of the portrait play experience on mobile, which we believe is a key differentiator for our studio.”`,
        author : {
            name: `Terence Igesund`,
            title: `Creative Director at Stormcraft Studios`
        }
    },
    {
        content : `“It is a very exciting time for us, with the release of our first official Stormcraft Studios game. Microgaming did an amazing job of launching Fortunium at ICE Totally Gaming in London earlier this year, which has created quite a buzz of expectation
    in the industry. There has been a very positive response to our prioritising of the portrait play experience on mobile, which we believe is a key differentiator for our studio.”`,
        author : {
            name: `Terence Igesund`,
            title: `Creative Director at Stormcraft Studios`
        }
    }
    ]
}

const router = require('koa-router')()
router.get('/index', async function (ctx, next) {
    ctx.body = 'hello'
})

router.post('/getnews', async function (ctx, next){
    console.log(ctx.request.body)
    ctx.body = news
})
  
module.exports = router