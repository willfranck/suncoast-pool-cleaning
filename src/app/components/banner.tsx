export default function Banner() {
  function resizeBackground() {
    if (typeof document !== 'undefined') {
      const bannerElement = document.querySelector('.banner') as HTMLElement
    
      const currentWidth = parseInt(bannerElement.style.width, 10) || 0
      bannerElement.style.width = `${currentWidth + 60}px`
    }
  }
  resizeBackground()
  

  return (
    <article className='banner relative w-full h-[35rem] md:h-[45rem] lg:h-[60rem]'>
      
    </article>
  )
}
