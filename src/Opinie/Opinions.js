import React from 'react'
import OpinionItem from './OpinionItem';
import './Opinions.css'

function Opinions() {
  return (
    <div className='opinions'>
      <h1>Przeczytaj opinie moich pacjentów!</h1>
      <div className='opinions__container'>
        <div className='opinions__wrapper'>
          <ul className='opinions__items'>
            <OpinionItem
              text='Współpracuję z Mają już długi czas i jestem za każdym razem zachwycona efektami Jej magii!
              Doskonałe wyczucie, swodobna atmosfera spotkań, elastyczność i skupienie na pacjencie, siła w rękach poparta ogromem wiedzy i doświadczenia. W dodatku notatki z każdej wizyty, które budzą zachwyt lekarzy :)
              Polecam serdecznie, Maja każdego postawi na nogi (i głowę! I nerwy! I całe ciało!) :)'
              author='Kati Stagrońska'
              path='/services'
            />
            <OpinionItem
             text='Ogromna wiedza i fajny kontakt z pacjentem. Doceniam to, że dostałem zadania domowe, które z łatwością mogę wykonać i co najważniejsze działają. Maja ma niesztampowe i szerokie spojrzenie na ciało i problem z nim związany co pozwala lepiej pomóc. Z czystym sumieniem gorąco polecam wizytę!!!'
             author='S.P'
             path='/services'
            />
          </ul>
          <ul className='opinions__items'>
            <OpinionItem
              text='Maja od razu potrafi nawiązać bardzo dobry kontakt z pacjetem, stworzyć atmosferę sprzyjajacą wzajemnemu zaufaniu. W trakcie spotkań otrzymałam nie tylko skuteczą pomoc, ale dużo pomocnych informacji, które są wsparciem w leczeniu. Wszystkie działania ze strony fizjoterapeuty były mi tłumaczone na bieżąco i w jasny sposób. Polecam :)'
              author='Kasia'
              path='/services'
            />
            <OpinionItem
              text='Jestem zaskoczona skutecznością zabiegu. Pani Maja jest bardzo profesjonalna, ma dużą wiedzę, podchodzi do problemu holistycznie.
              z całego serca polecam !'
              author='danuta-g'
              path='/services'
            />
            <OpinionItem
              text='Polecam wizytę u Mai z całego serca! Jej niestandardowe podejście uwolniło mnie od wieloletnich problemów. Na wizycie panuje przyjazna atmosfera, a Maja dokładnie bada i dobiera terapie. Serdecznie polecam'
              author='Kamil Wolak'
              path='/services'
            />
          </ul>
          </div>
        </div>
      </div>
  );
}

export default Opinions