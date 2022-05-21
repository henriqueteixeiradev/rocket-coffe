import Link from 'next/link'
import React from 'react'

import * as S from './styled'

import { menuLinks } from 'mock/menuLinks'

export function LinksMobile() {
  return (
    <S.Content>
      <ul>
        {menuLinks.map((item) => (
          <li>
            <Link href={item.url}>
              <a>{item.label}</a>
            </Link>
          </li>
        ))}
      </ul>
    </S.Content>
  )
}
