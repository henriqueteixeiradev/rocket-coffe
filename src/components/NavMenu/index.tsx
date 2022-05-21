import React from 'react'
import Link from 'next/link'

import * as S from './styled'

import { logo } from 'svg/logo'

import { menuLinks } from 'mock/menuLinks'
import { CallToAction } from 'components/CallToAction'

export function NavMenu() {
  return (
    <S.Content>
      {logo}

      <S.NavWrapper>
        {menuLinks.map((item) => (
          <li key={item.label}>
            <Link href={item.url}>
              <a>{item.label}</a>
            </Link>
          </li>
        ))}
      </S.NavWrapper>

      <CallToAction title="pegar meu café" />
    </S.Content>
  )
}
