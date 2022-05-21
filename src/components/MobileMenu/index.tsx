import React, { useState } from 'react'

import * as S from './styled'
import { CallToAction } from 'components/CallToAction'

import { logoRocketSeat } from 'svg/logoRocketSeat'
import { menuBurguerClose } from 'svg/menuBurgueClose'
import { menuBurguerOpen } from 'svg/menuBurguerOpen'
import { LinksMobile } from 'components/LinksMobile.tsx'

export function MobileMenu() {
  const [showLinks, setShowLinks] = useState(false)

  return (
    <S.Section>
      <S.MenuWrapper>
        {logoRocketSeat}
        <button onClick={() => setShowLinks(!showLinks)}>
          {showLinks ? menuBurguerClose : menuBurguerOpen}
        </button>
      </S.MenuWrapper>

      <S.InfoWrapper>
        <h1>O café que fará seu código decolar para o próximo nível.</h1>
        <CallToAction title="Pegar meu café" />
      </S.InfoWrapper>
      {showLinks && <LinksMobile />}
    </S.Section>
  )
}
