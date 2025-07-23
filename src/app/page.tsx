import Link from "next/link";
import { RiveAvatar } from "@/components/RiveAvatar";

const LandingPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 text-white">
      <div className="content">
        <div className="content__container">
          <p className="content__container__text">
            Hello
          </p>
          
          <ul className="content__container__list">
            <li className="content__container__list__item">world!</li>
            <li className="content__container__list__item">developers!</li>
            <li className="content__container__list__item">recruiters!</li>
            <li className="content__container__list__item">everyone!</li>
          </ul>
        </div>

      </div>
        <div className="flex justify-center">
          <Link href='/home' legacyBehavior>
            <div style={{ cursor: 'pointer' }}>
              <RiveAvatar 
                src="/rives/button.riv"
                width={220}
                height={220}
                stateMachine="State Machine 1"
                autoplay={true}
              />
            </div>
          </Link>
        </div>
    </div>
  );
}



export default LandingPage;
        