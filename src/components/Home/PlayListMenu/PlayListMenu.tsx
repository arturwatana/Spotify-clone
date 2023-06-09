import PlaylistCard from "../../PlayListCard/PlayListCard";

import peacefulPiano from "../../../assets/PeacefulPiano.png";
import deepFocus from "../../../assets/DeepFocus.png";
import instrumentalStudy from "../../../assets/InstrumentalStudy.png";
import focusFlow from "../../../assets/FocusFlow.png";
import beatsToThinkTo from "../../../assets/BeatsToThinkTo.png";
import readingAdventure from "../../../assets/ReadingAdventure.png";
import relaxingReading from "../../../assets/RelaxingReading.png";
import quietMoment from "../../../assets/quietmoment.png";
import workDayLounge from "../../../assets/WorkDayLounge.png";

import tdh from "../../../assets/tdh.png";
import rapCaviar from "../../../assets/RapCaviar.png";
import allOut2010 from "../../../assets/Allout2010.png";
import rockClassics from "../../../assets/RockClassics.png";
import chillHits from "../../../assets/ChillHits.png";
import vivaLatino from "../../../assets/VivaLatino.png";
import megaHit from "../../../assets/MegaHit.png";
import allOut80 from "../../../assets/Allout80s.png";

export default function PlayListMenu() {
  return (
    <div className="pl-8 pt-4 bg-primary ml-57 w-full mt-16 fixed h-full">
      <div className="text-white">
        <h1 className="text-2xl font-bold">Foco</h1>
        <div className="pl-3 pt-6 flex gap-6">
          <PlaylistCard
            img={peacefulPiano}
            name="Peaceful Piano"
            description="Peaceful piano to help you slow down, breath and relax"
          />
          <PlaylistCard
            img={deepFocus}
            name="Deep Focus"
            description="Keep calm and focus with ambient and post-rock music."
          />
          <PlaylistCard
            img={instrumentalStudy}
            name="Instrumental Study"
            description="Focus with soft study music in the background."
          />
          <PlaylistCard
            img={workDayLounge}
            name="Workday Lounge"
            description="Lounge and chill out music for your workday."
          />
          <PlaylistCard
            img={focusFlow}
            name="Focus Flow"
            description="Uptempo instrumental hip hop beats."
          />
          <PlaylistCard
            img={beatsToThinkTo}
            name="Beats To Think To"
            description="Focus with deep techno and tech house."
          />
          <PlaylistCard
            img={readingAdventure}
            name="Reading Adventure"
            description="Scores and soundtracks for daring quests, epic journeys, and the greatest reading adventures."
          />
          <PlaylistCard
            img={relaxingReading}
            name="Relaxing Reading"
            description="Gentle instrumental music to help you relax while you read."
          />
          <PlaylistCard
            img={quietMoment}
            name="Quiet Moment"
            description="Gentle classical music to help you relax and reflect."
          />
        </div>
      </div>
      <div className="text-white mt-8">
        <h1 className="text-2xl font-bold">Playlists do Spotify</h1>
        <div className="pl-3 pt-6 flex gap-6">
          <PlaylistCard
            img={tdh}
            name="Today`s Top Hits"
            description="Taylor Swift is on top of the Hottest 50!"
          />
          <PlaylistCard
            img={rapCaviar}
            name="RapCaviar"
            description="New music from Moneybagg Yo, Gunna and Metro Boomin."
          />
          <PlaylistCard
            img={allOut2010}
            name="All Out 2010s"
            description="The biggest songs of the 2010s."
          />
          <PlaylistCard
            img={rockClassics}
            name="Rock Classics"
            description="Rocks legends & epic songs that continue to inspire generations. Cover: Foo Fighters"
          />
          <PlaylistCard
            img={chillHits}
            name="Chill Hits"
            description="Kick bakc to the best new and recent chill hits."
          />
          <PlaylistCard
            img={vivaLatino}
            name="Viva Latino"
            description="Today`s top Latin hits, elevando nuestra música. Cover: Bizarrap & Peso Pluma"
          />
          <PlaylistCard
            img={megaHit}
            name="Mega Hit Mix"
            description="A mega mix of 75 favorites from the last few years!."
          />
          <PlaylistCard
            img={allOut80}
            name="All Out 80s"
            description="The biggest songs of the 1980s."
          />
        </div>
      </div>
    </div>
  );
}
