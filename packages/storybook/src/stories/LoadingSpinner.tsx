export default function LoadingSpinner() {
  return (
    <div className="fixed left-0 top-0 z-[130000] h-full w-full bg-black bg-opacity-50">
      <div
        role="status"
        className="absolute left-1/2 top-1/2 h-[3px] w-[50px] -translate-x-1/2 -translate-y-1/2 transform lg:w-[70px]"
      >
        <div className="flex w-24 justify-center gap-[10px]">
          <div className="animate-loading h-4 w-4 rounded-full bg-white"></div>
          <div className="animate-loading2 h-4 w-4 rounded-full bg-white"></div>
          <div className="animate-loading3 h-4 w-4 rounded-full bg-white"></div>
        </div>
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  )
}
