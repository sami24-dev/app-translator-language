import '@fontsource-variable/dm-sans'
import {IconCopy, IconHorizontalTop, IconSound} from './Icons'
export function CardReceiver() {
  return (
    <article className='card card__receiver'>
      <header className='card__receiver__header header'>
        <div className='header__wrapper'>
          <button className='header__button'>Detect Language</button>
          <button className='header__button'>English</button>
          <button className='header__button'>French</button>
          <button className='header__button header__button--open'>
            Spanish
          </button>
        </div>
        <button className='item__button item__button--hover'>
          <IconHorizontalTop />
        </button>
      </header>
      <main className='card__main'>
        <textarea
          className='main__textarea'
          name=''
          id=''
          cols={30}
          rows={10}
          placeholder='hello, how are you?'></textarea>
      </main>
      <footer className='card__footer footer'>
        <div className='footer__item item'>
          <button className='item__button item__button--hover'>
            <IconSound />
          </button>
          <button className='item__button item__button--hover'>
            <IconCopy />
          </button>
        </div>
        {/* <div className='footer__item footer__item--submit item'>
     <h4 className='item__caracters'>
      <span>19</span>
      <span>/500</span>
     </h4>
     <button className='item__button item__button--traduction'>
      <IconAlfa /> Translate
     </button>
    </div> */}
      </footer>
    </article>
  )
}
