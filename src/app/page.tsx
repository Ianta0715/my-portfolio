import Link from "next/link";


const LandingPage:React.FC = () => {

  return (
    <>
    <Link href="https://fonts.googleapis.com/css?family=Lato" rel="stylesheet"/>

<div className="content">
  <div className="content__container">
    <p className="content__container__text">
      Hello
    </p>
    
    <ul className="content__container__list">
      <li className="content__container__list__item">world !</li>
      <li className="content__container__list__item">bob !</li>
      <li className="content__container__list__item">users !</li>
      <li className="content__container__list__item">everybody !</li>
    </ul>
  </div>
</div>
<div>
  <Link href='/home'>
  <button className="redirect-button">Go to page</button>
  </Link>
</div>
    </>
  )
}

export default LandingPage;