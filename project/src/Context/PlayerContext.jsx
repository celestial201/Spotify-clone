import { createContext, useEffect, useRef, useState } from "react";
import { songsData } from "../assets/assets";

export const PlayerContext = createContext();

const PlayerContextProvider = (props) => {

  const audioRef = useRef();
  const seekBg = useRef();
  const seekBar = useRef();

  const [track, setTrack] = useState(songsData[0]);
  const [playStatus, setPlaystatus] = useState(false);

  const [time, setTime] = useState({
    currentTime: { second: 0, minute: 0 },
    totalTime: { second: 0, minute: 0 }
  });

  const play = () => {
    audioRef.current.play();
    setPlaystatus(true);
  };

  const pause = () => {
    audioRef.current.pause();
    setPlaystatus(false);
  };

const playWithId=async (id)=>{
    await setTrack(songsData[id]);
    await audioRef.current.play();
    setPlaystatus(true);

}

const previous = async ()=>{
    if(track.id>0){
        await setTrack(songsData[track.id-1]);
        await audioRef.current.play();
        setPlaystatus(true);
    }
}


const next = async ()=>{
    if(track.id<songsData.length-1){
        await setTrack(songsData[track.id+1]);
        await audioRef.current.play();
        setPlaystatus(true);
    }
}

const seekSong = async (e) => {
  if (!audioRef.current || !seekBg.current) return;
  audioRef.current.currentTime =
    (e.nativeEvent.offsetX / seekBg.current.offsetWidth) * audioRef.current.duration;
};
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio || !seekBar.current) return; // safeguard

    // initial width
    seekBar.current.style.width = (Math.floor(audio.currentTime / audio.duration * 100) || 0) + "%";

    // function to update the bar
    const updateSeek = () => {
      const currentTime = audio.currentTime;
      const duration = audio.duration || 1; // prevent division by 0
      if (seekBar.current) {
        seekBar.current.style.width = (Math.floor(currentTime / duration * 100) || 0) + "%";
      }
      setTime(prevTime => ({
        ...prevTime,
        currentTime: {
          minute: Math.floor(currentTime / 60),
          second: Math.floor(currentTime % 60)
        },
        totalTime: {
          minute: Math.floor(duration / 60),
          second: Math.floor(duration % 60)
        }
      }));
    };

    



    audio.addEventListener("timeupdate", updateSeek);

    return () => audio.removeEventListener("timeupdate", updateSeek);

  }, []);

  const contextValue = {
    audioRef,
    seekBg,
    seekBar,
    track,
    setTrack,
    playStatus,
    time,
    setTime,
    play,
    pause,
    playWithId,
    previous,next,seekSong
  };

  return (
    <PlayerContext.Provider value={contextValue}>
      {props.children}
    </PlayerContext.Provider>
  );
};

export default PlayerContextProvider;
