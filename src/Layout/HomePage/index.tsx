import React from 'react'

import { NavMenu } from 'components/NavMenu'
import { HeadLine } from 'components/HeadLine'
import { Cups } from 'components/Cups'
import { MobileMenu } from 'components/MobileMenu'

import * as S from './styled'

export function HomePage() {
  return (
    <S.Main>
      <NavMenu />
      <MobileMenu />
      <HeadLine />
      <Cups />
    </S.Main>
  )
}
