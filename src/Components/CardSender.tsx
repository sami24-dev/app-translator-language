import {IconAlfa, IconCopy, IconSound} from './Icons'
export function CardSender() {
  return (
    <article className='card'>
      <header className='card__header header'>
        <button className='header__button'>Detect Language</button>
        <button className='header__button'>English</button>
        <button className='header__button'>French</button>
        <button className='header__button header__button--open'>Spanish</button>
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
        <div className='footer__item footer__item--submit item'>
          <h4 className='item__caracters'>
            <span>19</span>
            <span>/500</span>
          </h4>
          <button className='item__button item__button--traduction'>
            <IconAlfa /> Translate
          </button>
        </div>
      </footer>
    </article>
  )
}
