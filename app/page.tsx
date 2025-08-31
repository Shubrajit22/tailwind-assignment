export default function Home() {
  return (
    <div className="w-full  min-h-screen bg-gradient-to-b from-neutral-900 to-neutral-900 mx-auto flex flex-col items-center justify-center p-4">
      <div className="w-4xl h-100 bg-neutral-600 rounded-xl  mx-auto  perspective-[1000px]  ">
        <div className="perspective-[1000px] flex flex-wrap">
          <button
            className="ml-2 bg-neutral-900 text-neutral-100 w-[100px] h-14 mt-2 rounded-xl shadow-2xl shadow-neutral-100 border border-neutral-400  
    cursor-pointer text-left px-2 py-6
    transform transition-all duration-300 ease-out hover:scale-95 hover:shadow-neutral-600"
          >
            <span className="w-full">esc</span>
          </button>

          {[
            "F1",
            "F2",
            "F3",
            "F4",
            "F5",
            "F6",
            "F7",
            "F8",
            "F9",
            "F10",
            "F11",
            "F12",
          ].map((label, i) => (
            <button
              key={i}
              className="ml-1 bg-neutral-900 text-neutral-100 w-[60px] h-14 mt-2 rounded-xl shadow-2xl shadow-neutral-100 border border-neutral-400  
        cursor-pointer transform transition-all duration-300 ease-out hover:scale-95  hover:shadow-neutral-600"
            >
              {label}
            </button>
          ))}
          {["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "-", "="].map(
            (label, i) => (
              <button
                key={i}
                className="ml-1 bg-neutral-900 text-neutral-100 w-[60px] h-14 mt-2 rounded-xl shadow-2xl shadow-neutral-100 border border-neutral-400  
        cursor-pointer transform transition-all duration-300 ease-out hover:scale-95  hover:shadow-neutral-600"
              >
                {label}
              </button>
            )
          )}
          <button
            className="ml-2 bg-neutral-900 text-neutral-100 w-[100px] h-14 mt-2 rounded-xl shadow-2xl shadow-neutral-100 border border-neutral-400  
    cursor-pointer text-right  py-6 px-1
    transform transition-all duration-300 ease-out hover:scale-95 hover:shadow-neutral-600"
          >
            <span className="w-[125px] py-6 px-2">delete</span>
          </button>
          <button
            className="ml-2 bg-neutral-900 text-neutral-100 w-[100px] h-14 mt-2 rounded-xl shadow-2xl shadow-neutral-100 border border-neutral-400  
  cursor-pointer text-left px-2 py-6
  transform transition-all duration-300 ease-out hover:scale-95 hover:shadow-neutral-600"
          >
            <span className="w-full">tab</span>
          </button>

          {["Q", "W", "E", "R", "T", "V", "U", "I", "O", "P", "[", "]"].map(
            (label, i) => (
              <button
                key={i}
                className="ml-1 bg-neutral-900 text-neutral-100 w-[60px] h-14 mt-2 rounded-xl shadow-2xl shadow-neutral-100 border border-neutral-400  
      cursor-pointer transform transition-all duration-300 ease-out hover:scale-95 hover:shadow-neutral-600"
              >
                {label}
              </button>
            )
          )}
          <button
            className="ml-2 bg-neutral-900 text-sm text-neutral-100 w-[100px] h-14 mt-2 rounded-xl shadow-2xl shadow-neutral-100 border border-neutral-400  
  cursor-pointer text-left px-3 py-6 *:
  transform transition-all duration-300 ease-out hover:scale-95 hover:shadow-neutral-600"
          >
            caps lock
          </button>

          {["A", "S", "D", "F", "G", "H", "J", "K", "L", ":", "'", "enter"].map(
            (label, i) => (
              <button
                key={i}
                className={`ml-1 bg-neutral-900 text-neutral-100 ${
                  label === "enter"
                    ? "w-[120px] text-right py-6 px-2"
                    : "w-[56px]"
                } h-14 mt-2 rounded-xl shadow-2xl shadow-neutral-100 border border-neutral-400   
      cursor-pointer transform transition-all duration-300 ease-out hover:scale-95 hover:shadow-neutral-600`}
              >
                {label}
              </button>
            )
          )}

          <button
            className="ml-2 bg-neutral-900 text-neutral-100 w-[120px] h-14 mt-2 rounded-xl shadow-2xl shadow-neutral-100 border border-neutral-400  
  cursor-pointer text-left px-3
  transform transition-all duration-300 ease-out hover:scale-95 hover:shadow-neutral-600"
          >
            shift
          </button>

          {["z", "x", "c", "v", "b", "n", "m", ",", ".", "/"].map(
            (label, i) => (
              <button
                key={i}
                className="ml-1 bg-neutral-900 text-neutral-100 w-[60px] h-14 mt-2 rounded-xl shadow-2xl shadow-neutral-100 border border-neutral-400  
      cursor-pointer transform transition-all duration-300 ease-out hover:scale-95 hover:shadow-neutral-600"
              >
                {label}
              </button>
            )
          )}

          <button
            className="ml-1 bg-neutral-900 text-neutral-100 w-[120px] h-14 mt-2 rounded-xl shadow-2xl shadow-neutral-100 border border-neutral-400  
  cursor-pointer text-left px-3
  transform transition-all duration-300 ease-out hover:scale-95 hover:shadow-neutral-600"
          >
            shift
          </button>

          <button
            className="ml-2 bg-neutral-900 text-neutral-100 w-[80px] h-14 mt-2 rounded-xl shadow-2xl shadow-neutral-100 border border-neutral-400 
   cursor-pointer text-center
  transform transition-all duration-300 ease-out hover:scale-95 hover:shadow-neutral-600"
          >
            ctrl
          </button>

          <button
            className="ml-1 bg-neutral-900 text-neutral-100 w-[60px] h-14 mt-2 rounded-xl shadow-2xl shadow-neutral-100 border border-neutral-400 
   cursor-pointer text-center
  transform transition-all duration-300 ease-out hover:scale-95 hover:shadow-neutral-600"
          >
            fn
          </button>

          <button
            className="ml-1 bg-neutral-900 text-neutral-100 w-[60px] h-14 mt-2 rounded-xl shadow-2xl shadow-neutral-100 border border-neutral-400 
   cursor-pointer text-center
  transform transition-all duration-300 ease-out hover:scale-95 hover:shadow-neutral-600"
          >
            ⌘
          </button>

          <button
            className="ml-1 bg-neutral-900 text-neutral-100 w-[60px] h-14 mt-2 rounded-xl shadow-2xl shadow-neutral-100 border border-neutral-400 
   cursor-pointer text-center
  transform transition-all duration-300 ease-out hover:scale-95 hover:shadow-neutral-600"
          >
            alt
          </button>

          <button
            className="ml-1 bg-neutral-900 text-neutral-100 w-[300px] h-14 mt-2 rounded-xl shadow-2xl shadow-neutral-100 border border-neutral-400 
   cursor-pointer text-center
  transform transition-all duration-300 ease-out hover:scale-95 hover:shadow-neutral-600"
          >
            space
          </button>

          <button
            className="ml-1 bg-neutral-900 text-neutral-100 w-[60px] h-14 mt-2 rounded-xl shadow-2xl shadow-neutral-100 border border-neutral-400 
   cursor-pointer text-center
  transform transition-all duration-300 ease-out hover:scale-95 hover:shadow-neutral-600"
          >
            alt
          </button>

          <button
            className="ml-1 bg-neutral-900 text-neutral-100 w-[80px] h-14 mt-2 rounded-xl shadow-2xl shadow-neutral-100 border border-neutral-400 
   cursor-pointer text-center
  transform transition-all duration-300 ease-out hover:scale-95 hover:shadow-neutral-600"
          >
            ctrl
          </button>
          <button
            className="ml-1 bg-neutral-900 text-neutral-100 w-[80px] h-14 mt-2 rounded-xl shadow-2xl shadow-neutral-100 border border-neutral-400 
   cursor-pointer text-center
  transform transition-all duration-300 ease-out hover:scale-95 hover:shadow-neutral-600"
          >
            option
          </button>
          <button
            className="ml-1 bg-neutral-900 text-neutral-100 w-[60px] h-14 mt-2 rounded-xl shadow-2xl shadow-neutral-100 border border-neutral-400 
   cursor-pointer text-center
  transform transition-all duration-300 ease-out hover:scale-95 hover:shadow-neutral-600"
          >
            fn
          </button>
        </div>
        
      </div>
       <div >
        <p className="text-slate-200 mt-6">Built with Tailwind CSS only.</p>
        <p className="text-slate-200 mt-2 text-center">by <a href="https://x.com/shubro_22" className="text-blue-500"> @shubro_22</a></p>
       </div>
     
      
    </div>
  );
}
