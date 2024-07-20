function Logo(props) {
  const handleToggleMenu = (e) => {
    if(e.currentTarget.id)
      props.menuChange(e.currentTarget.id)
  }
    return (
      <div 
        className='flex flex-row gap-1 font-bold text-sm md:text-2xl relative w-[18rem] md:p-8 p-4'
        onMouseDownCapture={handleToggleMenu}
        id="home"
      >
        <span className="letter">I</span>
        <span className="letter">n</span>
        <span className="letter">z</span>
        <span className="letter">a</span>
        <span className="letter">n</span>
        <span className="letter">e</span>


        <span className="letter">f</span>
        <span className="letter">o</span>
        <span className="letter">l</span>
        <span className="letter">i</span>
        <span className="letter">o</span>
        
      </div>
    )
}
export default Logo 