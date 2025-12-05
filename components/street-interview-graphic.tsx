import { Mic, Smartphone, MessageSquare, User } from "lucide-react"

export function StreetInterviewGraphic() {
  return (
    <div className="relative w-64 h-64 md:w-80 md:h-80 mx-auto mb-8 animate-float">
      {/* Background Circle */}
      <div className="absolute inset-0 bg-[#FFE500] rounded-full opacity-20 blur-3xl"></div>
      
      {/* Smartphone Frame */}
      <div className="absolute inset-0 flex items-center justify-center z-10">
        <div className="relative w-32 h-56 bg-black border-4 border-white rounded-2xl shadow-[8px_8px_0px_0px_#FFE500] overflow-hidden flex flex-col items-center justify-center transform -rotate-6">
          {/* Screen Content */}
          <div className="absolute top-2 w-8 h-1 bg-zinc-800 rounded-full"></div>
          <User className="w-16 h-16 text-zinc-700 mb-2" />
          <div className="flex gap-1">
            <MessageSquare className="w-4 h-4 text-[#FFE500] fill-current" />
            <MessageSquare className="w-4 h-4 text-white fill-current" />
          </div>
          {/* Recording Dot */}
          <div className="absolute top-4 right-4 w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
        </div>
      </div>

      {/* Hand with Microphone */}
      <div className="absolute bottom-0 right-0 md:right-4 z-20 transform translate-y-4 translate-x-4 md:translate-x-0">
        <div className="relative">
            {/* Microphone Head */}
            <div className="w-12 h-16 bg-zinc-800 border-4 border-white rounded-full flex items-center justify-center z-20 relative">
                <div className="w-full h-full opacity-20 bg-[radial-gradient(circle_at_center,_white_1px,_transparent_1px)] bg-[length:4px_4px]"></div>
            </div>
            {/* Microphone Handle */}
            <div className="w-6 h-20 bg-black border-4 border-white -mt-2 mx-auto z-10 relative rounded-b-lg"></div>
            {/* Hand (Abstract) */}
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-6 w-20 h-24 bg-[#FFE500] border-4 border-white rounded-xl -z-10 rotate-12"></div>
        </div>
      </div>

      {/* Floating Speech Bubbles */}
      <MessageSquare className="absolute top-10 left-4 w-12 h-12 text-white fill-black border-2 border-white rounded-lg transform -rotate-12 animate-bounce z-30" />
      <div className="absolute top-20 right-0 w-16 h-12 bg-[#FFE500] border-4 border-black flex items-center justify-center z-0 transform rotate-12">
        <span className="text-black font-black text-xs">WOW!</span>
      </div>
    </div>
  )
}
